import{j as t,e as d,r as S,m as De,A as Me}from"./react-DGhZhtub.js";import"./sentry-DYy3Ltx-.js";import{t as x,E as w,a as ne,U as fe}from"./surfaces-X_L4gZ-Y.js";import{bE as p,bG as M,f as Ue,bu as be,cl as Te,bo as _e,bp as Be,a$ as He,c as je,ck as Fe,bx as P,by as R,cm as ze,H as Ge,b5 as Ve}from"./AppWrapper-Dv2SOsTr.js";import{aX as B,a5 as H,ax as Ye}from"./index-BEhlHXuB.js";import{f as We}from"./Chip_Default-B6cnjyVI.js";import{c as D}from"./copyrights-zSHbVF8S.js";import{O as Se,g as Ee,a as qe,b as Ke,u as Qe,c as Xe,d as Ze,e as Je,P as et}from"./hooks-PFoX8si6.js";import{p as tt,f as nt,n as st,a as at}from"./links-0YmEwuL1.js";import{p as rt,f as ot}from"./SearchInput_Default-a9JOdysi.js";import{o as it}from"./StatusIndicator-DPhgoYFF.js";import"./lodash-cGhQZeSM.js";import"./SearchInputSymbol-BG4U0pKQ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="33af5615-43f9-44ee-95f2-5f0553fc233e",e._sentryDebugIdIdentifier="sentry-dbid-33af5615-43f9-44ee-95f2-5f0553fc233e")}catch{}})();const se=["PENDING","NOTIFIED","RESOLVED"],lt=["all","POST","REPLY"],dt=["all","24h","7d","30d"],ct=["newest","oldest","status"],L=50,O=["PENDING","NOTIFIED"],A={search:"",statuses:[...O],tagIds:[],target:"all",range:"all",resolverId:null,sort:"newest",page:0},ae={PENDING:"New",NOTIFIED:"Awaiting reply",RESOLVED:"Resolved"},we={all:"All types",POST:"Posts",REPLY:"Replies"},Ae={all:"All time","24h":"Last 24 hours","7d":"Last 7 days","30d":"Last 30 days"},pt={newest:"Newest first",oldest:"Oldest first",status:"By status"},ut={"24h":24,"7d":7*24,"30d":30*24},xt=36e5,ce=6e4,$e="any",W=(e,s)=>e.some(n=>n===s),pe=e=>e===null?[]:e.split(",").map(s=>s.trim()).filter(s=>s!==""),V=e=>e.length===O.length&&O.every(s=>e.includes(s)),Ie=e=>e.length===0||e.includes("RESOLVED"),ht=e=>{const s=e.get("status"),n=pe(s),r=se.filter(b=>n.includes(b)),o=s===null?[...O]:s===$e||n.length===0?[]:r.length>0?r:[...O],c=e.get("target"),i=e.get("range"),a=e.get("sort"),u=Number.parseInt(e.get("page")??"",10);return{search:e.get("q")??"",statuses:o,tagIds:pe(e.get("tags")),target:W(lt,c)?c:A.target,range:W(dt,i)?i:A.range,resolverId:Ie(o)&&e.get("resolver")||null,sort:W(ct,a)?a:A.sort,page:Number.isFinite(u)&&u>1?u-1:0}},gt=e=>{const s=new URLSearchParams;return e.search.trim()!==""&&s.set("q",e.search.trim()),V(e.statuses)||s.set("status",e.statuses.length===0?$e:e.statuses.join(",")),e.tagIds.length>0&&s.set("tags",e.tagIds.join(",")),e.target!==A.target&&s.set("target",e.target),e.range!==A.range&&s.set("range",e.range),e.resolverId!==null&&Ie(e.statuses)&&s.set("resolver",e.resolverId),e.sort!==A.sort&&s.set("sort",e.sort),e.page>0&&s.set("page",String(e.page+1)),s},mt=e=>e.search.trim()!==""||!V(e.statuses)||e.tagIds.length>0||e.target!==A.target||e.range!==A.range||e.resolverId!==null,yt=(e,s)=>{if(e==="all")return null;const n=s.getTime()-ut[e]*xt;return new Date(Math.floor(n/ce)*ce)},vt=(e,s)=>{var n;return{status:e.statuses.length>0?e.statuses.join(","):void 0,tagIds:e.tagIds.length>0?e.tagIds.join(","):void 0,target:e.target==="all"?void 0:e.target,search:e.search.trim()===""?void 0:e.search.trim(),createdAfter:(n=yt(e.range,s))==null?void 0:n.toISOString(),resolvedByUserId:e.resolverId??void 0,sort:e.sort,limit:L,offset:e.page*L}},Ce=e=>e.length===0?"Any status":V(e)?"Unresolved":e.length===1?ae[e[0]]:`${e.length} statuses`,G=["PUBLIC","BETA","ALPHA"],Ne={PUBLIC:"General",BETA:"Early Access",ALPHA:"Alpha"},ft=e=>G.some(s=>s===e),re=e=>e.tags.map(s=>s.id),I=(e,s)=>{const n=re(e).filter(r=>s.includes(r));return{isSelected:n.length>0,narrowedTo:n.length===e.tags.length?[]:n}},Re=(e,s)=>{const n=re(e),r=s.filter(o=>!n.includes(o));return I(e,s).isSelected?r:[...r,...n]},ke=(e,s,n)=>{const r=re(e),o=s.filter(a=>!r.includes(a)),{narrowedTo:c}=I(e,s),i=c.includes(n)?c.filter(a=>a!==n):[...c,n];return[...o,...i.length===0?r:r.filter(a=>i.includes(a))]},bt=(e,s,n)=>{const r=[],o=new Set;for(const c of e){const i=s.find(a=>a.tags.some(u=>u.id===c));if(i===void 0){r.push({key:`tag:${c}`,text:n(c),next:e.filter(a=>a!==c)});continue}if(!o.has(i.key)){o.add(i.key),r.push({key:`category:${i.key}`,text:i.channel==="PUBLIC"?i.title:`${i.title} · ${Ne[i.channel]}`,next:Re(i,e)});for(const a of I(i,e).narrowedTo)r.push({key:`tag:${a}`,text:n(a),next:ke(i,e,a)})}}return r},q=(e,s)=>`${e} ${s}${e===1?"":"s"}`,Tt=(e,s)=>{let n=0,r=0;for(const c of s){const{isSelected:i,narrowedTo:a}=I(c,e);i&&(n+=1,r+=a.length)}const o=e.filter(c=>!s.some(i=>i.tags.some(a=>a.id===c))).length;return n+o===0?"Nothing selected":r===0?`${q(n+o,"tag")} selected`:`${q(n+o,"tag")} · ${q(r,"sub-tag")} selected`},jt=(e,s,n,r,o)=>{const c=[];V(e.statuses)||c.push({key:"status",text:`Status: ${Ce(e.statuses)}`,onClear:()=>o({statuses:[...O]})});const i=G.flatMap(a=>s[a]);for(const a of bt(e.tagIds,i,n))c.push({key:a.key,text:a.text,onClear:()=>o({tagIds:a.next})});return e.target!=="all"&&c.push({key:"target",text:we[e.target],onClear:()=>o({target:"all"})}),e.range!=="all"&&c.push({key:"range",text:Ae[e.range],onClear:()=>o({range:"all"})}),e.resolverId!==null&&c.push({key:"resolver",text:`Resolved by ${r(e.resolverId)}`,onClear:()=>o({resolverId:null})}),e.search.trim()!==""&&c.push({key:"search",text:`“${e.search.trim()}”`,onClear:()=>o({search:""})}),c},St=({filters:e,tiles:s,titleOf:n,resolverName:r,totalItems:o,onChange:c,onReset:i})=>{const a=jt(e,s,n,r,c);return t.jsxs(Et,{children:[t.jsx(wt,{"aria-label":"Active filters",children:a.map(u=>t.jsx(We,{color:"emphasis",onClear:u.onClear,children:u.text},u.key))}),t.jsxs(At,{children:[t.jsx(p,{variant:"body-secondary",elementType:"span",isNumeric:!0,children:o===void 0?"—":`${o} escalation${o===1?"":"s"}`}),mt(e)?t.jsx(M,{variant:"tertiary-neutral",size:"xsmall",onPress:i,children:"Reset filters"}):null]})]})},Et=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 16px;
  border-bottom: 1px solid ${x.hairline};
