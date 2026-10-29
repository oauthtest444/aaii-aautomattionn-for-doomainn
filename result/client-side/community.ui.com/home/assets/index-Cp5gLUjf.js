import{x as i,j as r,r as s,e as n}from"./react-DGhZhtub.js";import{H as o,P as c,iq as f}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{ax as m}from"./index-BEhlHXuB.js";import"./lodash-cGhQZeSM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e3fc0052-338f-4b4e-af68-d36d01491d2a",e._sentryDebugIdIdentifier="sentry-dbid-e3fc0052-338f-4b4e-af68-d36d01491d2a")}catch{}})();const l=`Social Feedback | ${m}`,p=(e,t)=>{const[a,d]=s.useState(!1);return s.useEffect(()=>{f(e,t).then(()=>{d(!0)})},[e,t]),[a]},j=()=>{const e=i(),t=(e==null?void 0:e.search)||"";return p("airtable-embed-snippet","https://static.airtable.com/js/embed/embed_snippet_v1.js"),r.jsxs(r.Fragment,{children:[r.jsx(o,{children:r.jsx("title",{children:`${l}`})}),r.jsx(c,{children:r.jsx(b,{children:r.jsx("iframe",{title:"feedback-form",className:"airtable-embed airtable-dynamic-height",src:`https://airtable.com/embed/shruNmrplTbp0gBOl${t}`,frameBorder:"0",width:"100%",height:"2020"})})})]})},b=n.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto -6px; // Magic number to remove spacing between end of form and footer
`;export{j as default};
//# sourceMappingURL=index-Cp5gLUjf.js.map
