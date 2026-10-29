try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`ca849825-218b-4dc6-a440-cf650e05cb55`,e._sentryDebugIdIdentifier=`sentry-dbid-ca849825-218b-4dc6-a440-cf650e05cb55`)}catch{}import{q as e,y as t}from"./react-C9EcEEoD.js";import{a as n}from"./rolldown-runtime-Bqsl3lKq.js";import{Yr as r}from"./three-BhPyDYUp.js";import{U as i}from"./Flex-Cep2f4HR.js";import{Wt as a}from"./src-DfQgNQkU.js";import{a as o,rt as s,tt as c}from"./product-DDygbo97.js";import{Di as l,Ei as u,Ms as d,wi as f}from"./src-D838am2T.js";import{i as p}from"./collaborators-CKrbhQYE.js";var m=n(e()),h=t(),g=(0,m.memo)(({x:e,y:t,color:n,displayName:i})=>{let o=(0,m.useRef)(new r);o.current.set(e,t,0);let s=l().designer.motif[`desktop-color-neutral-02`];return(0,h.jsx)(a,{constraint:{position:o.current},children:(0,h.jsxs)(v,{children:[(0,h.jsx)(_,{color:n,strokeColor:s}),(0,h.jsx)(y,{$color:n,$textColor:s,size:`small`,weight:`bold`,className:`cursor-label`,children:i})]})})}),_=(0,m.memo)(({color:e,strokeColor:t})=>(0,h.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,overflow:`visible`,children:(0,h.jsx)(`path`,{fill:e,fillRule:`evenodd`,transform:`translate(-3, -3)`,stroke:t,d:`M4.38 3.075a1 1 0 0 0-1.305 1.306l7 17a1 1 0 0 0 1.844.013l2.685-6.265a1 1 0 0 1 .525-.525l6.265-2.685a1 1 0 0 0-.013-1.844z`,clipRule:`evenodd`})})),v=u.div`
  transform: translate(0, 0);
`,y=u(i,{shouldForwardProp:f.isTransientProp})`
  position: absolute;
  top: 20px;
  left: 16px;

  /* Fixes specificity issues against UIC Text */
  &.cursor-label {
    background-color: ${({$color:e})=>e};
    color: ${({$textColor:e})=>e};
    border-radius: 6px;
    padding: 4px 8px;
    line-height: 14px;
  }

  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,b=[`desktop-color-orange-06`,`desktop-color-green-06`,`desktop-color-ublue-06`,`desktop-color-red-06`,`desktop-color-purple-06`,`desktop-color-aqua-06`,`desktop-color-navy-06`],x=(e,t)=>{let n=0;for(let t=0;t<e.length;t++)n=e.charCodeAt(t)+((n<<5)-n);return t[b[Math.abs(n)%b.length]]},S=d(()=>({users:void 0,plans:void 0,projects:void 0,assistant:void 0})),C=d(()=>({users:[],currentUserInvisible:!1})),w={setCurrentUserInvisible:e=>C.setState({currentUserInvisible:e}),setUsers:e=>C.setState({users:e}),addUser:e=>{C.setState(t=>t.users.some(t=>t.userId===e.userId)?t:{users:[...t.users,e]})},removeUser:e=>{C.setState(t=>({users:t.users.filter(t=>t.userId!==e)}))},reset:()=>C.setState({users:[],currentUserInvisible:!1})},T=(e,t)=>({...e,color:x(e.userId,t)}),E=()=>{let e=o(),{projectId:t}=c(),n=l().designer.motif,r=e.data?.ssoId,i=S(e=>e.projects);(0,m.useEffect)(()=>{if(!i||!r||!s(t))return;let e=({users:e,self:t})=>{w.setCurrentUserInvisible(t.invisible),w.setUsers(e.filter(e=>e.userId!==r).map(e=>T(e,n)))},a=e=>{e.userId!==r&&(w.addUser(T(e,n)),p.invalidate(t))},o=({userId:e})=>{w.removeUser(e)},c=()=>i.emit(`presence-join`,{roomId:t});return w.reset(),i.on(`connect`,c),i.connected&&c(),i.on(`presence-list`,e),i.on(`presence-join`,a),i.on(`presence-leave`,o),()=>{i.off(`connect`,c),i.off(`presence-list`,e),i.off(`presence-join`,a),i.off(`presence-leave`,o),i.emit(`presence-leave`,{roomId:t}),w.reset()}},[i,r,t,n])};export{g as a,x as i,E as n,S as r,C as t};
//# sourceMappingURL=presence-x0Q8YKUG.js.map