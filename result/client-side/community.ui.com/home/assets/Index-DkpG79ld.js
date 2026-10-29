import{j as s,e as u,g as ft,c as mt,r as l,R as be,x as pt,q as vt}from"./react-DGhZhtub.js";import{aV as Be,aZ as xt,dE as wt,dF as Ve,bD as S,aX as Fe,a as Ct,dG as bt,dH as Ge,dI as K,dJ as yt,dK as St,bd as P,d as k,dL as ye,bQ as X,bv as Z,cv as Et,cw as It,bE as $,dM as Mt,a$ as V,dN as We,c5 as Tt,bN as jt,d2 as Se,a_ as At,dO as Ot,dP as Lt,dQ as ze,dR as qe,dS as kt,dT as $t,dU as Nt,dV as _t,f as Ye,dW as F,dX as Dt,dY as Qe,dZ as Pt,b5 as Rt,bG as Ke,d_ as Ut,d$ as Ht,ba as Xe,bw as Bt,e0 as Vt,e1 as Ft,e as Ze,e2 as Gt,b3 as Ee,P as Wt,H as zt,e3 as Ie}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{h as qt,q as Me,bA as Yt,n as E,ad as R,bB as Qt,bC as Je,bD as et,bE as Kt,bF as Xt,bG as Zt,bH as Jt,bI as en,bJ as tn,bK as nn,bL as sn,a8 as A,aX as ae,a5 as rn,bM as Te,bN as je,bO as Ae,bP as on,bQ as an,a0 as ge,ax as cn}from"./index-BEhlHXuB.js";import{S as ln,q,d as tt,L as dn}from"./lodash-cGhQZeSM.js";import{A as Oe,T as un}from"./AssetUploader-Cj3FLjO9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="33865888-afcf-4af6-8eca-25b2c973860b",e._sentryDebugIdIdentifier="sentry-dbid-33865888-afcf-4af6-8eca-25b2c973860b")}catch{}})();const hn=e=>s.jsx(Be,{...e,children:s.jsx("path",{d:"M20 11v2H7.99l5.505 5.505-1.414 1.414L4.16 12l7.92-7.92 1.414 1.415L7.99 11H20z"})}),gn=e=>s.jsx(Be,{...e,children:s.jsx("path",{d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"})}),fe=({marginY:e})=>{const t=e!==void 0?`my-${e}`:"my-10";return s.jsx("div",{className:xt("w-full flex justify-center h-30",t),children:s.jsx(gn,{className:"text-blue",size:15,style:{animation:"spin 600ms linear infinite",transformOrigin:"15px 15px"}})})},fn=u.div`
  height: ${({$height:e})=>e?`${e}px`:"100%"};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,mn=u.div`
  height: 100%;
  overflow: hidden;
  background-color: ${({theme:e})=>e.neutral01};
  border-radius: 8px;

  @media (min-width: ${qt.small}) {
    padding: 0px;
  }
`,pn=u.div`
  height: 100%;
`,vn=({children:e,height:t})=>s.jsx(fn,{$height:t,children:s.jsx(mn,{children:s.jsx(pn,{children:e})})}),ne=50,me=50;var nt={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(mt,function(){/*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0

	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.

	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */var n=function(){return n=Object.assign||function(v){for(var b,j=1,y=arguments.length;j<y;j++){b=arguments[j];for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&(v[T]=b[T])}return v},n.apply(this,arguments)};function r(){var g=document.createElement("div");return g.style.cssText="position: fixed; top: 0; height: 100vh; pointer-events: none;",document.documentElement.insertBefore(g,document.documentElement.firstChild),g}function o(g){document.documentElement.removeChild(g)}function c(){var g=r(),v=window.innerHeight,b=g.offsetHeight,j=b-v;return o(g),{vh:b,windowHeight:v,offset:j,isNeeded:j!==0,value:0}}function a(){}function d(){var g=c();return g.value=g.offset,g}function i(){var g=c();return g.value=g.windowHeight*.01,g}var f=Object.freeze({noop:a,computeDifference:d,redefineVhUnit:i});function h(g){return typeof g=="string"&&g.length>0}function m(g){return typeof g=="function"}var x=Object.freeze({cssVarName:"vh-offset",redefineVh:!1,method:d,force:!1,bind:!0,updateOnTouch:!1,onUpdate:a});function p(g){if(h(g))return n({},x,{cssVarName:g});if(typeof g!="object")return x;var v={force:g.force===!0,bind:g.bind!==!1,updateOnTouch:g.updateOnTouch===!0,onUpdate:m(g.onUpdate)?g.onUpdate:a},b=g.redefineVh===!0;return v.method=f[b?"redefineVhUnit":"computeDifference"],v.cssVarName=h(g.cssVarName)?g.cssVarName:b?"vh":x.cssVarName,v}var I=!1,C=[];try{var w=Object.defineProperty({},"passive",{get:function(){I=!0}});window.addEventListener("test",w,w),window.removeEventListener("test",w,w)}catch{I=!1}function L(g,v){C.push({eventName:g,callback:v}),window.addEventListener(g,v,I?{passive:!0}:!1)}function M(){C.forEach(function(g){window.removeEventListener(g.eventName,g.callback)}),C=[]}function O(g,v){document.documentElement.style.setProperty("--"+g,v.value+"px")}function N(g,v){return n({},g,{unbind:M,recompute:v.method})}function H(g){var v=Object.freeze(p(g)),b=N(v.method(),v);if(!b.isNeeded&&!v.force||(O(v.cssVarName,b),v.onUpdate(b),!v.bind))return b;function j(){window.requestAnimationFrame(function(){var y=v.method();O(v.cssVarName,y),v.onUpdate(N(y,v))})}return b.unbind(),L("orientationchange",j),v.updateOnTouch&&L("touchmove",j),b}return H})})(nt);var xn=nt.exports;const wn=ft(xn),pe=e=>e===Me.XS||e===Me.SM,Cn=e=>{const{screenWidth:t,headersHeight:n=0,windowHeight:r=0}=e,o=wt(),c=pe(t),d=o||c?8:24,i=wn("mobile-url-bar"),f=o&&i&&i.offset||0;return{height:r-(n+f+d*2),marginY:d}},bn=e=>{const{isMobile:t,viewPortHeight:n,isKeyboardOpen:r,headerHeight:o,screenWidth:c}=e;return!t||!n?Cn({screenWidth:c,headersHeight:o,windowHeight:n}).height:r?n:n-o},yn=u(S)`
  min-width: 0;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.divider};
  cursor: pointer;
`,Sn=u.div`
  flex: 0 0 auto;
`,En=u.div`
  margin-left: 11px;
  width: 100%;
`,In=u.div`
  font-size: 15px;
  background-color: ${({theme:e})=>e.neutral02};
  width: 40%;
  height: 16px;
  margin-bottom: 5px;
