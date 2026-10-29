import{e as o,j as t,A as je,r as I}from"./react-DGhZhtub.js";import"./sentry-DYy3Ltx-.js";import{t as h,E as O,U as we,a as fe}from"./surfaces-X_L4gZ-Y.js";import{cu as Te,a$ as Se,bE as p,c as Ee,bu as Ae,bG as M,cv as Ce,cw as m,cx as U,bT as $e,cy as Re,ab as ke,bx as z,by as P,H as De,cl as Ie,bH as Le,b5 as q}from"./AppWrapper-Dv2SOsTr.js";import{ax as Pe,bv as Be}from"./index-BEhlHXuB.js";import{a as Oe,b as _e,c as Ne,d as Me,e as Ue,f as ze}from"./hooks-Dyo0PB4u.js";import{p as Fe,f as He,n as Ve,a as We}from"./links-0YmEwuL1.js";import"./lodash-cGhQZeSM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1f29b486-f126-4598-9312-39cb6ea583ba",e._sentryDebugIdIdentifier="sentry-dbid-1f29b486-f126-4598-9312-39cb6ea583ba")}catch{}})();const _=["category","reason","author","country"],X={category:"Category",reason:"Reason",author:"Author",country:"Country"},G={category:!0,reason:!1,author:!0,country:!0},B=e=>({size:`${e}px`,min:e}),le=(e,n)=>({size:`minmax(${e}px, ${n}fr)`,min:e}),Ge=le(220,1),Ye=B(120),Je=B(320),Ke={category:B(110),reason:le(260,1.3),author:B(150),country:B(70)},de=12,ce=16,Qe=e=>{const n=[Ge,Ye,..._.filter(a=>e[a]).map(a=>Ke[a]),Je];return{template:n.map(a=>a.size).join(" "),minWidth:n.reduce((a,d)=>a+d.min,0)+de*(n.length-1)+ce*2}},Ze=e=>{let n;try{n=JSON.parse(e)}catch{return G}const a=typeof n=="object"&&n!==null?n:{};return Object.fromEntries(_.map(d=>{const i=a[d];return[d,typeof i=="boolean"?i:G[d]]}))},qe={parser:Ze},Xe=()=>Te("content_risk_columns_v1",G,qe),pe=["HELD","SPAM","UNSURE","NOT_SPAM","FAILED"],he={HELD:"Held",SPAM:"Spam",UNSURE:"Unsure",NOT_SPAM:"Not spam",FAILED:"Failed"},ue=e=>pe.some(n=>n===e),Y=["all","approved","rejected","none"],ee={all:"All",approved:"Approved",rejected:"Rejected",none:"Not held"},et=e=>Y.some(n=>n===e),tt={all:void 0,approved:"APPROVED",rejected:"REJECTED",none:"NONE"},nt=["SPAM"],xe=e=>nt.includes(e),J=(e,n)=>xe(e)?n:"all",T=50,N={tab:"HELD",reviewStatus:"all"},at=/^[A-Z][A-Z0-9_]{0,39}$/,ot=e=>{const n=e.get("tab")??e.get("outcome"),a=ue(n)?n:N.tab,d=e.get("review"),i=e.get("category"),s=Number.parseInt(e.get("page")??"",10);return{tab:a,reviewStatus:J(a,et(d)?d:N.reviewStatus),category:i!==null&&at.test(i)?i:null,showBanned:e.get("banned")==="show",page:Number.isFinite(s)&&s>1?s-1:0}},st=e=>{const n=new URLSearchParams,a=J(e.tab,e.reviewStatus);return e.tab!==N.tab&&n.set("tab",e.tab),a!==N.reviewStatus&&n.set("review",a),e.category!==null&&n.set("category",e.category),e.showBanned&&n.set("banned","show"),e.page>0&&n.set("page",String(e.page+1)),n},rt=e=>({outcome:e.tab,decision:tt[J(e.tab,e.reviewStatus)],category:e.category??void 0,authorBanned:e.showBanned?void 0:"false",sort:"score",limit:T,offset:e.page*T}),F=e=>Se(e,"dddd, MMMM D, YYYY [at] hh:mm A"),it=e=>e.verdict??"FAILED",te={QUESTION:"Question",RELEASE:"Release"},ne=e=>e.target==="POST"?te[e.threadType]:`Reply in ${te[e.threadType]}`,ge=e=>e===null?"—":e.charAt(0)+e.slice(1).toLowerCase().replace(/_/g," "),lt=e=>e.isDeleted?"deleted":e.isHidden&&e.hold===null?"hidden":null,ye=e=>{switch(e.decision){case"APPROVED":return"Approved";case"REJECTED":return"Rejected";default:return null}},dt=new Intl.DisplayNames(["en"],{type:"region"}),be=e=>{try{return dt.of(e)??e}catch{return e}},ct=(e,n)=>e.bannedUntil!==null&&new Date(e.bannedUntil).getTime()>n.getTime(),pt=e=>`/user/${e.slug}/${e.id}`,ht=`color-mix(in srgb, ${h.page} 60%, ${h.surface})`,K=o.div`
  display: grid;
  grid-template-columns: ${e=>e.$template};
  gap: ${de}px;
  align-items: center;
  padding: 12px ${ce}px;
`,ut=o.div`
  overflow-x: auto;

  > * {
    min-width: ${e=>e.$minWidth}px;
  }
`,xt=({id:e,item:n})=>{var i,s;const{country:a}=n.author,d=[["ID",n.id],["Thread ID",n.threadId],["Reply ID",n.replyId??"—"],["Author ID",n.author.id],["Country",a?`${a} (${be(a)})`:"—"],["Status",n.status],["Created",F(n.createdAt)]];return n.hold&&d.push(["Held",F(n.hold.heldAt)]),(i=n.hold)!=null&&i.decidedAt&&(d.push([ye(n.hold)??"Decided",F(n.hold.decidedAt)]),d.push(["Decided by",((s=n.hold.decidedBy)==null?void 0:s.username)??"—"])),t.jsxs(gt,{id:e,children:[t.jsx(yt,{variant:"body-secondary",color:n.reason===null?"text-3":"text-1",elementType:"p",children:n.reason??"The check reached no verdict."}),t.jsx(bt,{children:d.map(([r,u])=>t.jsxs("div",{children:[t.jsx("dt",{children:t.jsx(mt,{children:r})}),t.jsx(vt,{children:u})]},r))})]})},gt=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 16px 16px;
  background: ${ht};
  border-top: 1px solid ${h.hairline};
