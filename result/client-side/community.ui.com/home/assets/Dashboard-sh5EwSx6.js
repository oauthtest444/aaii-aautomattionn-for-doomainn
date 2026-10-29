import{m as v,j as e,e as s}from"./react-DGhZhtub.js";import"./sentry-DYy3Ltx-.js";import{bE as d,ck as D,cl as k}from"./AppWrapper-Dv2SOsTr.js";import{aK as I}from"./index-BEhlHXuB.js";import"./lodash-cGhQZeSM.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="943f7041-db05-4538-aff2-06493140fa09",t._sentryDebugIdIdentifier="sentry-dbid-943f7041-db05-4538-aff2-06493140fa09")}catch{}})();const j=new Intl.NumberFormat("en-US"),p=t=>{if(t<1e4)return j.format(t);const[a,i]=t<1e6?[1e3,"k"]:[1e6,"M"],r=Math.round(t/a*10)/10;return i==="k"&&r>=1e3?p(1e6):`${r}${i}`},u=t=>j.format(t),P=new Intl.PluralRules("en-US"),S=(t,a)=>`${u(t)} ${P.select(t)==="one"?a.one:a.other}`,C=(t,a)=>a>0?(t/a).toFixed(1):null,M=(t,a=4)=>{if(!(t>0))return[0,1];const i=t/a,r=10**Math.floor(Math.log10(i)),o=Math.max(1,[1,2,5,10].map(l=>l*r).find(l=>l>=i)??10*r),n=Math.ceil(t/o)*o;return Array.from({length:Math.round(n/o)+1},(l,c)=>c*o)},E=new Intl.DateTimeFormat("en-US",{weekday:"short",timeZone:"UTC"}),A=new Intl.DateTimeFormat("en-US",{weekday:"long",month:"short",day:"numeric",timeZone:"UTC"}),w=t=>new Date(`${t}T00:00:00Z`),U=t=>E.format(w(t)),T=t=>A.format(w(t)),f=v`
  border: 1px solid var(--color-divider, hsla(214, 8%, 14%, 0.07));
  border-radius: 8px;
  background: var(--color-depth-bg-1, #fff);
`,y=v`
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,m=[{key:"posts",label:"Posts",noun:{one:"post",other:"posts"}},{key:"replies",label:"Replies",noun:{one:"reply",other:"replies"}}],_=({days:t,title:a})=>{const i=M(Math.max(0,...t.flatMap(n=>[n.posts,n.replies]))),r=i[i.length-1],o=n=>`${n/r*100}%`;return e.jsxs(F,{"aria-label":a,children:[e.jsxs(Y,{children:[e.jsx(O,{variant:"heading-small",color:"text-2",elementType:"p",children:a}),e.jsx(B,{"aria-hidden":!0,children:m.map(({key:n,label:l})=>e.jsxs(N,{children:[e.jsx(W,{$series:n}),e.jsx(d,{variant:"caption",color:"text-2",elementType:"span",children:l})]},n))})]}),e.jsxs(X,{children:[e.jsx(Z,{"aria-hidden":!0,children:i.map(n=>e.jsx(z,{style:{bottom:o(n)},children:e.jsx(d,{variant:"caption",elementType:"span",children:p(n)})},n))}),e.jsxs(G,{role:"group","aria-label":`${a}, posts and replies per day`,children:[i.map(n=>e.jsx(K,{"aria-hidden":!0,style:{bottom:o(n)}},n)),t.map((n,l)=>e.jsxs(J,{role:"img",tabIndex:0,"aria-label":`${T(n.day)}: ${m.map(({key:c,noun:$})=>S(n[c],$)).join(", ")}`,children:[e.jsx(V,{children:m.map(({key:c})=>e.jsx(ee,{$series:c,style:{height:n[c]>0?`max(2px, ${o(n[c])})`:0}},c))}),e.jsx(L,{day:n,index:l,count:t.length})]},n.day))]}),e.jsx(se,{"aria-hidden":!0,children:t.map(n=>e.jsx(ae,{variant:"caption",elementType:"span",children:U(n.day)},n.day))})]})]})},L=({day:t,index:a,count:i})=>{const r=i-1-a>a?"right":"left",o=r==="right"?a+1:i-a;return e.jsxs(h,{"aria-hidden":!0,$side:r,style:{left:`${-a*100}%`,width:`${i*100}%`},children:[e.jsx(Q,{style:{flexBasis:`calc(${o/i*100}% + 4px)`}}),e.jsxs(q,{children:[e.jsx(d,{variant:"caption",elementType:"p",children:T(t.day)}),m.map(({key:n,label:l})=>e.jsxs(te,{children:[e.jsx(ne,{$series:n}),e.jsx(d,{variant:"heading-medium",color:"text-1",elementType:"span",children:u(t[n])}),e.jsx(d,{variant:"caption",color:"text-2",elementType:"span",children:l})]},n))]})]})},H="160px",R="40px",F=s.section`
  ${f}
  --series-posts: var(--color-ublue-06, hsl(214, 100%, 50%));
  --series-replies: var(--color-neutral-08, hsl(214, 8%, 54%));

  .theme--dark & {
    --series-posts: var(--color-ublue-05, hsl(214, 88%, 55%));
    --series-replies: var(--color-neutral-06, hsl(214, 8%, 49%));
  }

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 14px 16px 12px;
`,Y=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,O=s(d)`
  ${y}
`,B=s.div`
  display: flex;
  gap: 16px;
`,N=s.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`,g=({$series:t})=>`var(--series-${t})`,W=s.span`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: ${g};
`,X=s.div`
  display: grid;
  /* minmax, not 1fr: the plot must be free to shrink below its columns. */
  grid-template-columns: ${R} minmax(0, 1fr);
  grid-template-rows: ${H} auto;
  column-gap: 8px;
  row-gap: 6px;
`,Z=s.div`
  position: relative;
  font-variant-numeric: tabular-nums;
`,z=s.div`
  position: absolute;
  right: 0;
  transform: translateY(50%);
  line-height: 1;
`,G=s.div`
  position: relative;
  display: flex;
`,K=s.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-divider, hsla(214, 8%, 14%, 0.07));
`,h=s.div`
  position: absolute;
  top: 4px;
  z-index: 1;
  display: none;
  /* The spacer first, from the edge the tooltip keeps its distance from. */
  flex-direction: ${({$side:t})=>t==="right"?"row":"row-reverse"};
  pointer-events: none;
`,Q=s.div`
  flex-shrink: 1;
  min-width: 0;
`,q=s.div`
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 132px;
  padding: 8px 10px;
  border: 1px solid var(--color-divider, hsla(214, 8%, 14%, 0.07));
  border-radius: 6px;
  background: var(--color-depth-bg-2-elevate1, #fff);
  box-shadow: 0 4px 12px hsla(214, 8%, 14%, 0.16);
  white-space: nowrap;
`,J=s.div`
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  outline: none;

  &:hover,
  &:focus-visible {
    background: var(
      --color-dataviz-chart-areas-resting,
      hsla(214, 8%, 14%, 0.08)
    );
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 1px var(--series-posts);
  }

  &:hover ${h}, &:focus-visible ${h} {
    display: flex;
  }
`,V=s.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* The 2px surface gap between the pair, never a stroke around them. */
  gap: 2px;
  width: calc(100% - 8px);
  height: 100%;
`,ee=s.div`
  flex: 0 1 24px;
  border-radius: 4px 4px 0 0;
  background: ${g};
`,te=s.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-variant-numeric: tabular-nums;
`,ne=s.span`
  width: 10px;
  height: 2px;
  border-radius: 1px;
  background: ${g};
`,se=s.div`
  grid-column: 2;
  display: flex;
`,ae=s(d)`
  flex: 1;
  text-align: center;
`,x=({label:t,value:a,detail:i,tone:r="default",isLive:o=!1})=>e.jsxs(ie,{"aria-label":t,children:[e.jsxs(oe,{children:[o?e.jsx(re,{"aria-hidden":!0}):null,e.jsx(d,{variant:"heading-small",color:"text-2",elementType:"span",children:t})]}),e.jsx(d,{variant:"heading-xlarge-2",color:r==="notice"?"notice":"text-1",elementType:"p",children:a}),i?e.jsx(d,{variant:"caption",elementType:"p",children:i}):null]}),ie=s.section`
  ${f}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  padding: 14px 16px;
`,oe=s.div`
  ${y}
  display: flex;
  align-items: center;
  gap: 6px;
`,re=s.span`
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-green-06, hsl(138, 59%, 51%));
  box-shadow: 0 0 0 2px
    color-mix(
      in srgb,
      var(--color-green-06, hsl(138, 59%, 51%)) 30%,
      transparent
    );
`,le="/api/v1/management-console/community-stats",de=6e4,ce=()=>I.useQuery("get",le,{},{refetchInterval:de}),pe=new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit"}),xe={posts:0,replies:0},me=({stats:t})=>{const{online:a,activeMembers:i,newMembers:r,unansweredQuestions:o,activity:n}=t,l=n.at(-1)??xe,c=C(l.replies,l.posts);return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsx(x,{label:"Online now",isLive:!0,value:p(a.people),detail:`${u(a.members)} signed in`}),e.jsx(x,{label:"Monthly active",value:p(i.count),detail:`members, last ${i.windowDays} days`}),e.jsx(x,{label:"New members",value:p(r.count),detail:`last ${r.windowDays} days`}),e.jsx(x,{label:"Posts today",value:p(l.posts),detail:"questions and discussions"}),e.jsx(x,{label:"Replies today",value:p(l.replies),detail:c?`${c} per post`:"no posts yet today"}),e.jsx(x,{label:"Unanswered",value:p(o.count),tone:o.count>0?"notice":"default",detail:`no reply, last ${o.windowDays} days`})]}),e.jsx(_,{title:`Activity, last ${n.length} days`,days:n})]})},he=()=>{const{data:t,isPending:a,isError:i}=ce();return e.jsxs(ue,{"aria-labelledby":"dashboard-community",children:[e.jsxs(fe,{children:[e.jsx(ye,{id:"dashboard-community",variant:"heading-small",color:"text-2",elementType:"p",children:"Community"}),t?e.jsxs(d,{variant:"caption",elementType:"p",children:["Updated ",pe.format(new Date(t.generatedAt))," · days in UTC"]}):null]}),t?e.jsx(me,{stats:t}):a?e.jsx(b,{children:e.jsx(D,{})}):i?e.jsx(b,{children:e.jsx(d,{variant:"body-secondary",elementType:"p",children:"Couldn’t load the community numbers. Trying again every minute."})}):null]})},ue=s.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,fe=s.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
`,ye=s(d)`
  ${y}
`,ge=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  gap: 12px;
`,b=s.div`
  ${f}
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  padding: 16px;
`,ke=()=>e.jsxs(be,{children:[e.jsxs(ve,{children:[e.jsx(k,{variant:"xlarge-2",elementType:"h1",children:"Dashboard"}),e.jsx(d,{variant:"body-secondary",elementType:"p",children:"Where the community needs the team today."})]}),e.jsx(he,{})]}),be=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ve=s.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;export{ke as default};
//# sourceMappingURL=Dashboard-sh5EwSx6.js.map
