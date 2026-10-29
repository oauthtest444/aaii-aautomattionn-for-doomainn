const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browser-image-compression-Cle07a5H.js","assets/rolldown-runtime-Bqsl3lKq.js","assets/react-C9EcEEoD.js"])))=>i.map(i=>d[i]);
try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`8b2a68c3-b89b-458d-86a4-5e797049f128`,e._sentryDebugIdIdentifier=`sentry-dbid-8b2a68c3-b89b-458d-86a4-5e797049f128`)}catch{}import{W as e,q as t,y as n}from"./react-C9EcEEoD.js";import{a as r}from"./rolldown-runtime-Bqsl3lKq.js";import{D as i,Er as a,Lr as o,O as s,Tt as c,Ut as l,Wr as u,Xt as d,gn as f,in as p,j as m,mn as h,wt as g,yr as _}from"./ShimmerText-C6CzBzDG.js";import{D as v,H as y,Rn as b,U as x,it as S,m as C,n as w,o as T,rt as E,t as D,x as O}from"./Flex-Cep2f4HR.js";import{$ as k,A,An as j,F as M,Fn as ee,Ft as te,G as N,Gt as P,K as F,M as ne,Mn as re,Mt as ie,N as ae,Nt as I,O as oe,P as se,Pt as ce,Wt as le,Y as L,_ as ue,a as de,c as fe,d as pe,f as me,g as he,i as ge,it as _e,j as ve,k as ye,l as be,nt as xe,o as Se,ot as Ce,p as we,r as Te,rt as Ee,s as De,u as Oe,v as ke,x as Ae,y as je}from"./src-DfQgNQkU.js";import{E as Me,G as Ne,H as Pe,K as Fe,U as R,V as z,a as Ie,q as Le,x as Re}from"./product-DDygbo97.js";import{Ai as B,B as ze,Ba as Be,Ci as Ve,Di as He,Ei as V,Es as Ue,Ic as We,Ir as Ge,La as H,Lc as Ke,Mo as U,Na as W,Ni as G,Q as qe,Rc as Je,Ta as Ye,Ya as Xe,c as Ze,ec as K,ft as Qe,ha as q,ma as $e,ot as et,wi as J,wn as tt}from"./src-D838am2T.js";import{l as nt,m as rt,s as it}from"./SemanticIndicator_Default-9HMTQx0X.js";import{t as at}from"./src-DXktLzRI.js";import{t as ot}from"./ColumnFilterIcon-B9Xj6gjh.js";import{t as st}from"./Floater-CgQFind1.js";import{c as ct,l as lt,t as ut,u as dt}from"./sidePanels-BlnCEwUb.js";import{t as ft}from"./ports-BxvhDjtE.js";import{t as pt}from"./Avatar_Default-BXr-Pamd.js";import{n as mt,t as ht}from"./config-Butb-XBt.js";import{a as gt,i as _t,o as vt}from"./useDesignerActions-BUrzEVC8.js";import{i as yt}from"./presence-x0Q8YKUG.js";import{n as bt}from"./collaborators-CKrbhQYE.js";import{n as xt,t as St}from"./live-collaboration-yq8_udeD.js";import{c as Ct,d as wt,f as Tt,i as Et,l as Dt,n as Ot,o as kt,p as At,s as jt,t as Mt,u as Nt}from"./src-Du8U4wP8.js";import{t as Pt}from"./src-DUtug-6C.js";import{t as Ft}from"./src-9eVTgfhK.js";import{t as It}from"./useDisableDefaultInteractions-Bqe1LsZY.js";import{t as Lt}from"./NotificationListener-re1vziZQ.js";var Y=r(t()),Rt=nt(e=>(0,Y.createElement)(`svg`,rt({viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`},e),(0,Y.createElement)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M14 10a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-5 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z`,fill:`currentColor`,className:e.baseclassname}))),X=n(),zt=(0,Y.createContext)(null),Bt=()=>(0,Y.useContext)(zt),Vt=({children:e,className:t,style:n})=>{let r=(0,Y.useRef)(null),[i,a]=k(r),o=(0,Y.useRef)(new Set),s=(0,Y.useCallback)(e=>(o.current.add(e),()=>{o.current.delete(e)}),[]),c=(0,Y.useCallback)(e=>{let t=Array.from(e.target.files??[]);if(t.length!==0){for(let e of o.current)e(t);e.target.value=``}},[]),l=(0,Y.useMemo)(()=>({dragState:a,subscribe:s}),[a,s]);return(0,X.jsx)(zt.Provider,{value:l,children:(0,X.jsxs)(Ht,{ref:i,className:t,style:n,"data-drag-state":a,children:[e,(0,X.jsx)(Ut,{ref:r,type:`file`,multiple:!0,onChange:c,tabIndex:-1,"aria-hidden":`true`})]})})},Ht=V.div`
  outline: 1px solid transparent;
  transition: outline-color 80ms ease;

  &[data-drag-state="document"] {
    outline-style: dashed;
    outline-color: ${({theme:e})=>e.designer.motif[`desktop-color-ublue-06`]};
  }

  &[data-drag-state="dropzone"] {
    outline-style: solid;
    outline-color: ${({theme:e})=>e.designer.motif[`desktop-color-ublue-06`]};
  }
`,Ut=V.input`
  display: none;
`,Wt=new Intl.RelativeTimeFormat(`en`,{numeric:`auto`}),Gt=60,Kt=Gt*60,qt=Kt*24,Jt=qt*30,Yt=qt*365;function Xt(e){if(!e)return``;let t=Math.floor((Date.now()-new Date(e).getTime())/1e3);return t<Gt?`Just now`:t<Kt?Wt.format(-Math.floor(t/Gt),`minute`):t<qt?Wt.format(-Math.floor(t/Kt),`hour`):t<Jt?Wt.format(-Math.floor(t/qt),`day`):t<Yt?Wt.format(-Math.floor(t/Jt),`month`):Wt.format(-Math.floor(t/Yt),`year`)}var Zt=`/assets/browser-image-compression-IJag5AvL.js`,Qt=500*1024,$t=new Set([`image/gif`]);async function en(t,n){if($t.has(t.type)||t.size<=Qt)return t;try{let{default:r}=await e(async()=>{let{default:e}=await import(`./browser-image-compression-Cle07a5H.js`);return{default:e}},__vite__mapDeps([0,1,2])),i=new URL(Zt,window.location.origin).href,a=await r(t,{maxWidthOrHeight:1280,initialQuality:.8,maxIteration:1,useWebWorker:!0,...n,libURL:i});return a.size<t.size?a:t}catch(e){return console.warn(`[imageCompression] falling back to original file`,e),t}}var tn=1e3,nn=(e,t)=>{let n=[],r={count:!1,type:!1,size:!1},i=K.acceptedTypes,a=t;for(let t of e){if(!i.includes(t.type)){r.type=!0;continue}if(t.size>K.maxFileSizeBytes){r.size=!0;continue}if(a<=0){r.count=!0;continue}n.push(t),a--}return{accepted:n,rejection:r.count?`count`:r.type?`type`:r.size?`size`:null}},rn=(0,Y.createContext)(null),Z=()=>{let e=(0,Y.useContext)(rn);if(!e)throw Error(`CommentComposer.* must be rendered inside <CommentComposer.Root>`);return e},an=e=>{let{registerSubmit:t}=Z();(0,Y.useEffect)(()=>t(e),[t,e])},on=(0,Y.memo)(({initialMessage:e=``,initialAttachments:t=[],allowAttachments:n=!0,enableDropzone:r=!0,onCancel:i,onDirtyChange:a,inputRef:o,children:s})=>{let{t:c}=w(),l=q(e=>e.actions.notifyError),[u,d]=(0,Y.useState)(e),[f,p]=(0,Y.useState)(()=>t.map(e=>({kind:`existing`,id:H(),data:e}))),[m,h]=(0,Y.useState)(0),g=(0,Y.useRef)(null),_=o??g,v=(0,Y.useRef)(null),y=(0,Y.useRef)(null),b=Bt(),x=(0,Y.useRef)(f);x.current=f;let S=(0,Y.useCallback)(()=>{let e=_.current;e&&(e.style.height=`auto`,e.style.height=`${Math.min(e.scrollHeight,160)}px`)},[_]),C=(0,Y.useCallback)(async e=>{if(!n)return;let{accepted:t,rejection:r}=nn(e,Math.max(0,K.maxCount-x.current.length));if(r){let e={type:c(`comments.input.toast.unsupportedFormat`),count:c(`comments.input.toast.tooManyFiles`,{max:K.maxCount}),size:c(`comments.input.toast.fileTooLarge`,{max:K.maxFileSizeMB})}[r];l(e)}if(t.length!==0){h(e=>e+1);try{let e=await Promise.all(t.map(e=>en(e)));p(t=>[...t,...e.map(e=>({kind:`pending`,id:H(),file:e,previewUrl:URL.createObjectURL(e)}))])}finally{h(e=>e-1)}}},[n,l,c]),T=(0,Y.useCallback)(e=>{p(t=>{let n=t.find(t=>t.id===e);return n&&n.kind===`pending`&&URL.revokeObjectURL(n.previewUrl),t.filter(t=>t.id!==e)})},[]),E=(0,Y.useCallback)(()=>{p(e=>{for(let t of e)t.kind===`pending`&&URL.revokeObjectURL(t.previewUrl);return[]})},[]);(0,Y.useEffect)(()=>{if(!(!n||!r||!b))return b.subscribe(C)},[n,r,b,C]),(0,Y.useEffect)(()=>()=>{for(let e of x.current)e.kind===`pending`&&URL.revokeObjectURL(e.previewUrl)},[]);let O=(0,Y.useCallback)(()=>{v.current?.click()},[]),k=(0,Y.useCallback)(e=>{C(Array.from(e.target.files??[])),e.target.value=``},[C]),A=(0,Y.useCallback)(e=>(y.current=e,()=>{y.current===e&&(y.current=null)}),[]),j=(0,Y.useCallback)(()=>{y.current?.()},[]),M=(0,Y.useRef)(e.trim()),ee=(0,Y.useRef)(t.length),te=u.trim(),N=te.length>0&&m===0,P=f.length!==ee.current||f.some(e=>e.kind===`pending`),F=te!==M.current||P;(0,Y.useLayoutEffect)(()=>{a?.(F)},[F,a]);let ne=(0,Y.useMemo)(()=>({message:u,setMessage:d,attachments:f,clearAttachments:E,ingestFiles:C,removeAttachment:T,compressing:m,canSubmit:N,allowAttachments:n,registerSubmit:A,triggerSubmit:j,onCancel:i??null,openFilePicker:O,textareaRef:_,adjustHeight:S}),[u,f,E,C,T,m,N,n,A,j,i,O,S,_]);return(0,X.jsxs)(rn.Provider,{value:ne,children:[(0,X.jsx)(D,{column:!0,gap:`s`,full:!0,children:s}),(0,X.jsx)(sn,{ref:v,type:`file`,accept:K.acceptedTypes.join(`,`),multiple:!0,onChange:k,tabIndex:-1,"aria-hidden":`true`,"data-testid":`composer-file-input`})]})}),sn=V.input`
  display: none;
`,cn=(0,Y.memo)(({variant:e,autoFocus:t=!1,placeholder:n,"data-testid":r=`comment-input-textarea`})=>{let{message:i,setMessage:a,ingestFiles:o,triggerSubmit:s,textareaRef:c,adjustHeight:l}=Z();return(0,Y.useEffect)(()=>{if(!t)return;let e=setTimeout(()=>{let e=c.current;if(!e)return;e.focus();let t=e.value.length;e.setSelectionRange(t,t)},50);return()=>clearTimeout(e)},[t,c]),(0,Y.useLayoutEffect)(()=>{l()},[l]),(0,X.jsx)(ln,{inputRef:c,value:i,onChange:(0,Y.useCallback)(e=>{a(e),l()},[a,l]),onKeyDown:(0,Y.useCallback)(e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),s())},[s]),onPaste:(0,Y.useCallback)(e=>{let t=Array.from(e.clipboardData?.items??[]).filter(e=>e.kind===`file`&&e.type.startsWith(`image/`)).map(e=>e.getAsFile()).filter(e=>e!==null);t.length!==0&&(e.preventDefault(),Promise.all(t.map(async(e,t)=>{let n=Be(e.name)||`png`,r=e.name||`pasted-${Date.now()}-${t}.${n}`;return new File([await e.arrayBuffer()],r,{type:e.type})})).then(o))},[o]),placeholder:n,rows:1,maxLength:tn,resize:!1,"aria-label":n,style:{width:`100%`},$variant:e,"data-testid":r})}),ln=V(p)`
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-base`]};

  textarea {
    width: 100%;
    padding: 6px 0;

    ${({$variant:e})=>e===`standalone`&&J`
        background: transparent !important;
        outline: none !important;
      `}

    ${({$variant:e})=>e===`thread`&&J`
        padding: 6px 8px;
      `}

    &::placeholder {
      color: ${({theme:e})=>e.designer.motif[`desktop-color-text-3`]};
    }
  }
