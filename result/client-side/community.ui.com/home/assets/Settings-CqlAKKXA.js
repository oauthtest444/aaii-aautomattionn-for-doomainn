import{j as e,e as r}from"./react-DGhZhtub.js";import{ce as m,P as x,H as u,bD as i,er as g,bE as p,ag as f,bG as b,ip as h}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{cr as j,ax as y,h as w,a0 as v,ay as D}from"./index-BEhlHXuB.js";import"./lodash-cGhQZeSM.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new a.Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="082a95ca-ec9b-4b30-b0aa-fd6b4a69baf1",a._sentryDebugIdIdentifier="sentry-dbid-082a95ca-ec9b-4b30-b0aa-fd6b4a69baf1")}catch{}})();var I={accountUrl:"https://account.ui.com"};const k=r(i)`
  ${v} {
    flex-direction: column;
  }
`,_=r(i)`
  min-width: 270px;
  max-width: 270px;
  ${D} {
    max-width: none;
  }
`,L=()=>{var t,n,d,l,o,c;const{user:a}=m(),{data:s}=j({variables:{id:a.id}});return e.jsxs(x,{children:[e.jsx(u,{children:e.jsx("title",{children:`Settings | ${y}`})}),e.jsx(S,{children:e.jsxs(k,{gap:"desktop-spacing-medium",children:[e.jsxs(_,{d:"v",gap:"desktop-spacing-medium",children:[e.jsxs(i,{gap:"desktop-spacing-medium",alignItems:"center",children:[e.jsx(g,{alt:"User Avatar",image:a.data.avatar.image,size:"xlarge-2"}),e.jsxs(i,{d:"v",gap:"desktop-spacing-xxsmall",style:{overflow:"hidden"},children:[e.jsx(p,{variant:"heading-large",style:{overflow:"hidden",textOverflow:"ellipsis"},children:((n=(t=s==null?void 0:s.user)==null?void 0:t.extraData)==null?void 0:n.firstName)??a.data.username}),e.jsx(p,{variant:"caption",children:(l=(d=s==null?void 0:s.user)==null?void 0:d.extraData)==null?void 0:l.email})]})]}),e.jsx(f,{}),e.jsx("a",{href:`${I.accountUrl}/profile`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(b,{width:"full",children:"Manage Your UI Account"})})]}),e.jsx(h,{userId:a.id,userEmail:((c=(o=s==null?void 0:s.user)==null?void 0:o.extraData)==null?void 0:c.email)??""})]})})]})},S=r.div`
  width: 100%;
  max-width: 1228px;
  border-radius: 8px;
  background: ${({theme:a})=>a.bgDepth1};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: ${w.small}) {
    border-radius: 0px;
  }
`;export{L as default};
//# sourceMappingURL=Settings-CqlAKKXA.js.map
