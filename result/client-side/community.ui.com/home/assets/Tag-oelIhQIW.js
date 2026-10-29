import{r as g,j as e,e as r,q as I,F as z}from"./react-DGhZhtub.js";import{cn as Z,co as G,cP as L,as as H,cQ as X,cR as R,cS as w,cT as v,cU as x,cV as V,bD as q,cW as D,cX as B,cY as E,cZ as Y,c_ as M,c$ as J,d0 as K,d1 as ee,d2 as U,d3 as te,cd as se,T as ie,d4 as ae,H as ne,P as re,d5 as oe,d6 as le}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{W as A,h as u,x as p,aZ as $,Q as T,bw as de,bx as ce,ax as pe}from"./index-BEhlHXuB.js";import{g as m,a as j,b,c as _,B as xe,T as he}from"./getTag-wTzlq6Q9.js";import"./lodash-cGhQZeSM.js";import"./FloatingBackButton-C4p_hegg.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="b67b0066-c01e-45eb-833a-15dfde4cd6f8",t._sentryDebugIdIdentifier="sentry-dbid-b67b0066-c01e-45eb-833a-15dfde4cd6f8")}catch{}})();const ue=Z(t=>g.createElement("svg",G({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},t),t.baseclassname!==void 0&&g.createElement("path",{d:"M7.5 16a.501.501 0 0 0 .364-.157l4.849-5.142A.994.994 0 0 0 13 10a.994.994 0 0 0-.287-.701L7.864 4.157a.5.5 0 0 0-.728.686L12 10l-.01.01-4.854 5.146A.5.5 0 0 0 7.5 16Z",fill:"currentColor",className:t.baseclassname}),t.fillclassname!==void 0&&g.createElement("path",{d:"M7.65 16c.2 0 .399-.079.547-.236l4.597-4.89a1.252 1.252 0 0 0 0-1.748l-4.597-4.89a.75.75 0 0 0-1.093 1.027L11.556 10l-4.452 4.736A.75.75 0 0 0 7.65 16Z",fill:"currentColor",className:t.fillclassname}))),h=({title:t,totalItems:o,withSubtitle:s,handleNavigate:i})=>{const n=A({query:`(max-width: ${u.small})`});return e.jsxs(ge,{$smallPadding:n,children:[e.jsx(fe,{children:t}),o&&!s&&e.jsxs(je,{children:[L(o)," Posts"]}),s?e.jsx(ye,{children:"last month"}):e.jsx(be,{}),i&&e.jsx(me,{variant:"secondary",rounded:!0,size:"small",Icon:e.jsx(ue,{size:"small"}),iconPosition:"right",onClick:i,children:"View All"})]})},ge=r.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 0;

  @media (max-width: ${u.small}) {
    padding-left: 0;
    gap: 8px;
  }
`,fe=r.span`
  width: max-content;
  font: ${p["desktop-typography-heading-large"]};
`,me=r(H)`
  font: ${p["desktop-typography-heading-small"]};
  padding: 4px 12px;
  width: fit-content;
  max-height: 26px;

  svg {
    height: 16px;
    width: 16px;
  }
`,je=r.span`
  height: 24px;
  padding: 12px;
  border: 1px solid ${({theme:t})=>t.neutral03};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${p["desktop-typography-heading-small"]};
  color: ${({theme:t})=>t.text3};
`,be=r.div`
  height: 1px;
  flex-grow: 1;
  background-color: ${({theme:t})=>t.neutral02};
`,ye=r.span`
  font: ${p["desktop-caption"]};
  color: ${({theme:t})=>t.text3};
  padding-top: 2px;
  margin-left: -8px;

  @media (max-width: ${u.small}) {
    margin-left: 0;
  }
`,y=r(X)`
  background: ${({theme:t})=>t.neutral00};
  max-width: 100%;
  padding: 48px 0;
  border-radius: 0 0 8px 8px;

  svg path {
    fill: ${({theme:t})=>t.neutral08};
  }