`,un=(0,Y.memo)(()=>{let{t:e}=w(),{attachments:t,removeAttachment:n}=Z();return t.length===0?null:(0,X.jsx)(D,{wrap:!0,gap:`xs`,children:t.map(t=>{let r=t.kind===`existing`?t.data.url:t.previewUrl,i=t.kind===`existing`?t.data.fileName:t.file.name;return(0,X.jsx)(P,{"data-testid":`comment-input-staged-thumb-${i}`,onRemove:()=>n(t.id),removeLabel:e(`comments.input.removeAttachment.ariaLabel`),children:(0,X.jsx)(dn,{src:r,alt:i})},t.id)})})}),dn=V.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  display: block;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-base`]};
`,Q={Root:on,TextArea:cn,Attachments:un,Footer:(0,Y.memo)(({children:e})=>(0,X.jsx)(D,{alignCenter:!0,justifyBetween:!0,children:e})),AttachButton:(0,Y.memo)(()=>{let{t:e}=w(),{attachments:t,openFilePicker:n,allowAttachments:r}=Z(),[i,a]=(0,Y.useState)(!1),o=(0,Y.useRef)(!1),s=(0,Y.useCallback)(()=>{o.current=!0,a(!1),n()},[n]),c=(0,Y.useCallback)(e=>{if(e&&o.current){o.current=!1;return}a(e)},[]);return r?(0,X.jsx)(v,{description:e(`comments.input.attachImage.tooltip`,{max:K.maxCount}),placement:`top`,isOpen:i,onOpenChange:c,className:`comment-tooltip`,children:(0,X.jsx)(E,{variant:`tertiary-neutral`,size:`small`,onPress:s,"aria-label":e(`comments.input.attachImage.ariaLabel`),isDisabled:t.length>=K.maxCount,children:(0,X.jsx)(j,{size:`original`})})}):null}),SendButton:(0,Y.memo)(({onSend:e})=>{let{t}=w(),{canSubmit:n,message:r,attachments:i,setMessage:a,clearAttachments:o,adjustHeight:s}=Z(),c=(0,Y.useCallback)(()=>{if(!n)return;let t=i.filter(e=>e.kind===`pending`).map(e=>e.file);e(r.trim(),t),a(``),o(),requestAnimationFrame(()=>s())},[n,r,i,e,a,o,s]);return an(c),(0,X.jsx)(E,{variant:`emphasis`,size:`small`,onPress:c,isDisabled:!n,"aria-label":t(`comments.input.send.ariaLabel`),children:(0,X.jsx)(ee,{size:`original`})})}),SaveButton:(0,Y.memo)(({onSave:e})=>{let{t}=w(),{canSubmit:n,message:r,attachments:i}=Z(),a=(0,Y.useCallback)(()=>{n&&e(r.trim(),i)},[n,r,i,e]);return an(a),(0,X.jsx)(S,{variant:`emphasis`,size:`small`,onPress:a,isDisabled:!n,children:t(`commons.save`)})}),CancelButton:(0,Y.memo)(()=>{let{t:e}=w(),{onCancel:t}=Z();return(0,X.jsx)(S,{variant:`tertiary-neutral`,size:`small`,onPress:()=>t?.(),isDisabled:t===null,children:e(`commons.cancel`)})})},fn=function(e){return e.AVAILABLE=`available`,e.DELETED=`deleted`,e.UNKNOWN=`unknown`,e}({}),pn=e=>[fn.DELETED,fn.UNKNOWN].includes(e.status),mn=e=>e.reduce((e,t)=>U.commentThread(t)?Math.max(e,t.threadNumber??0):e,0),hn=[`comment-pin`,`thread-popover`,`comments-menu`,Ve.modalPortal,`image-modal-overlay`,`new-comment-popover`,`comment-tooltip`],gn=J`
  animation: commentShake 0.4s linear;

  @keyframes commentShake {
    0%,
    100% {
      transform: translate(0);
    }
    20%,
    60% {
      transform: translate(-12px) rotate(-1deg);
    }
    40%,
    80% {
      transform: translate(12px) rotate(1deg);
    }
  }
