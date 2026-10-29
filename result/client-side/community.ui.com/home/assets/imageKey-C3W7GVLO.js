import{r as m,R as o,j as e,e as c}from"./react-DGhZhtub.js";import{hQ as pe,ah as he,bE as ge,ce as V,hR as z,eJ as q,hS as fe,eK as be,e$ as B,bu as ye,hT as xe,bG as w,bD as U,hy as Ae,bp as we,ea as Te,hD as Ee,d_ as Se,ab as je,b5 as ve,dP as Ue,bo as Ce,bN as ke}from"./AppWrapper-Dv2SOsTr.js";import{bU as l,x as C,a8 as G,aC as g,aD as Re,bW as N,bT as A,aY as De}from"./index-BEhlHXuB.js";import"./sentry-DYy3Ltx-.js";import{A as W,T as Pe}from"./AssetUploader-Cj3FLjO9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="e2352f2e-2933-4b5d-94ea-12e265e1da64",t._sentryDebugIdIdentifier="sentry-dbid-e2352f2e-2933-4b5d-94ea-12e265e1da64")}catch{}})();const v=t=>{const{SymbolStart:s,label:r,SymbolEnd:a,caption:u,variant:n,...i}=t;return m.createElement(pe,{variant:n,...i},m.createElement(he,{label:r,symbol:s&&m.createElement(s,{size:20}),data:m.createElement(m.Fragment,null,a&&m.createElement(a,{size:20}),u&&m.createElement(ge,{variant:"caption",slot:"description"},u))}))};v.displayName="ActionMenuItem_Default";const K="UI-Team",Ie=({label:t,isDisabled:s,publishAs:r,onPublishAsChange:a,onPress:u})=>{const n=o.useRef(null),{user:{data:i}}=V(),d=r===l.UiTeam,b=d?K:i.username,p=T=>e.jsx(ye,{username:i.username,avatarDetails:xe(i),size:T});return e.jsxs(Le,{ref:n,children:[e.jsxs(_e,{isDisabled:s,onPress:u,"aria-label":`${t} as ${b}`,children:[d?e.jsx(z,{size:"small"}):p("small"),t]}),e.jsxs(q.Root,{children:[e.jsx(q.Trigger,{children:e.jsx(Oe,{width:"square",isDisabled:s,"aria-label":`Change who to publish as, currently ${b}`,children:e.jsx(fe,{size:16})})}),e.jsxs(be,{triggerRef:n,placement:"bottom end","aria-label":"Publish as",children:[e.jsx(v,{id:l.UiTeam,onAction:()=>a(l.UiTeam),label:e.jsxs(F,{gap:"desktop-spacing-small",alignItems:"center",children:[e.jsx(z,{size:"medium"}),K]}),SymbolEnd:d?B:void 0}),e.jsx(v,{id:l.Myself,onAction:()=>a(l.Myself),label:e.jsxs(F,{gap:"desktop-spacing-small",alignItems:"center",children:[p("medium"),i.username]}),SymbolEnd:d?void 0:B})]})]})]})},Le=c.div`
  display: inline-flex;
  align-items: center;
