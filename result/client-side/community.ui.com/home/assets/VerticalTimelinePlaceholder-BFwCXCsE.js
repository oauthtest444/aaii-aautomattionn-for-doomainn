import{j as t,R as M,e as i,m as w}from"./react-DGhZhtub.js";import{aV as F,f6 as b,ao as z,eY as E,cv as A,bD as d,cw as c}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{x as m,a0 as x}from"./index-BEhlHXuB.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="1e2fd4b6-2729-4d69-9227-80bf428a2dc3",e._sentryDebugIdIdentifier="sentry-dbid-1e2fd4b6-2729-4d69-9227-80bf428a2dc3")}catch{}})();const X=e=>t.jsxs(F,{...e,viewBox:"0 0 20 20",useFill:!1,fill:"none",children:[t.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:1.3}),t.jsx("path",{d:"M6.8 10h6.4",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round"})]}),Z=e=>t.jsxs(F,{...e,viewBox:"0 0 20 20",useFill:!1,fill:"none",children:[t.jsx("circle",{cx:"10",cy:"10",r:"7.5",stroke:"currentColor",strokeWidth:1.3}),t.jsx("path",{d:"M6.8 10h6.4M10 6.8v6.4",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round"})]}),q=200,L=240,D="cubic-bezier(0.2, 0, 0, 1)",V=140,Q=60,J=350,K=160,ee=8,j=()=>{var e;return((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches)??!1},S=new Set,P=new Set,k=new Set,I=e=>{const a=e.closest("button");return a!==null&&a===document.activeElement},te=(e,a)=>{var s;const n=document.activeElement;n&&n!==document.body||(s=p(e,a==="summary"?'[data-reply-part="expand"]':'[data-thread-line="toggle"] button'))==null||s.focus({preventScroll:!0})},ae=(e,a)=>e.closest(`[data-reply-row="${CSS.escape(a)}"]`),v=(e,a)=>[...e.querySelectorAll(a)].filter(n=>n.closest("[data-reply-row]")===e),p=(e,a)=>v(e,a).at(0),O=e=>{if(!e)return;const{left:a,top:n,width:s,height:r}=e.getBoundingClientRect(),o=document.createElement("div");Object.assign(o.style,{position:"fixed",left:`${a}px`,top:`${n}px`,width:`${s}px`,height:`${r}px`,borderRadius:"50%",border:`1px solid ${getComputedStyle(e).color}`,pointerEvents:"none",zIndex:"1"}),document.body.appendChild(o),o.animate([{transform:"scale(1)",opacity:.9},{transform:"scale(1.7)",opacity:0}],{duration:J,easing:"ease-out"}).finished.finally(()=>o.remove())},G=e=>{const a=p(e,'[data-reply-part="avatar"]'),n=p(e,'[data-reply-part="header"]');if(!a||!n||e.getAttribute("data-reply-summary")!=="avatar")return;const s=parseFloat(getComputedStyle(e).getPropertyValue("--reply-summary-avatar")),r=a.getBoundingClientRect();return{avatar:`translateX(${n.getBoundingClientRect().left+s/2-(r.left+r.width/2)}px) scale(${s/r.width})`,author:`translateX(${s+ee}px)`}},H=(e,a)=>{const n=p(e,'[data-reply-part="header"]');return[...v(e,'[data-thread-line="gutter"], [data-thread-line="toggle"]'),...v(e,'[data-reply-part="rest"], [data-reply-part="nested"]'),...n?[...n.children].slice(1):[],...a?[]:v(e,'[data-reply-part="avatar"]')]},U=(e,a)=>{let n=!1;const s=()=>{n||(n=!0,a())};Promise.allSettled(e.map(r=>r.finished)).then(s),setTimeout(s,L*5)},N=()=>{const e=b(s=>s.collapse),a=b(s=>s.startFold),n=b(s=>s.endFold);return M.useCallback((s,r)=>{var B;const o=ae(r,s),h=o&&p(o,'[data-reply-part="fold"]'),y=!!o&&!!h&&!j();if(y&&!a(s))return;if(I(r)&&k.add(s),!o||!h||!y){S.add(s),e(s);return}O(p(o,'[data-thread-line="toggle"] button'));const f=G(o),u=p(o,'[data-reply-part="avatar"]'),g=(B=p(o,'[data-reply-part="header"]'))==null?void 0:B.firstElementChild,$={duration:q,easing:D,fill:"forwards"};h.style.overflow="hidden";const _=[h.animate([{height:`${h.offsetHeight}px`},{height:`${(u==null?void 0:u.offsetHeight)??0}px`}],$),...H(o,f!==void 0).map(R=>R.animate([{opacity:1},{opacity:0}],{duration:V,easing:"ease-out",fill:"forwards"})),...f&&u?[u.animate([{transform:f.avatar}],$)]:[],...f&&g?[g.animate([{transform:f.author}],$)]:[]];U(_,()=>{if(!n(s)){k.delete(s);for(const R of _)R.cancel();h.style.overflow="";return}S.add(s),e(s)})},[e,a,n])},Se=()=>{const e=b(a=>a.uncollapse);return M.useCallback((a,n)=>{I(n)&&k.add(a),j()||(O(n),P.add(a)),e(a)},[e])},Ce=(e,a,n)=>{var u;if(k.delete(a)&&te(e,n),n==="summary"){if(!S.delete(a))return;for(const g of e.getAnimations({subtree:!0}))g.cancel();if(e.getBoundingClientRect().top<parseFloat(getComputedStyle(e).scrollMarginTop)&&e.scrollIntoView({block:"start",behavior:j()?"auto":"smooth"}),j())return;for(const g of v(e,'[data-reply-part="avatar"], [data-reply-part="summary"]'))g.animate([{opacity:0},{opacity:1}],{duration:K,easing:"ease-out"});return}if(!P.delete(a))return;const s=p(e,'[data-reply-part="fold"]');if(!s)return;const r=G(e),o=p(e,'[data-reply-part="avatar"]'),h=(u=p(e,'[data-reply-part="header"]'))==null?void 0:u.firstElementChild,y={duration:L,easing:D,fill:"backwards"};s.style.overflow="hidden";const f=[s.animate([{height:`${(o==null?void 0:o.offsetHeight)??0}px`},{height:`${s.offsetHeight}px`}],y),...H(e,r!==void 0).map(g=>g.animate([{opacity:0},{opacity:1}],{duration:V,delay:Q,easing:"ease-out",fill:"backwards"})),...r&&o?[o.animate([{transform:r.avatar},{transform:"none"}],y)]:[],...r&&h?[h.animate([{transform:r.author},{transform:"none"}],y)]:[]];U(f,()=>{s.style.overflow=""})},se=8,W=4,ne=i.button`
  position: relative;
  flex: 1;
  width: var(--reply-avatar);
  min-height: 0;
  margin-top: ${W}px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--reply-line-x);
    width: 1px;
    background: ${e=>e.theme.neutral04};
    transition: background 0.1s;
  }

  &:focus-visible::before {
    background: ${e=>e.theme.ublue06};
    box-shadow: 1px 0 0 ${e=>e.theme.ublue06};
  }

  /* A touch screen keeps :hover where the finger lifted, which after a fold
     is over the next reply's line. */
  @media (hover: hover) {
    &:hover::before {
      background: ${e=>e.theme.ublue06};
      box-shadow: 1px 0 0 ${e=>e.theme.ublue06};
    }
  }
`,oe=i.div`
  position: absolute;
  top: 0;
  left: calc(var(--reply-line-x) - var(--reply-indent));
  width: calc(var(--reply-indent) - var(--reply-line-x) - ${W}px);
  height: calc(var(--reply-row-gap) + var(--reply-avatar) / 2);
  pointer-events: none;

  border: 0 solid ${e=>e.theme.neutral04};
  border-width: 0 0 1px 1px;
  border-bottom-left-radius: ${se}px;
`,ie=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--reply-line-x) - var(--reply-indent));
  pointer-events: none;

  border-left: 1px solid ${e=>e.theme.neutral04};
`,re=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--reply-avatar);
  height: var(--reply-actions-height);
`,Y=e=>e?`Collapse thread from ${e}`:"Collapse thread",Ae=({replyId:e,authorName:a})=>{const n=N();return t.jsx(ne,{type:"button","data-thread-line":"gutter","aria-label":Y(a),onClick:s=>n(e,s.currentTarget)})},le=({isLast:e,variant:a="elbow"})=>t.jsxs(t.Fragment,{children:[(!e||a==="through")&&t.jsx(ie,{"data-thread-line":"through"}),a==="elbow"&&t.jsx(oe,{"data-thread-line":"elbow"})]}),_e=({replyId:e,authorName:a})=>{const n=N();return t.jsx(re,{"data-thread-line":"toggle",children:t.jsx(z,{variant:"neutral","aria-label":Y(a),onPress:s=>n(e,s.target),children:t.jsx(X,{size:20})})})},Be=()=>t.jsx(Z,{size:20}),de=15,ce=w`
  /* The avatar, and the column it sits in. */
  --reply-avatar: 32px;
  /* Between the avatar column and the reply. */
  --reply-gutter-gap: 8px;
  /* How far right of its parent a nested row starts. */
  --reply-indent: 34px;
  /* Between nested rows; above the first, ReplyChildren makes it 12px. */
  --reply-row-gap: 16px;
  --reply-actions-height: 24px;
  /* The thread line runs down the middle of the avatar column. */
  --reply-line-x: calc(var(--reply-avatar) / 2 - 1px);
  /* The avatar in a collapsed reply's one-line summary. */
  --reply-summary-avatar: 24px;

  ${x} {
    --reply-avatar: 24px;
    --reply-gutter-gap: 8px;
    --reply-indent: 28px;
    --reply-summary-avatar: 20px;
  }
`,Ee={desktop:"large",small:"medium2"},Te={desktop:"medium2",small:"medium"},pe=i.div`
  ${ce}
  position: relative;

  ${e=>e.$isNested?w`
          padding-top: var(--reply-row-gap);
        `:w`
          padding: ${m["desktop-spacing-medium"]} 0;
          border-bottom: 1px solid ${e.theme.divider};

          /* The thread runs edge to edge on a phone; the replies do not. */
          ${x} {
            padding-inline: ${m["desktop-spacing-medium"]};
          }
        `}

  scroll-margin-top: calc(
    ${E.headerHeight} + ${E.headerSubHeight} +
      ${de}px
  );
`,he=i.div`
  display: flex;
  border-radius: ${m["desktop-radius-medium"]};
  transition:
    background-color 0.5s ease-out,
    box-shadow 0.5s ease-out;

  ${e=>e.$isSelected&&w`
      background-color: ${e.theme.ublue01};
      box-shadow: 0 0 0 ${m["desktop-spacing-small"]}
        ${e.theme.ublue01};
    `}
`,Me=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--reply-avatar);
`,ue=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--reply-avatar);
  height: var(--reply-avatar);
`,ge=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  margin-left: var(--reply-gutter-gap);
`,Fe=i.div`
  display: flex;
  flex-direction: column;
`,me=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${m["desktop-spacing-small"]};
  min-height: var(--reply-avatar);
`,fe=i.div`
  display: flex;
  align-items: center;
  gap: ${m["desktop-spacing-medium"]};
  height: var(--reply-actions-height);
  margin-top: ${m["desktop-spacing-xsmall"]};
`,Le=i.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--reply-indent);

  /* Closer to the reply above than the rows are to each other. */
  > :first-child {
    --reply-row-gap: 12px;
  }
`,T=i(c.Block)`
  border-radius: 50%;
`,De=({parentReplyId:e,isLast:a,className:n})=>t.jsxs(pe,{$isNested:e!==void 0,className:n,children:[e!==void 0&&t.jsx(le,{isLast:a}),t.jsx(A,{height:"auto",children:t.jsxs(he,{children:[t.jsx(ue,{children:t.jsx(T,{width:"100%",height:"100%"})}),t.jsxs(ge,{children:[t.jsx(me,{children:t.jsxs(d,{d:"h",alignItems:"center",gap:"desktop-spacing-xsmall",children:[t.jsx(c.Block,{width:100,height:14}),t.jsx(T,{width:4,height:4}),t.jsx(c.Text,{width:70})]})}),t.jsxs(d,{d:"v",children:[t.jsx(c.Text,{width:"100%"}),t.jsx(c.Text,{width:"60%"})]}),t.jsxs(fe,{children:[t.jsx(c.Block,{width:32,height:14}),t.jsx(c.Block,{width:52,height:14}),t.jsx(c.Block,{width:16,height:14})]})]})]})})]}),xe=i(d)`
  ${x} {
    flex-direction: column;
  }
`,ye=i(d)`
  ${x} {
    flex-direction: row;
    align-items: center;
  }
`,C=i.div`
  background-color: ${({theme:e})=>e.neutral03};
  border-radius: 50%;
`,l=i.div`
  background-color: ${({theme:e})=>e.neutral03};
  border-radius: ${m["desktop-radius-base"]};
`,ve=i(C)`
  margin-top: 16px;
  ${x} {
    margin-top: 0;
  }
`,be=i(d)`
  ${x} {
    margin-left: 8px;
    flex-direction: row;
    gap: 0;
  }
`,we=i(d)`
  display: none;
  ${x} {
    display: flex;
  }
`,Ve=()=>t.jsx(A,{children:t.jsxs(xe,{gap:"desktop-spacing-medium",style:{padding:16},children:[t.jsxs(ye,{d:"v",alignItems:"center",gap:"desktop-spacing-xsmall",children:[t.jsx(C,{style:{width:32,height:32}}),t.jsxs(be,{d:"v",alignItems:"center",gap:"desktop-spacing-small",children:[t.jsx(ve,{style:{width:24,height:24}}),t.jsx(l,{style:{width:24,height:18}})]})]}),t.jsxs(d,{d:"v",gap:"desktop-spacing-medium",style:{flex:1},children:[t.jsxs(d,{alignItems:"center",justifyContent:"space-between",children:[t.jsxs(d,{gap:"desktop-spacing-small",children:[t.jsx(l,{style:{width:40,height:20}}),t.jsx(l,{style:{width:40,height:20}})]}),t.jsxs(d,{gap:"desktop-spacing-medium",style:{height:32},children:[t.jsx(l,{style:{width:32}}),t.jsx(l,{style:{width:32}}),t.jsx(l,{style:{width:32}})]})]}),t.jsxs(d,{d:"v",gap:"desktop-spacing-medium",children:[t.jsx(l,{style:{height:32,width:"70%"}}),t.jsxs(we,{gap:"desktop-spacing-small",alignItems:"center",children:[t.jsx(C,{style:{height:32,width:32}}),t.jsx(l,{style:{height:20,width:"30%"}})]}),t.jsxs(d,{gap:"desktop-spacing-small",justifyContent:"space-between",style:{height:20},children:[t.jsx(l,{style:{width:"50%"}}),t.jsx(l,{style:{width:"15%"}})]}),t.jsxs(d,{d:"v",gap:"desktop-spacing-small",style:{marginTop:12},children:[t.jsx(l,{style:{height:20,width:"90%"}}),t.jsx(l,{style:{height:20,width:"80%"}}),t.jsx(l,{style:{height:20,width:"95%"}}),t.jsx(l,{style:{height:20,width:"45%",marginTop:8}}),t.jsx(l,{style:{height:20,width:"60%"}}),t.jsx(l,{style:{height:20,width:"95%"}})]})]})]})]})}),Pe=()=>t.jsx(A,{children:t.jsxs(d,{d:"v",gap:"desktop-spacing-small",justifyContent:"flex-start",style:{paddingLeft:28},children:[t.jsxs(d,{d:"v",alignItems:"center",style:{paddingBottom:16,width:"fit-content"},children:[t.jsx(c.Block,{width:8,height:45}),t.jsx(c.Block,{width:2,height:200})]}),t.jsx(d,{style:{paddingBottom:30},children:t.jsx(c.Block,{width:90,height:32})})]})});export{Z as C,De as R,Ve as T,Pe as V,Le as a,pe as b,le as c,ue as d,ge as e,me as f,he as g,Me as h,Ae as i,_e as j,Fe as k,Te as l,Be as m,fe as n,Ee as o,Ce as s,Se as u};
//# sourceMappingURL=VerticalTimelinePlaceholder-BFwCXCsE.js.map