`,yt=o(p)`
  max-width: 760px;
  text-wrap: pretty;
`,bt=o.dl`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px 20px;
  margin: 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  dt {
    margin: 0;
  }
`,mt=o(O).attrs({color:"text-4"})`
  letter-spacing: 0.05em;
`,vt=o.dd`
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 18px;
  color: var(--color-text-2, hsl(214, 8%, 32%));
  overflow-wrap: anywhere;
`,jt={SPAM:h.destructive,UNSURE:h.notice,NOT_SPAM:h.positive,FAILED:h.notice},H=e=>e.stopPropagation(),wt=({item:e,now:n,columns:a,gridTemplate:d,isExpanded:i,onToggle:s,titleOf:r,onBan:u,onApprove:v,onReject:x,isDeciding:g})=>{var k,S,b;const j=`content-risk-${e.id}-detail`,C=it(e),w=lt(e),$=e.hold?ye(e.hold):null,R=ct(e.author,n),[y,...f]=((k=e.thread)==null?void 0:k.tags)??[];return t.jsxs(ft,{$isExpanded:i,children:[t.jsxs(Tt,{$template:d,onClick:s,children:[t.jsxs(St,{children:[e.thread?t.jsx(me,{href:Fe(e),target:"_blank",rel:"noopener noreferrer",onClick:H,children:t.jsx(At,{variant:"body-primary",weight:"bold",color:"text-1",elementType:"span",children:e.thread.title})}):t.jsx(p,{variant:"body-primary",weight:"bold",color:"text-3",elementType:"span",children:"Deleted thread"}),t.jsxs(Et,{children:[y!==void 0?t.jsx(Ee,{type:"general",title:r(y),size:"small",isSelected:!0,forceDefaultCursor:!0}):null,f.length>0?t.jsxs(p,{variant:"caption",elementType:"span",title:f.map(r).join(", "),children:["+",f.length]}):null,t.jsx(p,{variant:"caption",elementType:"span",children:w?`${ne(e)} · ${w}`:ne(e)})]})]}),t.jsxs(Rt,{type:"button","aria-expanded":i,"aria-controls":j,onClick:E=>{E.stopPropagation(),s()},children:[t.jsx(kt,{variant:"body-secondary",weight:"bold",color:"text-1",elementType:"span",isNumeric:!0,children:e.spamScore??"—"}),t.jsx(Dt,{$tone:jt[C],children:he[C]})]}),a.category?t.jsx(It,{variant:"caption",weight:"bold",color:"text-2",elementType:"span",children:ge(e.category)}):null,a.reason?t.jsx(Ct,{variant:"body-secondary",color:"text-2",elementType:"span",children:e.reason??"—"}):null,a.author?t.jsxs($t,{href:pt(e.author),target:"_blank",rel:"noopener noreferrer",onClick:H,children:[t.jsx(Ae,{username:e.author.username,isEmployee:e.author.isEmployee,avatarDetails:{image:(S=e.author.avatar)==null?void 0:S.image,acronym:(b=e.author.avatar)==null?void 0:b.content},size:"medium"}),t.jsx(p,{variant:"body-secondary",color:"text-2",elementType:"span",isTruncated:!0,children:e.author.username})]}):null,a.country?t.jsx(p,{variant:"body-secondary",weight:"bold",color:"text-2",elementType:"span",title:e.author.country?be(e.author.country):void 0,children:e.author.country??"—"}):null,t.jsxs(Lt,{onClick:H,children:[$?t.jsx(ae,{weight:"bold",children:$}):null,e.hold&&e.hold.decision===null?t.jsxs(t.Fragment,{children:[R?null:t.jsx(M,{variant:"secondary-neutral",size:"small",isDisabled:g,onPress:v,children:"Approve"}),t.jsx(M,{variant:"secondary-neutral",size:"small",isDisabled:g,onPress:x,children:"Reject"})]}):null,R?t.jsx(ae,{children:"Banned"}):t.jsx(M,{variant:"destructive",size:"small",onPress:u,children:"Ban author"})]})]}),i?t.jsx(xt,{id:j,item:e}):null]})},ft=o.li`
  list-style: none;
  border-bottom: 1px solid ${h.hairline};
  background: ${e=>e.$isExpanded?h.hover:"transparent"};