`,_n=V(y)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  white-space: pre-wrap;
  word-break: break-word;
`,vn=(0,Y.memo)(({author:e})=>{let t=He().designer.motif,n=(0,Y.useMemo)(()=>{if(!pn(e))return yt(e.id,t)},[e,t]);return pn(e)?(0,X.jsx)(yn,{shape:`circle`,size:`medium`,alt:e.name,isDisabled:!0}):(0,X.jsx)(yn,{shape:`circle`,size:`medium`,alt:e.name,image:e.avatar??void 0,acronym:e.name,$color:n,isDisabled:!0})}),yn=V(pt)`
  pointer-events: none;

  [data-uic-component="Text"] {
    clip-path: unset;
    line-height: unset;
    background-color: ${({$color:e})=>e};
  }
`,bn=e=>({url:URL.createObjectURL(e),fileType:e.type,fileName:e.name,size:e.size}),xn=e=>{setTimeout(()=>{for(let t of e)URL.revokeObjectURL(t.url)},1e3)},Sn=async({shapesApi:e,draft:t,files:n,uploadFile:r,onError:i})=>{let a=e.getState(),o=U.commentReply(t)?t.parentId:void 0,s=!!o&&a.all.comment.hash[o]?.resolved===!0,c=n.map(bn);if(a.changeShapes({create:[{...t,attachments:c,flags:We.CREATING}],update:s?[{id:o,resolved:!1}]:[]},{changeIds:!1}),n.length===0){a.changeShapes({update:[{id:t.id,flags:{remove:[We.CREATING]}}]});return}try{let e=await Promise.all(n.map(e=>r(e)));a.changeShapes({update:[{id:t.id,attachments:e,flags:{remove:[We.CREATING]}}]})}catch(e){a.changeShapes({remove:[t.id],update:s?[{id:o,resolved:!0}]:[]}),i?.(e)}finally{xn(c)}},Cn=async({shapesApi:e,comment:t,message:n,attachments:r,uploadFile:i,onError:a})=>{let o=e.getState(),s=r.filter(e=>e.kind===`pending`),c=(e=new Map)=>r.filter(e=>e.kind!==`existing`||!e.data.url.startsWith(`blob:`)).map(t=>{if(t.kind===`existing`)return t.data;let n=e.get(t.id);if(!n)throw Error(`Resolved attachment missing for ${t.id}`);return n});if(s.length===0){o.changeShapes({update:[{id:t.id,message:n,attachments:c()}]});return}let l={message:t.message,attachments:t.attachments},u=new Map;for(let e of s)u.set(e.id,bn(e.file));o.changeShapes({update:[{id:t.id,message:n,attachments:c(u)}]},{notify:!1});try{let e=new Map;await Promise.all(s.map(async t=>e.set(t.id,await i(t.file)))),o.changeShapes({update:[{id:t.id,message:n,attachments:c(e)}]})}catch(e){o.changeShapes({update:[{id:t.id,message:n,attachments:l.attachments}]}),a?.(e)}finally{xn(u.values())}},wn=({attachments:e})=>e.some(e=>e.url.startsWith(`blob:`)),Tn=(0,Y.memo)(({threadId:e,onClose:t,currentUserId:n,getAuthor:r})=>{let{t:a}=w(),s=G.api(),c=tt.api(),l=ne({onAfterDelete:t}),u=Ue(t=>t.isRead(e)),d=q(e=>e.actions);(0,Y.useEffect)(()=>{u||d.commentMarkRead(e)},[u,e,d]);let[f,p]=(0,Y.useState)(null),[h,g]=(0,Y.useState)(null),y=G(t=>t.all.comment.hash[e]??null),b=se(e),S=(0,Y.useRef)(null),C=(0,Y.useRef)(null),[T,k]=(0,Y.useState)(!1),[A,j]=(0,Y.useState)(!1),M=ae(t,()=>{f!==null&&A?C.current?.select():T&&S.current?.select()}),{onDirtyChange:ee}=M;(0,Y.useLayoutEffect)(()=>{ee(T||f!==null&&A)},[ee,T,A,f]),qe(!0,e=>e&&M.requestDiscard()),i(!0,M.requestDiscard,hn);let te=y?.authorId===n,N=y?.resolved===!0,P=(0,Y.useMemo)(()=>y?[y,...b]:[],[y,b]),{ref:F,onScroll:re,scrollToBottom:ie}=m(P.length),I=b.length>0,oe=(0,Y.useCallback)(()=>{y&&l(e,I)},[y,I,e,l]),ce=(0,Y.useCallback)(e=>{g(null),s.getState().changeShapes({remove:[e]})},[s]),le=(0,Y.useCallback)(e=>{let t=s.getState().all.comment.hash[e];!t||wn(t)||(g(null),p(e))},[s]);En(f);let L=(0,Y.useCallback)((e,t,n)=>{let r=s.getState().all.comment.hash[e];r&&(Cn({shapesApi:s,comment:r,message:t,attachments:n,uploadFile:d.commentUploadImage,onError:()=>d.notifyError(a(`comments.input.uploadError`))}),p(null))},[s,d,a]),ue=(0,Y.useCallback)(()=>{p(null)},[]),de=(0,Y.useCallback)(()=>{y&&s.getState().changeShapes({update:[{id:e,resolved:!N}]})},[y,e,N,s]),fe=(0,Y.useCallback)((t,r)=>{if(!y)return;let i=s.getState();Sn({shapesApi:s,draft:{id:H(),type:Je.COMMENT,status:Ke.DEFAULT,projectId:i.projectId,planId:y.planId,parentId:e,authorId:n,threadNumber:null,message:t,position:null,resolved:!1},files:r,uploadFile:d.commentUploadImage,onError:()=>d.notifyError(a(`comments.input.uploadError`))}),requestAnimationFrame(()=>ie())},[y,e,n,s,d,ie,a]);return y?(0,X.jsx)(On,{children:(0,X.jsxs)(kn,{$type:`popover`,$shadow:!1,column:!0,className:`thread-popover`,"data-testid":`thread-popover`,...M.shakeProps,children:[(0,X.jsxs)(An,{alignCenter:!0,justifyBetween:!0,children:[(0,X.jsx)(x,{variant:`heading-medium`,children:a(`comments.thread.header`)}),(0,X.jsxs)(D,{alignCenter:!0,gap:`s`,children:[te&&(0,X.jsx)(v,{description:a(I?`comments.panel.deleteThread`:`comments.panel.deleteComment`),placement:`top`,children:(0,X.jsx)(E,{variant:`tertiary-neutral`,size:`small`,onPress:oe,"aria-label":a(I?`comments.panel.deleteThread`:`comments.panel.deleteComment`),"data-testid":`thread-popover-delete`,children:(0,X.jsx)(_,{size:`original`})})}),(0,X.jsx)(v,{description:a(N?`comments.thread.markAsUnresolved`:`comments.thread.markAsResolved`),placement:`top`,children:(0,X.jsx)(E,{variant:`tertiary-neutral`,size:`small`,onPress:de,"data-testid":`thread-popover-resolve`,children:(0,X.jsx)(it,{size:`original`,variant:N?`fill`:void 0})})}),(0,X.jsx)(v,{description:a(`commons.close`),placement:`top`,children:(0,X.jsx)(E,{variant:`tertiary-neutral`,size:`small`,onPress:t,"aria-label":a(`comments.thread.close.ariaLabel`),children:(0,X.jsx)(o,{size:`original`})})})]})]}),(0,X.jsx)(O,{style:{marginTop:`1px`}}),(0,X.jsx)(jn,{column:!0,gap:`s`,"data-internal-scrolly":!0,ref:F,onScroll:re,children:P.map((e,t)=>{let i=e.authorId===n,o=e.parentId!==null,s=r(e.authorId),l=f===e.id,u=h===e.id,d=t===P.length-1;return(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsxs)(D,{column:!0,gap:`s`,"data-reply-id":e.id,children:[(0,X.jsxs)(D,{alignCenter:!0,justifyBetween:!0,gap:`xs`,children:[(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,shrinkable:!0,flex:1,"data-testid":`author-info`,children:[(0,X.jsx)(vn,{author:s}),(0,X.jsxs)(D,{shrinkable:!0,flex:1,children:[(0,X.jsx)(x,{size:`small`,color:`text-1`,isTruncated:!0,children:s.name}),(0,X.jsxs)(Nn,{size:`small`,color:`text-3`,children:[`・ `,Xe.capitalize(Xt(e.createdAt))]})]})]}),i&&(0,X.jsx)(Dn,{commentId:e.id,isOpen:u,onOpenChange:t=>g(t?e.id:null),canDelete:o,canEdit:!wn(e),onEdit:()=>le(e.id),onDelete:()=>ce(e.id)})]}),l?(0,X.jsxs)(Q.Root,{initialMessage:e.message,initialAttachments:e.attachments,onCancel:ue,onDirtyChange:j,inputRef:C,children:[(0,X.jsx)(Q.TextArea,{variant:`thread`,autoFocus:!0,placeholder:a(`comments.thread.edit.placeholder`),"data-testid":`comment-edit-textarea`}),(0,X.jsx)(Q.Attachments,{}),(0,X.jsxs)(Q.Footer,{children:[(0,X.jsx)(Q.AttachButton,{}),(0,X.jsxs)(D,{gap:`xs`,children:[(0,X.jsx)(Q.CancelButton,{}),(0,X.jsx)(Q.SaveButton,{onSave:(t,n)=>L(e.id,t,n)})]})]})]},e.id):(0,X.jsx)(Pn,{color:`text-1`,children:e.message}),!l&&e.attachments.length>0&&(0,X.jsx)(D,{wrap:!0,gap:`xs`,"data-testid":`comment-attachments-${e.id}`,children:e.attachments.map((t,n)=>(0,X.jsx)(Fn,{onClick:()=>c.components.imageModal({target:{url:t.url,alt:a(`comments.thread.attachment.alt`),title:t.fileName}}),title:a(`comments.thread.attachment.viewFullSize`),children:(0,X.jsx)(`img`,{src:t.url,alt:a(`comments.thread.attachment.alt`),draggable:!1})},`${e.id}-${n}`))})]}),!d&&(0,X.jsx)(O,{})]},e.id)})}),(0,X.jsx)(O,{}),(0,X.jsx)(Mn,{children:(0,X.jsxs)(Q.Root,{enableDropzone:f===null,onDirtyChange:k,inputRef:S,children:[(0,X.jsx)(Q.TextArea,{variant:`thread`,placeholder:a(`comments.thread.reply.placeholder`)}),(0,X.jsx)(Q.Attachments,{}),(0,X.jsxs)(Q.Footer,{children:[(0,X.jsx)(Q.AttachButton,{}),(0,X.jsx)(Q.SendButton,{onSend:fe})]})]})})]})}):null}),En=e=>{(0,Y.useEffect)(()=>{if(!e)return;let t=document.querySelector(`.thread-popover [data-reply-id="${e}"]`);if(!t)return;let n=new ResizeObserver(()=>{t.scrollIntoView({block:`nearest`})});n.observe(t);let r=setTimeout(()=>n.disconnect(),500);return()=>{n.disconnect(),clearTimeout(r)}},[e])},Dn=(0,Y.memo)(({commentId:e,isOpen:t,onOpenChange:n,canDelete:r,canEdit:i,onEdit:a,onDelete:o})=>{let{t:s}=w();return(0,X.jsxs)(u,{size:`auto`,align:`bottomLeft`,open:t,onChange:n,renderToggle:()=>(0,X.jsx)(Rt,{size:`original`,actionable:!0,"aria-label":s(`comments.thread.messageOptions.ariaLabel`),"data-testid":`comment-message-options-${e}`}),renderCard:e=>(0,X.jsx)(g.Card,{...e,"data-testid":`comment-message-options`}),children:[(0,X.jsx)(v,{description:s(`comments.thread.edit.uploadingTooltip`),isDisabled:i,children:(0,X.jsx)(S,{variant:`tertiary-neutral`,width:`full`,onPress:a,isDisabled:!i,style:{justifyContent:`flex-start`},preventFocusOnPress:!0,children:s(`commons.edit`)})}),r&&(0,X.jsx)(S,{variant:`tertiary-neutral`,width:`full`,onPress:o,style:{justifyContent:`flex-start`},preventFocusOnPress:!0,children:s(`comments.thread.delete`)})]})}),On=V(Vt)`
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-medium`]};
`,kn=V(st)`
  width: 300px;
  max-height: 480px;
  overflow-y: auto;

  border-radius: ${({theme:e})=>e.designer[`desktop-radius-medium`]};
  pointer-events: auto;
  user-select: text;

  --spacing-x: 12px;
  --spacing-y: 8px;

  ${({$shake:e})=>e&&gn};
