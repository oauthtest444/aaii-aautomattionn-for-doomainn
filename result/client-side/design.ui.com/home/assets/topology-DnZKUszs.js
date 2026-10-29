try{let e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`f290bea0-baae-403d-bbe6-a93a048516ee`,e._sentryDebugIdIdentifier=`sentry-dbid-f290bea0-baae-403d-bbe6-a93a048516ee`)}catch{}import{q as e,y as t}from"./react-C9EcEEoD.js";import{a as n}from"./rolldown-runtime-Bqsl3lKq.js";import{L as r,Lr as i,R as a,X as o,c as s}from"./ShimmerText-C6CzBzDG.js";import{H as c,U as l,n as u,rt as d,t as f,x as p}from"./Flex-Cep2f4HR.js";import{B as m,C as h,D as g,Dn as _,E as v,H as y,It as b,L as x,Lt as S,R as C,S as w,T,U as E,V as D,W as O,w as k,yn as A,z as j}from"./src-DfQgNQkU.js";import{Ai as M,Di as N,Ei as P,H as F,Ni as I,Pc as L,Rc as R,Ta as z,bi as B,wn as V}from"./src-D838am2T.js";var H=n(e()),U=t(),W=(0,H.memo)(({nodes:e,links:t})=>{let n=V.api(),o=M(e=>e.permissions.Overlay),s=(0,H.useMemo)(()=>{let t=new Map;for(let n of e){if(S(n))continue;let e=b(n),r=`${n.productId}:${e}`,i=t.get(r);if(i){i.nodes.push(n);continue}t.set(r,{id:r,group:e,nodes:[n]})}return[...t.values()]},[e]),l=z(e=>{n.shape.setOptimize([e],!0)},{wait:200}),u=(0,H.useCallback)(e=>{n.shape.removeShapes(e,!0)},[n]);return(0,U.jsxs)(f,{column:!0,style:{width:270,pointerEvents:`auto`},"data-testid":`connection-menu`,children:[o.ButtonAutoConnect&&e.length>0&&(0,U.jsx)(q,{children:(0,U.jsx)(E,{nodes:e})}),s.length>0&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(p,{}),(0,U.jsx)(G,{column:!0,as:`ul`,"data-internal-scrolly":!0,style:{scrollbarGutter:`auto`,padding:0},children:s.map(e=>{let t=e.nodes[0];return(0,U.jsx)(K,{as:`li`,column:!0,center:!0,onClick:()=>l(t.id),children:(0,U.jsxs)(f,{alignCenter:!0,justifyBetween:!0,full:!0,gap:`s`,children:[(0,U.jsxs)(f,{gap:`s`,alignCenter:!0,shrinkable:!0,children:[e.group===`haStack`?(0,U.jsx)(r,{src:t.images.editor,alt:t.productTitle,size:24,crossOrigin:`anonymous`}):(0,U.jsx)(`img`,{crossOrigin:`anonymous`,width:24,height:24,src:t.images.editor,alt:t.title}),(0,U.jsx)(c,{variant:`body-primary`,color:`text-1`,isTruncated:!0,style:{overflow:`hidden`},children:t.productTitle})]}),e.nodes.length>1&&(0,U.jsx)(a,{className:`count-bubble`,children:e.nodes.length}),(0,U.jsx)(d,{className:`button-remove`,size:`small`,variant:`tertiary-neutral`,onPress:()=>u(e.nodes.map(e=>e.id)),children:(0,U.jsx)(i,{})})]})},e.id)})}),(0,U.jsx)(p,{})]}),o.ButtonRemoveConnections&&t.length>0&&(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(q,{children:(0,U.jsx)(O,{links:t})})})]})}),G=P(f)`
  margin: 0;
  border-radius: 4px;
  overflow-x: hidden;
`,K=P(f)`
  cursor: pointer;
  user-select: none;
  padding: ${({theme:e})=>`${e.designer[`desktop-spacing-xsmall`]} ${e.designer[`desktop-spacing-small`]}`};

  &:hover {
    background-color: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-02`]};
  }

  .button-remove {
    display: none;
    outline: none;
  }

  &:hover {
    .button-remove {
      display: flex;
    }

    .count-bubble {
      display: none;
    }
  }
`,q=P.div`
  padding: 8px;
  width: 100%;
