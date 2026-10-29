import{e as s,F as c,q as m,r as f,j as e}from"./react-DGhZhtub.js";import{T as g,d4 as u,H as h,P as b,d5 as j,d6 as y}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{h as n,W as w,ax as v,x as P}from"./index-BEhlHXuB.js";import{R as T,c as d,B as F}from"./getTag-wTzlq6Q9.js";import{F as $}from"./FeedList-B2ZgXzO0.js";import"./lodash-cGhQZeSM.js";import"./FloatingBackButton-C4p_hegg.js";import"./utils-BOEDQ4Id.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="7557b226-e378-4ddb-8868-dc6de8f986b4",t._sentryDebugIdIdentifier="sentry-dbid-7557b226-e378-4ddb-8868-dc6de8f986b4")}catch{}})();const W=()=>{const{id:t}=c(),a=m(),{ALL_TAGS:r,hasLoadedTags:o}=f.useContext(g),l=w({query:"(max-width: 1124px)"});t||a("/");const i=r.find(p=>p.id===t);if(!o)return e.jsx(T,{});if(!i)return e.jsx(u,{});const x=`${d(i)} Releases`;return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsx("title",{children:`${x} | ${v}`})}),e.jsx(b,{children:e.jsxs(I,{children:[e.jsxs(C,{children:[e.jsx(E,{children:e.jsxs(R,{children:[e.jsx(F,{}),e.jsxs(_,{children:['"',e.jsx("span",{children:d(i)}),'" releases']})]})}),e.jsx($,{tag:i,isRelease:!0,isFilterPanelEnabled:!1})]}),!l&&e.jsx(k,{children:e.jsx(j,{variant:y.Banners})})]})})]})},I=s.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`,C=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;

  @media (max-width: ${n.small}) {
    gap: 8px;
  }
`,E=s.div`
  max-width: 894px;
  width: 100%;
  background-color: ${({theme:t})=>t.neutral00};
  padding: 16px 0;
  border-radius: 8px;

  @media (max-width: ${n.small}) {
    border-radius: 0px;
  }
`,R=s.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 16px;

  @media (max-width: ${n.small}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;
  }
`,_=s.div`
  font: ${P["desktop-body"]};

  span {
    font-weight: 700;
  }
`,k=s.div`
  min-width: 280px;
  width: 280px;
  position: sticky;
  top: 72px;
  margin-bottom: 16px;
`;export{E as NavContainer,W as default};
//# sourceMappingURL=Releases-B0t8N4hH.js.map