`,An=V(D)`
  padding: var(--spacing-y) var(--spacing-x);
`,jn=V(D)`
  padding: var(--spacing-y) var(--spacing-x);

  --scrollbar-width: ${({theme:e})=>e.designer.scrollbar.width};

  // Firefox does not allocate additional space for the scrollbar
  @supports (-moz-appearance: none) {
    --scrollbar-width: 0px;
  }

  // subtract the scrollbar width to avoid larger padding on right side
  padding-right: calc(var(--spacing-x) - var(--scrollbar-width));
`,Mn=V(D)`
  width: 100%;
  padding: var(--spacing-y) var(--spacing-x);
`,Nn=V(x)`
  flex-shrink: 0;
  white-space: nowrap;
`,Pn=V(y)`
  white-space: pre-wrap;
  word-break: break-word;
`,Fn=V.div`
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-base`]};
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  &:hover {
    opacity: 0.85;
  }
`,In=(0,Y.memo)(({currentUserId:e,getAuthor:t})=>{let n=B.api(),r=B(e=>e.selectedCommentId),i=B(e=>e.commentClickPosition),a=(0,Y.useCallback)(()=>{n.getState().updateComponents(e=>({...e,selectedCommentId:null,commentClickPosition:null}))},[n]);return i?(0,X.jsx)(Ln,{position:i,currentUserId:e,onCancel:a}):r?(0,X.jsx)(Hn,{threadId:r,currentUserId:e,getAuthor:t,onClose:a}):null}),Ln=(0,Y.memo)(({position:e,currentUserId:t,onCancel:n})=>{let{t:r}=w(),a=G.api(),o=$e.api(),c=Ue.api(),l=tt.api(),u=q(e=>e.actions),d=s(),f=(0,Y.useRef)(null),p=ae(n,()=>f.current?.select());qe(!0,e=>e&&p.requestDiscard()),i(d,p.requestDiscard,hn);let m=(0,Y.useRef)(e);m.current=e;let h=(0,Y.useCallback)((e,n)=>{let i=e.trim();if(!i)return;let{current:s}=o.getState(),{worldToLocal:d,projectId:f,all:p}=a.getState();if(!s)return;let h=d(m.current.clone(),s.id),g=H(),_=mn(p.comment.list)+1;Sn({shapesApi:a,draft:{id:g,type:Je.COMMENT,projectId:f,planId:s.id,parentId:null,authorId:t,threadNumber:_,message:i,position:[h],resolved:!1,status:Ke.DEFAULT},files:n,uploadFile:u.commentUploadImage,onError:()=>u.notifyError(r(`comments.input.uploadError`))}),c.getState().markRead(g),l.components.commentCreationMenu(null)},[a,o,l,t,c,u,r]);return(0,X.jsx)(le,{constraint:{position:m.current,padding:16,offsetX:({box:e})=>e.width/2,offsetY:({box:e})=>e.height/2},className:`new-comment-popover`,style:{width:300},children:(0,X.jsx)(Rn,{children:(0,X.jsx)(zn,{$type:`popover`,$shadow:!1,column:!0,gap:`xs`,"data-testid":`new-comment-popover`,...p.shakeProps,children:(0,X.jsxs)(Q.Root,{onDirtyChange:p.onDirtyChange,inputRef:f,children:[(0,X.jsx)(Q.TextArea,{variant:`standalone`,autoFocus:!0,placeholder:r(`comments.input.placeholder`)}),(0,X.jsx)(Q.Attachments,{}),(0,X.jsx)(O,{}),(0,X.jsxs)(Q.Footer,{children:[(0,X.jsx)(Q.AttachButton,{}),(0,X.jsx)(Q.SendButton,{onSend:h})]})]})})})})}),Rn=V(Vt)`
  width: 100%;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-medium`]};
