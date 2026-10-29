import{j as e,e as r,R as $}from"./react-DGhZhtub.js";import{cv as _,bD as s,cw as o,ce as U,a_ as p,bQ as B,bv as C,bl as g,bE as d,a$ as M,cZ as P,cP as S,io as I}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{x as A}from"./index-BEhlHXuB.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="c5649491-258f-4966-a13a-0c1567a5959e",t._sentryDebugIdIdentifier="sentry-dbid-c5649491-258f-4966-a13a-0c1567a5959e")}catch{}})();var O={accountUrl:"https://account.ui.com"};const E=r.a`
  align-items: center;
  color: ${({theme:t})=>t.ublue06} !important;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  justify-content: center;
  opacity: ${({$isVisible:t})=>t?1:0};
  position: absolute;
  top: 0;
  transition: opacity 0.2s linear;
  width: 100%;
`,R=r.span`
  opacity: ${({$isVisible:t})=>t?.8:0};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  transition: opacity 0.2s linear;
  background: ${({theme:t})=>t.neutral00};
  border-radius: 100%;
`,T=({isVisible:t})=>e.jsxs(e.Fragment,{children:[e.jsx(R,{$isVisible:t}),e.jsx(E,{$isVisible:t,href:`${O.accountUrl}/profile`,target:"_blank",rel:"noopener noreferrer",children:"Manage"})]});var Y={accountUrl:"https://account.ui.com"};const F=r(d)`
  cursor: pointer;
  &:hover {
    color: ${t=>t.theme.ublue07};
  }
`,L={margin:"auto"},q=({userId:t,userSlug:n,username:a,avatarDetails:i,registeredAt:u,lastActiveAt:x,isHoverManageEnabled:f,score:y,posts:m,replies:j,solutions:b,isEmployee:w})=>{const[k,h]=$.useState(!1),{user:{id:v}}=U(),l=f&&v===t;return e.jsxs(s,{d:"v",alignItems:"center",gap:"desktop-spacing-small",children:[e.jsxs(p,{to:l?`${Y.accountUrl}/profile`:g({id:t,slug:n}),target:l?"_blank":void 0,style:{position:"relative"},children:[e.jsx(B,{size:"xxxlarge",onHoverStart:()=>h(!0),onHoverEnd:()=>h(!1),username:a,isEmployee:w,avatarDetails:{image:i==null?void 0:i.image,acronym:i==null?void 0:i.content,acronymBackground:C(a)}}),l&&e.jsx(T,{isVisible:k})]}),e.jsxs(s,{d:"v",style:{textAlign:"center"},children:[e.jsx(p,{to:g({id:t,slug:n}),children:e.jsx(F,{variant:"heading-large",children:a})}),e.jsxs(d,{variant:"caption",children:["Member since: ",M(u,"MMMM DD, YYYY")]}),e.jsx(P,{label:"Last active:",timeAt:x,wrapperStyles:L}),e.jsxs(d,{variant:"caption",children:[S(y)," Points"]})]}),e.jsx(z,{children:e.jsx(I,{posts:m,replies:j,solutions:b})})]})},z=r.div`
  display: flex;
  width: 100%;
  padding: 8px;
`,H=r.div`
  background-color: ${({theme:t})=>t.neutral03};
  border-radius: 50%;
`,c=r.div`
  background-color: ${({theme:t})=>t.neutral03};
  border-radius: ${A["desktop-radius-base"]};
`,D=()=>e.jsx(_,{children:e.jsxs(s,{d:"v",gap:"desktop-spacing-small",alignItems:"center",children:[e.jsx(H,{style:{width:64,height:64}}),e.jsx(c,{style:{height:24,width:"40%"}}),e.jsx(c,{style:{height:24,width:"70%"}}),e.jsx(c,{style:{height:24,width:"30%"}}),e.jsxs(s,{gap:"desktop-spacing-small",style:{padding:8,width:"100%"},children:[e.jsxs(s,{d:"v",gap:"desktop-spacing-small",style:{flex:1},children:[e.jsx(o.Block,{height:28,width:"100%"}),e.jsx(o.Block,{height:16,width:"100%"})]}),e.jsxs(s,{d:"v",gap:"desktop-spacing-small",style:{flex:1},children:[e.jsx(o.Block,{height:28,width:"100%"}),e.jsx(o.Block,{height:16,width:"100%"})]}),e.jsxs(s,{d:"v",gap:"desktop-spacing-small",style:{flex:1},children:[e.jsx(o.Block,{height:28,width:"100%"}),e.jsx(o.Block,{height:16,width:"100%"})]})]})]})});export{q as P,D as a};
//# sourceMappingURL=ProfileCard-2Oz44QNw.js.map
