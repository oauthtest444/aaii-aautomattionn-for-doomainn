try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`475bb594-9a85-4ae7-a53f-c3b4b76efa5f`,e._sentryDebugIdIdentifier=`sentry-dbid-475bb594-9a85-4ae7-a53f-c3b4b76efa5f`)}catch{}import{R as e,n as t,q as n,r,t as i,y as a}from"./react-C9EcEEoD.js";import{a as o}from"./rolldown-runtime-Bqsl3lKq.js";import{D as s}from"./ShimmerText-C6CzBzDG.js";import{U as c,it as l,rt as u,t as d}from"./Flex-Cep2f4HR.js";import"./src-DfQgNQkU.js";import{_ as f,n as p,r as m}from"./product-DDygbo97.js";import{Ei as h,H as g,La as _,Ms as v,Ti as y,Us as b,wi as x}from"./src-D838am2T.js";import{l as S,m as C}from"./SemanticIndicator_Default-9HMTQx0X.js";import{n as w,t as T}from"./config-Butb-XBt.js";var E=o(n()),D=S(e=>(0,E.createElement)(`svg`,C({viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`},e),(0,E.createElement)(`path`,{d:`m5.107 16.49 11.012-5.599c.722-.367.722-1.415 0-1.782L5.107 3.511c-.375-.19-.796.153-.695.566l1.052 4.277a.986.986 0 0 0 .812.744l2.812.409c.561.081.561.905 0 .986l-2.812.409a.986.986 0 0 0-.812.744l-1.052 4.277c-.101.413.32.756.695.566Z`,fill:`currentColor`,className:e.twotonedclassname}),(0,E.createElement)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M4.177 3.103a.477.477 0 0 1 .506-.054l11.534 5.699a1.393 1.393 0 0 1 0 2.504L4.683 16.951a.477.477 0 0 1-.506-.054.464.464 0 0 1-.163-.477l1.263-4.99a1.41 1.41 0 0 1 1.174-1.047L9.16 10l-2.71-.383a1.41 1.41 0 0 1-1.174-1.046L4.014 3.58a.464.464 0 0 1 .163-.477Zm1.002 1.235 1.014 4.007a.47.47 0 0 0 .391.348l2.711.383c1.081.153 1.082 1.695 0 1.848l-2.71.383a.47.47 0 0 0-.392.348L5.18 15.662l10.615-5.245a.464.464 0 0 0 0-.834L5.18 4.338Z`,fill:`currentColor`,className:e.baseclassname}),(0,E.createElement)(`path`,{d:`m4.752 16.942 11.674-5.989c.765-.392.765-1.513 0-1.906L4.752 3.057c-.396-.203-.843.165-.736.606L5.131 8.24c.102.42.443.735.86.796l2.982.438c.594.087.594.967 0 1.055l-2.981.437a1.049 1.049 0 0 0-.861.796l-1.115 4.576c-.107.441.34.809.736.605Z`,fill:`currentColor`,className:e.fillclassname}))),O=e=>new Promise((t,n)=>{let r=e=>{if(e.data===`/start/`){let e=k.store.getState().timeToStartStream;e&&k.store.setState({timeToStartStream:{initiated:e.initiated,startedStream:new Date}})}else if(e.data===`/stop/`)a.close();else{let t=e.data;m.setQueryData(k.queryKey,e=>e&&{...e,currentlyStreamedMessaged:(e.currentlyStreamedMessaged||``)+t})}},i=new URL(T.LEX_WEBHOOK_URL);i.searchParams.set(`sessionId`,e||``);let a=new WebSocket(i);a.addEventListener(`open`,()=>t(a),{once:!0}),a.addEventListener(`error`,e=>n(Error(`Assistant socket failed`,{cause:e})),{once:!0}),a.addEventListener(`close`,()=>a.removeEventListener(`message`,r),{once:!0}),a.addEventListener(`message`,r)}),k=()=>{let e=k.store(e=>e.disabled),n=k.store(e=>e.setInput),a=f(!0),o=t({mutationKey:[`createMessage`],status:`pending`}),s=i({mutationKey:[`createMessage`],mutationFn:({input:e,retry:t})=>p.request({path:`/assistant/message`,method:`POST`,body:{message:e,retry:t,store:a.data?.store||null}}),onMutate:e=>{if(n(``),!l.data?.threadId)throw Error(`No threadId`);return k.store.setState({timeToStartStream:{initiated:new Date,startedStream:null}}),e.retry?m.setQueryData(k.queryKey,e=>e&&{...e,error:void 0,messagesAvailable:e.messagesAvailable-1}):k.createMessage(e),O(l.data?.threadId)},onSettled:(e,t,n,r)=>{r?.close(),m.setQueryData(k.queryKey,()=>e)},onSuccess:e=>{if(!e)return;let t=e.messages[e.messages.length-1],n=k.store.getState().timeToStartStream;!t||!n||!n.startedStream||c.mutate({id:t.id,data:{timeToStartStream:n.startedStream.getTime()-n.initiated.getTime()}})},onError:e=>{if(e.backend?.code===`errors.assistant.usage`)return m.setQueryData(k.queryKey,e=>e&&{...e,messagesAvailable:0});m.setQueryData(k.queryKey,e=>e?{...e,error:{message:`Assistant encountered an error`}}:void 0)}}),c=i({mutationFn:({id:e,data:t})=>p.request({path:`/assistant/message/:messageId`,method:`PATCH`,body:t,params:{messageId:e}}),onMutate:({id:e,data:t})=>{t.rating!==void 0&&m.setQueryData(k.queryKey,n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,rating:t.rating===void 0?n.rating:t.rating}:n)})}}),l=r({queryKey:k.queryKey,queryFn:({signal:e})=>p.request({path:`/assistant`,method:`GET`,signal:e}),enabled:!1,refetchOnWindowFocus:!1}),u=i({mutationFn:()=>p.request({path:`/assistant/thread`,method:`DELETE`}),onMutate:()=>{m.setQueryData(k.queryKey,e=>e&&{...e,messages:[]})},onSettled:()=>l.refetch()});return{assistant:l,currentlyStreamedMessage:l.data?.currentlyStreamedMessaged,createMessage:s,loadAssistant:l.refetch,loading:o>0&&!l.data?.currentlyStreamedMessaged,disabled:e||!!l.data?.currentlyStreamedMessaged||!l.data?.messagesAvailable||l.isPending||o>0,clearHistory:u,updateMessage:c}};k.queryKey=[`assistant`],k.createMessage=({input:e})=>{m.setQueryData(k.queryKey,t=>t?{...t,messagesAvailable:(t?.messagesAvailable||1)-1,messages:[...t?.messages||[],A({value:e,role:`user`})],error:void 0}:void 0)},k.reportError=e=>{m.setQueryData(k.queryKey,t=>t&&{...t,error:e.error})},k.handleSocketUpdate=e=>{k.store.setState({disabled:!1}),m.setQueryData(k.queryKey,()=>e)},k.handleMessageSocketUpdate=({id:e,...t})=>{m.setQueryData(k.queryKey,n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,...t}:n)})},k.handleAssistantToggleDisableSocket=({disabled:e})=>{k.store.setState({disabled:e})},k.store=v(e=>({disabled:!1,timeToStartStream:null,open:!1,input:``,setInput:t=>e({input:t}),toggleAssistant:t=>e(e=>({open:t===void 0?!e.open:t}))}));var A=({id:e=_(),value:t=``,role:n})=>({role:n,id:e,message:t,createdAt:new Date,rating:null}),j=e=>[`/projects`,`/allprojects`].some(t=>e===t||e===`${t}/`)||e.includes(`/wizard`),M=(e,t)=>e&&!t.includes(`/wizard`)&&!t.includes(`/maintenance`),N=e=>e===`/allprojects`||e===`/allprojects/`,P=a(),F=[`input-container`,`assistant-box`],I=()=>{let{t:e}=w(),{disabled:t,createMessage:n}=k();b().motif;let r=L(),i=k.store(e=>e.open),a=k.store(e=>e.input),o=k.store(e=>e.toggleAssistant),l=k.store(e=>e.setInput),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>!a.length||t,[t,a.length]),m=(0,E.useCallback)(async()=>{if(!a||p)return;let e=document.querySelector(`div.assistant-scrolly`);e&&(e.scrollTop=0),n.mutate({input:a,retry:!1})},[n,p,a]);return s(i,()=>o(!1),F),r?(0,P.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),m()},children:(0,P.jsxs)(z,{$isOpen:i,onClick:()=>f.current?.focus(),className:`input-container`,"data-testid":`gpt-assistant-input-container`,children:[(0,P.jsx)(B,{className:`input-border`}),(0,P.jsxs)(V,{onFocus:()=>o(!0),children:[(0,P.jsx)(H,{ref:f,type:`text`,name:`prompt`,placeholder:e({id:`components.assistant.trigger.placeholder`}),value:a,onChange:e=>l(e.target.value),autoComplete:`off`,$isOpen:i,maxLength:500}),i&&a&&(0,P.jsxs)(d,{alignCenter:!0,children:[a.length>400&&(0,P.jsx)(d,{children:(0,P.jsxs)(c,{color:`text-3`,children:[a.length,`/`,500]})}),(0,P.jsx)(u,{variant:`tertiary-neutral`,onPress:m,isDisabled:p,size:`small`,shape:`rounded`,children:(0,P.jsx)(D,{size:`original`,variant:`fill`,isActive:!p})})]})]})]})}):(0,P.jsx)(U,{size:`medium`,variant:`neutral`,onPress:()=>o(),children:(0,P.jsx)(c,{weight:`bold`,className:`label`,children:e({id:`component.assistant.label`})})})},L=()=>{let t=g(`s`),n=g(`m`),r=j(e().pathname);return(0,E.useMemo)(()=>!t&&(!n||r),[t,n,r])},R=y`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`,z=h.div`
  position: relative;
  cursor: text;
  height: 32px;
  border-radius: 20px;
  transition: width 0.3s ease;

  ${({$isOpen:e})=>x`
    width: ${e?750:240}px;
  `}

  ${({$isOpen:e})=>x`
    @media (max-width: 1400px) {
      width: ${e?600:240}px;
    }
  `}

  ${({$isOpen:e})=>x.viewport.l(x`
      width: ${e?350:240}px;
    `)}

  ${({$isOpen:e})=>x.viewport.m(x`
      width: ${e?270:240}px;
    `)}



  &:focus-within .input-border::before {
    animation-duration: 5s;
    opacity: 1;
    filter: brightness(1.2);
  }
`,B=h.div`
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: ${({theme:e})=>x`linear-gradient(
      -5deg,
      ${e.designer.motif[`desktop-color-aqua-06`]} 0%,
      ${e.designer.motif[`desktop-color-ublue-07`]} 40%,
      ${e.designer.motif[`desktop-color-purple-06`]} 50%,
      ${e.designer.motif[`desktop-color-ublue-07`]} 60%,
      ${e.designer.motif[`desktop-color-aqua-06`]} 100%
    )`};

    animation: ${R} 10s linear infinite;
    background-size: 300% 100%;
    opacity: 0.6;
    transition:
      opacity 0.3s,
      filter 0.3s,
      animation-duration 0.3s,
      box-shadow 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-03`]};
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
`,V=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-00`]};
  border-radius: 20px;
  gap: 4px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-01`]};
  }

  &:focus-within {
    background: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-00`]};
  }
