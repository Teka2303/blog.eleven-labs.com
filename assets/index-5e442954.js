import{c as kt,j as c,U as Z,p as vt,u as Vt,r as At,m as he,g as rn,l as be,q as Dt,z as an}from"./index.es-43e4d52f.js";import{r as p,R as Oe}from"./index-76fb7be0.js";import{c as Re}from"./index-e131923d.js";import{_ as b}from"./extends-98964cd2.js";import{P as l}from"./index-8d47fad6.js";import{g as un}from"./assetHelper-ae8c4375.js";import{D as It}from"./Divider-2fbe3d1f.js";import"./NewsletterBlock-f4cbd3dd.js";import"./NotFoundBlock-5ac1e322.js";import{P as on}from"./ProgressBar-c7f75d54.js";import{S as yt}from"./SeparatorCircle-52950513.js";import"./BackLink-ffbe155a.js";import"./ShareLinks-3743391e.js";import{T as ln}from"./TutoTag-00d291b9.js";import{C as sn}from"./constants-0b04ede2.js";function we(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,u;for(u=0;u<i.length;u++)r=i[u],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var x={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=60103,Ue=60106,Se=60107,ke=60108,Ve=60114,Ae=60109,De=60110,Ee=60112,Pe=60113,tt=60120,Te=60115,je=60116,Et=60121,Pt=60122,Tt=60117,jt=60129,Lt=60131;if(typeof Symbol=="function"&&Symbol.for){var k=Symbol.for;ze=k("react.element"),Ue=k("react.portal"),Se=k("react.fragment"),ke=k("react.strict_mode"),Ve=k("react.profiler"),Ae=k("react.provider"),De=k("react.context"),Ee=k("react.forward_ref"),Pe=k("react.suspense"),tt=k("react.suspense_list"),Te=k("react.memo"),je=k("react.lazy"),Et=k("react.block"),Pt=k("react.server.block"),Tt=k("react.fundamental"),jt=k("react.debug_trace_mode"),Lt=k("react.legacy_hidden")}function K(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ze:switch(e=e.type,e){case Se:case Ve:case ke:case Pe:case tt:return e;default:switch(e=e&&e.$$typeof,e){case De:case Ee:case je:case Te:case Ae:return e;default:return t}}case Ue:return t}}}var dn=Ae,cn=ze,fn=Ee,mn=Se,pn=je,gn=Te,hn=Ue,vn=Ve,In=ke,yn=Pe;x.ContextConsumer=De;x.ContextProvider=dn;x.Element=cn;x.ForwardRef=fn;x.Fragment=mn;x.Lazy=pn;x.Memo=gn;x.Portal=hn;x.Profiler=vn;x.StrictMode=In;x.Suspense=yn;x.isAsyncMode=function(){return!1};x.isConcurrentMode=function(){return!1};x.isContextConsumer=function(e){return K(e)===De};x.isContextProvider=function(e){return K(e)===Ae};x.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ze};x.isForwardRef=function(e){return K(e)===Ee};x.isFragment=function(e){return K(e)===Se};x.isLazy=function(e){return K(e)===je};x.isMemo=function(e){return K(e)===Te};x.isPortal=function(e){return K(e)===Ue};x.isProfiler=function(e){return K(e)===Ve};x.isStrictMode=function(e){return K(e)===ke};x.isSuspense=function(e){return K(e)===Pe};x.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Se||e===Ve||e===jt||e===ke||e===Pe||e===tt||e===Lt||typeof e=="object"&&e!==null&&(e.$$typeof===je||e.$$typeof===Te||e.$$typeof===Ae||e.$$typeof===De||e.$$typeof===Ee||e.$$typeof===Tt||e.$$typeof===Et||e[0]===Pt)};x.typeOf=K;let xt=e=>typeof e=="object"&&e!=null&&e.nodeType===1,bt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Qe=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return bt(n.overflowY,t)||bt(n.overflowX,t)||(i=>{let r=(u=>{if(!u.ownerDocument||!u.ownerDocument.defaultView)return null;try{return u.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!r&&(r.clientHeight<i.scrollHeight||r.clientWidth<i.scrollWidth)})(e)}return!1},$e=(e,t,n,i,r,u,a,o)=>u<e&&a>t||u>e&&a<t?0:u<=e&&o<=n||a>=t&&o>=n?u-e-i:a>t&&o<n||u<e&&o>n?a-t+r:0,xn=e=>{let t=e.parentElement;return t??(e.getRootNode().host||null)};var bn=(e,t)=>{var n,i,r,u,a,o;if(typeof document>"u")return[];let{scrollMode:w,block:g,inline:I,boundary:C,skipOverflowHiddenElements:v}=t,d=typeof C=="function"?C:B=>B!==C;if(!xt(e))throw new TypeError("Invalid target");let V=document.scrollingElement||document.documentElement,T=[],R=e;for(;xt(R)&&d(R);){if(R=xn(R),R===V){T.push(R);break}R!=null&&R===document.body&&Qe(R)&&!Qe(document.documentElement)||R!=null&&Qe(R,v)&&T.push(R)}let _=(i=(n=window.visualViewport)==null?void 0:n.width)!=null?i:innerWidth,j=(u=(r=window.visualViewport)==null?void 0:r.height)!=null?u:innerHeight,P=(a=window.scrollX)!=null?a:pageXOffset,A=(o=window.scrollY)!=null?o:pageYOffset,{height:q,width:M,top:y,right:ee,bottom:S,left:re}=e.getBoundingClientRect(),D=g==="start"||g==="nearest"?y:g==="end"?S:y+q/2,E=I==="center"?re+M/2:I==="end"?ee:re,ie=[];for(let B=0;B<T.length;B++){let O=T[B],{height:ae,width:ue,top:oe,right:Ie,bottom:ye,left:le}=O.getBoundingClientRect();if(w==="if-needed"&&y>=0&&re>=0&&S<=j&&ee<=_&&y>=oe&&S<=ye&&re>=le&&ee<=Ie)return ie;let se=getComputedStyle(O),de=parseInt(se.borderLeftWidth,10),ce=parseInt(se.borderTopWidth,10),fe=parseInt(se.borderRightWidth,10),me=parseInt(se.borderBottomWidth,10),f=0,s=0,m="offsetWidth"in O?O.offsetWidth-O.clientWidth-de-fe:0,h="offsetHeight"in O?O.offsetHeight-O.clientHeight-ce-me:0,L="offsetWidth"in O?O.offsetWidth===0?0:ue/O.offsetWidth:0,H="offsetHeight"in O?O.offsetHeight===0?0:ae/O.offsetHeight:0;if(V===O)f=g==="start"?D:g==="end"?D-j:g==="nearest"?$e(A,A+j,j,ce,me,A+D,A+D+q,q):D-j/2,s=I==="start"?E:I==="center"?E-_/2:I==="end"?E-_:$e(P,P+_,_,de,fe,P+E,P+E+M,M),f=Math.max(0,f+A),s=Math.max(0,s+P);else{f=g==="start"?D-oe-ce:g==="end"?D-ye+me+h:g==="nearest"?$e(oe,ye,ae,ce,me+h,D,D+q,q):D-(oe+ae/2)+h/2,s=I==="start"?E-le-de:I==="center"?E-(le+ue/2)+m/2:I==="end"?E-Ie+fe+m:$e(le,Ie,ue,de,fe+m,E,E+M,M);let{scrollLeft:N,scrollTop:$}=O;f=Math.max(0,Math.min($+f/H,O.scrollHeight-ae/H+h)),s=Math.max(0,Math.min(N+s/L,O.scrollWidth-ue/L+m)),D+=$-f,E+=N-s}ie.push({el:O,top:f,left:s})}return ie},ve=function(){return ve=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},ve.apply(this,arguments)},wn=0;function nt(){}function Cn(e,t){if(e){var n=bn(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(i){var r=i.el,u=i.top,a=i.left;r.scrollTop=u,r.scrollLeft=a})}}function wt(e,t,n){var i=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return i}function Ht(e,t){var n;function i(){n&&clearTimeout(n)}function r(){for(var u=arguments.length,a=new Array(u),o=0;o<u;o++)a[o]=arguments[o];i(),n=setTimeout(function(){n=null,e.apply(void 0,a)},t)}return r.cancel=i,r}function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){for(var r=arguments.length,u=new Array(r>1?r-1:0),a=1;a<r;a++)u[a-1]=arguments[a];return t.some(function(o){return o&&o.apply(void 0,[i].concat(u)),i.preventDownshiftDefault||i.hasOwnProperty("nativeEvent")&&i.nativeEvent.preventDownshiftDefault})}}function Ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){t.forEach(function(r){typeof r=="function"?r(i):r&&(r.current=i)})}}function Mn(){return String(wn++)}function On(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function Je(e,t){return Object.keys(e).reduce(function(n,i){return n[i]=Nt(t,i)?t[i]:e[i],n},{})}function Nt(e,t){return e[t]!==void 0}function Rn(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function _e(e,t,n,i,r){r===void 0&&(r=!1);var u=n.length;if(u===0)return-1;var a=u-1;(typeof e!="number"||e<0||e>a)&&(e=t>0?-1:a+1);var o=e+t;o<0?o=r?a:0:o>a&&(o=r?0:a);var w=Fe(o,t<0,n,i,r);return w===-1?e>=u?-1:e:w}function Fe(e,t,n,i,r){r===void 0&&(r=!1);var u=n.length;if(t){for(var a=e;a>=0;a--)if(!i(n[a],a))return a}else for(var o=e;o<u;o++)if(!i(n[o],o))return o;return r?Fe(t?u-1:0,t,n,i):-1}function Ct(e,t,n,i){return i===void 0&&(i=!0),t.some(function(r){return r&&(wt(r,e,n)||i&&wt(r,n.document.activeElement,n))})}var Sn=Ht(function(e){$t(e).textContent=""},500);function kn(e,t){var n=$t(t);e&&(n.textContent=e,Sn(t))}function $t(e){e===void 0&&(e=document);var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var Vn=["isInitialMount","highlightedIndex","items","environment"],Kt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function An(e,t,n){var i=e.props,r=e.type,u={};Object.keys(t).forEach(function(a){Dn(a,e,t,n),n[a]!==t[a]&&(u[a]=n[a])}),i.onStateChange&&Object.keys(u).length&&i.onStateChange(b({type:r},u))}function Dn(e,t,n,i){var r=t.props,u=t.type,a="on"+rt(e)+"Change";r[a]&&i[e]!==void 0&&i[e]!==n[e]&&r[a](b({type:u},i))}function En(e,t){return t.changes}function Pn(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var Tn=Ht(function(e,t){kn(e(),t)},200),jn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect,Ln="useId"in Oe?function(t){var n=t.id,i=t.labelId,r=t.menuId,u=t.getItemId,a=t.toggleButtonId,o=t.inputId,w="downshift-"+Oe.useId();n||(n=w);var g=p.useRef({labelId:i||n+"-label",menuId:r||n+"-menu",getItemId:u||function(I){return n+"-item-"+I},toggleButtonId:a||n+"-toggle-button",inputId:o||n+"-input"});return g.current}:function(t){var n=t.id,i=n===void 0?"downshift-"+Mn():n,r=t.labelId,u=t.menuId,a=t.getItemId,o=t.toggleButtonId,w=t.inputId,g=p.useRef({labelId:r||i+"-label",menuId:u||i+"-menu",getItemId:a||function(I){return i+"-item-"+I},toggleButtonId:o||i+"-toggle-button",inputId:w||i+"-input"});return g.current};function Hn(e,t,n,i){var r,u;if(e===void 0){if(t===void 0)throw new Error(i);r=n[t],u=t}else u=t===void 0?n.indexOf(e):t,r=e;return[r,u]}function Nn(e){return e?String(e):""}function rt(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function _t(e){var t=p.useRef(e);return t.current=e,t}function $n(e,t,n){var i=p.useRef(),r=p.useRef(),u=p.useCallback(function(v,d){r.current=d,v=Je(v,d.props);var V=e(v,d),T=d.props.stateReducer(v,b({},d,{changes:V}));return T},[e]),a=p.useReducer(u,t),o=a[0],w=a[1],g=_t(n),I=p.useCallback(function(v){return w(b({props:g.current},v))},[g]),C=r.current;return p.useEffect(function(){C&&i.current&&i.current!==o&&An(C,Je(i.current,C.props),o),i.current=o},[o,n,C]),[o,I]}var Ce={itemToString:Nn,stateReducer:En,getA11ySelectionMessage:Pn,scrollIntoView:Cn,environment:typeof window>"u"?{}:window};function F(e,t,n){n===void 0&&(n=Kt);var i=e["default"+rt(t)];return i!==void 0?i:n[t]}function qe(e,t,n){n===void 0&&(n=Kt);var i=e[t];if(i!==void 0)return i;var r=e["initial"+rt(t)];return r!==void 0?r:F(e,t,n)}function Kn(e){var t=qe(e,"selectedItem"),n=qe(e,"isOpen"),i=qe(e,"highlightedIndex"),r=qe(e,"inputValue");return{highlightedIndex:i<0&&t&&n?e.items.indexOf(t):i,isOpen:n,selectedItem:t,inputValue:r}}function Me(e,t,n){var i=e.items,r=e.initialHighlightedIndex,u=e.defaultHighlightedIndex,a=t.selectedItem,o=t.highlightedIndex;return i.length===0?-1:r!==void 0&&o===r?r:u!==void 0?u:a?i.indexOf(a):n===0?-1:n<0?i.length-1:0}function _n(e,t,n,i){var r=p.useRef({isMouseDown:!1,isTouchMove:!1});return p.useEffect(function(){if((n==null?void 0:n.addEventListener)!=null){var u=function(){r.current.isMouseDown=!0},a=function(C){r.current.isMouseDown=!1,e&&!Ct(C.target,t.map(function(v){return v.current}),n)&&i()},o=function(){r.current.isTouchMove=!1},w=function(){r.current.isTouchMove=!0},g=function(C){e&&!r.current.isTouchMove&&!Ct(C.target,t.map(function(v){return v.current}),n,!1)&&i()};return n.addEventListener("mousedown",u),n.addEventListener("mouseup",a),n.addEventListener("touchstart",o),n.addEventListener("touchmove",w),n.addEventListener("touchend",g),function(){n.removeEventListener("mousedown",u),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",o),n.removeEventListener("touchmove",w),n.removeEventListener("touchend",g)}}},[e,n]),r}var qn=function(){return nt};function Mt(e,t,n){var i=n.isInitialMount,r=n.highlightedIndex,u=n.items,a=n.environment,o=we(n,Vn);p.useEffect(function(){i||Tn(function(){return e(b({highlightedIndex:r,highlightedItem:u[r],resultCount:u.length},o))},a.document)},t)}function Fn(e){var t=e.highlightedIndex,n=e.isOpen,i=e.itemRefs,r=e.getItemNodeFromIndex,u=e.menuElement,a=e.scrollIntoView,o=p.useRef(!0);return jn(function(){t<0||!n||!Object.keys(i.current).length||(o.current===!1?o.current=!0:a(r(t),u))},[t]),o}var Bn=nt;function Ot(e,t,n){var i;n===void 0&&(n=!0);var r=((i=e.items)==null?void 0:i.length)&&t>=0;return b({isOpen:!1,highlightedIndex:-1},r&&b({selectedItem:e.items[t],isOpen:F(e,"isOpen"),highlightedIndex:F(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}var qt={environment:l.shape({addEventListener:l.func.isRequired,removeEventListener:l.func.isRequired,document:l.shape({createElement:l.func.isRequired,getElementById:l.func.isRequired,activeElement:l.any.isRequired,body:l.any.isRequired}).isRequired,Node:l.func.isRequired}),itemToString:l.func,stateReducer:l.func},Ft=b({},qt,{getA11yStatusMessage:l.func,highlightedIndex:l.number,defaultHighlightedIndex:l.number,initialHighlightedIndex:l.number,isOpen:l.bool,defaultIsOpen:l.bool,initialIsOpen:l.bool,selectedItem:l.any,initialSelectedItem:l.any,defaultSelectedItem:l.any,id:l.string,labelId:l.string,menuId:l.string,getItemId:l.func,toggleButtonId:l.string,onSelectedItemChange:l.func,onHighlightedIndexChange:l.func,onStateChange:l.func,onIsOpenChange:l.func,scrollIntoView:l.func});function Wn(e,t,n){var i=t.type,r=t.props,u;switch(i){case n.ItemMouseMove:u={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:u={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:u={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Me(r,e,0)};break;case n.FunctionOpenMenu:u={isOpen:!0,highlightedIndex:Me(r,e,0)};break;case n.FunctionCloseMenu:u={isOpen:!1};break;case n.FunctionSetHighlightedIndex:u={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:u={inputValue:t.inputValue};break;case n.FunctionReset:u={highlightedIndex:F(r,"highlightedIndex"),isOpen:F(r,"isOpen"),selectedItem:F(r,"selectedItem"),inputValue:F(r,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return b({},e,u)}ve(ve({},Ft),{items:l.array.isRequired,isItemDisabled:l.func,getA11ySelectionMessage:l.func});function zn(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}ve(ve({},Ce),{getA11yStatusMessage:zn,isItemDisabled:function(){return!1}});var it=0,at=1,ut=2,ot=3,lt=4,st=5,dt=6,ct=7,ft=8,Be=9,mt=10,Bt=11,Wt=12,pt=13,zt=14,Ut=15,Xt=16,Gt=17,Yt=18,gt=19,Qt=20,Jt=21,ht=22,Zt=Object.freeze({__proto__:null,InputKeyDownArrowDown:it,InputKeyDownArrowUp:at,InputKeyDownEscape:ut,InputKeyDownHome:ot,InputKeyDownEnd:lt,InputKeyDownPageUp:st,InputKeyDownPageDown:dt,InputKeyDownEnter:ct,InputChange:ft,InputBlur:Be,InputClick:mt,MenuMouseLeave:Bt,ItemMouseMove:Wt,ItemClick:pt,ToggleButtonClick:zt,FunctionToggleMenu:Ut,FunctionOpenMenu:Xt,FunctionCloseMenu:Gt,FunctionSetHighlightedIndex:Yt,FunctionSelectItem:gt,FunctionSetInputValue:Qt,FunctionReset:Jt,ControlledPropUpdatedSelectedItem:ht});function Un(e){var t=Kn(e),n=t.selectedItem,i=t.inputValue;return i===""&&n&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(i=e.itemToString(n)),b({},t,{inputValue:i})}b({},Ft,{items:l.array.isRequired,isItemDisabled:l.func,selectedItemChanged:l.func,getA11ySelectionMessage:l.func,inputValue:l.string,defaultInputValue:l.string,initialInputValue:l.string,inputId:l.string,onInputValueChange:l.func});function Xn(e,t,n){var i=p.useRef(),r=$n(e,t,n),u=r[0],a=r[1];return p.useEffect(function(){Nt(n,"selectedItem")&&(n.selectedItemChanged(i.current,n.selectedItem)&&a({type:ht,inputValue:n.itemToString(n.selectedItem)}),i.current=u.selectedItem===i.current?n.selectedItem:u.selectedItem)},[u.selectedItem,n.selectedItem]),[Je(u,n),a]}var Gn=nt,Yn=b({},Ce,{selectedItemChanged:function(t,n){return t!==n},getA11yStatusMessage:On,isItemDisabled:function(){return!1}});function Qn(e,t){var n,i=t.type,r=t.props,u=t.altKey,a;switch(i){case pt:a={isOpen:F(r,"isOpen"),highlightedIndex:F(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case it:e.isOpen?a={highlightedIndex:_e(e.highlightedIndex,1,r.items,r.isItemDisabled,!0)}:a={highlightedIndex:u&&e.selectedItem==null?-1:Me(r,e,1),isOpen:r.items.length>=0};break;case at:e.isOpen?u?a=Ot(r,e.highlightedIndex):a={highlightedIndex:_e(e.highlightedIndex,-1,r.items,r.isItemDisabled,!0)}:a={highlightedIndex:Me(r,e,-1),isOpen:r.items.length>=0};break;case ct:a=Ot(r,e.highlightedIndex);break;case ut:a=b({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case st:a={highlightedIndex:_e(e.highlightedIndex,-10,r.items,r.isItemDisabled,!0)};break;case dt:a={highlightedIndex:_e(e.highlightedIndex,10,r.items,r.isItemDisabled,!0)};break;case ot:a={highlightedIndex:Fe(0,!1,r.items,r.isItemDisabled)};break;case lt:a={highlightedIndex:Fe(r.items.length-1,!0,r.items,r.isItemDisabled)};break;case Be:a=b({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=r.items)==null?void 0:n.length)&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case ft:a={isOpen:!0,highlightedIndex:F(r,"highlightedIndex"),inputValue:t.inputValue};break;case mt:a={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Me(r,e,0)};break;case gt:a={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case ht:a={inputValue:t.inputValue};break;default:return Wn(e,t,Zt)}return b({},e,a)}var Jn=["onMouseLeave","refKey","ref"],Zn=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],er=["onClick","onPress","refKey","ref"],tr=["onKeyDown","onChange","onInput","onBlur","onChangeText","onClick","refKey","ref"];en.stateChangeTypes=Zt;function en(e){e===void 0&&(e={}),Gn();var t=b({},Yn,e),n=t.initialIsOpen,i=t.defaultIsOpen,r=t.items,u=t.scrollIntoView,a=t.environment,o=t.getA11yStatusMessage,w=t.getA11ySelectionMessage,g=t.itemToString,I=Un(t),C=Xn(Qn,I,t),v=C[0],d=C[1],V=v.isOpen,T=v.highlightedIndex,R=v.selectedItem,_=v.inputValue,j=p.useRef(null),P=p.useRef({}),A=p.useRef(null),q=p.useRef(null),M=p.useRef(!0),y=Ln(t),ee=p.useRef(),S=_t({state:v,props:t}),re=p.useCallback(function(f){return P.current[y.getItemId(f)]},[y]);Mt(o,[V,T,_,r],b({isInitialMount:M.current,previousResultCount:ee.current,items:r,environment:a,itemToString:g},v)),Mt(w,[R],b({isInitialMount:M.current,previousResultCount:ee.current,items:r,environment:a,itemToString:g},v));var D=Fn({menuElement:j.current,highlightedIndex:T,isOpen:V,itemRefs:P,scrollIntoView:u,getItemNodeFromIndex:re});Bn({isInitialMount:M.current,props:t,state:v}),p.useEffect(function(){var f=n||i||V;f&&A.current&&A.current.focus()},[]),p.useEffect(function(){M.current||(ee.current=r.length)});var E=_n(V,[A,j,q],a,function(){d({type:Be,selectItem:!1})}),ie=qn();p.useEffect(function(){return M.current=!1,function(){M.current=!0}},[]),p.useEffect(function(){var f;if(!V)P.current={};else if(((f=a.document)==null?void 0:f.activeElement)!==A.current){var s;A==null||(s=A.current)==null||s.focus()}},[V,a]);var B=p.useMemo(function(){return{ArrowDown:function(s){s.preventDefault(),d({type:it,altKey:s.altKey})},ArrowUp:function(s){s.preventDefault(),d({type:at,altKey:s.altKey})},Home:function(s){S.current.state.isOpen&&(s.preventDefault(),d({type:ot}))},End:function(s){S.current.state.isOpen&&(s.preventDefault(),d({type:lt}))},Escape:function(s){var m=S.current.state;(m.isOpen||m.inputValue||m.selectedItem||m.highlightedIndex>-1)&&(s.preventDefault(),d({type:ut}))},Enter:function(s){var m=S.current.state;!m.isOpen||s.which===229||(s.preventDefault(),d({type:ct}))},PageUp:function(s){S.current.state.isOpen&&(s.preventDefault(),d({type:st}))},PageDown:function(s){S.current.state.isOpen&&(s.preventDefault(),d({type:dt}))}}},[d,S]),O=p.useCallback(function(f){return b({id:y.labelId,htmlFor:y.inputId},f)},[y]),ae=p.useCallback(function(f,s){var m,h=f===void 0?{}:f,L=h.onMouseLeave,H=h.refKey,N=H===void 0?"ref":H,$=h.ref,W=we(h,Jn),G=s===void 0?{}:s;return G.suppressRefError,b((m={},m[N]=Ke($,function(Y){j.current=Y}),m.id=y.menuId,m.role="listbox",m["aria-labelledby"]=W&&W["aria-label"]?void 0:""+y.labelId,m.onMouseLeave=X(L,function(){d({type:Bt})}),m),W)},[d,ie,y]),ue=p.useCallback(function(f){var s,m,h=f===void 0?{}:f,L=h.item,H=h.index,N=h.refKey,$=N===void 0?"ref":N,W=h.ref,G=h.onMouseMove,Y=h.onMouseDown,Xe=h.onClick;h.onPress;var pe=h.disabled,Ge=we(h,Zn);pe!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');var z=S.current,Le=z.props,He=z.state,Ne=Hn(L,H,Le.items,"Pass either item or index to getItemProps!"),Ye=Ne[0],U=Ne[1],ge=Le.isItemDisabled(Ye,U),Q="onClick",te=Xe,J=function(){U!==He.highlightedIndex&&(D.current=!1,d({type:Wt,index:U,disabled:ge}))},ne=function(){d({type:pt,index:U})},tn=function(nn){return nn.preventDefault()};return b((s={},s[$]=Ke(W,function(xe){xe&&(P.current[y.getItemId(U)]=xe)}),s["aria-disabled"]=ge,s["aria-selected"]=""+(U===He.highlightedIndex),s.id=y.getItemId(U),s.role="option",s),!ge&&(m={},m[Q]=X(te,ne),m),{onMouseMove:X(G,J),onMouseDown:X(Y,tn)},Ge)},[d,S,D,y]),oe=p.useCallback(function(f){var s,m=f===void 0?{}:f,h=m.onClick;m.onPress;var L=m.refKey,H=L===void 0?"ref":L,N=m.ref,$=we(m,er),W=S.current.state,G=function(){d({type:zt})};return b((s={},s[H]=Ke(N,function(Y){q.current=Y}),s["aria-controls"]=y.menuId,s["aria-expanded"]=W.isOpen,s.id=y.toggleButtonId,s.tabIndex=-1,s),!$.disabled&&b({},{onClick:X(h,G)}),$)},[d,S,y]),Ie=p.useCallback(function(f,s){var m,h=f===void 0?{}:f,L=h.onKeyDown,H=h.onChange,N=h.onInput,$=h.onBlur;h.onChangeText;var W=h.onClick,G=h.refKey,Y=G===void 0?"ref":G,Xe=h.ref,pe=we(h,tr),Ge=s===void 0?{}:s;Ge.suppressRefError;var z=S.current.state,Le=function(J){var ne=Rn(J);ne&&B[ne]&&B[ne](J)},He=function(J){d({type:ft,inputValue:J.target.value})},Ne=function(J){if(z.isOpen&&!E.current.isMouseDown){var ne=J.relatedTarget===null&&a.document.activeElement!==a.document.body;d({type:Be,selectItem:!ne})}},Ye=function(){d({type:mt})},U="onChange",ge={};if(!pe.disabled){var Q;ge=(Q={},Q[U]=X(H,N,He),Q.onKeyDown=X(L,Le),Q.onBlur=X($,Ne),Q.onClick=X(W,Ye),Q)}return b((m={},m[Y]=Ke(Xe,function(te){A.current=te}),m["aria-activedescendant"]=z.isOpen&&z.highlightedIndex>-1?y.getItemId(z.highlightedIndex):"",m["aria-autocomplete"]="list",m["aria-controls"]=y.menuId,m["aria-expanded"]=z.isOpen,m["aria-labelledby"]=pe&&pe["aria-label"]?void 0:y.labelId,m.autoComplete="off",m.id=y.inputId,m.role="combobox",m.value=z.inputValue,m),ge,pe)},[ie,S,y,B,d,E,a]),ye=p.useCallback(function(){d({type:Ut})},[d]),le=p.useCallback(function(){d({type:Gt})},[d]),se=p.useCallback(function(){d({type:Xt})},[d]),de=p.useCallback(function(f){d({type:Yt,highlightedIndex:f})},[d]),ce=p.useCallback(function(f){d({type:gt,selectedItem:f})},[d]),fe=p.useCallback(function(f){d({type:Qt,inputValue:f})},[d]),me=p.useCallback(function(){d({type:Jt})},[d]);return{getItemProps:ue,getLabelProps:O,getMenuProps:ae,getInputProps:Ie,getToggleButtonProps:oe,toggleMenu:ye,openMenu:se,closeMenu:le,setHighlightedIndex:de,setInputValue:fe,selectItem:ce,reset:me,highlightedIndex:T,isOpen:V,selectedItem:R,inputValue:_}}function nr(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}b({},qt,{selectedItems:l.array,initialSelectedItems:l.array,defaultSelectedItems:l.array,getA11yRemovalMessage:l.func,activeIndex:l.number,initialActiveIndex:l.number,defaultActiveIndex:l.number,onActiveIndexChange:l.func,onSelectedItemsChange:l.func,keyNavigationNext:l.string,keyNavigationPrevious:l.string});Ce.itemToString,Ce.stateReducer,Ce.environment;const We=kt(({isOpen:e=!1,items:t,searchValue:n,searchLink:{label:i,...r}={},searchNotFound:u,highlightedIndex:a=0,...o},w)=>c.jsxs(Z,{className:Re("autocomplete-result",o.className),ref:w,hidden:!e,children:[t.length>0&&c.jsxs(c.Fragment,{children:[t.map(({title:g,description:I,...C},v)=>{const d=a===v;return c.jsx(Oe.Fragment,{children:c.jsxs(Z,{...C,pt:{xs:"xxs"},pb:{xs:"xs"},px:{xs:"m"},className:Re("autocomplete-result__item",{"autocomplete-result__item--is-highlighted":d}),children:[c.jsx(vt,{size:"s",text:g,textQuery:n}),c.jsx(vt,{size:"xs",text:I,textQuery:n,hiddenBelow:"sm"})]})},v)}),r&&i&&c.jsx(Z,{pt:{xs:"s",md:"m"},pb:{xs:"m",md:"l"},textSize:"s",fontWeight:"medium",textAlign:"center",children:c.jsx(Vt,{...r,children:i})})]}),t.length===0&&u&&c.jsxs(Z,{textAlign:"center",px:"xl",py:"m",children:[c.jsx("img",{src:un("/imgs/not-found.png"),alt:"not-found"}),c.jsx(At,{as:"p",size:"m",mt:"s",children:u.title}),c.jsx(he,{size:"xs",mt:"xxs",children:u.description})]})]}));We.displayName="AutocompleteResult";try{We.displayName="AutocompleteResult",We.__docgenInfo={description:"",displayName:"AutocompleteResult",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("header" & As<any>) | ("footer" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ... 172 more ...'}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & { label: string; })'}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}},highlightedIndex:{defaultValue:{value:"0"},description:"",name:"highlightedIndex",required:!1,type:{name:"number"}}}}}catch{}const Ze=kt(({placeholder:e,defaultValue:t,items:n=[],searchLink:{label:i,...r},searchNotFound:u,onInputValueChange:a,onSelectedItemChange:o,onEnter:w,...g},I)=>{const C=M=>{w&&M.key==="Enter"&&w(M.currentTarget.value)},{getInputProps:v,getMenuProps:d,getItemProps:V,selectItem:T,toggleMenu:R,isOpen:_,inputValue:j,highlightedIndex:P}=en({defaultInputValue:t,onInputValueChange:a,onSelectedItemChange:o,items:n,itemToString:M=>M?M.title:""}),A=()=>T(null),q=Oe.useMemo(()=>n.map((M,y)=>({...M,...V({item:M,index:y})})),[n,V]);return c.jsxs(Z,{className:Re("autocomplete-field",g.className),ref:I,children:[c.jsx(rn,{input:v({placeholder:e,onKeyDown:C}),buttonSearch:r,buttonClose:{onClick:A},className:"autocomplete-field__input"}),c.jsx(We,{isOpen:_&&j.length>0,...d(),items:q,highlightedIndex:P===-1?0:P,searchValue:j,searchLink:{label:i,...r,onClick:R},searchNotFound:u})]})});Ze.displayName="AutocompleteField";try{Ze.displayName="AutocompleteField",Ze.__docgenInfo={description:"",displayName:"AutocompleteField",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("header" & As<any>) | ("footer" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ... 172 more ...'}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!0,type:{name:'Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & { label: string; }'}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((value: string) => void)"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}}}}}catch{}const Rt=({variant:e="common",...t})=>c.jsx(Z,{...t,className:Re("container",{[`container--${e}`]:e},t.className)});try{Rt.displayName="Container",Rt.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}},variant:{defaultValue:{value:"common"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"content"'},{value:'"global"'},{value:'"common"'}]}}}}}catch{}const et=({contentType:e,title:t,excerpt:n,date:i,readingTime:r,authors:u,link:a={},hasMask:o,isRelated:w,isLoading:g=!1,...I})=>{const C=o?t:c.jsx(Vt,{...a,"data-internal-link":w?"relatedPost":"post",children:t});return c.jsxs(Z,{as:"article",className:Re("post-preview",{"post-preview--mask":o},{"post-preview--related":w}),...I,children:[c.jsx(be,{isLoading:g,children:c.jsx(At,{as:"h2",color:"amaranth",size:"s",children:e===sn.TUTORIAL?c.jsxs(Dt,{gap:"xxs",children:[c.jsx(ln,{}),C]}):C})}),c.jsx(be,{isLoading:g,style:{height:75},children:c.jsx(he,{size:"s",className:"post-preview__excerpt",children:n})}),c.jsxs(Z,{mt:{xs:"xs",md:"s"},textSize:"xs",children:[c.jsx(be,{isLoading:g,display:"inline-block",style:{width:100},children:i&&c.jsx(he,{as:"span",children:i})}),c.jsx(yt,{}),c.jsx(be,{isLoading:g,display:"inline-block",style:{width:50},children:r&&c.jsx(he,{as:"span",children:`${r}mn`})}),c.jsx(yt,{}),c.jsx(be,{isLoading:g,display:"inline-block",style:{width:100},children:u&&u.map((v,d)=>c.jsxs(he,{as:"span",children:[v.name,d!==u.length-1?" & ":""]},v.username))})]})]})};try{et.displayName="PostPreview",et.__docgenInfo={description:"",displayName:"PostPreview",props:{contentType:{defaultValue:null,description:"",name:"contentType",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"tutorial"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)"}},excerpt:{defaultValue:null,description:"",name:"excerpt",required:!1,type:{name:"ReactNode"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"ReactNode"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!1,type:{name:"number"}},authors:{defaultValue:null,description:"",name:"authors",required:!1,type:{name:"{ username: string; name: string; }[]"}},link:{defaultValue:{value:"{}"},description:"",name:"link",required:!1,type:{name:'AsProps<"a">'}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},isRelated:{defaultValue:null,description:"",name:"isRelated",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const St=({posts:e,pagination:t,isLoading:n=!1})=>c.jsxs(c.Fragment,{children:[e.map((i,r)=>c.jsxs(Oe.Fragment,{children:[c.jsx(et,{hasMask:!!(t&&r===e.length-1),...i||{},isLoading:n}),e.length-1!==r&&c.jsx(It,{my:"m",bg:"light-grey"}),e.length-1===r&&t&&c.jsx(It,{size:"m",my:"m",mx:{md:"xl"},bg:"azure"})]},r)),t&&c.jsx(c.Fragment,{children:c.jsxs(Dt,{flexDirection:"column",justifyContent:"center",alignItems:"center",children:[c.jsx(he,{size:"s",children:t.textNumberOfPosts}),c.jsx(on,{mt:"xxs",value:t.numberOfPosts,max:t.maxNumberOfPosts}),c.jsx(an,{my:"s",onClick:t.onLoadMore,"data-button":"loadMore",children:t.loadMoreButtonLabel})]})})]});try{St.displayName="PostPreviewList",St.__docgenInfo={description:"",displayName:"PostPreviewList",props:{posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:"Partial<PostPreviewProps>[]"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"{ textNumberOfPosts: ReactNode; numberOfPosts: number; maxNumberOfPosts: number; loadMoreButtonLabel: ReactNode; onLoadMore: () => void; }"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}try{ShareLinks.displayName="ShareLinks",ShareLinks.__docgenInfo={description:"",displayName:"ShareLinks",props:{urlToShare:{defaultValue:null,description:"",name:"urlToShare",required:!0,type:{name:"string"}}}}}catch{}export{Ze as A,Rt as C,St as P,et as a};
//# sourceMappingURL=index-5e442954.js.map