`,Tt=o(K)`
  cursor: pointer;

  &:hover {
    background: ${h.hover};
  }
`,St=o.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
`,Et=o.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`,At=o(p)`
  text-wrap: pretty;
`,Ct=o(p)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,me=o.a`
  display: flex;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  border-radius: 2px;

  /* Doubled so the hover colour beats the Text's own. */
  &&:hover > *,
  &&:focus-visible > * {
    color: ${h.accent};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${h.accent};
    outline-offset: 2px;
  }
`,$t=o(me)`
  align-items: center;
  gap: 8px;
`,Rt=o(we)`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-self: start;
`,kt=o(p)`
  min-width: 20px;
`,Dt=o.span`
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  white-space: nowrap;
  color: ${e=>e.$tone};
  background: color-mix(in srgb, ${e=>e.$tone} 14%, transparent);
`,It=o(p)`
  letter-spacing: 0.03em;
  overflow-wrap: anywhere;
`,Lt=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`,ae=o(p).attrs({variant:"caption",color:"text-3",elementType:"span"})``,Pt=({columns:e,gridTemplate:n})=>t.jsx(Bt,{children:t.jsx(Ce,{children:t.jsxs(K,{$template:n,children:[t.jsxs(oe,{children:[t.jsx(m.Block,{height:17,width:"75%"}),t.jsx(m.Block,{height:20,width:"40%"})]}),t.jsx(m.Block,{height:18,width:72}),e.category?t.jsx(m.Block,{height:12,width:70}):null,e.reason?t.jsxs(oe,{children:[t.jsx(m.Block,{height:12,width:"95%"}),t.jsx(m.Block,{height:12,width:"60%"})]}):null,e.author?t.jsxs(Ot,{children:[t.jsx(_t,{width:20,height:20}),t.jsx(m.Block,{height:12,width:80})]}):null,e.country?t.jsx(m.Block,{height:12,width:24}):null,t.jsx(Nt,{children:t.jsx(m.Block,{height:24,width:88})})]})})}),Bt=o.li`
  display: flex;
  list-style: none;
  border-bottom: 1px solid ${h.hairline};
`,oe=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`,Ot=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_t=o(m.Block)`
  border-radius: 50%;
`,Nt=o.div`
  display: flex;
  justify-content: flex-end;