`,Mn=u.div`
  background-color: ${({theme:e})=>e.neutral02};
  width: 53px;
  height: 11px;
  margin-right: 21px;
`,Tn=u.div`
  background-color: ${({theme:e})=>e.neutral02};
  width: 80%;
  height: 11px;
`,jn=()=>s.jsxs(yn,{alignItems:"center",children:[s.jsx(Sn,{children:s.jsx(Ve,{})}),s.jsxs(En,{children:[s.jsxs(S,{justifyContent:"space-between",children:[s.jsx(In,{}),s.jsx(Mn,{})]}),s.jsx(Tn,{})]})]}),An=u(S)`
  height: 100%;
  width: 100%;
`,On=u.div`
  margin-top: auto;
  padding: 11px;
  border-top: 1px solid ${e=>e.theme.neutral03};
  min-height: 80px;
`,Ln=u.span`
  background-color: ${e=>e.theme.neutral02};
  color: transparent;
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  height: 32px;
`,kn=u.div`
  width: 100%;
`,$n=()=>s.jsx(On,{children:s.jsxs(An,{d:"v",justifyContent:"space-between",alignItems:"center",children:[s.jsx(kn,{}),s.jsx(S,{alignItems:"center",children:s.jsx(Ln,{children:"Send"})})]})}),Nn=u(S)`
  max-width: 66.667%;
  margin-top: 5px;
  margin-left: ${({$right:e})=>e?"auto":"0"};
`,_n=u.div`
  width: ${({$width:e})=>e||"40%"};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.neutral02};
  height: 32px;
  padding-top: 1px;
  margin-left: ${({$right:e,$noAvatar:t})=>e?"auto":t?"46px":"11px"};
  margin-right: ${({$right:e})=>e?"11px":"0"};
`,Dn=e=>{const{left:t,right:n,width:r="40%"}=e;return s.jsxs(Nn,{alignItems:"flex-start",$right:n,children:[t&&s.jsx(Ve,{}),s.jsx(_n,{$width:r,$right:n,$noAvatar:!t&&!n})]})},Pn=()=>{const e=[{left:!0},{width:"20%"},{right:!0,width:"33%"},{left:!0,width:"25%"},{width:"50%"},{right:!0,width:"60%"},{right:!0,width:"16%"},{right:!0},{left:!0,width:"25%"},{width:"40%"},{right:!0,width:"40%"},{left:!0,width:"25%"},{width:"20%"},{right:!0,width:"40%"},{right:!0,width:"16%"},{right:!0}];return s.jsx(s.Fragment,{children:e.map((t,n)=>s.jsx(Dn,{...t},n))})},Rn=u.div`
  display: flex;
  height: 100%;
`,Un=u.div`
  border-right: 1px solid ${({theme:e})=>e.neutral03};
  height: 100%;
  overflow-y: hidden;
  width: ${({$isMobile:e})=>e?"100%":"40%"};