`,H=h.input`
  flex-grow: 1;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.designer.motif[`desktop-color-text-1`]};
  font-size: ${({theme:e})=>e.designer[`desktop-font-size-medium`]};
  outline: none;

  &::placeholder {
    background: ${({theme:e})=>x`linear-gradient(
      90deg,
      ${e.designer.motif[`desktop-color-ublue-07`]} 0%,
      ${e.designer.motif[`desktop-color-purple-06`]} 70%,
      ${e.designer.motif[`desktop-color-purple-06`]} 100%
    )`};
    background-clip: text;
    color: transparent;
    opacity: 0.8;
    transition: color 0.2s ease;
    font-weight: 500;
  }
`,U=h(l)`
  background: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-00`]} !important;
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-medium`]} !important;
  padding: 0px 14px 0px 8px !important;
  height: 32px;

  &:hover {
    background-color: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-01`]} !important;
  }

  ${({theme:e})=>x.viewport.m(x`
      position: relative;
      border-radius: 20px !important;
      padding: 0px 14px !important;
      width: auto !important;
      max-width: none !important;
      min-width: unset;
      border: none !important;
      white-space: nowrap;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 1px;
        background: linear-gradient(
          15deg,
          ${e.designer.motif[`desktop-color-aqua-06`]} 0%,
          ${e.designer.motif[`desktop-color-ublue-07`]} 40%,
          ${e.designer.motif[`desktop-color-purple-06`]} 100%
        );
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .icon {
        display: none;
      }

      .label {
        display: block;
        font-weight: normal;
        background: linear-gradient(
          25deg,
          ${e.designer.motif[`desktop-color-ublue-07`]} 0%,
          ${e.designer.motif[`desktop-color-purple-06`]} 70%,
          ${e.designer.motif[`desktop-color-purple-06`]} 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    `)}
`;export{M as a,j as i,L as n,k as o,N as r,D as s,I as t};
//# sourceMappingURL=AssistantTrigger-Bc0VhrYS.js.map