`,se=8,Mt=({items:e,totalItems:n,page:a,isLoading:d,error:i,now:s,columns:r,onColumnsChange:u,expandedId:v,onToggle:x,titleOf:g,onBan:j,onApprove:C,onReject:w,decidingIds:$,onPageChange:R})=>{const y=n??0,f=Math.max(1,Math.ceil(y/T)),k=y===0?0:a*T+1,S=Math.min(y,(a+1)*T),b=Qe(r),E=e===void 0&&d&&!i?Math.min(se,n===void 0?se:Math.max(0,n-a*T)):0;return t.jsxs("div",{"aria-busy":d,children:[t.jsx(ut,{$minWidth:b.minWidth,children:t.jsxs("div",{children:[t.jsxs(Ut,{$template:b.template,children:[t.jsx(O,{children:"Content"}),t.jsx(O,{children:"Verdict"}),_.filter(l=>r[l]).map(l=>t.jsx(O,{children:X[l]},l)),t.jsx(zt,{children:t.jsxs(U.Root,{children:[t.jsx(U.Trigger,{children:t.jsx($e,{"aria-label":"Columns",size:"small",variant:"secondary-neutral",children:t.jsx(Re,{size:16})})}),t.jsx(U.Content,{placement:"bottom end",width:180,children:t.jsx(Ft,{children:_.map(l=>t.jsx(ke,{label:X[l],isSelected:r[l],onChange:D=>u({...r,[l]:D})},l))})})]})})]}),!i&&e!==void 0&&e.length>0?t.jsx(re,{children:e.map(l=>t.jsx(wt,{item:l,now:s,columns:r,gridTemplate:b.template,isExpanded:v===l.id,onToggle:()=>x(l.id),titleOf:g,onBan:()=>j(l.author),onApprove:()=>C(l),onReject:()=>w(l),isDeciding:$.has(l.id)},l.id))}):E>0?t.jsx(re,{"aria-hidden":!0,children:Array.from({length:E},(l,D)=>t.jsx(Pt,{columns:r,gridTemplate:b.template},D))}):null]})}),i?t.jsxs(ie,{children:[t.jsx(p,{variant:"body-primary",weight:"bold",color:"destructive",children:"The checks could not be loaded."}),t.jsx(p,{variant:"body-secondary",children:i instanceof Error?i.message:"Please try again."})]}):E>0?null:e===void 0||e.length===0?t.jsxs(ie,{children:[t.jsx(p,{variant:"body-primary",weight:"bold",color:"text-1",children:"Nothing here"}),t.jsx(p,{variant:"body-secondary",children:"No checks match this view."})]}):null,y>T?t.jsx(Ht,{children:t.jsx(He,{caption:`${k}–${S} of ${y}`,isDisabled:a===0&&a>=f-1?!0:a===0?"previous":a>=f-1?"next":!1,onPress:l=>R(l==="next"?a+1:a-1)})}):null]})},Ut=o(K)`
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${h.hairline};
  background: ${h.page};
`,zt=o.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* As tall as the labels beside it, so the header keeps their height. */
  margin: -6px 0;
`,Ft=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
`,re=o.ul`
  margin: 0;
  padding: 0;
