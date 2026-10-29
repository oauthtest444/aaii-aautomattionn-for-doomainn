import{j as n,e as t,m as u}from"./react-DGhZhtub.js";import"./sentry-DYy3Ltx-.js";import{cl as C,bE as c}from"./AppWrapper-Dv2SOsTr.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="488b097a-f363-48c1-9625-4ff12e120ee9",e._sentryDebugIdIdentifier="sentry-dbid-488b097a-f363-48c1-9625-4ff12e120ee9")}catch{}})();const m=e=>"href"in e,b=e=>"onSelect"in e,D=(e,o,i)=>{if(o)return o;if(!i)return;let r,l=-1;for(const p of e)for(const d of p.items){if(!m(d)||d.isExternal)continue;const{href:a}=d;(i===a||a!=="/"&&i.startsWith(`${a}/`))&&a.length>l&&(r=d.id,l=a.length)}return r},s="@media (max-width: 720px)",S=e=>n.jsx("a",{...e}),g=({item:e})=>!m(e)&&!b(e)?null:n.jsxs(n.Fragment,{children:[e.icon?n.jsx(N,{"aria-hidden":"true",children:e.icon}):null,n.jsx(_,{variant:"inherit",isTruncated:!0,children:e.label}),e.badge!==void 0&&e.badge!==null?n.jsx(z,{variant:"caption",isNumeric:!0,...U(e.badgeTone??"neutral"),children:e.badge}):null]}),L=({item:e,isActive:o,linkComponent:i})=>!m(e)&&!b(e)?n.jsx(h,{children:e.render({isActive:o})}):b(e)?n.jsx(h,{children:n.jsx(A,{type:"button",$isActive:o,$isDisabled:e.isDisabled,onClick:e.onSelect,disabled:e.isDisabled,children:n.jsx(g,{item:e})})}):e.isDisabled?n.jsx(h,{children:n.jsx(M,{$isActive:o,$isDisabled:!0,"aria-disabled":"true",children:n.jsx(g,{item:e})})}):e.isExternal?n.jsx(h,{children:n.jsx(F,{$isActive:o,href:e.href,target:"_blank",rel:"noreferrer",children:n.jsx(g,{item:e})})}):n.jsx(h,{children:n.jsx(q,{$isActive:o,linkComponent:i,href:e.href,"aria-current":o?"page":void 0,children:n.jsx(g,{item:e})})}),B=({sections:e,activeId:o,linkComponent:i=S})=>n.jsx(n.Fragment,{children:e.map(r=>n.jsxs(E,{children:[r.label?n.jsx(R,{variant:"small",color:"text-3",id:`cui-nav-${r.id}`,children:r.label}):null,n.jsx(H,{"aria-labelledby":r.label?`cui-nav-${r.id}`:void 0,children:r.items.map(l=>n.jsx(L,{item:l,isActive:l.id===o,linkComponent:i},l.id))})]},r.id))}),E=t.div`
  & + & {
    margin-top: 20px;
  }

  ${s} {
    & + & {
      margin-top: 0;
    }
  }
`,R=t(C)`
  letter-spacing: 0.06em;
  text-transform: uppercase;

  && {
    margin: 0 0 6px;
    padding: 0 8px;
  }

  ${s} {
    && {
      padding: 0;
    }
  }