`,_e=c(w)`
  &&& {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`,Oe=c(w)`
  &&& {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    // A hairline rather than a full border — just enough to separate the two
    // halves. currentColor keeps it in step with the enabled/disabled text.
    border-left: 1px solid color-mix(in srgb, currentColor 35%, transparent);
  }
`,F=c(U)`
  // The avatar is taller than the text, so the row would otherwise grow the
  // menu item beyond its fixed height.
  line-height: 1;
`,Me=c(U)`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border-radius: ${C["desktop-radius-medium"]};
`,$e=Ae(t=>e.jsx(Me,{alignItems:"center",justifyContent:"center",gap:"desktop-spacing-medium",...t})),ze=c(Ce)`
  font-size: ${C["desktop-font-size-medium"]};
`,qe=c(ke)`
  border: 1px solid transparent;

  && [data-radix-scroll-area-content] {
    min-width: unset !important;
  }
`,Be=c(U)`
  position: relative;
  border-radius: ${C["desktop-radius-medium"]};
`,Ge=we([{type:G.Text,content:""}]),He=({type:t,replyId:s,mode:r,authorId:a,reportCount:u,content:n,saveButtonLabel:i="Save",isNewReply:d,noAutoFocus:b=!1,hasUnsavedChanges:p,hideCancelButton:T,mentionOptions:k=[],editorWrapperStyle:H,editorStyle:Y,scrollAreaStyle:J,fillEditorHeight:R,onChange:X,onAction:Z,onCancel:ee})=>{const{hasPermission:f}=o.useContext(Te),{user:{isGuest:te,isEmployee:D}}=V(),se=D?t==="question"?!f(g.AnswerMarkAsTeamOptional):!f(g.CommentMarkAsTeamOptional):!1,P=f(t==="question"?g.QuestionMarkAsOfficial:g.CommentMarkAsTeamOptional),ae=d&&f(t==="question"?g.QuestionLock:g.ReleaseLock),ne=P?l.UiTeam:l.Myself,[ie,oe]=o.useState(!1),[I,re]=o.useState(se?l.UiTeam:ne),[le,E]=o.useState(!1),[L,ce]=o.useState(!1),de=Re("tabletLarge"),S=t==="question"?N.Answer:N.Comment,j=t==="question"?A.Answer:A.Comment,y=o.useRef(new W(s,S,j));if(o.useEffect(()=>{s&&(y.current=new W(s,S,j))},[s,S,j]),o.useEffect(()=>{const h=x=>{p&&(x.preventDefault(),x.returnValue=!0)};return window.addEventListener("beforeunload",h),()=>{window.removeEventListener("beforeunload",h)}},[p]),!ie&&u>=De)return e.jsx("div",{className:"cursor-pointer text-12 text-grey py-10",onClick:()=>oe(h=>!h),children:"This reply is hidden as it reached the reporting threshold. Click to view it."});const _={entityId:s,entityType:t==="question"?A.Answer:A.Comment};if(r==="edit"){const h=P&&d,x=ae?e.jsx(je,{label:de?"Lock":"Lock after Reply",inputPlacement:"end",isSelected:L,onChange:ce}):null,me=T?null:e.jsx(w,{variant:"neutral",onPress:()=>{ee()},children:"Cancel"}),O=!p||le||Ee(n)<2,M=async()=>{if(E(!0),y.current.isInProgress()){ve("Upload in progress",["Please wait a moment and try again"]),E(!1);return}try{await Z(Ue(n),I,L)}finally{E(!1)}},ue=h?e.jsx(Ie,{label:i,isDisabled:O,publishAs:I,onPublishAsChange:re,onPress:M}):e.jsx(w,{isDisabled:O,onPress:M,children:i}),$=e.jsx(Pe,{editorState:n,onChange:X,placeholderFirst:"Write your comment ...",placeholderRest:"Keep writing here ...",mentionOptions:k,noAutoFocus:b,userAccessType:Se({isEmployee:D}),onImagesUpload:y.current.handleImagesUpload,onAttachmentsUpload:y.current.handleAttachmentsUpload,attachmentDownloadOptions:_,bottomActions:e.jsxs(e.Fragment,{children:[x,me,ue]}),fillHeight:R,style:Y},`${s}-${k.length}`);return e.jsxs(Be,{d:"v",gap:"desktop-spacing-medium",style:{flex:1,...H},children:[te&&e.jsx($e,{}),R?$:e.jsx(qe,{style:{width:"100%",...J},children:$})]})}return e.jsx(ze,{editorState:n,authorId:a,attachmentDownloadOptions:_})};var Q={imageUrl:"https://img.community.ui.com"};const Ne=t=>t.startsWith(`${Q.imageUrl}/`)?t.slice(Q.imageUrl.length+1):t,Ye=t=>t.map(s=>s.type===G.Images&&s.grid?{...s,grid:s.grid.map(r=>({images:r.images.map(a=>({...a,src:Ne(a.src)}))}))}:s);export{v as A,Ge as E,He as R,Ye as w};
//# sourceMappingURL=imageKey-C3W7GVLO.js.map
