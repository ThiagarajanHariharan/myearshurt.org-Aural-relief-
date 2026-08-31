(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fd={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function $S(){if(qg)return Yo;qg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=e,Yo.jsx=i,Yo.jsxs=i,Yo}var jg;function ey(){return jg||(jg=1,fd.exports=$S()),fd.exports}var w=ey(),dd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function ty(){if(Yg)return pt;Yg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function T(b){return b===null||typeof b!="object"?null:(b=g&&b[g]||b["@@iterator"],typeof b=="function"?b:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,y={};function x(b,V,fe){this.props=b,this.context=V,this.refs=y,this.updater=fe||A}x.prototype.isReactComponent={},x.prototype.setState=function(b,V){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,V,"setState")},x.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function I(){}I.prototype=x.prototype;function G(b,V,fe){this.props=b,this.context=V,this.refs=y,this.updater=fe||A}var N=G.prototype=new I;N.constructor=G,D(N,x.prototype),N.isPureReactComponent=!0;var F=Array.isArray;function U(){}var P={H:null,A:null,T:null,S:null},M=Object.prototype.hasOwnProperty;function O(b,V,fe){var Se=fe.ref;return{$$typeof:r,type:b,key:V,ref:Se!==void 0?Se:null,props:fe}}function Y(b,V){return O(b.type,V,b.props)}function H(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function j(b){var V={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(fe){return V[fe]})}var he=/\/+/g;function ae(b,V){return typeof b=="object"&&b!==null&&b.key!=null?j(""+b.key):V.toString(36)}function J(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(U,U):(b.status="pending",b.then(function(V){b.status==="pending"&&(b.status="fulfilled",b.value=V)},function(V){b.status==="pending"&&(b.status="rejected",b.reason=V)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function z(b,V,fe,Se,Ee){var Z=typeof b;(Z==="undefined"||Z==="boolean")&&(b=null);var oe=!1;if(b===null)oe=!0;else switch(Z){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(b.$$typeof){case r:case e:oe=!0;break;case S:return oe=b._init,z(oe(b._payload),V,fe,Se,Ee)}}if(oe)return Ee=Ee(b),oe=Se===""?"."+ae(b,0):Se,F(Ee)?(fe="",oe!=null&&(fe=oe.replace(he,"$&/")+"/"),z(Ee,V,fe,"",function(ke){return ke})):Ee!=null&&(H(Ee)&&(Ee=Y(Ee,fe+(Ee.key==null||b&&b.key===Ee.key?"":(""+Ee.key).replace(he,"$&/")+"/")+oe)),V.push(Ee)),1;oe=0;var pe=Se===""?".":Se+":";if(F(b))for(var Ne=0;Ne<b.length;Ne++)Se=b[Ne],Z=pe+ae(Se,Ne),oe+=z(Se,V,fe,Z,Ee);else if(Ne=T(b),typeof Ne=="function")for(b=Ne.call(b),Ne=0;!(Se=b.next()).done;)Se=Se.value,Z=pe+ae(Se,Ne++),oe+=z(Se,V,fe,Z,Ee);else if(Z==="object"){if(typeof b.then=="function")return z(J(b),V,fe,Se,Ee);throw V=String(b),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return oe}function X(b,V,fe){if(b==null)return b;var Se=[],Ee=0;return z(b,Se,"","",function(Z){return V.call(fe,Z,Ee++)}),Se}function ie(b){if(b._status===-1){var V=b._result;V=V(),V.then(function(fe){(b._status===0||b._status===-1)&&(b._status=1,b._result=fe)},function(fe){(b._status===0||b._status===-1)&&(b._status=2,b._result=fe)}),b._status===-1&&(b._status=0,b._result=V)}if(b._status===1)return b._result.default;throw b._result}var _e=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},B={map:X,forEach:function(b,V,fe){X(b,function(){V.apply(this,arguments)},fe)},count:function(b){var V=0;return X(b,function(){V++}),V},toArray:function(b){return X(b,function(V){return V})||[]},only:function(b){if(!H(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return pt.Activity=_,pt.Children=B,pt.Component=x,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=G,pt.StrictMode=s,pt.Suspense=m,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pt.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},pt.cache=function(b){return function(){return b.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(b,V,fe){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Se=D({},b.props),Ee=b.key;if(V!=null)for(Z in V.key!==void 0&&(Ee=""+V.key),V)!M.call(V,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&V.ref===void 0||(Se[Z]=V[Z]);var Z=arguments.length-2;if(Z===1)Se.children=fe;else if(1<Z){for(var oe=Array(Z),pe=0;pe<Z;pe++)oe[pe]=arguments[pe+2];Se.children=oe}return O(b.type,Ee,Se)},pt.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},pt.createElement=function(b,V,fe){var Se,Ee={},Z=null;if(V!=null)for(Se in V.key!==void 0&&(Z=""+V.key),V)M.call(V,Se)&&Se!=="key"&&Se!=="__self"&&Se!=="__source"&&(Ee[Se]=V[Se]);var oe=arguments.length-2;if(oe===1)Ee.children=fe;else if(1<oe){for(var pe=Array(oe),Ne=0;Ne<oe;Ne++)pe[Ne]=arguments[Ne+2];Ee.children=pe}if(b&&b.defaultProps)for(Se in oe=b.defaultProps,oe)Ee[Se]===void 0&&(Ee[Se]=oe[Se]);return O(b,Z,Ee)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(b){return{$$typeof:p,render:b}},pt.isValidElement=H,pt.lazy=function(b){return{$$typeof:S,_payload:{_status:-1,_result:b},_init:ie}},pt.memo=function(b,V){return{$$typeof:h,type:b,compare:V===void 0?null:V}},pt.startTransition=function(b){var V=P.T,fe={};P.T=fe;try{var Se=b(),Ee=P.S;Ee!==null&&Ee(fe,Se),typeof Se=="object"&&Se!==null&&typeof Se.then=="function"&&Se.then(U,_e)}catch(Z){_e(Z)}finally{V!==null&&fe.types!==null&&(V.types=fe.types),P.T=V}},pt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pt.use=function(b){return P.H.use(b)},pt.useActionState=function(b,V,fe){return P.H.useActionState(b,V,fe)},pt.useCallback=function(b,V){return P.H.useCallback(b,V)},pt.useContext=function(b){return P.H.useContext(b)},pt.useDebugValue=function(){},pt.useDeferredValue=function(b,V){return P.H.useDeferredValue(b,V)},pt.useEffect=function(b,V){return P.H.useEffect(b,V)},pt.useEffectEvent=function(b){return P.H.useEffectEvent(b)},pt.useId=function(){return P.H.useId()},pt.useImperativeHandle=function(b,V,fe){return P.H.useImperativeHandle(b,V,fe)},pt.useInsertionEffect=function(b,V){return P.H.useInsertionEffect(b,V)},pt.useLayoutEffect=function(b,V){return P.H.useLayoutEffect(b,V)},pt.useMemo=function(b,V){return P.H.useMemo(b,V)},pt.useOptimistic=function(b,V){return P.H.useOptimistic(b,V)},pt.useReducer=function(b,V,fe){return P.H.useReducer(b,V,fe)},pt.useRef=function(b){return P.H.useRef(b)},pt.useState=function(b){return P.H.useState(b)},pt.useSyncExternalStore=function(b,V,fe){return P.H.useSyncExternalStore(b,V,fe)},pt.useTransition=function(){return P.H.useTransition()},pt.version="19.2.8",pt}var Zg;function Vh(){return Zg||(Zg=1,dd.exports=ty()),dd.exports}var yt=Vh(),hd={exports:{}},Zo={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function ny(){return Kg||(Kg=1,(function(r){function e(z,X){var ie=z.length;z.push(X);e:for(;0<ie;){var _e=ie-1>>>1,B=z[_e];if(0<l(B,X))z[_e]=X,z[ie]=B,ie=_e;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var X=z[0],ie=z.pop();if(ie!==X){z[0]=ie;e:for(var _e=0,B=z.length,b=B>>>1;_e<b;){var V=2*(_e+1)-1,fe=z[V],Se=V+1,Ee=z[Se];if(0>l(fe,ie))Se<B&&0>l(Ee,fe)?(z[_e]=Ee,z[Se]=ie,_e=Se):(z[_e]=fe,z[V]=ie,_e=V);else if(Se<B&&0>l(Ee,ie))z[_e]=Ee,z[Se]=ie,_e=Se;else break e}}return X}function l(z,X){var ie=z.sortIndex-X.sortIndex;return ie!==0?ie:z.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,_=null,g=3,T=!1,A=!1,D=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var X=i(h);X!==null;){if(X.callback===null)s(h);else if(X.startTime<=z)s(h),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(h)}}function F(z){if(D=!1,N(z),!A)if(i(m)!==null)A=!0,U||(U=!0,j());else{var X=i(h);X!==null&&J(F,X.startTime-z)}}var U=!1,P=-1,M=5,O=-1;function Y(){return y?!0:!(r.unstable_now()-O<M)}function H(){if(y=!1,U){var z=r.unstable_now();O=z;var X=!0;try{e:{A=!1,D&&(D=!1,I(P),P=-1),T=!0;var ie=g;try{t:{for(N(z),_=i(m);_!==null&&!(_.expirationTime>z&&Y());){var _e=_.callback;if(typeof _e=="function"){_.callback=null,g=_.priorityLevel;var B=_e(_.expirationTime<=z);if(z=r.unstable_now(),typeof B=="function"){_.callback=B,N(z),X=!0;break t}_===i(m)&&s(m),N(z)}else s(m);_=i(m)}if(_!==null)X=!0;else{var b=i(h);b!==null&&J(F,b.startTime-z),X=!1}}break e}finally{_=null,g=ie,T=!1}X=void 0}}finally{X?j():U=!1}}}var j;if(typeof G=="function")j=function(){G(H)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ae=he.port2;he.port1.onmessage=H,j=function(){ae.postMessage(null)}}else j=function(){x(H,0)};function J(z,X){P=x(function(){z(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ie=g;g=X;try{return z()}finally{g=ie}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=g;g=z;try{return X()}finally{g=ie}},r.unstable_scheduleCallback=function(z,X,ie){var _e=r.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?_e+ie:_e):ie=_e,z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ie+B,z={id:S++,callback:X,priorityLevel:z,startTime:ie,expirationTime:B,sortIndex:-1},ie>_e?(z.sortIndex=ie,e(h,z),i(m)===null&&z===i(h)&&(D?(I(P),P=-1):D=!0,J(F,ie-_e))):(z.sortIndex=B,e(m,z),A||T||(A=!0,U||(U=!0,j()))),z},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(z){var X=g;return function(){var ie=g;g=X;try{return z.apply(this,arguments)}finally{g=ie}}}})(md)),md}var Qg;function iy(){return Qg||(Qg=1,pd.exports=ny()),pd.exports}var gd={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function ay(){if(Jg)return qn;Jg=1;var r=Vh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:S}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,S)},qn.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},qn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},qn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},qn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,_=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,T=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:T}):S==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:T,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},qn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},qn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,_=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},qn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},qn.requestFormReset=function(m){s.d.r(m)},qn.unstable_batchedUpdates=function(m,h){return m(h)},qn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},qn.useFormStatus=function(){return d.H.useHostTransitionStatus()},qn.version="19.2.8",qn}var $g;function sy(){if($g)return gd.exports;$g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gd.exports=ay(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function ry(){if(ev)return Zo;ev=1;var r=iy(),e=Vh(),i=sy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,o=f;break}if(C===o){v=!0,o=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,o=u;break}if(C===o){v=!0,o=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),G=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case G:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case M:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var J=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},_e=[],B=-1;function b(t){return{current:t}}function V(t){0>B||(t.current=_e[B],_e[B]=null,B--)}function fe(t,n){B++,_e[B]=t.current,t.current=n}var Se=b(null),Ee=b(null),Z=b(null),oe=b(null);function pe(t,n){switch(fe(Z,n),fe(Ee,t),fe(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=mg(n),t=gg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(Se),fe(Se,t)}function Ne(){V(Se),V(Ee),V(Z)}function ke(t){t.memoizedState!==null&&fe(oe,t);var n=Se.current,a=gg(n,t.type);n!==a&&(fe(Ee,t),fe(Se,a))}function Pe(t){Ee.current===t&&(V(Se),V(Ee)),oe.current===t&&(V(oe),Xo._currentValue=ie)}var st,$e;function qe(t){if(st===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);st=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+t+$e}var rt=!1;function ot(t,n){if(!t||rt)return"";rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(me){var de=me}Reflect.construct(t,[],we)}else{try{we.call()}catch(me){de=me}t.call(we.prototype)}}else{try{throw Error()}catch(me){de=me}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(me){if(me&&de&&typeof me.stack=="string")return[me.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var k=v.split(`
`),ce=C.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===ce.length)for(o=k.length-1,u=ce.length-1;1<=o&&0<=u&&k[o]!==ce[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==ce[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==ce[u]){var Me=`
`+k[o].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=o&&0<=u);break}}}finally{rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function Mt(t,n){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return t.child!==n&&n!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return qe("Activity");default:return""}}function It(t){try{var n="",a=null;do n+=Mt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Bt=Object.prototype.hasOwnProperty,Ut=r.unstable_scheduleCallback,Zt=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,Q=r.unstable_requestPaint,Ft=r.unstable_now,At=r.unstable_getCurrentPriorityLevel,L=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,te=r.unstable_LowPriority,ge=r.unstable_IdlePriority,De=r.log,Ie=r.unstable_setDisableYieldValue,ve=null,xe=null;function Le(t){if(typeof De=="function"&&Ie(t),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(ve,t)}catch{}}var We=Math.clz32?Math.clz32:nt,ze=Math.log,Fe=Math.LN2;function nt(t){return t>>>=0,t===0?32:31-(ze(t)/Fe|0)|0}var it=256,ct=262144,W=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Ue(o):(v&=C,v!==0?u=Ue(v):a||(a=C&~t,a!==0&&(u=Ue(a))))):(C=o&~f,C!==0?u=Ue(C):v!==0?u=Ue(v):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sn(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,k=t.expirationTimes,ce=t.hiddenUpdates;for(a=v&~a;0<a;){var Me=31-We(a),we=1<<Me;C[Me]=0,k[Me]=-1;var de=ce[Me];if(de!==null)for(ce[Me]=null,Me=0;Me<de.length;Me++){var me=de[Me];me!==null&&(me.lane&=-536870913)}a&=~we}o!==0&&qt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function qt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-We(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Qn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-We(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Wn(t,n){var a=n&-n;return a=(a&42)!==0?1:$i(a),(a&(t.suspendedLanes|n))!==0?0:a}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function va(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ea(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Bg(t.type))}function xa(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var wi=Math.random().toString(36).slice(2),pn="__reactFiber$"+wi,dt="__reactProps$"+wi,yn="__reactContainer$"+wi,Gt="__reactEvents$"+wi,Gi="__reactListeners$"+wi,ta="__reactHandles$"+wi,si="__reactResources$"+wi,zn="__reactMarker$"+wi;function xn(t){delete t[pn],delete t[dt],delete t[Gt],delete t[Gi],delete t[ta]}function Ri(t){var n=t[pn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yn]||a[pn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=bg(t);t!==null;){if(a=t[pn])return a;t=bg(t)}return n}t=a,a=t.parentNode}return null}function Hi(t){if(t=t[pn]||t[yn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Vi(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function na(t){var n=t[si];return n||(n=t[si]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[zn]=!0}var er=new Set,R={};function K(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(R[t]=n,t=0;t<n.length;t++)er.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Be={};function Ze(t){return Bt.call(Be,t)?!0:Bt.call(re,t)?!1:se.test(t)?Be[t]=!0:(re[t]=!0,!1)}function be(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Te(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ce(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function et(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ut(t){if(!t._valueTracker){var n=et(t)?"checked":"value";t._valueTracker=Ge(t,n,""+t[n])}}function Lt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=et(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var zt=/[\n"\\]/g;function St(t){return t.replace(zt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function je(t,n,a,o,u,f,v,C){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ve(n)):t.value!==""+Ve(n)&&(t.value=""+Ve(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Ke(t,v,Ve(n)):a!=null?Ke(t,v,Ve(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+Ve(C):t.removeAttribute("name")}function ht(t,n,a,o,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ut(t);return}a=a!=null?""+Ve(a):"",n=n!=null?""+Ve(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ut(t)}function Ke(t,n,a){n==="number"&&Ht(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function $t(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ve(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Jn(t,n,a){if(n!=null&&(n=""+Ve(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ve(a):""}function mi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(J(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ve(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),ut(t)}function $n(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||jt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ri(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function wt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ki=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mn(t){return ki.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ln(){}var pl=null;function tr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function pp(t){var n=Hi(t);if(n&&(t=n.stateNode)){var a=t[dt]||null;e:switch(t=n.stateNode,n.type){case"input":if(je(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[dt]||null;if(!u)throw Error(s(90));je(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Lt(o)}break e;case"textarea":Jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&$t(t,!!a.multiple,n,!1)}}}var cu=!1;function mp(t,n,a){if(cu)return t(n,a);cu=!0;try{var o=t(n);return o}finally{if(cu=!1,(nr!==null||ir!==null)&&(tc(),nr&&(n=nr,t=ir,ir=nr=null,pp(n),t)))for(n=0;n<t.length;n++)pp(t[n])}}function ro(t,n){var a=t.stateNode;if(a===null)return null;var o=a[dt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(_a)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){uu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{uu=!1}var Wa=null,fu=null,ml=null;function gp(){if(ml)return ml;var t,n=fu,a=n.length,o,u="value"in Wa?Wa.value:Wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return ml=u.slice(t,1<o?1-o:void 0)}function gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function vp(){return!1}function oi(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:vp,this.isPropagationStopped=vp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=oi(As),lo=_({},As,{view:0,detail:0}),Qx=oi(lo),du,hu,co,_l=_({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(du=t.screenX-co.screenX,hu=t.screenY-co.screenY):hu=du=0,co=t),du)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),xp=oi(_l),Jx=_({},_l,{dataTransfer:0}),$x=oi(Jx),e_=_({},lo,{relatedTarget:0}),pu=oi(e_),t_=_({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=oi(t_),i_=_({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a_=oi(i_),s_=_({},As,{data:0}),_p=oi(s_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=l_[t])?!!n[t]:!1}function mu(){return c_}var u_=_({},lo,{key:function(t){if(t.key){var n=r_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f_=oi(u_),d_=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=oi(d_),h_=_({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),p_=oi(h_),m_=_({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=oi(m_),v_=_({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=oi(v_),__=_({},As,{newState:0,oldState:0}),S_=oi(__),y_=[9,13,27,32],gu=_a&&"CompositionEvent"in window,uo=null;_a&&"documentMode"in document&&(uo=document.documentMode);var M_=_a&&"TextEvent"in window&&!uo,yp=_a&&(!gu||uo&&8<uo&&11>=uo),Mp=" ",bp=!1;function Ep(t,n){switch(t){case"keyup":return y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function b_(t,n){switch(t){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(bp=!0,Mp);case"textInput":return t=n.data,t===Mp&&bp?null:t;default:return null}}function E_(t,n){if(ar)return t==="compositionend"||!gu&&Ep(t,n)?(t=gp(),ml=fu=Wa=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!T_[t.type]:n==="textarea"}function wp(t,n,a,o){nr?ir?ir.push(o):ir=[o]:nr=o,n=lc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var fo=null,ho=null;function A_(t){cg(t,0)}function Sl(t){var n=Vi(t);if(Lt(n))return t}function Rp(t,n){if(t==="change")return n}var Cp=!1;if(_a){var vu;if(_a){var xu="oninput"in document;if(!xu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),xu=typeof Np.oninput=="function"}vu=xu}else vu=!1;Cp=vu&&(!document.documentMode||9<document.documentMode)}function Dp(){fo&&(fo.detachEvent("onpropertychange",Up),ho=fo=null)}function Up(t){if(t.propertyName==="value"&&Sl(ho)){var n=[];wp(n,ho,t,tr(t)),mp(A_,n)}}function w_(t,n,a){t==="focusin"?(Dp(),fo=n,ho=a,fo.attachEvent("onpropertychange",Up)):t==="focusout"&&Dp()}function R_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ho)}function C_(t,n){if(t==="click")return Sl(n)}function N_(t,n){if(t==="input"||t==="change")return Sl(n)}function D_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var gi=typeof Object.is=="function"?Object.is:D_;function po(t,n){if(gi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(n,u)||!gi(t[u],n[u]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,n){var a=Lp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lp(a)}}function Pp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Pp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ip(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Ht(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Ht(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var U_=_a&&"documentMode"in document&&11>=document.documentMode,sr=null,Su=null,mo=null,yu=!1;function Fp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||sr==null||sr!==Ht(o)||(o=sr,"selectionStart"in o&&_u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=lc(Su,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=sr)))}function ws(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},Mu={},zp={};_a&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Rs(t){if(Mu[t])return Mu[t];if(!rr[t])return t;var n=rr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Mu[t]=n[a];return t}var Bp=Rs("animationend"),Gp=Rs("animationiteration"),Hp=Rs("animationstart"),L_=Rs("transitionrun"),O_=Rs("transitionstart"),P_=Rs("transitioncancel"),Vp=Rs("transitionend"),kp=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Xi(t,n){kp.set(t,n),K(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ci=[],or=0,Eu=0;function Ml(){for(var t=or,n=Eu=or=0;n<t;){var a=Ci[n];Ci[n++]=null;var o=Ci[n];Ci[n++]=null;var u=Ci[n];Ci[n++]=null;var f=Ci[n];if(Ci[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Xp(a,u,f)}}function bl(t,n,a,o){Ci[or++]=t,Ci[or++]=n,Ci[or++]=a,Ci[or++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,n,a,o){return bl(t,n,a,o),El(t)}function Cs(t,n){return bl(t,null,null,n),El(t)}function Xp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-We(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(t){if(50<Fo)throw Fo=0,Pf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function I_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,n,a,o){return new I_(t,n,a,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=vi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Tl(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")Au(t)&&(v=1);else if(typeof t=="string")v=HS(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=vi(31,a,n,u),t.elementType=O,t.lanes=f,t;case D:return Ns(a.children,u,f,n);case y:v=8,u|=24;break;case x:return t=vi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case F:return t=vi(13,a,n,u),t.elementType=F,t.lanes=f,t;case U:return t=vi(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:v=10;break e;case I:v=9;break e;case N:v=11;break e;case P:v=14;break e;case M:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=vi(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ns(t,n,a,o){return t=vi(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=vi(6,t,null,n),t.lanes=a,t}function qp(t){var n=vi(18,null,null,0);return n.stateNode=t,n}function Ru(t,n,a){return n=vi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jp=new WeakMap;function Ni(t,n){if(typeof t=="object"&&t!==null){var a=jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:It(n)},jp.set(t,n),n)}return{value:t,source:n,stack:It(n)}}var cr=[],ur=0,Al=null,go=0,Di=[],Ui=0,qa=null,ia=1,aa="";function ya(t,n){cr[ur++]=go,cr[ur++]=Al,Al=t,go=n}function Yp(t,n,a){Di[Ui++]=ia,Di[Ui++]=aa,Di[Ui++]=qa,qa=t;var o=ia;t=aa;var u=32-We(o)-1;o&=~(1<<u),a+=1;var f=32-We(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,ia=1<<32-We(n)+u|a<<u|o,aa=f+t}else ia=1<<f|a<<u|o,aa=t}function Cu(t){t.return!==null&&(ya(t,1),Yp(t,1,0))}function Nu(t){for(;t===Al;)Al=cr[--ur],cr[ur]=null,go=cr[--ur],cr[ur]=null;for(;t===qa;)qa=Di[--Ui],Di[Ui]=null,aa=Di[--Ui],Di[Ui]=null,ia=Di[--Ui],Di[Ui]=null}function Zp(t,n){Di[Ui++]=ia,Di[Ui++]=aa,Di[Ui++]=qa,ia=n.id,aa=n.overflow,qa=t}var Bn=null,on=null,Ot=!1,ja=null,Li=!1,Du=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(Ni(n,t)),Du}function Kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[pn]=t,n[dt]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)Et(Bo[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),ht(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),mi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||hg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Ln),n=!0):n=!1,n||Ya(t,!0)}function Qp(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Bn=Bn.return}}function fr(t){if(t!==Bn)return!1;if(!Ot)return Qp(t),Ot=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&on&&Ya(t),Qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=Mg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));on=Mg(t)}else n===27?(n=on,ls(t.type)?(t=td,td=null,on=t):on=n):on=Bn?Pi(t.stateNode.nextSibling):null;return!0}function Ds(){on=Bn=null,Ot=!1}function Uu(){var t=ja;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),ja=null),t}function vo(t){ja===null?ja=[t]:ja.push(t)}var Lu=b(null),Us=null,Ma=null;function Za(t,n,a){fe(Lu,n._currentValue),n._currentValue=a}function ba(t){t._currentValue=Lu.current,V(Lu)}function Ou(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Pu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var k=0;k<n.length;k++)if(C.context===n[k]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Ou(f.return,a,t),o||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ou(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function dr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;gi(u.pendingProps.value,v.value)||(t!==null?t.push(C):t=[C])}}else if(u===oe.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&Pu(n,t,a,o),n.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!gi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Us=t,Ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Gn(t){return Jp(Us,t)}function Rl(t,n){return Us===null&&Ls(t),Jp(t,n)}function Jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(t===null)throw Error(s(308));Ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ma=Ma.next=n;return a}var F_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},z_=r.unstable_scheduleCallback,B_=r.unstable_NormalPriority,bn={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new F_,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&z_(B_,function(){t.controller.abort()})}var _o=null,Fu=0,hr=0,pr=null;function G_(t,n){if(_o===null){var a=_o=[];Fu=0,hr=Hf(),pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then($p,$p),n}function $p(){if(--Fu===0&&_o!==null){pr!==null&&(pr.status="fulfilled");var t=_o;_o=null,hr=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function H_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var em=z.S;z.S=function(t,n){F0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&G_(t,n),em!==null&&em(t,n)};var Os=b(null);function zu(){var t=Os.current;return t!==null?t:an.pooledCache}function Cl(t,n){n===null?fe(Os,Os.current):fe(Os,n.pool)}function tm(){var t=zu();return t===null?null:{parent:bn._currentValue,pool:t}}var mr=Error(s(460)),Bu=Error(s(474)),Nl=Error(s(542)),Dl={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function im(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ln,Ln),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t;default:if(typeof n.status=="string")n.then(Ln,Ln);else{if(t=an,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,sm(t),t}throw Is=n,mr}}function Ps(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Is=a,mr):a}}var Is=null;function am(){if(Is===null)throw Error(s(459));var t=Is;return Is=null,t}function sm(t){if(t===mr||t===Nl)throw Error(s(483))}var gr=null,So=0;function Ul(t){var n=So;return So+=1,gr===null&&(gr=[]),im(gr,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){function n(ee,q){if(t){var le=ee.deletions;le===null?(ee.deletions=[q],ee.flags|=16):le.push(q)}}function a(ee,q){if(!t)return null;for(;q!==null;)n(ee,q),q=q.sibling;return null}function o(ee){for(var q=new Map;ee!==null;)ee.key!==null?q.set(ee.key,ee):q.set(ee.index,ee),ee=ee.sibling;return q}function u(ee,q){return ee=Sa(ee,q),ee.index=0,ee.sibling=null,ee}function f(ee,q,le){return ee.index=le,t?(le=ee.alternate,le!==null?(le=le.index,le<q?(ee.flags|=67108866,q):le):(ee.flags|=67108866,q)):(ee.flags|=1048576,q)}function v(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function C(ee,q,le,Ae){return q===null||q.tag!==6?(q=wu(le,ee.mode,Ae),q.return=ee,q):(q=u(q,le),q.return=ee,q)}function k(ee,q,le,Ae){var at=le.type;return at===D?Me(ee,q,le.props.children,Ae,le.key):q!==null&&(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===M&&Ps(at)===q.type)?(q=u(q,le.props),yo(q,le),q.return=ee,q):(q=Tl(le.type,le.key,le.props,null,ee.mode,Ae),yo(q,le),q.return=ee,q)}function ce(ee,q,le,Ae){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=Ru(le,ee.mode,Ae),q.return=ee,q):(q=u(q,le.children||[]),q.return=ee,q)}function Me(ee,q,le,Ae,at){return q===null||q.tag!==7?(q=Ns(le,ee.mode,Ae,at),q.return=ee,q):(q=u(q,le),q.return=ee,q)}function we(ee,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=wu(""+q,ee.mode,le),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return le=Tl(q.type,q.key,q.props,null,ee.mode,le),yo(le,q),le.return=ee,le;case A:return q=Ru(q,ee.mode,le),q.return=ee,q;case M:return q=Ps(q),we(ee,q,le)}if(J(q)||j(q))return q=Ns(q,ee.mode,le,null),q.return=ee,q;if(typeof q.then=="function")return we(ee,Ul(q),le);if(q.$$typeof===G)return we(ee,Rl(ee,q),le);Ll(ee,q)}return null}function de(ee,q,le,Ae){var at=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return at!==null?null:C(ee,q,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case T:return le.key===at?k(ee,q,le,Ae):null;case A:return le.key===at?ce(ee,q,le,Ae):null;case M:return le=Ps(le),de(ee,q,le,Ae)}if(J(le)||j(le))return at!==null?null:Me(ee,q,le,Ae,null);if(typeof le.then=="function")return de(ee,q,Ul(le),Ae);if(le.$$typeof===G)return de(ee,q,Rl(ee,le),Ae);Ll(ee,le)}return null}function me(ee,q,le,Ae,at){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ee=ee.get(le)||null,C(q,ee,""+Ae,at);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case T:return ee=ee.get(Ae.key===null?le:Ae.key)||null,k(q,ee,Ae,at);case A:return ee=ee.get(Ae.key===null?le:Ae.key)||null,ce(q,ee,Ae,at);case M:return Ae=Ps(Ae),me(ee,q,le,Ae,at)}if(J(Ae)||j(Ae))return ee=ee.get(le)||null,Me(q,ee,Ae,at,null);if(typeof Ae.then=="function")return me(ee,q,le,Ul(Ae),at);if(Ae.$$typeof===G)return me(ee,q,le,Rl(q,Ae),at);Ll(q,Ae)}return null}function Je(ee,q,le,Ae){for(var at=null,kt=null,tt=q,xt=q=0,Ct=null;tt!==null&&xt<le.length;xt++){tt.index>xt?(Ct=tt,tt=null):Ct=tt.sibling;var Xt=de(ee,tt,le[xt],Ae);if(Xt===null){tt===null&&(tt=Ct);break}t&&tt&&Xt.alternate===null&&n(ee,tt),q=f(Xt,q,xt),kt===null?at=Xt:kt.sibling=Xt,kt=Xt,tt=Ct}if(xt===le.length)return a(ee,tt),Ot&&ya(ee,xt),at;if(tt===null){for(;xt<le.length;xt++)tt=we(ee,le[xt],Ae),tt!==null&&(q=f(tt,q,xt),kt===null?at=tt:kt.sibling=tt,kt=tt);return Ot&&ya(ee,xt),at}for(tt=o(tt);xt<le.length;xt++)Ct=me(tt,ee,xt,le[xt],Ae),Ct!==null&&(t&&Ct.alternate!==null&&tt.delete(Ct.key===null?xt:Ct.key),q=f(Ct,q,xt),kt===null?at=Ct:kt.sibling=Ct,kt=Ct);return t&&tt.forEach(function(hs){return n(ee,hs)}),Ot&&ya(ee,xt),at}function lt(ee,q,le,Ae){if(le==null)throw Error(s(151));for(var at=null,kt=null,tt=q,xt=q=0,Ct=null,Xt=le.next();tt!==null&&!Xt.done;xt++,Xt=le.next()){tt.index>xt?(Ct=tt,tt=null):Ct=tt.sibling;var hs=de(ee,tt,Xt.value,Ae);if(hs===null){tt===null&&(tt=Ct);break}t&&tt&&hs.alternate===null&&n(ee,tt),q=f(hs,q,xt),kt===null?at=hs:kt.sibling=hs,kt=hs,tt=Ct}if(Xt.done)return a(ee,tt),Ot&&ya(ee,xt),at;if(tt===null){for(;!Xt.done;xt++,Xt=le.next())Xt=we(ee,Xt.value,Ae),Xt!==null&&(q=f(Xt,q,xt),kt===null?at=Xt:kt.sibling=Xt,kt=Xt);return Ot&&ya(ee,xt),at}for(tt=o(tt);!Xt.done;xt++,Xt=le.next())Xt=me(tt,ee,xt,Xt.value,Ae),Xt!==null&&(t&&Xt.alternate!==null&&tt.delete(Xt.key===null?xt:Xt.key),q=f(Xt,q,xt),kt===null?at=Xt:kt.sibling=Xt,kt=Xt);return t&&tt.forEach(function(JS){return n(ee,JS)}),Ot&&ya(ee,xt),at}function nn(ee,q,le,Ae){if(typeof le=="object"&&le!==null&&le.type===D&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case T:e:{for(var at=le.key;q!==null;){if(q.key===at){if(at=le.type,at===D){if(q.tag===7){a(ee,q.sibling),Ae=u(q,le.props.children),Ae.return=ee,ee=Ae;break e}}else if(q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===M&&Ps(at)===q.type){a(ee,q.sibling),Ae=u(q,le.props),yo(Ae,le),Ae.return=ee,ee=Ae;break e}a(ee,q);break}else n(ee,q);q=q.sibling}le.type===D?(Ae=Ns(le.props.children,ee.mode,Ae,le.key),Ae.return=ee,ee=Ae):(Ae=Tl(le.type,le.key,le.props,null,ee.mode,Ae),yo(Ae,le),Ae.return=ee,ee=Ae)}return v(ee);case A:e:{for(at=le.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){a(ee,q.sibling),Ae=u(q,le.children||[]),Ae.return=ee,ee=Ae;break e}else{a(ee,q);break}else n(ee,q);q=q.sibling}Ae=Ru(le,ee.mode,Ae),Ae.return=ee,ee=Ae}return v(ee);case M:return le=Ps(le),nn(ee,q,le,Ae)}if(J(le))return Je(ee,q,le,Ae);if(j(le)){if(at=j(le),typeof at!="function")throw Error(s(150));return le=at.call(le),lt(ee,q,le,Ae)}if(typeof le.then=="function")return nn(ee,q,Ul(le),Ae);if(le.$$typeof===G)return nn(ee,q,Rl(ee,le),Ae);Ll(ee,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,q!==null&&q.tag===6?(a(ee,q.sibling),Ae=u(q,le),Ae.return=ee,ee=Ae):(a(ee,q),Ae=wu(le,ee.mode,Ae),Ae.return=ee,ee=Ae),v(ee)):a(ee,q)}return function(ee,q,le,Ae){try{So=0;var at=nn(ee,q,le,Ae);return gr=null,at}catch(tt){if(tt===mr||tt===Nl)throw tt;var kt=vi(29,tt,null,ee.mode);return kt.lanes=Ae,kt.return=ee,kt}finally{}}}var Fs=rm(!0),om=rm(!1),Ka=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Yt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),Xp(t,null,a),n}return bl(t,o,n,a),El(t)}function Mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function bo(){if(ku){var t=pr;if(t!==null)throw t}}function Eo(t,n,a,o){ku=!1;var u=t.updateQueue;Ka=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var k=C,ce=k.next;k.next=null,v===null?f=ce:v.next=ce,v=k;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,C=Me.lastBaseUpdate,C!==v&&(C===null?Me.firstBaseUpdate=ce:C.next=ce,Me.lastBaseUpdate=k))}if(f!==null){var we=u.baseState;v=0,Me=ce=k=null,C=f;do{var de=C.lane&-536870913,me=de!==C.lane;if(me?(Rt&de)===de:(o&de)===de){de!==0&&de===hr&&(ku=!0),Me!==null&&(Me=Me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Je=t,lt=C;de=n;var nn=a;switch(lt.tag){case 1:if(Je=lt.payload,typeof Je=="function"){we=Je.call(nn,we,de);break e}we=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=lt.payload,de=typeof Je=="function"?Je.call(nn,we,de):Je,de==null)break e;we=_({},we,de);break e;case 2:Ka=!0}}de=C.callback,de!==null&&(t.flags|=64,me&&(t.flags|=8192),me=u.callbacks,me===null?u.callbacks=[de]:me.push(de))}else me={lane:de,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Me===null?(ce=Me=me,k=we):Me=Me.next=me,v|=de;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;me=C,C=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);Me===null&&(k=we),u.baseState=k,u.firstBaseUpdate=ce,u.lastBaseUpdate=Me,f===null&&(u.shared.lanes=0),is|=v,t.lanes=v,t.memoizedState=we}}function lm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lm(a[t],n)}var vr=b(null),Ol=b(0);function um(t,n){t=Ua,fe(Ol,t),fe(vr,n),Ua=t|n.baseLanes}function Xu(){fe(Ol,Ua),fe(vr,vr.current)}function Wu(){Ua=Ol.current,V(vr),V(Ol)}var xi=b(null),Oi=null;function $a(t){var n=t.alternate;fe(_n,_n.current&1),fe(xi,t),Oi===null&&(n===null||vr.current!==null||n.memoizedState!==null)&&(Oi=t)}function qu(t){fe(_n,_n.current),fe(xi,t),Oi===null&&(Oi=t)}function fm(t){t.tag===22?(fe(_n,_n.current),fe(xi,t),Oi===null&&(Oi=t)):es()}function es(){fe(_n,_n.current),fe(xi,xi.current)}function _i(t){V(xi),Oi===t&&(Oi=null),V(_n)}var _n=b(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||ed(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,vt=null,en=null,En=null,Il=!1,xr=!1,zs=!1,Fl=0,To=0,_r=null,V_=0;function gn(){throw Error(s(321))}function ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!gi(t[a],n[a]))return!1;return!0}function Yu(t,n,a,o,u,f){return Ea=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Ym:uf,zs=!1,f=a(o,u),zs=!1,xr&&(f=hm(n,a,o,u)),dm(t),f}function dm(t){z.H=Ro;var n=en!==null&&en.next!==null;if(Ea=0,En=en=vt=null,Il=!1,To=0,_r=null,n)throw Error(s(300));t===null||Tn||(t=t.dependencies,t!==null&&wl(t)&&(Tn=!0))}function hm(t,n,a,o){vt=t;var u=0;do{if(xr&&(_r=null),To=0,xr=!1,25<=u)throw Error(s(301));if(u+=1,En=en=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Zm,f=n(a,o)}while(xr);return f}function k_(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Ao(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(vt.flags|=1024),n}function Zu(){var t=Fl!==0;return Fl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}Ea=0,En=en=vt=null,xr=!1,To=Fl=0,_r=null}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?vt.memoizedState=En=t:En=En.next=t,En}function Sn(){if(en===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=En===null?vt.memoizedState:En.next;if(n!==null)En=n,en=t;else{if(t===null)throw vt.alternate===null?Error(s(467)):Error(s(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},En===null?vt.memoizedState=En=t:En=En.next=t}return En}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(t){var n=To;return To+=1,_r===null&&(_r=[]),t=im(_r,t,n),n=vt,(En===null?n.memoizedState:En.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Ym:uf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ao(t);if(t.$$typeof===G)return Gn(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Y;return n.index++,a}function Ta(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=Sn();return $u(n,en,t)}function $u(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=v=null,k=null,ce=n,Me=!1;do{var we=ce.lane&-536870913;if(we!==ce.lane?(Rt&we)===we:(Ea&we)===we){var de=ce.revertLane;if(de===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),we===hr&&(Me=!0);else if((Ea&de)===de){ce=ce.next,de===hr&&(Me=!0);continue}else we={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=we,v=f):k=k.next=we,vt.lanes|=de,is|=de;we=ce.action,zs&&a(f,we),f=ce.hasEagerState?ce.eagerState:a(f,we)}else de={lane:we,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=de,v=f):k=k.next=de,vt.lanes|=we,is|=we;ce=ce.next}while(ce!==null&&ce!==n);if(k===null?v=f:k.next=C,!gi(f,t.memoizedState)&&(Tn=!0,Me&&(a=pr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=k,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ef(t){var n=Sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);gi(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function pm(t,n,a){var o=vt,u=Sn(),f=Ot;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!gi((en||u).memoizedState,a);if(v&&(u.memoizedState=a,Tn=!0),u=u.queue,af(vm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||En!==null&&En.memoizedState.tag&1){if(o.flags|=2048,Sr(9,{destroy:void 0},gm.bind(null,o,u,a,n),null),an===null)throw Error(s(349));f||(Ea&127)!==0||mm(o,n,a)}return a}function mm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=zl(),vt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gm(t,n,a,o){n.value=a,n.getSnapshot=o,xm(n)&&_m(t)}function vm(t,n,a){return a(function(){xm(n)&&_m(t)})}function xm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!gi(t,a)}catch{return!0}}function _m(t){var n=Cs(t,2);n!==null&&di(n,t,2)}function tf(t){var n=ti();if(typeof t=="function"){var a=t;if(t=a(),zs){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},n}function Sm(t,n,a,o){return t.baseState=a,$u(t,en,typeof o=="function"?o:Ta)}function X_(t,n,a,o,u){if(kl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,ym(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ym(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var C=a(u,o),k=z.S;k!==null&&k(v,C),Mm(t,n,C)}catch(ce){nf(t,n,ce)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(u,o),Mm(t,n,f)}catch(ce){nf(t,n,ce)}}function Mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(t,n,o)},function(o){return nf(t,n,o)}):bm(t,n,a)}function bm(t,n,a){n.status="fulfilled",n.value=a,Em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ym(t,a)))}function nf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Em(n),n=n.next;while(n!==o)}t.action=null}function Em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tm(t,n){return n}function Am(t,n){if(Ot){var a=an.formState;if(a!==null){e:{var o=vt;if(Ot){if(on){t:{for(var u=on,f=Li;u.nodeType!==8;){if(!f){u=null;break t}if(u=Pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){on=Pi(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(n=a[0])}}return a=ti(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},a.queue=o,a=Wm.bind(null,vt,o),o.dispatch=a,o=tf(!1),f=cf.bind(null,vt,!1,o.queue),o=ti(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=X_.bind(null,vt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=Sn();return Rm(n,en,t)}function Rm(t,n,a){if(n=$u(t,n,Tm)[0],t=Gl(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(v){throw v===mr?Nl:v}else o=n;n=Sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,Sr(9,{destroy:void 0},W_.bind(null,u,a),null)),[o,f,t]}function W_(t,n){t.action=n}function Cm(t){var n=Sn(),a=en;if(a!==null)return Rm(n,a,t);Sn(),n=n.memoizedState,a=Sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Sr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=zl(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Nm(){return Sn().memoizedState}function Hl(t,n,a,o){var u=ti();vt.flags|=t,u.memoizedState=Sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Vl(t,n,a,o){var u=Sn();o=o===void 0?null:o;var f=u.memoizedState.inst;en!==null&&o!==null&&ju(o,en.memoizedState.deps)?u.memoizedState=Sr(n,f,a,o):(vt.flags|=t,u.memoizedState=Sr(1|n,f,a,o))}function Dm(t,n){Hl(8390656,8,t,n)}function af(t,n){Vl(2048,8,t,n)}function q_(t){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=zl(),vt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Um(t){var n=Sn().memoizedState;return q_({ref:n,nextImpl:t}),function(){if((Yt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Lm(t,n){return Vl(4,2,t,n)}function Om(t,n){return Vl(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Im(t,n,a){a=a!=null?a.concat([t]):null,Vl(4,4,Pm.bind(null,n,t),a)}function sf(){}function Fm(t,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=t(),zs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o}function rf(t,n,a){return a===void 0||(Ea&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=B0(),vt.lanes|=t,is|=t,a)}function Bm(t,n,a,o){return gi(a,n)?a:vr.current!==null?(t=rf(t,a,o),gi(t,n)||(Tn=!0),t):(Ea&42)===0||(Ea&1073741824)!==0&&(Rt&261930)===0?(Tn=!0,t.memoizedState=a):(t=B0(),vt.lanes|=t,is|=t,n)}function Gm(t,n,a,o,u){var f=X.p;X.p=f!==0&&8>f?f:8;var v=z.T,C={};z.T=C,cf(t,!1,n,a);try{var k=u(),ce=z.S;if(ce!==null&&ce(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var Me=H_(k,o);wo(t,n,Me,Mi(t))}else wo(t,n,o,Mi(t))}catch(we){wo(t,n,{then:function(){},status:"rejected",reason:we},Mi())}finally{X.p=f,v!==null&&C.types!==null&&(v.types=C.types),z.T=v}}function j_(){}function of(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Hm(t).queue;Gm(t,u,n,ie,a===null?j_:function(){return Vm(t),a(o)})}function Hm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:ie},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vm(t){var n=Hm(t);n.next===null&&(n=t.alternate.memoizedState),wo(t,n.next.queue,{},Mi())}function lf(){return Gn(Xo)}function km(){return Sn().memoizedState}function Xm(){return Sn().memoizedState}function Y_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Mi();t=Qa(a);var o=Ja(n,t,a);o!==null&&(di(o,n,a),Mo(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function Z_(t,n,a){var o=Mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(t)?qm(n,a):(a=Tu(t,n,a,o),a!==null&&(di(a,t,o),jm(a,n,o)))}function Wm(t,n,a){var o=Mi();wo(t,n,a,o)}function wo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(t))qm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,gi(C,v))return bl(t,n,u,0),an===null&&Ml(),!1}catch{}finally{}if(a=Tu(t,n,u,o),a!==null)return di(a,t,o),jm(a,n,o),!0}return!1}function cf(t,n,a,o){if(o={lane:2,revertLane:Hf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},kl(t)){if(n)throw Error(s(479))}else n=Tu(t,a,o,2),n!==null&&di(n,t,2)}function kl(t){var n=t.alternate;return t===vt||n!==null&&n===vt}function qm(t,n){xr=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qn(t,a)}}var Ro={readContext:Gn,use:Bl,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};Ro.useEffectEvent=gn;var Ym={readContext:Gn,use:Bl,useCallback:function(t,n){return ti().memoizedState=[t,n===void 0?null:n],t},useContext:Gn,useEffect:Dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=ti();n=n===void 0?null:n;var o=t();if(zs){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ti();if(a!==void 0){var u=a(n);if(zs){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Z_.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var n=ti();return t={current:t},n.memoizedState=t},useState:function(t){t=tf(t);var n=t.queue,a=Wm.bind(null,vt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(t,n){var a=ti();return rf(a,t,n)},useTransition:function(){var t=tf(!1);return t=Gm.bind(null,vt,t.queue,!0,!1),ti().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=vt,u=ti();if(Ot){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),an===null)throw Error(s(349));(Rt&127)!==0||mm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Dm(vm.bind(null,o,f,t),[t]),o.flags|=2048,Sr(9,{destroy:void 0},gm.bind(null,o,f,a,n),null),a},useId:function(){var t=ti(),n=an.identifierPrefix;if(Ot){var a=aa,o=ia;a=(o&~(1<<32-We(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=V_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:lf,useFormState:Am,useActionState:Am,useOptimistic:function(t){var n=ti();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,vt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return ti().memoizedState=Y_.bind(null,vt)},useEffectEvent:function(t){var n=ti(),a={impl:t};return n.memoizedState=a,function(){if((Yt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Gn,use:Bl,useCallback:Fm,useContext:Gn,useEffect:af,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:zm,useReducer:Gl,useRef:Nm,useState:function(){return Gl(Ta)},useDebugValue:sf,useDeferredValue:function(t,n){var a=Sn();return Bm(a,en.memoizedState,t,n)},useTransition:function(){var t=Gl(Ta)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:lf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=Sn();return Sm(a,en,t,n)},useMemoCache:Ju,useCacheRefresh:Xm};uf.useEffectEvent=Um;var Zm={readContext:Gn,use:Bl,useCallback:Fm,useContext:Gn,useEffect:af,useImperativeHandle:Im,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:zm,useReducer:ef,useRef:Nm,useState:function(){return ef(Ta)},useDebugValue:sf,useDeferredValue:function(t,n){var a=Sn();return en===null?rf(a,t,n):Bm(a,en.memoizedState,t,n)},useTransition:function(){var t=ef(Ta)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:Ao(t),n]},useSyncExternalStore:pm,useId:km,useHostTransitionStatus:lf,useFormState:Cm,useActionState:Cm,useOptimistic:function(t,n){var a=Sn();return en!==null?Sm(a,en,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Xm};Zm.useEffectEvent=Um;function ff(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Mi(),u=Qa(o);u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,o),n!==null&&(di(n,t,o),Mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Mi(),u=Qa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,o),n!==null&&(di(n,t,o),Mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Mi(),o=Qa(a);o.tag=2,n!=null&&(o.callback=n),n=Ja(t,o,a),n!==null&&(di(n,t,a),Mo(n,t,a))}};function Km(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,f):!0}function Qm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&df.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Jm(t){yl(t)}function $m(t){console.error(t)}function e0(t){yl(t)}function Xl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function t0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(t,n)},a}function n0(t){return t=Qa(t),t.tag=3,t}function i0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){t0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){t0(n,a,o),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function K_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&dr(n,a,u,!0),a=xi.current,a!==null){switch(a.tag){case 31:case 13:return Oi===null?nc():a.alternate===null&&vn===0&&(vn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(t,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(t,o,u)),!1}throw Error(s(435,a.tag))}return zf(t,o,u),nc(),!1}if(Ot)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(t=Error(s(422),{cause:o}),vo(Ni(t,a)))):(o!==Du&&(n=Error(s(423),{cause:o}),vo(Ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ni(o,a),u=hf(t.stateNode,o,u),Vu(t,u),vn!==4&&(vn=2)),!1;var f=Error(s(520),{cause:o});if(f=Ni(f,a),Io===null?Io=[f]:Io.push(f),vn!==4&&(vn=2),n===null)return!0;o=Ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(as===null||!as.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=n0(u),i0(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(s(461)),Tn=!1;function Hn(t,n,a,o){n.child=t===null?om(n,null,a,o):Fs(n,t.child,a,o)}function a0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var C in o)C!=="ref"&&(v[C]=o[C])}else v=o;return Ls(n),o=Yu(t,n,a,v,f,u),C=Zu(),t!==null&&!Tn?(Ku(t,n,u),Aa(t,n,u)):(Ot&&C&&Cu(n),n.flags|=1,Hn(t,n,o,u),n.child)}function s0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,r0(t,n,f,o,u)):(t=Tl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Mf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(v,o)&&t.ref===n.ref)return Aa(t,n,u)}return n.flags|=1,t=Sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function r0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(po(f,o)&&t.ref===n.ref)if(Tn=!1,n.pendingProps=o=f,Mf(t,u))(t.flags&131072)!==0&&(Tn=!0);else return n.lanes=t.lanes,Aa(t,n,u)}return mf(t,n,a,o,u)}function o0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return l0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?um(n,f):Xu(),fm(n);else return o=n.lanes=536870912,l0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),um(n,f),es(),n.memoizedState=null):(t!==null&&Cl(n,null),Xu(),es());return Hn(t,n,u,a),n.child}function Co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function l0(t,n,a,o,u){var f=zu();return f=f===null?null:{parent:bn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Cl(n,null),Xu(),fm(n),t!==null&&dr(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function c0(t,n,a){return Fs(n,t.child,null,a),t=Wl(n,n.pendingProps),t.flags|=2,_i(n),n.memoizedState=null,t}function Q_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ot){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,Co(null,t);if(qu(n),(t=on)?(t=yg(t,Li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Bn=n,on=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Wl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=c0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Tn||dr(t,n,a,!1),u=(a&t.childLanes)!==0,Tn||u){if(o=an,o!==null&&(v=Wn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Cs(t,v),di(o,t,v),pf;nc(),n=c0(t,n,a)}else t=f.treeContext,on=Pi(v.nextSibling),Bn=n,Ot=!0,ja=null,Li=!1,t!==null&&Zp(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=Sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function mf(t,n,a,o,u){return Ls(n),a=Yu(t,n,a,o,void 0,u),o=Zu(),t!==null&&!Tn?(Ku(t,n,u),Aa(t,n,u)):(Ot&&o&&Cu(n),n.flags|=1,Hn(t,n,a,u),n.child)}function u0(t,n,a,o,u,f){return Ls(n),n.updateQueue=null,a=hm(n,o,a,u),dm(t),o=Zu(),t!==null&&!Tn?(Ku(t,n,f),Aa(t,n,f)):(Ot&&o&&Cu(n),n.flags|=1,Hn(t,n,a,f),n.child)}function f0(t,n,a,o,u){if(Ls(n),n.stateNode===null){var f=lr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Gn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Gn(v):lr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ff(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&df.enqueueReplaceState(f,f.state,null),Eo(n,o,f,u),bo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,k=Bs(a,C);f.props=k;var ce=f.context,Me=a.contextType;v=lr,typeof Me=="object"&&Me!==null&&(v=Gn(Me));var we=a.getDerivedStateFromProps;Me=typeof we=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ce!==v)&&Qm(n,f,o,v),Ka=!1;var de=n.memoizedState;f.state=de,Eo(n,o,f,u),bo(),ce=n.memoizedState,C||de!==ce||Ka?(typeof we=="function"&&(ff(n,a,we,o),ce=n.memoizedState),(k=Ka||Km(n,a,k,o,de,ce,v))?(Me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=v,o=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Hu(t,n),v=n.memoizedProps,Me=Bs(a,v),f.props=Me,we=n.pendingProps,de=f.context,ce=a.contextType,k=lr,typeof ce=="object"&&ce!==null&&(k=Gn(ce)),C=a.getDerivedStateFromProps,(ce=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==we||de!==k)&&Qm(n,f,o,k),Ka=!1,de=n.memoizedState,f.state=de,Eo(n,o,f,u),bo();var me=n.memoizedState;v!==we||de!==me||Ka||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof C=="function"&&(ff(n,a,C,o),me=n.memoizedState),(Me=Ka||Km(n,a,Me,o,de,me,k)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(ce||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,me,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,me,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=me),f.props=o,f.state=me,f.context=k,o=Me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,ql(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Fs(n,t.child,null,u),n.child=Fs(n,null,a,u)):Hn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Aa(t,n,u),t}function d0(t,n,a,o){return Ds(),n.flags|=256,Hn(t,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(t){return{baseLanes:t,cachePool:tm()}}function xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=yi),t}function h0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(_n.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ot){if(u?$a(n):es(),(t=on)?(t=yg(t,Li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:ia,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=qp(t),a.return=n,n.child=a,Bn=n,on=null)):t=null,t===null)throw Ya(n);return ed(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(es(),u=n.mode,C=jl({mode:"hidden",children:C},u),o=Ns(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=vf(a),o.childLanes=xf(t,v,a),n.memoizedState=gf,Co(null,o)):($a(n),_f(n,C))}var k=t.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(f)n.flags&256?($a(n),n.flags&=-257,n=Sf(t,n,a)):n.memoizedState!==null?(es(),n.child=t.child,n.flags|=128,n=null):(es(),C=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),C=Ns(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Fs(n,t.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=xf(t,v,a),n.memoizedState=gf,n=Co(null,o));else if($a(n),ed(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ce=v.dgst;v=ce,o=Error(s(419)),o.stack="",o.digest=v,vo({value:o,source:null,stack:null}),n=Sf(t,n,a)}else if(Tn||dr(t,n,a,!1),v=(a&t.childLanes)!==0,Tn||v){if(v=an,v!==null&&(o=Wn(v,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,Cs(t,o),di(v,t,o),pf;$f(C)||nc(),n=Sf(t,n,a)}else $f(C)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,on=Pi(C.nextSibling),Bn=n,Ot=!0,ja=null,Li=!1,t!==null&&Zp(n,t),n=_f(n,o.children),n.flags|=4096);return n}return u?(es(),C=o.fallback,u=n.mode,k=t.child,ce=k.sibling,o=Sa(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,ce!==null?C=Sa(ce,C):(C=Ns(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Co(null,o),o=n.child,C=t.child.memoizedState,C===null?C=vf(a):(u=C.cachePool,u!==null?(k=bn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=tm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=xf(t,v,a),n.memoizedState=gf,Co(t.child,o)):($a(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=vi(22,t,null,n),t.lanes=0,t}function Sf(t,n,a){return Fs(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function p0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ou(t.return,n,a)}function yf(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function m0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=_n.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,fe(_n,v),Hn(t,n,o,a),o=Ot?go:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,a,n);else if(t.tag===19)p0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yf(n,!0,a,null,f,o);break;case"together":yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function J_(t,n,a){switch(n.tag){case 3:pe(n,n.stateNode.containerInfo),Za(n,bn,t.memoizedState.cache),Ds();break;case 27:case 5:ke(n);break;case 4:pe(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?h0(t,n,a):($a(n),t=Aa(t,n,a),t!==null?t.sibling:null);$a(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(dr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return m0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(_n,_n.current),o)break;return null;case 22:return n.lanes=0,o0(t,n,a,n.pendingProps);case 24:Za(n,bn,t.memoizedState.cache)}return Aa(t,n,a)}function g0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Tn=!0;else{if(!Mf(t,a)&&(n.flags&128)===0)return Tn=!1,J_(t,n,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(n.flags&1048576)!==0&&Yp(n,go,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ps(n.elementType),n.type=t,typeof t=="function")Au(t)?(o=Bs(t,o),n.tag=1,n=f0(null,n,t,o,a)):(n.tag=0,n=mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=a0(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=s0(null,n,t,o,a);break e}}throw n=ae(t)||t,Error(s(306,n,""))}}return n;case 0:return mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Bs(o,n.pendingProps),f0(t,n,o,u,a);case 3:e:{if(pe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Hu(t,n),Eo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Za(n,bn,o),o!==f.cache&&Pu(n,[bn],a,!0),bo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=d0(t,n,o,a);break e}else if(o!==u){u=Ni(Error(s(424)),n),vo(u),n=d0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(on=Pi(t.firstChild),Bn=n,Ot=!0,ja=null,Li=!0,a=om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),o===u){n=Aa(t,n,a);break e}Hn(t,n,o,a)}n=n.child}return n;case 26:return ql(t,n),t===null?(a=wg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ot||(a=n.type,t=n.pendingProps,o=cc(Z.current).createElement(a),o[pn]=n,o[dt]=t,Vn(o,a,t),mn(o),n.stateNode=o):n.memoizedState=wg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ke(n),t===null&&Ot&&(o=n.stateNode=Eg(n.type,n.pendingProps,Z.current),Bn=n,Li=!0,u=on,ls(n.type)?(td=u,on=Pi(o.firstChild)):on=u),Hn(t,n,n.pendingProps.children,a),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ot&&((u=o=on)&&(o=RS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Bn=n,on=Pi(o.firstChild),Li=!1,u=!0):u=!1),u||Ya(n)),ke(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,Kf(u,f)?o=null:v!==null&&Kf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,k_,null,null,a),Xo._currentValue=u),ql(t,n),Hn(t,n,o,a),n.child;case 6:return t===null&&Ot&&((t=a=on)&&(a=CS(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Bn=n,on=null,t=!0):t=!1),t||Ya(n)),null;case 13:return h0(t,n,a);case 4:return pe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Fs(n,null,o,a):Hn(t,n,o,a),n.child;case 11:return a0(t,n,n.type,n.pendingProps,a);case 7:return Hn(t,n,n.pendingProps,a),n.child;case 8:return Hn(t,n,n.pendingProps.children,a),n.child;case 12:return Hn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Za(n,n.type,o.value),Hn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ls(n),u=Gn(u),o=o(u),n.flags|=1,Hn(t,n,o,a),n.child;case 14:return s0(t,n,n.type,n.pendingProps,a);case 15:return r0(t,n,n.type,n.pendingProps,a);case 19:return m0(t,n,a);case 31:return Q_(t,n,a);case 22:return o0(t,n,a,n.pendingProps);case 24:return Ls(n),o=Gn(bn),t===null?(u=zu(),u===null&&(u=an,f=Iu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Gu(n),Za(n,bn,u)):((t.lanes&a)!==0&&(Hu(t,n),Eo(n,null,null,a),bo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,bn,o)):(o=f.cache,Za(n,bn,o),o!==u.cache&&Pu(n,[bn],a,!0))),Hn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function wa(t){t.flags|=4}function bf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(k0())t.flags|=8192;else throw Is=Dl,Bu}else t.flags&=-16777217}function v0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ug(n))if(k0())t.flags|=8192;else throw Is=Dl,Bu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,Er|=n)}function No(t,n){if(!Ot)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function $_(t,n,a){var o=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ba(bn),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fr(n)?wa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),ln(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(wa(n),f!==null?(ln(n),v0(n,f)):(ln(n),bf(n,u,null,o,a))):f?f!==t.memoizedState?(wa(n),ln(n),v0(n,f)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&wa(n),ln(n),bf(n,u,t,o,a)),null;case 27:if(Pe(n),a=Z.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}t=Se.current,fr(n)?Kp(n):(t=Eg(u,o,a),n.stateNode=t,wa(n))}return ln(n),null;case 5:if(Pe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ln(n),null}if(f=Se.current,fr(n))Kp(n);else{var v=cc(Z.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[pn]=n,f[dt]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Vn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&wa(n)}}return ln(n),bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&wa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Z.current,fr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[pn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||hg(t.nodeValue,a)),t||Ya(n,!0)}else t=cc(t).createTextNode(o),t[pn]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=fr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[pn]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(_i(n),n):(_i(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ln(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=fr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[pn]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_i(n),n):(_i(n),null)}return _i(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),ln(n),null);case 4:return Ne(),t===null&&Wf(n.stateNode.containerInfo),ln(n),null;case 10:return ba(n.type),ln(n),null;case 19:if(V(_n),o=n.memoizedState,o===null)return ln(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)No(o,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,No(o,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Wp(a,t),a=a.sibling;return fe(_n,_n.current&1|2),Ot&&ya(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>$l&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),No(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ot)return ln(n),null}else 2*Ft()-o.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,No(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=_n.current,fe(_n,u?a&1|2:a&1),Ot&&ya(n,o.treeForkCount),t):(ln(n),null);case 22:case 23:return _i(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&V(Os),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(bn),ln(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function eS(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ba(bn),Ne(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Pe(n),null;case 31:if(n.memoizedState!==null){if(_i(n),n.alternate===null)throw Error(s(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(_i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(_n),null;case 4:return Ne(),null;case 10:return ba(n.type),null;case 22:case 23:return _i(n),Wu(),t!==null&&V(Os),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ba(bn),null;case 25:return null;default:return null}}function x0(t,n){switch(Nu(n),n.tag){case 3:ba(bn),Ne();break;case 26:case 27:case 5:Pe(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&_i(n);break;case 13:_i(n);break;case 19:V(_n);break;case 10:ba(n.type);break;case 22:case 23:_i(n),Wu(),t!==null&&V(Os);break;case 24:ba(bn)}}function Do(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(C){Qt(n,n.return,C)}}function ts(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var k=a,ce=C;try{ce()}catch(Me){Qt(u,k,Me)}}}o=o.next}while(o!==f)}}catch(Me){Qt(n,n.return,Me)}}function _0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cm(n,a)}catch(o){Qt(t,t.return,o)}}}function S0(t,n,a){a.props=Bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Qt(t,n,o)}}function Uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Qt(t,n,u)}}function sa(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Qt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qt(t,n,u)}else a.current=null}function y0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Qt(t,t.return,u)}}function Ef(t,n,a){try{var o=t.stateNode;MS(o,t.type,a,n),o[dt]=n}catch(u){Qt(t,t.return,u)}}function M0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ls(t.type)||t.tag===4}function Tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ln));else if(o!==4&&(o===27&&ls(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Af(t,n,a),t=t.sibling;t!==null;)Af(t,n,a),t=t.sibling}function Zl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ls(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Zl(t,n,a),t=t.sibling;t!==null;)Zl(t,n,a),t=t.sibling}function b0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Vn(n,o,a),n[pn]=t,n[dt]=a}catch(f){Qt(t,t.return,f)}}var Ra=!1,An=!1,wf=!1,E0=typeof WeakSet=="function"?WeakSet:Set,On=null;function tS(t,n){if(t=t.containerInfo,Yf=gc,t=Ip(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,k=-1,ce=0,Me=0,we=t,de=null;t:for(;;){for(var me;we!==a||u!==0&&we.nodeType!==3||(C=v+u),we!==f||o!==0&&we.nodeType!==3||(k=v+o),we.nodeType===3&&(v+=we.nodeValue.length),(me=we.firstChild)!==null;)de=we,we=me;for(;;){if(we===t)break t;if(de===a&&++ce===u&&(C=v),de===f&&++Me===o&&(k=v),(me=we.nextSibling)!==null)break;we=de,de=we.parentNode}we=me}a=C===-1||k===-1?null:{start:C,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},gc=!1,On=n;On!==null;)if(n=On,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,On=t;else for(;On!==null;){switch(n=On,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Je=Bs(a.type,u);t=o.getSnapshotBeforeUpdate(Je,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Qt(a,a.return,lt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,On=t;break}On=n.return}}function T0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Na(t,a),o&4&&Do(5,a);break;case 1:if(Na(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Qt(a,a.return,v)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Qt(a,a.return,v)}}o&64&&_0(a),o&512&&Uo(a,a.return);break;case 3:if(Na(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cm(t,n)}catch(v){Qt(a,a.return,v)}}break;case 27:n===null&&o&4&&b0(a);case 26:case 5:Na(t,a),n===null&&o&4&&y0(a),o&512&&Uo(a,a.return);break;case 12:Na(t,a);break;case 31:Na(t,a),o&4&&R0(t,a);break;case 13:Na(t,a),o&4&&C0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uS.bind(null,a),NS(t,a))));break;case 22:if(o=a.memoizedState!==null||Ra,!o){n=n!==null&&n.memoizedState!==null||An,u=Ra;var f=An;Ra=o,(An=n)&&!f?Da(t,a,(a.subtreeFlags&8772)!==0):Na(t,a),Ra=u,An=f}break;case 30:break;default:Na(t,a)}}function A0(t){var n=t.alternate;n!==null&&(t.alternate=null,A0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&xn(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,li=!1;function Ca(t,n,a){for(a=a.child;a!==null;)w0(t,n,a),a=a.sibling}function w0(t,n,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:An||sa(a,n),Ca(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:An||sa(a,n);var o=un,u=li;ls(a.type)&&(un=a.stateNode,li=!1),Ca(t,n,a),Ho(a.stateNode),un=o,li=u;break;case 5:An||sa(a,n);case 6:if(o=un,u=li,un=null,Ca(t,n,a),un=o,li=u,un!==null)if(li)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(a.stateNode)}catch(f){Qt(a,n,f)}else try{un.removeChild(a.stateNode)}catch(f){Qt(a,n,f)}break;case 18:un!==null&&(li?(t=un,_g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ur(t)):_g(un,a.stateNode));break;case 4:o=un,u=li,un=a.stateNode.containerInfo,li=!0,Ca(t,n,a),un=o,li=u;break;case 0:case 11:case 14:case 15:ts(2,a,n),An||ts(4,a,n),Ca(t,n,a);break;case 1:An||(sa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&S0(a,n,o)),Ca(t,n,a);break;case 21:Ca(t,n,a);break;case 22:An=(o=An)||a.memoizedState!==null,Ca(t,n,a),An=o;break;default:Ca(t,n,a)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ur(t)}catch(a){Qt(n,n.return,a)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ur(t)}catch(a){Qt(n,n.return,a)}}function nS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new E0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new E0),n;default:throw Error(s(435,t.tag))}}function Kl(t,n){var a=nS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=fS.bind(null,t,o);o.then(u,u)}})}function ci(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(ls(C.type)){un=C.stateNode,li=!1;break e}break;case 5:un=C.stateNode,li=!1;break e;case 3:case 4:un=C.stateNode.containerInfo,li=!0;break e}C=C.return}if(un===null)throw Error(s(160));w0(f,v,u),un=null,li=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N0(n,t),n=n.sibling}var Wi=null;function N0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(n,t),ui(t),o&4&&(ts(3,t,t.return),Do(3,t),ts(5,t,t.return));break;case 1:ci(n,t),ui(t),o&512&&(An||a===null||sa(a,a.return)),o&64&&Ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Wi;if(ci(n,t),ui(t),o&512&&(An||a===null||sa(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[zn]||f[pn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Vn(f,o,a),f[pn]=t,mn(f),o=f;break e;case"link":var v=Ng("link","href",u).get(o+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(o),Vn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Ng("meta","content",u).get(o+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(o),Vn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[pn]=t,mn(f),o=f}t.stateNode=o}else Dg(u,t.type,t.stateNode);else t.stateNode=Cg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Dg(u,t.type,t.stateNode):Cg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:ci(n,t),ui(t),o&512&&(An||a===null||sa(a,a.return)),a!==null&&o&4&&Ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ci(n,t),ui(t),o&512&&(An||a===null||sa(a,a.return)),t.flags&32){u=t.stateNode;try{$n(u,"")}catch(Je){Qt(t,t.return,Je)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ef(t,u,a!==null?a.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(ci(n,t),ui(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Je){Qt(t,t.return,Je)}}break;case 3:if(dc=null,u=Wi,Wi=uc(n.containerInfo),ci(n,t),Wi=u,ui(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(Je){Qt(t,t.return,Je)}wf&&(wf=!1,D0(t));break;case 4:o=Wi,Wi=uc(t.stateNode.containerInfo),ci(n,t),ui(t),Wi=o;break;case 12:ci(n,t),ui(t);break;case 31:ci(n,t),ui(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 13:ci(n,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ce=Ra,Me=An;if(Ra=ce||u,An=Me||k,ci(n,t),An=Me,Ra=ce,ui(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||Ra||An||Gs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(f=k.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=k.stateNode;var we=k.memoizedProps.style,de=we!=null&&we.hasOwnProperty("display")?we.display:null;C.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(Je){Qt(k,k.return,Je)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Je){Qt(k,k.return,Je)}}}else if(n.tag===18){if(a===null){k=n;try{var me=k.stateNode;u?Sg(me,!0):Sg(k.stateNode,!1)}catch(Je){Qt(k,k.return,Je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Kl(t,a))));break;case 19:ci(n,t),ui(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Kl(t,o)));break;case 30:break;case 21:break;default:ci(n,t),ui(t)}}function ui(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(M0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(t);Zl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&($n(v,""),a.flags&=-33);var C=Tf(t);Zl(t,C,v);break;case 3:case 4:var k=a.stateNode.containerInfo,ce=Tf(t);Af(t,ce,k);break;default:throw Error(s(161))}}catch(Me){Qt(t,t.return,Me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Na(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)T0(t,n.alternate,n),n=n.sibling}function Gs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ts(4,n,n.return),Gs(n);break;case 1:sa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&S0(n,n.return,a),Gs(n);break;case 27:Ho(n.stateNode);case 26:case 5:sa(n,n.return),Gs(n);break;case 22:n.memoizedState===null&&Gs(n);break;case 30:Gs(n);break;default:Gs(n)}t=t.sibling}}function Da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Da(u,f,a),Do(4,f);break;case 1:if(Da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Qt(o,o.return,ce)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)lm(k[u],C)}catch(ce){Qt(o,o.return,ce)}}a&&v&64&&_0(f),Uo(f,f.return);break;case 27:b0(f);case 26:case 5:Da(u,f,a),a&&o===null&&v&4&&y0(f),Uo(f,f.return);break;case 12:Da(u,f,a);break;case 31:Da(u,f,a),a&&v&4&&R0(u,f);break;case 13:Da(u,f,a),a&&v&4&&C0(u,f);break;case 22:f.memoizedState===null&&Da(u,f,a),Uo(f,f.return);break;case 30:break;default:Da(u,f,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function qi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(t,n,a,o),n=n.sibling}function U0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:qi(t,n,a,o),u&2048&&Do(9,n);break;case 1:qi(t,n,a,o);break;case 3:qi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){qi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Qt(n,n.return,k)}}else qi(t,n,a,o);break;case 31:qi(t,n,a,o);break;case 13:qi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?qi(t,n,a,o):Lo(t,n):f._visibility&2?qi(t,n,a,o):(f._visibility|=2,yr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rf(v,n);break;case 24:qi(t,n,a,o),u&2048&&Cf(n.alternate,n);break;default:qi(t,n,a,o)}}function yr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,C=a,k=o,ce=v.flags;switch(v.tag){case 0:case 11:case 15:yr(f,v,C,k,u),Do(8,v);break;case 23:break;case 22:var Me=v.stateNode;v.memoizedState!==null?Me._visibility&2?yr(f,v,C,k,u):Lo(f,v):(Me._visibility|=2,yr(f,v,C,k,u)),u&&ce&2048&&Rf(v.alternate,v);break;case 24:yr(f,v,C,k,u),u&&ce&2048&&Cf(v.alternate,v);break;default:yr(f,v,C,k,u)}n=n.sibling}}function Lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Rf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Cf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var Oo=8192;function Mr(t,n,a){if(t.subtreeFlags&Oo)for(t=t.child;t!==null;)L0(t,n,a),t=t.sibling}function L0(t,n,a){switch(t.tag){case 26:Mr(t,n,a),t.flags&Oo&&t.memoizedState!==null&&VS(a,Wi,t.memoizedState,t.memoizedProps);break;case 5:Mr(t,n,a);break;case 3:case 4:var o=Wi;Wi=uc(t.stateNode.containerInfo),Mr(t,n,a),Wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,Mr(t,n,a),Oo=o):Mr(t,n,a));break;default:Mr(t,n,a)}}function O0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Po(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,I0(o,t)}O0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(t),t=t.sibling}function P0(t){switch(t.tag){case 0:case 11:case 15:Po(t),t.flags&2048&&ts(9,t,t.return);break;case 3:Po(t);break;case 12:Po(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ql(t)):Po(t);break;default:Po(t)}}function Ql(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];On=o,I0(o,t)}O0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ts(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}t=t.sibling}}function I0(t,n){for(;On!==null;){var a=On;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,On=o;else e:for(a=t;On!==null;){o=On;var u=o.sibling,f=o.return;if(A0(o),o===a){On=null;break e}if(u!==null){u.return=f,On=u;break e}On=f}}}var iS={getCacheForType:function(t){var n=Gn(bn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Gn(bn).controller.signal}},aS=typeof WeakMap=="function"?WeakMap:Map,Yt=0,an=null,bt=null,Rt=0,Kt=0,Si=null,ns=!1,br=!1,Nf=!1,Ua=0,vn=0,is=0,Hs=0,Df=0,yi=0,Er=0,Io=null,fi=null,Uf=!1,Jl=0,F0=0,$l=1/0,ec=null,as=null,Cn=0,ss=null,Tr=null,La=0,Lf=0,Of=null,z0=null,Fo=0,Pf=null;function Mi(){return(Yt&2)!==0&&Rt!==0?Rt&-Rt:z.T!==null?Hf():ea()}function B0(){if(yi===0)if((Rt&536870912)===0||Ot){var t=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),yi=t}else yi=536870912;return t=xi.current,t!==null&&(t.flags|=32),yi}function di(t,n,a){(t===an&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),rs(t,Rt,yi,!1)),Ye(t,a),((Yt&2)===0||t!==an)&&(t===an&&((Yt&2)===0&&(Hs|=a),vn===4&&rs(t,Rt,yi,!1)),ra(t))}function G0(t,n,a){if((Yt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=o?oS(t,n):Ff(t,n,!0),f=o;do{if(u===0){br&&!o&&rs(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!sS(a)){u=Ff(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=t;u=Io;var k=C.current.memoizedState.isDehydrated;if(k&&(Ar(C,v).flags|=256),v=Ff(C,v,!1),v!==2){if(Nf&&!k){C.errorRecoveryDisabledLanes|=f,Hs|=f,u=4;break e}f=fi,fi=u,f!==null&&(fi===null?fi=f:fi.push.apply(fi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Ar(t,0),rs(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rs(o,n,yi,!ns);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-Ft(),10<u)){if(rs(o,n,yi,!ns),ye(o,0,!0)!==0)break e;La=n,o.timeoutHandle=vg(H0.bind(null,o,a,fi,ec,Uf,n,yi,Hs,Er,ns,f,"Throttled",-0,0),u);break e}H0(o,a,fi,ec,Uf,n,yi,Hs,Er,ns,f,null,-0,0)}}break}while(!0);ra(t)}function H0(t,n,a,o,u,f,v,C,k,ce,Me,we,de,me){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ln},L0(n,f,we);var Je=(f&62914560)===f?Jl-Ft():(f&4194048)===f?F0-Ft():0;if(Je=kS(we,Je),Je!==null){La=f,t.cancelPendingCommit=Je(Z0.bind(null,t,n,f,a,o,u,v,C,k,Me,we,null,de,me)),rs(t,f,v,!ce);return}}Z0(t,n,f,a,o,u,v,C,k)}function sS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!gi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(t,n,a,o){n&=~Df,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-We(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&qt(t,a,n)}function tc(){return(Yt&6)===0?(zo(0),!1):!0}function If(){if(bt!==null){if(Kt===0)var t=bt.return;else t=bt,Ma=Us=null,Qu(t),gr=null,So=0,t=bt;for(;t!==null;)x0(t.alternate,t),t=t.return;bt=null}}function Ar(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,TS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),La=0,If(),an=t,bt=a=Sa(t.current,null),Rt=n,Kt=0,Si=null,ns=!1,br=Oe(t,n),Nf=!1,Er=yi=Df=Hs=is=vn=0,fi=Io=null,Uf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-We(o),f=1<<u;n|=t[u],o&=~f}return Ua=n,Ml(),a}function V0(t,n){vt=null,z.H=Ro,n===mr||n===Nl?(n=am(),Kt=3):n===Bu?(n=am(),Kt=4):Kt=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Si=n,bt===null&&(vn=1,Xl(t,Ni(n,t.current)))}function k0(){var t=xi.current;return t===null?!0:(Rt&4194048)===Rt?Oi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===Oi:!1}function X0(){var t=z.H;return z.H=Ro,t===null?Ro:t}function W0(){var t=z.A;return z.A=iS,t}function nc(){vn=4,ns||(Rt&4194048)!==Rt&&xi.current!==null||(br=!0),(is&134217727)===0&&(Hs&134217727)===0||an===null||rs(an,Rt,yi,!1)}function Ff(t,n,a){var o=Yt;Yt|=2;var u=X0(),f=W0();(an!==t||Rt!==n)&&(ec=null,Ar(t,n)),n=!1;var v=vn;e:do try{if(Kt!==0&&bt!==null){var C=bt,k=Si;switch(Kt){case 8:If(),v=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var ce=Kt;if(Kt=0,Si=null,wr(t,C,k,ce),a&&br){v=0;break e}break;default:ce=Kt,Kt=0,Si=null,wr(t,C,k,ce)}}rS(),v=vn;break}catch(Me){V0(t,Me)}while(!0);return n&&t.shellSuspendCounter++,Ma=Us=null,Yt=o,z.H=u,z.A=f,bt===null&&(an=null,Rt=0,Ml()),v}function rS(){for(;bt!==null;)q0(bt)}function oS(t,n){var a=Yt;Yt|=2;var o=X0(),u=W0();an!==t||Rt!==n?(ec=null,$l=Ft()+500,Ar(t,n)):br=Oe(t,n);e:do try{if(Kt!==0&&bt!==null){n=bt;var f=Si;t:switch(Kt){case 1:Kt=0,Si=null,wr(t,n,f,1);break;case 2:case 9:if(nm(f)){Kt=0,Si=null,j0(n);break}n=function(){Kt!==2&&Kt!==9||an!==t||(Kt=7),ra(t)},f.then(n,n);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:nm(f)?(Kt=0,Si=null,j0(n)):(Kt=0,Si=null,wr(t,n,f,7));break;case 5:var v=null;switch(bt.tag){case 26:v=bt.memoizedState;case 5:case 27:var C=bt;if(v?Ug(v):C.stateNode.complete){Kt=0,Si=null;var k=C.sibling;if(k!==null)bt=k;else{var ce=C.return;ce!==null?(bt=ce,ic(ce)):bt=null}break t}}Kt=0,Si=null,wr(t,n,f,5);break;case 6:Kt=0,Si=null,wr(t,n,f,6);break;case 8:If(),vn=6;break e;default:throw Error(s(462))}}lS();break}catch(Me){V0(t,Me)}while(!0);return Ma=Us=null,z.H=o,z.A=u,Yt=a,bt!==null?0:(an=null,Rt=0,Ml(),vn)}function lS(){for(;bt!==null&&!Wt();)q0(bt)}function q0(t){var n=g0(t.alternate,t,Ua);t.memoizedProps=t.pendingProps,n===null?ic(t):bt=n}function j0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=u0(a,n,n.pendingProps,n.type,void 0,Rt);break;case 11:n=u0(a,n,n.pendingProps,n.type.render,n.ref,Rt);break;case 5:Qu(n);default:x0(a,n),n=bt=Wp(n,Ua),n=g0(a,n,Ua)}t.memoizedProps=t.pendingProps,n===null?ic(t):bt=n}function wr(t,n,a,o){Ma=Us=null,Qu(n),gr=null,So=0;var u=n.return;try{if(K_(t,u,n,a,Rt)){vn=1,Xl(t,Ni(a,t.current)),bt=null;return}}catch(f){if(u!==null)throw bt=u,f;vn=1,Xl(t,Ni(a,t.current)),bt=null;return}n.flags&32768?(Ot||o===1?t=!0:br||(Rt&536870912)!==0?t=!1:(ns=t=!0,(o===2||o===9||o===3||o===6)&&(o=xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Y0(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){Y0(n,ns);return}t=n.return;var a=$_(n.alternate,n,Ua);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);vn===0&&(vn=5)}function Y0(t,n){do{var a=eS(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);vn=6,bt=null}function Z0(t,n,a,o,u,f,v,C,k){t.cancelPendingCommit=null;do ac();while(Cn!==0);if((Yt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Eu,sn(t,a,f,v,C,k),t===an&&(bt=an=null,Rt=0),Tr=n,ss=t,La=a,Lf=f,Of=u,z0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,dS($,function(){return eg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=X.p,X.p=2,v=Yt,Yt|=4;try{tS(t,n,a)}finally{Yt=v,X.p=u,z.T=o}}Cn=1,K0(),Q0(),J0()}}function K0(){if(Cn===1){Cn=0;var t=ss,n=Tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=X.p;X.p=2;var u=Yt;Yt|=4;try{N0(n,t);var f=Zf,v=Ip(t.containerInfo),C=f.focusedElem,k=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&Pp(C.ownerDocument.documentElement,C)){if(k!==null&&_u(C)){var ce=k.start,Me=k.end;if(Me===void 0&&(Me=ce),"selectionStart"in C)C.selectionStart=ce,C.selectionEnd=Math.min(Me,C.value.length);else{var we=C.ownerDocument||document,de=we&&we.defaultView||window;if(de.getSelection){var me=de.getSelection(),Je=C.textContent.length,lt=Math.min(k.start,Je),nn=k.end===void 0?lt:Math.min(k.end,Je);!me.extend&&lt>nn&&(v=nn,nn=lt,lt=v);var ee=Op(C,lt),q=Op(C,nn);if(ee&&q&&(me.rangeCount!==1||me.anchorNode!==ee.node||me.anchorOffset!==ee.offset||me.focusNode!==q.node||me.focusOffset!==q.offset)){var le=we.createRange();le.setStart(ee.node,ee.offset),me.removeAllRanges(),lt>nn?(me.addRange(le),me.extend(q.node,q.offset)):(le.setEnd(q.node,q.offset),me.addRange(le))}}}}for(we=[],me=C;me=me.parentNode;)me.nodeType===1&&we.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<we.length;C++){var Ae=we[C];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}gc=!!Yf,Zf=Yf=null}finally{Yt=u,X.p=o,z.T=a}}t.current=n,Cn=2}}function Q0(){if(Cn===2){Cn=0;var t=ss,n=Tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=X.p;X.p=2;var u=Yt;Yt|=4;try{T0(t,n.alternate,n)}finally{Yt=u,X.p=o,z.T=a}}Cn=3}}function J0(){if(Cn===4||Cn===3){Cn=0,Q();var t=ss,n=Tr,a=La,o=z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,Tr=ss=null,$0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(as=null),va(a),n=n.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=X.p,X.p=2,z.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var C=o[v];f(C.value,{componentStack:C.stack})}}finally{z.T=n,X.p=u}}(La&3)!==0&&ac(),ra(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Pf?Fo++:(Fo=0,Pf=t):Fo=0,zo(0)}}function $0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function ac(){return K0(),Q0(),J0(),eg()}function eg(){if(Cn!==5)return!1;var t=ss,n=Lf;Lf=0;var a=va(La),o=z.T,u=X.p;try{X.p=32>a?32:a,z.T=null,a=Of,Of=null;var f=ss,v=La;if(Cn=0,Tr=ss=null,La=0,(Yt&6)!==0)throw Error(s(331));var C=Yt;if(Yt|=4,P0(f.current),U0(f,f.current,v,a),Yt=C,zo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{X.p=u,z.T=o,$0(t,n)}}function tg(t,n,a){n=Ni(a,n),n=hf(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(Ye(t,2),ra(t))}function Qt(t,n,a){if(t.tag===3)tg(t,t,a);else for(;n!==null;){if(n.tag===3){tg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){t=Ni(a,t),a=n0(2),o=Ja(n,a,2),o!==null&&(i0(a,o,n,t),Ye(o,2),ra(o));break}}n=n.return}}function zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new aS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=cS.bind(null,t,n,a),n.then(t,t))}function cS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,an===t&&(Rt&a)===a&&(vn===4||vn===3&&(Rt&62914560)===Rt&&300>Ft()-Jl?(Yt&2)===0&&Ar(t,0):Df|=a,Er===Rt&&(Er=0)),ra(t)}function ng(t,n){n===0&&(n=Re()),t=Cs(t,n),t!==null&&(Ye(t,n),ra(t))}function uS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(t,a)}function fS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ng(t,a)}function dS(t,n){return Ut(t,n)}var sc=null,Rr=null,Bf=!1,rc=!1,Gf=!1,os=0;function ra(t){t!==Rr&&t.next===null&&(Rr===null?sc=Rr=t:Rr=Rr.next=t),rc=!0,Bf||(Bf=!0,pS())}function zo(t,n){if(!Gf&&rc){Gf=!0;do for(var a=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-We(42|t)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,rg(o,f))}else f=Rt,f=ye(o,o===an?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Oe(o,f)||(a=!0,rg(o,f));o=o.next}while(a);Gf=!1}}function hS(){ig()}function ig(){rc=Bf=!1;var t=0;os!==0&&ES()&&(t=os);for(var n=Ft(),a=null,o=sc;o!==null;){var u=o.next,f=ag(o,n);f===0?(o.next=null,a===null?sc=u:a.next=u,u===null&&(Rr=a)):(a=o,(t!==0||(f&3)!==0)&&(rc=!0)),o=u}Cn!==0&&Cn!==5||zo(t),os!==0&&(os=0)}function ag(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-We(f),C=1<<v,k=u[v];k===-1?((C&a)===0||(C&o)!==0)&&(u[v]=He(C,n)):k<=n&&(t.expiredLanes|=C),f&=~C}if(n=an,a=Rt,a=ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Zt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Zt(o),va(a)){case 2:case 8:a=E;break;case 32:a=$;break;case 268435456:a=ge;break;default:a=$}return o=sg.bind(null,t),a=Ut(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Zt(o),t.callbackPriority=2,t.callbackNode=null,2}function sg(t,n){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var o=Rt;return o=ye(t,t===an?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(G0(t,o,n),ag(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?sg.bind(null,t):null)}function rg(t,n){if(ac())return null;G0(t,n,!0)}function pS(){AS(function(){(Yt&6)!==0?Ut(L,hS):ig()})}function Hf(){if(os===0){var t=hr;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),os=t}return os}function og(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mn(""+t)}function lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function mS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=og((u[dt]||null).action),v=o.submitter;v&&(n=(n=v[dt]||null)?og(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new xl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(os!==0){var k=v?lg(u,v):new FormData(u);of(a,{pending:!0,data:k,method:u.method,action:f},null,k)}}else typeof f=="function"&&(C.preventDefault(),k=v?lg(u,v):new FormData(u),of(a,{pending:!0,data:k,method:u.method,action:f},f,k))},currentTarget:u}]})}}for(var Vf=0;Vf<bu.length;Vf++){var kf=bu[Vf],gS=kf.toLowerCase(),vS=kf[0].toUpperCase()+kf.slice(1);Xi(gS,"on"+vS)}Xi(Bp,"onAnimationEnd"),Xi(Gp,"onAnimationIteration"),Xi(Hp,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(L_,"onTransitionRun"),Xi(O_,"onTransitionStart"),Xi(P_,"onTransitionCancel"),Xi(Vp,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var C=o[v],k=C.instance,ce=C.currentTarget;if(C=C.listener,k!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){yl(Me)}u.currentTarget=null,f=k}else for(v=0;v<o.length;v++){if(C=o[v],k=C.instance,ce=C.currentTarget,C=C.listener,k!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(Me){yl(Me)}u.currentTarget=null,f=k}}}}function Et(t,n){var a=n[Gt];a===void 0&&(a=n[Gt]=new Set);var o=t+"__bubble";a.has(o)||(ug(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),ug(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[oc]){t[oc]=!0,er.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,Xf("selectionchange",!1,n))}}function ug(t,n,a,o){switch(Bg(n)){case 2:var u=qS;break;case 8:u=jS;break;default:u=rd}a=u.bind(null,n,a,t),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var C=o.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=o.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=Ri(C),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){o=f=v;continue e}C=C.parentNode}}o=o.return}mp(function(){var ce=f,Me=tr(a),we=[];e:{var de=kp.get(t);if(de!==void 0){var me=xl,Je=t;switch(t){case"keypress":if(gl(a)===0)break e;case"keydown":case"keyup":me=f_;break;case"focusin":Je="focus",me=pu;break;case"focusout":Je="blur",me=pu;break;case"beforeblur":case"afterblur":me=pu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=p_;break;case Bp:case Gp:case Hp:me=n_;break;case Vp:me=g_;break;case"scroll":case"scrollend":me=Qx;break;case"wheel":me=x_;break;case"copy":case"cut":case"paste":me=a_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Sp;break;case"toggle":case"beforetoggle":me=S_}var lt=(n&4)!==0,nn=!lt&&(t==="scroll"||t==="scrollend"),ee=lt?de!==null?de+"Capture":null:de;lt=[];for(var q=ce,le;q!==null;){var Ae=q;if(le=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||le===null||ee===null||(Ae=ro(q,ee),Ae!=null&&lt.push(Go(q,Ae,le))),nn)break;q=q.return}0<lt.length&&(de=new me(de,Je,null,a,Me),we.push({event:de,listeners:lt}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",me=t==="mouseout"||t==="pointerout",de&&a!==pl&&(Je=a.relatedTarget||a.fromElement)&&(Ri(Je)||Je[yn]))break e;if((me||de)&&(de=Me.window===Me?Me:(de=Me.ownerDocument)?de.defaultView||de.parentWindow:window,me?(Je=a.relatedTarget||a.toElement,me=ce,Je=Je?Ri(Je):null,Je!==null&&(nn=c(Je),lt=Je.tag,Je!==nn||lt!==5&&lt!==27&&lt!==6)&&(Je=null)):(me=null,Je=ce),me!==Je)){if(lt=xp,Ae="onMouseLeave",ee="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Sp,Ae="onPointerLeave",ee="onPointerEnter",q="pointer"),nn=me==null?de:Vi(me),le=Je==null?de:Vi(Je),de=new lt(Ae,q+"leave",me,a,Me),de.target=nn,de.relatedTarget=le,Ae=null,Ri(Me)===ce&&(lt=new lt(ee,q+"enter",Je,a,Me),lt.target=le,lt.relatedTarget=nn,Ae=lt),nn=Ae,me&&Je)t:{for(lt=_S,ee=me,q=Je,le=0,Ae=ee;Ae;Ae=lt(Ae))le++;Ae=0;for(var at=q;at;at=lt(at))Ae++;for(;0<le-Ae;)ee=lt(ee),le--;for(;0<Ae-le;)q=lt(q),Ae--;for(;le--;){if(ee===q||q!==null&&ee===q.alternate){lt=ee;break t}ee=lt(ee),q=lt(q)}lt=null}else lt=null;me!==null&&fg(we,de,me,lt,!1),Je!==null&&nn!==null&&fg(we,nn,Je,lt,!0)}}e:{if(de=ce?Vi(ce):window,me=de.nodeName&&de.nodeName.toLowerCase(),me==="select"||me==="input"&&de.type==="file")var kt=Rp;else if(Ap(de))if(Cp)kt=N_;else{kt=R_;var tt=w_}else me=de.nodeName,!me||me.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?ce&&wt(ce.elementType)&&(kt=Rp):kt=C_;if(kt&&(kt=kt(t,ce))){wp(we,kt,a,Me);break e}tt&&tt(t,de,ce),t==="focusout"&&ce&&de.type==="number"&&ce.memoizedProps.value!=null&&Ke(de,"number",de.value)}switch(tt=ce?Vi(ce):window,t){case"focusin":(Ap(tt)||tt.contentEditable==="true")&&(sr=tt,Su=ce,mo=null);break;case"focusout":mo=Su=sr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Fp(we,a,Me);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":Fp(we,a,Me)}var xt;if(gu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else ar?Ep(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(yp&&a.locale!=="ko"&&(ar||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&ar&&(xt=gp()):(Wa=Me,fu="value"in Wa?Wa.value:Wa.textContent,ar=!0)),tt=lc(ce,Ct),0<tt.length&&(Ct=new _p(Ct,t,null,a,Me),we.push({event:Ct,listeners:tt}),xt?Ct.data=xt:(xt=Tp(a),xt!==null&&(Ct.data=xt)))),(xt=M_?b_(t,a):E_(t,a))&&(Ct=lc(ce,"onBeforeInput"),0<Ct.length&&(tt=new _p("onBeforeInput","beforeinput",null,a,Me),we.push({event:tt,listeners:Ct}),tt.data=xt)),mS(we,t,ce,a,Me)}cg(we,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ro(t,a),u!=null&&o.unshift(Go(t,u,f)),u=ro(t,n),u!=null&&o.push(Go(t,u,f))),t.tag===3)return o;t=t.return}return[]}function _S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function fg(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var C=a,k=C.alternate,ce=C.stateNode;if(C=C.tag,k!==null&&k===o)break;C!==5&&C!==26&&C!==27||ce===null||(k=ce,u?(ce=ro(a,f),ce!=null&&v.unshift(Go(a,ce,k))):u||(ce=ro(a,f),ce!=null&&v.push(Go(a,ce,k)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var SS=/\r\n?/g,yS=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(yS,"")}function hg(t,n){return n=dg(n),dg(t)===n}function tn(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||$n(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&$n(t,""+o);break;case"className":Te(t,"class",o);break;case"tabIndex":Te(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Te(t,a,o);break;case"style":ri(t,o,f);break;case"data":if(n!=="object"){Te(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Mn(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&tn(t,n,"name",u.name,u,null),tn(t,n,"formEncType",u.formEncType,u,null),tn(t,n,"formMethod",u.formMethod,u,null),tn(t,n,"formTarget",u.formTarget,u,null)):(tn(t,n,"encType",u.encType,u,null),tn(t,n,"method",u.method,u,null),tn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Mn(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ln);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Mn(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),be(t,"popover",o);break;case"xlinkActuate":Ce(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ce(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ce(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ce(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ce(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ce(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ce(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ei.get(a)||a,be(t,a,o))}}function jf(t,n,a,o,u,f){switch(a){case"style":ri(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?$n(t,o):(typeof o=="number"||typeof o=="bigint")&&$n(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ln);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[dt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):be(t,a,o)}}}function Vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,f,v,a,null)}}u&&tn(t,n,"srcSet",a.srcSet,a,null),o&&tn(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var C=f=v=u=null,k=null,ce=null;for(o in a)if(a.hasOwnProperty(o)){var Me=a[o];if(Me!=null)switch(o){case"name":u=Me;break;case"type":v=Me;break;case"checked":k=Me;break;case"defaultChecked":ce=Me;break;case"value":f=Me;break;case"defaultValue":C=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(s(137,n));break;default:tn(t,n,o,Me,a,null)}}ht(t,f,C,k,ce,v,u,!1);return;case"select":Et("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":o=C;default:tn(t,n,u,C,a,null)}n=f,a=v,t.multiple=!!o,n!=null?$t(t,!!o,n,!1):a!=null&&$t(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:tn(t,n,v,C,a,null)}mi(t,o,u,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:tn(t,n,k,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Bo.length;o++)Et(Bo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in a)if(a.hasOwnProperty(ce)&&(o=a[ce],o!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,ce,o,a,null)}return;default:if(wt(n)){for(Me in a)a.hasOwnProperty(Me)&&(o=a[Me],o!==void 0&&jf(t,n,Me,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&tn(t,n,C,o,a,null))}function MS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,k=null,ce=null,Me=null;for(me in a){var we=a[me];if(a.hasOwnProperty(me)&&we!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":k=we;default:o.hasOwnProperty(me)||tn(t,n,me,null,o,we)}}for(var de in o){var me=o[de];if(we=a[de],o.hasOwnProperty(de)&&(me!=null||we!=null))switch(de){case"type":f=me;break;case"name":u=me;break;case"checked":ce=me;break;case"defaultChecked":Me=me;break;case"value":v=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:me!==we&&tn(t,n,de,me,o,we)}}je(t,v,C,k,ce,Me,f,u);return;case"select":me=v=C=de=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":me=k;default:o.hasOwnProperty(f)||tn(t,n,f,null,o,k)}for(u in o)if(f=o[u],k=a[u],o.hasOwnProperty(u)&&(f!=null||k!=null))switch(u){case"value":de=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==k&&tn(t,n,u,f,o,k)}n=C,a=v,o=me,de!=null?$t(t,!!a,de,!1):!!o!=!!a&&(n!=null?$t(t,!!a,n,!0):$t(t,!!a,a?[]:"",!1));return;case"textarea":me=de=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:tn(t,n,C,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":de=u;break;case"defaultValue":me=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&tn(t,n,v,u,o,f)}Jn(t,de,me);return;case"option":for(var Je in a)if(de=a[Je],a.hasOwnProperty(Je)&&de!=null&&!o.hasOwnProperty(Je))switch(Je){case"selected":t.selected=!1;break;default:tn(t,n,Je,null,o,de)}for(k in o)if(de=o[k],me=a[k],o.hasOwnProperty(k)&&de!==me&&(de!=null||me!=null))switch(k){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:tn(t,n,k,de,o,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in a)de=a[lt],a.hasOwnProperty(lt)&&de!=null&&!o.hasOwnProperty(lt)&&tn(t,n,lt,null,o,de);for(ce in o)if(de=o[ce],me=a[ce],o.hasOwnProperty(ce)&&de!==me&&(de!=null||me!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:tn(t,n,ce,de,o,me)}return;default:if(wt(n)){for(var nn in a)de=a[nn],a.hasOwnProperty(nn)&&de!==void 0&&!o.hasOwnProperty(nn)&&jf(t,n,nn,void 0,o,de);for(Me in o)de=o[Me],me=a[Me],!o.hasOwnProperty(Me)||de===me||de===void 0&&me===void 0||jf(t,n,Me,de,o,me);return}}for(var ee in a)de=a[ee],a.hasOwnProperty(ee)&&de!=null&&!o.hasOwnProperty(ee)&&tn(t,n,ee,null,o,de);for(we in o)de=o[we],me=a[we],!o.hasOwnProperty(we)||de===me||de==null&&me==null||tn(t,n,we,de,o,me)}function pg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&pg(v)){for(v=0,C=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],ce=k.startTime;if(ce>C)break;var Me=k.transferSize,we=k.initiatorType;Me&&pg(we)&&(k=k.responseEnd,v+=Me*(k<C?1:(C-ce)/(k-ce)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yf=null,Zf=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function ES(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,TS=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(wS)}:vg;function wS(t){setTimeout(function(){throw t})}function ls(t){return t==="head"}function _g(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ho(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Ho(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[zn]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ho(t.ownerDocument.body);a=u}while(a);Ur(n)}function Sg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),xn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function RS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[zn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Pi(t.nextSibling),t===null)break}return null}function CS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pi(t.nextSibling),t===null))return null;return t}function yg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Pi(t.nextSibling),t===null))return null;return t}function $f(t){return t.data==="$?"||t.data==="$~"}function ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function NS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var td=null;function Mg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function bg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Eg(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ho(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xn(t)}var Ii=new Map,Tg=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Oa=X.d;X.d={f:DS,r:US,D:LS,C:OS,L:PS,m:IS,X:zS,S:FS,M:BS};function DS(){var t=Oa.f(),n=tc();return t||n}function US(t){var n=Hi(t);n!==null&&n.tag===5&&n.type==="form"?Vm(n):Oa.r(t)}var Cr=typeof document>"u"?null:document;function Ag(t,n,a){var o=Cr;if(o&&typeof n=="string"&&n){var u=St(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Tg.has(u)||(Tg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Vn(n,"link",t),mn(n),o.head.appendChild(n)))}}function LS(t){Oa.D(t),Ag("dns-prefetch",t,null)}function OS(t,n){Oa.C(t,n),Ag("preconnect",t,n)}function PS(t,n,a){Oa.L(t,n,a);var o=Cr;if(o&&t&&n){var u='link[rel="preload"][as="'+St(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+St(a.imageSizes)+'"]')):u+='[href="'+St(t)+'"]';var f=u;switch(n){case"style":f=Nr(t);break;case"script":f=Dr(t)}Ii.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ii.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(f))||n==="script"&&o.querySelector(ko(f))||(n=o.createElement("link"),Vn(n,"link",t),mn(n),o.head.appendChild(n)))}}function IS(t,n){Oa.m(t,n);var a=Cr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+St(o)+'"][href="'+St(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Dr(t)}if(!Ii.has(f)&&(t=_({rel:"modulepreload",href:t},n),Ii.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(f)))return}o=a.createElement("link"),Vn(o,"link",t),mn(o),a.head.appendChild(o)}}}function FS(t,n,a){Oa.S(t,n,a);var o=Cr;if(o&&t){var u=na(o).hoistableStyles,f=Nr(t);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=o.querySelector(Vo(f)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ii.get(f))&&nd(t,a);var k=v=o.createElement("link");mn(k),Vn(k,"link",t),k._p=new Promise(function(ce,Me){k.onload=ce,k.onerror=Me}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,fc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function zS(t,n){Oa.X(t,n);var a=Cr;if(a&&t){var o=na(a).hoistableScripts,u=Dr(t),f=o.get(u);f||(f=a.querySelector(ko(u)),f||(t=_({src:t,async:!0},n),(n=Ii.get(u))&&id(t,n),f=a.createElement("script"),mn(f),Vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function BS(t,n){Oa.M(t,n);var a=Cr;if(a&&t){var o=na(a).hoistableScripts,u=Dr(t),f=o.get(u);f||(f=a.querySelector(ko(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=Ii.get(u))&&id(t,n),f=a.createElement("script"),mn(f),Vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wg(t,n,a,o){var u=(u=Z.current)?uc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Nr(a.href),a=na(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var f=na(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Vo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ii.set(t,a),f||GS(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Dr(a),a=na(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Nr(t){return'href="'+St(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function Rg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function GS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Vn(n,"link",a),mn(n),t.head.appendChild(n))}function Dr(t){return'[src="'+St(t)+'"]'}function ko(t){return"script[async]"+t}function Cg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+St(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),Vn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Nr(a.href);var f=t.querySelector(Vo(u));if(f)return n.state.loading|=4,n.instance=f,mn(f),f;o=Rg(a),(u=Ii.get(u))&&nd(o,u),f=(t.ownerDocument||t).createElement("link"),mn(f);var v=f;return v._p=new Promise(function(C,k){v.onload=C,v.onerror=k}),Vn(f,"link",o),n.state.loading|=4,fc(f,a.precedence,t),n.instance=f;case"script":return f=Dr(a.src),(u=t.querySelector(ko(f)))?(n.instance=u,mn(u),u):(o=a,(u=Ii.get(f))&&(o=_({},a),id(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),Vn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var C=o[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function Ng(t,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[zn]||f[pn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var C=o.get(v);C?C.push(f):o.set(v,[f])}}return o}function Dg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function HS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function VS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Nr(o.href),f=n.querySelector(Vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,mn(f);return}f=n.ownerDocument||n,o=Rg(o),(u=Ii.get(u))&&nd(o,u),f=f.createElement("link"),mn(f);var v=f;v._p=new Promise(function(C,k){v.onload=C,v.onerror=k}),Vn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function kS(t,n){return t.stylesheets&&t.count===0&&mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ad===0&&(ad=62500*bS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&mc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ad?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function mc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(XS,t),pc=null,hc.call(t))}function XS(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:G,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function WS(t,n,a,o,u,f,v,C,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Lg(t,n,a,o,u,f,v,C,k,ce,Me,we){return t=new WS(t,n,a,v,k,ce,Me,we,C),n=1,f===!0&&(n|=24),f=vi(3,null,null,n),t.current=f,f.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Gu(f),t}function Og(t){return t?(t=lr,t):lr}function Pg(t,n,a,o,u,f){u=Og(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ja(t,o,n),a!==null&&(di(a,t,n),Mo(a,t,n))}function Ig(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){Ig(t,n),(t=t.alternate)&&Ig(t,n)}function Fg(t){if(t.tag===13||t.tag===31){var n=Cs(t,67108864);n!==null&&di(n,t,67108864),sd(t,67108864)}}function zg(t){if(t.tag===13||t.tag===31){var n=Mi();n=$i(n);var a=Cs(t,n);a!==null&&di(a,t,n),sd(t,n)}}var gc=!0;function qS(t,n,a,o){var u=z.T;z.T=null;var f=X.p;try{X.p=2,rd(t,n,a,o)}finally{X.p=f,z.T=u}}function jS(t,n,a,o){var u=z.T;z.T=null;var f=X.p;try{X.p=8,rd(t,n,a,o)}finally{X.p=f,z.T=u}}function rd(t,n,a,o){if(gc){var u=od(o);if(u===null)qf(t,n,o,vc,a),Gg(t,o);else if(ZS(u,t,n,a,o))o.stopPropagation();else if(Gg(t,o),n&4&&-1<YS.indexOf(t)){for(;u!==null;){var f=Hi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ue(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var k=1<<31-We(v);C.entanglements[1]|=k,v&=~k}ra(f),(Yt&6)===0&&($l=Ft()+500,zo(0))}}break;case 31:case 13:C=Cs(f,2),C!==null&&di(C,f,2),tc(),sd(f,2)}if(f=od(o),f===null&&qf(t,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function od(t){return t=tr(t),ld(t)}var vc=null;function ld(t){if(vc=null,t=Ri(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Bg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case L:return 2;case E:return 8;case $:case te:return 32;case ge:return 268435456;default:return 32}default:return 32}}var cd=!1,cs=null,us=null,fs=null,Wo=new Map,qo=new Map,ds=[],YS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(t,n){switch(t){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function jo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Hi(n),n!==null&&Fg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ZS(t,n,a,o,u){switch(n){case"focusin":return cs=jo(cs,t,n,a,o,u),!0;case"dragenter":return us=jo(us,t,n,a,o,u),!0;case"mouseover":return fs=jo(fs,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Wo.set(f,jo(Wo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,qo.set(f,jo(qo.get(f)||null,t,n,a,o,u)),!0}return!1}function Hg(t){var n=Ri(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,xa(t.priority,function(){zg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,xa(t.priority,function(){zg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);pl=o,a.target.dispatchEvent(o),pl=null}else return n=Hi(a),n!==null&&Fg(n),t.blockedOn=a,!1;n.shift()}return!0}function Vg(t,n,a){xc(t)&&a.delete(n)}function KS(){cd=!1,cs!==null&&xc(cs)&&(cs=null),us!==null&&xc(us)&&(us=null),fs!==null&&xc(fs)&&(fs=null),Wo.forEach(Vg),qo.forEach(Vg)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,KS)))}var Sc=null;function kg(t){Sc!==t&&(Sc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ld(o||a)===null)continue;break}var f=Hi(a);f!==null&&(t.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ur(t){function n(k){return _c(k,t)}cs!==null&&_c(cs,t),us!==null&&_c(us,t),fs!==null&&_c(fs,t),Wo.forEach(n),qo.forEach(n);for(var a=0;a<ds.length;a++){var o=ds[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ds.length&&(a=ds[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&ds.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[dt]||null;if(typeof f=="function")v||kg(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[dt]||null)C=v.formAction;else if(ld(u)!==null)continue}else C=v.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),kg(a)}}}function Xg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ud(t){this._internalRoot=t}yc.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Mi();Pg(a,o,t,n,null,null)},yc.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pg(t.current,2,null,t,null,null),tc(),n[yn]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ea();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ds.length&&n!==0&&n<ds[a].priority;a++);ds.splice(a,0,t),a===0&&Hg(t)}};var Wg=e.version;if(Wg!=="19.2.8")throw Error(s(527,Wg,"19.2.8"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var QS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{ve=Mc.inject(QS),xe=Mc}catch{}}return Zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Jm,f=$m,v=e0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Lg(t,1,!1,null,null,a,o,null,u,f,v,Xg),t[yn]=n.current,Wf(t),new ud(n)},Zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Jm,v=$m,C=e0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Lg(t,1,!0,n,a??null,o,u,k,f,v,C,Xg),n.context=Og(null),a=n.current,o=Mi(),o=$i(o),u=Qa(o),u.callback=null,Ja(a,u,o),a=o,n.current.lanes=a,Ye(n,a),ra(n),t[yn]=n.current,Wf(t),new yc(n)},Zo.version="19.2.8",Zo}var tv;function oy(){if(tv)return hd.exports;tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=ry(),hd.exports}var ly=oy();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",cy=0,nv=1,uy=2,sl=1,fy=2,il=3,Es=0,pi=1,ua=2,Ha=0,Yr=1,iv=2,av=3,sv=4,dy=5,js=100,hy=101,py=102,my=103,gy=104,vy=200,xy=201,_y=202,Sy=203,Zd=204,Kd=205,yy=206,My=207,by=208,Ey=209,Ty=210,Ay=211,wy=212,Ry=213,Cy=214,Qd=0,Jd=1,$d=2,Qr=3,eh=4,th=5,nh=6,ih=7,fx=0,Ny=1,Dy=2,ha=0,dx=1,hx=2,px=3,Xh=4,mx=5,gx=6,vx=7,xx=300,Qs=301,Jr=302,vd=303,xd=304,su=306,ah=1e3,Ga=1001,sh=1002,Xn=1003,Uy=1004,bc=1005,Zn=1006,_d=1007,Zs=1008,Ai=1009,_x=1010,Sx=1011,cl=1012,Wh=1013,ma=1014,fa=1015,ka=1016,qh=1017,jh=1018,ul=1020,yx=35902,Mx=35899,bx=1021,Ex=1022,Ji=1023,Xa=1026,Ks=1027,Tx=1028,Yh=1029,Js=1030,Zh=1031,Kh=1033,Yc=33776,Zc=33777,Kc=33778,Qc=33779,rh=35840,oh=35841,lh=35842,ch=35843,uh=36196,fh=37492,dh=37496,hh=37488,ph=37489,$c=37490,mh=37491,gh=37808,vh=37809,xh=37810,_h=37811,Sh=37812,yh=37813,Mh=37814,bh=37815,Eh=37816,Th=37817,Ah=37818,wh=37819,Rh=37820,Ch=37821,Nh=36492,Dh=36494,Uh=36495,Lh=36283,Oh=36284,eu=36285,Ph=36286,Ly=3200,Ih=0,Oy=1,Ss="",zi="srgb",tu="srgb-linear",nu="linear",Jt="srgb",Lr=7680,rv=519,Py=512,Iy=513,Fy=514,Qh=515,zy=516,By=517,Jh=518,Gy=519,ov=35044,lv="300 es",da=2e3,fl=2001;function Hy(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=iu("canvas");return r.style.display="block",r}const cv={};function uv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ax(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ft(...r){r=Ax(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Vt(...r){r=Ax(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Zr(...r){const e=r.join(" ");e in cv||(cv[e]=!0,ft(...r))}function ky(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Xy={[Qd]:Jd,[$d]:nh,[eh]:ih,[Qr]:th,[Jd]:Qd,[nh]:$d,[ih]:eh,[th]:Qr};class $s{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fv=1234567;const rl=Math.PI/180,$r=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]).toLowerCase()}function Nt(r,e,i){return Math.max(e,Math.min(i,r))}function $h(r,e){return(r%e+e)%e}function Wy(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function qy(r,e,i){return r!==e?(i-r)/(e-r):0}function ol(r,e,i){return(1-i)*r+i*e}function jy(r,e,i,s){return ol(r,e,1-Math.exp(-i*s))}function Yy(r,e=1){return e-Math.abs($h(r,e*2)-e)}function Zy(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function Ky(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function Qy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Jy(r,e){return r+Math.random()*(e-r)}function $y(r){return r*(.5-Math.random())}function eM(r){r!==void 0&&(fv=r);let e=fv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(r){return r*rl}function nM(r){return r*$r}function iM(r){return(r&r-1)===0&&r!==0}function aM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rM(r,e,i,s,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((e+s)/2),S=d((e+s)/2),_=c((e-s)/2),g=d((e-s)/2),T=c((s-e)/2),A=d((s-e)/2);switch(l){case"XYX":r.set(p*S,m*_,m*g,p*h);break;case"YZY":r.set(m*g,p*S,m*_,p*h);break;case"ZXZ":r.set(m*_,m*g,p*S,p*h);break;case"XZX":r.set(p*S,m*A,m*T,p*h);break;case"YXY":r.set(m*T,p*S,m*A,p*h);break;case"ZYZ":r.set(m*A,m*T,p*S,p*h);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function jr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dv={DEG2RAD:rl,RAD2DEG:$r,generateUUID:no,clamp:Nt,euclideanModulo:$h,mapLinear:Wy,inverseLerp:qy,lerp:ol,damp:jy,pingpong:Yy,smoothstep:Zy,smootherstep:Ky,randInt:Qy,randFloat:Jy,randFloatSpread:$y,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:aM,floorPowerOfTwo:sM,setQuaternionFromProperEuler:rM,normalize:ni,denormalize:jr},cp=class cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let Dt=cp;class io{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],_=s[l+3],g=c[d+0],T=c[d+1],A=c[d+2],D=c[d+3];if(_!==D||m!==g||h!==T||S!==A){let y=m*g+h*T+S*A+_*D;y<0&&(g=-g,T=-T,A=-A,D=-D,y=-y);let x=1-p;if(y<.9995){const I=Math.acos(y),G=Math.sin(I);x=Math.sin(x*I)/G,p=Math.sin(p*I)/G,m=m*x+g*p,h=h*x+T*p,S=S*x+A*p,_=_*x+D*p}else{m=m*x+g*p,h=h*x+T*p,S=S*x+A*p,_=_*x+D*p;const I=1/Math.sqrt(m*m+h*h+S*S+_*_);m*=I,h*=I,S*=I,_*=I}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],_=c[d],g=c[d+1],T=c[d+2],A=c[d+3];return e[i]=p*A+S*_+m*T-h*g,e[i+1]=m*A+S*g+h*_-p*T,e[i+2]=h*A+S*T+p*g-m*_,e[i+3]=S*A-p*_-m*g-h*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),_=p(c/2),g=m(s/2),T=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=g*S*_+h*T*A,this._y=h*T*_-g*S*A,this._z=h*S*A+g*T*_,this._w=h*S*_-g*T*A;break;case"YXZ":this._x=g*S*_+h*T*A,this._y=h*T*_-g*S*A,this._z=h*S*A-g*T*_,this._w=h*S*_+g*T*A;break;case"ZXY":this._x=g*S*_-h*T*A,this._y=h*T*_+g*S*A,this._z=h*S*A+g*T*_,this._w=h*S*_-g*T*A;break;case"ZYX":this._x=g*S*_-h*T*A,this._y=h*T*_+g*S*A,this._z=h*S*A-g*T*_,this._w=h*S*_+g*T*A;break;case"YZX":this._x=g*S*_+h*T*A,this._y=h*T*_+g*S*A,this._z=h*S*A-g*T*_,this._w=h*S*_-g*T*A;break;case"XZY":this._x=g*S*_-h*T*A,this._y=h*T*_-g*S*A,this._z=h*S*A+g*T*_,this._w=h*S*_+g*T*A;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],_=i[10],g=s+p+_;if(g>0){const T=.5/Math.sqrt(g+1);this._w=.25/T,this._x=(S-m)*T,this._y=(c-h)*T,this._z=(d-l)*T}else if(s>p&&s>_){const T=2*Math.sqrt(1+s-p-_);this._w=(S-m)/T,this._x=.25*T,this._y=(l+d)/T,this._z=(c+h)/T}else if(p>_){const T=2*Math.sqrt(1+p-s-_);this._w=(c-h)/T,this._x=(l+d)/T,this._y=.25*T,this._z=(m+S)/T}else{const T=2*Math.sqrt(1+_-s-p);this._w=(d-l)/T,this._x=(c+h)/T,this._y=(m+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-c*m,this._y=l*S+d*m+c*p-s*h,this._z=c*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(hv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),S=2*(p*i-c*l),_=2*(c*s-d*i);return this.x=i+m*h+d*_-p*S,this.y=s+m*S+p*h-c*_,this.z=l+m*_+c*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let ne=up;const Sd=new ne,hv=new io,fp=class fp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],_=s[7],g=s[2],T=s[5],A=s[8],D=l[0],y=l[3],x=l[6],I=l[1],G=l[4],N=l[7],F=l[2],U=l[5],P=l[8];return c[0]=d*D+p*I+m*F,c[3]=d*y+p*G+m*U,c[6]=d*x+p*N+m*P,c[1]=h*D+S*I+_*F,c[4]=h*y+S*G+_*U,c[7]=h*x+S*N+_*P,c[2]=g*D+T*I+A*F,c[5]=g*y+T*G+A*U,c[8]=g*x+T*N+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-s*c*S+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],_=S*d-p*h,g=p*m-S*c,T=h*c-d*m,A=i*_+s*g+l*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=_*D,e[1]=(l*h-S*s)*D,e[2]=(p*s-l*d)*D,e[3]=g*D,e[4]=(S*i-l*m)*D,e[5]=(l*c-p*i)*D,e[6]=T*D,e[7]=(s*m-h*i)*D,e[8]=(d*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,i)),this}rotate(e){return Zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return Zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fp.prototype.isMatrix3=!0;let mt=fp;const yd=new mt,pv=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){const r={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Jt&&(l.r=Va(l.r),l.g=Va(l.g),l.b=Va(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Jt&&(l.r=Kr(l.r),l.g=Kr(l.g),l.b=Kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ss?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[tu]:{primaries:e,whitePoint:s,transfer:nu,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:e,whitePoint:s,transfer:Jt,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),r}const Pt=oM();function Va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Or;class lM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Or===void 0&&(Or=iu("canvas")),Or.width=e.width,Or.height=e.height;const l=Or.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Or}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=iu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Va(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Va(i[s]/255)*255):i[s]=Va(i[s]);return{data:i,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Md(l[d].image)):c.push(Md(l[d]))}else c=Md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Md(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let uM=0;const bd=new ne;class Kn extends $s{constructor(e=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=Ga,l=Ga,c=Zn,d=Zs,p=Ji,m=Ai,h=Kn.DEFAULT_ANISOTROPY,S=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=no(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case Ga:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case Ga:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=xx;Kn.DEFAULT_ANISOTROPY=1;const dp=class dp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],S=m[4],_=m[8],g=m[1],T=m[5],A=m[9],D=m[2],y=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(_-D)<.01&&Math.abs(A-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(_+D)<.1&&Math.abs(A+y)<.1&&Math.abs(h+T+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(h+1)/2,N=(T+1)/2,F=(x+1)/2,U=(S+g)/4,P=(_+D)/4,M=(A+y)/4;return G>N&&G>F?G<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(G),l=U/s,c=P/s):N>F?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=U/l,c=M/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=P/c,l=M/c),this.set(s,l,c,i),this}let I=Math.sqrt((y-A)*(y-A)+(_-D)*(_-D)+(g-S)*(g-S));return Math.abs(I)<.001&&(I=1),this.x=(y-A)/I,this.y=(_-D)/I,this.z=(g-S)/I,this.w=Math.acos((h+T+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this.w=Nt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this.w=Nt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dp.prototype.isVector4=!0;let dn=dp;class fM extends $s{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new dn(0,0,e,i),this.scissorTest=!1,this.viewport=new dn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Kn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pa extends fM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class wx extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dM extends Kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=class au{constructor(e,i,s,l,c,d,p,m,h,S,_,g,T,A,D,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,S,_,g,T,A,D,y)}set(e,i,s,l,c,d,p,m,h,S,_,g,T,A,D,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=S,x[10]=_,x[14]=g,x[3]=T,x[7]=A,x[11]=D,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Pr.setFromMatrixColumn(e,0).length(),c=1/Pr.setFromMatrixColumn(e,1).length(),d=1/Pr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=d*S,T=d*_,A=p*S,D=p*_;i[0]=m*S,i[4]=-m*_,i[8]=h,i[1]=T+A*h,i[5]=g-D*h,i[9]=-p*m,i[2]=D-g*h,i[6]=A+T*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*S,T=m*_,A=h*S,D=h*_;i[0]=g+D*p,i[4]=A*p-T,i[8]=d*h,i[1]=d*_,i[5]=d*S,i[9]=-p,i[2]=T*p-A,i[6]=D+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*S,T=m*_,A=h*S,D=h*_;i[0]=g-D*p,i[4]=-d*_,i[8]=A+T*p,i[1]=T+A*p,i[5]=d*S,i[9]=D-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*S,T=d*_,A=p*S,D=p*_;i[0]=m*S,i[4]=A*h-T,i[8]=g*h+D,i[1]=m*_,i[5]=D*h+g,i[9]=T*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,T=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=D-g*_,i[8]=A*_+T,i[1]=_,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=T*_+A,i[10]=g-D*_}else if(e.order==="XZY"){const g=d*m,T=d*h,A=p*m,D=p*h;i[0]=m*S,i[4]=-_,i[8]=h*S,i[1]=g*_+D,i[5]=d*S,i[9]=T*_-A,i[2]=A*_-T,i[6]=p*S,i[10]=D*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hM,e,pM)}lookAt(e,i,s){const l=this.elements;return bi.subVectors(e,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),ps.crossVectors(s,bi),ps.lengthSq()===0&&(Math.abs(s.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),ps.crossVectors(s,bi)),ps.normalize(),Ec.crossVectors(bi,ps),l[0]=ps.x,l[4]=Ec.x,l[8]=bi.x,l[1]=ps.y,l[5]=Ec.y,l[9]=bi.y,l[2]=ps.z,l[6]=Ec.z,l[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],_=s[5],g=s[9],T=s[13],A=s[2],D=s[6],y=s[10],x=s[14],I=s[3],G=s[7],N=s[11],F=s[15],U=l[0],P=l[4],M=l[8],O=l[12],Y=l[1],H=l[5],j=l[9],he=l[13],ae=l[2],J=l[6],z=l[10],X=l[14],ie=l[3],_e=l[7],B=l[11],b=l[15];return c[0]=d*U+p*Y+m*ae+h*ie,c[4]=d*P+p*H+m*J+h*_e,c[8]=d*M+p*j+m*z+h*B,c[12]=d*O+p*he+m*X+h*b,c[1]=S*U+_*Y+g*ae+T*ie,c[5]=S*P+_*H+g*J+T*_e,c[9]=S*M+_*j+g*z+T*B,c[13]=S*O+_*he+g*X+T*b,c[2]=A*U+D*Y+y*ae+x*ie,c[6]=A*P+D*H+y*J+x*_e,c[10]=A*M+D*j+y*z+x*B,c[14]=A*O+D*he+y*X+x*b,c[3]=I*U+G*Y+N*ae+F*ie,c[7]=I*P+G*H+N*J+F*_e,c[11]=I*M+G*j+N*z+F*B,c[15]=I*O+G*he+N*X+F*b,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],_=e[6],g=e[10],T=e[14],A=e[3],D=e[7],y=e[11],x=e[15],I=m*T-h*g,G=p*T-h*_,N=p*g-m*_,F=d*T-h*S,U=d*g-m*S,P=d*_-p*S;return i*(D*I-y*G+x*N)-s*(A*I-y*F+x*U)+l*(A*G-D*F+x*P)-c*(A*N-D*U+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],S=e[10];return i*(d*S-p*h)-s*(c*S-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],_=e[9],g=e[10],T=e[11],A=e[12],D=e[13],y=e[14],x=e[15],I=i*p-s*d,G=i*m-l*d,N=i*h-c*d,F=s*m-l*p,U=s*h-c*p,P=l*h-c*m,M=S*D-_*A,O=S*y-g*A,Y=S*x-T*A,H=_*y-g*D,j=_*x-T*D,he=g*x-T*y,ae=I*he-G*j+N*H+F*Y-U*O+P*M;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ae;return e[0]=(p*he-m*j+h*H)*J,e[1]=(l*j-s*he-c*H)*J,e[2]=(D*P-y*U+x*F)*J,e[3]=(g*U-_*P-T*F)*J,e[4]=(m*Y-d*he-h*O)*J,e[5]=(i*he-l*Y+c*O)*J,e[6]=(y*N-A*P-x*G)*J,e[7]=(S*P-g*N+T*G)*J,e[8]=(d*j-p*Y+h*M)*J,e[9]=(s*Y-i*j-c*M)*J,e[10]=(A*U-D*N+x*I)*J,e[11]=(_*N-S*U-T*I)*J,e[12]=(p*O-d*H-m*M)*J,e[13]=(i*H-s*O+l*M)*J,e[14]=(D*G-A*F-y*I)*J,e[15]=(S*F-_*G+g*I)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,S=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,S=d+d,_=p+p,g=c*h,T=c*S,A=c*_,D=d*S,y=d*_,x=p*_,I=m*h,G=m*S,N=m*_,F=s.x,U=s.y,P=s.z;return l[0]=(1-(D+x))*F,l[1]=(T+N)*F,l[2]=(A-G)*F,l[3]=0,l[4]=(T-N)*U,l[5]=(1-(g+x))*U,l[6]=(y+I)*U,l[7]=0,l[8]=(A+G)*P,l[9]=(y-I)*P,l[10]=(1-(g+D))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Pr.set(l[0],l[1],l[2]).length();const p=Pr.set(l[4],l[5],l[6]).length(),m=Pr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),ji.copy(this);const h=1/d,S=1/p,_=1/m;return ji.elements[0]*=h,ji.elements[1]*=h,ji.elements[2]*=h,ji.elements[4]*=S,ji.elements[5]*=S,ji.elements[6]*=S,ji.elements[8]*=_,ji.elements[9]*=_,ji.elements[10]*=_,i.setFromRotationMatrix(ji),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=da,m=!1){const h=this.elements,S=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),T=(s+l)/(s-l);let A,D;if(m)A=c/(d-c),D=d*c/(d-c);else if(p===da)A=-(d+c)/(d-c),D=-2*d*c/(d-c);else if(p===fl)A=-d/(d-c),D=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=T,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=da,m=!1){const h=this.elements,S=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),T=-(s+l)/(s-l);let A,D;if(m)A=1/(d-c),D=d/(d-c);else if(p===da)A=-2/(d-c),D=-(d+c)/(d-c);else if(p===fl)A=-1/(d-c),D=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=T,h[2]=0,h[6]=0,h[10]=A,h[14]=D,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};au.prototype.isMatrix4=!0;let hn=au;const Pr=new ne,ji=new hn,hM=new ne(0,0,0),pM=new ne(1,1,1),ps=new ne,Ec=new ne,bi=new ne,gv=new hn,vv=new io;class Ts{constructor(e=0,i=0,s=0,l=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],_=l[2],g=l[6],T=l[10];switch(i){case"XYZ":this._y=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,T),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,T),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,T),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,T));break;case"XZY":this._z=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,T),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mM=0;const xv=new ne,Ir=new io,Pa=new hn,Tc=new ne,Ko=new ne,gM=new ne,vM=new io,_v=new ne(1,0,0),Sv=new ne(0,1,0),yv=new ne(0,0,1),Mv={type:"added"},xM={type:"removed"},Fr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class Rn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ne,i=new Ts,s=new io,l=new ne(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new mt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ir.setFromAxisAngle(e,i),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,i){return Ir.setFromAxisAngle(e,i),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,i){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Tc.copy(e):Tc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pa.lookAt(Ko,Tc,this.up):Pa.lookAt(Tc,Ko,this.up),this.quaternion.setFromRotationMatrix(Pa),l&&(Pa.extractRotation(l.matrixWorld),Ir.setFromRotationMatrix(Pa),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xM),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,gM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const _=m[h];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),_=d(e.shapes),g=d(e.skeletons),T=d(e.animations),A=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),T.length>0&&(s.animations=T),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new ne(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ti extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const D of e.hand.values()){const y=i.getJointPose(D,s),x=this._getHandJoint(h,D);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=S.position.distanceTo(_.position),T=.02,A=.005;h.inputState.pinching&&g>T+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=T-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ti;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Ad(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Tt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Pt.workingColorSpace){if(e=$h(e,1),i=Nt(i,0,1),s=Nt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ad(d,c,e+1/3),this.g=Ad(d,c,e),this.b=Ad(d,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=zi){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ft("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=zi){const s=Cx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return Pt.workingToColorSpace(Yn.copy(this),e),Math.round(Nt(Yn.r*255,0,255))*65536+Math.round(Nt(Yn.g*255,0,255))*256+Math.round(Nt(Yn.b*255,0,255))}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(Yn.copy(this),i);const s=Yn.r,l=Yn.g,c=Yn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=S<=.5?_/(d+p):_/(2-d-p),d){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Yn.copy(this),i),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=zi){Pt.workingToColorSpace(Yn.copy(this),e);const i=Yn.r,s=Yn.g,l=Yn.b;return e!==zi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(Ac);const s=ol(ms.h,Ac.h,i),l=ol(ms.s,Ac.s,i),c=ol(ms.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Tt;Tt.NAMES=Cx;class tp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=i}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class SM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Yi=new ne,Ia=new ne,wd=new ne,Fa=new ne,zr=new ne,Br=new ne,bv=new ne,Rd=new ne,Cd=new ne,Nd=new ne,Dd=new dn,Ud=new dn,Ld=new dn;class Qi{constructor(e=new ne,i=new ne,s=new ne){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Yi.subVectors(e,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Yi.subVectors(l,i),Ia.subVectors(s,i),wd.subVectors(e,i);const d=Yi.dot(Yi),p=Yi.dot(Ia),m=Yi.dot(wd),h=Ia.dot(Ia),S=Ia.dot(wd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,T=(h*m-p*S)*g,A=(d*S-p*m)*g;return c.set(1-T-A,A,T)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,Fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Fa.x),m.addScaledVector(d,Fa.y),m.addScaledVector(p,Fa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Dd.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Dd,c.x),d.addScaledVector(Ud,c.y),d.addScaledVector(Ld,c.z),d}static isFrontFacing(e,i,s,l){return Yi.subVectors(s,i),Ia.subVectors(e,i),Yi.cross(Ia).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Yi.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Qi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Qi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;zr.subVectors(l,s),Br.subVectors(c,s),Rd.subVectors(e,s);const m=zr.dot(Rd),h=Br.dot(Rd);if(m<=0&&h<=0)return i.copy(s);Cd.subVectors(e,l);const S=zr.dot(Cd),_=Br.dot(Cd);if(S>=0&&_<=S)return i.copy(l);const g=m*_-S*h;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(zr,d);Nd.subVectors(e,c);const T=zr.dot(Nd),A=Br.dot(Nd);if(A>=0&&T<=A)return i.copy(c);const D=T*h-m*A;if(D<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Br,p);const y=S*A-T*_;if(y<=0&&_-S>=0&&T-A>=0)return bv.subVectors(c,l),p=(_-S)/(_-S+(T-A)),i.copy(l).addScaledVector(bv,p);const x=1/(y+D+g);return d=D*x,p=g*x,i.copy(s).addScaledVector(zr,d).addScaledVector(Br,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class dl{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Zi):Zi.fromBufferAttribute(c,d),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Rc.subVectors(this.max,Qo),Gr.subVectors(e.a,Qo),Hr.subVectors(e.b,Qo),Vr.subVectors(e.c,Qo),gs.subVectors(Hr,Gr),vs.subVectors(Vr,Hr),Vs.subVectors(Gr,Vr);let i=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-Vs.z,Vs.y,gs.z,0,-gs.x,vs.z,0,-vs.x,Vs.z,0,-Vs.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-Vs.y,Vs.x,0];return!Od(i,Gr,Hr,Vr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,Gr,Hr,Vr,Rc))?!1:(Cc.crossVectors(gs,vs),i=[Cc.x,Cc.y,Cc.z],Od(i,Gr,Hr,Vr,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(za),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const za=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Zi=new ne,wc=new dl,Gr=new ne,Hr=new ne,Vr=new ne,gs=new ne,vs=new ne,Vs=new ne,Qo=new ne,Rc=new ne,Cc=new ne,ks=new ne;function Od(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ks.fromArray(r,c);const p=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),m=e.dot(ks),h=i.dot(ks),S=s.dot(ks);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const wn=new ne,Nc=new Dt;let yM=0;class Bi extends $s{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ov,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(e),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=jr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ni(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jr(i,this.array)),i}setX(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jr(i,this.array)),i}setY(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jr(i,this.array)),i}setW(e,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),l=ni(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),l=ni(l,this.array),c=ni(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Nx extends Bi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Dx extends Bi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fn extends Bi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const MM=new dl,Jo=new ne,Pd=new ne;class ru{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):MM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Pd)),this.expandByPoint(Jo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bM=0;const Fi=new hn,Id=new Rn,kr=new ne,Ei=new dl,$o=new dl,Pn=new ne;class ai extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hy(e)?Dx:Nx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new mt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,i,s){return Fi.makeTranslation(e,i,s),this.applyMatrix4(Fi),this}scale(e,i,s){return Fi.makeScale(e,i,s),this.applyMatrix4(Fi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(Pn.addVectors(Ei.min,$o.min),Ei.expandByPoint(Pn),Pn.addVectors(Ei.max,$o.max),Ei.expandByPoint(Pn)):(Ei.expandByPoint($o.min),Ei.expandByPoint($o.max))}Ei.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Pn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Pn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Pn.fromBufferAttribute(p,h),m&&(kr.fromBufferAttribute(e,h),Pn.add(kr)),l=Math.max(l,s.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Bi(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let M=0;M<s.count;M++)p[M]=new ne,m[M]=new ne;const h=new ne,S=new ne,_=new ne,g=new Dt,T=new Dt,A=new Dt,D=new ne,y=new ne;function x(M,O,Y){h.fromBufferAttribute(s,M),S.fromBufferAttribute(s,O),_.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,M),T.fromBufferAttribute(c,O),A.fromBufferAttribute(c,Y),S.sub(h),_.sub(h),T.sub(g),A.sub(g);const H=1/(T.x*A.y-A.x*T.y);isFinite(H)&&(D.copy(S).multiplyScalar(A.y).addScaledVector(_,-T.y).multiplyScalar(H),y.copy(_).multiplyScalar(T.x).addScaledVector(S,-A.x).multiplyScalar(H),p[M].add(D),p[O].add(D),p[Y].add(D),m[M].add(y),m[O].add(y),m[Y].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let M=0,O=I.length;M<O;++M){const Y=I[M],H=Y.start,j=Y.count;for(let he=H,ae=H+j;he<ae;he+=3)x(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const G=new ne,N=new ne,F=new ne,U=new ne;function P(M){F.fromBufferAttribute(l,M),U.copy(F);const O=p[M];G.copy(O),G.sub(F.multiplyScalar(F.dot(O))).normalize(),N.crossVectors(U,O);const H=N.dot(m[M])<0?-1:1;d.setXYZW(M,G.x,G.y,G.z,H)}for(let M=0,O=I.length;M<O;++M){const Y=I[M],H=Y.start,j=Y.count;for(let he=H,ae=H+j;he<ae;he+=3)P(e.getX(he+0)),P(e.getX(he+1)),P(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,T=s.count;g<T;g++)s.setXYZ(g,0,0,0);const l=new ne,c=new ne,d=new ne,p=new ne,m=new ne,h=new ne,S=new ne,_=new ne;if(e)for(let g=0,T=e.count;g<T;g+=3){const A=e.getX(g+0),D=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,y),S.subVectors(d,c),_.subVectors(l,c),S.cross(_),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,D),h.fromBufferAttribute(s,y),p.add(S),m.add(S),h.add(S),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(D,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,T=i.count;g<T;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,c),_.subVectors(l,c),S.cross(_),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Pn.fromBufferAttribute(e,i),Pn.normalize(),e.setXYZ(i,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,_=p.normalized,g=new h.constructor(m.length*S);let T=0,A=0;for(let D=0,y=m.length;D<y;D++){p.isInterleavedBufferAttribute?T=m[D]*p.data.stride+p.offset:T=m[D]*S;for(let x=0;x<S;x++)g[A++]=h[T++]}return new Bi(g,S,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,_=h.length;S<_;S++){const g=h[S],T=e(g,s);m.push(T)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let _=0,g=h.length;_<g;_++){const T=h[_];S.push(T.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=e.morphAttributes;for(const h in c){const S=[],_=c[h];for(let g=0,T=_.length;g<T;g++)S.push(_[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let EM=0;class ao extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Yr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==Es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Kd&&(s.blendDst=this.blendDst),this.blendEquation!==js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Dt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ba=new ne,Fd=new ne,Dc=new ne,xs=new ne,zd=new ne,Uc=new ne,Bd=new ne;class Ux{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Fd.copy(e).add(i).multiplyScalar(.5),Dc.copy(i).sub(e).normalize(),xs.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Dc),p=xs.dot(this.direction),m=-xs.dot(Dc),h=xs.lengthSq(),S=Math.abs(1-d*d);let _,g,T,A;if(S>0)if(_=d*m-p,g=d*p-m,A=c*S,_>=0)if(g>=-A)if(g<=A){const D=1/S;_*=D,g*=D,T=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),T=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),T=-_*_+g*(g+2*m)+h;else g<=-A?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),T=-_*_+g*(g+2*m)+h):g<=A?(_=0,g=Math.min(Math.max(-c,-m),c),T=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),T=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),T=-_*_+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Fd).addScaledVector(Dc,g),T}intersectSphere(e,i){Ba.subVectors(e.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),S>=0?(c=(e.min.y-g.y)*S,d=(e.max.y-g.y)*S):(c=(e.max.y-g.y)*S,d=(e.min.y-g.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(p=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ba)!==null}intersectTriangle(e,i,s,l,c){zd.subVectors(i,e),Uc.subVectors(s,e),Bd.crossVectors(zd,Uc);let d=this.direction.dot(Bd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;xs.subVectors(this.origin,e);const m=p*this.direction.dot(Uc.crossVectors(xs,Uc));if(m<0)return null;const h=p*this.direction.dot(zd.cross(xs));if(h<0||m+h>d)return null;const S=-p*xs.dot(Bd);return S<0?null:this.at(S/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ki extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ev=new hn,Xs=new Ux,Lc=new ru,Tv=new ne,Oc=new ne,Pc=new ne,Ic=new ne,Gd=new ne,Fc=new ne,Av=new ne,zc=new ne;class gt extends Rn{constructor(e=new ai,i=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Fc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],_=c[m];S!==0&&(Gd.fromBufferAttribute(_,e),d?Fc.addScaledVector(Gd,S):Fc.addScaledVector(Gd.sub(i),S))}i.add(Fc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Xs.copy(e.ray).recast(e.near),!(Lc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Lc,Tv)===null||Xs.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(c).invert(),Xs.copy(e.ray).applyMatrix4(Ev),!(s.boundingBox!==null&&Xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,g=c.groups,T=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const y=g[A],x=d[y.materialIndex],I=Math.max(y.start,T.start),G=Math.min(p.count,Math.min(y.start+y.count,T.start+T.count));for(let N=I,F=G;N<F;N+=3){const U=p.getX(N),P=p.getX(N+1),M=p.getX(N+2);l=Bc(this,x,e,s,h,S,_,U,P,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,T.start),D=Math.min(p.count,T.start+T.count);for(let y=A,x=D;y<x;y+=3){const I=p.getX(y),G=p.getX(y+1),N=p.getX(y+2);l=Bc(this,d,e,s,h,S,_,I,G,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,D=g.length;A<D;A++){const y=g[A],x=d[y.materialIndex],I=Math.max(y.start,T.start),G=Math.min(m.count,Math.min(y.start+y.count,T.start+T.count));for(let N=I,F=G;N<F;N+=3){const U=N,P=N+1,M=N+2;l=Bc(this,x,e,s,h,S,_,U,P,M),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,T.start),D=Math.min(m.count,T.start+T.count);for(let y=A,x=D;y<x;y+=3){const I=y,G=y+1,N=y+2;l=Bc(this,d,e,s,h,S,_,I,G,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function TM(r,e,i,s,l,c,d,p){let m;if(e.side===pi?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===Es,p),m===null)return null;zc.copy(p),zc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(zc);return h<i.near||h>i.far?null:{distance:h,point:zc.clone(),object:r}}function Bc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Oc),r.getVertexPosition(m,Pc),r.getVertexPosition(h,Ic);const S=TM(r,e,i,s,Oc,Pc,Ic,Av);if(S){const _=new ne;Qi.getBarycoord(Av,Oc,Pc,Ic,_),l&&(S.uv=Qi.getInterpolatedAttribute(l,p,m,h,_,new Dt)),c&&(S.uv1=Qi.getInterpolatedAttribute(c,p,m,h,_,new Dt)),d&&(S.normal=Qi.getInterpolatedAttribute(d,p,m,h,_,new ne),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ne,materialIndex:0};Qi.getNormal(Oc,Pc,Ic,g.normal),S.face=g,S.barycoord=_}return S}class AM extends Kn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Xn,S=Xn,_,g){super(null,d,p,m,h,S,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new ne,wM=new ne,RM=new mt;class qs{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Hd.subVectors(s,i).cross(wM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Hd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||RM.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new ru,CM=new Dt(.5,.5),Gc=new ne;class np{constructor(e=new qs,i=new qs,s=new qs,l=new qs,c=new qs,d=new qs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=da,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],S=c[4],_=c[5],g=c[6],T=c[7],A=c[8],D=c[9],y=c[10],x=c[11],I=c[12],G=c[13],N=c[14],F=c[15];if(l[0].setComponents(h-d,T-S,x-A,F-I).normalize(),l[1].setComponents(h+d,T+S,x+A,F+I).normalize(),l[2].setComponents(h+p,T+_,x+D,F+G).normalize(),l[3].setComponents(h-p,T-_,x-D,F-G).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(h-m,T-g,x-y,F-N).normalize();else if(l[4].setComponents(h-m,T-g,x-y,F-N).normalize(),i===da)l[5].setComponents(h+m,T+g,x+y,F+N).normalize();else if(i===fl)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const i=CM.distanceTo(e.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lx extends ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wv=new hn,Fh=new Ux,Hc=new ru,Vc=new ne;class NM extends Rn{constructor(e=new ai,i=new Lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;wv.copy(l).invert(),Fh.copy(e.ray).applyMatrix4(wv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,_=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),T=Math.min(h.count,d.start+d.count);for(let A=g,D=T;A<D;A++){const y=h.getX(A);Vc.fromBufferAttribute(_,y),Rv(Vc,y,m,l,e,i,this)}}else{const g=Math.max(0,d.start),T=Math.min(_.count,d.start+d.count);for(let A=g,D=T;A<D;A++)Vc.fromBufferAttribute(_,A),Rv(Vc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Rv(r,e,i,s,l,c,d){const p=Fh.distanceSqToPoint(r);if(p<i){const m=new ne;Fh.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Ox extends Kn{constructor(e=[],i=Qs,s,l,c,d,p,m,h,S){super(e,i,s,l,c,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Px extends Kn{constructor(e,i,s,l,c,d,p,m,h){super(e,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Kn{constructor(e,i,s=ma,l,c,d,p=Xn,m=Xn,h,S=Xa,_=1){if(S!==Xa&&S!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class DM extends eo{constructor(e,i=ma,s=Qs,l,c,d=Xn,p=Xn,m,h=Xa){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,s,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ix extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends ai{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],S=[],_=[];let g=0,T=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(h,3)),this.setAttribute("normal",new Fn(S,3)),this.setAttribute("uv",new Fn(_,2));function A(D,y,x,I,G,N,F,U,P,M,O){const Y=N/P,H=F/M,j=N/2,he=F/2,ae=U/2,J=P+1,z=M+1;let X=0,ie=0;const _e=new ne;for(let B=0;B<z;B++){const b=B*H-he;for(let V=0;V<J;V++){const fe=V*Y-j;_e[D]=fe*I,_e[y]=b*G,_e[x]=ae,h.push(_e.x,_e.y,_e.z),_e[D]=0,_e[y]=0,_e[x]=U>0?1:-1,S.push(_e.x,_e.y,_e.z),_.push(V/P),_.push(1-B/M),X+=1}}for(let B=0;B<M;B++)for(let b=0;b<P;b++){const V=g+b+J*B,fe=g+b+J*(B+1),Se=g+(b+1)+J*(B+1),Ee=g+(b+1)+J*B;m.push(V,fe,Ee),m.push(fe,Se,Ee),ie+=6}p.addGroup(T,ie,O),T+=ie,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ys extends ai{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const S=[],_=[],g=[],T=[];let A=0;const D=[],y=s/2;let x=0;I(),d===!1&&(e>0&&G(!0),i>0&&G(!1)),this.setIndex(S),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(T,2));function I(){const N=new ne,F=new ne;let U=0;const P=(i-e)/s;for(let M=0;M<=c;M++){const O=[],Y=M/c,H=Y*(i-e)+e;for(let j=0;j<=l;j++){const he=j/l,ae=he*m+p,J=Math.sin(ae),z=Math.cos(ae);F.x=H*J,F.y=-Y*s+y,F.z=H*z,_.push(F.x,F.y,F.z),N.set(J,P,z).normalize(),g.push(N.x,N.y,N.z),T.push(he,1-Y),O.push(A++)}D.push(O)}for(let M=0;M<l;M++)for(let O=0;O<c;O++){const Y=D[O][M],H=D[O+1][M],j=D[O+1][M+1],he=D[O][M+1];(e>0||O!==0)&&(S.push(Y,H,he),U+=3),(i>0||O!==c-1)&&(S.push(H,j,he),U+=3)}h.addGroup(x,U,0),x+=U}function G(N){const F=A,U=new Dt,P=new ne;let M=0;const O=N===!0?e:i,Y=N===!0?1:-1;for(let j=1;j<=l;j++)_.push(0,y*Y,0),g.push(0,Y,0),T.push(.5,.5),A++;const H=A;for(let j=0;j<=l;j++){const ae=j/l*m+p,J=Math.cos(ae),z=Math.sin(ae);P.x=O*z,P.y=y*Y,P.z=O*J,_.push(P.x,P.y,P.z),g.push(0,Y,0),U.x=J*.5+.5,U.y=z*.5*Y+.5,T.push(U.x,U.y),A++}for(let j=0;j<l;j++){const he=F+j,ae=H+j;N===!0?S.push(ae,ae+1,he):S.push(ae+1,ae,he),M+=3}h.addGroup(x,M,N===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends ys{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,e,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(e){return new ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ms extends ai{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,_=e/p,g=i/m,T=[],A=[],D=[],y=[];for(let x=0;x<S;x++){const I=x*g-d;for(let G=0;G<h;G++){const N=G*_-c;A.push(N,-I,0),D.push(0,0,1),y.push(G/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<p;I++){const G=I+h*x,N=I+h*(x+1),F=I+1+h*(x+1),U=I+1+h*x;T.push(G,N,U),T.push(N,F,U)}this.setIndex(T),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(D,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class ip extends ai{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],S=[];let _=e;const g=(i-e)/l,T=new ne,A=new Dt;for(let D=0;D<=l;D++){for(let y=0;y<=s;y++){const x=c+y/s*d;T.x=_*Math.cos(x),T.y=_*Math.sin(x),m.push(T.x,T.y,T.z),h.push(0,0,1),A.x=(T.x/i+1)/2,A.y=(T.y/i+1)/2,S.push(A.x,A.y)}_+=g}for(let D=0;D<l;D++){const y=D*(s+1);for(let x=0;x<s;x++){const I=x+y,G=I,N=I+s+1,F=I+s+2,U=I+1;p.push(G,N,U),p.push(N,F,U)}}this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(h,3)),this.setAttribute("uv",new Fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ap extends ai{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],_=new ne,g=new ne,T=[],A=[],D=[],y=[];for(let x=0;x<=s;x++){const I=[],G=x/s,N=d+G*p,F=e*Math.cos(N),U=Math.sqrt(e*e-F*F);let P=0;x===0&&d===0?P=.5/i:x===s&&m===Math.PI&&(P=-.5/i);for(let M=0;M<=i;M++){const O=M/i,Y=l+O*c;_.x=-U*Math.cos(Y),_.y=F,_.z=U*Math.sin(Y),A.push(_.x,_.y,_.z),g.copy(_).normalize(),D.push(g.x,g.y,g.z),y.push(O+P,1-G),I.push(h++)}S.push(I)}for(let x=0;x<s;x++)for(let I=0;I<i;I++){const G=S[x][I+1],N=S[x][I],F=S[x+1][I],U=S[x+1][I+1];(x!==0||d>0)&&T.push(G,N,U),(x!==s-1||m<Math.PI)&&T.push(N,F,U)}this.setIndex(T),this.setAttribute("position",new Fn(A,3)),this.setAttribute("normal",new Fn(D,3)),this.setAttribute("uv",new Fn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ap(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function to(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Cv(l))l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Cv(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function ii(r){const e={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)e[l]=s[l]}return e}function Cv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function UM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Fx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const LM={clone:to,merge:ii};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=UM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Tt().setHex(l.value);break;case"v2":this.uniforms[s].value=new Dt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new ne().fromArray(l.value);break;case"v4":this.uniforms[s].value=new dn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new mt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new hn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class IM extends ga{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kn extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FM extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ly,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hl extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class BM extends hl{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Vd=new hn,Nv=new ne,Dv=new ne;class sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Nv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Nv),Dv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Dv),i.updateMatrixWorld(),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===fl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kc=new ne,Xc=new io,oa=new ne;class zx extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=da,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,Xc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,oa.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(kc,Xc,oa),oa.x===1&&oa.y===1&&oa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,oa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _s=new ne,Uv=new Dt,Lv=new Dt;class hi extends zx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,i){return this.getViewBounds(e,Uv,Lv),i.subVectors(Lv,Uv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class GM extends sp{constructor(){super(new hi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,s=$r*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wc extends hl{constructor(e,i,s=0,l=Math.PI/3,c=0,d=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=d,this.map=null,this.shadow=new GM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class HM extends sp{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class el extends hl{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new HM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class rp extends zx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VM extends sp{constructor(){super(new rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kM extends hl{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new VM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class XM extends hl{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xr=-90,Wr=1;class WM extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Xr,Wr,e,i);l.layers=this.layers,this.add(l);const c=new hi(Xr,Wr,e,i);c.layers=this.layers,this.add(c);const d=new hi(Xr,Wr,e,i);d.layers=this.layers,this.add(d);const p=new hi(Xr,Wr,e,i);p.layers=this.layers,this.add(p);const m=new hi(Xr,Wr,e,i);m.layers=this.layers,this.add(m);const h=new hi(Xr,Wr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===fl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,S]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,g,T),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class qM extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hp=class hp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};hp.prototype.isMatrix2=!0;let Ov=hp;function Pv(r,e,i,s){const l=jM(s);switch(i){case bx:return r*e;case Tx:return r*e/l.components*l.byteLength;case Yh:return r*e/l.components*l.byteLength;case Js:return r*e*2/l.components*l.byteLength;case Zh:return r*e*2/l.components*l.byteLength;case Ex:return r*e*3/l.components*l.byteLength;case Ji:return r*e*4/l.components*l.byteLength;case Kh:return r*e*4/l.components*l.byteLength;case Yc:case Zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(r,16)*Math.max(e,8)/4;case rh:case lh:return Math.max(r,8)*Math.max(e,8)/2;case uh:case fh:case hh:case ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dh:case $c:case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Dh:case Uh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Lh:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eu:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(r){switch(r){case Ai:case _x:return{byteLength:1,components:1};case cl:case Sx:case ka:return{byteLength:2,components:1};case qh:case jh:return{byteLength:2,components:4};case ma:case Wh:case fa:return{byteLength:4,components:1};case yx:case Mx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bx(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function YM(r){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,S),p.onUploadCallback();let T;if(h instanceof Float32Array)T=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)T=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?T=r.HALF_FLOAT:T=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)T=r.SHORT;else if(h instanceof Uint32Array)T=r.UNSIGNED_INT;else if(h instanceof Int32Array)T=r.INT;else if(h instanceof Int8Array)T=r.BYTE;else if(h instanceof Uint8Array)T=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)T=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:T,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,h){const S=m.array,_=m.updateRanges;if(r.bindBuffer(h,p),_.length===0)r.bufferSubData(h,0,S);else{_.sort((T,A)=>T.start-A.start);let g=0;for(let T=1;T<_.length;T++){const A=_[g],D=_[T];D.start<=A.start+A.count+1?A.count=Math.max(A.count,D.start+D.count-A.start):(++g,_[g]=D)}_.length=g+1;for(let T=0,A=_.length;T<A;T++){const D=_[T];r.bufferSubData(h,D.start*S.BYTES_PER_ELEMENT,S,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ub=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:e1,aomap_fragment:t1,aomap_pars_fragment:n1,batching_pars_vertex:i1,batching_vertex:a1,begin_vertex:s1,beginnormal_vertex:r1,bsdfs:o1,iridescence_fragment:l1,bumpmap_pars_fragment:c1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:f1,clipping_planes_pars_vertex:d1,clipping_planes_vertex:h1,color_fragment:p1,color_pars_fragment:m1,color_pars_vertex:g1,color_vertex:v1,common:x1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:S1,displacementmap_pars_vertex:y1,displacementmap_vertex:M1,emissivemap_fragment:b1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:A1,envmap_fragment:w1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:H1,envmap_vertex:D1,fog_vertex:U1,fog_pars_vertex:L1,fog_fragment:O1,fog_pars_fragment:P1,gradientmap_pars_fragment:I1,lightmap_pars_fragment:F1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:B1,lights_pars_begin:G1,lights_toon_fragment:V1,lights_toon_pars_fragment:k1,lights_phong_fragment:X1,lights_phong_pars_fragment:W1,lights_physical_fragment:q1,lights_physical_pars_fragment:j1,lights_fragment_begin:Y1,lights_fragment_maps:Z1,lights_fragment_end:K1,lightprobes_pars_fragment:Q1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:$1,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:tb,map_fragment:nb,map_pars_fragment:ib,map_particle_fragment:ab,map_particle_pars_fragment:sb,metalnessmap_fragment:rb,metalnessmap_pars_fragment:ob,morphinstance_vertex:lb,morphcolor_vertex:cb,morphnormal_vertex:ub,morphtarget_pars_vertex:fb,morphtarget_vertex:db,normal_fragment_begin:hb,normal_fragment_maps:pb,normal_pars_fragment:mb,normal_pars_vertex:gb,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:yb,iridescence_pars_fragment:Mb,opaque_fragment:bb,packing:Eb,premultiplied_alpha_fragment:Tb,project_vertex:Ab,dithering_fragment:wb,dithering_pars_fragment:Rb,roughnessmap_fragment:Cb,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Db,shadowmap_pars_vertex:Ub,shadowmap_vertex:Lb,shadowmask_pars_fragment:Ob,skinbase_vertex:Pb,skinning_pars_vertex:Ib,skinning_vertex:Fb,skinnormal_vertex:zb,specularmap_fragment:Bb,specularmap_pars_fragment:Gb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Vb,transmission_fragment:kb,transmission_pars_fragment:Xb,uv_pars_fragment:Wb,uv_pars_vertex:qb,uv_vertex:jb,worldpos_vertex:Yb,background_vert:Zb,background_frag:Kb,backgroundCube_vert:Qb,backgroundCube_frag:Jb,cube_vert:$b,cube_frag:eE,depth_vert:tE,depth_frag:nE,distance_vert:iE,distance_frag:aE,equirect_vert:sE,equirect_frag:rE,linedashed_vert:oE,linedashed_frag:lE,meshbasic_vert:cE,meshbasic_frag:uE,meshlambert_vert:fE,meshlambert_frag:dE,meshmatcap_vert:hE,meshmatcap_frag:pE,meshnormal_vert:mE,meshnormal_frag:gE,meshphong_vert:vE,meshphong_frag:xE,meshphysical_vert:_E,meshphysical_frag:SE,meshtoon_vert:yE,meshtoon_frag:ME,points_vert:bE,points_frag:EE,shadow_vert:TE,shadow_frag:AE,sprite_vert:wE,sprite_frag:RE},Xe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ca={basic:{uniforms:ii([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:ii([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:ii([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:ii([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:ii([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:ii([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:ii([Xe.points,Xe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:ii([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:ii([Xe.common,Xe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:ii([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:ii([Xe.sprite,Xe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:ii([Xe.common,Xe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:ii([Xe.lights,Xe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ca.physical={uniforms:ii([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const qc={r:0,b:0,g:0},CE=new hn,Gx=new mt;Gx.set(-1,0,0,0,1,0,0,0,1);function NE(r,e,i,s,l,c){const d=new Tt(0);let p=l===!0?0:1,m,h,S=null,_=0,g=null;function T(I){let G=I.isScene===!0?I.background:null;if(G&&G.isTexture){const N=I.backgroundBlurriness>0;G=e.get(G,N)}return G}function A(I){let G=!1;const N=T(I);N===null?y(d,p):N&&N.isColor&&(y(N,1),G=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function D(I,G){const N=T(G);N&&(N.isCubeTexture||N.mapping===su)?(h===void 0&&(h=new gt(new fn(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:to(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(G.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Gx),h.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Jt,(S!==N||_!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,S=N,_=N.version,g=r.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new gt(new Ms(2,2),new ga({name:"BackgroundMaterial",uniforms:to(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(N.colorSpace)!==Jt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||_!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,S=N,_=N.version,g=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function y(I,G){I.getRGB(qc,Fx(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,G,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,G=1){d.set(I),p=G,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,y(d,p)},render:A,addToRenderList:D,dispose:x}}function DE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,j,he,ae,J){let z=!1;const X=_(H,ae,he,j);c!==X&&(c=X,h(c.object)),z=T(H,ae,he,J),z&&A(H,ae,he,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(z||d)&&(d=!1,N(H,j,he,ae),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function S(H){return r.deleteVertexArray(H)}function _(H,j,he,ae){const J=ae.wireframe===!0;let z=s[j.id];z===void 0&&(z={},s[j.id]=z);const X=H.isInstancedMesh===!0?H.id:0;let ie=z[X];ie===void 0&&(ie={},z[X]=ie);let _e=ie[he.id];_e===void 0&&(_e={},ie[he.id]=_e);let B=_e[J];return B===void 0&&(B=g(m()),_e[J]=B),B}function g(H){const j=[],he=[],ae=[];for(let J=0;J<i;J++)j[J]=0,he[J]=0,ae[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:he,attributeDivisors:ae,object:H,attributes:{},index:null}}function T(H,j,he,ae){const J=c.attributes,z=j.attributes;let X=0;const ie=he.getAttributes();for(const _e in ie)if(ie[_e].location>=0){const b=J[_e];let V=z[_e];if(V===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),b===void 0||b.attribute!==V||V&&b.data!==V.data)return!0;X++}return c.attributesNum!==X||c.index!==ae}function A(H,j,he,ae){const J={},z=j.attributes;let X=0;const ie=he.getAttributes();for(const _e in ie)if(ie[_e].location>=0){let b=z[_e];b===void 0&&(_e==="instanceMatrix"&&H.instanceMatrix&&(b=H.instanceMatrix),_e==="instanceColor"&&H.instanceColor&&(b=H.instanceColor));const V={};V.attribute=b,b&&b.data&&(V.data=b.data),J[_e]=V,X++}c.attributes=J,c.attributesNum=X,c.index=ae}function D(){const H=c.newAttributes;for(let j=0,he=H.length;j<he;j++)H[j]=0}function y(H){x(H,0)}function x(H,j){const he=c.newAttributes,ae=c.enabledAttributes,J=c.attributeDivisors;he[H]=1,ae[H]===0&&(r.enableVertexAttribArray(H),ae[H]=1),J[H]!==j&&(r.vertexAttribDivisor(H,j),J[H]=j)}function I(){const H=c.newAttributes,j=c.enabledAttributes;for(let he=0,ae=j.length;he<ae;he++)j[he]!==H[he]&&(r.disableVertexAttribArray(he),j[he]=0)}function G(H,j,he,ae,J,z,X){X===!0?r.vertexAttribIPointer(H,j,he,J,z):r.vertexAttribPointer(H,j,he,ae,J,z)}function N(H,j,he,ae){D();const J=ae.attributes,z=he.getAttributes(),X=j.defaultAttributeValues;for(const ie in z){const _e=z[ie];if(_e.location>=0){let B=J[ie];if(B===void 0&&(ie==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),ie==="instanceColor"&&H.instanceColor&&(B=H.instanceColor)),B!==void 0){const b=B.normalized,V=B.itemSize,fe=e.get(B);if(fe===void 0)continue;const Se=fe.buffer,Ee=fe.type,Z=fe.bytesPerElement,oe=Ee===r.INT||Ee===r.UNSIGNED_INT||B.gpuType===Wh;if(B.isInterleavedBufferAttribute){const pe=B.data,Ne=pe.stride,ke=B.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<_e.locationSize;Pe++)x(_e.location+Pe,pe.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<_e.locationSize;Pe++)y(_e.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Pe=0;Pe<_e.locationSize;Pe++)G(_e.location+Pe,V/_e.locationSize,Ee,b,Ne*Z,(ke+V/_e.locationSize*Pe)*Z,oe)}else{if(B.isInstancedBufferAttribute){for(let pe=0;pe<_e.locationSize;pe++)x(_e.location+pe,B.meshPerAttribute);H.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let pe=0;pe<_e.locationSize;pe++)y(_e.location+pe);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let pe=0;pe<_e.locationSize;pe++)G(_e.location+pe,V/_e.locationSize,Ee,b,V*Z,V/_e.locationSize*pe*Z,oe)}}else if(X!==void 0){const b=X[ie];if(b!==void 0)switch(b.length){case 2:r.vertexAttrib2fv(_e.location,b);break;case 3:r.vertexAttrib3fv(_e.location,b);break;case 4:r.vertexAttrib4fv(_e.location,b);break;default:r.vertexAttrib1fv(_e.location,b)}}}}I()}function F(){O();for(const H in s){const j=s[H];for(const he in j){const ae=j[he];for(const J in ae){const z=ae[J];for(const X in z)S(z[X].object),delete z[X];delete ae[J]}}delete s[H]}}function U(H){if(s[H.id]===void 0)return;const j=s[H.id];for(const he in j){const ae=j[he];for(const J in ae){const z=ae[J];for(const X in z)S(z[X].object),delete z[X];delete ae[J]}}delete s[H.id]}function P(H){for(const j in s){const he=s[j];for(const ae in he){const J=he[ae];if(J[H.id]===void 0)continue;const z=J[H.id];for(const X in z)S(z[X].object),delete z[X];delete J[H.id]}}}function M(H){for(const j in s){const he=s[j],ae=H.isInstancedMesh===!0?H.id:0,J=he[ae];if(J!==void 0){for(const z in J){const X=J[z];for(const ie in X)S(X[ie].object),delete X[ie];delete J[z]}delete he[ae],Object.keys(he).length===0&&delete s[j]}}}function O(){Y(),d=!0,c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:y,disableUnusedAttributes:I}}function UE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(r.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let g=0;for(let T=0;T<S;T++)g+=h[T];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function LE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ji&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const M=P===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ai&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fa&&!M)}function m(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(ft("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),G=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:T,maxVertexTextures:A,maxTextureSize:D,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:G,maxFragmentUniforms:N,maxSamples:F,samples:U}}function OE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new qs,p=new mt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const T=_.length!==0||g||s!==0||l;return l=g,s=_.length,T},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=S(_,g,0)},this.setState=function(_,g,T){const A=_.clippingPlanes,D=_.clipIntersection,y=_.clipShadows,x=r.get(_);if(!l||A===null||A.length===0||c&&!y)c?S(null):h();else{const I=c?0:s,G=I*4;let N=x.clippingState||null;m.value=N,N=S(A,g,G,T);for(let F=0;F!==G;++F)N[F]=i[F];x.clippingState=N,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=I}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,g,T,A){const D=_!==null?_.length:0;let y=null;if(D!==0){if(y=m.value,A!==!0||y===null){const x=T+D*4,I=g.matrixWorldInverse;p.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let G=0,N=T;G!==D;++G,N+=4)d.copy(_[G]).applyMatrix4(I,p),d.normal.toArray(y,N),y[N+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,y}}const bs=4,Iv=[.125,.215,.35,.446,.526,.582],Ys=20,PE=256,tl=new rp,Fv=new Tt;let kd=null,Xd=0,Wd=0,qd=!1;const IE=new ne;class zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=IE}=c;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Xd,Wd),this._renderer.xr.enabled=qd,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ka,format:Ji,colorSpace:tu,depthBuffer:!1},l=Bv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(c)),this._blurMaterial=BE(c,e,i),this._ggxMaterial=zE(c,e,i)}return l}_compileMaterial(e){const i=new gt(new ai,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,s,l,c){const m=new hi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,T=_.toneMapping;_.getClearColor(Fv),_.toneMapping=ha,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new fn,new Ki({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,y=D.material;let x=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,x=!0):(y.color.copy(Fv),x=!0);for(let G=0;G<6;G++){const N=G%3;N===0?(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[G],c.y,c.z)):N===1?(m.up.set(0,0,h[G]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[G],c.z)):(m.up.set(0,h[G],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[G]));const F=this._cubeSize;qr(l,N*F,G>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(D,m),_.render(e,m)}_.toneMapping=T,_.autoClear=g,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===Jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;qr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-S*S),g=0+h*1.25,T=_*g,{_lodMax:A}=this,D=this._sizeLods[s],y=3*D*(s>A-bs?s-A+bs:0),x=4*(this._cubeSize-D);m.envMap.value=e.texture,m.roughness.value=T,m.mipInt.value=A-i,qr(c,y,x,3*D,2*D),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,qr(e,y,x,3*D,2*D),l.setRenderTarget(e),l.render(p,tl)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");const S=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,T=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*T):2*Math.PI/(2*Ys-1),D=c/A,y=isFinite(c)?1+Math.floor(S*D):Ys;y>Ys&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ys}`);const x=[];let I=0;for(let P=0;P<Ys;++P){const M=P/D,O=Math.exp(-M*M/2);x.push(O),P===0?I+=O:P<y&&(I+=2*O)}for(let P=0;P<x.length;P++)x[P]=x[P]/I;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:G}=this;g.dTheta.value=A,g.mipInt.value=G-s;const N=this._sizeLods[l],F=3*N*(l>G-bs?l-G+bs:0),U=4*(this._cubeSize-N);qr(i,F,U,3*N,2*N),m.setRenderTarget(i),m.render(_,tl)}}function FE(r){const e=[],i=[],s=[];let l=r;const c=r-bs+1+Iv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-bs?m=Iv[d-r+bs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,_=1+h,g=[S,S,_,S,_,_,S,S,_,_,S,_],T=6,A=6,D=3,y=2,x=1,I=new Float32Array(D*A*T),G=new Float32Array(y*A*T),N=new Float32Array(x*A*T);for(let U=0;U<T;U++){const P=U%3*2/3-1,M=U>2?0:-1,O=[P,M,0,P+2/3,M,0,P+2/3,M+1,0,P,M,0,P+2/3,M+1,0,P,M+1,0];I.set(O,D*A*U),G.set(g,y*A*U);const Y=[U,U,U,U,U,U];N.set(Y,x*A*U)}const F=new ai;F.setAttribute("position",new Bi(I,D)),F.setAttribute("uv",new Bi(G,y)),F.setAttribute("faceIndex",new Bi(N,x)),s.push(new gt(F,null)),l>bs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Bv(r,e,i){const s=new pa(r,e,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function zE(r,e,i){return new ga({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function BE(r,e,i){const s=new Float32Array(Ys),l=new ne(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Gv(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Hv(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ou(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hx extends pa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Ox(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fn(5,5,5),c=new ga({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:pi,blending:Ha});c.uniforms.tEquirect.value=i;const d=new gt(l,c),p=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Zn),new WM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function GE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,T=!1){return g==null?null:T?d(g):c(g)}function c(g){if(g&&g.isTexture){const T=g.mapping;if(T===vd||T===xd)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const D=new Hx(A.height);return D.fromEquirectangularTexture(r,g),e.set(g,D),g.addEventListener("dispose",h),p(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const T=g.mapping,A=T===vd||T===xd,D=T===Qs||T===Jr;if(A||D){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new zv(r)),y=A?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const I=g.image;return A&&I&&I.height>0||D&&I&&m(I)?(s===null&&(s=new zv(r)),y=A?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function p(g,T){return T===vd?g.mapping=Qs:T===xd&&(g.mapping=Jr),g}function m(g){let T=0;const A=6;for(let D=0;D<A;D++)g[D]!==void 0&&T++;return T===A}function h(g){const T=g.target;T.removeEventListener("dispose",h);const A=e.get(T);A!==void 0&&(e.delete(T),A.dispose())}function S(g){const T=g.target;T.removeEventListener("dispose",S);const A=i.get(T);A!==void 0&&(i.delete(T),A.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function HE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Zr("WebGLRenderer: "+s+" extension not supported."),l}}}function VE(r,e,i,s){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const T=c.get(g);T&&(e.remove(T),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const T in g)e.update(g[T],r.ARRAY_BUFFER)}function h(_){const g=[],T=_.index,A=_.attributes.position;let D=0;if(A===void 0)return;if(T!==null){const I=T.array;D=T.version;for(let G=0,N=I.length;G<N;G+=3){const F=I[G+0],U=I[G+1],P=I[G+2];g.push(F,U,U,P,P,F)}}else{const I=A.array;D=A.version;for(let G=0,N=I.length/3-1;G<N;G+=3){const F=G+0,U=G+1,P=G+2;g.push(F,U,U,P,P,F)}}const y=new(A.count>=65535?Dx:Nx)(g,1);y.version=D;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function S(_){const g=c.get(_);if(g){const T=_.index;T!==null&&g.version<T.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:S}}function kE(r,e,i){let s;function l(_){s=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*d),i.update(g,s,1)}function h(_,g,T){T!==0&&(r.drawElementsInstanced(s,g,c,_*d,T),i.update(g,s,T))}function S(_,g,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,T);let D=0;for(let y=0;y<T;y++)D+=g[y];i.update(D,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function XE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Vt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function WE(r,e,i){const s=new WeakMap,l=new dn;function c(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==_){let Y=function(){M.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var T=Y;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],G=p.morphAttributes.color||[];let N=0;A===!0&&(N=1),D===!0&&(N=2),y===!0&&(N=3);let F=p.attributes.position.count*N,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*U*4*_),M=new wx(P,F,U,_);M.type=fa,M.needsUpdate=!0;const O=N*4;for(let H=0;H<_;H++){const j=x[H],he=I[H],ae=G[H],J=F*U*4*H;for(let z=0;z<j.count;z++){const X=z*O;A===!0&&(l.fromBufferAttribute(j,z),P[J+X+0]=l.x,P[J+X+1]=l.y,P[J+X+2]=l.z,P[J+X+3]=0),D===!0&&(l.fromBufferAttribute(he,z),P[J+X+4]=l.x,P[J+X+5]=l.y,P[J+X+6]=l.z,P[J+X+7]=0),y===!0&&(l.fromBufferAttribute(ae,z),P[J+X+8]=l.x,P[J+X+9]=l.y,P[J+X+10]=l.z,P[J+X+11]=ae.itemSize===4?l.w:1)}}g={count:_,texture:M,size:new Dt(F,U)},s.set(p,g),p.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<h.length;y++)A+=h[y];const D=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",D),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function qE(r,e,i,s,l){let c=new WeakMap;function d(h){const S=l.render.frame,_=h.geometry,g=e.get(h,_);if(c.get(g)!==S&&(e.update(g),c.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const T=h.skeleton;c.get(T)!==S&&(T.update(),c.set(T,S))}return g}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const jE={[dx]:"LINEAR_TONE_MAPPING",[hx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[gx]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[mx]:"CUSTOM_TONE_MAPPING"};function YE(r,e,i,s,l,c){const d=new pa(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new eo(e,i):void 0}),p=new pa(e,i,{type:ka,depthBuffer:!1,stencilBuffer:!1}),m=new ai;m.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const h=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new gt(m,h),_=new rp(-1,1,1,-1,0,1);let g=null,T=null,A=!1,D,y=null,x=[],I=!1;this.setSize=function(G,N){d.setSize(G,N),p.setSize(G,N);for(let F=0;F<x.length;F++){const U=x[F];U.setSize&&U.setSize(G,N)}},this.setEffects=function(G){x=G,I=x.length>0&&x[0].isRenderPass===!0;const N=d.width,F=d.height;for(let U=0;U<x.length;U++){const P=x[U];P.setSize&&P.setSize(N,F)}},this.begin=function(G,N){if(A||G.toneMapping===ha&&x.length===0)return!1;if(y=N,N!==null){const F=N.width,U=N.height;(d.width!==F||d.height!==U)&&this.setSize(F,U)}return I===!1&&G.setRenderTarget(d),D=G.toneMapping,G.toneMapping=ha,!0},this.hasRenderPass=function(){return I},this.end=function(G,N){G.toneMapping=D,A=!0;let F=d,U=p;for(let P=0;P<x.length;P++){const M=x[P];if(M.enabled!==!1&&(M.render(G,U,F,N),M.needsSwap!==!1)){const O=F;F=U,U=O}}if(g!==G.outputColorSpace||T!==G.toneMapping){g=G.outputColorSpace,T=G.toneMapping,h.defines={},Pt.getTransfer(g)===Jt&&(h.defines.SRGB_TRANSFER="");const P=jE[T];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=F.texture,G.setRenderTarget(y),G.render(S,_),y=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Vx=new Kn,zh=new eo(1,1),kx=new wx,Xx=new dM,Wx=new Ox,Vv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function so(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Vv[l];if(c===void 0&&(c=new Float32Array(l),Vv[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function Dn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Un(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function lu(r,e){let i=kv[e];i===void 0&&(i=new Int32Array(e),kv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function ZE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function KE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;r.uniform2fv(this.addr,e),Un(i,e)}}function QE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Dn(i,e))return;r.uniform3fv(this.addr,e),Un(i,e)}}function JE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;r.uniform4fv(this.addr,e),Un(i,e)}}function $E(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Dn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Un(i,e)}else{if(Dn(i,s))return;qv.set(s),r.uniformMatrix2fv(this.addr,!1,qv),Un(i,s)}}function eT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Dn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Un(i,e)}else{if(Dn(i,s))return;Wv.set(s),r.uniformMatrix3fv(this.addr,!1,Wv),Un(i,s)}}function tT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Dn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Un(i,e)}else{if(Dn(i,s))return;Xv.set(s),r.uniformMatrix4fv(this.addr,!1,Xv),Un(i,s)}}function nT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function iT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;r.uniform2iv(this.addr,e),Un(i,e)}}function aT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Dn(i,e))return;r.uniform3iv(this.addr,e),Un(i,e)}}function sT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;r.uniform4iv(this.addr,e),Un(i,e)}}function rT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function oT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Dn(i,e))return;r.uniform2uiv(this.addr,e),Un(i,e)}}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Dn(i,e))return;r.uniform3uiv(this.addr,e),Un(i,e)}}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Dn(i,e))return;r.uniform4uiv(this.addr,e),Un(i,e)}}function uT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(zh.compareFunction=i.isReversedDepthBuffer()?Jh:Qh,c=zh):c=Vx,i.setTexture2D(e||c,l)}function fT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Xx,l)}function dT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Wx,l)}function hT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||kx,l)}function pT(r){switch(r){case 5126:return ZE;case 35664:return KE;case 35665:return QE;case 35666:return JE;case 35674:return $E;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return aT;case 35669:case 35673:return sT;case 5125:return rT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return hT}}function mT(r,e){r.uniform1fv(this.addr,e)}function gT(r,e){const i=so(e,this.size,2);r.uniform2fv(this.addr,i)}function vT(r,e){const i=so(e,this.size,3);r.uniform3fv(this.addr,i)}function xT(r,e){const i=so(e,this.size,4);r.uniform4fv(this.addr,i)}function _T(r,e){const i=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ST(r,e){const i=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function yT(r,e){const i=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MT(r,e){r.uniform1iv(this.addr,e)}function bT(r,e){r.uniform2iv(this.addr,e)}function ET(r,e){r.uniform3iv(this.addr,e)}function TT(r,e){r.uniform4iv(this.addr,e)}function AT(r,e){r.uniform1uiv(this.addr,e)}function wT(r,e){r.uniform2uiv(this.addr,e)}function RT(r,e){r.uniform3uiv(this.addr,e)}function CT(r,e){r.uniform4uiv(this.addr,e)}function NT(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=zh:d=Vx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function DT(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Xx,c[d])}function UT(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Wx,c[d])}function LT(r,e,i){const s=this.cache,l=e.length,c=lu(i,l);Dn(s,c)||(r.uniform1iv(this.addr,c),Un(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||kx,c[d])}function OT(r){switch(r){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return xT;case 35674:return _T;case 35675:return ST;case 35676:return yT;case 5124:case 35670:return MT;case 35667:case 35671:return bT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return wT;case 36295:return RT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return LT}}class PT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pT(i.type)}}class IT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OT(i.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function jv(r,e){r.seq.push(e),r.map[e.id]=e}function zT(r,e,i){const s=r.name,l=s.length;for(jd.lastIndex=0;;){const c=jd.exec(s),d=jd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){jv(i,h===void 0?new PT(p,r,e):new IT(p,r,e));break}else{let _=i.map[p];_===void 0&&(_=new FT(p),jv(i,_)),i=_}}}class Jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);zT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Yv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const BT=37297;let GT=0;function HT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const Zv=new mt;function VT(r){Pt._getMatrix(Zv,Pt.workingColorSpace,r);const e=`mat3( ${Zv.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(r)){case nu:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Kv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+HT(r.getShaderSource(e),p)}else return c}function kT(r,e){const i=VT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const XT={[dx]:"Linear",[hx]:"Reinhard",[px]:"Cineon",[Xh]:"ACESFilmic",[gx]:"AgX",[vx]:"Neutral",[mx]:"Custom"};function WT(r,e){const i=XT[e];return i===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ne;function qT(){Pt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function YT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ZT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function al(r){return r!==""}function Qv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(r){return r.replace(KT,JT)}const QT=new Map;function JT(r,e){let i=_t[e];if(i===void 0){const s=QT.get(e);if(s!==void 0)i=_t[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bh(i)}const $T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(r){return r.replace($T,e2)}function e2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function ex(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const t2={[sl]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function n2(r){return t2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const i2={[Qs]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function a2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":i2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const s2={[Jr]:"ENVMAP_MODE_REFRACTION"};function r2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":s2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const o2={[fx]:"ENVMAP_BLENDING_MULTIPLY",[Ny]:"ENVMAP_BLENDING_MIX",[Dy]:"ENVMAP_BLENDING_ADD"};function l2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":o2[r.combine]||"ENVMAP_BLENDING_NONE"}function c2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function u2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=n2(i),h=a2(i),S=r2(i),_=l2(i),g=c2(i),T=jT(i),A=YT(c),D=l.createProgram();let y,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(al).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(al).join(`
`),x.length>0&&(x+=`
`)):(y=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[ex(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ha?"#define TONE_MAPPING":"",i.toneMapping!==ha?_t.tonemapping_pars_fragment:"",i.toneMapping!==ha?WT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,kT("linearToOutputTexel",i.outputColorSpace),qT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),d=Bh(d),d=Qv(d,i),d=Jv(d,i),p=Bh(p),p=Qv(p,i),p=Jv(p,i),d=$v(d),p=$v(p),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=I+y+d,N=I+x+p,F=Yv(l,l.VERTEX_SHADER,G),U=Yv(l,l.FRAGMENT_SHADER,N);l.attachShader(D,F),l.attachShader(D,U),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function P(H){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(D)||"",he=l.getShaderInfoLog(F)||"",ae=l.getShaderInfoLog(U)||"",J=j.trim(),z=he.trim(),X=ae.trim();let ie=!0,_e=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,F,U);else{const B=Kv(l,F,"vertex"),b=Kv(l,U,"fragment");Vt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+J+`
`+B+`
`+b)}else J!==""?ft("WebGLProgram: Program Info Log:",J):(z===""||X==="")&&(_e=!1);_e&&(H.diagnostics={runnable:ie,programLog:J,vertexShader:{log:z,prefix:y},fragmentShader:{log:X,prefix:x}})}l.deleteShader(F),l.deleteShader(U),M=new Jc(l,D),O=ZT(l,D)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(D,BT)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=F,this.fragmentShader=U,this}let f2=0;class d2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new h2(e),i.set(e,s)),s}}class h2{constructor(e){this.id=f2++,this.code=e,this.usedTimes=0}}function p2(r){return r===Js||r===$c||r===eu}function m2(r,e,i,s,l,c){const d=new Rx,p=new d2,m=new Set,h=[],S=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return m.add(M),M===0?"uv":`uv${M}`}function D(M,O,Y,H,j,he){const ae=H.fog,J=j.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ie=e.get(M.envMap||z,X),_e=ie&&ie.mapping===su?ie.image.height:null,B=T[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&ft("WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const b=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,V=b!==void 0?b.length:0;let fe=0;J.morphAttributes.position!==void 0&&(fe=1),J.morphAttributes.normal!==void 0&&(fe=2),J.morphAttributes.color!==void 0&&(fe=3);let Se,Ee,Z,oe;if(B){const Ye=ca[B];Se=Ye.vertexShader,Ee=Ye.fragmentShader}else{Se=M.vertexShader,Ee=M.fragmentShader;const Ye=p.getVertexShaderStage(M),sn=p.getFragmentShaderStage(M);p.update(M,Ye,sn),Z=Ye.id,oe=sn.id}const pe=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),ke=j.isInstancedMesh===!0,Pe=j.isBatchedMesh===!0,st=!!M.map,$e=!!M.matcap,qe=!!ie,rt=!!M.aoMap,ot=!!M.lightMap,Mt=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,Bt=!!M.displacementMap,Ut=!!M.emissiveMap,Zt=!!M.metalnessMap,Wt=!!M.roughnessMap,Q=M.anisotropy>0,Ft=M.clearcoat>0,At=M.dispersion>0,L=M.iridescence>0,E=M.sheen>0,$=M.transmission>0,te=Q&&!!M.anisotropyMap,ge=Ft&&!!M.clearcoatMap,De=Ft&&!!M.clearcoatNormalMap,Ie=Ft&&!!M.clearcoatRoughnessMap,ve=L&&!!M.iridescenceMap,xe=L&&!!M.iridescenceThicknessMap,Le=E&&!!M.sheenColorMap,We=E&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Fe=!!M.specularColorMap,nt=!!M.specularIntensityMap,it=$&&!!M.transmissionMap,ct=$&&!!M.thicknessMap,W=!!M.gradientMap,Ue=!!M.alphaMap,ye=M.alphaTest>0,Oe=!!M.alphaHash,He=!!M.extensions;let Re=ha;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Re=r.toneMapping);const Qe={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:Se,fragmentShader:Ee,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:Pe,batchingColor:Pe&&j._colorsTexture!==null,instancing:ke,instancingColor:ke&&j.instanceColor!==null,instancingMorph:ke&&j.morphTexture!==null,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:$e,envMap:qe,envMapMode:qe&&ie.mapping,envMapCubeUVHeight:_e,aoMap:rt,lightMap:ot,bumpMap:Mt,normalMap:It,displacementMap:Bt,emissiveMap:Ut,normalMapObjectSpace:It&&M.normalMapType===Oy,normalMapTangentSpace:It&&M.normalMapType===Ih,packedNormalMap:It&&M.normalMapType===Ih&&p2(M.normalMap.format),metalnessMap:Zt,roughnessMap:Wt,anisotropy:Q,anisotropyMap:te,clearcoat:Ft,clearcoatMap:ge,clearcoatNormalMap:De,clearcoatRoughnessMap:Ie,dispersion:At,iridescence:L,iridescenceMap:ve,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Le,sheenRoughnessMap:We,specularMap:ze,specularColorMap:Fe,specularIntensityMap:nt,transmission:$,transmissionMap:it,thicknessMap:ct,gradientMap:W,opaque:M.transparent===!1&&M.blending===Yr&&M.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:Oe,combine:M.combine,mapUv:st&&A(M.map.channel),aoMapUv:rt&&A(M.aoMap.channel),lightMapUv:ot&&A(M.lightMap.channel),bumpMapUv:Mt&&A(M.bumpMap.channel),normalMapUv:It&&A(M.normalMap.channel),displacementMapUv:Bt&&A(M.displacementMap.channel),emissiveMapUv:Ut&&A(M.emissiveMap.channel),metalnessMapUv:Zt&&A(M.metalnessMap.channel),roughnessMapUv:Wt&&A(M.roughnessMap.channel),anisotropyMapUv:te&&A(M.anisotropyMap.channel),clearcoatMapUv:ge&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&A(M.sheenRoughnessMap.channel),specularMapUv:ze&&A(M.specularMap.channel),specularColorMapUv:Fe&&A(M.specularColorMap.channel),specularIntensityMapUv:nt&&A(M.specularIntensityMap.channel),transmissionMapUv:it&&A(M.transmissionMap.channel),thicknessMapUv:ct&&A(M.thicknessMap.channel),alphaMapUv:Ue&&A(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(It||Q),vertexNormals:!!J.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(st||Ue),fog:!!ae,useFog:M.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||J.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:fe,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&Pt.getTransfer(M.map.colorSpace)===Jt,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(M.emissiveMap.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ua,flipSided:M.side===pi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function y(M){const O=[];if(M.shaderID?O.push(M.shaderID):(O.push(M.customVertexShaderID),O.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)O.push(Y),O.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(x(O,M),I(O,M),O.push(r.outputColorSpace)),O.push(M.customProgramCacheKey),O.join()}function x(M,O){M.push(O.precision),M.push(O.outputColorSpace),M.push(O.envMapMode),M.push(O.envMapCubeUVHeight),M.push(O.mapUv),M.push(O.alphaMapUv),M.push(O.lightMapUv),M.push(O.aoMapUv),M.push(O.bumpMapUv),M.push(O.normalMapUv),M.push(O.displacementMapUv),M.push(O.emissiveMapUv),M.push(O.metalnessMapUv),M.push(O.roughnessMapUv),M.push(O.anisotropyMapUv),M.push(O.clearcoatMapUv),M.push(O.clearcoatNormalMapUv),M.push(O.clearcoatRoughnessMapUv),M.push(O.iridescenceMapUv),M.push(O.iridescenceThicknessMapUv),M.push(O.sheenColorMapUv),M.push(O.sheenRoughnessMapUv),M.push(O.specularMapUv),M.push(O.specularColorMapUv),M.push(O.specularIntensityMapUv),M.push(O.transmissionMapUv),M.push(O.thicknessMapUv),M.push(O.combine),M.push(O.fogExp2),M.push(O.sizeAttenuation),M.push(O.morphTargetsCount),M.push(O.morphAttributeCount),M.push(O.numDirLights),M.push(O.numPointLights),M.push(O.numSpotLights),M.push(O.numSpotLightMaps),M.push(O.numHemiLights),M.push(O.numRectAreaLights),M.push(O.numDirLightShadows),M.push(O.numPointLightShadows),M.push(O.numSpotLightShadows),M.push(O.numSpotLightShadowsWithMaps),M.push(O.numLightProbes),M.push(O.shadowMapType),M.push(O.toneMapping),M.push(O.numClippingPlanes),M.push(O.numClipIntersection),M.push(O.depthPacking)}function I(M,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),M.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),M.push(d.mask)}function G(M){const O=T[M.type];let Y;if(O){const H=ca[O];Y=LM.clone(H.uniforms)}else Y=M.uniforms;return Y}function N(M,O){let Y=S.get(O);return Y!==void 0?++Y.usedTimes:(Y=new u2(r,O,M,l),h.push(Y),S.set(O,Y)),Y}function F(M){if(--M.usedTimes===0){const O=h.indexOf(M);h[O]=h[h.length-1],h.pop(),S.delete(M.cacheKey),M.destroy()}}function U(M){p.remove(M)}function P(){p.dispose()}return{getParameters:D,getProgramCacheKey:y,getUniforms:G,acquireProgram:N,releaseProgram:F,releaseShaderCache:U,programs:h,dispose:P}}function g2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function v2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function nx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let T=0;return g.isInstancedMesh&&(T+=2),g.isSkinnedMesh&&(T+=1),T}function p(g,T,A,D,y,x){let I=r[e];return I===void 0?(I={id:g.id,object:g,geometry:T,material:A,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:y,group:x},r[e]=I):(I.id=g.id,I.object=g,I.geometry=T,I.material=A,I.materialVariant=d(g),I.groupOrder=D,I.renderOrder=g.renderOrder,I.z=y,I.group=x),e++,I}function m(g,T,A,D,y,x){const I=p(g,T,A,D,y,x);A.transmission>0?s.push(I):A.transparent===!0?l.push(I):i.push(I)}function h(g,T,A,D,y,x){const I=p(g,T,A,D,y,x);A.transmission>0?s.unshift(I):A.transparent===!0?l.unshift(I):i.unshift(I)}function S(g,T,A){i.length>1&&i.sort(g||v2),s.length>1&&s.sort(T||tx),l.length>1&&l.sort(T||tx),A&&(i.reverse(),s.reverse(),l.reverse())}function _(){for(let g=e,T=r.length;g<T;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:_,sort:S}}function x2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new nx,r.set(s,[d])):l>=c.length?(d=new nx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function _2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new Tt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return r[e.id]=i,i}}}function S2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let y2=0;function M2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function b2(r){const e=new _2,i=S2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ne);const l=new ne,c=new hn,d=new hn;function p(h){let S=0,_=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let T=0,A=0,D=0,y=0,x=0,I=0,G=0,N=0,F=0,U=0,P=0;h.sort(M2);for(let O=0,Y=h.length;O<Y;O++){const H=h[O],j=H.color,he=H.intensity,ae=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Js?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)S+=j.r*he,_+=j.g*he,g+=j.b*he;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],he);P++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,ie=i.get(H);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,s.directionalShadow[T]=ie,s.directionalShadowMap[T]=J,s.directionalShadowMatrix[T]=H.shadow.matrix,I++}s.directional[T]=z,T++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(j).multiplyScalar(he),z.distance=ae,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[D]=z;const X=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,X.updateMatrices(H),H.castShadow&&U++),s.spotLightMatrix[D]=X.matrix,H.castShadow){const ie=i.get(H);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,s.spotShadow[D]=ie,s.spotShadowMap[D]=J,N++}D++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(j).multiplyScalar(he),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=z,y++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const X=H.shadow,ie=i.get(H);ie.shadowIntensity=X.intensity,ie.shadowBias=X.bias,ie.shadowNormalBias=X.normalBias,ie.shadowRadius=X.radius,ie.shadowMapSize=X.mapSize,ie.shadowCameraNear=X.camera.near,ie.shadowCameraFar=X.camera.far,s.pointShadow[A]=ie,s.pointShadowMap[A]=J,s.pointShadowMatrix[A]=H.shadow.matrix,G++}s.point[A]=z,A++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(he),z.groundColor.copy(H.groundColor).multiplyScalar(he),s.hemi[x]=z,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xe.LTC_FLOAT_1,s.rectAreaLTC2=Xe.LTC_FLOAT_2):(s.rectAreaLTC1=Xe.LTC_HALF_1,s.rectAreaLTC2=Xe.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=g;const M=s.hash;(M.directionalLength!==T||M.pointLength!==A||M.spotLength!==D||M.rectAreaLength!==y||M.hemiLength!==x||M.numDirectionalShadows!==I||M.numPointShadows!==G||M.numSpotShadows!==N||M.numSpotMaps!==F||M.numLightProbes!==P)&&(s.directional.length=T,s.spot.length=D,s.rectArea.length=y,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=N+F-U,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=P,M.directionalLength=T,M.pointLength=A,M.spotLength=D,M.rectAreaLength=y,M.hemiLength=x,M.numDirectionalShadows=I,M.numPointShadows=G,M.numSpotShadows=N,M.numSpotMaps=F,M.numLightProbes=P,s.version=y2++)}function m(h,S){let _=0,g=0,T=0,A=0,D=0;const y=S.matrixWorldInverse;for(let x=0,I=h.length;x<I;x++){const G=h[x];if(G.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(G.isSpotLight){const N=s.spot[T];N.position.setFromMatrixPosition(G.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(G.matrixWorld),l.setFromMatrixPosition(G.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),T++}else if(G.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(G.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(G.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),A++}else if(G.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(G.matrixWorld),N.position.applyMatrix4(y),g++}else if(G.isHemisphereLight){const N=s.hemi[D];N.direction.setFromMatrixPosition(G.matrixWorld),N.direction.transformDirection(y),D++}}}return{setup:p,setupView:m,state:s}}function ix(r){const e=new b2(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function S(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function E2(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new ix(r),e.set(l,[p])):c>=d.length?(p=new ix(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const T2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,w2=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],R2=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],ax=new hn,nl=new ne,Yd=new ne;function C2(r,e,i){let s=new np;const l=new Dt,c=new Dt,d=new dn,p=new FM,m=new zM,h={},S=i.maxTextureSize,_={[Es]:pi,[pi]:Es,[ua]:ua},g=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:T2,fragmentShader:A2}),T=g.clone();T.defines.HORIZONTAL_PASS=1;const A=new ai;A.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new gt(A,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let x=this.type;this.render=function(U,P,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===fy&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);const O=r.getRenderTarget(),Y=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Ha),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const he=x!==this.type;he&&P.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(J=>J.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,J=U.length;ae<J;ae++){const z=U[ae],X=z.shadow;if(X===void 0){ft("WebGLShadowMap:",z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ie=X.getFrameExtents();l.multiply(ie),c.copy(X.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/ie.x),l.x=c.x*ie.x,X.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/ie.y),l.y=c.y*ie.y,X.mapSize.y=c.y));const _e=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=_e,X.map===null||he===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===il){if(z.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pa(l.x,l.y,{format:Js,type:ka,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),X.map.texture.name=z.name+".shadowMap",X.map.depthTexture=new eo(l.x,l.y,fa),X.map.depthTexture.name=z.name+".shadowMapDepth",X.map.depthTexture.format=Xa,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xn,X.map.depthTexture.magFilter=Xn}else z.isPointLight?(X.map=new Hx(l.x),X.map.depthTexture=new DM(l.x,ma)):(X.map=new pa(l.x,l.y),X.map.depthTexture=new eo(l.x,l.y,ma)),X.map.depthTexture.name=z.name+".shadowMap",X.map.depthTexture.format=Xa,this.type===sl?(X.map.depthTexture.compareFunction=_e?Jh:Qh,X.map.depthTexture.minFilter=Zn,X.map.depthTexture.magFilter=Zn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xn,X.map.depthTexture.magFilter=Xn);X.camera.updateProjectionMatrix()}const B=X.map.isWebGLCubeRenderTarget?6:1;for(let b=0;b<B;b++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,b),r.clear();else{b===0&&(r.setRenderTarget(X.map),r.clear());const V=X.getViewport(b);d.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),j.viewport(d)}if(z.isPointLight){const V=X.camera,fe=X.matrix,Se=z.distance||V.far;Se!==V.far&&(V.far=Se,V.updateProjectionMatrix()),nl.setFromMatrixPosition(z.matrixWorld),V.position.copy(nl),Yd.copy(V.position),Yd.add(w2[b]),V.up.copy(R2[b]),V.lookAt(Yd),V.updateMatrixWorld(),fe.makeTranslation(-nl.x,-nl.y,-nl.z),ax.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ax,V.coordinateSystem,V.reversedDepth)}else X.updateMatrices(z);s=X.getFrustum(),N(P,M,X.camera,z,this.type)}X.isPointLightShadow!==!0&&this.type===il&&I(X,M),X.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(O,Y,H)};function I(U,P){const M=e.update(D);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,T.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,T.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new pa(l.x,l.y,{format:Js,type:ka})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(P,null,M,g,D,null),T.uniforms.shadow_pass.value=U.mapPass.texture,T.uniforms.resolution.value=U.mapSize,T.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(P,null,M,T,D,null)}function G(U,P,M,O){let Y=null;const H=M.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=M.isPointLight===!0?m:p,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const j=Y.uuid,he=P.uuid;let ae=h[j];ae===void 0&&(ae={},h[j]=ae);let J=ae[he];J===void 0&&(J=Y.clone(),ae[he]=J,P.addEventListener("dispose",F)),Y=J}if(Y.visible=P.visible,Y.wireframe=P.wireframe,O===il?Y.side=P.shadowSide!==null?P.shadowSide:P.side:Y.side=P.shadowSide!==null?P.shadowSide:_[P.side],Y.alphaMap=P.alphaMap,Y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,Y.map=P.map,Y.clipShadows=P.clipShadows,Y.clippingPlanes=P.clippingPlanes,Y.clipIntersection=P.clipIntersection,Y.displacementMap=P.displacementMap,Y.displacementScale=P.displacementScale,Y.displacementBias=P.displacementBias,Y.wireframeLinewidth=P.wireframeLinewidth,Y.linewidth=P.linewidth,M.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=M}return Y}function N(U,P,M,O,Y){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===il)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,U.matrixWorld);const he=e.update(U),ae=U.material;if(Array.isArray(ae)){const J=he.groups;for(let z=0,X=J.length;z<X;z++){const ie=J[z],_e=ae[ie.materialIndex];if(_e&&_e.visible){const B=G(U,_e,O,Y);U.onBeforeShadow(r,U,P,M,he,B,ie),r.renderBufferDirect(M,null,he,B,U,ie),U.onAfterShadow(r,U,P,M,he,B,ie)}}}else if(ae.visible){const J=G(U,ae,O,Y);U.onBeforeShadow(r,U,P,M,he,J,null),r.renderBufferDirect(M,null,he,J,U,null),U.onAfterShadow(r,U,P,M,he,J,null)}}const j=U.children;for(let he=0,ae=j.length;he<ae;he++)N(j[he],P,M,O,Y)}function F(U){U.target.removeEventListener("dispose",F);for(const M in h){const O=h[M],Y=U.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function N2(r,e){function i(){let W=!1;const Ue=new dn;let ye=null;const Oe=new dn(0,0,0,0);return{setMask:function(He){ye!==He&&!W&&(r.colorMask(He,He,He,He),ye=He)},setLocked:function(He){W=He},setClear:function(He,Re,Qe,Ye,sn){sn===!0&&(He*=Ye,Re*=Ye,Qe*=Ye),Ue.set(He,Re,Qe,Ye),Oe.equals(Ue)===!1&&(r.clearColor(He,Re,Qe,Ye),Oe.copy(Ue))},reset:function(){W=!1,ye=null,Oe.set(-1,0,0,0)}}}function s(){let W=!1,Ue=!1,ye=null,Oe=null,He=null;return{setReversed:function(Re){if(Ue!==Re){const Qe=e.get("EXT_clip_control");Re?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ue=Re;const Ye=He;He=null,this.setClear(Ye)}},getReversed:function(){return Ue},setTest:function(Re){Re?pe(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(Re){ye!==Re&&!W&&(r.depthMask(Re),ye=Re)},setFunc:function(Re){if(Ue&&(Re=Xy[Re]),Oe!==Re){switch(Re){case Qd:r.depthFunc(r.NEVER);break;case Jd:r.depthFunc(r.ALWAYS);break;case $d:r.depthFunc(r.LESS);break;case Qr:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case th:r.depthFunc(r.GEQUAL);break;case nh:r.depthFunc(r.GREATER);break;case ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=Re}},setLocked:function(Re){W=Re},setClear:function(Re){He!==Re&&(He=Re,Ue&&(Re=1-Re),r.clearDepth(Re))},reset:function(){W=!1,ye=null,Oe=null,He=null,Ue=!1}}}function l(){let W=!1,Ue=null,ye=null,Oe=null,He=null,Re=null,Qe=null,Ye=null,sn=null;return{setTest:function(qt){W||(qt?pe(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(qt){Ue!==qt&&!W&&(r.stencilMask(qt),Ue=qt)},setFunc:function(qt,Qn,Wn){(ye!==qt||Oe!==Qn||He!==Wn)&&(r.stencilFunc(qt,Qn,Wn),ye=qt,Oe=Qn,He=Wn)},setOp:function(qt,Qn,Wn){(Re!==qt||Qe!==Qn||Ye!==Wn)&&(r.stencilOp(qt,Qn,Wn),Re=qt,Qe=Qn,Ye=Wn)},setLocked:function(qt){W=qt},setClear:function(qt){sn!==qt&&(r.clearStencil(qt),sn=qt)},reset:function(){W=!1,Ue=null,ye=null,Oe=null,He=null,Re=null,Qe=null,Ye=null,sn=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},_={},g={},T=new WeakMap,A=[],D=null,y=!1,x=null,I=null,G=null,N=null,F=null,U=null,P=null,M=new Tt(0,0,0),O=0,Y=!1,H=null,j=null,he=null,ae=null,J=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const _e=r.getParameter(r.VERSION);_e.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(_e)[1]),X=ie>=1):_e.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),X=ie>=2);let B=null,b={};const V=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),Se=new dn().fromArray(V),Ee=new dn().fromArray(fe);function Z(W,Ue,ye,Oe){const He=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<ye;Qe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ue,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(Ue+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return Re}const oe={};oe[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),pe(r.DEPTH_TEST),d.setFunc(Qr),Mt(!1),It(nv),pe(r.CULL_FACE),rt(Ha);function pe(W){S[W]!==!0&&(r.enable(W),S[W]=!0)}function Ne(W){S[W]!==!1&&(r.disable(W),S[W]=!1)}function ke(W,Ue){return g[W]!==Ue?(r.bindFramebuffer(W,Ue),g[W]=Ue,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ue),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Pe(W,Ue){let ye=A,Oe=!1;if(W){ye=T.get(Ue),ye===void 0&&(ye=[],T.set(Ue,ye));const He=W.textures;if(ye.length!==He.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Qe=He.length;Re<Qe;Re++)ye[Re]=r.COLOR_ATTACHMENT0+Re;ye.length=He.length,Oe=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(ye)}function st(W){return D!==W?(r.useProgram(W),D=W,!0):!1}const $e={[js]:r.FUNC_ADD,[hy]:r.FUNC_SUBTRACT,[py]:r.FUNC_REVERSE_SUBTRACT};$e[my]=r.MIN,$e[gy]=r.MAX;const qe={[vy]:r.ZERO,[xy]:r.ONE,[_y]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[Ty]:r.SRC_ALPHA_SATURATE,[by]:r.DST_COLOR,[yy]:r.DST_ALPHA,[Sy]:r.ONE_MINUS_SRC_COLOR,[Kd]:r.ONE_MINUS_SRC_ALPHA,[Ey]:r.ONE_MINUS_DST_COLOR,[My]:r.ONE_MINUS_DST_ALPHA,[Ay]:r.CONSTANT_COLOR,[wy]:r.ONE_MINUS_CONSTANT_COLOR,[Ry]:r.CONSTANT_ALPHA,[Cy]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(W,Ue,ye,Oe,He,Re,Qe,Ye,sn,qt){if(W===Ha){y===!0&&(Ne(r.BLEND),y=!1);return}if(y===!1&&(pe(r.BLEND),y=!0),W!==dy){if(W!==x||qt!==Y){if((I!==js||F!==js)&&(r.blendEquation(r.FUNC_ADD),I=js,F=js),qt)switch(W){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case iv:r.blendFunc(r.ONE,r.ONE);break;case av:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Vt("WebGLState: Invalid blending: ",W);break}else switch(W){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case iv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case av:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",W);break}G=null,N=null,U=null,P=null,M.set(0,0,0),O=0,x=W,Y=qt}return}He=He||Ue,Re=Re||ye,Qe=Qe||Oe,(Ue!==I||He!==F)&&(r.blendEquationSeparate($e[Ue],$e[He]),I=Ue,F=He),(ye!==G||Oe!==N||Re!==U||Qe!==P)&&(r.blendFuncSeparate(qe[ye],qe[Oe],qe[Re],qe[Qe]),G=ye,N=Oe,U=Re,P=Qe),(Ye.equals(M)===!1||sn!==O)&&(r.blendColor(Ye.r,Ye.g,Ye.b,sn),M.copy(Ye),O=sn),x=W,Y=!1}function ot(W,Ue){W.side===ua?Ne(r.CULL_FACE):pe(r.CULL_FACE);let ye=W.side===pi;Ue&&(ye=!ye),Mt(ye),W.blending===Yr&&W.transparent===!1?rt(Ha):rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Oe=W.stencilWrite;p.setTest(Oe),Oe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(W){H!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),H=W)}function It(W){W!==cy?(pe(r.CULL_FACE),W!==j&&(W===nv?r.cullFace(r.BACK):W===uy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),j=W}function Bt(W){W!==he&&(X&&r.lineWidth(W),he=W)}function Ut(W,Ue,ye){W?(pe(r.POLYGON_OFFSET_FILL),(ae!==Ue||J!==ye)&&(ae=Ue,J=ye,d.getReversed()&&(Ue=-Ue),r.polygonOffset(Ue,ye))):Ne(r.POLYGON_OFFSET_FILL)}function Zt(W){W?pe(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function Wt(W){W===void 0&&(W=r.TEXTURE0+z-1),B!==W&&(r.activeTexture(W),B=W)}function Q(W,Ue,ye){ye===void 0&&(B===null?ye=r.TEXTURE0+z-1:ye=B);let Oe=b[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},b[ye]=Oe),(Oe.type!==W||Oe.texture!==Ue)&&(B!==ye&&(r.activeTexture(ye),B=ye),r.bindTexture(W,Ue||oe[W]),Oe.type=W,Oe.texture=Ue)}function Ft(){const W=b[B];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function At(){try{r.compressedTexImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function E(){try{r.texSubImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function $(){try{r.texSubImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function te(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function De(){try{r.texStorage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function Ie(){try{r.texStorage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function ve(){try{r.texImage2D(...arguments)}catch(W){Vt("WebGLState:",W)}}function xe(){try{r.texImage3D(...arguments)}catch(W){Vt("WebGLState:",W)}}function Le(W){return _[W]!==void 0?_[W]:r.getParameter(W)}function We(W,Ue){_[W]!==Ue&&(r.pixelStorei(W,Ue),_[W]=Ue)}function ze(W){Se.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function Fe(W){Ee.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function nt(W,Ue){let ye=h.get(Ue);ye===void 0&&(ye=new WeakMap,h.set(Ue,ye));let Oe=ye.get(W);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ue,W.name),ye.set(W,Oe))}function it(W,Ue){const Oe=h.get(Ue).get(W);m.get(Ue)!==Oe&&(r.uniformBlockBinding(Ue,Oe,W.__bindingPointIndex),m.set(Ue,Oe))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},_={},B=null,b={},g={},T=new WeakMap,A=[],D=null,y=!1,x=null,I=null,G=null,N=null,F=null,U=null,P=null,M=new Tt(0,0,0),O=0,Y=!1,H=null,j=null,he=null,ae=null,J=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:pe,disable:Ne,bindFramebuffer:ke,drawBuffers:Pe,useProgram:st,setBlending:rt,setMaterial:ot,setFlipSided:Mt,setCullFace:It,setLineWidth:Bt,setPolygonOffset:Ut,setScissorTest:Zt,activeTexture:Wt,bindTexture:Q,unbindTexture:Ft,compressedTexImage2D:At,compressedTexImage3D:L,texImage2D:ve,texImage3D:xe,pixelStorei:We,getParameter:Le,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:De,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:te,compressedTexSubImage3D:ge,scissor:ze,viewport:Fe,reset:ct}}function D2(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,S=new WeakMap,_=new Set;let g;const T=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(L,E){return A?new OffscreenCanvas(L,E):iu("canvas")}function y(L,E,$){let te=1;const ge=At(L);if((ge.width>$||ge.height>$)&&(te=$/Math.max(ge.width,ge.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(te*ge.width),Ie=Math.floor(te*ge.height);g===void 0&&(g=D(De,Ie));const ve=E?D(De,Ie):g;return ve.width=De,ve.height=Ie,ve.getContext("2d").drawImage(L,0,0,De,Ie),ft("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+De+"x"+Ie+")."),ve}else return"data"in L&&ft("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function x(L){return L.generateMipmaps}function I(L){r.generateMipmap(L)}function G(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,$,te,ge,De=!1){if(L!==null){if(r[L]!==void 0)return r[L];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ie;te&&(Ie=e.get("EXT_texture_norm16"),Ie||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===r.RED&&($===r.FLOAT&&(ve=r.R32F),$===r.HALF_FLOAT&&(ve=r.R16F),$===r.UNSIGNED_BYTE&&(ve=r.R8),$===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.R16_EXT),$===r.SHORT&&Ie&&(ve=Ie.R16_SNORM_EXT)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.R8UI),$===r.UNSIGNED_SHORT&&(ve=r.R16UI),$===r.UNSIGNED_INT&&(ve=r.R32UI),$===r.BYTE&&(ve=r.R8I),$===r.SHORT&&(ve=r.R16I),$===r.INT&&(ve=r.R32I)),E===r.RG&&($===r.FLOAT&&(ve=r.RG32F),$===r.HALF_FLOAT&&(ve=r.RG16F),$===r.UNSIGNED_BYTE&&(ve=r.RG8),$===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RG16_EXT),$===r.SHORT&&Ie&&(ve=Ie.RG16_SNORM_EXT)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RG8UI),$===r.UNSIGNED_SHORT&&(ve=r.RG16UI),$===r.UNSIGNED_INT&&(ve=r.RG32UI),$===r.BYTE&&(ve=r.RG8I),$===r.SHORT&&(ve=r.RG16I),$===r.INT&&(ve=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),$===r.UNSIGNED_INT&&(ve=r.RGB32UI),$===r.BYTE&&(ve=r.RGB8I),$===r.SHORT&&(ve=r.RGB16I),$===r.INT&&(ve=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),$===r.UNSIGNED_INT&&(ve=r.RGBA32UI),$===r.BYTE&&(ve=r.RGBA8I),$===r.SHORT&&(ve=r.RGBA16I),$===r.INT&&(ve=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGB16_EXT),$===r.SHORT&&Ie&&(ve=Ie.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),E===r.RGBA){const xe=De?nu:Pt.getTransfer(ge);$===r.FLOAT&&(ve=r.RGBA32F),$===r.HALF_FLOAT&&(ve=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ve=xe===Jt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Ie&&(ve=Ie.RGBA16_EXT),$===r.SHORT&&Ie&&(ve=Ie.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function F(L,E){let $;return L?E===null||E===ma||E===ul?$=r.DEPTH24_STENCIL8:E===fa?$=r.DEPTH32F_STENCIL8:E===cl&&($=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ma||E===ul?$=r.DEPTH_COMPONENT24:E===fa?$=r.DEPTH_COMPONENT32F:E===cl&&($=r.DEPTH_COMPONENT16),$}function U(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xn&&L.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function P(L){const E=L.target;E.removeEventListener("dispose",P),O(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&_.delete(E)}function M(L){const E=L.target;E.removeEventListener("dispose",M),H(E)}function O(L){const E=s.get(L);if(E.__webglInit===void 0)return;const $=L.source,te=T.get($);if(te){const ge=te[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&Y(L),Object.keys(te).length===0&&T.delete($)}s.remove(L)}function Y(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const $=L.source,te=T.get($);delete te[E.__cacheKey],d.memory.textures--}function H(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ge=0;ge<E.__webglFramebuffer[te].length;ge++)r.deleteFramebuffer(E.__webglFramebuffer[te][ge]);else r.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)r.deleteFramebuffer(E.__webglFramebuffer[te]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let te=0,ge=$.length;te<ge;te++){const De=s.get($[te]);De.__webglTexture&&(r.deleteTexture(De.__webglTexture),d.memory.textures--),s.remove($[te])}s.remove(L)}let j=0;function he(){j=0}function ae(){return j}function J(L){j=L}function z(){const L=j;return L>=l.maxTextures&&ft("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),j+=1,L}function X(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ie(L,E){const $=s.get(L);if(L.isVideoTexture&&Q(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const te=L.image;if(te===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function _e(L,E){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){Ne($,L,E);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function B(L,E){const $=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){Ne($,L,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function b(L,E){const $=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&$.__version!==L.version){ke($,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const V={[ah]:r.REPEAT,[Ga]:r.CLAMP_TO_EDGE,[sh]:r.MIRRORED_REPEAT},fe={[Xn]:r.NEAREST,[Uy]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[_d]:r.LINEAR_MIPMAP_NEAREST,[Zs]:r.LINEAR_MIPMAP_LINEAR},Se={[Py]:r.NEVER,[Gy]:r.ALWAYS,[Iy]:r.LESS,[Qh]:r.LEQUAL,[Fy]:r.EQUAL,[Jh]:r.GEQUAL,[zy]:r.GREATER,[By]:r.NOTEQUAL};function Ee(L,E){if(E.type===fa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===_d||E.magFilter===bc||E.magFilter===Zs||E.minFilter===Zn||E.minFilter===_d||E.minFilter===bc||E.minFilter===Zs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,V[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,V[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,V[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,fe[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Xn||E.minFilter!==bc&&E.minFilter!==Zs||E.type===fa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Z(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P));const te=E.source;let ge=T.get(te);ge===void 0&&(ge={},T.set(te,ge));const De=X(E);if(De!==L.__cacheKey){ge[De]===void 0&&(ge[De]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ge[De].usedTimes++;const Ie=ge[L.__cacheKey];Ie!==void 0&&(ge[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&Y(E)),L.__cacheKey=De,L.__webglTexture=ge[De].texture}return $}function oe(L,E,$){return Math.floor(Math.floor(L/$)/E)}function pe(L,E,$,te){const De=L.updateRanges;if(De.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,te,E.data);else{De.sort((We,ze)=>We.start-ze.start);let Ie=0;for(let We=1;We<De.length;We++){const ze=De[Ie],Fe=De[We],nt=ze.start+ze.count,it=oe(Fe.start,E.width,4),ct=oe(ze.start,E.width,4);Fe.start<=nt+1&&it===ct&&oe(Fe.start+Fe.count-1,E.width,4)===it?ze.count=Math.max(ze.count,Fe.start+Fe.count-ze.start):(++Ie,De[Ie]=Fe)}De.length=Ie+1;const ve=i.getParameter(r.UNPACK_ROW_LENGTH),xe=i.getParameter(r.UNPACK_SKIP_PIXELS),Le=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let We=0,ze=De.length;We<ze;We++){const Fe=De[We],nt=Math.floor(Fe.start/4),it=Math.ceil(Fe.count/4),ct=nt%E.width,W=Math.floor(nt/E.width),Ue=it,ye=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ct,W,Ue,ye,$,te,E.data)}L.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ve),i.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function Ne(L,E,$){let te=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=r.TEXTURE_3D);const ge=Z(L,E),De=E.source;i.bindTexture(te,L.__webglTexture,r.TEXTURE0+$);const Ie=s.get(De);if(De.version!==Ie.__version||ge===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Pt.getPrimaries(Pt.workingColorSpace),Oe=E.colorSpace===Ss?null:Pt.getPrimaries(E.colorSpace),He=E.colorSpace===Ss||ye===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=y(E.image,!1,l.maxTextureSize);xe=Ft(E,xe);const Le=c.convert(E.format,E.colorSpace),We=c.convert(E.type);let ze=N(E.internalFormat,Le,We,E.normalized,E.colorSpace,E.isVideoTexture);Ee(te,E);let Fe;const nt=E.mipmaps,it=E.isVideoTexture!==!0,ct=Ie.__version===void 0||ge===!0,W=De.dataReady,Ue=U(E,xe);if(E.isDepthTexture)ze=F(E.format===Ks,E.type),ct&&(it?i.texStorage2D(r.TEXTURE_2D,1,ze,xe.width,xe.height):i.texImage2D(r.TEXTURE_2D,0,ze,xe.width,xe.height,0,Le,We,null));else if(E.isDataTexture)if(nt.length>0){it&&ct&&i.texStorage2D(r.TEXTURE_2D,Ue,ze,nt[0].width,nt[0].height);for(let ye=0,Oe=nt.length;ye<Oe;ye++)Fe=nt[ye],it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Le,We,Fe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Fe.width,Fe.height,0,Le,We,Fe.data);E.generateMipmaps=!1}else it?(ct&&i.texStorage2D(r.TEXTURE_2D,Ue,ze,xe.width,xe.height),W&&pe(E,xe,Le,We)):i.texImage2D(r.TEXTURE_2D,0,ze,xe.width,xe.height,0,Le,We,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,ze,nt[0].width,nt[0].height,xe.depth);for(let ye=0,Oe=nt.length;ye<Oe;ye++)if(Fe=nt[ye],E.format!==Ji)if(Le!==null)if(it){if(W)if(E.layerUpdates.size>0){const He=Pv(Fe.width,Fe.height,E.format,E.type);for(const Re of E.layerUpdates){const Qe=Fe.data.subarray(Re*He/Fe.data.BYTES_PER_ELEMENT,(Re+1)*He/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,Re,Fe.width,Fe.height,1,Le,Qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Fe.width,Fe.height,xe.depth,Le,Fe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Fe.width,Fe.height,xe.depth,0,Fe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Fe.width,Fe.height,xe.depth,Le,We,Fe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,ze,Fe.width,Fe.height,xe.depth,0,Le,We,Fe.data)}else{it&&ct&&i.texStorage2D(r.TEXTURE_2D,Ue,ze,nt[0].width,nt[0].height);for(let ye=0,Oe=nt.length;ye<Oe;ye++)Fe=nt[ye],E.format!==Ji?Le!==null?it?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Le,Fe.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,ze,Fe.width,Fe.height,0,Fe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Fe.width,Fe.height,Le,We,Fe.data):i.texImage2D(r.TEXTURE_2D,ye,ze,Fe.width,Fe.height,0,Le,We,Fe.data)}else if(E.isDataArrayTexture)if(it){if(ct&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ue,ze,xe.width,xe.height,xe.depth),W)if(E.layerUpdates.size>0){const ye=Pv(xe.width,xe.height,E.format,E.type);for(const Oe of E.layerUpdates){const He=xe.data.subarray(Oe*ye/xe.data.BYTES_PER_ELEMENT,(Oe+1)*ye/xe.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Oe,xe.width,xe.height,1,Le,We,He)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Le,We,xe.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,xe.width,xe.height,xe.depth,0,Le,We,xe.data);else if(E.isData3DTexture)it?(ct&&i.texStorage3D(r.TEXTURE_3D,Ue,ze,xe.width,xe.height,xe.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Le,We,xe.data)):i.texImage3D(r.TEXTURE_3D,0,ze,xe.width,xe.height,xe.depth,0,Le,We,xe.data);else if(E.isFramebufferTexture){if(ct)if(it)i.texStorage2D(r.TEXTURE_2D,Ue,ze,xe.width,xe.height);else{let ye=xe.width,Oe=xe.height;for(let He=0;He<Ue;He++)i.texImage2D(r.TEXTURE_2D,He,ze,ye,Oe,0,Le,We,null),ye>>=1,Oe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ye=r.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),_.add(E),ye.onpaint=Oe=>{const He=Oe.changedElements;for(const Re of _)He.includes(Re.image)&&(Re.needsUpdate=!0)},ye.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const He=r.RGBA,Re=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,He,Re,Qe,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(nt.length>0){if(it&&ct){const ye=At(nt[0]);i.texStorage2D(r.TEXTURE_2D,Ue,ze,ye.width,ye.height)}for(let ye=0,Oe=nt.length;ye<Oe;ye++)Fe=nt[ye],it?W&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Le,We,Fe):i.texImage2D(r.TEXTURE_2D,ye,ze,Le,We,Fe);E.generateMipmaps=!1}else if(it){if(ct){const ye=At(xe);i.texStorage2D(r.TEXTURE_2D,Ue,ze,ye.width,ye.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,We,xe)}else i.texImage2D(r.TEXTURE_2D,0,ze,Le,We,xe);x(E)&&I(te),Ie.__version=De.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ke(L,E,$){if(E.image.length!==6)return;const te=Z(L,E),ge=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+$);const De=s.get(ge);if(ge.version!==De.__version||te===!0){i.activeTexture(r.TEXTURE0+$);const Ie=Pt.getPrimaries(Pt.workingColorSpace),ve=E.colorSpace===Ss?null:Pt.getPrimaries(E.colorSpace),xe=E.colorSpace===Ss||Ie===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let Re=0;Re<6;Re++)!Le&&!We?ze[Re]=y(E.image[Re],!0,l.maxCubemapSize):ze[Re]=We?E.image[Re].image:E.image[Re],ze[Re]=Ft(E,ze[Re]);const Fe=ze[0],nt=c.convert(E.format,E.colorSpace),it=c.convert(E.type),ct=N(E.internalFormat,nt,it,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Ue=De.__version===void 0||te===!0,ye=ge.dataReady;let Oe=U(E,Fe);Ee(r.TEXTURE_CUBE_MAP,E);let He;if(Le){W&&Ue&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ct,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){He=ze[Re].mipmaps;for(let Qe=0;Qe<He.length;Qe++){const Ye=He[Qe];E.format!==Ji?nt!==null?W?ye&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,0,0,Ye.width,Ye.height,nt,Ye.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,ct,Ye.width,Ye.height,0,Ye.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,0,0,Ye.width,Ye.height,nt,it,Ye.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe,ct,Ye.width,Ye.height,0,nt,it,Ye.data)}}}else{if(He=E.mipmaps,W&&Ue){He.length>0&&Oe++;const Re=At(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ct,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(We){W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ze[Re].width,ze[Re].height,nt,it,ze[Re].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,ze[Re].width,ze[Re].height,0,nt,it,ze[Re].data);for(let Qe=0;Qe<He.length;Qe++){const sn=He[Qe].image[Re].image;W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,0,0,sn.width,sn.height,nt,it,sn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,ct,sn.width,sn.height,0,nt,it,sn.data)}}else{W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,nt,it,ze[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,nt,it,ze[Re]);for(let Qe=0;Qe<He.length;Qe++){const Ye=He[Qe];W?ye&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,0,0,nt,it,Ye.image[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Qe+1,ct,nt,it,Ye.image[Re])}}}x(E)&&I(r.TEXTURE_CUBE_MAP),De.__version=ge.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Pe(L,E,$,te,ge,De){const Ie=c.convert($.format,$.colorSpace),ve=c.convert($.type),xe=N($.internalFormat,Ie,ve,$.normalized,$.colorSpace),Le=s.get(E),We=s.get($);if(We.__renderTarget=E,!Le.__hasExternalTextures){const ze=Math.max(1,E.width>>De),Fe=Math.max(1,E.height>>De);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?i.texImage3D(ge,De,xe,ze,Fe,E.depth,0,Ie,ve,null):i.texImage2D(ge,De,xe,ze,Fe,0,Ie,ve,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),Wt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ge,We.__webglTexture,0,Zt(E)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ge,We.__webglTexture,De),i.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const te=E.depthTexture,ge=te&&te.isDepthTexture?te.type:null,De=F(E.stencilBuffer,ge),Ie=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),De,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),De,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,De,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,L)}else{const te=E.textures;for(let ge=0;ge<te.length;ge++){const De=te[ge],Ie=c.convert(De.format,De.colorSpace),ve=c.convert(De.type),xe=N(De.internalFormat,Ie,ve,De.normalized,De.colorSpace);Wt(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(E),xe,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(E),xe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,xe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(L,E,$){const te=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),ge.__webglTexture===void 0){ge.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,E.depthTexture);const Le=c.convert(E.depthTexture.format),We=c.convert(E.depthTexture.type);let ze;E.depthTexture.format===Xa?ze=r.DEPTH_COMPONENT24:E.depthTexture.format===Ks&&(ze=r.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,ze,E.width,E.height,0,Le,We,null)}}else ie(E.depthTexture,0);const De=ge.__webglTexture,Ie=Zt(E),ve=te?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,xe=E.depthTexture.format===Ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Xa)Wt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ve,De,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ve,De,0);else if(E.depthTexture.format===Ks)Wt(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,ve,De,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,xe,ve,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qe(L){const E=s.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ge)};te.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=te}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let te=0;te<6;te++)$e(E.__webglFramebuffer[te],L,te);else{const te=L.texture.mipmaps;te&&te.length>0?$e(E.__webglFramebuffer[0],L,0):$e(E.__webglFramebuffer,L,0)}else if($){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=r.createRenderbuffer(),st(E.__webglDepthbuffer[te],L,!1);else{const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,De)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),st(E.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,De),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,De)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(L,E,$){const te=s.get(L);E!==void 0&&Pe(te.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&qe(L)}function ot(L){const E=L.texture,$=s.get(L),te=s.get(E);L.addEventListener("dispose",M);const ge=L.textures,De=L.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=E.version,d.memory.textures++),De){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let xe=0;xe<E.mipmaps.length;xe++)$.__webglFramebuffer[ve][xe]=r.createFramebuffer()}else $.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)$.__webglFramebuffer[ve]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let ve=0,xe=ge.length;ve<xe;ve++){const Le=s.get(ge[ve]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),d.memory.textures++)}if(L.samples>0&&Wt(L)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<ge.length;ve++){const xe=ge[ve];$.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);const Le=c.convert(xe.format,xe.colorSpace),We=c.convert(xe.type),ze=N(xe.internalFormat,Le,We,xe.normalized,xe.colorSpace,L.isXRRenderTarget===!0),Fe=Zt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,ze,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),st($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(De){i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Pe($.__webglFramebuffer[ve][xe],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else Pe($.__webglFramebuffer[ve],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(E)&&I(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let ve=0,xe=ge.length;ve<xe;ve++){const Le=ge[ve],We=s.get(Le);let ze=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ze=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,We.__webglTexture),Ee(ze,Le),Pe($.__webglFramebuffer,L,Le,r.COLOR_ATTACHMENT0+ve,ze,0),x(Le)&&I(ze)}i.unbindTexture()}else{let ve=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ve,te.__webglTexture),Ee(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Pe($.__webglFramebuffer[xe],L,E,r.COLOR_ATTACHMENT0,ve,xe);else Pe($.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,ve,0);x(E)&&I(ve),i.unbindTexture()}L.depthBuffer&&qe(L)}function Mt(L){const E=L.textures;for(let $=0,te=E.length;$<te;$++){const ge=E[$];if(x(ge)){const De=G(L),Ie=s.get(ge).__webglTexture;i.bindTexture(De,Ie),I(De),i.unbindTexture()}}}const It=[],Bt=[];function Ut(L){if(L.samples>0){if(Wt(L)===!1){const E=L.textures,$=L.width,te=L.height;let ge=r.COLOR_BUFFER_BIT;const De=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=s.get(L),ve=E.length>1;if(ve)for(let Le=0;Le<E.length;Le++)i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const xe=L.texture.mipmaps;xe&&xe.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const We=s.get(E[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,$,te,0,0,$,te,ge,r.NEAREST),m===!0&&(It.length=0,Bt.length=0,It.push(r.COLOR_ATTACHMENT0+Le),L.depthBuffer&&L.resolveDepthBuffer===!1&&(It.push(De),Bt.push(De),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<E.length;Le++){i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[Le]);const We=s.get(E[Le]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,We,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Zt(L){return Math.min(l.maxSamples,L.samples)}function Wt(L){const E=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(L){const E=d.render.frame;S.get(L)!==E&&(S.set(L,E),L.update())}function Ft(L,E){const $=L.colorSpace,te=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==tu&&$!==Ss&&(Pt.getTransfer($)===Jt?(te!==Ji||ge!==Ai)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",$)),E}function At(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=he,this.getTextureUnits=ae,this.setTextureUnits=J,this.setTexture2D=ie,this.setTexture2DArray=_e,this.setTexture3D=B,this.setTextureCube=b,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function U2(r,e){function i(s,l=Ss){let c;const d=Pt.getTransfer(l);if(s===Ai)return r.UNSIGNED_BYTE;if(s===qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===jh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===yx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Mx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===_x)return r.BYTE;if(s===Sx)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===ma)return r.UNSIGNED_INT;if(s===fa)return r.FLOAT;if(s===ka)return r.HALF_FLOAT;if(s===bx)return r.ALPHA;if(s===Ex)return r.RGB;if(s===Ji)return r.RGBA;if(s===Xa)return r.DEPTH_COMPONENT;if(s===Ks)return r.DEPTH_STENCIL;if(s===Tx)return r.RED;if(s===Yh)return r.RED_INTEGER;if(s===Js)return r.RG;if(s===Zh)return r.RG_INTEGER;if(s===Kh)return r.RGBA_INTEGER;if(s===Yc||s===Zc||s===Kc||s===Qc)if(d===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rh||s===oh||s===lh||s===ch)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===$c||s===mh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===uh||s===fh)return d===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===dh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===hh)return c.COMPRESSED_R11_EAC;if(s===ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===$c)return c.COMPRESSED_RG11_EAC;if(s===mh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===gh||s===vh||s===xh||s===_h||s===Sh||s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===wh||s===Rh||s===Ch)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_h)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Th)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ch)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nh||s===Dh||s===Uh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Nh)return d===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lh||s===Oh||s===eu||s===Ph)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Lh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===eu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ph)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const L2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Ix(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ga({vertexShader:L2,fragmentShader:O2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gt(new Ms(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I2 extends $s{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,S=null,_=null,g=null,T=null,A=null;const D=typeof XRWebGLBinding<"u",y=new P2,x={},I=i.getContextAttributes();let G=null,N=null;const F=[],U=[],P=new Dt;let M=null;const O=new hi;O.viewport=new dn;const Y=new hi;Y.viewport=new dn;const H=[O,Y],j=new qM;let he=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=F[Z];return oe===void 0&&(oe=new Td,F[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=F[Z];return oe===void 0&&(oe=new Td,F[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=F[Z];return oe===void 0&&(oe=new Td,F[Z]=oe),oe.getHandSpace()};function J(Z){const oe=U.indexOf(Z.inputSource);if(oe===-1)return;const pe=F[oe];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,h||d),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",X);for(let Z=0;Z<F.length;Z++){const oe=U[Z];oe!==null&&(U[Z]=null,F[Z].disconnect(oe))}he=null,ae=null,y.reset();for(const Z in x)delete x[Z];e.setRenderTarget(G),T=null,g=null,_=null,l=null,N=null,Ee.stop(),s.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:T},this.getBinding=function(){return _===null&&D&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",z),l.addEventListener("inputsourceschange",X),I.xrCompatible!==!0&&await i.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,ke=null;I.depth&&(ke=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pe=I.stencil?Ks:Xa,Ne=I.stencil?ul:ma);const Pe={colorFormat:i.RGBA8,depthFormat:ke,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Pe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new pa(g.textureWidth,g.textureHeight,{format:Ji,type:Ai,depthTexture:new eo(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};T=new XRWebGLLayer(l,i,pe),l.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),N=new pa(T.framebufferWidth,T.framebufferHeight,{format:Ji,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ee.setContext(l),Ee.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(Z){for(let oe=0;oe<Z.removed.length;oe++){const pe=Z.removed[oe],Ne=U.indexOf(pe);Ne>=0&&(U[Ne]=null,F[Ne].disconnect(pe))}for(let oe=0;oe<Z.added.length;oe++){const pe=Z.added[oe];let Ne=U.indexOf(pe);if(Ne===-1){for(let Pe=0;Pe<F.length;Pe++)if(Pe>=U.length){U.push(pe),Ne=Pe;break}else if(U[Pe]===null){U[Pe]=pe,Ne=Pe;break}if(Ne===-1)break}const ke=F[Ne];ke&&ke.connect(pe)}}const ie=new ne,_e=new ne;function B(Z,oe,pe){ie.setFromMatrixPosition(oe.matrixWorld),_e.setFromMatrixPosition(pe.matrixWorld);const Ne=ie.distanceTo(_e),ke=oe.projectionMatrix.elements,Pe=pe.projectionMatrix.elements,st=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),qe=(ke[9]+1)/ke[5],rt=(ke[9]-1)/ke[5],ot=(ke[8]-1)/ke[0],Mt=(Pe[8]+1)/Pe[0],It=st*ot,Bt=st*Mt,Ut=Ne/(-ot+Mt),Zt=Ut*-ot;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Zt),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ke[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Wt=st+Ut,Q=$e+Ut,Ft=It-Zt,At=Bt+(Ne-Zt),L=qe*$e/Q*Wt,E=rt*$e/Q*Wt;Z.projectionMatrix.makePerspective(Ft,At,L,E,Wt,Q),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function b(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let oe=Z.near,pe=Z.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),j.near=Y.near=O.near=oe,j.far=Y.far=O.far=pe,(he!==j.near||ae!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),he=j.near,ae=j.far),j.layers.mask=Z.layers.mask|6,O.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Ne=Z.parent,ke=j.cameras;b(j,Ne);for(let Pe=0;Pe<ke.length;Pe++)b(ke[Pe],Ne);ke.length===2?B(j,O,Y):j.projectionMatrix.copy(O.projectionMatrix),V(Z,j,Ne)};function V(Z,oe,pe){pe===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=$r*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&T===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(Z){return x[Z]};let fe=null;function Se(Z,oe){if(S=oe.getViewerPose(h||d),A=oe,S!==null){const pe=S.views;T!==null&&(e.setRenderTargetFramebuffer(N,T.framebuffer),e.setRenderTarget(N));let Ne=!1;pe.length!==j.cameras.length&&(j.cameras.length=0,Ne=!0);for(let $e=0;$e<pe.length;$e++){const qe=pe[$e];let rt=null;if(T!==null)rt=T.getViewport(qe);else{const Mt=_.getViewSubImage(g,qe);rt=Mt.viewport,$e===0&&(e.setRenderTargetTextures(N,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(N))}let ot=H[$e];ot===void 0&&(ot=new hi,ot.layers.enable($e),ot.viewport=new dn,H[$e]=ot),ot.matrix.fromArray(qe.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(qe.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(rt.x,rt.y,rt.width,rt.height),$e===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ne===!0&&j.cameras.push(ot)}const ke=l.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){_=s.getBinding();const $e=_.getDepthInformation(pe[0]);$e&&$e.isValid&&$e.texture&&y.init($e,l.renderState)}if(ke&&ke.includes("camera-access")&&D){e.state.unbindTexture(),_=s.getBinding();for(let $e=0;$e<pe.length;$e++){const qe=pe[$e].camera;if(qe){let rt=x[qe];rt||(rt=new Ix,x[qe]=rt);const ot=_.getCameraImage(qe);rt.sourceTexture=ot}}}}for(let pe=0;pe<F.length;pe++){const Ne=U[pe],ke=F[pe];Ne!==null&&ke!==void 0&&ke.update(Ne,oe,h||d)}fe&&fe(Z,oe),oe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:oe}),A=null}const Ee=new Bx;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(Z){fe=Z},this.dispose=function(){}}}const F2=new hn,qx=new mt;qx.set(-1,0,0,0,1,0,0,0,1);function z2(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Fx(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,I,G,N){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&T(y,x,N)):x.isMeshMatcapMaterial?(c(y,x),A(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),D(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,I,G):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===pi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===pi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),G=I.envMap,N=I.envMapRotation;G&&(y.envMap.value=G,y.envMapRotation.value.setFromMatrix4(F2.makeRotationFromEuler(N)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,I,G){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=G*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function T(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===pi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function D(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function B2(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,F){const U=F.program;s.uniformBlockBinding(N,U)}function h(N,F){let U=l[N.id];U===void 0&&(y(N),U=S(N),l[N.id]=U,N.addEventListener("dispose",I));const P=F.program;s.updateUBOMapping(N,P);const M=e.render.frame;c[N.id]!==M&&(g(N),c[N.id]=M)}function S(N){const F=_();N.__bindingPointIndex=F;const U=r.createBuffer(),P=N.__size,M=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,P,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,F,U),U}function _(){for(let N=0;N<p;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const F=l[N.id],U=N.uniforms,P=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,F);for(let M=0,O=U.length;M<O;M++){const Y=U[M];if(Array.isArray(Y))for(let H=0,j=Y.length;H<j;H++)T(Y[H],M,H,P);else T(Y,M,0,P)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function T(N,F,U,P){if(D(N,F,U,P)===!0){const M=N.__offset,O=N.value;if(Array.isArray(O)){let Y=0;for(let H=0;H<O.length;H++){const j=O[H],he=x(j);A(j,N.__data,Y),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(Y+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(O,N.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,M,N.__data)}}function A(N,F,U){typeof N=="number"||typeof N=="boolean"?F[0]=N:N.isMatrix3?(F[0]=N.elements[0],F[1]=N.elements[1],F[2]=N.elements[2],F[3]=0,F[4]=N.elements[3],F[5]=N.elements[4],F[6]=N.elements[5],F[7]=0,F[8]=N.elements[6],F[9]=N.elements[7],F[10]=N.elements[8],F[11]=0):ArrayBuffer.isView(N)?F.set(new N.constructor(N.buffer,N.byteOffset,F.length)):N.toArray(F,U)}function D(N,F,U,P){const M=N.value,O=F+"_"+U;if(P[O]===void 0)return typeof M=="number"||typeof M=="boolean"?P[O]=M:ArrayBuffer.isView(M)?P[O]=M.slice():P[O]=M.clone(),!0;{const Y=P[O];if(typeof M=="number"||typeof M=="boolean"){if(Y!==M)return P[O]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(Y.equals(M)===!1)return Y.copy(M),!0}}return!1}function y(N){const F=N.uniforms;let U=0;const P=16;for(let O=0,Y=F.length;O<Y;O++){const H=Array.isArray(F[O])?F[O]:[F[O]];for(let j=0,he=H.length;j<he;j++){const ae=H[j],J=Array.isArray(ae.value)?ae.value:[ae.value];for(let z=0,X=J.length;z<X;z++){const ie=J[z],_e=x(ie),B=U%P,b=B%_e.boundary,V=B+b;U+=b,V!==0&&P-V<_e.storage&&(U+=P-V),ae.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=U,U+=_e.storage}}}const M=U%P;return M>0&&(U+=P-M),N.__size=U,N.__cache={},this}function x(N){const F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(F.boundary=16,F.storage=N.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",N),F}function I(N){const F=N.target;F.removeEventListener("dispose",I);const U=d.indexOf(F.__bindingPointIndex);d.splice(U,1),r.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function G(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:h,dispose:G}}const G2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let la=null;function H2(){return la===null&&(la=new AM(G2,16,16,Js,ka),la.name="DFG_LUT",la.minFilter=Zn,la.magFilter=Zn,la.wrapS=Ga,la.wrapT=Ga,la.generateMipmaps=!1,la.needsUpdate=!0),la}class V2{constructor(e={}){const{canvas:i=Vy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:T=Ai}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const D=T,y=new Set([Kh,Zh,Yh]),x=new Set([Ai,ma,cl,ul,qh,jh]),I=new Uint32Array(4),G=new Int32Array(4),N=new ne;let F=null,U=null;const P=[],M=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ha,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,j=null,he=null,ae=null,J=null;this._outputColorSpace=zi;let z=0,X=0,ie=null,_e=-1,B=null;const b=new dn,V=new dn;let fe=null;const Se=new Tt(0);let Ee=0,Z=i.width,oe=i.height,pe=1,Ne=null,ke=null;const Pe=new dn(0,0,Z,oe),st=new dn(0,0,Z,oe);let $e=!1;const qe=new np;let rt=!1,ot=!1;const Mt=new hn,It=new ne,Bt=new dn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Wt(){return ie===null?pe:1}let Q=s;function Ft(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",sn,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",Qn,!1),Q===null){const K="webgl2";if(Q=Ft(K,R),Q===null)throw Ft(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Vt("WebGLRenderer: "+R.message),R}let At,L,E,$,te,ge,De,Ie,ve,xe,Le,We,ze,Fe,nt,it,ct,W,Ue,ye,Oe,He,Re;function Qe(){At=new HE(Q),At.init(),Oe=new U2(Q,At),L=new LE(Q,At,e,Oe),E=new N2(Q,At),L.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),he=Q.createFramebuffer(),ae=Q.createFramebuffer(),J=Q.createFramebuffer(),$=new XE(Q),te=new g2,ge=new D2(Q,At,E,te,L,Oe,$),De=new GE(Y),Ie=new YM(Q),He=new DE(Q,Ie),ve=new VE(Q,Ie,$,He),xe=new qE(Q,ve,Ie,He,$),W=new WE(Q,L,ge),nt=new OE(te),Le=new m2(Y,De,At,L,He,nt),We=new z2(Y,te),ze=new x2,Fe=new E2(At),ct=new NE(Y,De,E,xe,A,m),it=new C2(Y,xe,L),Re=new B2(Q,$,L,E),Ue=new UE(Q,At,$),ye=new kE(Q,At,$),$.programs=Le.programs,Y.capabilities=L,Y.extensions=At,Y.properties=te,Y.renderLists=ze,Y.shadowMap=it,Y.state=E,Y.info=$}Qe(),D!==Ai&&(O=new YE(D,i.width,i.height,p,l,c));const Ye=new I2(Y,Q);this.xr=Ye,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const R=At.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=At.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(Z,oe,!1))},this.getSize=function(R){return R.set(Z,oe)},this.setSize=function(R,K,ue=!0){if(Ye.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,oe=K,i.width=Math.floor(R*pe),i.height=Math.floor(K*pe),ue===!0&&(i.style.width=R+"px",i.style.height=K+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Z*pe,oe*pe).floor()},this.setDrawingBufferSize=function(R,K,ue){Z=R,oe=K,pe=ue,i.width=Math.floor(R*ue),i.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(D===Ai){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(Pe)},this.setViewport=function(R,K,ue,se){R.isVector4?Pe.set(R.x,R.y,R.z,R.w):Pe.set(R,K,ue,se),E.viewport(b.copy(Pe).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(st)},this.setScissor=function(R,K,ue,se){R.isVector4?st.set(R.x,R.y,R.z,R.w):st.set(R,K,ue,se),E.scissor(V.copy(st).multiplyScalar(pe).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(R){E.setScissorTest($e=R)},this.setOpaqueSort=function(R){Ne=R},this.setTransparentSort=function(R){ke=R},this.getClearColor=function(R){return R.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ue=!0){let se=0;if(R){let re=!1;if(ie!==null){const Be=ie.texture.format;re=y.has(Be)}if(re){const Be=ie.texture.type,Ze=x.has(Be),be=ct.getClearColor(),Te=ct.getClearAlpha(),Ce=be.r,Ve=be.g,et=be.b;Ze?(I[0]=Ce,I[1]=Ve,I[2]=et,I[3]=Te,Q.clearBufferuiv(Q.COLOR,0,I)):(G[0]=Ce,G[1]=Ve,G[2]=et,G[3]=Te,Q.clearBufferiv(Q.COLOR,0,G))}else se|=Q.COLOR_BUFFER_BIT}K&&(se|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(se|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){i.removeEventListener("webglcontextlost",sn,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",Qn,!1),ct.dispose(),ze.dispose(),Fe.dispose(),te.dispose(),De.dispose(),xe.dispose(),He.dispose(),Re.dispose(),Le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",pn),Ye.removeEventListener("sessionend",dt),yn.stop()};function sn(R){R.preventDefault(),uv("WebGLRenderer: Context Lost."),H=!0}function qt(){uv("WebGLRenderer: Context Restored."),H=!1;const R=$.autoReset,K=it.enabled,ue=it.autoUpdate,se=it.needsUpdate,re=it.type;Qe(),$.autoReset=R,it.enabled=K,it.autoUpdate=ue,it.needsUpdate=se,it.type=re}function Qn(R){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wn(R){const K=R.target;K.removeEventListener("dispose",Wn),$i(K)}function $i(R){va(R),te.remove(R)}function va(R){const K=te.get(R).programs;K!==void 0&&(K.forEach(function(ue){Le.releaseProgram(ue)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,se,re,Be){K===null&&(K=Ut);const Ze=re.isMesh&&re.matrixWorld.determinantAffine()<0,be=na(R,K,ue,se,re);E.setMaterial(se,Ze);let Te=ue.index,Ce=1;if(se.wireframe===!0){if(Te=ve.getWireframeAttribute(ue),Te===void 0)return;Ce=2}const Ve=ue.drawRange,et=ue.attributes.position;let Ge=Ve.start*Ce,ut=(Ve.start+Ve.count)*Ce;Be!==null&&(Ge=Math.max(Ge,Be.start*Ce),ut=Math.min(ut,(Be.start+Be.count)*Ce)),Te!==null?(Ge=Math.max(Ge,0),ut=Math.min(ut,Te.count)):et!=null&&(Ge=Math.max(Ge,0),ut=Math.min(ut,et.count));const Lt=ut-Ge;if(Lt<0||Lt===1/0)return;He.setup(re,se,be,ue,Te);let Ht,zt=Ue;if(Te!==null&&(Ht=Ie.get(Te),zt=ye,zt.setIndex(Ht)),re.isMesh)se.wireframe===!0?(E.setLineWidth(se.wireframeLinewidth*Wt()),zt.setMode(Q.LINES)):zt.setMode(Q.TRIANGLES);else if(re.isLine){let St=se.linewidth;St===void 0&&(St=1),E.setLineWidth(St*Wt()),re.isLineSegments?zt.setMode(Q.LINES):re.isLineLoop?zt.setMode(Q.LINE_LOOP):zt.setMode(Q.LINE_STRIP)}else re.isPoints?zt.setMode(Q.POINTS):re.isSprite&&zt.setMode(Q.TRIANGLES);if(re.isBatchedMesh)if(At.get("WEBGL_multi_draw"))zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const St=re._multiDrawStarts,je=re._multiDrawCounts,ht=re._multiDrawCount,Ke=Te?Ie.get(Te).bytesPerElement:1,$t=te.get(se).currentProgram.getUniforms();for(let Jn=0;Jn<ht;Jn++)$t.setValue(Q,"_gl_DrawID",Jn),zt.render(St[Jn]/Ke,je[Jn])}else if(re.isInstancedMesh)zt.renderInstances(Ge,Lt,re.count);else if(ue.isInstancedBufferGeometry){const St=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,St);zt.renderInstances(Ge,Lt,je)}else zt.render(Ge,Lt)};function ea(R,K,ue){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=pi,R.needsUpdate=!0,xn(R,K,ue),R.side=Es,R.needsUpdate=!0,xn(R,K,ue),R.side=ua):xn(R,K,ue)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),U=Fe.get(ue),U.init(K),M.push(U),ue.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),R!==ue&&R.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights();const se=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Be=re.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){const be=Be[Ze];ea(be,ue,re),se.add(be)}else ea(Be,ue,re),se.add(Be)}),U=M.pop(),se},this.compileAsync=function(R,K,ue=null){const se=this.compile(R,K,ue);return new Promise(re=>{function Be(){if(se.forEach(function(Ze){te.get(Ze).currentProgram.isReady()&&se.delete(Ze)}),se.size===0){re(R);return}setTimeout(Be,10)}At.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let xa=null;function wi(R){xa&&xa(R)}function pn(){yn.stop()}function dt(){yn.start()}const yn=new Bx;yn.setAnimationLoop(wi),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){xa=R,Ye.setAnimationLoop(R),R===null?yn.stop():yn.start()},Ye.addEventListener("sessionstart",pn),Ye.addEventListener("sessionend",dt),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;j!==null&&j.renderStart(R,K);const ue=Ye.enabled===!0&&Ye.isPresenting===!0,se=O!==null&&(ie===null||ue)&&O.begin(Y,ie);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(K),K=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(Y,R,K,ie),U=Fe.get(R,M.length),U.init(K),U.state.textureUnits=ge.getTextureUnits(),M.push(U),Mt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),qe.setFromProjectionMatrix(Mt,da,K.reversedDepth),ot=this.localClippingEnabled,rt=nt.init(this.clippingPlanes,ot),F=ze.get(R,P.length),F.init(),P.push(F),Ye.enabled===!0&&Ye.isPresenting===!0){const Ze=Y.xr.getDepthSensingMesh();Ze!==null&&Gt(Ze,K,-1/0,Y.sortObjects)}Gt(R,K,0,Y.sortObjects),F.finish(),Y.sortObjects===!0&&F.sort(Ne,ke,K.reversedDepth),Zt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Zt&&ct.addToRenderList(F,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&nt.beginShadows();const re=U.state.shadowsArray;if(it.render(re,R,K),rt===!0&&nt.endShadows(),(se&&O.hasRenderPass())===!1){const Ze=F.opaque,be=F.transmissive;if(U.setupLights(),K.isArrayCamera){const Te=K.cameras;if(be.length>0)for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const et=Te[Ce];ta(Ze,be,R,et)}Zt&&ct.render(R);for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const et=Te[Ce];Gi(F,R,et,et.viewport)}}else be.length>0&&ta(Ze,be,R,K),Zt&&ct.render(R),Gi(F,R,K)}ie!==null&&X===0&&(ge.updateMultisampleRenderTarget(ie),ge.updateRenderTargetMipmap(ie)),se&&O.end(Y),R.isScene===!0&&R.onAfterRender(Y,R,K),He.resetDefaultState(),_e=-1,B=null,M.pop(),M.length>0?(U=M[M.length-1],ge.setTextureUnits(U.state.textureUnits),rt===!0&&nt.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?F=P[P.length-1]:F=null,j!==null&&j.renderEnd()};function Gt(R,K,ue,se){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)U.pushLightProbeGrid(R);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||qe.intersectsSprite(R)){se&&Bt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Mt);const Ze=xe.update(R),be=R.material;be.visible&&F.push(R,Ze,be,ue,Bt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||qe.intersectsObject(R))){const Ze=xe.update(R),be=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Bt.copy(R.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),Bt.copy(Ze.boundingSphere.center)),Bt.applyMatrix4(R.matrixWorld).applyMatrix4(Mt)),Array.isArray(be)){const Te=Ze.groups;for(let Ce=0,Ve=Te.length;Ce<Ve;Ce++){const et=Te[Ce],Ge=be[et.materialIndex];Ge&&Ge.visible&&F.push(R,Ze,Ge,ue,Bt.z,et)}}else be.visible&&F.push(R,Ze,be,ue,Bt.z,null)}}const Be=R.children;for(let Ze=0,be=Be.length;Ze<be;Ze++)Gt(Be[Ze],K,ue,se)}function Gi(R,K,ue,se){const{opaque:re,transmissive:Be,transparent:Ze}=R;U.setupLightsView(ue),rt===!0&&nt.setGlobalState(Y.clippingPlanes,ue),se&&E.viewport(b.copy(se)),re.length>0&&si(re,K,ue),Be.length>0&&si(Be,K,ue),Ze.length>0&&si(Ze,K,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ta(R,K,ue,se){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const Ge=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new pa(1,1,{generateMipmaps:!0,type:Ge?ka:Ai,minFilter:Zs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Be=U.state.transmissionRenderTarget[se.id],Ze=se.viewport||b;Be.setSize(Ze.z*Y.transmissionResolutionScale,Ze.w*Y.transmissionResolutionScale);const be=Y.getRenderTarget(),Te=Y.getActiveCubeFace(),Ce=Y.getActiveMipmapLevel();Y.setRenderTarget(Be),Y.getClearColor(Se),Ee=Y.getClearAlpha(),Ee<1&&Y.setClearColor(16777215,.5),Y.clear(),Zt&&ct.render(ue);const Ve=Y.toneMapping;Y.toneMapping=ha;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),rt===!0&&nt.setGlobalState(Y.clippingPlanes,se),si(R,ue,se),ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ut=0,Lt=K.length;ut<Lt;ut++){const Ht=K[ut],{object:zt,geometry:St,material:je,group:ht}=Ht;if(je.side===ua&&zt.layers.test(se.layers)){const Ke=je.side;je.side=pi,je.needsUpdate=!0,zn(zt,ue,se,St,je,ht),je.side=Ke,je.needsUpdate=!0,Ge=!0}}Ge===!0&&(ge.updateMultisampleRenderTarget(Be),ge.updateRenderTargetMipmap(Be))}Y.setRenderTarget(be,Te,Ce),Y.setClearColor(Se,Ee),et!==void 0&&(se.viewport=et),Y.toneMapping=Ve}function si(R,K,ue){const se=K.isScene===!0?K.overrideMaterial:null;for(let re=0,Be=R.length;re<Be;re++){const Ze=R[re],{object:be,geometry:Te,group:Ce}=Ze;let Ve=Ze.material;Ve.allowOverride===!0&&se!==null&&(Ve=se),be.layers.test(ue.layers)&&zn(be,K,ue,Te,Ve,Ce)}}function zn(R,K,ue,se,re,Be){R.onBeforeRender(Y,K,ue,se,re,Be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(Y,K,ue,se,R,Be),re.transparent===!0&&re.side===ua&&re.forceSinglePass===!1?(re.side=pi,re.needsUpdate=!0,Y.renderBufferDirect(ue,K,se,re,R,Be),re.side=Es,re.needsUpdate=!0,Y.renderBufferDirect(ue,K,se,re,R,Be),re.side=ua):Y.renderBufferDirect(ue,K,se,re,R,Be),R.onAfterRender(Y,K,ue,se,re,Be)}function xn(R,K,ue){K.isScene!==!0&&(K=Ut);const se=te.get(R),re=U.state.lights,Be=U.state.shadowsArray,Ze=re.state.version,be=Le.getParameters(R,re.state,Be,K,ue,U.state.lightProbeGridArray),Te=Le.getProgramCacheKey(be);let Ce=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;const Ve=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=De.get(R.envMap||se.environment,Ve),se.envMapRotation=se.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Ce===void 0&&(R.addEventListener("dispose",Wn),Ce=new Map,se.programs=Ce);let et=Ce.get(Te);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===Ze)return Hi(R,be),et}else be.uniforms=Le.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,ue,be),R.onBeforeCompile(be,Y),et=Le.acquireProgram(be,Te),Ce.set(Te,et),se.uniforms=be.uniforms;const Ge=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=nt.uniform),Hi(R,be),se.needsLights=er(R),se.lightsStateVersion=Ze,se.needsLights&&(Ge.ambientLightColor.value=re.state.ambient,Ge.lightProbe.value=re.state.probe,Ge.directionalLights.value=re.state.directional,Ge.directionalLightShadows.value=re.state.directionalShadow,Ge.spotLights.value=re.state.spot,Ge.spotLightShadows.value=re.state.spotShadow,Ge.rectAreaLights.value=re.state.rectArea,Ge.ltc_1.value=re.state.rectAreaLTC1,Ge.ltc_2.value=re.state.rectAreaLTC2,Ge.pointLights.value=re.state.point,Ge.pointLightShadows.value=re.state.pointShadow,Ge.hemisphereLights.value=re.state.hemi,Ge.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ge.spotLightMatrix.value=re.state.spotLightMatrix,Ge.spotLightMap.value=re.state.spotLightMap,Ge.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=U.state.lightProbeGridArray.length>0,se.currentProgram=et,se.uniformsList=null,et}function Ri(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Jc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Hi(R,K){const ue=te.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Vi(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(K.matrixWorld);for(let ue=0,se=R.length;ue<se;ue++){const re=R[ue];if(re.texture!==null&&re.boundingBox.containsPoint(N))return re}return null}function na(R,K,ue,se,re){K.isScene!==!0&&(K=Ut),ge.resetTextureUnits();const Be=K.fog,Ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,be=ie===null?Y.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Pt.workingColorSpace,Te=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ce=De.get(se.envMap||Ze,Te),Ve=se.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,et=!!ue.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!ue.morphAttributes.position,ut=!!ue.morphAttributes.normal,Lt=!!ue.morphAttributes.color;let Ht=ha;se.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ht=Y.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,St=zt!==void 0?zt.length:0,je=te.get(se),ht=U.state.lights;if(rt===!0&&(ot===!0||R!==B)){const wt=R===B&&se.id===_e;nt.setState(se,R,wt)}let Ke=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==ht.state.version||je.outputColorSpace!==be||re.isBatchedMesh&&je.batching===!1||!re.isBatchedMesh&&je.batching===!0||re.isBatchedMesh&&je.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&je.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&je.instancingMorph===!1&&re.morphTexture!==null||je.envMap!==Ce||se.fog===!0&&je.fog!==Be||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==nt.numPlanes||je.numIntersection!==nt.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==et||je.morphTargets!==Ge||je.morphNormals!==ut||je.morphColors!==Lt||je.toneMapping!==Ht||je.morphTargetsCount!==St||!!je.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,je.__version=se.version);let $t=je.currentProgram;Ke===!0&&($t=xn(se,K,re),j&&se.isNodeMaterial&&j.onUpdateProgram(se,$t,je));let Jn=!1,mi=!1,$n=!1;const jt=$t.getUniforms(),rn=je.uniforms;if(E.useProgram($t.program)&&(Jn=!0,mi=!0,$n=!0),se.id!==_e&&(_e=se.id,mi=!0),je.needsLights){const wt=Vi(U.state.lightProbeGridArray,re);je.lightProbeGrid!==wt&&(je.lightProbeGrid=wt,mi=!0)}if(Jn||B!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),jt.setValue(Q,"projectionMatrix",R.projectionMatrix),jt.setValue(Q,"viewMatrix",R.matrixWorldInverse);const ei=jt.map.cameraPosition;ei!==void 0&&ei.setValue(Q,It.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&jt.setValue(Q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&jt.setValue(Q,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,mi=!0,$n=!0)}if(je.needsLights&&(ht.state.directionalShadowMap.length>0&&jt.setValue(Q,"directionalShadowMap",ht.state.directionalShadowMap,ge),ht.state.spotShadowMap.length>0&&jt.setValue(Q,"spotShadowMap",ht.state.spotShadowMap,ge),ht.state.pointShadowMap.length>0&&jt.setValue(Q,"pointShadowMap",ht.state.pointShadowMap,ge)),re.isSkinnedMesh){jt.setOptional(Q,re,"bindMatrix"),jt.setOptional(Q,re,"bindMatrixInverse");const wt=re.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),jt.setValue(Q,"boneTexture",wt.boneTexture,ge))}re.isBatchedMesh&&(jt.setOptional(Q,re,"batchingTexture"),jt.setValue(Q,"batchingTexture",re._matricesTexture,ge),jt.setOptional(Q,re,"batchingIdTexture"),jt.setValue(Q,"batchingIdTexture",re._indirectTexture,ge),jt.setOptional(Q,re,"batchingColorTexture"),re._colorsTexture!==null&&jt.setValue(Q,"batchingColorTexture",re._colorsTexture,ge));const ri=ue.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&W.update(re,ue,$t),(mi||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,jt.setValue(Q,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(rn.envMapIntensity.value=K.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=H2()),mi){if(jt.setValue(Q,"toneMappingExposure",Y.toneMappingExposure),je.needsLights&&mn(rn,$n),Be&&se.fog===!0&&We.refreshFogUniforms(rn,Be),We.refreshMaterialUniforms(rn,se,pe,oe,U.state.transmissionRenderTarget[R.id]),je.needsLights&&je.lightProbeGrid){const wt=je.lightProbeGrid;rn.probesSH.value=wt.texture,rn.probesMin.value.copy(wt.boundingBox.min),rn.probesMax.value.copy(wt.boundingBox.max),rn.probesResolution.value.copy(wt.resolution)}Jc.upload(Q,Ri(je),rn,ge)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Jc.upload(Q,Ri(je),rn,ge),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&jt.setValue(Q,"center",re.center),jt.setValue(Q,"modelViewMatrix",re.modelViewMatrix),jt.setValue(Q,"normalMatrix",re.normalMatrix),jt.setValue(Q,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const wt=se.uniformsGroups;for(let ei=0,ki=wt.length;ei<ki;ei++){const Mn=wt[ei];Re.update(Mn,$t),Re.bind(Mn,$t)}}return $t}function mn(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function er(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(R,K,ue){const se=te.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(R.texture).__webglTexture=K,te.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ue,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ue=te.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ue=0){ie=R,z=K,X=ue;let se=null,re=!1,Be=!1;if(R){const be=te.get(R);if(be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,be.__webglFramebuffer),b.copy(R.viewport),V.copy(R.scissor),fe=R.scissorTest,E.viewport(b),E.scissor(V),E.setScissorTest(fe),_e=-1;return}else if(be.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(be.__hasExternalTextures)ge.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(be.__boundDepthTexture!==Ve){if(Ve!==null&&te.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}const Te=R.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Be=!0);const Ce=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ce[K])?se=Ce[K][ue]:se=Ce[K],re=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?se=te.get(R).__webglMultisampledFramebuffer:Array.isArray(Ce)?se=Ce[ue]:se=Ce,b.copy(R.viewport),V.copy(R.scissor),fe=R.scissorTest}else b.copy(Pe).multiplyScalar(pe).floor(),V.copy(st).multiplyScalar(pe).floor(),fe=$e;if(ue!==0&&(se=he),E.bindFramebuffer(Q.FRAMEBUFFER,se)&&E.drawBuffers(R,se),E.viewport(b),E.scissor(V),E.setScissorTest(fe),re){const be=te.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,be.__webglTexture,ue)}else if(Be){const be=K;for(let Te=0;Te<R.textures.length;Te++){const Ce=te.get(R.textures[Te]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,ue,be)}}else if(R!==null&&ue!==0){const be=te.get(R.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,be.__webglTexture,ue)}_e=-1},this.readRenderTargetPixels=function(R,K,ue,se,re,Be,Ze,be=0){if(!(R&&R.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(Te=Te[Ze]),Te){E.bindFramebuffer(Q.FRAMEBUFFER,Te);try{const Ce=R.textures[be],Ve=Ce.format,et=Ce.type;if(R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be),!L.textureFormatReadable(Ve)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(et)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-se&&ue>=0&&ue<=R.height-re&&Q.readPixels(K,ue,se,re,Oe.convert(Ve),Oe.convert(et),Be)}finally{const Ce=ie!==null?te.get(ie).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,se,re,Be,Ze,be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(Te=Te[Ze]),Te)if(K>=0&&K<=R.width-se&&ue>=0&&ue<=R.height-re){E.bindFramebuffer(Q.FRAMEBUFFER,Te);const Ce=R.textures[be],Ve=Ce.format,et=Ce.type;if(R.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+be),!L.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ge),Q.bufferData(Q.PIXEL_PACK_BUFFER,Be.byteLength,Q.STREAM_READ),Q.readPixels(K,ue,se,re,Oe.convert(Ve),Oe.convert(et),0);const ut=ie!==null?te.get(ie).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,ut);const Lt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await ky(Q,Lt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ge),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Be),Q.deleteBuffer(Ge),Q.deleteSync(Lt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ue=0){const se=Math.pow(2,-ue),re=Math.floor(R.image.width*se),Be=Math.floor(R.image.height*se),Ze=K!==null?K.x:0,be=K!==null?K.y:0;ge.setTexture2D(R,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,Ze,be,re,Be),E.unbindTexture()},this.copyTextureToTexture=function(R,K,ue=null,se=null,re=0,Be=0){let Ze,be,Te,Ce,Ve,et,Ge,ut,Lt;const Ht=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ue!==null)Ze=ue.max.x-ue.min.x,be=ue.max.y-ue.min.y,Te=ue.isBox3?ue.max.z-ue.min.z:1,Ce=ue.min.x,Ve=ue.min.y,et=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-re);Ze=Math.floor(Ht.width*rn),be=Math.floor(Ht.height*rn),R.isDataArrayTexture?Te=Ht.depth:R.isData3DTexture?Te=Math.floor(Ht.depth*rn):Te=1,Ce=0,Ve=0,et=0}se!==null?(Ge=se.x,ut=se.y,Lt=se.z):(Ge=0,ut=0,Lt=0);const zt=Oe.convert(K.format),St=Oe.convert(K.type);let je;K.isData3DTexture?(ge.setTexture3D(K,0),je=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ge.setTexture2DArray(K,0),je=Q.TEXTURE_2D_ARRAY):(ge.setTexture2D(K,0),je=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);const ht=E.getParameter(Q.UNPACK_ROW_LENGTH),Ke=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),$t=E.getParameter(Q.UNPACK_SKIP_PIXELS),Jn=E.getParameter(Q.UNPACK_SKIP_ROWS),mi=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,Ht.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ht.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ce),E.pixelStorei(Q.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,et);const $n=R.isDataArrayTexture||R.isData3DTexture,jt=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const rn=te.get(R),ri=te.get(K),wt=te.get(rn.__renderTarget),ei=te.get(ri.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,wt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ki=0;ki<Te;ki++)$n&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,te.get(R).__webglTexture,re,et+ki),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,te.get(K).__webglTexture,Be,Lt+ki)),Q.blitFramebuffer(Ce,Ve,Ze,be,Ge,ut,Ze,be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||te.has(R)){const rn=te.get(R),ri=te.get(K);E.bindFramebuffer(Q.READ_FRAMEBUFFER,ae),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,J);for(let wt=0;wt<Te;wt++)$n?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,rn.__webglTexture,re,et+wt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,rn.__webglTexture,re),jt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ri.__webglTexture,Be,Lt+wt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ri.__webglTexture,Be),re!==0?Q.blitFramebuffer(Ce,Ve,Ze,be,Ge,ut,Ze,be,Q.COLOR_BUFFER_BIT,Q.NEAREST):jt?Q.copyTexSubImage3D(je,Be,Ge,ut,Lt+wt,Ce,Ve,Ze,be):Q.copyTexSubImage2D(je,Be,Ge,ut,Ce,Ve,Ze,be);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else jt?R.isDataTexture||R.isData3DTexture?Q.texSubImage3D(je,Be,Ge,ut,Lt,Ze,be,Te,zt,St,Ht.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(je,Be,Ge,ut,Lt,Ze,be,Te,zt,Ht.data):Q.texSubImage3D(je,Be,Ge,ut,Lt,Ze,be,Te,zt,St,Ht):R.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Be,Ge,ut,Ze,be,zt,St,Ht.data):R.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Be,Ge,ut,Ht.width,Ht.height,zt,Ht.data):Q.texSubImage2D(Q.TEXTURE_2D,Be,Ge,ut,Ze,be,zt,St,Ht);E.pixelStorei(Q.UNPACK_ROW_LENGTH,ht),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ke),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,$t),E.pixelStorei(Q.UNPACK_SKIP_ROWS,Jn),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,mi),Be===0&&K.generateMipmaps&&Q.generateMipmap(je),E.unbindTexture()},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){z=0,X=0,ie=null,E.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}class k2{constructor(){this.ctx=null,this.isMuted=!1,this.masterGain=null,this.engineOsc1=null,this.engineOsc2=null,this.engineSubOsc=null,this.engineFilter=null,this.engineGain=null,this.engineDistortion=null,this.isEngineRunning=!1,this.skidNoiseNode=null,this.skidFilter=null,this.skidGain=null,this.isSkidding=!1,this.alarmOsc=null,this.alarmLfo=null,this.alarmGain=null,this.isAlarmActive=!1,this.rainNoiseNode=null,this.rainGain=null}init(){if(!this.ctx)try{const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.startRainAmbience(),this.startEngineSynth(),this.initSkidSynth()}catch(e){console.warn("Web Audio API not supported or blocked:",e)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(e){this.isMuted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:.7,this.ctx.currentTime,.05)}getMuted(){return this.isMuted}setMasterVolume(e){this.masterGain&&this.ctx&&!this.isMuted&&this.masterGain.gain.setTargetAtTime(Math.max(0,Math.min(1,e)),this.ctx.currentTime,.05)}startEngineSynth(){!this.ctx||!this.masterGain||this.isEngineRunning||(this.engineOsc1=this.ctx.createOscillator(),this.engineOsc2=this.ctx.createOscillator(),this.engineSubOsc=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc2.type="sawtooth",this.engineSubOsc.type="triangle",this.engineOsc1.frequency.setValueAtTime(45,this.ctx.currentTime),this.engineOsc2.frequency.setValueAtTime(45.8,this.ctx.currentTime),this.engineSubOsc.frequency.setValueAtTime(22.5,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(280,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.engineDistortion=this.ctx.createWaveShaper(),this.engineDistortion.curve=this.makeDistortionCurve(18),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.18,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSubOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineDistortion),this.engineDistortion.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSubOsc.start(),this.isEngineRunning=!0)}makeDistortionCurve(e){const i=e,s=44100,l=new Float32Array(s),c=Math.PI/180;for(let d=0;d<s;++d){const p=d*2/s-1;l[d]=(3+i)*p*20*c/(Math.PI+i*Math.abs(p))}return l}updateEngine(e,i,s=!1){if(!this.ctx||!this.engineOsc1||!this.engineOsc2||!this.engineSubOsc||!this.engineFilter||!this.engineGain)return;const l=this.ctx.currentTime,c=Math.abs(e),d=42+c*1.3+i*30+(s?65:0),p=260+c*9+i*450+(s?900:0),m=.12+i*.15+c*.001+(s?.1:0);this.engineOsc1.frequency.setTargetAtTime(d,l,.05),this.engineOsc2.frequency.setTargetAtTime(d*1.015,l,.05),this.engineSubOsc.frequency.setTargetAtTime(d*.5,l,.05),this.engineFilter.frequency.setTargetAtTime(Math.min(3800,p),l,.06),this.engineGain.gain.setTargetAtTime(Math.min(.45,m),l,.05)}initSkidSynth(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let l=0;l<e;l++)s[l]=Math.random()*2-1;this.skidNoiseNode=this.ctx.createBufferSource(),this.skidNoiseNode.buffer=i,this.skidNoiseNode.loop=!0,this.skidFilter=this.ctx.createBiquadFilter(),this.skidFilter.type="bandpass",this.skidFilter.frequency.setValueAtTime(1100,this.ctx.currentTime),this.skidFilter.Q.setValueAtTime(4,this.ctx.currentTime),this.skidGain=this.ctx.createGain(),this.skidGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.skidNoiseNode.connect(this.skidFilter),this.skidFilter.connect(this.skidGain),this.skidGain.connect(this.masterGain),this.skidNoiseNode.start()}updateSkid(e,i=.5){if(!this.ctx||!this.skidGain||!this.skidFilter)return;const s=this.ctx.currentTime;if(e&&i>.05){const l=Math.min(.28,i*.35),c=900+i*600;this.skidGain.gain.setTargetAtTime(l,s,.03),this.skidFilter.frequency.setTargetAtTime(c,s,.04)}else this.skidGain.gain.setTargetAtTime(1e-4,s,.06)}playNitroBoost(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain(),l=this.ctx.createBiquadFilter();i.type="sine",i.frequency.setValueAtTime(140,e),i.frequency.exponentialRampToValueAtTime(780,e+.35),l.type="bandpass",l.frequency.setValueAtTime(400,e),l.frequency.exponentialRampToValueAtTime(3200,e+.4),s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.6),i.connect(l),l.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.65)}playGlassShatter(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(120,e),i.frequency.exponentialRampToValueAtTime(25,e+.4),s.gain.setValueAtTime(.6,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.5);const l=8;for(let c=0;c<l;c++){const d=this.ctx.createOscillator(),p=this.ctx.createGain(),m=Math.random()*.15,h=2200+Math.random()*3800;d.type="sine",d.frequency.setValueAtTime(h,e+m),d.frequency.exponentialRampToValueAtTime(h*.4,e+m+.25),p.gain.setValueAtTime(.18,e+m),p.gain.exponentialRampToValueAtTime(1e-4,e+m+.3),d.connect(p),p.connect(this.masterGain),d.start(e+m),d.stop(e+m+.35)}}startAlarmSiren(){if(!this.ctx||!this.masterGain||this.isAlarmActive)return;this.isAlarmActive=!0;const e=this.ctx.currentTime;this.alarmOsc=this.ctx.createOscillator(),this.alarmLfo=this.ctx.createOscillator();const i=this.ctx.createGain();this.alarmGain=this.ctx.createGain(),this.alarmOsc.type="sawtooth",this.alarmOsc.frequency.setValueAtTime(680,e),this.alarmLfo.type="sine",this.alarmLfo.frequency.setValueAtTime(.7,e),i.gain.setValueAtTime(220,e),this.alarmLfo.connect(this.alarmOsc.frequency);const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1600,e),this.alarmGain.gain.setValueAtTime(.12,e),this.alarmOsc.connect(s),s.connect(this.alarmGain),this.alarmGain.connect(this.masterGain),this.alarmLfo.start(e),this.alarmOsc.start(e)}stopAlarmSiren(){!this.alarmGain||!this.ctx||!this.isAlarmActive||(this.alarmGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.2),setTimeout(()=>{var e,i;try{(e=this.alarmOsc)==null||e.stop(),(i=this.alarmLfo)==null||i.stop(),this.isAlarmActive=!1}catch{}},300))}playLootChime(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime;[1046.5,1318.5,1567.98,1975.53,2093].forEach((s,l)=>{if(!this.ctx||!this.masterGain)return;const c=this.ctx.createOscillator(),d=this.ctx.createGain(),p=e+l*.08;c.type="triangle",c.frequency.setValueAtTime(s,p),d.gain.setValueAtTime(.22,p),d.gain.exponentialRampToValueAtTime(1e-4,p+.55),c.connect(d),d.connect(this.masterGain),c.start(p),c.stop(p+.6)}),setTimeout(()=>{if(!this.ctx||!this.masterGain)return;const s=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.currentTime;s.type="sine",s.frequency.setValueAtTime(3200,c),l.gain.setValueAtTime(.18,c),l.gain.exponentialRampToValueAtTime(1e-4,c+.4),s.connect(l),l.connect(this.masterGain),s.start(c),s.stop(c+.45)},380)}playKeyClick(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(800+Math.random()*400,e),s.gain.setValueAtTime(.035,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.03),i.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.035)}playSafehouseUnlocked(){if(!this.ctx||!this.masterGain||this.isMuted)return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(80,e),i.frequency.exponentialRampToValueAtTime(440,e+.3),i.frequency.exponentialRampToValueAtTime(880,e+.6),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(.001,e+.85),i.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.9)}startRainAmbience(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;this.rainNoiseNode=this.ctx.createBufferSource(),this.rainNoiseNode.buffer=i,this.rainNoiseNode.loop=!0;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(800,this.ctx.currentTime),this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(.04,this.ctx.currentTime),this.rainNoiseNode.connect(l),l.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainNoiseNode.start()}}const Nn=new k2;function sx(r,e){const i=document.createElement("canvas");i.width=1024,i.height=768;const s=i.getContext("2d");if(e){s.fillStyle="#0a0a0f",s.fillRect(0,0,1024,768),s.strokeStyle="#ef4444",s.lineWidth=14,s.strokeRect(20,20,984,728),s.fillStyle="#eab308",s.font='900 32px "JetBrains Mono", monospace';for(let c=-400;c<1200;c+=140)s.save(),s.translate(512,384),s.rotate(-Math.PI/6),s.fillStyle="rgba(234, 179, 8, 0.15)",s.fillRect(-800,c,1600,48),s.fillStyle="#facc15",s.fillText("CRIME SCENE // EVIDENCE SECURED // OPERATIVE HEIST COMPLETED",-700,c+34),s.restore();s.fillStyle="rgba(15, 23, 42, 0.92)",s.fillRect(180,280,664,220),s.strokeStyle="#f43f5e",s.lineWidth=4,s.strokeRect(180,280,664,220),s.fillStyle="#f43f5e",s.font='900 48px "JetBrains Mono", monospace',s.textAlign="center",s.fillText("⚠️ [ EVIDENCE MISSING ]",512,360),s.fillStyle="#cbd5e1",s.font='600 24px "JetBrains Mono", monospace',s.fillText("EXHIBIT SECURED BY OPERATIVE",512,410),s.fillStyle="#94a3b8",s.font='500 20px "JetBrains Mono", monospace',s.fillText(`Deliverable: ${r.projectName}`,512,455)}else{const c=s.createLinearGradient(0,0,1024,768);r.wing==="A"?(c.addColorStop(0,"#0c1a2e"),c.addColorStop(.5,"#075985"),c.addColorStop(1,"#082f49")):r.wing==="B"?(c.addColorStop(0,"#1e1035"),c.addColorStop(.5,"#581c87"),c.addColorStop(1,"#2e1065")):r.wing==="C"?(c.addColorStop(0,"#06281e"),c.addColorStop(.5,"#047857"),c.addColorStop(1,"#022c22")):(c.addColorStop(0,"#2e1906"),c.addColorStop(.5,"#b45309"),c.addColorStop(1,"#451a03")),s.fillStyle=c,s.fillRect(0,0,1024,768),s.strokeStyle="#fbbf24",s.lineWidth=12,s.strokeRect(30,30,964,708),s.strokeStyle="rgba(251, 191, 36, 0.4)",s.lineWidth=2,s.strokeRect(48,48,928,672),s.fillStyle="rgba(0, 0, 0, 0.6)",s.fillRect(60,60,480,64),s.fillStyle=r.themeColor,s.font='700 22px "JetBrains Mono", monospace',s.textAlign="left",s.fillText(`LOUVRE MASTERPIECE // ${r.wingName.toUpperCase()}`,80,100),s.fillStyle="#ffffff",s.font='900 54px "Cinzel", Georgia, serif',s.fillText(r.exhibitTitle,80,185),s.fillStyle=r.themeColor,s.font='700 32px "Plus Jakarta Sans", sans-serif',s.fillText(`Project: ${r.projectName}`,80,235),s.fillStyle="#e2e8f0",s.font='500 24px "Plus Jakarta Sans", sans-serif',s.fillText(r.tagline,80,280),s.fillStyle="rgba(15, 23, 42, 0.85)",s.fillRect(80,320,864,280),s.strokeStyle="rgba(255, 255, 255, 0.15)",s.lineWidth=2,s.strokeRect(80,320,864,280),r.wing==="A"?X2(s,80,320):r.wing==="B"?W2(s,80,320):r.wing==="C"?q2(s,80,320):j2(s,80,320);let d=80;r.techStack.slice(0,5).forEach(p=>{const m=s.measureText(p).width+36;s.fillStyle="rgba(255, 255, 255, 0.12)",s.fillRect(d,630,m,48),s.strokeStyle=r.themeColor,s.lineWidth=1.5,s.strokeRect(d,630,m,48),s.fillStyle="#f8fafc",s.font='600 20px "JetBrains Mono", monospace',s.fillText(p,d+18,661),d+=m+14}),s.fillStyle="#fbbf24",s.font='700 18px "Cinzel", serif',s.textAlign="right",s.fillText("COLLECTION DE L'ARCHITECTE // HARIHARAN",944,705)}const l=new Px(i);return l.needsUpdate=!0,l}function X2(r,e,i,s,l){r.save(),r.translate(e,i),["us-east-1a [EKS]","us-east-1b [EKS]","us-east-1c [EKS]"].forEach((d,p)=>{const m=60+p*260;r.fillStyle="rgba(56, 189, 248, 0.15)",r.fillRect(m,50,220,140),r.strokeStyle="#38bdf8",r.lineWidth=2,r.strokeRect(m,50,220,140),r.fillStyle="#38bdf8",r.font='700 18px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(d,m+110,85),r.fillStyle="#e2e8f0",r.font='500 14px "JetBrains Mono", monospace',r.fillText("Pod Autoscaler: HPA",m+110,120),r.fillText("Istio Mesh mTLS",m+110,150)}),r.fillStyle="#f59e0b",r.fillRect(60,210,740,40),r.fillStyle="#000",r.font='800 16px "JetBrains Mono", monospace',r.fillText("AWS Route 53 Multi-AZ Active-Active Failover Ingress Gateway (99.99% SLA)",430,235),r.restore()}function W2(r,e,i,s,l){r.save(),r.translate(e,i),r.strokeStyle="#c084fc",r.lineWidth=4;const c=[[432,50],[432,90],[370,120],[494,120],[340,180],[524,175],[320,230],[545,230],[432,160],[390,210],[474,210],[380,260],[484,260]];r.beginPath(),r.moveTo(c[0][0],c[0][1]),r.lineTo(c[1][0],c[1][1]),r.lineTo(c[2][0],c[2][1]),r.lineTo(c[4][0],c[4][1]),r.lineTo(c[6][0],c[6][1]),r.moveTo(c[1][0],c[1][1]),r.lineTo(c[3][0],c[3][1]),r.lineTo(c[5][0],c[5][1]),r.lineTo(c[7][0],c[7][1]),r.moveTo(c[1][0],c[1][1]),r.lineTo(c[8][0],c[8][1]),r.lineTo(c[9][0],c[9][1]),r.lineTo(c[11][0],c[11][1]),r.moveTo(c[8][0],c[8][1]),r.lineTo(c[10][0],c[10][1]),r.lineTo(c[12][0],c[12][1]),r.stroke(),c.forEach(([d,p])=>{r.fillStyle="#38bdf8",r.beginPath(),r.arc(d,p,7,0,Math.PI*2),r.fill()}),r.fillStyle="#a855f7",r.font='700 16px "JetBrains Mono", monospace',r.textAlign="left",r.fillText("1-Euro Adaptive Filter: ON",60,70),r.fillText("Latency: 11.4ms (60 FPS)",60,105),r.fillText("320 Kinematic Angle Tests: 100% PASS",60,140),r.restore()}function q2(r,e,i,s,l){r.save(),r.translate(e,i),r.strokeStyle="#34d399",r.lineWidth=3,r.beginPath();for(let c=60;c<400;c+=8){const d=90+Math.sin(c*.08)*35*Math.sin(c*.02);c===60?r.moveTo(c,d):r.lineTo(c,d)}r.stroke(),r.fillStyle="#10b981",r.font='700 16px "JetBrains Mono", monospace',r.textAlign="left",r.fillText("Whisper Audio Stream -> Metal GPU",60,160),r.fillStyle="rgba(16, 185, 129, 0.2)",r.fillRect(450,40,360,180),r.strokeStyle="#10b981",r.lineWidth=2,r.strokeRect(450,40,360,180),r.fillStyle="#ffffff",r.font='700 18px "JetBrains Mono", monospace',r.fillText("Qwen2.5-VL Vision Encoder",470,75),r.fillStyle="#6ee7b7",r.font='500 14px "JetBrains Mono", monospace',r.fillText("• 4-Bit Quantized Weight Cache",470,110),r.fillText("• Zero-shot Scene Segmentation",470,140),r.fillText("• CoreML Unified Memory: 3.1 GB",470,170),r.restore()}function j2(r,e,i,s,l){r.save(),r.translate(e,i),[{title:"Strava Webhook",color:"#f59e0b",x:60,y:50},{title:"Go Ingestion GW",color:"#38bdf8",x:300,y:50},{title:"Kafka Event Bus",color:"#ef4444",x:550,y:50},{title:"Geofence Validator",color:"#a855f7",x:300,y:160},{title:"Token Mint Engine",color:"#10b981",x:550,y:160}].forEach(d=>{r.fillStyle="rgba(15, 23, 42, 0.9)",r.fillRect(d.x,d.y,190,70),r.strokeStyle=d.color,r.lineWidth=2,r.strokeRect(d.x,d.y,190,70),r.fillStyle=d.color,r.font='700 15px "JetBrains Mono", monospace',r.textAlign="center",r.fillText(d.title,d.x+95,d.y+40)}),r.strokeStyle="#cbd5e1",r.lineWidth=2,r.beginPath(),r.moveTo(250,85),r.lineTo(300,85),r.moveTo(490,85),r.lineTo(550,85),r.moveTo(395,120),r.lineTo(395,160),r.moveTo(490,195),r.lineTo(550,195),r.stroke(),r.restore()}const Y2=({phase:r,exhibits:e,controls:i,onTelemetryUpdate:s,onNearExhibit:l,onPyramidShatter:c,onSafehouseReached:d,onInspectExhibit:p,isInspecting:m})=>{const h=yt.useRef(null),S=yt.useRef(!1),_=yt.useRef(i),g=yt.useRef(e),T=yt.useRef(m),A=yt.useRef(r);return yt.useEffect(()=>{_.current=i},[i]),yt.useEffect(()=>{g.current=e},[e]),yt.useEffect(()=>{T.current=m},[m]),yt.useEffect(()=>{A.current=r},[r]),yt.useEffect(()=>{if(!h.current)return;const D=h.current,y=D.clientWidth||window.innerWidth||800,x=D.clientHeight||window.innerHeight||600,I=new SM;I.background=new Tt(395539),I.fog=new tp(395539,.012);const G=new hi(60,y/x,.1,400);G.position.set(0,7,96);let N;try{N=new V2({antialias:!0,powerPreference:"high-performance",precision:"mediump"})}catch(be){console.error("WebGL initialization error:",be);return}N.setSize(y,x,!1),N.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),N.shadowMap.enabled=!0,N.shadowMap.type=sl,N.toneMapping=Xh,N.toneMappingExposure=1.2,D.innerHTML="",D.appendChild(N.domElement);const F=new BM(8246268,988970,1.2);I.add(F);const U=new XM(1976635,.8);I.add(U);const P=new kM(9684477,1.8);P.position.set(40,60,40),P.castShadow=!0,P.shadow.mapSize.width=1024,P.shadow.mapSize.height=1024,P.shadow.camera.near=10,P.shadow.camera.far=180,P.shadow.camera.left=-60,P.shadow.camera.right=60,P.shadow.camera.top=60,P.shadow.camera.bottom=-60,P.shadow.bias=-5e-4,I.add(P);const M=new Ti;I.add(M);const O=new Ms(160,240),Y=new kn({color:988970,roughness:.28,metalness:.65}),H=new gt(O,Y);H.rotation.x=-Math.PI/2,H.position.set(0,0,0),H.receiveShadow=!0,M.add(H);const j=new Ms(80,90),he=new kn({color:1976635,roughness:.18,metalness:.75}),ae=new gt(j,he);ae.rotation.x=-Math.PI/2,ae.position.set(0,.02,0),ae.receiveShadow=!0,M.add(ae);const J=new kn({color:1976635,roughness:.7,metalness:.2}),z=new kn({color:14251782,roughness:.3,metalness:.9}),X=new kn({color:3359061,roughness:.5,metalness:.3}),ie=new gt(new fn(84,16,4),J);ie.position.set(0,8,-46),ie.receiveShadow=!0,M.add(ie);const _e=new gt(new fn(4,16,92),J);_e.position.set(-40,8,0),_e.receiveShadow=!0,M.add(_e);const B=new gt(new fn(4,16,92),J);B.position.set(40,8,0),B.receiveShadow=!0,M.add(B);const b=[[-16,-30],[-16,-15],[-16,0],[-16,15],[-16,30],[16,-30],[16,-15],[16,0],[16,15],[16,30]];b.forEach(([be,Te])=>{const Ce=new Ti;Ce.position.set(be,0,Te);const Ve=new gt(new fn(2.4,.8,2.4),X);Ve.position.y=.4,Ce.add(Ve);const et=new gt(new ys(.85,.95,12,12),X);et.position.y=6.8,Ce.add(et);const Ge=new gt(new fn(2.2,.9,2.2),z);Ge.position.y=13.25,Ce.add(Ge),M.add(Ce)});const V=new kn({color:4674921,metalness:.8}),fe=new Ki({color:16707722});[[-25,45],[25,45],[-25,75],[25,75],[-25,105],[25,105]].forEach(([be,Te])=>{const Ce=new Ti;Ce.position.set(be,0,Te);const Ve=new gt(new ys(.2,.3,8,8),V);Ve.position.y=4,Ce.add(Ve);const et=new gt(new fn(1.2,1.2,1.2),fe);et.position.y=8.2,Ce.add(et);const Ge=new el(16707722,1.2,24);Ge.position.set(0,8,0),Ce.add(Ge),M.add(Ce)});const Ee=new Ti;Ee.position.set(0,0,38),I.add(Ee);const Z=new kn({color:3718648,transparent:!0,opacity:.7,roughness:.1,metalness:.85,emissive:165063,emissiveIntensity:.25}),oe=new kn({color:14251782,metalness:.9,roughness:.2}),pe=new gt(new fn(20.4,.6,20.4),oe);pe.position.y=.3,Ee.add(pe);const Ne=new ll(14,11,4,1);Ne.rotateY(Math.PI/4);const ke=new gt(Ne,Z);ke.position.y=5.5,Ee.add(ke);const Pe=new el(3718648,3.5,30);Pe.position.set(0,4,0),Ee.add(Pe);const st=[],$e=[],qe=new ai,rt=new Float32Array([0,0,0,1.2,0,0,.6,1.4,0]);qe.setAttribute("position",new Bi(rt,3)),qe.computeVertexNormals();const ot=new kn({color:3718648,emissive:165063,emissiveIntensity:.6,transparent:!0,opacity:.85,side:ua}),Mt=48;for(let be=0;be<Mt;be++){const Te=new gt(qe,ot);Te.visible=!1,I.add(Te),$e.push(Te)}const It=()=>{if(!S.current){S.current=!0,c(),ke.visible=!1,Nn.playGlassShatter();for(let be=0;be<Mt;be++){const Te=(Math.random()-.5)*14,Ce=Math.random()*8+1,Ve=(Math.random()-.5)*14,et=Ee.position.x+Te,Ge=Ce,ut=Ee.position.z+Ve,Lt={id:be,position:[et,Ge,ut],velocity:[Te*(1.8+Math.random()*2.2),8+Math.random()*12,Ve*(1.8+Math.random()*2.2)],rotation:[Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI],rotationSpeed:[(Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8],scale:[.6+Math.random()*1.4,.6+Math.random()*1.4,1],opacity:.95,lifetime:0};st.push(Lt),$e[be].visible=!0,$e[be].position.set(et,Ge,ut),$e[be].scale.set(Lt.scale[0],Lt.scale[1],1)}}},Bt=[];g.current.forEach(be=>{const Te=new Ti;Te.position.set(be.position[0],be.position[1],be.position[2]),Te.rotation.y=be.rotation;const Ce=new kn({color:16096779,metalness:.85,roughness:.25}),Ve=new gt(new fn(10.6,7.8,.6),Ce);Te.add(Ve);const et=sx(be,be.stolen),Ge=new Ki({map:et}),ut=new gt(new Ms(9.6,6.8),Ge);ut.position.z=.32,Te.add(ut);const Lt=new Wc(16777215,3,24,Math.PI/4,.4);Lt.position.set(0,6,4),Lt.target=ut,Te.add(Lt),Te.add(Lt.target);const Ht=new el(be.themeColor,2.2,12);Ht.position.set(0,0,1.5),Te.add(Ht);const zt=new Ki({color:be.themeColor,transparent:!0,opacity:.65,wireframe:!0}),St=new gt(new ip(3.2,4.4,18),zt);St.rotation.x=-Math.PI/2,St.position.set(0,-3.18,2.5),Te.add(St),I.add(Te),Bt.push({id:be.id,mesh:Te,plane:ut,light:Ht,promptRing:St})});const Ut=[];[[-36,12,-25],[-36,12,25],[36,12,-25],[36,12,25],[0,14,-40]].forEach(([be,Te,Ce])=>{const Ve=new Ti;Ve.position.set(be,Te,Ce);const et=new gt(new ys(.6,.8,.8,8),new kn({color:1118481}));Ve.add(et);const Ge=new gt(new ap(.5,8,8),new Ki({color:16711731}));Ge.position.y=.4,Ve.add(Ge);const ut=new Wc(16711731,0,45,Math.PI/6,.3);ut.position.set(0,.4,0),Ve.add(ut),I.add(ut.target),I.add(Ve),Ut.push({group:Ve,light:ut,angle:Math.random()*Math.PI*2})});const Wt=new Ti;Wt.position.set(0,0,-44),I.add(Wt);const Q=new kn({color:413243,metalness:.9}),Ft=new gt(new fn(22,10,2),Q);Ft.position.y=5,Wt.add(Ft);const At=new gt(new fn(16,7.5,4),new Ki({color:142370}));At.position.y=3.8,Wt.add(At);const L=Z2(),E=new gt(new Ms(14,2.2),new Ki({map:L}));E.position.set(0,8.8,1.05),Wt.add(E);const $=new el(1096065,2.5,20);$.position.set(0,4,2),Wt.add($);const te=new Ti;te.position.set(0,0,85),I.add(te);const ge=new kn({color:988970,metalness:.95,roughness:.18}),De=new kn({color:3718648,emissive:165063,emissiveIntensity:.8}),Ie=new kn({color:132631,roughness:.05,metalness:.95}),ve=new gt(new fn(2.3,.6,4.8),ge);ve.position.y=.55,ve.castShadow=!0,te.add(ve);const xe=new gt(new fn(1.8,.55,2.4),Ie);xe.position.set(0,1.1,-.2),te.add(xe);const Le=new gt(new fn(1.4,.15,1.4),De);Le.position.set(0,.9,1.3),te.add(Le);const We=new gt(new fn(2.2,.1,.6),De);We.position.set(0,1.35,-2.1);const ze=new gt(new fn(.1,.5,.1),ge);ze.position.set(-.8,1.05,-2.1);const Fe=new gt(new fn(.1,.5,.1),ge);Fe.position.set(.8,1.05,-2.1),te.add(We,ze,Fe);const nt=new Ki({color:62207}),it=new gt(new fn(.4,.18,.1),nt);it.position.set(-.75,.6,2.42);const ct=new gt(new fn(.4,.18,.1),nt);ct.position.set(.75,.6,2.42),te.add(it,ct);const W=new Wc(62207,3.5,35,Math.PI/5,.4);W.position.set(-.75,.6,2.5),W.target.position.set(-.75,0,20),te.add(W),te.add(W.target);const Ue=new Wc(62207,3.5,35,Math.PI/5,.4);Ue.position.set(.75,.6,2.5),Ue.target.position.set(.75,0,20),te.add(Ue),te.add(Ue.target);const ye=new el(62207,2.5,6);ye.position.set(0,.2,0),te.add(ye);const Oe=new Ki({color:16711714}),He=new gt(new fn(2.1,.15,.1),Oe);He.position.set(0,.65,-2.42),te.add(He);const Re=new Ki({color:62207,transparent:!0,opacity:0}),Qe=new gt(new ll(.18,.9,8),Re);Qe.rotation.x=-Math.PI/2,Qe.position.set(-.55,.4,-2.8);const Ye=new gt(new ll(.18,.9,8),Re);Ye.rotation.x=-Math.PI/2,Ye.position.set(.55,.4,-2.8),te.add(Qe,Ye);const sn=new kn({color:592139,roughness:.8}),qt=new kn({color:3718648,metalness:.9,roughness:.2}),Qn=[{x:-1.15,y:.38,z:1.4,isFront:!0},{x:1.15,y:.38,z:1.4,isFront:!0},{x:-1.15,y:.38,z:-1.4,isFront:!1},{x:1.15,y:.38,z:-1.4,isFront:!1}],Wn=[];Qn.forEach(({x:be,y:Te,z:Ce,isFront:Ve})=>{const et=new Ti;et.position.set(be,Te,Ce);const Ge=new gt(new ys(.38,.38,.32,12),sn);Ge.rotation.z=Math.PI/2,et.add(Ge);const ut=new gt(new ys(.24,.24,.34,6),qt);ut.rotation.z=Math.PI/2,et.add(ut),te.add(et),Wn.push({mesh:et,isFront:Ve})});const $i=350,va=new ai,ea=new Float32Array($i*3),xa=new Float32Array($i);for(let be=0;be<$i;be++)ea[be*3]=(Math.random()-.5)*120,ea[be*3+1]=Math.random()*40,ea[be*3+2]=(Math.random()-.5)*160,xa[be]=25+Math.random()*20;va.setAttribute("position",new Bi(ea,3));const wi=new Lx({color:9684477,size:.2,transparent:!0,opacity:.6}),pn=new NM(va,wi);I.add(pn);let dt=new ne(0,0,85),yn=0,Gt=0,Gi=0,ta=!1,si=100,zn=!1,xn=0;const Ri=36,Hi=-12,Vi=24,na=38,mn=.985,er=2.4,R=()=>{if(!D)return;const be=D.clientWidth||window.innerWidth||800,Te=D.clientHeight||window.innerHeight||600;be>0&&Te>0&&(G.aspect=be/Te,G.updateProjectionMatrix(),N.setSize(be,Te,!1))};R();const K=new ResizeObserver(()=>{R()});K.observe(D);const ue=()=>{R()};window.addEventListener("resize",ue);let se=0,re=performance.now(),Be;const Ze=()=>{Be=requestAnimationFrame(Ze);const be=performance.now(),Te=Math.min(.06,(be-re)/1e3);re=be;const Ce=_.current;if(!T.current){Ce.boost&&si>0?(zn=!0,si=Math.max(0,si-Te*35),Re.opacity=.95,Qe.scale.set(1+Math.random()*.4,1+Math.random()*.4,1+Math.random()*.6),Ye.scale.copy(Qe.scale)):(zn=!1,si=Math.min(100,si+Te*12),Re.opacity=0);const ht=zn?Ri*1.5:Ri,Ke=zn?Vi*1.8:Vi;Ce.forward?Gt=Math.min(ht,Gt+Ke*Te):Ce.backward?Gt>1?Gt=Math.max(0,Gt-na*Te):Gt=Math.max(Hi,Gt-Vi*.7*Te):(Gt*=Math.pow(mn,Te*60),Math.abs(Gt)<.05&&(Gt=0)),ta=Ce.handbrake&&Math.abs(Gt)>6,ta&&(Gt*=Math.pow(.96,Te*60));const $t=(Ce.left?1:0)-(Ce.right?1:0);Gi=dv.lerp(Gi,$t*.55,Te*10);const Jn=Math.min(1,Math.abs(Gt)/8),mi=Gt>=0?1:-1,$n=ta?1.85:1;yn+=Gi*er*Jn*mi*$n*Te;const jt=new ne(-Math.sin(yn),0,-Math.cos(yn));dt.addScaledVector(jt,Gt*Te),dt.x<-37.5&&(dt.x=-37.5,Gt*=-.3,xn=.4),dt.x>37.5&&(dt.x=37.5,Gt*=-.3,xn=.4),dt.z<-44&&(Math.abs(dt.x)<8?d():(dt.z=-44,Gt*=-.3,xn=.4)),dt.z>115&&(dt.z=115,Gt*=-.3,xn=.3),dt.z<35&&dt.z>-40&&b.forEach(([Mn,Ln])=>{if(Math.hypot(dt.x-Mn,dt.z-Ln)<2.4){const tr=Math.atan2(dt.z-Ln,dt.x-Mn);dt.x=Mn+Math.cos(tr)*2.45,dt.z=Ln+Math.sin(tr)*2.45,Gt*=-.25,xn=.5}});const rn=Math.hypot(dt.x-Ee.position.x,dt.z-Ee.position.z);!S.current&&(rn<8.5||dt.z<40&&dt.z>25)&&(It(),xn=1),te.position.copy(dt),te.rotation.y=yn,Wn.forEach(({mesh:Mn,isFront:Ln})=>{Mn.children[0].rotation.x+=Gt*Te/.4,Ln&&(Mn.rotation.y=Gi)});const ri=Ce.backward||Ce.handbrake;Oe.color.setHex(ri?16711714:8330525);const wt=Math.abs(Gt*3.6);Nn.updateEngine(wt,Ce.forward?1:Ce.backward?.5:.1,zn),Nn.updateSkid(ta,Math.abs(Gi)*(wt/60));let ei=null,ki=8.5;if(g.current.forEach(Mn=>{const Ln=Math.hypot(dt.x-Mn.position[0],dt.z-Mn.position[2]);Ln<ki&&(ki=Ln,ei=Mn)}),l(ei),Ce.interact&&ei&&p(ei),be-se>50){se=be;const Mn=Gt<-.1?"R":Gt<.2?"N":Math.min(5,Math.floor(wt/28)+1);s({speed:Math.round(wt),rpm:Math.round(1200+wt%35*160+(zn?1800:0)),gear:Mn,boost:Math.round(si),isDrifting:ta,isBraking:ri,isBoosting:zn,steering:Gi,throttle:Ce.forward?1:Ce.backward?-1:0})}}if(S.current&&st.length>0)for(let ht=0;ht<st.length;ht++){const Ke=st[ht];Ke.lifetime+=Te,Ke.position[0]+=Ke.velocity[0]*Te,Ke.position[1]+=Ke.velocity[1]*Te,Ke.position[2]+=Ke.velocity[2]*Te,Ke.velocity[1]-=9.8*Te,Ke.position[1]<.1&&(Ke.position[1]=.1,Ke.velocity[1]*=-.4,Ke.velocity[0]*=.8,Ke.velocity[2]*=.8),Ke.rotation[0]+=Ke.rotationSpeed[0]*Te,Ke.rotation[1]+=Ke.rotationSpeed[1]*Te,Ke.rotation[2]+=Ke.rotationSpeed[2]*Te,$e[ht].position.set(Ke.position[0],Ke.position[1],Ke.position[2]),$e[ht].rotation.set(Ke.rotation[0],Ke.rotation[1],Ke.rotation[2])}const et=va.attributes.position,Ge=et.array;for(let ht=0;ht<$i;ht++)Ge[ht*3+1]-=xa[ht]*Te,Ge[ht*3+1]<0&&(Ge[ht*3+1]=35+Math.random()*10);et.needsUpdate=!0,Bt.forEach(ht=>{ht.promptRing.rotation.z+=Te*1.5;const Ke=g.current.find($t=>$t.id===ht.id);if(Ke){const $t=ht.plane.material;Ke.stolen&&!$t.userData.stolen&&($t.map=sx(Ke,!0),$t.needsUpdate=!0,$t.userData.stolen=!0)}}),g.current.some(ht=>ht.stolen)&&(Nn.startAlarmSiren(),Ut.forEach(ht=>{ht.angle+=Te*7.5,ht.light.intensity=4.5,ht.light.target.position.set(ht.group.position.x+Math.sin(ht.angle)*12,0,ht.group.position.z+Math.cos(ht.angle)*12)}));const Lt=Math.abs(Gt*3.6),Ht=60+Math.min(20,Lt*.18)+(zn?10:0);G.fov=dv.lerp(G.fov,Ht,Te*6),G.updateProjectionMatrix();const zt=new ne(0,3.8,9.5);zt.applyAxisAngle(new ne(0,1,0),yn);const St=dt.clone().add(zt);xn>0&&(St.x+=(Math.random()-.5)*xn*.6,St.y+=(Math.random()-.5)*xn*.6,St.z+=(Math.random()-.5)*xn*.6,xn=Math.max(0,xn-Te*3.5)),G.position.lerp(St,Te*8);const je=dt.clone().add(new ne(0,1.2,0));G.lookAt(je),N.render(I,G)};return Be=requestAnimationFrame(Ze),()=>{cancelAnimationFrame(Be),K.disconnect(),window.removeEventListener("resize",ue),N.dispose(),D&&(D.innerHTML="")}},[]),w.jsx("div",{ref:h,className:"w-full h-full absolute inset-0 cursor-crosshair overflow-hidden"})};function Z2(){const r=document.createElement("canvas");r.width=512,r.height=128;const e=r.getContext("2d");e.fillStyle="#064e3b",e.fillRect(0,0,512,128),e.strokeStyle="#10b981",e.lineWidth=6,e.strokeRect(6,6,500,116),e.fillStyle="#10b981",e.font='900 36px "JetBrains Mono", monospace',e.textAlign="center",e.fillText("⚡ UNDERGROUND SAFEHOUSE",256,54),e.fillStyle="#6ee7b7",e.font='700 22px "JetBrains Mono", monospace',e.fillText("SECURE EXTRACTION // REPO UNLOCK GATE",256,95);const i=new Px(r);return i.needsUpdate=!0,i}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),rx=r=>{const e=Q2(r);return e.charAt(0).toUpperCase()+e.slice(1)},jx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),J2=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=yt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>yt.createElement("svg",{ref:m,...$2,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:jx("lucide",l),...!c&&!J2(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,S])=>yt.createElement(h,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=(r,e)=>{const i=yt.forwardRef(({className:s,...l},c)=>yt.createElement(eA,{ref:c,iconNode:e,className:jx(`lucide-${K2(rx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=rx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],nA=cn("activity",tA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],aA=cn("award",iA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],ox=cn("car",sA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],oA=cn("check",rA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],cA=cn("copy",lA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Yx=cn("external-link",uA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],lx=cn("flame",fA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Gh=cn("github",dA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Zx=cn("key-round",hA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],mA=cn("linkedin",pA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],vA=cn("mail",gA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],_A=cn("navigation",xA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yA=cn("play",SA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],op=cn("radio",MA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Kx=cn("refresh-cw",bA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],TA=cn("send",EA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],wA=cn("shield-alert",AA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],CA=cn("shield-check",RA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],DA=cn("shield",NA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hh=cn("sparkles",UA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],cx=cn("terminal",LA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],PA=cn("triangle-alert",OA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],FA=cn("volume-2",IA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],BA=cn("volume-x",zA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],HA=cn("x",GA),VA=({telemetry:r,phase:e,exhibits:i,nearExhibit:s,onInspectExhibit:l,onResetCar:c,onJumpToSafehouse:d,onOpenBriefing:p,onControlsChange:m})=>{var N,F,U,P;const[h,S]=yt.useState(!1),_=i.filter(M=>M.stolen).length,g=i.length,T=()=>{Nn.init(),Nn.resume();const M=!h;S(M),Nn.setMuted(M)},D=_===g?{badge:"ESCAPE ACTIVE",phaseTag:"PHASE 04: SAFEHOUSE EXTRACTION",objective:"Speed to the south underground tunnel exit!",statusColor:"text-[#00f2ff]",badgeBg:"bg-[#00f2ff] text-black",icon:w.jsx(CA,{className:"w-4 h-4 text-[#00f2ff] animate-pulse"})}:_>0?{badge:"ALARM ACTIVE",phaseTag:`PHASE 03: HEIST IN PROGRESS (${_}/${g})`,objective:"Steal remaining masterpieces or speed to the safehouse.",statusColor:"text-[#F27D26]",badgeBg:"bg-[#F27D26] text-black",icon:w.jsx(PA,{className:"w-4 h-4 text-[#F27D26] animate-bounce"})}:{badge:"LIVE HEIST",phaseTag:"PHASE 01: THE BREAK-IN",objective:"SMASH THE GLASS PYRAMID & INFILTRATE WINGS",statusColor:"text-[#00f2ff]",badgeBg:"bg-[#F27D26] text-black",icon:w.jsx(op,{className:"w-4 h-4 text-[#00f2ff] animate-pulse"})},x=Math.min(1,Math.max(0,r.speed/200)),I=Math.min(1,Math.max(0,(r.rpm-800)/6200)),G=Math.ceil(I*5);return w.jsxs("div",{className:"pointer-events-none absolute inset-0 select-none z-10 flex flex-col justify-between p-4 sm:p-7 font-sans text-white",children:[w.jsx("div",{className:"absolute inset-0 scanline opacity-20 pointer-events-none"}),w.jsxs("div",{className:"flex items-start justify-between gap-4 w-full z-20",children:[w.jsxs("div",{className:"space-y-1",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:`px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter ${D.badgeBg}`,children:D.badge}),w.jsx("div",{className:"text-xs font-mono text-[#00f2ff] opacity-80 flex items-center gap-1",children:"LOC: 48.8606° N, 2.3376° E"})]}),w.jsx("h1",{className:"text-2xl sm:text-4xl font-black italic tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]",children:D.phaseTag}),w.jsxs("div",{className:"flex items-center gap-2 text-neutral-400 text-xs font-medium tracking-widest",children:[w.jsx("span",{className:"text-[#F27D26] uppercase font-bold",children:"Objective:"}),w.jsx("span",{className:"text-neutral-200 uppercase",children:D.objective})]})]}),w.jsxs("div",{className:"flex flex-col items-end gap-2.5 pointer-events-auto",children:[w.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[w.jsxs("div",{className:"glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-right shadow-2xl border-white/10",children:[w.jsx("div",{className:"text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-medium",children:"Stolen Artwork"}),w.jsxs("div",{className:"text-lg sm:text-2xl font-mono font-black text-[#F27D26]",children:[_," ",w.jsxs("span",{className:"text-xs text-neutral-500 font-normal",children:["/ 0",g]})]})]}),w.jsxs("div",{className:"glass px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-right shadow-2xl border-white/10 hidden xs:block",children:[w.jsx("div",{className:"text-[9px] uppercase tracking-widest text-neutral-400 font-mono font-medium",children:"Bounty Status"}),w.jsx("div",{className:"text-lg sm:text-2xl font-mono font-black text-[#00f2ff]",children:_===g?"UNLOCKED":_>0?"PARTIAL":"SECURED"})]})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("button",{id:"audio-toggle-btn",onClick:T,className:"glass hover:bg-neutral-800/80 text-neutral-200 p-2 sm:p-2.5 rounded-xl border border-white/10 backdrop-blur-md transition-all hover:scale-105 cursor-pointer",title:h?"Unmute Audio":"Mute Audio",children:h?w.jsx(BA,{className:"w-4 h-4 text-red-400"}):w.jsx(FA,{className:"w-4 h-4 text-[#00f2ff]"})}),w.jsxs("button",{id:"reset-car-btn",onClick:c,className:"glass hover:bg-neutral-800/80 text-neutral-300 px-3 py-2 sm:py-2.5 rounded-xl border border-white/10 backdrop-blur-md transition-all hover:scale-105 cursor-pointer text-xs font-mono flex items-center gap-1.5",title:"Reset Getaway Car Position",children:[w.jsx(Kx,{className:"w-3.5 h-3.5 text-neutral-400"}),w.jsx("span",{className:"hidden sm:inline",children:"Reset Car"})]}),w.jsxs("button",{id:"safehouse-btn",onClick:d,className:"glass hover:bg-[#F27D26]/20 text-[#F27D26] border border-[#F27D26]/40 px-3.5 py-2 sm:py-2.5 rounded-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_20px_rgba(242,125,38,0.25)]",title:"Open Safehouse Repositories",children:[w.jsx(Zx,{className:"w-3.5 h-3.5 text-[#F27D26]"}),w.jsx("span",{children:"Safehouse"})]}),w.jsx("button",{id:"briefing-btn",onClick:p,className:"glass hover:bg-neutral-800/80 text-neutral-300 p-2 sm:p-2.5 rounded-xl border border-white/10 backdrop-blur-md transition-all hover:scale-105 cursor-pointer text-xs font-mono",title:"Mission Briefing & Controls",children:"ℹ️"})]})]})]}),s&&w.jsxs("div",{className:"self-center pointer-events-auto z-30 flex flex-col items-center gap-3 animate-fadeIn",children:[w.jsxs("div",{className:"flex flex-col items-center gap-1.5 animate-pulse",children:[w.jsx("div",{className:"w-12 h-12 border-2 border-[#F27D26] rotate-45 flex items-center justify-center bg-black/40 shadow-[0_0_25px_rgba(242,125,38,0.5)]",children:w.jsx("div",{className:"text-xl font-black -rotate-45 text-[#F27D26]",children:"!"})}),w.jsx("div",{className:"text-xs font-black tracking-[0.3em] text-[#F27D26] uppercase",children:s.stolen?"Target Looted":"Target Locked"})]}),w.jsxs("button",{id:`inspect-${s.id}-btn`,onClick:()=>l(s),className:"glass-accent hover:border-[#F27D26] px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_40px_rgba(242,125,38,0.35)] hover:scale-105 transition-all cursor-pointer group",children:[w.jsx("span",{className:"w-6 h-6 rounded-full bg-[#F27D26] text-black font-black text-xs flex items-center justify-center font-mono",children:"E"}),w.jsx("span",{className:"text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-neutral-100 group-hover:text-[#F27D26] transition-colors",children:s.stolen?`Review [${s.exhibitTitle}]`:`Inspect [${s.exhibitTitle}]`})]})]}),w.jsxs("div",{className:"flex items-end justify-between gap-4 w-full z-20",children:[w.jsxs("div",{className:"flex items-end gap-6 sm:gap-8",children:[w.jsxs("div",{className:"relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center",children:[w.jsxs("svg",{className:"absolute inset-0 w-full h-full transform -rotate-225",children:[w.jsx("circle",{cx:"50%",cy:"50%",r:"45%",fill:"none",stroke:"#151520",strokeWidth:"6"}),w.jsx("circle",{cx:"50%",cy:"50%",r:"45%",fill:"none",stroke:"#F27D26",strokeWidth:"8",strokeDasharray:"300",strokeDashoffset:300-300*.75*x,strokeLinecap:"round",className:"transition-all duration-75"})]}),w.jsxs("div",{className:"flex flex-col items-center",children:[w.jsx("div",{className:"text-3xl sm:text-4xl font-black italic tracking-tighter text-white",children:r.speed}),w.jsx("div",{className:"text-[9px] font-bold text-neutral-400 tracking-widest uppercase",children:"KM/H"})]})]}),w.jsxs("div",{className:"mb-2 sm:mb-3 space-y-3 font-mono",children:[w.jsxs("div",{className:"flex items-baseline gap-2",children:[w.jsxs("div",{children:[w.jsx("div",{className:"text-[9px] text-neutral-400 font-bold uppercase tracking-wider",children:"Gear"}),w.jsx("div",{className:"text-2xl sm:text-3xl font-black text-[#F27D26] leading-none",children:r.gear})]}),r.isDrifting&&w.jsx("div",{className:"px-2 py-0.5 rounded bg-[#F27D26]/20 border border-[#F27D26] text-[#F27D26] text-[10px] font-black uppercase tracking-wider animate-pulse",children:"DRIFT"})]}),w.jsxs("div",{className:"flex flex-col gap-1",children:[w.jsx("div",{className:"text-[9px] text-neutral-400 font-bold uppercase tracking-wider",children:"RPM"}),w.jsx("div",{className:"flex gap-1 items-center",children:[1,2,3,4,5].map(M=>w.jsx("div",{className:`w-3 h-1.5 rounded-xs transition-colors duration-75 ${M<=G?M===5?"bg-red-500 shadow-[0_0_8px_red]":"bg-[#F27D26] shadow-[0_0_6px_#F27D26]":"bg-neutral-800"}`},M))})]}),w.jsxs("div",{className:"flex flex-col gap-1 w-20 sm:w-24",children:[w.jsxs("div",{className:"flex items-center justify-between text-[9px] font-bold text-[#00f2ff]",children:[w.jsxs("span",{className:"flex items-center gap-0.5",children:[w.jsx(lx,{className:"w-3 h-3 text-[#00f2ff]"})," NOS"]}),w.jsxs("span",{children:[r.boost,"%"]})]}),w.jsx("div",{className:"w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden border border-white/10",children:w.jsx("div",{className:"h-full bg-gradient-to-r from-[#00f2ff] to-[#F27D26] transition-all duration-75",style:{width:`${r.boost}%`}})})]})]})]}),w.jsxs("div",{className:"hidden md:flex glass w-48 h-48 rounded-2xl overflow-hidden relative border-white/10 p-3 flex-col justify-between shadow-2xl",children:[w.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:"linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",backgroundSize:"16px 16px"}}),w.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00f2ff]/20 rounded-full"}),w.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#00f2ff]/10 rounded-full"}),w.jsxs("div",{className:"relative w-full h-full flex items-center justify-center",children:[w.jsx("div",{className:"absolute top-1 left-1/2 -translate-x-1/2 text-[7px] font-mono font-bold text-[#00f2ff] uppercase tracking-wider",children:"SAFEHOUSE EXIT"}),w.jsx("div",{className:`absolute top-4 left-4 w-2.5 h-2.5 rounded-sm border ${(N=i[0])!=null&&N.stolen?"bg-[#00f2ff] border-[#00f2ff] shadow-[0_0_8px_#00f2ff]":"bg-[#F27D26] border-[#F27D26] shadow-[0_0_8px_#F27D26]"}`,title:"Wing A"}),w.jsx("div",{className:`absolute bottom-6 left-4 w-2.5 h-2.5 rounded-sm border ${(F=i[1])!=null&&F.stolen?"bg-[#00f2ff] border-[#00f2ff] shadow-[0_0_8px_#00f2ff]":"bg-[#F27D26] border-[#F27D26] shadow-[0_0_8px_#F27D26]"}`,title:"Wing B"}),w.jsx("div",{className:`absolute top-4 right-4 w-2.5 h-2.5 rounded-sm border ${(U=i[2])!=null&&U.stolen?"bg-[#00f2ff] border-[#00f2ff] shadow-[0_0_8px_#00f2ff]":"bg-[#F27D26] border-[#F27D26] shadow-[0_0_8px_#F27D26]"}`,title:"Wing C"}),w.jsx("div",{className:`absolute bottom-6 right-4 w-2.5 h-2.5 rounded-sm border ${(P=i[3])!=null&&P.stolen?"bg-[#00f2ff] border-[#00f2ff] shadow-[0_0_8px_#00f2ff]":"bg-[#F27D26] border-[#F27D26] shadow-[0_0_8px_#F27D26]"}`,title:"Wing D"}),w.jsx("div",{className:"w-3.5 h-3.5 bg-[#F27D26] rounded shadow-[0_0_15px_#F27D26] rotate-45 animate-pulse"})]}),w.jsxs("div",{className:"relative text-[9px] font-black uppercase text-[#00f2ff] tracking-widest font-mono flex items-center gap-1",children:[w.jsx(_A,{className:"w-3 h-3 text-[#00f2ff]"}),"Radar // Grand Gallery"]})]}),w.jsxs("div",{className:"hidden lg:flex glass px-4 py-3 rounded-2xl border-white/10 shadow-2xl flex-col text-[11px] text-neutral-400 gap-1 font-mono",children:[w.jsx("div",{className:"text-[10px] text-neutral-300 font-bold uppercase tracking-wider mb-0.5",children:"Operative Controls"}),w.jsxs("div",{children:[w.jsx("span",{className:"text-white font-bold bg-neutral-800/80 px-1.5 py-0.5 rounded mr-1",children:"WASD / ↑↓←→"})," Drive & Steer"]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-[#00f2ff] font-bold bg-neutral-800/80 px-1.5 py-0.5 rounded mr-1",children:"SHIFT"})," Nitro NOS"]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-[#F27D26] font-bold bg-neutral-800/80 px-1.5 py-0.5 rounded mr-1",children:"SPACE"})," Handbrake Drift"]}),w.jsxs("div",{children:[w.jsx("span",{className:"text-amber-300 font-bold bg-neutral-800/80 px-1.5 py-0.5 rounded mr-1",children:"E"})," Inspect Masterpiece"]})]})]}),w.jsxs("div",{className:"lg:hidden flex justify-between items-end w-full pt-3 pointer-events-auto z-20",children:[w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onTouchStart:()=>m(M=>({...M,left:!0})),onTouchEnd:()=>m(M=>({...M,left:!1})),onMouseDown:()=>m(M=>({...M,left:!0})),onMouseUp:()=>m(M=>({...M,left:!1})),className:"w-13 h-13 rounded-2xl glass border-white/10 text-white font-bold text-xl active:bg-[#00f2ff]/30 flex items-center justify-center shadow-xl",children:"◀"}),w.jsx("button",{onTouchStart:()=>m(M=>({...M,right:!0})),onTouchEnd:()=>m(M=>({...M,right:!1})),onMouseDown:()=>m(M=>({...M,right:!0})),onMouseUp:()=>m(M=>({...M,right:!1})),className:"w-13 h-13 rounded-2xl glass border-white/10 text-white font-bold text-xl active:bg-[#00f2ff]/30 flex items-center justify-center shadow-xl",children:"▶"})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsxs("button",{onTouchStart:()=>m(M=>({...M,boost:!0})),onTouchEnd:()=>m(M=>({...M,boost:!1})),onMouseDown:()=>m(M=>({...M,boost:!0})),onMouseUp:()=>m(M=>({...M,boost:!1})),className:"w-12 h-12 rounded-xl glass border-[#00f2ff]/40 text-[#00f2ff] font-bold text-xs flex flex-col items-center justify-center active:bg-[#00f2ff]/30 shadow-xl",children:[w.jsx(lx,{className:"w-3.5 h-3.5"}),w.jsx("span",{children:"NOS"})]}),w.jsx("button",{onTouchStart:()=>m(M=>({...M,handbrake:!0})),onTouchEnd:()=>m(M=>({...M,handbrake:!1})),onMouseDown:()=>m(M=>({...M,handbrake:!0})),onMouseUp:()=>m(M=>({...M,handbrake:!1})),className:"w-12 h-12 rounded-xl glass border-[#F27D26]/40 text-[#F27D26] font-bold text-xs flex items-center justify-center active:bg-[#F27D26]/30 shadow-xl",children:"DRIFT"}),w.jsx("button",{onTouchStart:()=>m(M=>({...M,backward:!0})),onTouchEnd:()=>m(M=>({...M,backward:!1})),onMouseDown:()=>m(M=>({...M,backward:!0})),onMouseUp:()=>m(M=>({...M,backward:!1})),className:"w-13 h-13 rounded-2xl glass border-red-500/40 text-red-400 font-bold text-sm flex items-center justify-center active:bg-red-500/30 shadow-xl",children:"BRAKE"}),w.jsx("button",{onTouchStart:()=>m(M=>({...M,forward:!0})),onTouchEnd:()=>m(M=>({...M,forward:!1})),onMouseDown:()=>m(M=>({...M,forward:!0})),onMouseUp:()=>m(M=>({...M,forward:!1})),className:"w-14 h-14 rounded-2xl glass border-[#F27D26] bg-[#F27D26] text-black font-extrabold text-base flex items-center justify-center active:scale-95 shadow-[0_0_20px_rgba(242,125,38,0.4)]",children:"GAS"})]})]})]})};var lp={};(function r(e,i,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",p=(function(){if(!e.OffscreenCanvas)return!1;try{var B=new OffscreenCanvas(1,1),b=B.getContext("2d");b.fillRect(0,0,1,1);var V=B.transferToImageBitmap();b.createPattern(V,"no-repeat")}catch{return!1}return!0})();function m(){}function h(B){var b=i.exports.Promise,V=b!==void 0?b:e.Promise;return typeof V=="function"?new V(B):(B(m,m),null)}var S=(function(B,b){return{transform:function(V){if(B)return V;if(b.has(V))return b.get(V);var fe=new OffscreenCanvas(V.width,V.height),Se=fe.getContext("2d");return Se.drawImage(V,0,0),b.set(V,fe),fe},clear:function(){b.clear()}}})(p,new Map),_=(function(){var B=Math.floor(16.666666666666668),b,V,fe={},Se=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(Ee){var Z=Math.random();return fe[Z]=requestAnimationFrame(function oe(pe){Se===pe||Se+B-1<pe?(Se=pe,delete fe[Z],Ee()):fe[Z]=requestAnimationFrame(oe)}),Z},V=function(Ee){fe[Ee]&&cancelAnimationFrame(fe[Ee])}):(b=function(Ee){return setTimeout(Ee,B)},V=function(Ee){return clearTimeout(Ee)}),{frame:b,cancel:V}})(),g=(function(){var B,b,V={};function fe(Se){function Ee(Z,oe){Se.postMessage({options:Z||{},callback:oe})}Se.init=function(oe){var pe=oe.transferControlToOffscreen();Se.postMessage({canvas:pe},[pe])},Se.fire=function(oe,pe,Ne){if(b)return Ee(oe,null),b;var ke=Math.random().toString(36).slice(2);return b=h(function(Pe){function st($e){$e.data.callback===ke&&(delete V[ke],Se.removeEventListener("message",st),b=null,S.clear(),Ne(),Pe())}Se.addEventListener("message",st),Ee(oe,ke),V[ke]=st.bind(null,{data:{callback:ke}})}),b},Se.reset=function(){Se.postMessage({reset:!0});for(var oe in V)V[oe](),delete V[oe]}}return function(){if(B)return B;if(!s&&c){var Se=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{B=new Worker(URL.createObjectURL(new Blob([Se])))}catch(Ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Ee),null}fe(B)}return B}})(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(B,b){return b?b(B):B}function D(B){return B!=null}function y(B,b,V){return A(B&&D(B[b])?B[b]:T[b],V)}function x(B){return B<0?0:Math.floor(B)}function I(B,b){return Math.floor(Math.random()*(b-B))+B}function G(B){return parseInt(B,16)}function N(B){return B.map(F)}function F(B){var b=String(B).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:G(b.substring(0,2)),g:G(b.substring(2,4)),b:G(b.substring(4,6))}}function U(B){var b=y(B,"origin",Object);return b.x=y(b,"x",Number),b.y=y(b,"y",Number),b}function P(B){B.width=document.documentElement.clientWidth,B.height=document.documentElement.clientHeight}function M(B){var b=B.getBoundingClientRect();B.width=b.width,B.height=b.height}function O(B){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=B,b}function Y(B,b,V,fe,Se,Ee,Z,oe,pe){B.save(),B.translate(b,V),B.rotate(Ee),B.scale(fe,Se),B.arc(0,0,1,Z,oe,pe),B.restore()}function H(B){var b=B.angle*(Math.PI/180),V=B.spread*(Math.PI/180);return{x:B.x,y:B.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:B.startVelocity*.5+Math.random()*B.startVelocity,angle2D:-b+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:B.color,shape:B.shape,tick:0,totalTicks:B.ticks,decay:B.decay,drift:B.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:B.gravity*3,ovalScalar:.6,scalar:B.scalar,flat:B.flat}}function j(B,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var V=b.tick++/b.totalTicks,fe=b.x+b.random*b.tiltCos,Se=b.y+b.random*b.tiltSin,Ee=b.wobbleX+b.random*b.tiltCos,Z=b.wobbleY+b.random*b.tiltSin;if(B.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-V)+")",B.beginPath(),d&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))B.fill(X(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(Ee-fe)*.1,Math.abs(Z-Se)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var oe=Math.PI/10*b.wobble,pe=Math.abs(Ee-fe)*.1,Ne=Math.abs(Z-Se)*.1,ke=b.shape.bitmap.width*b.scalar,Pe=b.shape.bitmap.height*b.scalar,st=new DOMMatrix([Math.cos(oe)*pe,Math.sin(oe)*pe,-Math.sin(oe)*Ne,Math.cos(oe)*Ne,b.x,b.y]);st.multiplySelf(new DOMMatrix(b.shape.matrix));var $e=B.createPattern(S.transform(b.shape.bitmap),"no-repeat");$e.setTransform(st),B.globalAlpha=1-V,B.fillStyle=$e,B.fillRect(b.x-ke/2,b.y-Pe/2,ke,Pe),B.globalAlpha=1}else if(b.shape==="circle")B.ellipse?B.ellipse(b.x,b.y,Math.abs(Ee-fe)*b.ovalScalar,Math.abs(Z-Se)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):Y(B,b.x,b.y,Math.abs(Ee-fe)*b.ovalScalar,Math.abs(Z-Se)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var qe=Math.PI/2*3,rt=4*b.scalar,ot=8*b.scalar,Mt=b.x,It=b.y,Bt=5,Ut=Math.PI/Bt;Bt--;)Mt=b.x+Math.cos(qe)*ot,It=b.y+Math.sin(qe)*ot,B.lineTo(Mt,It),qe+=Ut,Mt=b.x+Math.cos(qe)*rt,It=b.y+Math.sin(qe)*rt,B.lineTo(Mt,It),qe+=Ut;else B.moveTo(Math.floor(b.x),Math.floor(b.y)),B.lineTo(Math.floor(b.wobbleX),Math.floor(Se)),B.lineTo(Math.floor(Ee),Math.floor(Z)),B.lineTo(Math.floor(fe),Math.floor(b.wobbleY));return B.closePath(),B.fill(),b.tick<b.totalTicks}function he(B,b,V,fe,Se){var Ee=b.slice(),Z=B.getContext("2d"),oe,pe,Ne=h(function(ke){function Pe(){oe=pe=null,Z.clearRect(0,0,fe.width,fe.height),S.clear(),Se(),ke()}function st(){s&&!(fe.width===l.width&&fe.height===l.height)&&(fe.width=B.width=l.width,fe.height=B.height=l.height),!fe.width&&!fe.height&&(V(B),fe.width=B.width,fe.height=B.height),Z.clearRect(0,0,fe.width,fe.height),Ee=Ee.filter(function($e){return j(Z,$e)}),Ee.length?oe=_.frame(st):Pe()}oe=_.frame(st),pe=Pe});return{addFettis:function(ke){return Ee=Ee.concat(ke),Ne},canvas:B,promise:Ne,reset:function(){oe&&_.cancel(oe),pe&&pe()}}}function ae(B,b){var V=!B,fe=!!y(b||{},"resize"),Se=!1,Ee=y(b,"disableForReducedMotion",Boolean),Z=c&&!!y(b||{},"useWorker"),oe=Z?g():null,pe=V?P:M,Ne=B&&oe?!!B.__confetti_initialized:!1,ke=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Pe;function st(qe,rt,ot){for(var Mt=y(qe,"particleCount",x),It=y(qe,"angle",Number),Bt=y(qe,"spread",Number),Ut=y(qe,"startVelocity",Number),Zt=y(qe,"decay",Number),Wt=y(qe,"gravity",Number),Q=y(qe,"drift",Number),Ft=y(qe,"colors",N),At=y(qe,"ticks",Number),L=y(qe,"shapes"),E=y(qe,"scalar"),$=!!y(qe,"flat"),te=U(qe),ge=Mt,De=[],Ie=B.width*te.x,ve=B.height*te.y;ge--;)De.push(H({x:Ie,y:ve,angle:It,spread:Bt,startVelocity:Ut,color:Ft[ge%Ft.length],shape:L[I(0,L.length)],ticks:At,decay:Zt,gravity:Wt,drift:Q,scalar:E,flat:$}));return Pe?Pe.addFettis(De):(Pe=he(B,De,pe,rt,ot),Pe.promise)}function $e(qe){var rt=Ee||y(qe,"disableForReducedMotion",Boolean),ot=y(qe,"zIndex",Number);if(rt&&ke)return h(function(Ut){Ut()});V&&Pe?B=Pe.canvas:V&&!B&&(B=O(ot),document.body.appendChild(B)),fe&&!Ne&&pe(B);var Mt={width:B.width,height:B.height};oe&&!Ne&&oe.init(B),Ne=!0,oe&&(B.__confetti_initialized=!0);function It(){if(oe){var Ut={getBoundingClientRect:function(){if(!V)return B.getBoundingClientRect()}};pe(Ut),oe.postMessage({resize:{width:Ut.width,height:Ut.height}});return}Mt.width=Mt.height=null}function Bt(){Pe=null,fe&&(Se=!1,e.removeEventListener("resize",It)),V&&B&&(document.body.contains(B)&&document.body.removeChild(B),B=null,Ne=!1)}return fe&&!Se&&(Se=!0,e.addEventListener("resize",It,!1)),oe?oe.fire(qe,Mt,Bt):st(qe,Mt,Bt)}return $e.reset=function(){oe&&oe.reset(),Pe&&Pe.reset()},$e}var J;function z(){return J||(J=ae(null,{useWorker:!0,resize:!0})),J}function X(B,b,V,fe,Se,Ee,Z){var oe=new Path2D(B),pe=new Path2D;pe.addPath(oe,new DOMMatrix(b));var Ne=new Path2D;return Ne.addPath(pe,new DOMMatrix([Math.cos(Z)*Se,Math.sin(Z)*Se,-Math.sin(Z)*Ee,Math.cos(Z)*Ee,V,fe])),Ne}function ie(B){if(!d)throw new Error("path confetti are not supported in this browser");var b,V;typeof B=="string"?b=B:(b=B.path,V=B.matrix);var fe=new Path2D(b),Se=document.createElement("canvas"),Ee=Se.getContext("2d");if(!V){for(var Z=1e3,oe=Z,pe=Z,Ne=0,ke=0,Pe,st,$e=0;$e<Z;$e+=2)for(var qe=0;qe<Z;qe+=2)Ee.isPointInPath(fe,$e,qe,"nonzero")&&(oe=Math.min(oe,$e),pe=Math.min(pe,qe),Ne=Math.max(Ne,$e),ke=Math.max(ke,qe));Pe=Ne-oe,st=ke-pe;var rt=10,ot=Math.min(rt/Pe,rt/st);V=[ot,0,0,ot,-Math.round(Pe/2+oe)*ot,-Math.round(st/2+pe)*ot]}return{type:"path",path:b,matrix:V}}function _e(B){var b,V=1,fe="#000000",Se='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof B=="string"?b=B:(b=B.text,V="scalar"in B?B.scalar:V,Se="fontFamily"in B?B.fontFamily:Se,fe="color"in B?B.color:fe);var Ee=10*V,Z=""+Ee+"px "+Se,oe=new OffscreenCanvas(Ee,Ee),pe=oe.getContext("2d");pe.font=Z;var Ne=pe.measureText(b),ke=Math.ceil(Ne.actualBoundingBoxRight+Ne.actualBoundingBoxLeft),Pe=Math.ceil(Ne.actualBoundingBoxAscent+Ne.actualBoundingBoxDescent),st=2,$e=Ne.actualBoundingBoxLeft+st,qe=Ne.actualBoundingBoxAscent+st;ke+=st+st,Pe+=st+st,oe=new OffscreenCanvas(ke,Pe),pe=oe.getContext("2d"),pe.font=Z,pe.fillStyle=fe,pe.fillText(b,$e,qe);var rt=1/V;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[rt,0,0,rt,-ke*rt/2,-Pe*rt/2]}}i.exports=function(){return z().apply(this,arguments)},i.exports.reset=function(){z().reset()},i.exports.create=ae,i.exports.shapeFromPath=ie,i.exports.shapeFromText=_e})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),lp,!1);const kA=lp.exports;lp.exports.create;const XA=({exhibit:r,onClose:e,onStealArtwork:i})=>{const[s,l]=yt.useState("healthy"),[c,d]=yt.useState(!0),[p,m]=yt.useState(!1),[h,S]=yt.useState(!1),_=()=>{if(!r.stolen){try{kA({particleCount:80,spread:70,origin:{y:.6},colors:["#F27D26","#00f2ff","#fbbf24","#ffffff"]})}catch{}Nn.playLootChime(),i(r.id)}};return w.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn",children:[w.jsx("div",{className:"absolute inset-0 scanline opacity-20 pointer-events-none"}),w.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] glass-accent border border-[#F27D26]/40 rounded-2xl shadow-[0_0_80px_rgba(242,125,38,0.25)] overflow-hidden flex flex-col font-sans text-neutral-100",children:[w.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/80",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("span",{className:"text-2xl",children:"🏛️"}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"px-2 py-0.5 rounded text-[9px] font-black font-mono bg-[#F27D26] text-black uppercase tracking-tight",children:r.wingName}),w.jsxs("span",{className:"text-[10px] font-mono text-[#00f2ff] opacity-80",children:["CATEGORY: ",r.category]})]}),w.jsx("h2",{className:"text-xl sm:text-2xl font-black italic tracking-tighter text-white mt-0.5",children:r.exhibitTitle})]})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[r.stolen?w.jsxs("div",{className:"flex items-center gap-1.5 glass border-[#00f2ff]/40 text-[#00f2ff] text-xs px-3 py-1.5 rounded-xl font-mono font-bold",children:[w.jsx(wA,{className:"w-4 h-4 text-[#00f2ff]"}),w.jsx("span",{children:"SECURED IN LOOT BAG"})]}):w.jsxs("button",{id:"modal-steal-btn",onClick:_,className:"flex items-center gap-2 bg-[#F27D26] hover:bg-[#e06d1a] text-black font-black font-mono text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(242,125,38,0.4)] hover:scale-105 transition-all cursor-pointer",children:[w.jsx(Hh,{className:"w-4 h-4"}),w.jsx("span",{children:"STEAL ARTWORK"})]}),w.jsx("button",{id:"modal-close-btn",onClick:e,className:"p-2 rounded-xl glass hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer",children:w.jsx(HA,{className:"w-5 h-5"})})]})]}),w.jsxs("div",{className:"overflow-y-auto p-5 sm:p-7 space-y-6",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl glass border-white/5",children:[w.jsxs("div",{children:[w.jsx("div",{className:"text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest",children:"Underlying Project"}),w.jsx("div",{className:"text-xl sm:text-2xl font-black italic tracking-tight text-white",children:r.projectName}),w.jsx("div",{className:"text-sm font-medium mt-0.5 text-[#F27D26]",children:r.tagline})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("a",{href:r.githubUrl,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 text-xs font-mono font-bold glass hover:bg-neutral-800 text-white px-3.5 py-2 rounded-lg border-white/10 transition-colors",children:[w.jsx(Gh,{className:"w-4 h-4 text-neutral-300"})," Repo"]}),r.liveDemoUrl&&w.jsxs("a",{href:r.liveDemoUrl,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 text-xs font-mono font-bold glass hover:bg-[#00f2ff]/20 text-[#00f2ff] border-[#00f2ff]/40 px-3.5 py-2 rounded-lg transition-colors",children:[w.jsx(Yx,{className:"w-4 h-4"})," Live Demo"]})]})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:r.metrics.map((g,T)=>w.jsxs("div",{className:"p-3.5 rounded-xl glass border-white/5 flex flex-col",children:[w.jsx("span",{className:"text-[10px] font-mono text-neutral-400 uppercase tracking-widest",children:g.label}),w.jsx("span",{className:"text-2xl font-black text-[#F27D26] mt-1 font-mono",children:g.value}),w.jsx("span",{className:"text-[11px] text-neutral-400 mt-1 font-sans",children:g.detail})]},T))}),w.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl glass border-white/10 space-y-3",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono uppercase text-neutral-200 font-bold",children:[w.jsx(nA,{className:"w-4 h-4 text-[#00f2ff]"}),w.jsx("span",{children:"Live Interactive Architecture Simulation"})]}),w.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:"REAL-TIME SANDBOX"})]}),r.interactiveType==="cloud_failover"&&w.jsxs("div",{className:"space-y-3 pt-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-neutral-300",children:[w.jsx("span",{children:"Simulate Regional Cloud Disaster:"}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>l("healthy"),className:`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${s==="healthy"?"bg-[#00f2ff] text-black font-black":"glass text-neutral-400"}`,children:"3-AZ Healthy (100%)"}),w.jsx("button",{onClick:()=>l("az1_down"),className:`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${s==="az1_down"?"bg-red-600 text-white font-black":"glass text-neutral-400"}`,children:"Kill AZ us-east-1a"})]})]}),w.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono",children:[w.jsxs("div",{className:`p-3 rounded-lg border ${s==="az1_down"?"bg-red-950/60 border-red-500 text-red-300":"glass border-[#00f2ff]/30 text-[#00f2ff]"}`,children:[w.jsx("div",{className:"font-bold",children:"us-east-1a"}),w.jsx("div",{className:"text-[10px] text-neutral-400 mt-1",children:s==="az1_down"?"🛑 OUTAGE (0 req/s)":"✅ Active (4,800 req/s)"})]}),w.jsxs("div",{className:"p-3 rounded-lg glass border-[#00f2ff]/30 text-[#00f2ff]",children:[w.jsx("div",{className:"font-bold",children:"us-east-1b"}),w.jsx("div",{className:"text-[10px] text-neutral-400 mt-1",children:s==="az1_down"?"⚡ Surge (7,200 req/s)":"✅ Active (4,700 req/s)"})]}),w.jsxs("div",{className:"p-3 rounded-lg glass border-[#00f2ff]/30 text-[#00f2ff]",children:[w.jsx("div",{className:"font-bold",children:"us-east-1c"}),w.jsx("div",{className:"text-[10px] text-neutral-400 mt-1",children:s==="az1_down"?"⚡ Surge (7,000 req/s)":"✅ Active (4,700 req/s)"})]})]}),w.jsxs("div",{className:"text-xs text-neutral-300 glass p-2.5 rounded-lg border-white/5 flex items-center justify-between font-mono",children:[w.jsx("span",{children:"Route 53 Ingress Health Check:"}),w.jsx("span",{className:"font-bold text-[#00f2ff]",children:"0 PACKET LOSS // 99.99% Multi-AZ SLA ACTIVE"})]})]}),r.interactiveType==="jitter_filter"&&w.jsxs("div",{className:"space-y-3 pt-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-neutral-300",children:[w.jsx("span",{children:"1-Euro Adaptive Filter Pipeline:"}),w.jsx("button",{onClick:()=>d(!c),className:`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${c?"bg-[#F27D26] text-black font-black":"glass text-neutral-400"}`,children:c?"Filter: ENABLED":"Filter: DISABLED (Raw Noise)"})]}),w.jsx("div",{className:"h-18 glass rounded-lg border-white/5 relative overflow-hidden flex items-center justify-center p-2",children:w.jsxs("div",{className:"w-full flex items-center justify-around",children:[w.jsxs("div",{className:"text-center font-mono",children:[w.jsx("div",{className:"text-[9px] text-neutral-400 uppercase",children:"FPS"}),w.jsx("div",{className:"text-base font-black text-[#00f2ff]",children:"62.4"})]}),w.jsxs("div",{className:"text-center font-mono",children:[w.jsx("div",{className:"text-[9px] text-neutral-400 uppercase",children:"Inference Latency"}),w.jsx("div",{className:"text-base font-black text-purple-400",children:"11.4 ms"})]}),w.jsxs("div",{className:"text-center font-mono",children:[w.jsx("div",{className:"text-[9px] text-neutral-400 uppercase",children:"Spatial Jitter RMS"}),w.jsx("div",{className:"text-base font-black text-[#F27D26]",children:c?"0.04 mm":"4.82 mm (Noisy)"})]}),w.jsxs("div",{className:"text-center font-mono",children:[w.jsx("div",{className:"text-[9px] text-neutral-400 uppercase",children:"Certified Tests"}),w.jsx("div",{className:"text-base font-black text-emerald-400",children:"320 / 320 PASS"})]})]})})]}),r.interactiveType==="ai_benchmark"&&w.jsxs("div",{className:"space-y-3 pt-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-neutral-300",children:[w.jsx("span",{children:"Hardware Execution Profile:"}),w.jsx("button",{onClick:()=>{m(!0),setTimeout(()=>m(!1),900)},className:"px-3 py-1 rounded-lg bg-[#F27D26] hover:bg-[#e06d1a] text-black text-xs font-black font-mono transition-all",children:p?"Benchmarking Metal Shaders...":"Run Local NPU Benchmark"})]}),w.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs font-mono",children:[w.jsxs("div",{className:"p-3 glass rounded-lg border-white/5",children:[w.jsx("div",{className:"text-neutral-400",children:"Cloud API Model (Baseline)"}),w.jsx("div",{className:"text-base font-bold text-red-400 mt-1",children:"420ms Latency"}),w.jsx("div",{className:"text-[10px] text-neutral-500 mt-0.5",children:"$0.04/min API bill + Network Roundtrip"})]}),w.jsxs("div",{className:"p-3 glass rounded-lg border-[#00f2ff]/30",children:[w.jsx("div",{className:"text-[#00f2ff] font-bold",children:"M1 Metal INT4 Quantized"}),w.jsx("div",{className:"text-base font-black text-[#00f2ff] mt-1",children:"38ms Local Latency"}),w.jsx("div",{className:"text-[10px] text-neutral-300 mt-0.5",children:"$0.00 cost • 100% On-Device Privacy"})]})]})]}),r.interactiveType==="microservice_bus"&&w.jsxs("div",{className:"space-y-3 pt-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-neutral-300",children:[w.jsx("span",{children:"Simulate Strava Athlete GPS Event:"}),w.jsx("button",{onClick:()=>{S(!0),setTimeout(()=>S(!1),2e3)},className:"px-3 py-1 rounded-lg bg-[#F27D26] hover:bg-[#e06d1a] text-black text-xs font-black font-mono transition-all",children:h?"Kafka Processing Event...":"Trigger Strava Webhook"})]}),w.jsxs("div",{className:"p-3 glass rounded-lg border-white/5 font-mono text-xs space-y-1.5",children:[w.jsxs("div",{className:"text-neutral-400",children:["Payload: ",w.jsx("span",{className:"text-[#F27D26]",children:"`activity.create [5.2km Run, Campus Perimeter Poly]`"})]}),w.jsxs("div",{className:"text-neutral-400",children:["Verification: ",w.jsx("span",{className:"text-[#00f2ff]",children:"HMAC-SHA256 Signature Valid • Sub-45ms Pipeline"})]}),w.jsxs("div",{className:"text-neutral-400",children:["Outcome: ",w.jsx("span",{className:"text-emerald-400",children:"+50 Campus Quest Tokens Minted to Athlete Wallet"})]})]})]})]}),w.jsxs("div",{className:"space-y-3",children:[w.jsx("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-neutral-400",children:"System Architecture & Implementation"}),w.jsx("p",{className:"text-sm text-neutral-300 leading-relaxed font-sans",children:r.description}),w.jsxs("div",{className:"p-3.5 glass rounded-xl border-white/5 text-xs text-neutral-300 font-mono leading-relaxed",children:[w.jsx("span",{className:"text-[#00f2ff] font-bold",children:"Data Flow: "}),r.architectureOverview]})]}),w.jsxs("div",{className:"space-y-2",children:[w.jsx("div",{className:"text-xs font-mono font-bold uppercase tracking-wider text-neutral-400",children:"Technologies & Infrastructure"}),w.jsx("div",{className:"flex flex-wrap gap-2",children:r.techStack.map((g,T)=>w.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-mono font-medium glass border-white/10 text-neutral-200",children:g},T))})]})]}),w.jsxs("div",{className:"p-4 sm:p-5 border-t border-white/10 bg-neutral-950/80 flex flex-col sm:flex-row items-center justify-between gap-3",children:[w.jsx("div",{className:"text-xs text-neutral-400 font-mono",children:r.stolen?"✅ Evidence added to Operative inventory.":'Press "STEAL ARTWORK" to collect project dossier.'}),w.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[!r.stolen&&w.jsxs("button",{onClick:_,className:"w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#e06d1a] text-black font-black font-mono text-sm px-6 py-2.5 rounded-xl shadow-[0_0_20px_rgba(242,125,38,0.4)] hover:scale-105 transition-all cursor-pointer",children:[w.jsx(Hh,{className:"w-4 h-4"}),w.jsx("span",{children:"STEAL ARTWORK"})]}),w.jsx("button",{onClick:e,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl glass hover:bg-neutral-800 text-white font-mono text-xs font-bold transition-colors cursor-pointer",children:"Resume Drive [ESC]"})]})]})]})]})},In={name:"Thiagarajan Hariharan",codeName:"ARCHITECT-01",email:"Hariharan6124@gmail.com",title:"Enterprise Cloud Computing & AI Pipeline Engineer",location:"Republic Polytechnic // Singapore",bio:"Specialist in high-throughput cloud microservices, on-device kinematic vision engines, and low-latency local AI architectures.",github:"https://github.com/ThiagarajanHariharan",linkedin:"https://www.linkedin.com/in/thiagarajan-hariharan-274b48374",specialties:["Cloud-Native AWS EKS & Terraform","Edge Computer Vision & Pose Kinematics","Local On-Device AI/LLM Acceleration","Event-Driven Microservices & Kubernetes"]},ux=[{id:"wing-a-cloud-bastion",wing:"A",wingName:"Wing A: Cloud Architecture",exhibitTitle:"The Cloud Bastion",projectName:"Campus Found",tagline:"AWS EKS, Terraform & Zero-Downtime Multi-AZ Ingress",category:"Cloud Architecture",description:"Enterprise-grade cloud infrastructure orchestrating resilient lost-and-found matching services across multi-region clusters with automated failover and GitOps pipelines.",techStack:["AWS EKS","Terraform","Kubernetes","Istio Mesh","Prometheus","Grafana","Docker","PostgreSQL"],metrics:[{label:"Uptime SLA",value:"99.99%",detail:"Multi-AZ automated active-active failover"},{label:"Deployment Time",value:"1.8 min",detail:"Automated Terraform GitOps CI/CD pipeline"},{label:"Throughput",value:"14,200 req/s",detail:"Benchmarked with Istio ingress rate limiter"}],keyFeatures:["Modular Infrastructure as Code (IaC) via reusable Terraform workspaces","High-availability EKS cluster with pod auto-scaling (HPA) and cluster autoscaler","Zero-trust network policy enforcement using Cilium and Istio mutual TLS (mTLS)","Centralized telemetry observability with Prometheus scrape targets and Grafana dashboards"],architectureOverview:"Clients route through AWS Route 53 with latency-based routing into an Application Load Balancer (ALB). ALB delegates traffic to AWS EKS worker nodes running across three distinct Availability Zones (us-east-1a, 1b, 1c). Stateful database layers are replicated via RDS PostgreSQL multi-AZ replicas with automated read-write split.",githubUrl:"https://github.com/ThiagarajanHariharan/campus-found",liveDemoUrl:"https://campusfound.demo.app",interactiveType:"cloud_failover",themeColor:"#38bdf8",position:[-28,3.2,-18],rotation:Math.PI/2,stolen:!1,viewed:!1},{id:"wing-b-cyber-kinematic",wing:"B",wingName:"Wing B: Edge Computer Vision",exhibitTitle:"The Cyber Kinematic",projectName:"Quartermaster",tagline:"On-Device Pose Engine & 1-Euro Adaptive Jitter Filter",category:"Edge Computer Vision",description:"Ultra-low latency edge computer vision pipeline engineered for real-time anatomical keypoint tracking with 1-Euro adaptive smoothing filters and zero cloud telemetry dependency.",techStack:["ML Kit","TypeScript","WebAssembly","1-Euro Filter","OpenCV C++","WebGL","Jest (320 tests)"],metrics:[{label:"Inference Latency",value:"11.4 ms",detail:"Runs locally at 60+ FPS on mobile & edge devices"},{label:"Jitter Reduction",value:"94.2%",detail:"Dynamic cutoff frequency filter based on keypoint velocity"},{label:"Validation Suite",value:"320 Tests",detail:"100% passed kinematic angle consistency certification"}],keyFeatures:["Adaptive 1-Euro smoothing algorithm mitigating camera sensor noise without introducing visual lag","Full 33-point body landmark triangulation with joint constraint validation","WebAssembly-compiled geometric calculation routines for sub-millisecond execution","Comprehensive 320-scenario automated test suite certifying biomechanical edge cases"],architectureOverview:"Video frames capture from device camera -> passed directly to on-device WebAssembly/ML Kit inference pipeline -> 33 skeletal keypoints extracted -> raw 3D vectors passed into 1-Euro dual-phase adaptive filter -> verified against biomechanical joint angle boundaries -> rendered to canvas at 60 FPS.",githubUrl:"https://github.com/ThiagarajanHariharan/Quartermaster",liveDemoUrl:"https://quartermaster.demo.app",interactiveType:"jitter_filter",themeColor:"#a855f7",position:[-28,3.2,18],rotation:Math.PI/2,stolen:!1,viewed:!1},{id:"wing-c-silicon-oracle",wing:"C",wingName:"Wing C: Local AI Intelligence",exhibitTitle:"The Silicon Oracle",projectName:"M1 Edge AI Video Pipeline",tagline:"Whisper + Qwen2.5-VL Multimodal Segmentation",category:"Local AI Intelligence",description:"Hardware-accelerated local multimodal AI engine fusing automatic speech transcription with zero-shot video scene segmentation executing 100% on Apple Silicon & local NPUs.",techStack:["Whisper.cpp","Qwen2.5-VL","CoreML","Metal Performance Shaders","Python","ONNX Runtime","FFmpeg"],metrics:[{label:"Local Speedup",value:"4.8x",detail:"Metal 4-bit INT4 quantization vs baseline CPU"},{label:"Cloud Cost",value:"$0.00 / mo",detail:"Zero external API calls; zero data privacy leakage"},{label:"Audio-to-Text WER",value:"3.1%",detail:"Whisper medium quantized on edge memory footprint"}],keyFeatures:["Quantized 4-bit transformer execution running natively in under 3.2GB unified memory","Real-time audio timestamp synchronization aligning semantic video frame embeddings","Automatic keyframe scene graph extractor detecting objects, text OCR, and conversational context","Zero cloud dependency: protects user privacy while operating offline in air-gapped environments"],architectureOverview:"Raw video stream is demuxed into audio and visual tracks via FFmpeg. Audio track feeds Whisper.cpp Metal backend producing time-indexed transcripts. Video frames are sampled and embedded via Qwen2.5-VL vision encoder running on CoreML NPU. Cross-attention multimodal indexer maps transcript tokens to visual timestamps.",githubUrl:"https://github.com/ThiagarajanHariharan/autovideoclipper",liveDemoUrl:"https://silicon-oracle.demo.app",interactiveType:"ai_benchmark",themeColor:"#10b981",position:[28,3.2,-18],rotation:-Math.PI/2,stolen:!1,viewed:!1},{id:"wing-d-campus-quest",wing:"D",wingName:"Wing D: Microservices & Rewards",exhibitTitle:"The Campus Quest",projectName:"CampusQuest Go",tagline:"Kubernetes Microservices & Strava Fitness Rewards Engine",category:"Microservices & Rewards",description:"Distributed event-driven gamification platform that converts physical athletic activities into virtual campus tokens using real-time Strava webhooks and geofenced smart contracts.",techStack:["Go (Golang)","Kubernetes","Strava Webhook API","Apache Kafka","Redis Cluster","PostgreSQL","Docker"],metrics:[{label:"Event Processing",value:"< 45 ms",detail:"End-to-end Strava activity webhook to token mint"},{label:"Active Geofences",value:"1,200+",detail:"Sub-meter radius polygon collision validation"},{label:"Concurrent Users",value:"25,000+",detail:"Load tested with zero dropped Kafka messages"}],keyFeatures:["High-throughput Go microservices communicating over gRPC and Apache Kafka event streams","Cryptographic token minting verifying authentic Strava GPS telemetry coordinates against spoofing","Distributed Redis sliding-window rate limiter defending APIs from bot replay attacks","Dynamic leaderboards and reward redemption marketplace with transactional ACID guarantees"],architectureOverview:'Strava webhook events arrive at Go Ingestion Gateway -> verified with cryptographic HMAC-SHA256 signature -> published to Kafka "activity.raw" topic -> Geofence Validator worker performs spatial polygon intersections -> Token Mint Service calculates velocity-adjusted rewards -> Real-time WebSocket pushes update to client HUD.',githubUrl:"https://github.com/ThiagarajanHariharan/Campquest",liveDemoUrl:"https://campusquest.demo.app",interactiveType:"microservice_bus",themeColor:"#f59e0b",position:[28,3.2,18],rotation:-Math.PI/2,stolen:!1,viewed:!1}],WA=({exhibits:r,onReturnToCar:e,onRestartHeist:i,onStealAll:s})=>{const[l,c]=yt.useState(!1),[d,p]=yt.useState(""),[m,h]=yt.useState([">>> CONNECTING TO LOUVRE SAFEHOUSE RELAY NODE [PARIS-09]...",">>> DECRYPTING TRANSMISSION FROM THE AGENT...","------------------------------------------------------------------",'>>> AGENT DISPATCH: "Excellent work, operative. The deliverables have been secured."',">>> UNENCRYPTED ACCESS KEYS TO HARIHARAN'S REPOSITORIES GRANTED.","------------------------------------------------------------------",'Type "help" for a list of operative terminal commands.']),S=yt.useRef(null);yt.useEffect(()=>{Nn.playSafehouseUnlocked()},[]),yt.useEffect(()=>{var A;(A=S.current)==null||A.scrollIntoView({behavior:"smooth"})},[m]);const _=()=>{navigator.clipboard.writeText(In.email),c(!0),Nn.playKeyClick(),setTimeout(()=>c(!1),2500)},g=A=>{A.preventDefault();const D=d.trim().toLowerCase();if(!D)return;Nn.playKeyClick();const y=[...m,`$ ${d}`];if(D==="help")y.push("OPERATIVE CLI COMMANDS:","  projects    - List all 4 unencrypted engineering deliverables & GitHub repos","  contact     - Display Operative Hariharan direct contact coordinates & email","  skills      - Show core architectural skill matrix & credentials","  cat resume  - Read full operative curriculum vitae & technical track record","  steal-all   - Secure all 4 museum artworks immediately into loot bag","  freeroam    - Return to driver seat of getaway car in the Grand Gallery","  clear       - Wipe terminal stdout buffer");else if(D==="projects")y.push("=== UNLOCKED DELIVERABLES ==="),r.forEach((x,I)=>{y.push(`[${I+1}] ${x.projectName} (${x.category}) -> ${x.githubUrl}`)});else if(D==="contact")y.push(`OPERATIVE: ${In.name}`,`PRIMARY EMAIL: ${In.email}`,`LOCATION: ${In.location}`,`GITHUB: ${In.github}`,`LINKEDIN: ${In.linkedin}`);else if(D==="skills")y.push("CORE ARCHITECTURAL MATRIX:"),In.specialties.forEach(x=>y.push(`  • ${x}`));else if(D==="cat resume"||D==="resume")y.push(`OPERATIVE PROFILE: ${In.name} - ${In.title}`,"• 99.99% Multi-AZ Cloud Uptime Architectures (AWS EKS & Terraform)","• 60 FPS On-Device Kinematic Pose Tracking Engine (ML Kit, 1-Euro Filter)","• Local Privacy-Preserving Multimodal AI (Whisper & Qwen2.5-VL Quantization)","• High-Concurrency Kubernetes Microservices & Strava Telemetry Conversion");else if(D==="steal-all")s(),y.push(">>> 4 OF 4 MASTERPIECE DELIVERABLES SECURED IN LOOT BAG!");else if(D==="freeroam"||D==="drive"||D==="car"){e();return}else if(D==="clear"){h([]),p("");return}else y.push(`Command not recognized: "${D}". Type "help" for valid commands.`);h(y),p("")},T=r.filter(A=>A.stolen).length;return w.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl font-sans text-neutral-100 overflow-y-auto",children:[w.jsx("div",{className:"absolute inset-0 scanline opacity-25 pointer-events-none"}),w.jsxs("div",{className:"w-full max-w-5xl my-auto glass-accent border border-[#F27D26]/40 rounded-3xl shadow-[0_0_90px_rgba(242,125,38,0.25)] overflow-hidden flex flex-col",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 bg-neutral-950/80 border-b border-white/10",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 rounded-2xl bg-[#F27D26]/20 border border-[#F27D26]/50 flex items-center justify-center text-[#F27D26] shadow-[0_0_15px_rgba(242,125,38,0.3)]",children:w.jsx(DA,{className:"w-5 h-5"})}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("span",{className:"px-2 py-0.5 rounded text-[9px] font-black font-mono bg-[#F27D26] text-black uppercase tracking-tight flex items-center gap-1",children:[w.jsx(op,{className:"w-2.5 h-2.5"})," SECURE EXTRACTION"]}),w.jsx("span",{className:"text-[10px] font-mono text-[#00f2ff] opacity-80",children:"NODE: PARIS-09 // LAT: 48.8606° N"})]}),w.jsx("h1",{className:"text-xl sm:text-2xl font-black italic tracking-tighter text-white mt-0.5",children:"OPERATIVE DELIVERABLES VAULT"})]})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("button",{onClick:e,className:"flex items-center gap-2 glass hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm px-4 py-2 rounded-xl font-bold font-mono border-white/10 transition-colors cursor-pointer",children:[w.jsx(ox,{className:"w-4 h-4 text-[#00f2ff]"}),w.jsx("span",{children:"Return to Getaway Car"})]}),w.jsxs("button",{onClick:i,className:"flex items-center gap-1.5 glass hover:bg-neutral-800 text-neutral-400 hover:text-white text-xs px-3 py-2 rounded-xl border-white/10 transition-colors cursor-pointer font-mono",title:"Reset Heist and Play Again",children:[w.jsx(Kx,{className:"w-3.5 h-3.5"}),w.jsx("span",{className:"hidden sm:inline",children:"Replay Heist"})]})]})]}),w.jsxs("div",{className:"p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto",children:[w.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl glass border border-[#00f2ff]/30 relative",children:[w.jsxs("div",{className:"text-xs text-[#00f2ff] font-bold font-mono uppercase tracking-wider mb-1 flex items-center gap-2",children:[w.jsx(cx,{className:"w-4 h-4"}),w.jsx("span",{children:"Encrypted Transmission from The Agent"})]}),w.jsx("p",{className:"text-sm sm:text-base text-neutral-200 leading-relaxed font-sans italic",children:`"Excellent work, operative. The deliverables have been secured. Here are the unencrypted access keys to Hariharan's engineering repositories, architecture blueprints, and credentials."`})]}),w.jsxs("div",{className:"p-5 rounded-2xl glass border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsxs("span",{className:"px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-[#00f2ff]/20 text-[#00f2ff] border border-[#00f2ff]/40",children:["CODE: ",In.codeName]}),w.jsx("span",{className:"text-xs font-mono text-neutral-400",children:In.location})]}),w.jsx("h2",{className:"text-2xl sm:text-3xl font-black italic tracking-tight text-white mt-1",children:In.name}),w.jsx("p",{className:"text-xs sm:text-sm text-neutral-300 mt-1 font-sans max-w-xl",children:In.bio})]}),w.jsxs("div",{className:"flex flex-col sm:flex-row lg:flex-col gap-2 w-full lg:w-auto",children:[w.jsxs("button",{onClick:_,className:"flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#e06d1a] text-black font-black font-mono text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-[0_0_20px_rgba(242,125,38,0.35)] transition-all cursor-pointer",children:[l?w.jsx(oA,{className:"w-4 h-4"}):w.jsx(cA,{className:"w-4 h-4"}),w.jsx("span",{children:l?"Email Copied!":In.email})]}),w.jsxs("div",{className:"flex items-center gap-2 font-mono",children:[w.jsxs("a",{href:`mailto:${In.email}`,className:"flex-1 flex items-center justify-center gap-1.5 glass hover:bg-neutral-800 text-neutral-200 text-xs px-3 py-2 rounded-xl border-white/10 transition-colors",children:[w.jsx(vA,{className:"w-3.5 h-3.5 text-[#00f2ff]"})," Send Email"]}),w.jsxs("a",{href:In.github,target:"_blank",rel:"noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 glass hover:bg-neutral-800 text-neutral-200 text-xs px-3 py-2 rounded-xl border-white/10 transition-colors",children:[w.jsx(Gh,{className:"w-3.5 h-3.5 text-white"})," GitHub"]}),w.jsxs("a",{href:In.linkedin,target:"_blank",rel:"noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 glass hover:bg-neutral-800 text-neutral-200 text-xs px-3 py-2 rounded-xl border-white/10 transition-colors",children:[w.jsx(mA,{className:"w-3.5 h-3.5 text-[#00f2ff]"})," LinkedIn"]})]})]})]}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between mb-3",children:[w.jsxs("h3",{className:"text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2",children:[w.jsx(aA,{className:"w-4 h-4 text-[#F27D26]"}),w.jsxs("span",{children:["Secured Masterpiece Repositories (",T,"/4 Stolen)"]})]}),T<4&&w.jsxs("button",{onClick:s,className:"text-xs text-[#F27D26] hover:text-amber-300 font-mono font-bold underline flex items-center gap-1 cursor-pointer",children:[w.jsx(Hh,{className:"w-3.5 h-3.5"})," Unlock & Steal All 4"]})]}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.map(A=>w.jsxs("div",{className:"p-4 rounded-2xl glass border-white/5 hover:border-white/20 transition-all flex flex-col justify-between",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between gap-2",children:[w.jsx("span",{className:"text-[10px] font-mono font-bold uppercase tracking-wider text-[#F27D26]",children:A.wingName}),w.jsx("span",{className:`text-[9px] font-mono px-2 py-0.5 rounded font-bold ${A.stolen?"bg-[#00f2ff]/20 text-[#00f2ff] border border-[#00f2ff]/40":"glass text-neutral-400"}`,children:A.stolen?"✅ LOOT SECURED":"🟡 UNSECURED"})]}),w.jsx("h4",{className:"text-base font-black italic tracking-tight text-white mt-1",children:A.projectName}),w.jsx("p",{className:"text-xs text-neutral-400 font-sans mt-0.5 line-clamp-2",children:A.description}),w.jsx("div",{className:"flex flex-wrap gap-1.5 mt-3",children:A.techStack.slice(0,4).map((D,y)=>w.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded glass border-white/5 text-neutral-300",children:D},y))})]}),w.jsxs("div",{className:"flex items-center gap-2 mt-4 pt-3 border-t border-white/10 font-mono",children:[w.jsxs("a",{href:A.githubUrl,target:"_blank",rel:"noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 glass hover:bg-neutral-800 text-white text-xs font-bold py-2 rounded-xl border-white/10 transition-colors",children:[w.jsx(Gh,{className:"w-3.5 h-3.5"})," Repository"]}),A.liveDemoUrl&&w.jsxs("a",{href:A.liveDemoUrl,target:"_blank",rel:"noreferrer",className:"flex-1 flex items-center justify-center gap-1.5 glass hover:bg-[#00f2ff]/20 text-[#00f2ff] text-xs font-bold py-2 rounded-xl border-[#00f2ff]/40 transition-colors",children:[w.jsx(Yx,{className:"w-3.5 h-3.5"})," Live Demo"]})]})]},A.id))})]}),w.jsxs("div",{className:"rounded-2xl glass border-white/10 p-4 font-mono text-xs space-y-2",children:[w.jsxs("div",{className:"flex items-center justify-between text-neutral-500 pb-1 border-b border-white/5",children:[w.jsxs("span",{className:"flex items-center gap-1.5 text-[#00f2ff]",children:[w.jsx(cx,{className:"w-3.5 h-3.5"})," OPERATIVE TERMINAL CLI"]}),w.jsx("span",{className:"text-[10px]",children:"BASH 5.2 // SESSION ENCRYPTED"})]}),w.jsxs("div",{className:"h-44 overflow-y-auto space-y-1 text-neutral-300 scrollbar-thin",children:[m.map((A,D)=>w.jsx("div",{className:`${A.startsWith("$")?"text-[#F27D26] font-bold":A.startsWith(">>>")?"text-[#00f2ff]":"text-neutral-300"}`,children:A},D)),w.jsx("div",{ref:S})]}),w.jsxs("form",{onSubmit:g,className:"flex items-center gap-2 pt-2 border-t border-white/5",children:[w.jsx("span",{className:"text-[#F27D26] font-bold",children:"$"}),w.jsx("input",{type:"text",value:d,onChange:A=>p(A.target.value),placeholder:"Type 'help', 'projects', 'contact', 'skills', or 'freeroam'...",className:"flex-1 bg-transparent text-white focus:outline-none placeholder:text-neutral-600 font-mono text-xs"}),w.jsxs("button",{type:"submit",className:"px-3 py-1 rounded-lg bg-[#F27D26] hover:bg-[#e06d1a] text-black font-bold text-xs flex items-center gap-1 cursor-pointer",children:[w.jsx(TA,{className:"w-3 h-3"})," Run"]})]})]})]}),w.jsxs("div",{className:"p-4 sm:p-5 bg-neutral-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3",children:[w.jsxs("div",{className:"text-xs text-neutral-400 font-mono",children:["Direct operative coordinates: ",w.jsx("span",{className:"text-[#F27D26] font-bold",children:In.email})]}),w.jsx("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:w.jsxs("button",{onClick:e,className:"w-full sm:w-auto flex items-center justify-center gap-2 bg-[#F27D26] hover:bg-[#e06d1a] text-black font-black font-mono text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-[0_0_20px_rgba(242,125,38,0.35)] transition-all cursor-pointer",children:[w.jsx(ox,{className:"w-4 h-4"}),w.jsx("span",{children:"Resume Getaway Drive"})]})})]})]})]})},qA=({onStart:r,onDirectSafehouse:e})=>{const i=()=>{Nn.init(),Nn.resume(),r()},s=()=>{Nn.init(),Nn.resume(),e()};return w.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl font-sans text-neutral-100 overflow-y-auto",children:[w.jsx("div",{className:"absolute inset-0 scanline opacity-30 pointer-events-none"}),w.jsxs("div",{className:"relative w-full max-w-3xl my-auto glass-accent border border-[#F27D26]/40 rounded-3xl shadow-[0_0_100px_rgba(242,125,38,0.25)] overflow-hidden p-6 sm:p-9 text-center space-y-6",children:[w.jsx("div",{className:"absolute inset-0 cyber-grid opacity-30 pointer-events-none"}),w.jsxs("div",{className:"relative flex items-center justify-center gap-2 z-10",children:[w.jsxs("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-black bg-[#F27D26] text-black uppercase tracking-tight flex items-center gap-1.5",children:[w.jsx(op,{className:"w-3 h-3"})," Live Heist Simulation"]}),w.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-bold font-mono text-[#00f2ff] bg-[#00f2ff]/10 border border-[#00f2ff]/30 uppercase tracking-wider",children:"Operative: Hariharan"})]}),w.jsxs("div",{className:"relative space-y-2 z-10",children:[w.jsx("div",{className:"text-[11px] font-mono uppercase tracking-widest text-neutral-400",children:"PARIS // 48.8606° N, 2.3376° E"}),w.jsx("h1",{className:"text-3xl sm:text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]",children:"THE LOUVRE HEIST"}),w.jsx("p",{className:"text-sm sm:text-base text-neutral-300 font-sans max-w-xl mx-auto leading-relaxed",children:"Take the wheel of an agile getaway car, smash through the glowing glass pyramid into the Grand Gallery, drift between museum wings to steal real-world engineering project masterpieces, and escape to the safehouse."})]}),w.jsxs("div",{className:"relative grid grid-cols-2 sm:grid-cols-4 gap-3 text-left z-10",children:[w.jsxs("div",{className:"p-3.5 rounded-xl glass border-white/5 flex flex-col",children:[w.jsx("span",{className:"text-[#F27D26] font-black font-mono text-xs",children:"01. BREAK-IN"}),w.jsx("span",{className:"text-xs text-neutral-300 font-sans mt-1",children:"Floor the gas & shatter the glass pyramid into shards."})]}),w.jsxs("div",{className:"p-3.5 rounded-xl glass border-white/5 flex flex-col",children:[w.jsx("span",{className:"text-[#00f2ff] font-black font-mono text-xs",children:"02. GRAND GALLERY"}),w.jsx("span",{className:"text-xs text-neutral-300 font-sans mt-1",children:"Drift between 4 wings & examine architectural frames."})]}),w.jsxs("div",{className:"p-3.5 rounded-xl glass border-white/5 flex flex-col",children:[w.jsx("span",{className:"text-amber-400 font-black font-mono text-xs",children:"03. THE HEIST"}),w.jsx("span",{className:"text-xs text-neutral-300 font-sans mt-1",children:"Press [E] to steal artwork & trigger alarm sirens."})]}),w.jsxs("div",{className:"p-3.5 rounded-xl glass border-white/5 flex flex-col",children:[w.jsx("span",{className:"text-emerald-400 font-black font-mono text-xs",children:"04. EXTRACTION"}),w.jsx("span",{className:"text-xs text-neutral-300 font-sans mt-1",children:"Escape to the safehouse for repository keys & CV."})]})]}),w.jsxs("div",{className:"relative p-3 rounded-xl glass border-white/5 text-xs text-neutral-300 flex flex-wrap items-center justify-center gap-3 font-mono z-10",children:[w.jsxs("div",{children:[w.jsx("span",{className:"font-bold text-white bg-neutral-800/80 px-2 py-0.5 rounded",children:"WASD / Arrows"})," Drive"]}),w.jsxs("div",{children:[w.jsx("span",{className:"font-bold text-[#00f2ff] bg-neutral-800/80 px-2 py-0.5 rounded",children:"SHIFT"})," Nitro NOS"]}),w.jsxs("div",{children:[w.jsx("span",{className:"font-bold text-[#F27D26] bg-neutral-800/80 px-2 py-0.5 rounded",children:"SPACE"})," Handbrake Drift"]}),w.jsxs("div",{children:[w.jsx("span",{className:"font-bold text-amber-300 bg-neutral-800/80 px-2 py-0.5 rounded",children:"E"})," Inspect/Steal"]})]}),w.jsxs("div",{className:"relative flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 z-10",children:[w.jsxs("button",{id:"start-heist-btn",onClick:i,className:"w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#F27D26] hover:bg-[#e06d1a] text-black font-black text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-[0_0_35px_rgba(242,125,38,0.4)] hover:scale-105 transition-all cursor-pointer",children:[w.jsx(yA,{className:"w-5 h-5 fill-current"}),w.jsx("span",{children:"START ENGINE & INFILTRATE"})]}),w.jsxs("button",{id:"direct-safehouse-btn",onClick:s,className:"w-full sm:w-auto flex items-center justify-center gap-2 glass hover:bg-neutral-800/80 text-[#00f2ff] border border-[#00f2ff]/40 font-bold font-mono text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-colors cursor-pointer",children:[w.jsx(Zx,{className:"w-4 h-4 text-[#00f2ff]"}),w.jsx("span",{children:"Direct Repository Keys"})]})]}),w.jsx("div",{className:"relative text-[11px] text-neutral-500 font-mono z-10",children:"Three.js WebGL & Procedural Web Audio API • 0 External Asset Payload"})]})]})};function jA(){const[r,e]=yt.useState("briefing"),[i,s]=yt.useState(ux),[l,c]=yt.useState(null),[d,p]=yt.useState(null),[m,h]=yt.useState(!1),[S,_]=yt.useState(!0),[g,T]=yt.useState(0),[A,D]=yt.useState({speed:0,rpm:800,gear:"N",boost:100,isDrifting:!1,isBraking:!1,isBoosting:!1,steering:0,throttle:0}),[y,x]=yt.useState({forward:!1,backward:!1,left:!1,right:!1,handbrake:!1,boost:!1,interact:!1,resetCar:!1,lightsToggle:!1,cameraToggle:!1});yt.useEffect(()=>{const H=he=>{if(Nn.init(),Nn.resume(),he.code==="Escape"){c(null);return}switch(he.code){case"KeyW":case"ArrowUp":x(ae=>({...ae,forward:!0}));break;case"KeyS":case"ArrowDown":x(ae=>({...ae,backward:!0}));break;case"KeyA":case"ArrowLeft":x(ae=>({...ae,left:!0}));break;case"KeyD":case"ArrowRight":x(ae=>({...ae,right:!0}));break;case"Space":x(ae=>({...ae,handbrake:!0}));break;case"ShiftLeft":case"ShiftRight":x(ae=>({...ae,boost:!0})),Nn.playNitroBoost();break;case"KeyE":x(ae=>({...ae,interact:!0})),d&&!l&&c(d);break;case"KeyR":O();break}},j=he=>{switch(he.code){case"KeyW":case"ArrowUp":x(ae=>({...ae,forward:!1}));break;case"KeyS":case"ArrowDown":x(ae=>({...ae,backward:!1}));break;case"KeyA":case"ArrowLeft":x(ae=>({...ae,left:!1}));break;case"KeyD":case"ArrowRight":x(ae=>({...ae,right:!1}));break;case"Space":x(ae=>({...ae,handbrake:!1}));break;case"ShiftLeft":case"ShiftRight":x(ae=>({...ae,boost:!1}));break;case"KeyE":x(ae=>({...ae,interact:!1}));break}};return window.addEventListener("keydown",H),window.addEventListener("keyup",j),()=>{window.removeEventListener("keydown",H),window.removeEventListener("keyup",j)}},[d,l]);const I=()=>{_(!1),h(!1),e("break_in")},G=()=>{_(!1),h(!0),e("safehouse")},N=()=>{e("gallery_explore")},F=H=>{s(j=>j.map(he=>he.id===H?{...he,stolen:!0}:he)),(l==null?void 0:l.id)===H&&c(j=>j?{...j,stolen:!0}:null)},U=()=>{s(H=>H.map(j=>({...j,stolen:!0}))),l&&c(H=>H?{...H,stolen:!0}:null)},P=H=>{Nn.playKeyClick(),c(H)},M=()=>{h(!0),e("safehouse")},O=yt.useCallback(()=>{T(H=>H+1)},[]),Y=()=>{s(ux.map(H=>({...H,stolen:!1}))),h(!1),c(null),e("break_in"),T(H=>H+1)};return w.jsxs("main",{className:"relative w-screen h-screen bg-neutral-950 overflow-hidden select-none font-sans",children:[w.jsx(Y2,{phase:r,exhibits:i,controls:y,onTelemetryUpdate:D,onNearExhibit:p,onPyramidShatter:N,onSafehouseReached:M,onInspectExhibit:P,isInspecting:!!l||m||S},g),!S&&!m&&w.jsx(VA,{telemetry:A,phase:r,exhibits:i,nearExhibit:d,onInspectExhibit:P,onResetCar:O,onJumpToSafehouse:()=>h(!0),onOpenBriefing:()=>_(!0),onControlsChange:x}),l&&w.jsx(XA,{exhibit:l,onClose:()=>c(null),onStealArtwork:F}),m&&w.jsx(WA,{exhibits:i,onReturnToCar:()=>h(!1),onRestartHeist:Y,onStealAll:U}),S&&w.jsx(qA,{onStart:I,onDirectSafehouse:G})]})}ly.createRoot(document.getElementById("root")).render(w.jsx(yt.StrictMode,{children:w.jsx(jA,{})}));