`,we=({tag:t,isSmallScreen:o})=>{const{data:s,loading:i}=$({variables:{tags:b(t),betas:j(t),alphas:m(t),limit:5,sortBy:T.Latest,featuredOnly:!0},fetchPolicy:"cache-first"}),n=s==null?void 0:s.questions.items;return i?e.jsxs(c,{children:[e.jsx(h,{title:"Featured posts",totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(N,{children:e.jsx(R,{smallPadding:!0})})]}):!(n!=null&&n.length)&&!i?e.jsx(y,{title:"No Results Found",description:"No posts available yet.",height:196}):e.jsxs(c,{children:[e.jsx(h,{title:"Featured posts",totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(N,{children:n==null?void 0:n.map((a,l)=>e.jsx("div",{children:o?e.jsx(w,{item:a,isTagPage:!0}):e.jsx(v,{item:a,isTagPage:!0})},`${a.id}-${l}`))})]})},N=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,O=({smallPadding:t=!1})=>e.jsxs(e.Fragment,{children:[e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t}),e.jsx(x,{smallPadding:t})]}),ve=({tag:t,isSmallScreen:o})=>{const s=I(),{data:i,loading:n}=$({variables:{tags:b(t),betas:j(t),alphas:m(t),limit:10,sortBy:T.Latest},fetchPolicy:"cache-and-network"}),a=()=>{s(`/tags/${t.id}/posts`)},l=i==null?void 0:i.questions.items;return n?e.jsxs(c,{children:[e.jsx(h,{title:"Recent posts",totalItems:i==null?void 0:i.questions.totalCount,handleNavigate:a}),e.jsx(S,{children:e.jsx(O,{smallPadding:!0})})]}):!(l!=null&&l.length)&&!n?e.jsx(y,{title:"No Results Found",description:"No posts available yet.",height:196}):e.jsxs(c,{children:[e.jsx(h,{title:"Recent posts",totalItems:i==null?void 0:i.questions.totalCount,handleNavigate:a}),e.jsx(S,{children:l==null?void 0:l.map((d,f)=>e.jsx($e,{children:o?e.jsx(w,{item:d,isTagPage:!0}):e.jsx(v,{item:d,isTagPage:!0})},`${d.id}-${f}`))})]})},$e=r.div`
  width: 100%;
`,S=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Te=({item:t})=>{const{title:o,slug:s,id:i,lastActivityAt:n,userStatus:a,version:l,createdAt:d}=t,f=!!(a!=null&&a.lastViewedAt)&&Date.parse(n)<=Date.parse(a==null?void 0:a.lastViewedAt),k=t.stats.comments,P=t.hasUiEngagement;return e.jsx(V,{to:`/releases/${s}/${i}`,children:e.jsxs(ke,{children:[e.jsxs(q,{gap:"desktop-spacing-xsmall",children:[e.jsx(Pe,{$read:f,children:D(o,l)}),P&&e.jsx(B,{})]}),e.jsxs(Ie,{children:[e.jsxs(Re,{children:[e.jsx(E,{xs:!0,user:t.author,noTitle:!0,isOfficial:!0}),e.jsx(Ae,{children:"UI Official"})]}),e.jsx(Y,{timeAt:d,isShortFormat:!0,placement:"left"}),e.jsx(M,{replies:k??0})]})]})})},ke=r.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  padding: 2px 0 2px 36px;

  &:hover {
    background-color: ${({theme:t})=>t.neutral01};
  }
`,Pe=r.span`
  font: ${p["desktop-typography-heading-medium"]};
  font-weight: 400;
  color: ${({theme:t,$read:o})=>o?t.text3:t.neutral10};
  word-break: break-word;
`,Ie=r.div`
  min-width: 242px;
  max-width: 242px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  > * {
    flex: 1;
  }
`,Re=r.div`
  width: 140px;
  display: flex;
  justify-content: flex-start;
  gap: 6px;
`,Ae=r.span`
  font: ${p["desktop-caption"]};
  color: ${({theme:t})=>t.text3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ne=({views:t})=>e.jsxs(Se,{children:[e.jsx(J,{size:"original"}),e.jsx(K,{fullNumber:t,title:`${t} views`,positionLeft:!0,children:e.jsx(Ce,{children:L(t)})})]}),Se=r.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ce=r.span`
  white-space: nowrap;
  font: ${p["desktop-typography-heading-small"]};
  color: ${({theme:t})=>t.text2};