`,wt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-height: 24px;
`,At=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,ue=3,xe=({assignee:e})=>t.jsx(be,{username:e.name,avatarDetails:{image:e.avatarUrl},size:"medium"}),$t=({assignees:e})=>{if(e.length===0)return t.jsx(p,{variant:"body-secondary",elementType:"span",children:"—"});const s=e.length-ue;return t.jsx(Ue,{placement:"bottom start",description:t.jsxs(Nt,{children:[t.jsx(w,{children:"Assigned"}),e.map(n=>t.jsxs(Rt,{children:[t.jsx(xe,{assignee:n}),t.jsx(p,{variant:"body-secondary",elementType:"span",children:n.name})]},n.slackUserId??n.name))]}),children:t.jsxs(It,{tabIndex:0,"aria-label":`Assigned: ${e.map(n=>n.name).join(", ")}`,children:[t.jsx(Ct,{"aria-hidden":!0,children:e.slice(0,ue).map(n=>t.jsx(xe,{assignee:n},n.slackUserId??n.name))}),s>0?t.jsxs(p,{variant:"caption",weight:"bold",elementType:"span",children:["+",s]}):null]})})},It=d.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 12px;

  &:focus-visible {
    outline: 2px solid ${x.accent};
    outline-offset: 2px;
  }