`,zn=V(st)`
  width: 100%;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-medium`]};
  padding: 8px 12px;
  gap: 6px;
  pointer-events: auto;

  ${({$shake:e})=>e&&gn};
`,Bn=26,Vn=14,Hn=(0,Y.memo)(({threadId:e,currentUserId:t,getAuthor:n,onClose:r})=>{let i=G(t=>t.all.comment.hash[e]),a=G(()=>i?.$world?.position?.[0]),o=$e(e=>e.current);return!U.commentThread(i)||o?.id!==i.planId||!a?null:(0,X.jsx)(le,{constraint:{position:a,padding:16,offsetX:({box:e})=>e.width/2+Bn+Vn,offsetY:({box:e})=>e.height/5},children:(0,X.jsx)(Tn,{threadId:e,currentUserId:t,getAuthor:n,onClose:r},e)})}),Un=300,Wn=300,Gn=(0,Y.memo)(({getAuthor:e,currentUserId:t})=>{let{t:n}=w(),r=G(e=>e.plan.comment.list),{replyCounts:i,imageCounts:a}=(0,Y.useMemo)(()=>ye(r),[r]),o=q(Qe),s=q(e=>e.settings.visual.showCommentPins),c=q(e=>W.has(e.editor.view,W.$view.UI_COMMENT)),l=q(e=>W.has(e.editor.view,W.$view.UI_ALIGN_PLANS)),u=q(e=>!!e.currently.dragged||!!e.currently.placed||W.has(e.status,W.$editor.PANNING)),d=tt.api(),f=B.api(),p=B(e=>e.selectedCommentId),m=(s||c)&&!l,h=(0,Y.useCallback)(e=>{if(f.getState().selectedCommentId!==e.id&&!d.dispatcher().emit(`comment:leave`,null))return;let t=e.$world.position[0];if(t){let e=c?Un:0;d.editor.revealPosition(t,{padding:{top:120,bottom:120,right:80+Wn+e,left:80}})}d.components.selectCommentThread(e.id)},[d,f,c]);return o||!m?null:(0,X.jsx)(X.Fragment,{children:r.filter(e=>U.pinnedThread(e)).map(r=>(0,X.jsx)(Kn,{thread:r,selected:p===r.id,onClick:h,author:e(r.authorId),summary:oe(n,i[r.id]??0,a[r.id]??0),currentUserId:t,inert:u},r.id))})}),Kn=(0,Y.memo)(e=>{let t=q(e=>W.has(e.editor.view,W.$view.UI_COMMENT));return G(()=>e.thread.$flags.INVISIBLE)||e.thread.resolved&&!t?null:(0,X.jsx)(qn,{...e})}),qn=(0,Y.memo)(({thread:e,author:t,selected:n,inert:r,onClick:i,currentUserId:a,summary:o})=>{let[s,c]=(0,Y.useState)(!1),l=G(()=>e.$world.position[0]),u=B(e=>e.motif),d=Ue(t=>!t.isRead(e.id)),f=u===`light`?`dark`:`light`,p=s&&!n,{handlers:m,dragPosition:h,isDragging:g}=A({thread:e,onClick:i,enabled:!!a&&e.authorId===a&&!n});return l?(0,X.jsx)(le,{constraint:{position:h??l},style:{zIndex:s||n||g?1:void 0},children:(0,X.jsxs)(Jn,{alignStart:!0,justifyStart:!0,gap:`s`,className:`comment-pin`,"data-testid":`comment-pin-${e.id}`,...m,onPointerEnter:()=>c(!0),onPointerLeave:()=>c(!1),$hovered:p,$selected:n,$dimmed:!!e.resolved&&!(s||n),$unread:d,$inert:r,$dragging:g,children:[(0,X.jsx)(vn,{author:t}),(0,X.jsx)(Ze,{motif:d?f:u,children:(0,X.jsxs)(Yn,{column:!0,gap:o?`xs`:`none`,$visible:p,children:[(0,X.jsxs)(D,{shrinkable:!0,children:[(0,X.jsxs)(x,{variant:`heading-small`,size:`small`,isTruncated:!0,children:[t.name,`\xA0`]}),(0,X.jsx)(x,{size:`small`,style:{flexShrink:0},color:d?`text-1`:`text-2`,children:Xe.capitalize(Xt(e.createdAt))})]}),(0,X.jsx)(_n,{color:`text-1`,size:`small`,children:e.message}),o&&(0,X.jsx)(x,{size:`small`,color:d?`text-1`:`text-2`,children:o})]})})]})}):null}),Jn=V(D)`
  pointer-events: ${({$inert:e})=>e?`none`:`auto`};
  cursor: ${({$dragging:e})=>e?`grabbing`:`pointer`};
  transform: translateY(-100%);
  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }

  padding: 3px;
  width: 26px;
  max-height: 26px;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-large`]};
  border-bottom-left-radius: ${({theme:e})=>e.designer[`desktop-radius-small`]};

  background: ${({$unread:e,theme:t})=>e?t.designer.motif[`desktop-color-ublue-06`]:t.designer.motif[`desktop-color-neutral-01`]};

  outline: 1px solid ${({theme:e})=>e.designer.motif[`desktop-color-neutral-04`]};

  --transition-duration: 0.1s;
  transition:
    width var(--transition-duration) ease,
    max-height var(--transition-duration) ease,
    padding var(--transition-duration) ease;

  /* selected - add outline */
  ${({$selected:e,theme:t})=>e&&J`
      outline-color: ${t.designer.motif[`desktop-color-ublue-06`]};
    `}

  /* expanded to show preview message */
  ${({$hovered:e})=>e&&J`
      width: 240px;
      max-height: 150px;
      padding: 10px;
    `}

  ${({$dimmed:e})=>e&&J`
      opacity: 0.5;
    `} /** Fix syntax highlighting */
`,Yn=V(D)`
  width: 192px;
  min-width: 0;
  flex-shrink: 0;
  overflow: hidden;
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
  transition: opacity 0.1s ease;
`,Xn=(0,Y.memo)(()=>{let{t:e}=w(),t=B(e=>e.imageModal.target),n=tt.api(),r=ie(t),i=t??r,a=(0,Y.useCallback)(e=>{e||n.components.imageModal({target:null})},[n]);return(0,X.jsx)(l.Overlay,{isOpen:t!==null,onOpenChange:a,isDismissable:!0,className:`image-modal-overlay`,children:(0,X.jsx)(l.Content,{"data-testid":`image-modal`,children:(0,X.jsxs)(l.Dialog,{width:`large`,children:[(0,X.jsx)(l.CloseButton,{}),(0,X.jsx)(l.Header,{children:i?.title||e(`comments.imageModal.header`)}),i&&(0,X.jsx)(Zn,{src:i.url,alt:i.alt??``,draggable:!1})]})})})}),Zn=V.img`
  display: block;
  min-height: 0;
  object-fit: contain;
  user-select: none;