`,Hn=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.neutral03};
`,Bn=u.div`
  background-color: ${({theme:e})=>e.neutral02};
  border-radius: 3px;
  padding: 0 3px;
  margin: 15px;
  height: 30px;

  @media (min-width: 768px) {
    margin: 10px;
  }
`,Vn=u(S)`
  width: 60%;
`,Fn=u.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  padding: 30px 20px 20px 20px;
`,Gn=()=>{const{screenWidth:e}=l.useContext(Fe),t=pe(e);return s.jsxs(Rn,{children:[s.jsxs(Un,{$isMobile:t,children:[s.jsx(Hn,{children:s.jsx(Bn,{})}),ln(20).map(n=>s.jsx(jn,{},n))]}),!t&&s.jsx(Vn,{d:"v",children:s.jsx(ie,{})})]})},ie=()=>s.jsxs(s.Fragment,{children:[s.jsx(Fn,{children:s.jsx(Pn,{})}),s.jsx($n,{})]}),Wn=e=>{const{children:t}=e;return s.jsx(Yt,{variables:{limit:ne},fetchPolicy:"network-only",children:({loading:n,error:r,data:o})=>r?s.jsx(Ct,{}):n?s.jsx(Gn,{}):o?t({conversations:o.conversations}):s.jsx(bt,{})})},st=e=>{const t={id:e,messageLimit:me};return{id:`Conversation:${e}`,fragment:Kt,fragmentName:"Conversation",variables:t}},G=e=>{var n;const t=st(e);try{return{fragment:E.readFragment(t),opts:t}}catch(r){const o=r;if((n=o==null?void 0:o.message)!=null&&n.indexOf("Error: Can't find field messages on object"))return{opts:t};throw o}},zn=e=>{const t=st(e.id);E.writeFragment({...t,data:e})},B=(e,t)=>{const{data:n,query:r,variables:o}=se();if(!n)return;const c={...n,conversations:{...n.conversations,items:[e,...n.conversations.items.filter(({id:a})=>!((t==null?void 0:t.id)===a||a===e.id))]}};E.writeQuery({query:r,variables:o,data:c})},Le=e=>{const{data:t,query:n,variables:r}=se();if(!t)return;const o=t.conversations.items.filter(a=>a.id!==e.id),c={...t,conversations:{...t.conversations,items:o}};E.writeQuery({query:n,variables:r,data:c})},ce=e=>{const t=Je,n={id:e.id};E.writeQuery({query:t,variables:n,data:{conversation:e}})},se=()=>{const e=et,t={limit:ne};try{return{data:E.readQuery({query:e,variables:t}),query:e,variables:t}}catch(n){const r=n;if(r.message&&r.message.indexOf("Can't find field")===0)return console.error("conversations(Query) error: "+r.message),{data:null,query:e,variables:t};throw r}};let qn=0;const rt="TEMP_CONVERSATION",Yn=(e,t)=>{const n=new Date().toISOString();return{createdAt:n,preview:Ge(K()),id:`${rt}_${qn++}`,messages:{__typename:"Messages",cursorInfo:{__typename:"CursorInfo",start:new Date,end:new Date,limit:0,hasMore:!1},items:[]},users:[{...e,title:(e==null?void 0:e.title)??null},{...t,title:(t==null?void 0:t.title)??null}],lastActivityAt:n,userStatus:xe(n),__typename:"Conversation"}},Qn=e=>e?e.indexOf(rt)===0:!1,ve=(e,t)=>{const n=q(e,r=>r.id!==t.id);return n?Object.keys(n).length===0?Qt:n:R},Kn=(e,t,n)=>{const r=[t.id,n.id].sort(),o=((e==null?void 0:e.users)??[]).map(({id:c})=>c).sort();return o.length===2&&o[0]===r[0]&&o[1]===r[1]},Xn=(e,t)=>{const{data:n}=se();return n?q(n.conversations.items,o=>Kn(o,e,t)):void 0},Zn=e=>({__typename:"User",id:e.id,slug:e.slug,username:e.username,registeredAt:e.registeredAt,lastOnlineAt:e.lastOnlineAt,avatar:{__typename:"UserAvatar",...e.avatar},groups:e.groups,isEmployee:e.isEmployee,showOfficialBadge:e.showOfficialBadge,canBeMentioned:e.canBeMentioned,canViewProfile:e.canViewProfile,canStartConversationWith:e.canStartConversationWith,title:e.title}),Jn=(e,t,n)=>{const r=new Date().toISOString();return{__typename:"Message",conversationId:e.input.conversationId,content:Ge(t),createdAt:r,id:e.input.id,author:Zn(n)}},ke=e=>ot([e],{setLastSeenToNow:!0,setLastSeenToSpecific:e.createdAt}),es=(e,t)=>ot(e,{setLastSeenToNow:t}),xe=e=>({__typename:"UserStatus",isFollowing:!1,lastViewedAt:e,reported:!1,vote:0}),ot=(e,t)=>{if(e.length===0)return;const{setLastSeenToNow:n,setLastSeenToSpecific:r}=t,{fragment:o,opts:c}=G(e[0].conversationId);if(!o)return;const a=e.map(m=>m.id),d=o.messages.items.filter(m=>a.indexOf(m.id)<0),i=n?xe(r||new Date().toISOString()):o.userStatus,f=e[e.length-1],h={...o,preview:yt(f.content)?f.content:o.preview,lastActivityAt:f.createdAt,userStatus:i,messages:{...o.messages,items:d.concat(e).map(m=>{var x;return{...m,author:m.author?{...m.author,title:((x=m==null?void 0:m.author)==null?void 0:x.title)??""}:void 0}})}};E.writeFragment({...c,data:h})},ts=e=>{const{fragment:t,opts:n}=G(e.conversationId);if(!t)return;const r=t.messages.items.filter(c=>e?c.id!==e.id:!0),o={...t,messages:{...t.messages,items:r}};E.writeFragment({...n,data:o})},J=e=>{const t=e.userStatus&&e.userStatus.lastViewedAt,n=e.lastActivityAt;return t?n?new Date(t).getTime()>=new Date(n).getTime():!0:!1},at=e=>{const t=new Date().toISOString(),n=e.userStatus?{...e.userStatus,lastViewedAt:t}:xe(t),r={...e,userStatus:n};zn(r)},ns=e=>{const{fragment:t}=G(e);t&&at(t)},ss=async(e,t)=>{try{const n={input:{receiverId:t.id,id:e}},{data:r,errors:o}=await E.mutate({mutation:en,variables:n});if(P(o))return k("Error while creating conversation",o),{errors:o};const c=r.createConversation;return c?{newConversation:c}:{}}catch(n){const r=[n];return k("Error while creating conversation",r),{errors:r}}},it=async(e,t=!1)=>{try{const{errors:n,data:r}=await E.query({query:Je,fetchPolicy:t?"network-only":"cache-first",variables:e});if(P(n))return k("Error while finding conversation",n),{errors:n};const o=r.conversation;return o?{conversation:o}:{}}catch(n){const r=[n];return k("Error while finding conversation",r),{errors:r}}},W=async e=>{try{const t={entityId:e.id,entityType:Xt.Conversation},{errors:n}=await E.mutate({mutation:Zt,variables:t,refetchQueries:[{query:St}]});return P(n)?{errors:n}:{}}catch(t){return{errors:[t]}}},rs=async e=>{try{const t=et,n={before:e,limit:ne},{errors:r,data:o}=await E.query({query:t,variables:n,fetchPolicy:"network-only"});return P(r)?(k("Error while loading conversations",r),{errors:r,query:t,variables:n}):!o||!o.conversations?{}:{conversations:o.conversations,query:t,variables:n}}catch(t){const n=[t];return k("Error while loading conversations",n),{errors:n}}},os=async e=>{try{const t=nn,{data:n,errors:r}=await E.query({query:t,variables:e,fetchPolicy:"network-only"});return P(r)?(k("Error while loading messages",r),{errors:r}):!n||!n.conversation?{}:{messages:n.conversation.messages}}catch(t){const n=[t];return k("Error while loading messages",n),{errors:n}}},as=async e=>{try{const{errors:t,data:n}=await E.mutate({mutation:sn,variables:e});return P(t)?(k("Error while sending message",t),{errors:t}):{newMessage:n&&n.createMessage}}catch(t){const n=[t];return k("Error while sending message",n),{errors:n}}},is=async e=>{try{const t=Jt,n={after:e},{data:r,errors:o}=await E.query({query:t,variables:n,fetchPolicy:"network-only"});return P(o)?{errors:o}:!r||!r.newMessages?{}:{newMessages:r.newMessages}}catch(t){return{errors:[t]}}},cs=async e=>{try{const{errors:t,data:n}=await E.query({query:tn,variables:{id:e},fetchPolicy:"cache-first"});if(P(t)){console.error(`Error while querying user: ${ye(t)}`);return}return!n||!n.user?void 0:n.user}catch(t){console.error(`Error while querying user: ${ye([t])}`);return}},ls=u(S)`
  min-width: 0;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid ${({theme:e})=>e.neutral03};
  cursor: pointer;
  background-color: ${({$isSelected:e,theme:t})=>e?t.ublue01:"transparent"};

  &:hover {
    background-color: ${({$isSelected:e,theme:t})=>e?t.ublue01:t.neutral01};
  }
`,ds=u.div`
  flex-shrink: 0;
`,us=u.div`
  min-width: 0;
  margin-left: 10px;
  width: 100%;
`,hs=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,gs=u.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fs=e=>{const{conversation:t,currentUser:n,isSelected:r,onClick:o,navigate:c}=e,{preview:a,lastActivityAt:d}=t,i=ve(t.users,n),f=(i==null?void 0:i.id)==="loading",h=J(t),m=x=>{if(x.stopPropagation(),i){const p=`/user/${i.username}/${i.id}`;Tt(p)||c(p)}};return s.jsxs(ls,{alignItems:"center",$isSelected:r,onClick:()=>o(t),children:[s.jsx(ds,{onClick:m,children:s.jsx(X,{username:i==null?void 0:i.username,isEmployee:i==null?void 0:i.isEmployee,avatarDetails:i!=null&&i.avatar?{image:i.avatar.image,acronym:i.avatar.content,acronymBackground:Z(i.username)}:void 0,lastActiveAt:i==null?void 0:i.lastOnlineAt,size:"large2"})}),s.jsxs(us,{children:[s.jsxs(hs,{children:[f?s.jsx(Et,{width:200,children:s.jsx(It.Text,{})}):s.jsx($,{size:"medium",weight:h?"regular":"bold",color:"text-1",onClick:m,style:{cursor:"pointer"},children:i&&i.username}),s.jsx($,{size:"small",weight:h?"regular":"bold",color:"text-3",title:d?V(d,"dddd, MMMM Do, YYYY H:mm"):"",style:{marginRight:"20px"},children:d?Mt(d):"No messages yet"})]}),s.jsx(gs,{children:s.jsx($,{size:"small",weight:h?"regular":"bold",color:"text-3",children:a&&We(a)||"No messages yet"})})]})]})},ms=u.div`
  width: 100%;
  height: 50%;
  flex-grow: 1;
  padding-bottom: ${({$isLoading:e})=>e?"160px":"0"};