`,Ct=d.span`
  display: inline-flex;

  /* Each face overlaps the one before it, ringed in the row's colour. */
  > * {
    border-radius: 50%;
    box-shadow: 0 0 0 2px ${x.surface};
  }

  > * + * {
    margin-left: -6px;
  }
`,Nt=d.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 2px 0;
  text-align: left;
`,Rt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,kt={TEXT:H.Text,IMAGES:H.Images,VIDEO:H.Video,ATTACHMENTS:H.Attachments},Lt=e=>Be(e.map(s=>({...s,type:kt[s.type]}))),Ot={BODY:null,IMPORTANT_NOTES:D.importantNotes.label,NEW_FEATURES:"Features",IMPROVEMENTS:D.improvements.label,BUGFIXES:D.bugfixes.label,KNOWN_ISSUES:D.knownIssues.label,INSTRUCTIONS:D.instructions.label},Pt=e=>e.threadType==="QUESTION"?e.replyId===null?B.Question:B.Answer:e.replyId===null?B.Release:B.Comment,Dt=({item:e})=>{if(e.content.length===0)return t.jsx(p,{variant:"body-primary",color:"text-2",elementType:"p",children:"The text of this post or reply is no longer available."});const s={entityId:e.replyId??e.threadId,entityType:Pt(e)};return t.jsx(Mt,{children:e.content.map(n=>{var o;const r=Ot[n.kind];return t.jsxs("section",{children:[r!==null?t.jsx(Te,{variant:"body-primary",weight:"bold",elementType:"h3",children:r}):null,t.jsx(_e,{editorState:Lt(n.content),authorId:((o=e.author.sourceAuthor)==null?void 0:o.id)??e.author.id,attachmentDownloadOptions:s})]},n.kind)})})},Mt=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 70ch;
  min-width: 0;
  overflow-wrap: anywhere;