`,Qn=(0,Y.memo)(({currentUserId:e,getAuthor:t})=>{let{t:n}=w(),r=(0,Y.useRef)(null),[i,o]=(0,Y.useState)(``),[s,l]=(0,Y.useState)(`date`),[u,f]=(0,Y.useState)(!1),[p,m]=(0,Y.useState)(null),h=He(),g=q(e=>W.has(e.editor.view,W.$view.UI_COMMENT)),_=$e(e=>e.byId),S=tt.api(),T=G.api(),O=Ue.api(),k=q(e=>e.actions),A=B(e=>e.selectedCommentId),{threads:j,replyCounts:ee,imageCounts:te}=ve(),N=M(),P=ne({onAfterDelete:(0,Y.useCallback)(e=>{A===e&&S.components.selectCommentThread(null)},[S,A])}),F=(0,Y.useCallback)(e=>{if(S.dispatcher().emit(`comment:leave`,null)){if(A===e.id){S.components.selectCommentThread(null);return}if(!U.pinnedThread(e)){S.components.selectCommentThread(e.id);return}S.shape.lookAt(e.id,{duration:.1,padding:{right:400},onMoveEnd:()=>{S.components.selectCommentThread(e.id)}})}},[S,A]),ie=(0,Y.useCallback)(()=>{S.components.selectCommentThread(null)},[S]),ae=(0,Y.useCallback)(e=>{k.commentMarkRead(e)},[k]),I=(0,Y.useCallback)(()=>{k.commentMarkAllRead()},[k]),se=(0,Y.useCallback)(()=>f(e=>!e),[]),ce=(0,Y.useCallback)((e,t)=>{T.getState().changeShapes({update:[{id:e,resolved:!t}]})},[T]),le=(0,Y.useCallback)((t,r)=>{let i=t.trim();if(!i)return;let{projectId:a,all:o}=T.getState(),s=H(),c=mn(o.comment.list)+1;Sn({shapesApi:T,draft:{id:s,type:Je.COMMENT,projectId:a,planId:null,parentId:null,authorId:e,threadNumber:c,message:i,position:null,resolved:!1,status:Ke.DEFAULT},files:r,uploadFile:k.commentUploadImage,onError:()=>k.notifyError(n(`comments.input.uploadError`))}),O.getState().markRead(s)},[T,e,O,k,n]),L=(0,Y.useMemo)(()=>{let e=u?j:j.filter(e=>e.resolved!==!0),t=i.toLowerCase(),n=i.trim()?e.filter(e=>e.message.toLowerCase().includes(t)):e;if(s!==`unread`)return n;let r=e=>+!N.has(e);return[...n].sort((e,t)=>r(e.id)-r(t.id))},[j,i,s,u,N]),ue=j.length>0,de=L.length>0,fe=G(e=>{let t=A&&e.all.comment.hash[A];return t&&!U.pinnedThread(t)?t:null});return(0,X.jsx)(b,{in:g,timeout:200,nodeRef:r,mountOnEnter:!0,unmountOnExit:!0,children:f=>(0,X.jsxs)(ur,{ref:r,"data-status":f,alignStart:!0,gap:`s`,children:[fe&&(0,X.jsx)(Tn,{threadId:fe.id,currentUserId:e,getAuthor:t,onClose:ie},fe.id),(0,X.jsx)(lr,{$type:`popover`,$shadow:!1,justifyBetween:!0,column:!0,gap:`s`,className:`comments-menu`,"data-testid":`comments-menu`,children:(0,X.jsxs)(dr,{column:!0,children:[(0,X.jsx)(mr,{children:(0,X.jsx)(D,{column:!0,gap:`s`,"data-testid":`add-project-comment`,children:(0,X.jsxs)(Q.Root,{children:[(0,X.jsx)(Q.TextArea,{variant:`thread`,placeholder:n(`comments.project.input.placeholder`),"data-testid":`project-comment-input`}),(0,X.jsx)(Q.Attachments,{}),(0,X.jsxs)(Q.Footer,{children:[(0,X.jsx)(Q.AttachButton,{}),(0,X.jsx)(Q.SendButton,{onSend:le})]})]})})}),(0,X.jsxs)(pr,{column:!0,children:[ue&&(0,X.jsxs)(fr,{column:!0,gap:`s`,children:[(0,X.jsx)(x,{color:`text-1`,size:`medium`,weight:`bold`,children:L.length>0?n(`comments.panel.titleWithCount`,{count:L.length}):n(`comments.panel.noResults.title`)}),(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,children:[(0,X.jsx)(d,{"aria-label":n(`comments.panel.search`),placeholder:n(`comments.panel.search`),value:i,onChange:e=>o(typeof e==`string`?e:``),style:{flex:1},"data-testid":`comments-menu-search`}),(0,X.jsx)(rr,{sort:s,onSortChange:l,showResolved:u,onToggleResolved:se,hasUnread:N.size>0,onMarkAllRead:I})]})]}),de&&(0,X.jsx)(hr,{"data-internal-scrolly":!0,column:!0,children:L.map((r,i)=>{let o=ee[r.id]??0,s=oe(n,o,te[r.id]??0),l=r.planId?_[r.planId]:void 0,u=r.resolved===!0,d=r.authorId===e,f=t(r.authorId),g=A===r.id,b=A&&A===L[i+1]?.id,S=p===r.id,C=U.pinnedThread(r)?re:a;return(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsxs)(gr,{column:!0,gap:`s`,style:{opacity:u?.5:1},onClick:()=>F(r),onMouseEnter:()=>m(r.id),onMouseLeave:()=>m(null),$isActive:g,"data-active":g,"data-testid":`comments-menu-row`,children:[(0,X.jsxs)(D,{gap:`xs`,justifyBetween:!0,children:[(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,shrinkable:!0,flex:1,children:[(0,X.jsx)(vn,{author:f}),(0,X.jsxs)(D,{shrinkable:!0,flex:1,children:[(0,X.jsx)(x,{size:`small`,color:`text-1`,isTruncated:!0,children:f.name}),(0,X.jsxs)(vr,{size:`small`,color:`text-3`,children:[`・`,Xe.capitalize(Xt(r.createdAt))]})]})]}),(0,X.jsxs)(or,{$visible:S,"aria-hidden":!S,alignCenter:!0,gap:`xxs`,children:[(0,X.jsx)(sr,{canMarkAsRead:N.has(r.id),canDelete:d,hasReplies:o>0,onMarkAsRead:()=>ae(r.id),onDelete:()=>P(r.id,o>0)}),(0,X.jsx)(cr,{children:(0,X.jsx)(v,{description:n(u?`comments.thread.markAsUnresolved`:`comments.thread.markAsResolved`),placement:`top`,children:(0,X.jsx)(E,{variant:`tertiary-neutral`,size:`xsmall`,onPress:()=>ce(r.id,u),"aria-label":n(u?`comments.thread.markAsUnresolved`:`comments.thread.markAsResolved`),"data-testid":`comments-menu-row-resolve`,children:(0,X.jsx)(it,{size:`original`,variant:u?`fill`:void 0})})})})]})]}),(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,style:{justifyContent:`space-between`},children:[(0,X.jsxs)(D,{alignCenter:!0,children:[(0,X.jsxs)(x,{size:`small`,color:`text-3`,children:[`#`,r.threadNumber??``]}),(0,X.jsx)(x,{size:`small`,color:`text-3`,children:`・`}),(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,shrinkable:!0,children:[(0,X.jsx)(C,{color:h.designer.motif[`desktop-color-text-3`]}),(0,X.jsx)(x,{size:`small`,color:`text-3`,isTruncated:!0,children:l?l.title:n(`comments.panel.projectLabel`)})]})]}),N.has(r.id)&&(0,X.jsx)(c,{status:`info`,style:{flexShrink:0}})]}),(0,X.jsx)(_n,{color:`text-1`,children:r.message}),s&&(0,X.jsx)(D,{children:(0,X.jsx)(y,{color:`ublue-06`,children:s})})]}),i<L.length-1&&(0,X.jsx)(_r,{$visible:!g&&!b})]},r.id)})}),!ue&&(0,X.jsx)(ar,{children:(0,X.jsx)(C,{title:n(`comments.panel.empty.title`),description:n(`comments.panel.empty.description`)})}),ue&&!de&&(0,X.jsx)(ar,{children:(0,X.jsx)(C,{description:n(`comments.panel.noResults.description`)})})]})]})})]})})}),$n=`mark-all-read`,er=`show-resolved`,tr=({active:e,color:t,children:n})=>(0,X.jsxs)(D,{alignCenter:!0,gap:`xs`,children:[(0,X.jsx)(T.SelectedIndicator,{isSelected:e}),(0,X.jsx)(x,{color:t,children:n})]}),nr=[`date`,`unread`],rr=(0,Y.memo)(({sort:e,onSortChange:t,showResolved:n,onToggleResolved:r,hasUnread:i,onMarkAllRead:a})=>{let{t:o}=w(),s=(0,Y.useCallback)(e=>{if(e){if(e===$n){a?.();return}if(e===er){r();return}t(e)}},[t,r,a]);return(0,X.jsxs)(ir,{"aria-label":o(`comments.panel.options.ariaLabel`),size:`small`,minWidth:32,hasSelectorTrigger:!1,hasSelectedIndicator:!1,selectionMode:`single`,placement:`bottom end`,value:e,onChange:s,selectorValue:()=>(0,X.jsx)(ot,{size:`original`}),"data-testid":`comments-menu-filter`,children:[(0,X.jsx)(h.Section,{title:``,children:nr.map(t=>(0,X.jsx)(h.Item,{id:t,textValue:o(`comments.panel.sort.${t}`),label:(0,X.jsx)(tr,{active:e===t,children:o(`comments.panel.sort.${t}`)})},t))}),(0,X.jsxs)(h.Section,{title:``,children:[(0,X.jsx)(h.Item,{id:er,textValue:o(`comments.panel.showResolved`),label:(0,X.jsx)(tr,{active:n,children:o(`comments.panel.showResolved`)})}),i&&(0,X.jsx)(h.Item,{id:$n,textValue:o(`comments.panel.markAllAsRead`),label:(0,X.jsx)(tr,{active:!1,color:`ublue-06`,children:o(`comments.panel.markAllAsRead`)})})]})]})}),ir=V(f)`
  [data-uic-component="Selector.Button"] {
    width: 32px;
    height: 32px;
    justify-content: center;
    padding: 0;

    // prevent rotation
    svg {
      transform: none;
    }
  }