`,ps=u(jt)`
  width: 100%;
  height: 100%;
`,vs=u.div``,xs=e=>{const{currentUser:t,conversations:n,onConversationClick:r,selectedConversationId:o,navigate:c}=e,[a,d]=l.useState(!1),i=l.useRef(null),f=l.useRef(null);l.useEffect(()=>{f.current&&f.current.scrollIntoView()},[o]);const h=l.useCallback(()=>{if(!i.current)return!1;const{scrollTop:p,clientHeight:I,scrollHeight:C}=i.current;return p+I===C},[]),m=l.useCallback(async()=>{const{data:p}=se();if(!p)return;const{end:I,hasMore:C}=p.conversations.cursorInfo;if(!C)return;d(!0);const{conversations:w,errors:L,query:M}=await rs(I);if(d(!1),L||!w||!M)return;const O=p.conversations,N=w,H=((N==null?void 0:N.items)??[]).filter(({id:b})=>!q(O.items,({id:j})=>j===b)),g={...p,conversations:{...p.conversations,cursorInfo:N.cursorInfo,items:[...O.items,...H]}},v={limit:ne};E.writeQuery({query:M,variables:v,data:g})},[]),x=l.useCallback(async()=>{h()&&!a&&await m()},[h,a,m]);return s.jsxs(ms,{$isLoading:a,children:[s.jsx(ps,{ref:i,onScroll:x,children:n.items.map(p=>s.jsx(vs,{ref:o===p.id?f:void 0,children:s.jsx(fs,{conversation:p,currentUser:t,isSelected:p.id===o,onClick:()=>r(p),navigate:c})},p.id))}),a&&s.jsx(fe,{marginY:5})]})},ws=()=>s.jsx(S,{alignItems:"center",justifyContent:"center",padding:"desktop-spacing-large-1",children:s.jsx($,{variant:"heading-medium",children:"No Conversations"})}),Cs=["auto","scroll"],$e={startY:0,isTouching:!1},Ne={passive:!1},_e={passive:!0},bs=e=>Cs.some(t=>t===e),ys=e=>{const{overflowY:t}=window.getComputedStyle(e),n=bs(t),r=e.scrollHeight>e.clientHeight;return n&&r},ct=(e,t)=>!e||e===t?null:ys(e)?e:ct(e.parentElement,t),Ss=(e,t)=>{const n=e-t;return n>0?"DOWN":n<0?"UP":"NONE"},Es=(e,t)=>{const{scrollTop:n,scrollHeight:r,clientHeight:o}=e,c=r-o;switch(t){case"DOWN":return n<c;case"UP":return n>0;case"NONE":return!1}},Is=(e,t,n)=>{const r=Ss(t,n);return Es(e,r)},Ms=e=>e instanceof HTMLElement,we=()=>{const e=l.useRef(null),t=l.useRef($e);return l.useEffect(()=>{const n=e.current;if(!n)return;const r=a=>{const d=a.touches[0];d&&(t.current={startY:d.clientY,isTouching:!0})},o=a=>{if(!t.current.isTouching)return;const d=a.touches[0];if(!d)return;const i=a.target;if(!Ms(i))return;const f=ct(i,n);if(f&&f!==n&&Is(f,t.current.startY,d.clientY)){a.stopPropagation();return}a.preventDefault(),a.stopPropagation()},c=()=>{t.current=$e};return n.addEventListener("touchstart",r,Ne),n.addEventListener("touchmove",o,Ne),n.addEventListener("touchend",c,_e),n.addEventListener("touchcancel",c,_e),()=>{n.removeEventListener("touchstart",r),n.removeEventListener("touchmove",o),n.removeEventListener("touchend",c),n.removeEventListener("touchcancel",c)}},[]),e};function lt(){const[e,t]=l.useState(0);return l.useEffect(()=>{var o,c;const n=()=>{var a;t(((a=window.visualViewport)==null?void 0:a.offsetTop)||0)},r=tt(n,50);return n(),(o=window.visualViewport)==null||o.addEventListener("resize",n),(c=window.visualViewport)==null||c.addEventListener("scroll",r),()=>{var a,d;(a=window.visualViewport)==null||a.removeEventListener("resize",n),(d=window.visualViewport)==null||d.removeEventListener("scroll",r),r.cancel()}},[]),{offsetTop:e,isKeyboardOpen:e>0}}function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function Ts(e){return!!(e&&e._tippy&&e._tippy.reference===e)}var js={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1};le({allowHTML:!0,animation:"fade",appendTo:function(){return document.body},aria:"describedby",arrow:!0,boundary:"scrollParent",content:"",delay:0,distance:10,duration:[300,250],flip:!0,flipBehavior:"flip",flipOnUpdate:!1,hideOnClick:!0,ignoreAttributes:!1,inertia:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,lazy:!0,maxWidth:350,multiple:!1,offset:0,onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},placement:"top",plugins:[],popperOptions:{},role:"tooltip",showOnCreate:!1,theme:"",touch:!0,trigger:"mouseenter focus",triggerTarget:null,updateDuration:0,zIndex:9999},js);var As=[],Os=function(t){var n=t===void 0?{}:t,r=n.exclude,o=n.duration;As.forEach(function(c){var a=!1;r&&(a=Ts(r)?c.reference===r:c.popper===r.popper),a||c.hide(o)})};const Ls=e=>dt(e,new Date),dt=(e,t)=>e.getUTCFullYear()===t.getUTCFullYear()&&e.getUTCMonth()===t.getUTCMonth()&&e.getUTCDate()===t.getUTCDate(),De=e=>{const t=new Date;return Ls(e)?"Today":Se(e).isAfter(Se(t).subtract(7,"day"))?V(e.getTime(),"ddd"):e.getUTCFullYear()===t.getUTCFullYear()?V(e.getTime(),"MMM Do"):`${V(e.getTime(),"MMM Do, YYYY")}`},ks=e=>{const{additionalText:t,message:n,prevMessage:r}=e;if(!r){let o=De(new Date(n.createdAt));return t&&(o+=` (${t})`),s.jsx(de,{text:o})}if(r&&!dt(new Date(n.createdAt),new Date(r.createdAt))){let o=De(new Date(n.createdAt));return t&&(o+=` (${t})`),s.jsx(de,{text:o})}return null},de=({text:e})=>s.jsx(S,{justifyContent:"center",children:s.jsx($,{color:"text-3",size:"small",children:e})}),$s=u(At)`
  flex-shrink: 0;
