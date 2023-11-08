import{c as At,j as s,U as Z,q as Ue,p as bt,u as Dt,r as Et,m as re,g as sn,l as Ce,z as on}from"./index.es-43e4d52f.js";import{r as p,R as ve}from"./index-76fb7be0.js";import{c as Re}from"./index-e131923d.js";import{_ as w}from"./extends-98964cd2.js";import{P as o}from"./index-8d47fad6.js";import{D as wt}from"./Divider-2fbe3d1f.js";import"./NewsletterBlock-f4cbd3dd.js";import"./NotFoundBlock-5ac1e322.js";import{P as dn}from"./ProgressBar-c7f75d54.js";import{S as cn}from"./SeparatorCircle-52950513.js";import"./BackLink-ffbe155a.js";import"./ShareLinks-3743391e.js";import{T as Tt}from"./TutoTag-d8b13573.js";import{C as _t}from"./constants-0b04ede2.js";import{g as fn}from"./assetHelper-ae8c4375.js";function we(e,t){if(e==null)return{};var n={},i=Object.keys(e),r,l;for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var b={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=60103,Ge=60106,Oe=60107,ke=60108,Se=60114,Pe=60109,Ae=60110,De=60112,Ee=60113,at=60120,Te=60115,_e=60116,jt=60121,qt=60122,Nt=60117,Lt=60129,Ht=60131;if(typeof Symbol=="function"&&Symbol.for){var k=Symbol.for;Xe=k("react.element"),Ge=k("react.portal"),Oe=k("react.fragment"),ke=k("react.strict_mode"),Se=k("react.profiler"),Pe=k("react.provider"),Ae=k("react.context"),De=k("react.forward_ref"),Ee=k("react.suspense"),at=k("react.suspense_list"),Te=k("react.memo"),_e=k("react.lazy"),jt=k("react.block"),qt=k("react.server.block"),Nt=k("react.fundamental"),Lt=k("react.debug_trace_mode"),Ht=k("react.legacy_hidden")}function $(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xe:switch(e=e.type,e){case Oe:case Se:case ke:case Ee:case at:return e;default:switch(e=e&&e.$$typeof,e){case Ae:case De:case _e:case Te:case Pe:return e;default:return t}}case Ge:return t}}}var mn=Pe,pn=Xe,gn=De,hn=Oe,vn=_e,In=Te,yn=Ge,xn=Se,bn=ke,wn=Ee;b.ContextConsumer=Ae;b.ContextProvider=mn;b.Element=pn;b.ForwardRef=gn;b.Fragment=hn;b.Lazy=vn;b.Memo=In;b.Portal=yn;b.Profiler=xn;b.StrictMode=bn;b.Suspense=wn;b.isAsyncMode=function(){return!1};b.isConcurrentMode=function(){return!1};b.isContextConsumer=function(e){return $(e)===Ae};b.isContextProvider=function(e){return $(e)===Pe};b.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xe};b.isForwardRef=function(e){return $(e)===De};b.isFragment=function(e){return $(e)===Oe};b.isLazy=function(e){return $(e)===_e};b.isMemo=function(e){return $(e)===Te};b.isPortal=function(e){return $(e)===Ge};b.isProfiler=function(e){return $(e)===Se};b.isStrictMode=function(e){return $(e)===ke};b.isSuspense=function(e){return $(e)===Ee};b.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oe||e===Se||e===Lt||e===ke||e===Ee||e===at||e===Ht||typeof e=="object"&&e!==null&&(e.$$typeof===_e||e.$$typeof===Te||e.$$typeof===Pe||e.$$typeof===Ae||e.$$typeof===De||e.$$typeof===Nt||e.$$typeof===jt||e[0]===qt)};b.typeOf=$;let Ct=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Mt=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",Ze=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return Mt(n.overflowY,t)||Mt(n.overflowX,t)||(i=>{let r=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(i);return!!r&&(r.clientHeight<i.scrollHeight||r.clientWidth<i.scrollWidth)})(e)}return!1},Le=(e,t,n,i,r,l,a,u)=>l<e&&a>t||l>e&&a<t?0:l<=e&&u<=n||a>=t&&u>=n?l-e-i:a>t&&u<n||l<e&&u>n?a-t+r:0,Cn=e=>{let t=e.parentElement;return t??(e.getRootNode().host||null)};var Mn=(e,t)=>{var n,i,r,l,a,u;if(typeof document>"u")return[];let{scrollMode:I,block:h,inline:v,boundary:C,skipOverflowHiddenElements:y}=t,c=typeof C=="function"?C:B=>B!==C;if(!Ct(e))throw new TypeError("Invalid target");let S=document.scrollingElement||document.documentElement,A=[],R=e;for(;Ct(R)&&c(R);){if(R=Cn(R),R===S){A.push(R);break}R!=null&&R===document.body&&Ze(R)&&!Ze(document.documentElement)||R!=null&&Ze(R,y)&&A.push(R)}let j=(i=(n=window.visualViewport)==null?void 0:n.width)!=null?i:innerWidth,D=(l=(r=window.visualViewport)==null?void 0:r.height)!=null?l:innerHeight,_=(a=window.scrollX)!=null?a:pageXOffset,P=(u=window.scrollY)!=null?u:pageYOffset,{height:K,width:M,top:x,right:ee,bottom:O,left:ie}=e.getBoundingClientRect(),E=h==="start"||h==="nearest"?x:h==="end"?O:x+K/2,T=v==="center"?ie+M/2:v==="end"?ee:ie,ae=[];for(let B=0;B<A.length;B++){let V=A[B],{height:le,width:ue,top:se,right:ye,bottom:xe,left:oe}=V.getBoundingClientRect();if(I==="if-needed"&&x>=0&&ie>=0&&O<=D&&ee<=j&&x>=se&&O<=xe&&ie>=oe&&ee<=ye)return ae;let de=getComputedStyle(V),ce=parseInt(de.borderLeftWidth,10),fe=parseInt(de.borderTopWidth,10),me=parseInt(de.borderRightWidth,10),pe=parseInt(de.borderBottomWidth,10),f=0,d=0,m="offsetWidth"in V?V.offsetWidth-V.clientWidth-ce-me:0,g="offsetHeight"in V?V.offsetHeight-V.clientHeight-fe-pe:0,q="offsetWidth"in V?V.offsetWidth===0?0:ue/V.offsetWidth:0,N="offsetHeight"in V?V.offsetHeight===0?0:le/V.offsetHeight:0;if(S===V)f=h==="start"?E:h==="end"?E-D:h==="nearest"?Le(P,P+D,D,fe,pe,P+E,P+E+K,K):E-D/2,d=v==="start"?T:v==="center"?T-j/2:v==="end"?T-j:Le(_,_+j,j,ce,me,_+T,_+T+M,M),f=Math.max(0,f+P),d=Math.max(0,d+_);else{f=h==="start"?E-se-fe:h==="end"?E-xe+pe+g:h==="nearest"?Le(se,xe,le,fe,pe+g,E,E+K,K):E-(se+le/2)+g/2,d=v==="start"?T-oe-ce:v==="center"?T-(oe+ue/2)+m/2:v==="end"?T-ye+me+m:Le(oe,ye,ue,ce,me+m,T,T+M,M);let{scrollLeft:L,scrollTop:H}=V;f=Math.max(0,Math.min(H+f/N,V.scrollHeight-le/N+g)),d=Math.max(0,Math.min(L+d/q,V.scrollWidth-ue/q+m)),E+=H-f,T+=L-d}ae.push({el:V,top:f,left:d})}return ae},Ie=function(){return Ie=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Ie.apply(this,arguments)},Vn=0;function lt(){}function Rn(e,t){if(e){var n=Mn(e,{boundary:t,block:"nearest",scrollMode:"if-needed"});n.forEach(function(i){var r=i.el,l=i.top,a=i.left;r.scrollTop=l,r.scrollLeft=a})}}function Vt(e,t,n){var i=e===t||t instanceof n.Node&&e.contains&&e.contains(t);return i}function $t(e,t){var n;function i(){n&&clearTimeout(n)}function r(){for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];i(),n=setTimeout(function(){n=null,e.apply(void 0,a)},t)}return r.cancel=i,r}function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){for(var r=arguments.length,l=new Array(r>1?r-1:0),a=1;a<r;a++)l[a-1]=arguments[a];return t.some(function(u){return u&&u.apply(void 0,[i].concat(l)),i.preventDownshiftDefault||i.hasOwnProperty("nativeEvent")&&i.nativeEvent.preventDownshiftDefault})}}function He(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){t.forEach(function(r){typeof r=="function"?r(i):r&&(r.current=i)})}}function On(){return String(Vn++)}function kn(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?n+" result"+(n===1?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":""}function et(e,t){return Object.keys(e).reduce(function(n,i){return n[i]=Kt(t,i)?t[i]:e[i],n},{})}function Kt(e,t){return e[t]!==void 0}function Sn(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&t.indexOf("Arrow")!==0?"Arrow"+t:t}function $e(e,t,n,i,r){r===void 0&&(r=!1);var l=n.length;if(l===0)return-1;var a=l-1;(typeof e!="number"||e<0||e>a)&&(e=t>0?-1:a+1);var u=e+t;u<0?u=r?a:0:u>a&&(u=r?0:a);var I=Fe(u,t<0,n,i,r);return I===-1?e>=l?-1:e:I}function Fe(e,t,n,i,r){r===void 0&&(r=!1);var l=n.length;if(t){for(var a=e;a>=0;a--)if(!i(n[a],a))return a}else for(var u=e;u<l;u++)if(!i(n[u],u))return u;return r?Fe(t?l-1:0,t,n,i):-1}function Rt(e,t,n,i){return i===void 0&&(i=!0),t.some(function(r){return r&&(Vt(r,e,n)||i&&Vt(r,n.document.activeElement,n))})}var Pn=$t(function(e){Ft(e).textContent=""},500);function An(e,t){var n=Ft(t);e&&(n.textContent=e,Pn(t))}function Ft(e){e===void 0&&(e=document);var t=e.getElementById("a11y-status-message");return t||(t=e.createElement("div"),t.setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var Dn=["isInitialMount","highlightedIndex","items","environment"],Bt={highlightedIndex:-1,isOpen:!1,selectedItem:null,inputValue:""};function En(e,t,n){var i=e.props,r=e.type,l={};Object.keys(t).forEach(function(a){Tn(a,e,t,n),n[a]!==t[a]&&(l[a]=n[a])}),i.onStateChange&&Object.keys(l).length&&i.onStateChange(w({type:r},l))}function Tn(e,t,n,i){var r=t.props,l=t.type,a="on"+ut(e)+"Change";r[a]&&i[e]!==void 0&&i[e]!==n[e]&&r[a](w({type:l},i))}function _n(e,t){return t.changes}function jn(e){var t=e.selectedItem,n=e.itemToString;return t?n(t)+" has been selected.":""}var qn=$t(function(e,t){An(e(),t)},200),Nn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?p.useLayoutEffect:p.useEffect,Ln="useId"in ve?function(t){var n=t.id,i=t.labelId,r=t.menuId,l=t.getItemId,a=t.toggleButtonId,u=t.inputId,I="downshift-"+ve.useId();n||(n=I);var h=p.useRef({labelId:i||n+"-label",menuId:r||n+"-menu",getItemId:l||function(v){return n+"-item-"+v},toggleButtonId:a||n+"-toggle-button",inputId:u||n+"-input"});return h.current}:function(t){var n=t.id,i=n===void 0?"downshift-"+On():n,r=t.labelId,l=t.menuId,a=t.getItemId,u=t.toggleButtonId,I=t.inputId,h=p.useRef({labelId:r||i+"-label",menuId:l||i+"-menu",getItemId:a||function(v){return i+"-item-"+v},toggleButtonId:u||i+"-toggle-button",inputId:I||i+"-input"});return h.current};function Hn(e,t,n,i){var r,l;if(e===void 0){if(t===void 0)throw new Error(i);r=n[t],l=t}else l=t===void 0?n.indexOf(e):t,r=e;return[r,l]}function $n(e){return e?String(e):""}function ut(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function Wt(e){var t=p.useRef(e);return t.current=e,t}function Kn(e,t,n){var i=p.useRef(),r=p.useRef(),l=p.useCallback(function(y,c){r.current=c,y=et(y,c.props);var S=e(y,c),A=c.props.stateReducer(y,w({},c,{changes:S}));return A},[e]),a=p.useReducer(l,t),u=a[0],I=a[1],h=Wt(n),v=p.useCallback(function(y){return I(w({props:h.current},y))},[h]),C=r.current;return p.useEffect(function(){C&&i.current&&i.current!==u&&En(C,et(i.current,C.props),u),i.current=u},[u,n,C]),[u,v]}var Me={itemToString:$n,stateReducer:_n,getA11ySelectionMessage:jn,scrollIntoView:Rn,environment:typeof window>"u"?{}:window};function F(e,t,n){n===void 0&&(n=Bt);var i=e["default"+ut(t)];return i!==void 0?i:n[t]}function Ke(e,t,n){n===void 0&&(n=Bt);var i=e[t];if(i!==void 0)return i;var r=e["initial"+ut(t)];return r!==void 0?r:F(e,t,n)}function Fn(e){var t=Ke(e,"selectedItem"),n=Ke(e,"isOpen"),i=Ke(e,"highlightedIndex"),r=Ke(e,"inputValue");return{highlightedIndex:i<0&&t&&n?e.items.indexOf(t):i,isOpen:n,selectedItem:t,inputValue:r}}function Ve(e,t,n){var i=e.items,r=e.initialHighlightedIndex,l=e.defaultHighlightedIndex,a=t.selectedItem,u=t.highlightedIndex;return i.length===0?-1:r!==void 0&&u===r?r:l!==void 0?l:a?i.indexOf(a):n===0?-1:n<0?i.length-1:0}function Bn(e,t,n,i){var r=p.useRef({isMouseDown:!1,isTouchMove:!1});return p.useEffect(function(){if((n==null?void 0:n.addEventListener)!=null){var l=function(){r.current.isMouseDown=!0},a=function(C){r.current.isMouseDown=!1,e&&!Rt(C.target,t.map(function(y){return y.current}),n)&&i()},u=function(){r.current.isTouchMove=!1},I=function(){r.current.isTouchMove=!0},h=function(C){e&&!r.current.isTouchMove&&!Rt(C.target,t.map(function(y){return y.current}),n,!1)&&i()};return n.addEventListener("mousedown",l),n.addEventListener("mouseup",a),n.addEventListener("touchstart",u),n.addEventListener("touchmove",I),n.addEventListener("touchend",h),function(){n.removeEventListener("mousedown",l),n.removeEventListener("mouseup",a),n.removeEventListener("touchstart",u),n.removeEventListener("touchmove",I),n.removeEventListener("touchend",h)}}},[e,n]),r}var Wn=function(){return lt};function Ot(e,t,n){var i=n.isInitialMount,r=n.highlightedIndex,l=n.items,a=n.environment,u=we(n,Dn);p.useEffect(function(){i||qn(function(){return e(w({highlightedIndex:r,highlightedItem:l[r],resultCount:l.length},u))},a.document)},t)}function zn(e){var t=e.highlightedIndex,n=e.isOpen,i=e.itemRefs,r=e.getItemNodeFromIndex,l=e.menuElement,a=e.scrollIntoView,u=p.useRef(!0);return Nn(function(){t<0||!n||!Object.keys(i.current).length||(u.current===!1?u.current=!0:a(r(t),l))},[t]),u}var Un=lt;function kt(e,t,n){var i;n===void 0&&(n=!0);var r=((i=e.items)==null?void 0:i.length)&&t>=0;return w({isOpen:!1,highlightedIndex:-1},r&&w({selectedItem:e.items[t],isOpen:F(e,"isOpen"),highlightedIndex:F(e,"highlightedIndex")},n&&{inputValue:e.itemToString(e.items[t])}))}var zt={environment:o.shape({addEventListener:o.func.isRequired,removeEventListener:o.func.isRequired,document:o.shape({createElement:o.func.isRequired,getElementById:o.func.isRequired,activeElement:o.any.isRequired,body:o.any.isRequired}).isRequired,Node:o.func.isRequired}),itemToString:o.func,stateReducer:o.func},Ut=w({},zt,{getA11yStatusMessage:o.func,highlightedIndex:o.number,defaultHighlightedIndex:o.number,initialHighlightedIndex:o.number,isOpen:o.bool,defaultIsOpen:o.bool,initialIsOpen:o.bool,selectedItem:o.any,initialSelectedItem:o.any,defaultSelectedItem:o.any,id:o.string,labelId:o.string,menuId:o.string,getItemId:o.func,toggleButtonId:o.string,onSelectedItemChange:o.func,onHighlightedIndexChange:o.func,onStateChange:o.func,onIsOpenChange:o.func,scrollIntoView:o.func});function Xn(e,t,n){var i=t.type,r=t.props,l;switch(i){case n.ItemMouseMove:l={highlightedIndex:t.disabled?-1:t.index};break;case n.MenuMouseLeave:l={highlightedIndex:-1};break;case n.ToggleButtonClick:case n.FunctionToggleMenu:l={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Ve(r,e,0)};break;case n.FunctionOpenMenu:l={isOpen:!0,highlightedIndex:Ve(r,e,0)};break;case n.FunctionCloseMenu:l={isOpen:!1};break;case n.FunctionSetHighlightedIndex:l={highlightedIndex:t.highlightedIndex};break;case n.FunctionSetInputValue:l={inputValue:t.inputValue};break;case n.FunctionReset:l={highlightedIndex:F(r,"highlightedIndex"),isOpen:F(r,"isOpen"),selectedItem:F(r,"selectedItem"),inputValue:F(r,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return w({},e,l)}Ie(Ie({},Ut),{items:o.array.isRequired,isItemDisabled:o.func,getA11ySelectionMessage:o.func});function Gn(e){var t=e.isOpen,n=e.resultCount,i=e.previousResultCount;return t?n?n!==i?"".concat(n," result").concat(n===1?" is":"s are"," available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select."):"":"No results are available.":""}Ie(Ie({},Me),{getA11yStatusMessage:Gn,isItemDisabled:function(){return!1}});var st=0,ot=1,dt=2,ct=3,ft=4,mt=5,pt=6,gt=7,ht=8,Be=9,vt=10,Xt=11,Gt=12,It=13,Yt=14,Jt=15,Qt=16,Zt=17,en=18,yt=19,tn=20,nn=21,xt=22,rn=Object.freeze({__proto__:null,InputKeyDownArrowDown:st,InputKeyDownArrowUp:ot,InputKeyDownEscape:dt,InputKeyDownHome:ct,InputKeyDownEnd:ft,InputKeyDownPageUp:mt,InputKeyDownPageDown:pt,InputKeyDownEnter:gt,InputChange:ht,InputBlur:Be,InputClick:vt,MenuMouseLeave:Xt,ItemMouseMove:Gt,ItemClick:It,ToggleButtonClick:Yt,FunctionToggleMenu:Jt,FunctionOpenMenu:Qt,FunctionCloseMenu:Zt,FunctionSetHighlightedIndex:en,FunctionSelectItem:yt,FunctionSetInputValue:tn,FunctionReset:nn,ControlledPropUpdatedSelectedItem:xt});function Yn(e){var t=Fn(e),n=t.selectedItem,i=t.inputValue;return i===""&&n&&e.defaultInputValue===void 0&&e.initialInputValue===void 0&&e.inputValue===void 0&&(i=e.itemToString(n)),w({},t,{inputValue:i})}w({},Ut,{items:o.array.isRequired,isItemDisabled:o.func,selectedItemChanged:o.func,getA11ySelectionMessage:o.func,inputValue:o.string,defaultInputValue:o.string,initialInputValue:o.string,inputId:o.string,onInputValueChange:o.func});function Jn(e,t,n){var i=p.useRef(),r=Kn(e,t,n),l=r[0],a=r[1];return p.useEffect(function(){Kt(n,"selectedItem")&&(n.selectedItemChanged(i.current,n.selectedItem)&&a({type:xt,inputValue:n.itemToString(n.selectedItem)}),i.current=l.selectedItem===i.current?n.selectedItem:l.selectedItem)},[l.selectedItem,n.selectedItem]),[et(l,n),a]}var Qn=lt,Zn=w({},Me,{selectedItemChanged:function(t,n){return t!==n},getA11yStatusMessage:kn,isItemDisabled:function(){return!1}});function er(e,t){var n,i=t.type,r=t.props,l=t.altKey,a;switch(i){case It:a={isOpen:F(r,"isOpen"),highlightedIndex:F(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case st:e.isOpen?a={highlightedIndex:$e(e.highlightedIndex,1,r.items,r.isItemDisabled,!0)}:a={highlightedIndex:l&&e.selectedItem==null?-1:Ve(r,e,1),isOpen:r.items.length>=0};break;case ot:e.isOpen?l?a=kt(r,e.highlightedIndex):a={highlightedIndex:$e(e.highlightedIndex,-1,r.items,r.isItemDisabled,!0)}:a={highlightedIndex:Ve(r,e,-1),isOpen:r.items.length>=0};break;case gt:a=kt(r,e.highlightedIndex);break;case dt:a=w({isOpen:!1,highlightedIndex:-1},!e.isOpen&&{selectedItem:null,inputValue:""});break;case mt:a={highlightedIndex:$e(e.highlightedIndex,-10,r.items,r.isItemDisabled,!0)};break;case pt:a={highlightedIndex:$e(e.highlightedIndex,10,r.items,r.isItemDisabled,!0)};break;case ct:a={highlightedIndex:Fe(0,!1,r.items,r.isItemDisabled)};break;case ft:a={highlightedIndex:Fe(r.items.length-1,!0,r.items,r.isItemDisabled)};break;case Be:a=w({isOpen:!1,highlightedIndex:-1},e.highlightedIndex>=0&&((n=r.items)==null?void 0:n.length)&&t.selectItem&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case ht:a={isOpen:!0,highlightedIndex:F(r,"highlightedIndex"),inputValue:t.inputValue};break;case vt:a={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:Ve(r,e,0)};break;case yt:a={selectedItem:t.selectedItem,inputValue:r.itemToString(t.selectedItem)};break;case xt:a={inputValue:t.inputValue};break;default:return Xn(e,t,rn)}return w({},e,a)}var tr=["onMouseLeave","refKey","ref"],nr=["item","index","refKey","ref","onMouseMove","onMouseDown","onClick","onPress","disabled"],rr=["onClick","onPress","refKey","ref"],ir=["onKeyDown","onChange","onInput","onBlur","onChangeText","onClick","refKey","ref"];an.stateChangeTypes=rn;function an(e){e===void 0&&(e={}),Qn();var t=w({},Zn,e),n=t.initialIsOpen,i=t.defaultIsOpen,r=t.items,l=t.scrollIntoView,a=t.environment,u=t.getA11yStatusMessage,I=t.getA11ySelectionMessage,h=t.itemToString,v=Yn(t),C=Jn(er,v,t),y=C[0],c=C[1],S=y.isOpen,A=y.highlightedIndex,R=y.selectedItem,j=y.inputValue,D=p.useRef(null),_=p.useRef({}),P=p.useRef(null),K=p.useRef(null),M=p.useRef(!0),x=Ln(t),ee=p.useRef(),O=Wt({state:y,props:t}),ie=p.useCallback(function(f){return _.current[x.getItemId(f)]},[x]);Ot(u,[S,A,j,r],w({isInitialMount:M.current,previousResultCount:ee.current,items:r,environment:a,itemToString:h},y)),Ot(I,[R],w({isInitialMount:M.current,previousResultCount:ee.current,items:r,environment:a,itemToString:h},y));var E=zn({menuElement:D.current,highlightedIndex:A,isOpen:S,itemRefs:_,scrollIntoView:l,getItemNodeFromIndex:ie});Un({isInitialMount:M.current,props:t,state:y}),p.useEffect(function(){var f=n||i||S;f&&P.current&&P.current.focus()},[]),p.useEffect(function(){M.current||(ee.current=r.length)});var T=Bn(S,[P,D,K],a,function(){c({type:Be,selectItem:!1})}),ae=Wn();p.useEffect(function(){return M.current=!1,function(){M.current=!0}},[]),p.useEffect(function(){var f;if(!S)_.current={};else if(((f=a.document)==null?void 0:f.activeElement)!==P.current){var d;P==null||(d=P.current)==null||d.focus()}},[S,a]);var B=p.useMemo(function(){return{ArrowDown:function(d){d.preventDefault(),c({type:st,altKey:d.altKey})},ArrowUp:function(d){d.preventDefault(),c({type:ot,altKey:d.altKey})},Home:function(d){O.current.state.isOpen&&(d.preventDefault(),c({type:ct}))},End:function(d){O.current.state.isOpen&&(d.preventDefault(),c({type:ft}))},Escape:function(d){var m=O.current.state;(m.isOpen||m.inputValue||m.selectedItem||m.highlightedIndex>-1)&&(d.preventDefault(),c({type:dt}))},Enter:function(d){var m=O.current.state;!m.isOpen||d.which===229||(d.preventDefault(),c({type:gt}))},PageUp:function(d){O.current.state.isOpen&&(d.preventDefault(),c({type:mt}))},PageDown:function(d){O.current.state.isOpen&&(d.preventDefault(),c({type:pt}))}}},[c,O]),V=p.useCallback(function(f){return w({id:x.labelId,htmlFor:x.inputId},f)},[x]),le=p.useCallback(function(f,d){var m,g=f===void 0?{}:f,q=g.onMouseLeave,N=g.refKey,L=N===void 0?"ref":N,H=g.ref,W=we(g,tr),G=d===void 0?{}:d;return G.suppressRefError,w((m={},m[L]=He(H,function(Y){D.current=Y}),m.id=x.menuId,m.role="listbox",m["aria-labelledby"]=W&&W["aria-label"]?void 0:""+x.labelId,m.onMouseLeave=X(q,function(){c({type:Xt})}),m),W)},[c,ae,x]),ue=p.useCallback(function(f){var d,m,g=f===void 0?{}:f,q=g.item,N=g.index,L=g.refKey,H=L===void 0?"ref":L,W=g.ref,G=g.onMouseMove,Y=g.onMouseDown,Ye=g.onClick;g.onPress;var ge=g.disabled,Je=we(g,nr);ge!==void 0&&console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.');var z=O.current,je=z.props,qe=z.state,Ne=Hn(q,N,je.items,"Pass either item or index to getItemProps!"),Qe=Ne[0],U=Ne[1],he=je.isItemDisabled(Qe,U),J="onClick",te=Ye,Q=function(){U!==qe.highlightedIndex&&(E.current=!1,c({type:Gt,index:U,disabled:he}))},ne=function(){c({type:It,index:U})},ln=function(un){return un.preventDefault()};return w((d={},d[H]=He(W,function(be){be&&(_.current[x.getItemId(U)]=be)}),d["aria-disabled"]=he,d["aria-selected"]=""+(U===qe.highlightedIndex),d.id=x.getItemId(U),d.role="option",d),!he&&(m={},m[J]=X(te,ne),m),{onMouseMove:X(G,Q),onMouseDown:X(Y,ln)},Je)},[c,O,E,x]),se=p.useCallback(function(f){var d,m=f===void 0?{}:f,g=m.onClick;m.onPress;var q=m.refKey,N=q===void 0?"ref":q,L=m.ref,H=we(m,rr),W=O.current.state,G=function(){c({type:Yt})};return w((d={},d[N]=He(L,function(Y){K.current=Y}),d["aria-controls"]=x.menuId,d["aria-expanded"]=W.isOpen,d.id=x.toggleButtonId,d.tabIndex=-1,d),!H.disabled&&w({},{onClick:X(g,G)}),H)},[c,O,x]),ye=p.useCallback(function(f,d){var m,g=f===void 0?{}:f,q=g.onKeyDown,N=g.onChange,L=g.onInput,H=g.onBlur;g.onChangeText;var W=g.onClick,G=g.refKey,Y=G===void 0?"ref":G,Ye=g.ref,ge=we(g,ir),Je=d===void 0?{}:d;Je.suppressRefError;var z=O.current.state,je=function(Q){var ne=Sn(Q);ne&&B[ne]&&B[ne](Q)},qe=function(Q){c({type:ht,inputValue:Q.target.value})},Ne=function(Q){if(z.isOpen&&!T.current.isMouseDown){var ne=Q.relatedTarget===null&&a.document.activeElement!==a.document.body;c({type:Be,selectItem:!ne})}},Qe=function(){c({type:vt})},U="onChange",he={};if(!ge.disabled){var J;he=(J={},J[U]=X(N,L,qe),J.onKeyDown=X(q,je),J.onBlur=X(H,Ne),J.onClick=X(W,Qe),J)}return w((m={},m[Y]=He(Ye,function(te){P.current=te}),m["aria-activedescendant"]=z.isOpen&&z.highlightedIndex>-1?x.getItemId(z.highlightedIndex):"",m["aria-autocomplete"]="list",m["aria-controls"]=x.menuId,m["aria-expanded"]=z.isOpen,m["aria-labelledby"]=ge&&ge["aria-label"]?void 0:x.labelId,m.autoComplete="off",m.id=x.inputId,m.role="combobox",m.value=z.inputValue,m),he,ge)},[ae,O,x,B,c,T,a]),xe=p.useCallback(function(){c({type:Jt})},[c]),oe=p.useCallback(function(){c({type:Zt})},[c]),de=p.useCallback(function(){c({type:Qt})},[c]),ce=p.useCallback(function(f){c({type:en,highlightedIndex:f})},[c]),fe=p.useCallback(function(f){c({type:yt,selectedItem:f})},[c]),me=p.useCallback(function(f){c({type:tn,inputValue:f})},[c]),pe=p.useCallback(function(){c({type:nn})},[c]);return{getItemProps:ue,getLabelProps:V,getMenuProps:le,getInputProps:ye,getToggleButtonProps:se,toggleMenu:xe,openMenu:de,closeMenu:oe,setHighlightedIndex:ce,setInputValue:me,selectItem:fe,reset:pe,highlightedIndex:A,isOpen:S,selectedItem:R,inputValue:j}}function ar(e){var t=e.removedSelectedItem,n=e.itemToString;return n(t)+" has been removed."}w({},zt,{selectedItems:o.array,initialSelectedItems:o.array,defaultSelectedItems:o.array,getA11yRemovalMessage:o.func,activeIndex:o.number,initialActiveIndex:o.number,defaultActiveIndex:o.number,onActiveIndexChange:o.func,onSelectedItemsChange:o.func,keyNavigationNext:o.string,keyNavigationPrevious:o.string});Me.itemToString,Me.stateReducer,Me.environment;const We=At(({isOpen:e=!1,items:t,searchValue:n,searchLink:{label:i,...r}={},searchNotFound:l,highlightedIndex:a=0,...u},I)=>s.jsxs(Z,{className:Re("autocomplete-result",u.className),ref:I,hidden:!e,children:[t.length>0&&s.jsxs(s.Fragment,{children:[t.map(({contentType:h,slug:v,title:C,description:y,date:c,readingTime:S,authors:A,...R},j)=>{const D=a===j;return s.jsx(ve.Fragment,{children:s.jsxs(Z,{...R,pt:{xs:"xxs"},pb:{xs:"xs"},px:{xs:"m"},className:Re("autocomplete-result__item",{"autocomplete-result__item--is-highlighted":D}),children:[s.jsxs(Ue,{alignItems:"center",gap:"xxs",children:[h===_t.TUTORIAL&&s.jsx(Tt,{}),s.jsx(bt,{size:"s",text:C,textQuery:n})]}),s.jsx(bt,{size:"xs",text:y,textQuery:n,hiddenBelow:"sm"}),s.jsx(ze,{color:"black",date:c,authors:A,displayedFields:["date","authors"]})]})},v)}),r&&i&&s.jsx(Z,{pt:{xs:"s",md:"m"},pb:{xs:"m",md:"l"},textSize:"s",fontWeight:"medium",textAlign:"center",children:s.jsx(Dt,{...r,children:i})})]}),t.length===0&&l&&s.jsxs(Z,{textAlign:"center",px:"xl",py:"m",children:[s.jsx("img",{src:fn("/imgs/not-found.png"),alt:"not-found"}),s.jsx(Et,{as:"p",size:"m",mt:"s",children:l.title}),s.jsx(re,{size:"xs",mt:"xxs",children:l.description})]})]}));We.displayName="AutocompleteResult";try{We.displayName="AutocompleteResult",We.__docgenInfo={description:"",displayName:"AutocompleteResult",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("header" & As<any>) | ("footer" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ... 172 more ...'}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & { label: string; })'}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}},highlightedIndex:{defaultValue:{value:"0"},description:"",name:"highlightedIndex",required:!1,type:{name:"number"}}}}}catch{}const tt=At(({placeholder:e,defaultValue:t,items:n=[],searchLink:{label:i,...r},searchNotFound:l,onInputValueChange:a,onSelectedItemChange:u,onEnter:I,...h},v)=>{const C=M=>{I&&M.key==="Enter"&&I(M.currentTarget.value)},{getInputProps:y,getMenuProps:c,getItemProps:S,selectItem:A,toggleMenu:R,isOpen:j,inputValue:D,highlightedIndex:_}=an({defaultInputValue:t,onInputValueChange:a,onSelectedItemChange:u,items:n,itemToString:M=>M?M.title:""}),P=()=>A(null),K=ve.useMemo(()=>n.map((M,x)=>({...M,...S({item:M,index:x})})),[n,S]);return s.jsxs(Z,{className:Re("autocomplete-field",h.className),ref:v,children:[s.jsx(sn,{input:y({placeholder:e,onKeyDown:C}),buttonSearch:r,buttonClose:{onClick:P},className:"autocomplete-field__input"}),s.jsx(We,{isOpen:j&&D.length>0,...c(),items:K,highlightedIndex:_===-1?0:_,searchValue:D,searchLink:{label:i,...r,onClick:R},searchNotFound:l})]})});tt.displayName="AutocompleteField";try{tt.displayName="AutocompleteField",tt.__docgenInfo={description:"",displayName:"AutocompleteField",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:'("symbol" & As<any>) | ("object" & As<any>) | ("header" & As<any>) | ("footer" & As<any>) | ("a" & As<any>) | ("abbr" & As<any>) | ("address" & As<any>) | ... 172 more ...'}},searchLink:{defaultValue:null,description:"",name:"searchLink",required:!0,type:{name:'Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any> | undefined; } & { label: string; }'}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((value: string) => void)"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:'(Omit<PropsOf<"a">, "ref" | "color"> & { as?: As<any>; } & AutocompleteItem)[]'}},searchValue:{defaultValue:null,description:"",name:"searchValue",required:!1,type:{name:"string"}},searchNotFound:{defaultValue:null,description:"",name:"searchNotFound",required:!1,type:{name:"{ title: string; description: string; }"}}}}}catch{}const St=({variant:e="common",...t})=>s.jsx(Z,{...t,className:Re("container",{[`container--${e}`]:e},t.className)});try{St.displayName="Container",St.__docgenInfo={description:"",displayName:"Container",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}},variant:{defaultValue:{value:"common"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"content"'},{value:'"global"'},{value:'"common"'}]}}}}}catch{}const nt=({isHighlighted:e,hasMask:t,isRelated:n,children:i,...r})=>s.jsxs(Z,{as:"article",className:Re("post-preview",{"post-preview--mask":t},{"post-preview--related":n},{"post-preview--highlighted":e}),...r,children:[e&&s.jsx("div",{className:"post-preview__sparkle"}),e?s.jsx(Z,{children:i}):i]});try{nt.displayName="PostPreviewCard",nt.__docgenInfo={description:"",displayName:"PostPreviewCard",props:{hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},isRelated:{defaultValue:null,description:"",name:"isRelated",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:null,description:"",name:"isHighlighted",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const rt=({isLoading:e,contentType:t,hasMask:n,title:i,link:r,isRelated:l,excerpt:a})=>{const u=n?i:s.jsx(Dt,{...r,"data-internal-link":l?"relatedPost":"post",children:i});return s.jsxs(s.Fragment,{children:[s.jsx(Ce,{isLoading:e,children:s.jsx(Et,{as:"h2",color:"amaranth",size:"s",children:t===_t.TUTORIAL?s.jsxs(Ue,{gap:"xxs",alignItems:"center",children:[s.jsx(Tt,{}),u]}):u})}),s.jsx(Ce,{isLoading:e,style:{height:75},children:s.jsx(re,{size:"s",className:"post-preview__excerpt",children:a})})]})};try{rt.displayName="PostPreviewContent",rt.__docgenInfo={description:"",displayName:"PostPreviewContent",props:{contentType:{defaultValue:null,description:"",name:"contentType",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"tutorial"'}]}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:'AsProps<"a">'}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},excerpt:{defaultValue:null,description:"",name:"excerpt",required:!1,type:{name:"ReactNode"}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},isRelated:{defaultValue:null,description:"",name:"isRelated",required:!1,type:{name:"boolean"}}}}}catch{}const it=({slug:e,contentType:t,title:n,excerpt:i,date:r,readingTime:l,authors:a,link:u={},hasMask:I,isRelated:h,isLoading:v=!1,isHighlighted:C=!1,...y})=>s.jsxs(nt,{isHighlighted:C,hasMask:I,isRelated:h,...y,children:[s.jsx(rt,{contentType:t,isLoading:v,isRelated:h,title:n,link:u,excerpt:i,hasMask:I}),s.jsx(ze,{mt:{xs:"xs",md:"s"},date:r,readingTime:l,authors:a})]});try{it.displayName="PostPreview",it.__docgenInfo={description:"",displayName:"PostPreview",props:{contentType:{defaultValue:null,description:"",name:"contentType",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"tutorial"'}]}},slug:{defaultValue:null,description:"",name:"slug",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | (ReactElement<any, string | JSXElementConstructor<any>> & string) | (Iterable<ReactNode> & string) | (ReactPortal & string)"}},excerpt:{defaultValue:null,description:"",name:"excerpt",required:!1,type:{name:"ReactNode"}},date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"ReactNode"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!1,type:{name:"number"}},authors:{defaultValue:null,description:"",name:"authors",required:!1,type:{name:"{ username: string; name: string; }[]"}},link:{defaultValue:{value:"{}"},description:"",name:"link",required:!1,type:{name:'AsProps<"a">'}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"{ source: string; alt: string; }"}},hasMask:{defaultValue:null,description:"",name:"hasMask",required:!1,type:{name:"boolean"}},isRelated:{defaultValue:null,description:"",name:"isRelated",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:{value:"false"},description:"",name:"isHighlighted",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}}}}}catch{}const Pt=({posts:e,pagination:t,isLoading:n=!1})=>s.jsxs(s.Fragment,{children:[e.map((i,r)=>s.jsxs(ve.Fragment,{children:[s.jsx(it,{hasMask:!!(t&&r===e.length-1),...i||{},isLoading:n}),e.length-1!==r&&s.jsx(wt,{my:"m",bg:"light-grey"}),e.length-1===r&&t&&s.jsx(wt,{size:"m",my:"m",mx:{md:"xl"},bg:"azure"})]},(i==null?void 0:i.slug)??r)),t&&s.jsxs(Ue,{flexDirection:"column",justifyContent:"center",alignItems:"center",children:[s.jsx(re,{size:"s",children:t.textNumberOfPosts}),s.jsx(dn,{mt:"xxs",value:t.numberOfPosts,max:t.maxNumberOfPosts}),s.jsx(on,{my:"s",onClick:t.onLoadMore,"data-button":"loadMore",children:t.loadMoreButtonLabel})]})]});try{Pt.displayName="PostPreviewList",Pt.__docgenInfo={description:"",displayName:"PostPreviewList",props:{posts:{defaultValue:null,description:"",name:"posts",required:!0,type:{name:"Partial<PostPreviewProps>[]"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:"{ textNumberOfPosts: ReactNode; numberOfPosts: number; maxNumberOfPosts: number; loadMoreButtonLabel: ReactNode; onLoadMore: () => void; }"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}try{ShareLinks.displayName="ShareLinks",ShareLinks.__docgenInfo={description:"",displayName:"ShareLinks",props:{urlToShare:{defaultValue:null,description:"",name:"urlToShare",required:!0,type:{name:"string"}}}}}catch{}const ze=({date:e,readingTime:t,authors:n,isLoading:i=!1,displayedFields:r=["date","readingTime","authors"],...l})=>{const a=r.reduce((u,I,h)=>{switch(I){case"date":u.push(s.jsx(Ce,{isLoading:i,display:"inline-block",style:{width:100},children:e&&s.jsx(re,{as:"span",children:e})},I));break;case"readingTime":u.push(s.jsx(Ce,{isLoading:i,display:"inline-block",style:{width:50},children:t&&s.jsx(re,{as:"span",children:`${t}mn`})},I));break;case"authors":u.push(s.jsx(Ce,{isLoading:i,display:"inline-block",style:{width:100},children:n&&n.map((v,C)=>s.jsxs(ve.Fragment,{children:[s.jsx(re,{as:"span",children:v.name}),C!==n.length-1&&s.jsx(re,{as:"span",children:" & "})]},v.name))},I));break}return h!==r.length-1&&u.push(s.jsx(cn,{},`circle-${I}`)),u},[]);return s.jsx(Ue,{...l,textSize:"xs",alignItems:"center",children:a})};try{ze.displayName="ArticleMetadata",ze.__docgenInfo={description:"",displayName:"ArticleMetadata",props:{date:{defaultValue:null,description:"",name:"date",required:!1,type:{name:"ReactNode"}},readingTime:{defaultValue:null,description:"",name:"readingTime",required:!1,type:{name:"number"}},authors:{defaultValue:null,description:"",name:"authors",required:!1,type:{name:"{ username: string; name: string; }[]"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},displayedFields:{defaultValue:{value:"['date', 'readingTime', 'authors']"},description:"",name:"displayedFields",required:!1,type:{name:'("contentType" | "date" | "readingTime" | "authors")[]'}}}}}catch{}export{tt as A,St as C,Pt as P,it as a,ze as b};
//# sourceMappingURL=ArticleMetadata-e3f147cb.js.map