`,ar=V(D)`
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
`,or=V(D)`
  flex-shrink: 0;
  opacity: ${({$visible:e})=>+!!e};
  pointer-events: ${({$visible:e})=>e?`auto`:`none`};
`,sr=(0,Y.memo)(({canMarkAsRead:e,canDelete:t,hasReplies:n,onMarkAsRead:r,onDelete:i})=>{let{t:a}=w(),[o,s]=(0,Y.useState)(!1);return!e&&!t?null:(0,X.jsx)(cr,{children:(0,X.jsxs)(u,{size:`auto`,align:`bottomLeft`,open:o,onChange:s,renderToggle:()=>(0,X.jsx)(Rt,{size:`original`,actionable:!0,"aria-label":a(`comments.panel.threadOptions.ariaLabel`),"data-testid":`comments-menu-row-options`}),renderCard:e=>(0,X.jsx)(g.Card,{...e,"data-testid":`comments-menu-options`}),children:[e&&(0,X.jsx)(S,{variant:`tertiary-neutral`,width:`full`,onPress:()=>{r(),s(!1)},style:{justifyContent:`flex-start`},preventFocusOnPress:!0,children:(0,X.jsx)(x,{children:a(`comments.panel.markAsRead`)})}),t&&(0,X.jsx)(S,{variant:`tertiary-neutral`,width:`full`,onPress:()=>{i(),s(!1)},style:{justifyContent:`flex-start`},preventFocusOnPress:!0,children:(0,X.jsx)(x,{children:a(n?`comments.panel.deleteThread`:`comments.panel.deleteComment`)})})]})})}),cr=(0,Y.memo)(({children:e})=>(0,X.jsx)(`div`,{role:`none`,onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),style:{flexShrink:0},children:e})),lr=V(st)`
  width: 300px;
  max-height: 100%;
  border-radius: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
`,ur=V(D)`
  --overlay-margin: ${({theme:e})=>e.designer[`desktop-spacing-base-04`]};

  position: absolute;
  top: var(--overlay-margin);
  bottom: var(--overlay-margin);
  right: var(--overlay-margin);
  z-index: 10;

  pointer-events: none;
  > * {
    pointer-events: auto;
  }

  opacity: 0;
  visibility: hidden;
  transform: ${({theme:e})=>`translateX(${e.designer[`desktop-spacing-base-05`]})`};
  transition: all 200ms ease-in-out;

  &[data-status="entering"],
  &[data-status="entered"] {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`,dr=V(D)`
  flex: 1;
  min-height: 0;
  border-radius: ${({theme:e})=>e.designer[`desktop-spacing-base-01`]};

  > * {
    background-color: ${({theme:e})=>e.designer.motif[`desktop-color-depth-bg-1`]};
  }
`,fr=V(D)`
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
`,pr=V(D)`
  flex: 1;
  min-height: 0;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-global`]};
`,mr=V(Vt)`
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  margin-bottom: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-global`]};
`,hr=V(D)`
  --scrollbar-width: ${({theme:e})=>e.designer.scrollbar.width};

  // Firefox does not allocate additional space for the scrollbar
  @supports (-moz-appearance: none) {
    --scrollbar-width: 0px;
  }

  // subtract the scrollbar width to avoid larger padding on right side
  padding-right: calc(${({theme:e})=>e.designer[`desktop-spacing-base-02`]} - var(--scrollbar-width));
  padding-bottom: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};

  border-bottom-left-radius: ${({theme:e})=>e.designer[`desktop-radius-global`]};
  border-bottom-right-radius: ${({theme:e})=>e.designer[`desktop-radius-global`]};