`,Ns=u.div`
  flex-shrink: 0;
`,_s=e=>{const{author:t,hideAvatar:n,isAuthorCurrent:r}=e;return r||n?null:t?s.jsx($s,{to:`/user/${t.id}`,children:s.jsx(X,{username:t.username,isEmployee:t.isEmployee,lastActiveAt:t.lastOnlineAt,avatarDetails:{image:t.avatar.image,acronym:t.avatar.content,acronymBackground:Z(t.username)}})}):s.jsx(Ns,{children:s.jsx(X,{username:R.username,isEmployee:R.isEmployee,lastActiveAt:R.lastOnlineAt,avatarDetails:{image:R.avatar.image,acronym:R.avatar.content,acronymBackground:Z(R.username)}})})},U={MESSAGE_BLOCK_MARGIN_TOP:"5px",MESSAGE_CONTAINER_MARGIN_LEFT:"10px",MESSAGE_CONTAINER_MARGIN_RIGHT:"10px",HIDDEN_AVATAR_OFFSET:"42px",TEXT_PADDING:"5px 10px",IMAGE_PADDING:"5px",ATTACHMENT_MARGIN_BOTTOM:"5px"},Ce={MESSAGE_BLOCK_WIDTH:"66%",BORDER_RADIUS:"6px",IMAGE_BORDER_WIDTH:"3px"},Y={AUTHOR_CURRENT:"messages-item-self",ATTACHMENTS:"messages-item-attachments-block",IMAGES:"messages-item-images-block",DEFAULT:"messages-item"},Ds=50,Ps=1,Pe=2e4,ut=e=>e.trim().length,Rs=e=>{qe();const t=ut(e);return t===0?!1:t>Pe?(k("Validation error",[new Error(`Content needs to be between ${Ps} and ${Pe}`)]),!1):!0},Us=async(e,t,n)=>{const r=We(n),o=Rs(r);if(Ot(n)&&!o)return;ut(r)===0&&n.length>1&&n.shift();const a=t.id,d={input:{id:ze(),conversationId:a,content:Lt(n)}},i=Jn(d,n,e);B(t),ke(i);const{errors:f,newMessage:h}=await as(d);if(f){ts(i);return}h&&(W(t),ke(h))},Hs=e=>V(e,"h:mm a"),Bs=(e,t,n)=>e?!0:(t===A.Images||t===A.Attachments)&&n>1,Vs=(e,t)=>e?Y.AUTHOR_CURRENT:t===A.Attachments?Y.ATTACHMENTS:t===A.Images?Y.IMAGES:Y.DEFAULT,Fs=e=>e.type===A.Text,Gs=e=>e.type===A.Images,Ws=e=>e.type===A.Attachments,zs=(e,t)=>e?"auto":t?U.HIDDEN_AVATAR_OFFSET:U.MESSAGE_CONTAINER_MARGIN_LEFT,qs=e=>{switch(e){case A.Text:return U.TEXT_PADDING;case A.Images:return U.IMAGE_PADDING;case A.Attachments:default:return"0"}},Ys=(e,t,n)=>n===A.Attachments||n===A.Images&&t?"transparent":n===A.Text&&t?e.ublue06:t?"transparent":e.neutral02,Qs=(e,t,n)=>t&&n===A.Images?`${Ce.IMAGE_BORDER_WIDTH} solid ${e.ublue06}`:"none",Ks=e=>{const{block:t,currentLightboxImgSrc:n,onImageClick:r,onCloseLightbox:o}=e;return Fs(t)?s.jsx(kt,{block:t,className:"editor-text-block-messages",suffix:null,isLineBreakRequired:!0}):Gs(t)?s.jsxs(s.Fragment,{children:[s.jsx($t,{block:t,onImageClick:r,isMessages:!0,idx:0,totalCount:0}),n&&s.jsx(Nt,{editorState:[t],onClose:o,src:n})]}):Ws(t)?s.jsx(_t,{idx:0,block:t,isMessages:!0,attachmentDownloadOptions:e.attachmentDownloadOptions}):null},Xs=u(S)`
  width: ${Ce.MESSAGE_BLOCK_WIDTH};
  margin-top: ${U.MESSAGE_BLOCK_MARGIN_TOP};
  margin-left: ${({$isAuthorCurrent:e})=>e?"auto":"0"};
`,Zs=u.div`
  border-radius: ${Ce.BORDER_RADIUS};
  margin-left: ${({$isAuthorCurrent:e,$hideAvatar:t})=>zs(e,t)};
  margin-right: ${({$isAuthorCurrent:e})=>e?U.MESSAGE_CONTAINER_MARGIN_RIGHT:"0"};
  word-wrap: break-word;
  max-width: 100%;
  padding: ${({$contentType:e})=>qs(e)};
  margin-bottom: ${({$contentType:e})=>e===rn.Attachments?U.ATTACHMENT_MARGIN_BOTTOM:"0"};
  background-color: ${({theme:e,$isAuthorCurrent:t,$contentType:n})=>Ys(e,t,n)};
  border: ${({theme:e,$isAuthorCurrent:t,$contentType:n})=>Qs(e,t,n)};
`,Js=l.forwardRef(({currentUser:e,hideAvatar:t,message:n},r)=>{const[o,c]=l.useState(null),a=!!(n.author&&n.author.id===e.id),d=l.useCallback(()=>{c(null)},[]);return s.jsx(s.Fragment,{children:n.content.map((i,f)=>{const h=Bs(t,i.type,n.content.length);return s.jsxs(Xs,{ref:r,alignItems:"flex-start",justifyContent:a?"flex-end":"flex-start",$isAuthorCurrent:a,children:[s.jsx(_s,{author:n.author,hideAvatar:h,isAuthorCurrent:a}),s.jsx(Ye,{placement:a?"left":"right",description:n.createdAt&&Hs(n.createdAt),children:s.jsx(Zs,{className:Vs(a,i.type),$isAuthorCurrent:a,$contentType:i.type,$hideAvatar:!a&&h,children:s.jsx(Ks,{block:i,currentLightboxImgSrc:o,onImageClick:c,onCloseLightbox:d,attachmentDownloadOptions:{entityId:n.id,entityType:ae.Message}})})})]},f)})})}),er=l.forwardRef((e,t)=>{const{message:n,prevMessage:r,currentUser:o,isFirstMessage:c,isLastMessage:a,isStart:d,startText:i}=e,f=c&&d?i:"",h=!!(r&&n.author===r.author),m=l.useCallback(x=>{a&&t&&"current"in t&&(t.current=x)},[a,t]);return s.jsxs("div",{ref:m,children:[s.jsx(ks,{additionalText:f,message:n,prevMessage:r}),s.jsx(Js,{message:n,currentUser:o,hideAvatar:h})]})}),z="messages",tr=(e,t)=>{const n=F(e),r=F(t);return n!==z&&r===z},nr=(e,t)=>{const n=F(e),r=F(t);return n===z&&r!==z},sr=e=>F(e)===z;let ue=null;const rr=e=>{ue=e};let ee=null,oe=null,te=null;const or=e=>{const t=dn(e,n=>n.conversationId);return Object.keys(t).map(n=>({id:n,messages:t[n]}))},ar=(e,t)=>{ee||(ee=e),te?tr(oe,t)?(Re(),Q(Te)):nr(oe,t)&&(Re(),Q(je)):sr(t)?Q(Te):Q(je),oe=t},Re=()=>{te&&window.clearInterval(te)},Q=e=>{te=window.setInterval(async()=>{if(document.visibilityState!=="hidden"){const{newMessages:t}=await is(ee);if(ue&&t){const n=or(t.items);for(const r of n)await ue(r.id,r.messages);ee=t.cursorInfo.start}}},e*1e3)},ir=u.div`
  flex: 1;