`,J=(0,H.memo)(()=>{let{t:e}=u(),t=N(),n=I(e=>e.all.device.list),{items:r,totalCount:i}=(0,H.useMemo)(()=>{let t={totalCount:0,items:{}};for(let r of n){let n=r.$product.category;n!==L.ACCESSORIES&&(t.totalCount++,t.items[n]||={count:0,icon:o[n],title:e(`commons.product.category.${n}`)},t.items[n].count++)}return{items:Object.keys(o).filter(e=>e in t.items).map(e=>t.items[e]),totalCount:t.totalCount}},[e,n]);return i?(0,U.jsxs)(f,{gap:`m`,center:!0,children:[(0,U.jsxs)(f,{gap:`s`,center:!0,children:[(0,U.jsx)(A,{size:`original`,color:t.designer.motif[`desktop-color-neutral-08`],children:(0,U.jsx)(_,{size:`original`})}),(0,U.jsx)(l,{"data-testid":`device-count`,children:e(`overlay.common.deviceCount`,{value:i})})]}),(0,U.jsx)(p,{variant:`solid`,orientation:`vertical`,style:{height:12}}),(0,U.jsx)(f,{gap:`s`,center:!0,children:r.map(({count:e,icon:n,title:r})=>(0,U.jsxs)(f,{gap:`xs`,center:!0,title:r,children:[(0,U.jsx)(A,{size:`original`,color:t.designer.motif[`desktop-color-neutral-08`],children:n}),(0,U.jsx)(l,{children:e})]},r))})]}):null}),Y=(0,H.memo)(({onAction:e,installerGuide:t=!1,isShare:n=!1,onExport:r,isExporting:i=!1})=>{let a=F(),o=M(e=>e.permissions),c=M(e=>e.open.deviceSettingsMenu),l=B.api(),u=B(e=>e.nodes({type:R.DEVICE,status:`unlinked`})),d=B(e=>e.links()),f=(0,H.useMemo)(()=>{let e=l.getState();return u.filter(t=>e.canStartWire(t.id)||e.canStartWireless(t.id))},[u,l]),p=o.Overlay.ConnectionMenu&&f.length>0&&!c,h=o.Overlay.ButtonRemoveConnections&&!p&&d.length>0&&!c;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(s,{}),(0,U.jsxs)(C,{$disabled:!o.Overlay.Click,children:[(0,U.jsx)(D,{area:`left`,children:(0,U.jsx)(y,{area:`bottom`,"data-testid":`topology-overlay-left-bottom`,children:(0,U.jsx)(w,{onAction:e,showTopologyOrientation:!0,onExportTopology:r,isExportingTopology:i})})}),!t&&!n&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(D,{area:`center`,children:[!a.m&&(0,U.jsx)(Z,{area:`top`,center:!0,style:{transform:`translateX(calc(-50% + 4px))`},"data-testid":`topology-overlay-counts`,children:(0,U.jsx)(J,{})}),(0,U.jsx)(y,{area:`bottom`,style:{position:`absolute`,bottom:16,left:`50%`,transform:`translateX(-50%)`},"data-testid":`topology-overlay-bottom`,children:(0,U.jsx)(X,{onAction:e})})]}),(0,U.jsxs)(D,{area:`right`,children:[p&&(0,U.jsx)(m,{$thickness:`skinny`,style:{overflow:`auto`,maxHeight:`100%`},"data-testid":`topology-overlay-connection-menu`,children:(0,U.jsx)(W,{nodes:f,links:d})}),h&&(0,U.jsx)(Z,{area:`top`,"data-testid":`topology-overlay-remove-connections`,children:(0,U.jsx)(O,{links:d})})]})]})]}),(0,U.jsx)(x,{})]})}),X=(0,H.memo)(({onAction:e})=>{let t=M(e=>e.permissions.Overlay),{t:n}=u();return(0,U.jsxs)(m,{gap:`s`,alignCenter:!0,style:{padding:8,borderRadius:10},children:[(0,U.jsx)(v,{onAction:e}),(0,U.jsx)(T,{onAction:e}),(0,U.jsx)(j,{}),(0,U.jsx)(k,{onAction:e}),(0,U.jsx)(h,{onAction:e}),t.ButtonDevices&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(j,{}),(0,U.jsx)(g,{panel:`panel-devices`,onAction:e,buttonText:n(`overlay.common.addDevices`)})]})]})}),Z=P(y)`
  background-color: ${({theme:e})=>e.designer.motif[`desktop-color-neutral-00`]};
  padding: ${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  margin: -${({theme:e})=>e.designer[`desktop-spacing-base-02`]};
  border-radius: ${({theme:e})=>e.designer[`desktop-radius-small`]};
`;export{Y as t};
//# sourceMappingURL=topology-DnZKUszs.js.map