`,We=({item:t})=>{const{title:o,id:s,slug:i,stats:n,userStatus:a,lastActivityAt:l,version:d,createdAt:f}=t,k=!!(a!=null&&a.lastViewedAt)&&Date.parse(l)<=Date.parse(a==null?void 0:a.lastViewedAt),P=t.stats.comments,Q=t.hasUiEngagement;return e.jsx(V,{to:`/releases/${i}/${s}`,children:e.jsx(Fe,{children:e.jsxs(Ve,{children:[e.jsxs(q,{gap:"desktop-spacing-xsmall",children:[e.jsx(Le,{$read:k,children:D(o,d)}),Q&&e.jsx(B,{})]}),e.jsxs(qe,{children:[e.jsxs(Me,{children:[e.jsxs(Be,{children:[e.jsx(E,{xs:!0,user:t.author,noTitle:!0,isOfficial:!0}),e.jsx(Ee,{children:"UI Official"})]}),e.jsx(Ue,{children:ee(f,!0)})]}),e.jsxs(De,{children:[e.jsx(M,{replies:P??0}),e.jsx(Ne,{views:n.views??0})]})]})]})})})},Fe=r.div`
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:t})=>t.neutral01};
  }
`,Le=r.span`
  max-width: 720px;
  font: ${p["desktop-typography-heading-medium"]};
  font-weight: 400;
  color: ${({theme:t,$read:o})=>o?t.text3:t.text1};
  word-break: break-word;
`,Ve=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,qe=r.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,De=r.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`,Be=r.div`
  width: 120px;
  display: flex;
  align-items: center;
  gap: 6px;
`,Ee=r.span`
  font: ${p["desktop-caption"]};
  color: ${({theme:t})=>t.text3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Me=r.div`
  display: flex;
  gap: 16px;