`,cr=u(Dt)`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
`,lr=e=>{const{conversation:t,currentUser:n,isEditorBoxMounted:r,lastCreatedMessageId:o}=e,[c,a]=l.useState(!1),[d,i]=l.useState(!1),f=l.useRef(null),h=we(),m=l.useRef(t),x=l.useRef(null),p=l.useRef(!1),I=l.useRef(void 0),C=t.messages,{isKeyboardOpen:w}=lt(),L=l.useCallback(()=>f.current?f.current.scrollOffset===0:!1,[]),M=l.useCallback(()=>{if(!f.current)return!1;const{scrollOffset:y,scrollSize:T,viewportSize:_}=f.current;return Math.abs(y+_-T)<=1},[]),O=l.useCallback(async()=>{const{fragment:y,opts:T}=G(t.id);if(!y)return;const{hasMore:_,end:D}=y.messages.cursorInfo;if(!_)return;a(!0),i(!0);const{errors:ht,messages:re}=await os({id:t.id,messageBefore:D,messageLimit:me});if(a(!1),ht||!re){i(!1);return}const gt={...y,messages:{...y.messages,items:re.items.concat(y.messages.items),cursorInfo:re.cursorInfo}};E.writeFragment({...T,data:gt}),requestAnimationFrame(()=>{i(!1)})},[t.id]),N=l.useCallback(async()=>{if(Os({}),M()&&!J(t)){at(t),W(t);return}if(L()&&!c){await O();return}},[M,L,t,c,O]),H=l.useCallback(async(y,T)=>{const{fragment:_}=G(y);if(_){const D=y===t.id&&M()&&(!_.userStatus||new Date(_.userStatus.lastViewedAt).getTime()<new Date().getTime());B(_),es(T,D),D&&t.id&&W(_)}else{const{conversation:D}=await it({id:T[0].conversationId});D&&(B(D),ce(D))}},[t.id,M]);m.current=t;const g=l.useCallback(()=>{if(f.current){const y=m.current.messages.items;y.length>0&&f.current.scrollToIndex(y.length-1,{align:"end",smooth:!1})}},[]);l.useEffect(()=>{o&&o!==I.current&&(I.current=o,g())},[o,g]),l.useEffect(()=>{!p.current&&C.items.length>0&&r&&requestAnimationFrame(()=>{g(),p.current=!0})},[C.items.length,r,g]),l.useEffect(()=>{r&&g(),rr(H)},[t.id,r,w,H,g]);const v=!C.cursorInfo.hasMore,j=`This is the start of your conversation with ${ve(t.users,n).username}`;return s.jsx(ir,{ref:h,children:s.jsx(cr,{ref:f,count:C.items.length,overscan:5,shift:d,onScroll:N,children:C.items.length===0?s.jsx(de,{text:j}):s.jsxs(s.Fragment,{children:[c&&s.jsx(fe,{}),C.items.map((y,T)=>s.jsx(er,{message:y,prevMessage:T>0?C.items[T-1]:null,currentUser:n,isFirstMessage:T===0,isLastMessage:T===C.items.length-1,isStart:v,startText:j,ref:T===C.items.length-1?x:null},y.id))]})})})},dr=u(S)`
  height: 100%;
  width: 100%;
`,ur=u.div`
  width: 100%;
  word-break: break-word;
  overscroll-behavior: contain;
  touch-action: pan-y;
`,hr=e=>{const{conversationId:t,mentionOptions:n,handleChangeHasUnsavedChanges:r,onCreate:o,editorUserAccessType:c}=e,{setIsEditorBoxMounted:a}=Qe(),[d,i]=l.useState(()=>K()),f=l.useRef(t),h=we(),m=l.useRef(new Oe(t,Ae.Message,ae.Message));l.useEffect(()=>{f.current!==t&&(m.current.clearTracker(),i(K()),m.current=new Oe(t,Ae.Message,ae.Message),f.current=t,a(!1))},[t,a]);const x=l.useCallback(()=>{a(!0)},[a]),p=l.useCallback(M=>{i(M);const O=Pt(M);r(O)},[r]),I=l.useCallback(()=>(qe(),m.current.isInProgress()?(Rt("Upload in progress",["Please wait a moment and try again"]),!1):!0),[]),C=l.useCallback(()=>{I()&&(o(d),i(K()),r(!1))},[I,o,d,r]),w=l.useCallback(M=>m.current.handleImagesUpload(M),[]),L=l.useCallback((M,O)=>m.current.handleAttachmentsUpload(M,O,!0),[]);return s.jsx(dr,{d:"v",alignItems:"center",justifyContent:"space-between",children:s.jsx(ur,{ref:h,children:s.jsx(un,{editorState:d,onChange:p,onEnter:C,onMount:x,onImagesUpload:w,onAttachmentsUpload:L,placeholderFirst:"Type a message",isMessages:!0,mentionOptions:n,userAccessType:c,noAutoFocus:!0,attachmentDownloadOptions:{},bottomActions:s.jsx(Ke,{onPress:C,children:"Send"})},t)})})},gr=l.memo(hr),fr=u.div`
  margin-top: auto;
  border-top: 1px solid ${({theme:e})=>e.neutral03};
  overscroll-behavior: contain;
`,mr=e=>{const{conversation:t,currentUser:n,handleChangeHasUnsavedChanges:r}=e,o=n.id,c=t.id,a=be.useCallback(i=>Us(n,t,i),[n,t]),d=be.useMemo(()=>t.users.filter(i=>i.id!==o).map(i=>({id:i.id,value:i.username,isEmployee:i.isEmployee,avatar:i.avatar})),[t.users,o]);return s.jsx(fr,{children:s.jsx(gr,{conversationId:c,handleChangeHasUnsavedChanges:r,onCreate:a,mentionOptions:d,editorUserAccessType:Ut(n)})})},pr=e=>{const{conversation:t,currentUser:n,handleChangeHasUnsavedChanges:r,lastCreatedMessageId:o}=e,{isEditorBoxMounted:c}=Qe();return s.jsxs(s.Fragment,{children:[s.jsx(lr,{conversation:t,currentUser:n,isEditorBoxMounted:c,lastCreatedMessageId:o}),s.jsx(mr,{conversation:t,currentUser:n,handleChangeHasUnsavedChanges:r})]})},vr=u(S)`
  position: relative;
  padding: 40px;