`,Le=6e4,z=60*Le,K=24*z,ee=e=>{if(e<z)return`${Math.max(1,Math.round(e/Le))}m`;if(e<2*K)return`${Math.round(e/z)}h`;let s=Math.floor(e/K),n=Math.round((e-s*K)/z);return n===24&&(s+=1,n=0),n===0?`${s}d`:`${s}d ${n}h`},U=e=>He(e,"D MMM, HH:mm"),Ut=1600,_t=e=>{var s;return[{label:"Mentioned @ui-team",time:U(e.createdAt),tone:x.accent},e.notifiedAt?{label:"Posted to Slack",time:U(e.notifiedAt),tone:x.muted}:{label:"Not yet posted to Slack",time:"pending",tone:x.notice},e.status==="RESOLVED"&&e.resolvedAt?{label:`Resolved by ${((s=e.resolvedBy)==null?void 0:s.username)??"the UI team"}`,time:U(e.resolvedAt),tone:x.positive}:{label:"Awaiting resolution",time:"—",tone:x.hairline}]},Bt=({id:e,item:s,url:n,onToggleResolution:r,isMutating:o})=>{var g,m;const[c,i]=S.useState(!1),{author:a}=s,u=a.sourceAuthor&&a.sourceAuthor.username!==a.username?a.sourceAuthor:null;S.useEffect(()=>{if(!c)return;const h=window.setTimeout(()=>i(!1),Ut);return()=>window.clearTimeout(h)},[c]);const b=async()=>{try{await navigator.clipboard.writeText(n),i(!0)}catch{}};return t.jsxs(Ht,{id:e,children:[t.jsxs(Ft,{children:[t.jsxs(zt,{children:[t.jsx(be,{username:a.username,isEmployee:a.isEmployee,isOfficial:a.showOfficialBadge,avatarDetails:{image:(g=a.avatar)==null?void 0:g.image,acronym:(m=a.avatar)==null?void 0:m.content},size:"medium"}),t.jsx(p,{variant:"body-secondary",weight:"bold",color:"text-1",children:a.username}),u?t.jsxs(p,{variant:"body-secondary",children:["@",u.username]}):null,t.jsx(p,{variant:"body-secondary",children:U(s.createdAt)})]}),t.jsx(Dt,{item:s}),t.jsxs(Gt,{children:[t.jsx(M,{variant:"emphasis",size:"small",onPress:()=>window.open(n,"_blank","noopener,noreferrer"),children:"Open in Community"}),t.jsx(M,{variant:"secondary-neutral",size:"small",isPending:o,onPress:r,children:s.status==="RESOLVED"?"Reopen":"Mark resolved"}),t.jsx(M,{variant:"tertiary-neutral",size:"small",onPress:b,children:c?"Link copied":"Copy link"})]})]}),t.jsxs(Vt,{"aria-label":"Timeline",children:[t.jsx(w,{children:"Timeline"}),_t(s).map(h=>t.jsxs(Yt,{children:[t.jsx(Wt,{$tone:h.tone}),t.jsxs("div",{children:[t.jsx(p,{variant:"body-secondary",color:"text-1",elementType:"p",children:h.label}),t.jsx(p,{variant:"caption",elementType:"p",children:h.time})]})]},h.label))]})]})},Ht=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 24px;
  padding: 4px 16px 20px 60px;
  background: ${x.page};
  border-top: 1px solid ${x.hairline};

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    padding-left: 16px;
  }
`,Ft=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`,zt=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
`,Gt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 2px;
`,Vt=d.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
`,Yt=d.div`
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr);
  gap: 10px;
  align-items: baseline;
`,Wt=d.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>e.$tone};
`,Oe=De`
  display: grid;
  grid-template-columns: 20px 120px minmax(0, 1fr) 164px 104px 62px;
  gap: 10px;
  align-items: center;
`,qt=36e5,Kt={PENDING:"emphasis",NOTIFIED:"notice",RESOLVED:"positive"},Qt={PENDING:"ublue-06",NOTIFIED:"notice",RESOLVED:"positive"},Q=(e,s)=>(e??[]).map(n=>({id:n,type:s})),he=e=>e.stopPropagation(),Xt=({item:e,now:s,isExpanded:n,onToggle:r,titleOf:o,onToggleResolution:c,isMutating:i})=>{var T,E,$,y;const a=s.getTime()-new Date(e.createdAt).getTime(),u=e.status!=="RESOLVED"&&a>Se*qt,b=`escalation-${e.id}-detail`,g=tt(e),[m,...h]=[...Q((T=e.thread)==null?void 0:T.tags,"general"),...Q((E=e.thread)==null?void 0:E.betas,"beta"),...Q(($=e.thread)==null?void 0:$.alphas,"alpha")];return t.jsxs(Zt,{$isExpanded:n,children:[t.jsxs(Jt,{onClick:r,children:[t.jsx(F,{onClick:he,children:t.jsx(rt,{isExpanded:n,onPress:r,size:"xsmall",variant:"tertiary-neutral","aria-label":n?"Collapse":"Expand","aria-controls":b})}),t.jsxs(F,{children:[t.jsx(it,{status:u?"destructive":Kt[e.status],size:"medium"}),t.jsx(p,{variant:"body-secondary",weight:"bold",color:u?"destructive":Qt[e.status],elementType:"span",children:ae[e.status]})]}),t.jsxs(en,{children:[t.jsxs(tn,{children:[t.jsx(w,{children:e.target==="POST"?"Post":"Reply"}),t.jsx(nn,{href:g,target:"_blank",rel:"noopener noreferrer",onClick:he,children:t.jsx(p,{variant:"body-primary",weight:"bold",color:"text-1",elementType:"span",isTruncated:!0,children:((y=e.thread)==null?void 0:y.title)??"Deleted thread"})})]}),t.jsx(p,{variant:"body-secondary",color:"text-2",elementType:"span",isTruncated:!0,children:e.text})]}),t.jsx(F,{children:m===void 0?t.jsx(p,{variant:"body-secondary",elementType:"span",children:"—"}):t.jsxs(t.Fragment,{children:[t.jsx(je,{type:m.type,title:o(m.id),size:"small",isSelected:!0,forceDefaultCursor:!0}),h.length>0?t.jsxs(p,{variant:"caption",elementType:"span",title:h.map(N=>o(N.id)).join(", "),children:["+",h.length]}):null]})}),t.jsx(F,{children:t.jsx($t,{assignees:e.assignees})}),t.jsx(p,{variant:"body-secondary",weight:u?"bold":"regular",color:u?"destructive":"text-2",elementType:"span",isNumeric:!0,children:ee(a)})]}),n?t.jsx(Bt,{id:b,item:e,url:g,onToggleResolution:c,isMutating:i}):null]})},Zt=d.li`
  list-style: none;
  border-bottom: 1px solid ${x.hairline};
  background: ${e=>e.$isExpanded?x.hover:"transparent"};
