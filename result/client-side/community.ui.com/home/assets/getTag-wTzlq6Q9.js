import{R as i,b4 as m,y as x}from"./index-BEhlHXuB.js";import"./sentry-DYy3Ltx-.js";import{j as t,e as o,r as u,q as j}from"./react-DGhZhtub.js";import{P as a,cv as c,bD as n,cw as f,dC as y,dD as b}from"./AppWrapper-Dv2SOsTr.js";import{F as k}from"./FloatingBackButton-C4p_hegg.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="e2e3859d-554f-4089-8d9e-c6614f02c09e",e._sentryDebugIdIdentifier="sentry-dbid-e2e3859d-554f-4089-8d9e-c6614f02c09e")}catch{}})();const F=e=>e.title+(e.type===i.Alpha?" Alpha":e.type===i.Beta?" Early Access":""),d=e=>{const{countNum:s,itemHeight:r}=e;return t.jsx("div",{style:{marginTop:"40px"},children:Array.from({length:s}).map((P,g)=>t.jsx(T,{$itemHeight:r},g))})},l=()=>t.jsx(w,{children:t.jsx(f.Block,{width:"100%",height:1100})}),$=()=>t.jsx(a,{children:t.jsx(c,{children:t.jsxs(n,{d:"h",justifyContent:"center",alignItems:"flex-start",gap:"desktop-spacing-base-08",style:{marginRight:"10px",marginLeft:"10px"},children:[t.jsxs(n,{d:"v",gap:"desktop-spacing-base-06",style:{width:"100%"},children:[t.jsx(p,{}),t.jsx(h,{}),t.jsx(d,{countNum:10,itemHeight:80})]}),t.jsx(l,{})]})})}),D=()=>t.jsx(a,{children:t.jsx(c,{children:t.jsxs(n,{d:"h",justifyContent:"center",alignItems:"flex-start",gap:"desktop-spacing-base-08",style:{marginRight:"10px",marginLeft:"10px"},children:[t.jsxs(n,{d:"v",gap:"desktop-spacing-base-06",style:{width:"100%"},children:[t.jsx(p,{}),t.jsx(h,{}),t.jsx(d,{countNum:10,itemHeight:80})]}),t.jsx(l,{})]})})}),L=()=>t.jsx(a,{children:t.jsx(c,{children:t.jsxs(n,{d:"h",justifyContent:"center",alignItems:"flex-start",gap:"desktop-spacing-base-08",style:{marginRight:"10px",marginLeft:"10px"},children:[t.jsxs(n,{d:"v",gap:"desktop-spacing-base-06",style:{width:"100%"},children:[t.jsx(p,{}),t.jsx(h,{}),t.jsx(v,{}),t.jsx(d,{countNum:10,itemHeight:25})]}),t.jsx(l,{})]})})}),T=o.div`
  height: ${({$itemHeight:e})=>e}px;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
  background-color: ${({theme:e})=>e.neutral03};
`,w=o.div`
  min-width: 280px;
  width: 280px;
  position: sticky;
  top: 72px;
  margin-bottom: 16px;

  ${m} {
    display: none;
  }
`,p=o.div`
  height: 25px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: ${({theme:e})=>e.neutral03};
`,h=o.div`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  margin-top: 50px;
  background-color: ${({theme:e})=>e.neutral03};
`,v=o.div`
  height: 25px;
  width: 100%;
  border-radius: 5px;
  margin-top: 40px;
  background-color: ${({theme:e})=>e.neutral03};
`,E=()=>{const e=u.useRef(null),s=j(),r=u.useMemo(()=>({url:"/",label:"Back to Main"}),[]);return t.jsxs(t.Fragment,{children:[t.jsx(k,{backButtonRef:e,forceUrl:r.url}),t.jsx(y,{ref:e,variant:"secondary",rounded:!0,size:"small",onClick:()=>s(r.url),children:t.jsx(b,{variant:"twoTone",isActive:!0})})]})},H=e=>(e==null?void 0:e.type)===x.Public||(e==null?void 0:e.type)===x.Legacy?[e.id]:[],M=e=>(e==null?void 0:e.type)===i.Beta?[e.id]:[],N=e=>(e==null?void 0:e.type)===i.Alpha||(e==null?void 0:e.type)===i.Other?[e.id]:[];export{E as B,$ as Q,D as R,L as T,M as a,H as b,F as c,N as g};
//# sourceMappingURL=getTag-wTzlq6Q9.js.map