`,xr=u.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-weight: 500;
  padding-bottom: 25px;
  margin-right: 40px;
  font-size: 200px;
  opacity: 0.03;
`,wr=u($)`
  margin-bottom: 25px;
  display: block;
`,Cr=u($)`
  margin-bottom: 25px;
`,Ue=e=>{const{code:t,message:n}=e;return s.jsxs(vr,{d:"v",children:[s.jsx(xr,{children:t}),s.jsx(wr,{color:"text-2",size:"xlarge-2",weight:"bold",children:"Oops."}),s.jsx($,{size:"xlarge-1",children:n}),s.jsxs(Cr,{size:"large",color:"text-2",children:["Error code: ",t]})]})},br=e=>{const t={id:e,messageLimit:me},{data:n,loading:r,error:o}=on({variables:t,fetchPolicy:"cache-first"});return{conversation:(n==null?void 0:n.conversation)||null,loading:r,error:o||null}},yr=e=>{var i,f,h;const{id:t,currentUser:n,handleChangeHasUnsavedChanges:r}=e,{conversation:o,loading:c,error:a}=br(t);if(Qn(t))return s.jsx(ie,{});if(a){const m=a.toString()||"";return s.jsx(Ue,{code:500,message:m})}if(c)return s.jsx(ie,{});if(!o)return s.jsx(Ue,{code:404,message:"Conversation not found"});const d=(h=(f=(i=o.messages)==null?void 0:i.items)==null?void 0:f.at(-1))==null?void 0:h.id;return s.jsx(Ht,{children:s.jsx(pr,{conversation:o,currentUser:n,handleChangeHasUnsavedChanges:r,lastCreatedMessageId:d})})},Sr=u(S)`
  position: sticky;
  top: 0;
  height: ${Ds}px;
  background-color: ${({theme:e})=>e.bgDepth1};
  box-shadow: ${({theme:e})=>e.shadowSuperlow};
  z-index: 10;
`,Er=u(S)`
  padding-left: 20px;
  width: 160px;
`,Ir=u($)`
  font-weight: bold;
  white-space: nowrap;
`,Mr=u.div`
  width: 160px;
`,Tr=e=>{const{title:t,onBackClick:n}=e,r=we();return s.jsxs(Sr,{ref:r,justifyContent:"space-between",alignItems:"center",children:[s.jsx(Er,{alignItems:"center",justifyContent:"flex-start",children:s.jsx(Xe,{onClick:n,children:s.jsx(hn,{})})}),s.jsx(Ir,{size:"inherit",weight:"bold",children:t}),s.jsx(Mr,{})]})},jr=u(S)`
  min-width: 0;
  width: 100%;
  padding: 15px;
`,Ar=u.div`
  flex: 0 0 auto;
`,Or=u(S)`
  min-width: 0;
  width: 100%;
  margin-left: 10px;
`,Lr=({onSelect:e,user:t})=>s.jsxs(jr,{alignItems:"center",children:[s.jsx(Ar,{children:s.jsx(X,{username:t.username,isEmployee:t.isEmployee,isOfficial:t.showOfficialBadge,size:"large",avatarDetails:{image:t.avatar.image,acronym:t.avatar.content,acronymBackground:Z(t.username)},lastActiveAt:t.lastOnlineAt})}),s.jsxs(Or,{alignItems:"center",justifyContent:"space-between",children:[s.jsx($,{size:"medium",weight:"bold",children:t.username}),s.jsx(Ke,{onClick:()=>e(t),children:"Start"})]})]}),he=4,kr=u(S)`
  border-radius: 3px;
  padding: 0 3px;
  margin: 15px;
  height: 30px;

  @media (min-width: 768px) {
    margin: 10px;
  }
`,$r=u.div`
  margin-right: 20px;
`,Nr=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({theme:e})=>e.bgDepth0};
  overflow-y: auto;
  z-index: 1;
  margin-top: 51px;
  display: ${({$hasResults:e})=>e?"block":"none"};
`,_r=u.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({theme:e})=>e.bgDepth0};
  opacity: 0.5;
  margin-top: 51px;
`,Dr=e=>{const{allUser:t,className:n,isLoading:r,onSelect:o,placeholder:c,onSearchTermChange:a}=e,[d,i]=l.useState(""),f=l.useMemo(()=>tt(w=>a(w),200),[a]),h=l.useCallback(w=>{i(w),f(w)},[f]),m=l.useCallback(w=>{h(w)},[h]),x=l.useCallback(()=>{h("")},[h]),p=l.useCallback(w=>{o(w),x()},[o,x]),I=r?"Searching...":c||"Search users",C=!r&&d!=="";return s.jsxs(s.Fragment,{children:[s.jsxs(kr,{className:n,alignItems:"center",children:[s.jsx(Ye,{placement:"bottom start",description:`Enter at least ${he} characters to search for a user by name`,isDisabled:d.length>=he,children:s.jsx(Bt,{onChange:m,placeholder:I,value:d,variant:"default",symbol:s.jsx(Ft,{size:"original"}),control:C&&s.jsx(Xe,{onClick:x,children:s.jsx(Vt,{})})})}),r&&s.jsx($r,{children:s.jsx(fe,{})})]}),!r&&s.jsx(Nr,{$hasResults:t.length>0,children:t.map(w=>s.jsx(Lr,{onSelect:p,user:w},w.id))}),r&&s.jsx(_r,{})]})},Pr=e=>{const{user:t}=l.useContext(Ze),[n,r]=l.useState(""),o=l.useCallback(d=>{r(d)},[r]),c=n.length>=he,a=c?{}:{skip:!0};return s.jsx(an,{fetchPolicy:"cache-first",variables:{username:n},...a,children:({loading:d,error:i,data:f})=>{if(i)return s.jsxs("p",{children:["Failed to load users: ",i.message]});const h=f!=null&&f.users?f.users.filter(m=>m.id!==t.id&&t.isPermittedToStartConversation&&m.canStartConversationWith):[];return s.jsx(Dr,{...e,isLoading:d&&c,allUser:h,onSearchTermChange:o})}})},Rr=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.neutral03};
`,Ur=e=>{const{currentUser:t,onStartConversation:n,startConversationWithUserId:r}=e,o=l.useCallback(a=>{const d=Yn(t,a);return B(d),d},[t]),c=l.useCallback(async a=>{const d=Xn(t,a);if(d){n(d);return}const i=o(a);n(i);const{errors:f,conversation:h}=await it({userId:a.id},!0);if(f){Le(i),n(null);return}if(h){B(h,i),ce(h),n(h);return}const m=ze(),{errors:x,newConversation:p}=await ss(m,a);if(x||!p){Le(i),n(null);return}B(p,i),ce(p),W(p),n(p)},[t,n,o]);return l.useEffect(()=>{(async()=>{if(!r)return;const d=await cs(r);d&&c(d)})()},[r,c]),s.jsx(Rr,{children:s.jsx(Pr,{onSelect:c})})},Hr=u.div`
  width: 100%;
  display: flex;
  height: 100%;
  position: relative;