`,Ue=r.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font: ${p["desktop-typography-caption"]};
  color: ${({theme:t})=>t.text3};
`,_e=({tag:t,isSmallScreen:o})=>{const s=I(),{data:i,loading:n}=de({variables:{tags:b(t),betas:j(t),alphas:m(t),limit:10,sortBy:ce.Latest},fetchPolicy:"cache-first"}),a=()=>{s(`/tags/${t.id}/releases`)},l=i==null?void 0:i.releases.items;return n?e.jsxs(c,{children:[e.jsx(h,{title:"Recent releases",totalItems:i==null?void 0:i.releases.totalCount,handleNavigate:a}),e.jsx(C,{children:e.jsx(O,{smallPadding:!0})})]}):!(l!=null&&l.length)&&!n?e.jsx(y,{title:"No Results Found",description:"No releases available yet.",height:196}):e.jsxs(c,{children:[e.jsx(h,{title:"Recent releases",totalItems:i==null?void 0:i.releases.totalCount,handleNavigate:a}),e.jsx(C,{children:l==null?void 0:l.map(d=>o?e.jsx(We,{item:d}):e.jsx(Te,{item:d}))})]})},C=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Oe=U().subtract(1,"month"),Qe=({tag:t,isSmallScreen:o})=>{const{data:s,loading:i}=$({variables:{tags:b(t),betas:j(t),alphas:m(t),limit:10,sortBy:T.Score,after:Oe},fetchPolicy:"cache-and-network"}),n=s==null?void 0:s.questions.items;return i?e.jsxs(c,{children:[e.jsx(h,{title:"Most upvoted posts",withSubtitle:!0,totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(W,{children:e.jsx(R,{smallPadding:!0})})]}):!(n!=null&&n.length)&&!i?e.jsx(y,{title:"No Results Found",description:"No posts available yet.",height:196}):e.jsxs(c,{children:[e.jsx(h,{title:"Most upvoted posts",withSubtitle:!0,totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(W,{children:n==null?void 0:n.map((a,l)=>e.jsx("div",{children:o?e.jsx(w,{item:a,isTagPage:!0}):e.jsx(v,{item:a,isTagPage:!0,isUpvotedPage:!0})},`${a.id}-${l}`))})]})},W=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ze=U().subtract(1,"month"),Ze=({tag:t,isSmallScreen:o})=>{const{data:s,loading:i}=$({variables:{tags:b(t),betas:j(t),alphas:m(t),limit:10,sortBy:T.Views,after:ze},fetchPolicy:"cache-and-network"}),n=s==null?void 0:s.questions.items;return i?e.jsxs(c,{children:[e.jsx(h,{title:"Most viewed posts",withSubtitle:!0,totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(F,{children:e.jsx(R,{smallPadding:!0})})]}):!(n!=null&&n.length)&&!i?e.jsx(y,{title:"No Results Found",description:"No posts available yet.",height:196}):e.jsxs(c,{children:[e.jsx(h,{title:"Most viewed posts",withSubtitle:!0,totalItems:s==null?void 0:s.questions.totalCount}),e.jsx(F,{children:n==null?void 0:n.map((a,l)=>e.jsx("div",{children:o?e.jsx(w,{item:a,isTagPage:!0}):e.jsx(v,{item:a,isTagPage:!0,isViewedPage:!0})},`${a.id}-${l}`))})]})},F=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ge=[{label:"Recent posts",id:"recentPosts"},{label:"Recent releases",id:"recentReleases"},{label:"Featured posts",id:"featuredPosts"},{label:"Most viewed",id:"mostViewed"},{label:"Most upvoted",id:"mostUpvoted"}],He=({tag:t})=>{const o=A({query:`(max-width: ${u.small})`}),[s,i]=g.useState("recentPosts"),n=_(t),a=g.useMemo(()=>({recentPosts:e.jsx(ve,{tag:t,isSmallScreen:o}),recentReleases:e.jsx(_e,{tag:t,isSmallScreen:o}),featuredPosts:e.jsx(we,{tag:t,isSmallScreen:o}),mostViewed:e.jsx(Ze,{tag:t,isSmallScreen:o}),mostUpvoted:e.jsx(Qe,{tag:t,isSmallScreen:o})})[s],[s,t,o]);return e.jsxs(Xe,{children:[e.jsx(c,{children:e.jsxs(Ye,{children:[e.jsx(xe,{}),e.jsxs(Je,{children:['Displaying results for "',e.jsx("span",{children:te(n)}),'"']})]})}),e.jsxs("div",{children:[e.jsx(Ke,{children:e.jsx(se,{selectedTab:s,tabs:Ge,variant:"primary",tabsClassName:"tabs",tabClassName:"tab",selectedTabClassName:"selected-tab",onSelectTab:({id:l})=>i(l)})}),a]})]})},Xe=r.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (max-width: ${u.small}) {
    padding-bottom: 8px;
  }
`,c=r.div`
  width: 100%;
  background-color: ${({theme:t})=>t.bgDepth1};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${u.small}) {
    border-radius: 0px;
    padding: 12px 24px;
    gap: 4px;
  }
`,Ye=r.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  @media (max-width: ${u.small}) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,Je=r.div`
  font: ${p["desktop-body"]};

  span {
    font-weight: 700;
  }
`,Ke=r.div`
  display: flex;
  min-height: 50px;
  width: 100%;
  z-index: 1;
  background: ${({theme:t})=>t.bgDepth1};
  border-radius: 8px 8px 0 0;
  padding: 0 8px;

  .tabs {
    margin: 0;
    width: 100%;
    border-bottom: 1px solid ${({theme:t})=>t.neutral03};
    border-radius: 0;

    @media (max-width: ${u.tabletLarge}) {
      margin: 0 16px;
    }
  }

  .tab {
    padding: 8px 16px;

    @media (max-width: ${u.tabletLarge}) {
      padding: 8px;
    }
  }
`,dt=()=>{const{id:t}=z(),o=I(),{ALL_TAGS:s,hasLoadedTags:i}=g.useContext(ie),n=A({query:"(max-width: 1124px)"});t||o("/");const a=s.find(d=>d.id===t);if(!i)return e.jsx(he,{});if(!a)return e.jsx(ae,{});const l=_(a);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:e.jsx("title",{children:`${l} | ${pe}`})}),e.jsx(re,{children:e.jsxs(et,{children:[e.jsx(He,{tag:a}),!n&&e.jsx(tt,{children:e.jsx(oe,{variant:le.Banners})})]})})]})},et=r.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`,tt=r.div`
  min-width: 280px;
  width: 280px;
  position: sticky;
  top: 72px;
  margin-bottom: 16px;
`;export{dt as default};
//# sourceMappingURL=Tag-oelIhQIW.js.map