`,Jt=d.div`
  ${Oe}
  padding: 9px 16px;
  cursor: pointer;

  &:hover {
    background: ${x.hover};
  }
`,F=d.div`
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
`,en=d.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,tn=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;

  /* The eyebrow keeps its width; the title takes the rest and ellipsizes. */
  > :first-child {
    flex: none;
  }
`,nn=d.a`
  /* A flex box, so the title inside is a flex item and still ellipsizes. */
  display: flex;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  border-radius: 2px;

  /* Doubled so the hover colour beats the Text's own. */
  &&:hover > *,
  &&:focus-visible > * {
    color: ${x.accent};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${x.accent};
    outline-offset: 2px;
  }
`,sn=({items:e,totalItems:s,page:n,isLoading:r,error:o,now:c,expandedId:i,onToggle:a,titleOf:u,onToggleResolution:b,mutatingId:g,onPageChange:m})=>{const h=s??0,T=Math.max(1,Math.ceil(h/L)),E=h===0?0:n*L+1,$=Math.min(h,(n+1)*L);return t.jsxs("div",{children:[t.jsxs(an,{"aria-hidden":!0,children:[t.jsx("span",{}),t.jsx(w,{children:"Status"}),t.jsx(w,{children:"Escalation"}),t.jsx(w,{children:"Tag"}),t.jsx(w,{children:"Assigned"}),t.jsx(w,{children:"Age"})]}),o?t.jsxs(X,{children:[t.jsx(p,{variant:"body-primary",weight:"bold",color:"destructive",children:"The queue could not be loaded."}),t.jsx(p,{variant:"body-secondary",children:Ee(o)})]}):e===void 0&&r?t.jsx(X,{children:t.jsx(Fe,{})}):e===void 0||e.length===0?t.jsxs(X,{children:[t.jsx(p,{variant:"body-primary",weight:"bold",color:"text-1",children:"No escalations match these filters"}),t.jsx(p,{variant:"body-secondary",children:"Clear the tag or date filter to widen the queue."})]}):t.jsx(rn,{children:e.map(y=>t.jsx(Xt,{item:y,now:c,isExpanded:i===y.id,onToggle:()=>a(y.id),titleOf:u,onToggleResolution:()=>b(y),isMutating:g===y.id},y.id))}),h>L?t.jsx(on,{children:t.jsx(nt,{caption:`${E}–${$} of ${h}`,isDisabled:n===0&&n>=T-1?!0:n===0?"previous":n>=T-1?"next":!1,onPress:y=>m(y==="next"?n+1:n-1)})}):null]})},an=d.div`
  ${Oe}
  padding: 8px 16px;
  border-bottom: 1px solid ${x.hairline};
  background: ${x.page};
`,rn=d.ul`
  margin: 0;
  padding: 0;
`,X=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 56px 16px;
  text-align: center;