`,ie=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 56px 16px;
  text-align: center;
`,Ht=o.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
`,V="all",W=e=>e==null?null:String(e),Vt=({filters:e,counts:n,onChange:a})=>{const d=[...new Set([...(n==null?void 0:n.categories)??[],...e.category===null?[]:[e.category]])].sort(),i=(n==null?void 0:n.bannedAuthorCount)??0;return t.jsxs(Wt,{children:[t.jsx(Gt,{"aria-label":"Show",gap:4,selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[e.tab],onSelectionChange:s=>{const[r]=[...s];ue(r)&&a({tab:r})},children:pe.map(s=>{const r=s===e.tab;return t.jsxs(Ve,{id:s,size:"small",variant:"tertiary",children:[t.jsx(p,{variant:"caption",elementType:"span",weight:r?"bold":void 0,color:r?"text-1":"text-3",children:he[s]}),n?t.jsx(p,{variant:"caption",elementType:"span",color:"text-4",isNumeric:!0,children:n.outcomeCounts[s]}):null]},s)})}),t.jsx(Yt,{}),t.jsxs(z,{"aria-label":"Category",size:"small",minWidth:190,value:e.category??V,onChange:s=>{const r=W(s);a({category:r===null||r===V?null:r})},children:[t.jsx(P.Item,{id:V,label:"All categories"}),d.map(s=>t.jsx(P.Item,{id:s,label:ge(s)},s))]}),xe(e.tab)?t.jsx(z,{"aria-label":"Review status",size:"small",minWidth:170,value:e.reviewStatus,onChange:s=>{const r=W(s),u=Y.find(v=>v===r);u&&a({reviewStatus:u})},selectorValue:`Review: ${ee[e.reviewStatus]}`,children:Y.map(s=>t.jsx(P.Item,{id:s,label:ee[s]},s))}):null,t.jsxs(z,{"aria-label":"Banned authors",size:"small",minWidth:210,value:e.showBanned?"show":"hide",onChange:s=>a({showBanned:W(s)==="show"}),children:[t.jsx(P.Item,{id:"hide",label:i>0?`Hide banned authors (${i})`:"Hide banned authors"}),t.jsx(P.Item,{id:"show",label:"Show banned authors"})]})]})},Wt=o.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid ${h.hairline};
`,Gt=o(We)`
  padding: 3px;
  border: 1px solid ${h.hairline};
  border-radius: 8px;
  background: ${h.page};

  /* The label and its count sit side by side inside each tab. */
  button > span {
    display: inline-flex;
    gap: 6px;
  }
`,Yt=o.div`
  flex: 1 1 0;
`,on=()=>{var l,D,Q;const[e,n]=je(),a=I.useMemo(()=>ot(e),[e]),[d,i]=I.useState(null),[s,r]=Xe(),u=I.useCallback(c=>{i(null),n(st({...a,page:0,...c}),{replace:!0})},[a,n]),v=I.useMemo(()=>rt(a),[a]),x=Oe(v),g=x.isPlaceholderData,j=_e(x,v),C=g&&j!==void 0&&a.reviewStatus==="all"?j.outcomeCounts[a.tab]:(l=x.data)==null?void 0:l.totalItems,w=(D=x.data)==null?void 0:D.totalItems;I.useEffect(()=>{if(w===void 0||g)return;const c=Math.max(0,Math.ceil(w/T)-1);a.page>c&&u({page:c})},[w,g,a.page,u]);const $=Ne(),R=Me(),y=Ue(),f=ze(),[k,S]=I.useState(()=>new Set),b=async(c,A)=>{const ve=A==="approve"?y:f;S(L=>new Set(L).add(c.id));try{await ve.mutateAsync({params:{path:{id:c.id}}})}catch(L){q(A==="approve"?"Could not approve the content":"Could not reject the content",[Be(L)])}finally{S(L=>{const Z=new Set(L);return Z.delete(c.id),Z})}},E=async c=>{await Le({type:"custom-confirm-button",title:`Ban ${c.username}?`,description:"They won’t be able to post or reply, and everything they have posted is hidden. The ban is permanent until a moderator lifts it.",confirmButtonLabel:"Ban author",confirmButtonVariant:"destructive",onAction:async()=>{try{await R(c.id)}catch(A){q("Could not ban the author",[A instanceof Error?A.message:"Please try again."])}}})};return t.jsxs(Jt,{children:[t.jsx(De,{children:t.jsx("title",{children:`Content risk review | Management Console | ${Pe}`})}),t.jsxs(Kt,{children:[t.jsx(Ie,{variant:"xlarge-2",elementType:"h1",children:"Content risk review"}),t.jsx(p,{variant:"body-primary",color:"text-2",elementType:"p",children:"Automated spam checks on new threads and replies, with the verdict and its reasoning."})]}),t.jsxs(fe,{children:[t.jsx(Vt,{filters:a,counts:j,onChange:u}),t.jsx(Mt,{items:g||(Q=x.data)==null?void 0:Q.items,totalItems:C,page:a.page,isLoading:x.isLoading||g,error:x.error,now:new Date,columns:s,onColumnsChange:r,expandedId:d,onToggle:c=>i(A=>A===c?null:c),titleOf:$,onBan:E,onApprove:c=>b(c,"approve"),onReject:c=>b(c,"reject"),decidingIds:k,onPageChange:c=>u({page:c})})]})]})},Jt=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
`,Kt=o.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;export{on as default};
//# sourceMappingURL=ContentRisk-D9_esjTI.js.map
