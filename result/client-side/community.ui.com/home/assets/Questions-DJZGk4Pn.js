import{e as i,F as b,r as c,q as h,j as e}from"./react-DGhZhtub.js";import{T as y,d4 as j,H as v,P as w,bx as F,by as $,d5 as P,d6 as T}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{h as s,W as A,ax as I,by as r,x as m}from"./index-BEhlHXuB.js";import{Q as L,c as p,B as S}from"./getTag-wTzlq6Q9.js";import{F as C}from"./FeedList-B2ZgXzO0.js";import"./lodash-cGhQZeSM.js";import"./FloatingBackButton-C4p_hegg.js";import"./utils-BOEDQ4Id.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new t.Error().stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="da67b7ed-8462-4abe-bae5-6b1bb684938b",t._sentryDebugIdIdentifier="sentry-dbid-da67b7ed-8462-4abe-bae5-6b1bb684938b")}catch{}})();const Q=[{value:"All",label:"All"},{value:r.Answered,label:"Answered"},{value:r.Unanswered,label:"Unanswered"},{value:r.Solved,label:"Solved"},{value:r.Unsolved,label:"Unsolved"}],J=()=>{const{id:t}=b(),{ALL_TAGS:n,hasLoadedTags:d}=c.useContext(y),f=h(),[o,x]=c.useState(),u=A({query:"(max-width: 1124px)"});t||f("/");const l=n.find(a=>a.id===t);if(!d)return e.jsx(L,{});if(!l)return e.jsx(j,{});const g=`${p(l)} Posts`;return e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsx("title",{children:`${g} | ${I}`})}),e.jsx(w,{footerVariant:"hidden",children:e.jsxs(D,{children:[e.jsxs(E,{children:[e.jsxs(_,{children:[e.jsxs(k,{children:[e.jsx(S,{}),e.jsxs(B,{children:['"',e.jsx("span",{children:p(l)}),'" posts']})]}),e.jsxs(U,{children:[e.jsx(q,{children:"Type"}),e.jsx(F,{defaultSelectedKey:"All",selectedKey:o,onSelectionChange:a=>{if(a==="All")return x(void 0);x(a)},children:Q.map(a=>e.jsx($.Item,{id:a.value,label:a.label},a.value))})]})]}),e.jsx(C,{tag:l,questionFilter:o,isFilterPanelEnabled:!1})]}),!u&&e.jsx(H,{children:e.jsx(P,{variant:T.Banners})})]})})]})},D=i.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`,E=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media (max-width: ${s.small}) {
    gap: 8px;
  }
`,_=i.div`
  max-width: 894px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme:t})=>t.bgDepth1};
  padding: 16px;
  border-radius: 8px;

  @media (max-width: ${s.small}) {
    align-items: flex-start;
    border-radius: 0px;
    flex-direction: column;
    gap: 8px;
    justify-content: flex-start;
  }
`,k=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  @media (max-width: ${s.small}) {
    gap: 24px;
    flex-direction: column;

    div {
      justify-content: flex-start;
      width: 100%;
    }
  }
`,U=i.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${s.mobileXLarge}) {
    width: 100%;
  }
`,q=i.label`
  font: ${m["desktop-caption"]};
  color: ${({theme:t})=>t.text3};

  @media (max-width: ${s.small}) {
    text-align: right;
  }

  @media (max-width: ${s.mobileXLarge}) {
    display: none;
  }
`,B=i.div`
  font: ${m["desktop-body"]};
  font-weight: 700;
`,H=i.div`
  min-width: 280px;
  width: 280px;
  position: sticky;
  top: 72px;
  margin-bottom: 16px;
`;export{_ as NavContainer,J as default};
//# sourceMappingURL=Questions-DJZGk4Pn.js.map