`,on=d.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 16px;
`,k="—",ln=(e,s)=>[{label:"Unresolved",value:e?String(e.unresolved):k,hint:`${e?e.overdue:k} past ${Se}h`,isAlarming:e!==void 0&&e.overdue>0},{label:"Oldest unresolved",value:e!=null&&e.oldestUnresolvedCreatedAt?ee(s.getTime()-new Date(e.oldestUnresolvedCreatedAt).getTime()):k,hint:"since first @ui-team mention"},{label:"New in 24h",value:e?String(e.createdLast24h):k,hint:"arrived today"},{label:"Resolved this week",value:e?String(e.resolvedLast7d):k,hint:"last 7 days"},{label:"Median time to resolve",value:(e==null?void 0:e.medianResolutionSeconds)!=null?ee(e.medianResolutionSeconds*1e3):k,hint:"created → resolved"}],dn=({stats:e,now:s})=>t.jsx(cn,{"aria-label":"Escalation health",children:ln(e,s).map(n=>t.jsxs(pn,{as:"div",children:[t.jsx(w,{children:n.label}),t.jsx(p,{variant:"heading-xlarge-2",elementType:"p",isNumeric:!0,color:n.isAlarming?"destructive":"text-1",children:n.value}),t.jsx(p,{variant:"caption",elementType:"p",children:n.hint})]},n.label))}),cn=d.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  gap: 10px;
`,pn=d(ne)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
`,un=300,Z="all",xn=e=>se.some(s=>s===e),te=e=>Array.isArray(e)?e.map(String):e==null?[]:[String(e)],J=(e,s,n)=>{const[r]=te(s);return e.find(o=>o===r)??n},ge=["all","POST","REPLY"],me=["all","24h","7d","30d"],ye=["newest","oldest","status"],hn=({filters:e,statusCounts:s,resolvers:n,onChange:r})=>{var i;const[o,c]=S.useState(e.search);return S.useEffect(()=>{c(e.search)},[e.search]),S.useEffect(()=>{if(o===e.search)return;const a=window.setTimeout(()=>r({search:o}),un);return()=>window.clearTimeout(a)},[o,e.search,r]),t.jsxs(gn,{children:[t.jsx(mn,{children:t.jsx(ot,{"aria-label":"Search escalations",placeholder:"Search title, body, author or thread id",value:o,onChange:c,width:"full"})}),t.jsx(P,{"aria-label":"Status",selectionMode:"multiple",size:"small",minWidth:150,value:e.statuses,onChange:a=>r({statuses:te(a).filter(xn)}),selectorValue:Ce(e.statuses),children:se.map(a=>t.jsx(R.Item,{id:a,label:ae[a],data:s?String(s[a]):void 0},a))}),t.jsx(P,{"aria-label":"Thread type",size:"small",minWidth:130,value:e.target,onChange:a=>r({target:J(ge,a,"all")}),children:ge.map(a=>t.jsx(R.Item,{id:a,label:we[a]},a))}),t.jsx(P,{"aria-label":"Date range",size:"small",minWidth:150,value:e.range,onChange:a=>r({range:J(me,a,"all")}),children:me.map(a=>t.jsx(R.Item,{id:a,label:Ae[a]},a))}),t.jsxs(P,{"aria-label":"Resolved by",size:"small",minWidth:150,value:e.resolverId??Z,onChange:a=>{const[u]=te(a);r(u===Z||u===void 0?{resolverId:null}:{resolverId:u,statuses:["RESOLVED"]})},selectorValue:e.resolverId===null?"Resolved by anyone":`Resolved by ${((i=n.find(a=>a.id===e.resolverId))==null?void 0:i.username)??"…"}`,children:[t.jsx(R.Item,{id:Z,label:"Anyone"}),n.map(a=>t.jsx(R.Item,{id:a.id,label:a.username},a.id))]}),t.jsx(P,{"aria-label":"Sort",size:"small",minWidth:140,value:e.sort,onChange:a=>r({sort:J(ye,a,"newest")}),children:ye.map(a=>t.jsx(R.Item,{id:a,label:pt[a]},a))})]})},gn=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid ${x.hairline};
`,mn=d.div`
  flex: 1 1 260px;
  min-width: 220px;