`,Br=u(S)`
  border-right: 1px solid ${({theme:e})=>e.neutral04};
  height: 100%;
  position: relative;
  width: 40%;

  ${ge} {
    width: 100%;
  }
`,Vr=u.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;

  ${ge} {
    width: 100%;
  }
`,Fr=u.div`
  margin-top: auto;
`,Gr=e=>{const{conversations:t,currentUser:n,handleChangeHasUnsavedChanges:r,mobile:o,onConversationSelect:c,selectedConversationId:a,startConversationWithUserId:d,navigate:i}=e,f=l.useRef(null),h=l.useCallback(w=>{c(w)},[c]),m=l.useCallback(()=>{c(null)},[c]),x=l.useMemo(()=>!o||!a,[o,a]),p=l.useMemo(()=>!o||!!a,[o,a]),I=l.useMemo(()=>o&&!!a,[o,a]),C=l.useMemo(()=>{if(a){const w=q(t.items,L=>L.id===a);if(w)return ve(w.users,n)}return null},[a,t.items,n]);return s.jsxs(Hr,{ref:f,children:[x&&s.jsxs(Br,{d:"v",children:[s.jsx(Ur,{currentUser:n,onStartConversation:c,startConversationWithUserId:d}),t.items.length===0&&s.jsx(ws,{}),t.items.length>0&&s.jsx(xs,{currentUser:n,conversations:t,onConversationClick:h,selectedConversationId:a,navigate:i})]}),p&&s.jsxs(Vr,{children:[I&&s.jsx(Tr,{title:C==null?void 0:C.username,onBackClick:m}),a&&s.jsx(yr,{id:a,currentUser:n,handleChangeHasUnsavedChanges:r}),s.jsx(Fr,{})]})]})},Wr="You have unsent message, it will be cleared. Are you sure you want to leave?";class zr extends l.Component{constructor(t){super(t),this.handleBeforeUnload=n=>{this.state.hasUnsavedChanges&&(n.preventDefault(),n.returnValue=!0)},this.getInitialSelectedConversation=n=>{if(this.props.mobile||n.length===0)return null;const r=this.getFirstSeenConversation(n);return r||n[0]},this.getFirstSeenConversation=n=>q(n,J),this.handleConversationSelect=async n=>{if(!(n&&n.id===this.state.selectedConversationId)){if(this.state.hasUnsavedChanges)if(confirm(Wr))this.setState({hasUnsavedChanges:!1});else return;if(!n){this.state.selectedConversationId&&ns(this.state.selectedConversationId),this.setState({selectedConversationId:null});return}J(n)||W(n),this.setState({selectedConversationId:n.id})}},this.handleChangeHasUnsavedChanges=n=>{this.state.hasUnsavedChanges!==n&&this.setState({hasUnsavedChanges:n})},this.state={selectedConversationId:null,hasUnsavedChanges:!1}}componentDidMount(){window.addEventListener("beforeunload",this.handleBeforeUnload);const t=this.getInitialSelectedConversation(this.props.conversations.items);t&&this.handleConversationSelect(t)}componentWillUnmount(){window.removeEventListener("beforeunload",this.handleBeforeUnload)}render(){return s.jsx(s.Fragment,{children:s.jsx(Gr,{...this.props,onConversationSelect:this.handleConversationSelect,selectedConversationId:this.state.selectedConversationId,handleChangeHasUnsavedChanges:this.handleChangeHasUnsavedChanges})})}}const He=e=>{document.documentElement.style.setProperty("overflow",e)},qr=()=>document.documentElement.style.getPropertyValue("overflow"),Yr=e=>{var f;const t=e==null?void 0:e.isNeededOverflowHidden,n=l.useRef(null),[r,o]=l.useState(),c=(f=window.visualViewport)==null?void 0:f.height,a=l.useCallback(()=>{var m;const h=(m=window.visualViewport)==null?void 0:m.height;h&&(document.documentElement.style.setProperty(Gt.visualViewportHeight,`${h}px`),o(h))},[]),d=l.useCallback(()=>{const h=n.current;h!==null&&(He(h),n.current=null)},[]),i=l.useCallback(()=>{n.current=qr(),He("hidden")},[]);return l.useEffect(()=>{const h=window.visualViewport;if(h)return c!==void 0&&o(c),h.addEventListener("resize",a),h.addEventListener("scroll",a),window.addEventListener("resize",a),window.addEventListener("scroll",a),()=>{h.removeEventListener("resize",a),h.removeEventListener("scroll",a),window.removeEventListener("resize",a),window.removeEventListener("scroll",a)}},[c,t,a,d,i]),l.useMemo(()=>r,[r])},Qr=u.div`
  ${ge} {
    position: fixed;
    top: ${({$top:e})=>e}px;
    height: ${({$height:e})=>e?`${e}px`:"auto"};
    left: 0;
    right: 0;
    z-index: 1;
  }
`,no=()=>{const e=pt(),t=vt(),n=Yr({isNeededOverflowHidden:!1}),{user:{data:r}}=l.useContext(Ze),{screenWidth:o}=l.useContext(Fe),{offsetTop:c,isKeyboardOpen:a}=lt(),d=pe(o),[i,f]=l.useState(()=>Ee(e).user),h=l.useRef(!1),m=bn({isMobile:d,viewPortHeight:n,isKeyboardOpen:a,headerHeight:Ie,screenWidth:o});return l.useEffect(()=>{const{user:x}=Ee(e);x&&!h.current&&(h.current=!0,f(x),t("/messages",{replace:!0}))},[t,e]),s.jsxs(Wt,{footerVariant:"hidden",subHeader:s.jsx("div",{}),children:[s.jsx(zt,{children:s.jsx("title",{children:`Messages | ${cn}`})}),s.jsx(Qr,{$top:a?c:Ie,$height:m,children:s.jsx(vn,{height:m,children:s.jsx(Wn,{children:({conversations:x})=>(ar(x.cursorInfo.start,e.pathname),s.jsx(zr,{conversations:x,currentUser:r,mobile:d,startConversationWithUserId:i,navigate:t}))})})})]})};export{no as default};
//# sourceMappingURL=Index-DkpG79ld.js.map