`,H=t.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  /* Row gap wider than the 8px a row keeps between its label and its badge, so
     a count reads as belonging to the label on its left rather than to the row
     on its right — the column layout gets that from the line break. */
  ${s} {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
  }
`,h=t.li``,N=t.span`
  display: inline-flex;
  flex: none;
  align-items: center;
`,_=t(c)`
  flex: 1;
  min-width: 0;

  /* Rows sit side by side here, so a row shrink-wraps its label instead of
     filling the column and pushing its badge away from it. */
  ${s} {
    flex: 0 1 auto;
  }
`,U=e=>e==="attention"?{color:"destructive",weight:"bold"}:{color:"text-3"},z=t(c)`
  flex: none;
`,f=u`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 8px;
  border: 0;
  border-radius: var(--radius-global, 4px);
  background: none;
  color: var(--color-text-2, hsl(214, 8%, 34%));
  font: inherit;
  text-align: left;
  text-decoration: none;
  cursor: pointer;

  /* The option-item tokens rather than a depth step: in the light theme
     depth-bg-1 through -4 are all white, so a raised background disappears
     against the sidebar it sits on. These are translucent, so they darken in
     light and lighten in dark. */
  &:hover {
    background: var(--color-optionitem-bg-hover, hsla(214, 8%, 14%, 0.04));
    color: var(--color-text-1, hsl(214, 8%, 14%));
  }

  &:focus-visible {
    outline: 2px solid var(--color-global-primary, hsl(214, 100%, 50%));
    outline-offset: -2px;
  }

  ${s} {
    width: auto;
  }

  /* Those tints top out at 4% alpha, which is not on its own a reliable "you
     are here" — hence the accent bar and the weight. Inset, so switching rows
     shifts nothing. */
  ${({$isActive:e})=>e&&u`
      &,
      &:hover {
        box-shadow: inset 2px 0 0
          var(--color-global-primary, hsl(214, 100%, 50%));
        background: var(
          --color-optionitem-bg-selected,
          hsla(214, 8%, 14%, 0.06)
        );
        color: var(--color-text-1, hsl(214, 8%, 14%));
        font-weight: var(--font-weight-semibold, 600);
      }
    `}

  ${({$isDisabled:e})=>e&&u`
      &,
      &:hover {
        box-shadow: none;
        background: none;
        color: var(--color-text-4, hsl(214, 8%, 78%));
        cursor: default;
      }
    `}
`,F=t.a`
  ${f}
`,A=t.button`
  ${f}
`,M=t.span`
  ${f}
`,W=({linkComponent:e,...o})=>n.jsx(e,{...o}),q=t(W)`
  ${f}
`,G=e=>n.jsx("a",{...e}),oe=({title:e,subtitle:o,sections:i,activeItemId:r,currentPath:l,linkComponent:p=G,brand:d,backLink:a,headerActions:x,sidebarFooter:w,navLabel:y="Console",className:$,children:k})=>{const I=D(i,r,l),T=!!(d||a||x);return n.jsxs(K,{className:$,children:[T?n.jsxs(O,{children:[n.jsxs(j,{children:[d,a?n.jsx(Q,{linkComponent:p,href:a.href,children:a.label}):null]}),x?n.jsx(j,{children:x}):null]}):null,n.jsxs(V,{children:[n.jsxs(X,{"aria-label":y,children:[n.jsxs(Y,{children:[n.jsx(c,{variant:"heading-medium",elementType:"p",children:e}),o?n.jsx(c,{variant:"caption",elementType:"p",children:o}):null]}),n.jsx(B,{sections:i,activeId:I,linkComponent:p}),w?n.jsx(Z,{children:n.jsx(c,{variant:"caption",elementType:"div",children:w})}):null]}),n.jsx(P,{children:k})]})]})},J=({linkComponent:e,...o})=>n.jsx(e,{...o}),K=t.div`
  display: flex;
  flex-direction: column;
  /* Both together on purpose: "flex: 1" fills a flex parent (apps/frontend
     mounts the router inside one), "min-height" covers a block parent. */
  flex: 1;
  min-height: 100%;
  background: var(--color-depth-bg-0, hsl(214, 8%, 98%));
  color: var(--color-text-1, hsl(214, 8%, 14%));
  /* The baseline the nav rows inherit through their "font: inherit" — every
     other piece of type in the shell is a UIC <Text> or <Heading>. */
  font-size: var(--font-size-medium, 13px);
`,O=t.header`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-divider, hsla(214, 8%, 14%, 0.07));
  background: var(--color-neutral-00, #fff);
`,j=t.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
`,Q=t(J)`
  color: var(--color-text-3, hsl(214, 8%, 54%));
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: var(--color-text-1, hsl(214, 8%, 14%));
  }
`,V=t.div`
  flex: 1;
  display: flex;
  align-items: stretch;
  min-height: 0;

  ${s} {
    flex-direction: column;
  }
`,X=t.nav`
  flex: none;
  display: flex;
  flex-direction: column;
  width: 208px;
  padding: 20px 12px;
  border-right: 1px solid var(--color-divider, hsla(214, 8%, 14%, 0.07));
  background: var(--color-depth-bg-1, #fff);

  ${s} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 20px;
    width: auto;
    padding: 12px 16px;
    border-right: 0;
    border-bottom: 1px solid var(--color-divider, hsla(214, 8%, 14%, 0.07));
  }
`,Y=t.div`
  display: flex;
  flex-direction: column;
  /* UIC's Text resets margin to 0, so the gap between title and subtitle is
     the column's, not the paragraphs'. */
  gap: 2px;
  margin-bottom: 20px;
  padding: 0 8px;

  ${s} {
    flex-basis: 100%;
    margin: 0;
    padding: 0;
  }
`,Z=t.div`
  margin-top: auto;
  padding: 0 8px;

  ${s} {
    flex-basis: 100%;
    margin: 0;
    padding: 0;
  }
`,P=t.main`
  flex: 1;
  min-width: 0;
  padding: 24px;

  ${s} {
    padding: 16px;
  }
`,v={surface:"var(--color-depth-bg-1, #fff)",page:"var(--color-depth-bg-0, hsl(214, 8%, 98%))",hairline:"var(--color-divider, hsla(214, 8%, 14%, 0.07))",strongHairline:"var(--color-neutral-04, hsla(214, 8%, 14%, 0.2))",hover:"var(--color-optionitem-bg-hover, hsla(214, 8%, 14%, 0.04))",accent:"var(--color-ublue-06, hsl(214, 100%, 50%))",muted:"var(--color-text-3, hsl(214, 8%, 54%))",notice:"var(--color-orange-06, hsl(30, 95%, 47%))",positive:"var(--color-green-06, hsl(150, 70%, 40%))",destructive:"var(--color-red-06, hsl(0, 85%, 55%))"},re=t.section`
  background: ${v.surface};
  border: 1px solid ${v.hairline};
  border-radius: 8px;
`,ie=t(c).attrs({variant:"caption",weight:"bold",elementType:"span"})`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,ae=t.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${v.accent};
    outline-offset: 2px;
    border-radius: 4px;
  }
`;export{oe as C,ie as E,ae as U,re as a,v as t};
//# sourceMappingURL=surfaces-X_L4gZ-Y.js.map