`,ve={PUBLIC:x.accent,BETA:x.notice,ALPHA:x.destructive},yn={PUBLIC:"ublue-06",BETA:"orange-06",ALPHA:"red-06"},vn={PUBLIC:"general",BETA:"beta",ALPHA:"alpha"},fn=({byChannel:e,tiles:s,tagIds:n,onChange:r})=>{var _;const o=G.filter(l=>s[l].length>0),c=S.useMemo(()=>G.flatMap(l=>s[l]),[s]),[i,a]=S.useState(null),u=(_=c.find(l=>I(l,n).isSelected))==null?void 0:_.channel,b=i??u??"PUBLIC",g=o.includes(b)?b:"PUBLIC",m=e==null?void 0:e.find(l=>l.channel===g),h=new Map;for(const{category:l,count:v}of(m==null?void 0:m.categories)??[]){const f=ze(l);h.set(f,(h.get(f)??0)+v)}const T=s[g],E=l=>h.get(l)??0,$=Math.max(1,...T.map(l=>E(l.category))),y=T.filter(l=>E(l.category)>0).length,N=T.filter(l=>l.tags.length>1&&I(l,n).isSelected);return t.jsxs(bn,{children:[t.jsxs(Tn,{children:[t.jsxs(jn,{children:[t.jsx(w,{children:"Unresolved by tag"}),t.jsx(p,{variant:"caption",elementType:"span",children:m===void 0?"—":`${m.count} open across ${y} tag${y===1?"":"s"}`})]}),t.jsxs(Sn,{children:[t.jsx(p,{variant:"caption",elementType:"span",children:Tt(n,c)}),t.jsx(wn,{$isHidden:n.length===0,children:t.jsx(M,{variant:"tertiary-neutral",size:"xsmall",isDisabled:n.length===0,onPress:()=>r([]),children:"Clear"})}),o.length>1?t.jsx(En,{"aria-label":"Channel",gap:4,selectionMode:"single",disallowEmptySelection:!0,selectedKeys:[g],onSelectionChange:l=>{const[v]=[...l];ft(v)&&a(v)},children:o.map(l=>t.jsx(st,{id:l,size:"small",variant:"tertiary",children:t.jsx(p,{variant:"caption",elementType:"span",weight:l===g?"bold":void 0,color:l===g?yn[l]:"text-3",children:Ne[l]})},l))}):null]})]}),T.length===0?t.jsx(p,{variant:"body-secondary",elementType:"p",children:"Loading…"}):t.jsx(An,{children:T.map(l=>{const v=E(l.category),{isSelected:f}=I(l,n);return t.jsxs($n,{type:"button","aria-pressed":f,"aria-label":`${l.title}, ${m===void 0?"loading":`${v} unresolved`}`,onClick:()=>r(Re(l,n)),$color:ve[g],$isSelected:f,children:[t.jsx(p,{variant:"body-secondary",weight:f?"bold":void 0,color:v>0?"text-1":"text-3",elementType:"span",isTruncated:!0,children:l.title}),t.jsx(p,{variant:"body-secondary",weight:"bold",isNumeric:!0,elementType:"span",color:v>0?"text-1":"text-4",children:m===void 0?"—":v}),t.jsx(In,{children:t.jsx(Cn,{$ratio:v/$,$color:ve[g]})})]},l.key)})}),N.map(l=>{const{narrowedTo:v}=I(l,n);return t.jsxs(Nn,{"aria-label":`Narrow ${l.title} by product`,children:[t.jsxs(p,{variant:"body-secondary",color:"text-2",elementType:"span",children:["Narrow ",l.title," by product"]}),t.jsx(Rn,{children:l.tags.map(f=>t.jsx(kn,{type:"button","aria-pressed":v.includes(f.id),onClick:()=>r(ke(l,n,f.id)),children:t.jsx(je,{type:vn[g],title:f.title,size:"small",isSelected:v.includes(f.id)})},f.id))})]},l.key)})]})},bn=d(ne)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px 16px;
`,Tn=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 16px;
`,jn=d.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`,Sn=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,En=d(at)`
  padding: 3px;
  border: 1px solid ${x.hairline};
  border-radius: 8px;
  background: ${x.page};
`,wn=d.span`
  visibility: ${e=>e.$isHidden?"hidden":"visible"};
`,An=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 8px;
`,$n=d(fe)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 6px 10px;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid ${e=>e.$isSelected?e.$color:x.hairline};
  border-radius: 6px;
  background: ${e=>e.$isSelected?x.hover:"transparent"};
  text-align: left;

  &:hover {
    border-color: ${e=>e.$isSelected?e.$color:x.strongHairline};
  }

  &:focus-visible {
    border-radius: 6px;
  }
`,In=d.div`
  grid-column: 1 / -1;
  height: 4px;
  border-radius: 2px;
  background: ${x.hairline};
  overflow: hidden;
`,Cn=d.div`
  height: 100%;
  width: ${e=>Math.round(e.$ratio*100)}%;
  border-radius: 2px;
  background: ${e=>e.$color};
`,Nn=d.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid ${x.hairline};
`,Rn=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,kn=d(fe)`
  display: inline-flex;
  border-radius: 20px;

  /* Without an onClick of its own TagButton sets a default cursor. */
  && * {
    cursor: inherit;
  }

  &:focus-visible {
    border-radius: 20px;
  }
