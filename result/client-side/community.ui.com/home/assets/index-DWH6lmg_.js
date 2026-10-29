import{x as n,j as r,r as s,e as i}from"./react-DGhZhtub.js";import{H as o,P as c,iq as f}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{ax as m}from"./index-BEhlHXuB.js";import"./lodash-cGhQZeSM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="547d78b8-c4de-4a43-945f-7f6187dd7ada",e._sentryDebugIdIdentifier="sentry-dbid-547d78b8-c4de-4a43-945f-7f6187dd7ada")}catch{}})();const l=`Feedback | ${m}`,b=(e,t)=>{const[a,d]=s.useState(!1);return s.useEffect(()=>{f(e,t).then(()=>{d(!0)})},[e,t]),[a]},j=()=>{const e=n(),t=(e==null?void 0:e.search)||"";return b("airtable-embed-snippet","https://static.airtable.com/js/embed/embed_snippet_v1.js"),r.jsxs(r.Fragment,{children:[r.jsx(o,{children:r.jsx("title",{children:`${l}`})}),r.jsx(c,{children:r.jsx(p,{children:r.jsx("iframe",{title:"feedback-form",className:"airtable-embed airtable-dynamic-height",src:`https://airtable.com/embed/shrEfYWvGJnPjHlF5${t}`,frameBorder:"0",width:"100%",height:"2020"})})})]})},p=i.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin: 0 auto -6px; // Magic number to remove spacing between end of form and footer
`;export{j as default};
//# sourceMappingURL=index-DWH6lmg_.js.map