`,gr=V(D)`
  cursor: pointer;

  background: ${({$isActive:e,theme:t})=>e?t.designer.motif[`desktop-color-ublue-01`]:`inherit`};
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-global`]};

  &:hover:not([data-active="true"]) {
    background: ${({theme:e})=>e.designer.customColors.panel.itemHover};
  }
`,_r=V(O,{shouldForwardProp:J.isTransientProp})`
  visibility: ${({$visible:e})=>e?`visible`:`hidden`};
  margin-left: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
`,vr=V(x)`
  flex-shrink: 0;
  white-space: nowrap;
`,$={changeWallOpacity:Ye.inline(()=>z.project({action:`Changed wall opacity`,category:R.SettingsToolbar}),{wait:Le}),clickButton:e=>z.project({action:`Clicked ${e}`,category:R.EditorAction}),clickContextMenu:e=>{let t=Pe[e];t&&z.project({action:`Clicked context menu "${t}" option`,category:R.EditorAction})},openEditor:e=>z.project({action:`Opened ${e} editor`,category:R.OpenEditor}),openMeasurementMenu:()=>z.project({action:`Opened scale setting menu`,category:R.ScaleSetting}),openSidebar:e=>z.project({action:`Opened ${e} sidebar`,category:R.Sidebar}),retryScale:()=>z.project({action:`Clicked try again`,category:R.ScaleSetting}),saveScale:()=>z.project({action:`Saved scale`,category:R.ScaleSetting}),scaleIcons:Ye.inline(()=>z.project({action:`Scaled plan icons`,category:R.SettingsToolbar}),{wait:Le}),toggleContextMenu:e=>z.project({action:`${Fe.get(e)} editor context menu`,category:R.EditorAction}),toggleCoverage:e=>z.project({action:`Toggled ${e||`off`} coverage`,category:R.SettingsToolbar}),togglePorts:e=>z.project({action:`Toggled port numbers ${Ne.get(e)}`,category:R.SettingsToolbar}),toggleSettings:e=>z.project({action:`${Fe.get(e)} plan settings toolbar`,category:R.SettingsToolbar})},yr=(0,Y.memo)(({projectId:e,planId:t,plans:n,shapes:r,shapeExtra:i,products:a,settings:o,mode:s,actions:c,wallTypes:l,attenuationObjectTypes:u,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g})=>(It(),(0,X.jsxs)(Ge,{name:`EDITOR`,isPhone:!0,disableAutoFocus:!0,consumer:`designcenter`,projectId:e,planId:t,plans:n,shapes:r,shapeExtra:i,products:a,settings:o,mode:s,wallTypes:l,attenuationObjectTypes:u,actions:c,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g,children:[(0,X.jsx)(Ae,{}),(0,X.jsxs)(at,{maptilerApiKey:ht.MAPTILER_API_KEY,children:[(0,X.jsx)(Dt,{}),(0,X.jsx)(Pt,{})]}),(0,X.jsx)(de,{Title:({device:e})=>(0,X.jsx)(X.Fragment,{children:e.title||e.$product?.title}),Model:({device:e})=>(0,X.jsx)(X.Fragment,{children:e.$product?.sku}),Port:({device:e})=>(0,X.jsx)(Te,{shapeId:e.id}),Channels:Oe})]}))),br=[we,ut,dt,ke,ct,ue,he,lt],xr=(0,Y.memo)(()=>{let{planId:e,projectId:t,plans:n,products:r,shapes:i,shapeExtra:a,settings:o,mode:s,actions:c,wallTypes:l,attenuationObjectTypes:u,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g}=vt(),_=(0,Y.useRef)(ze()),v={projectId:t,planId:e,plans:n,shapes:i,shapeExtra:a,products:r,settings:o,mode:s,actions:c,wallTypes:l,attenuationObjectTypes:u,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g};return(0,X.jsx)(_.current?yr:Sr,{...v})}),Sr=(0,Y.memo)(({planId:e,projectId:t,plans:n,products:r,shapes:i,shapeExtra:a,settings:o,mode:s,actions:c,wallTypes:l,attenuationObjectTypes:u,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g})=>{let _=Me(t),v=Cr(t);et.external(`EDITOR`,`editor:shape:change`,e=>{_.mutate({...e.detail,name:`EDITOR`}),Re.updateShapes(t,e.detail),ht.ENV!==`prod`&&console.warn(`changes:`,e.detail)});let y=(0,Y.useCallback)(e=>`planId`in e?c.planUpdate(e):c.planCreate(e),[c]);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(N,{onCreate:c.planCreate,onUpdate:c.planUpdate,maptilerApiKey:ht.MAPTILER_API_KEY}),(0,X.jsxs)(Ge,{name:`EDITOR`,consumer:`designcenter`,projectId:t,planId:e,plans:n,shapes:i,shapeExtra:a,products:r,settings:o,mode:s,wallTypes:l,attenuationObjectTypes:u,actions:c,country:d,internetSettings:f,commentReadState:p,channelPlan:m,storagePlan:h,canRunWallDetection:g,children:[(0,X.jsx)(Ae,{}),(0,X.jsx)(gt,{}),(0,X.jsx)(je,{panels:br}),(0,X.jsx)(Dr,{}),(0,X.jsx)(Lt,{}),(0,X.jsxs)(at,{maptilerApiKey:ht.MAPTILER_API_KEY,children:[(0,X.jsx)(Dt,{}),(0,X.jsx)(kt,{}),(0,X.jsx)(Et,{}),(0,X.jsx)(Tt,{}),(0,X.jsx)(wt,{}),(0,X.jsx)(Ct,{}),(0,X.jsx)(jt,{}),(0,X.jsx)(Nt,{}),(0,X.jsx)(At,{}),(0,X.jsx)(Ot,{}),(0,X.jsx)(Mt,{}),(0,X.jsx)(Pt,{}),ht.ENV!==`prod`&&(0,X.jsx)(Ft,{})]}),(0,X.jsx)(de,{Title:({device:e})=>(0,X.jsx)(X.Fragment,{children:e.title||e.$product?.title}),Model:({device:e})=>(0,X.jsx)(X.Fragment,{children:e.$product?.sku}),Port:({device:e})=>(0,X.jsx)(Te,{shapeId:e.id}),Channels:Oe}),(0,X.jsx)(Se,{Title:({rack:e})=>(0,X.jsx)(X.Fragment,{children:e.title||e.$product?.title})}),(0,X.jsx)(be,{}),(0,X.jsx)(pe,{}),(0,X.jsx)(me,{}),(0,X.jsx)(fe,{}),(0,X.jsx)(ge,{}),(0,X.jsx)(De,{}),(0,X.jsx)(I.Scale,{}),(0,X.jsx)(te,{}),(0,X.jsx)(ce,{}),(0,X.jsx)(Ce,{}),(0,X.jsx)(Er,{getAuthor:v}),(0,X.jsx)(_e,{}),(0,X.jsx)(Ee,{}),(0,X.jsx)(xe,{}),(0,X.jsx)(ft,{}),(0,X.jsx)(Xn,{}),(0,X.jsx)(L,{}),(0,X.jsx)(F,{onSubmit:y,onChange:c.validatePlanChange,initialForm:{title:`Floor ${n.filter(({type:e})=>e!==`geo`).length+1}`}}),(0,X.jsx)(Tr,{getAuthor:v}),(0,X.jsx)(wr,{getAuthor:v}),(0,X.jsx)(xt,{}),(0,X.jsx)(St,{})]})]})}),Cr=e=>{let t=bt(e??null),{t:n}=mt();return(0,Y.useCallback)(e=>{let r=e&&t[e];if(r&&r.type===`member`)return{id:r.id,email:r.email,avatar:r.avatar??null,name:r.name,status:fn.AVAILABLE};let i=e?fn.UNKNOWN:fn.DELETED;return{id:e,email:``,avatar:null,status:i,name:n({id:`entity.comment.author.${i}`})}},[t,n])},wr=(0,Y.memo)(({getAuthor:e})=>{let t=Ie().data?.ssoId??``;return t?(0,X.jsx)(In,{currentUserId:t,getAuthor:e}):null}),Tr=(0,Y.memo)(({getAuthor:e})=>(0,X.jsx)(Gn,{currentUserId:Ie().data?.ssoId??``,getAuthor:e})),Er=(0,Y.memo)(({getAuthor:e})=>{let t=Ie().data?.ssoId??``;return t?(0,X.jsx)(Qn,{currentUserId:t,getAuthor:e}):null}),Dr=(0,Y.memo)(()=>{let e=B.api(),t=q.api(),n=G.api();return(0,Y.useEffect)(()=>{_t.openPage()},[]),et(`editor:menu:action`,e=>$.clickContextMenu(e.detail.action)),(0,Y.useEffect)(()=>e.subscribe(e=>e.open.contextMenu,$.toggleContextMenu),[e]),(0,Y.useEffect)(()=>e.subscribe(e=>e.sidePanel.panel,$.openSidebar),[e]),(0,Y.useEffect)(()=>t.subscribe(e=>W.has(e.editor.view,W.$view.UI_SCALE),e=>e&&$.openMeasurementMenu()),[t]),(0,Y.useEffect)(()=>e.subscribe(e=>e.open.toolbarPopover===`settings`,$.toggleSettings),[e]),(0,Y.useEffect)(()=>t.subscribe(e=>e.settings.visual.scale.device,$.scaleIcons),[t]),(0,Y.useEffect)(()=>t.subscribe(e=>e.settings.coverage.type,$.toggleCoverage),[t]),(0,Y.useEffect)(()=>t.subscribe(e=>e.settings.visual.stats.attributes.includes(`port`),$.togglePorts),[t]),(0,Y.useEffect)(()=>t.subscribe(e=>e.settings.visual.opacity.wall,$.changeWallOpacity),[t]),(0,Y.useEffect)(()=>n.subscribe(e=>e.plan.map.list[0]?.opacity,e=>{typeof e==`number`&&_t.changeOpacity()}),[n]),(0,Y.useEffect)(()=>n.subscribe(e=>e.plan.map.list[0]?.rotation,e=>{typeof e==`number`&&_t.rotateImage()}),[n]),null});export{xr as Component};
//# sourceMappingURL=EditorPage-BDaQ-Fqc.js.map