`,Ln=6e4,Kn=()=>{var l,v,f,oe,ie,le,de;const[e,s]=Me(),n=S.useMemo(()=>ht(e),[e]),r=S.useCallback(j=>{s(gt({...n,page:0,...j}),{replace:!0})},[n,s]),o=qe(Ln),c=S.useMemo(()=>vt(n,o),[n,o]),i=Ke(c),a=Qe(et),{tiles:u,titleOf:b}=Xe(),[g,m]=S.useState(null),[h,T]=S.useState(null),E=Ze(),$=Je(),y=async j=>{const C=j.status==="RESOLVED",Y=C?$:E;T(j.id);try{await Y.mutateAsync({params:{path:{id:j.id}}})}catch(Pe){Ve(C?"Could not reopen the escalation":"Could not mark the escalation resolved",[Ee(Pe)])}finally{T(null)}},N=((l=a.data)==null?void 0:l.resolvers)??[],_=j=>{var C;return((C=N.find(Y=>Y.id===j))==null?void 0:C.username)??"unknown"};return t.jsxs(On,{children:[t.jsx(Ge,{children:t.jsx("title",{children:`Escalations | Management Console | ${Ye}`})}),t.jsxs(Pn,{children:[t.jsxs("div",{children:[t.jsx(Te,{variant:"xlarge-2",elementType:"h1",children:"Escalations"}),t.jsx(p,{variant:"body-primary",color:"text-2",elementType:"p",children:"Posts and replies that tagged @ui-team, mirrored to #community-escalations."})]}),t.jsx(p,{variant:"body-secondary",elementType:"p",children:(v=a.data)!=null&&v.lastNotifiedAt?`Synced with Slack ${U(a.data.lastNotifiedAt)}`:"Not yet synced with Slack"})]}),t.jsx(dn,{stats:a.data,now:o}),t.jsx(fn,{byChannel:(f=a.data)==null?void 0:f.unresolvedByChannel,tiles:u,tagIds:n.tagIds,onChange:j=>r({tagIds:j})}),t.jsxs(ne,{children:[t.jsx(hn,{filters:n,statusCounts:(oe=i.data)==null?void 0:oe.statusCounts,resolvers:N,onChange:r}),t.jsx(St,{filters:n,tiles:u,titleOf:b,resolverName:_,totalItems:(ie=i.data)==null?void 0:ie.totalItems,onChange:r,onReset:()=>r({...A,sort:n.sort})}),t.jsx(sn,{items:(le=i.data)==null?void 0:le.items,totalItems:(de=i.data)==null?void 0:de.totalItems,page:n.page,isLoading:i.isLoading,error:i.error,now:o,expandedId:g,onToggle:j=>m(C=>C===j?null:j),titleOf:b,onToggleResolution:y,mutatingId:h,onPageChange:j=>r({page:j})})]})]})},On=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1280px;
  margin: 0 auto;
`,Pn=d.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px 24px;

  /* UIC's Heading and Text reset their margins, so the spacing is ours. */
  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;export{Kn as default};
//# sourceMappingURL=Escalations-05y3UVQD.js.map
