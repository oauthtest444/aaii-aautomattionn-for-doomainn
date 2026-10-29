import{q as he,r as j,j as e,e as a,L,F as ue}from"./react-DGhZhtub.js";import{as as v,dD as ge,cZ as F,cY as me,cA as u,cv as $,ic as fe,a as oe,dG as le,cQ as je,dA as M,id as be,bD as H,bT as O,ie as Q,c0 as G,dM as ye,a$ as ve,f as _,bE as D,cd as we,ig as $e,dQ as Be,aZ as k,b5 as T,d as R,ih as Ce,aW as A,B as Se,ii as ke,ij as Pe,ik as Ie,il as Ae,e as Te,ea as Me,H as q,P as Y,d4 as z,im as Ue}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{W as P,h as p,x as B,co as x,Q as Ne,br as Re,cp as E,cq as Ee,ax as V,bi as We,P as Le}from"./index-BEhlHXuB.js";import{F as De}from"./FloatingBackButton-C4p_hegg.js";import{P as de,a as Fe}from"./ProfileCard-2Oz44QNw.js";import{a as He}from"./CheckboxGroup-BsvjTh7O.js";import{M as W}from"./MultilineTextField-Dy0Rjxkg.js";import{C as Oe}from"./CheckCircleOutline-CdsTtIMi.js";import"./lodash-cGhQZeSM.js";import"./Check-CvJD8OS_.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="f11bcd6b-0bfc-453f-8143-ed2dc5dc9b6f",t._sentryDebugIdIdentifier="sentry-dbid-f11bcd6b-0bfc-453f-8143-ed2dc5dc9b6f")}catch{}})();const ce=()=>{const t=he(),s=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(De,{backButtonRef:s}),e.jsxs(v,{ref:s,variant:"secondary",size:"medium",onClick:()=>t(-1),children:[e.jsx(ge,{variant:"twoTone",isActive:!0}),"Back"]})]})},Qe=({item:t})=>{var n;const s=P({query:`(max-width: ${p.medium})`}),i=()=>t.type===u.Warning?"Warning":t.type===u.Removed?"Ban removed":t.type===u.Day?"Banned for a day":t.type===u.Week?"Banned for a week":"Banned permanently",r=()=>t.type===u.Warning?"Warned":t.type===u.Removed?"Removed":"Banned",o=()=>new Date<new Date(t.expiresAt)?"Expires":"Expired";return e.jsxs(Ge,{children:[e.jsx(_e,{children:t.reason}),e.jsxs(qe,{children:[e.jsx("span",{children:e.jsx("strong",{children:i()})}),e.jsx(F,{label:r(),timeAt:t.createdAt,isBoldValue:!0,isShortFormat:s}),e.jsxs("span",{className:"ban-issuer",children:["By:",e.jsx(me,{xs:!0,user:t.author,noTitle:!0}),(n=t.author)==null?void 0:n.username]}),t.expiresAt&&e.jsx(F,{label:o(),timeAt:t.expiresAt,isBoldValue:!0,isShortFormat:s})]})]})},Ge=a.div`
  width: 100%;
  min-height: 80px;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:t})=>t.neutral01};
  }
`,_e=a.div`
  font: ${({size:t})=>t==="large"?B["desktop-heading-large"]:B["desktop-heading-medium"]};
  color: ${({theme:t,$read:s})=>s?t.text3:t.text1};
  font-weight: 500;
  word-break: break-word;
  width: 100%;
`,qe=a.div`
  display: flex;
  padding-top: 6px;
  gap: 8px;
  align-items: center;

  @media (max-width: 934px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  span {
    font: ${B["desktop-caption"]};
    color: ${({theme:t})=>t.text3};
    display: flex;
    align-items: center;

    strong {
      padding-left: 2px;
    }

    &.ban-issuer {
      display: inline-flex;
      gap: 4px;
    }
  }
`,Ye=()=>e.jsxs(ze,{children:[e.jsx($,{children:e.jsx(Ve,{children:e.jsx(Z,{$percentage:30,children:e.jsx(K,{$percentage:90})})})}),e.jsx($,{children:e.jsx(Ke,{children:e.jsx(Z,{$percentage:100,children:e.jsx(K,{$percentage:90})})})})]}),ze=a.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`,Ve=a.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
`,Ke=a.div`
  width: 100%;
  height: 24px;
  display: flex;
`,K=a.div`
  width: ${({$percentage:t})=>t}%;
  border-radius: 5px;
  background-color: ${({theme:t})=>t.neutral03};
`,Z=a.div`
  display: flex;
  justify-content: center;
  width: ${({$percentage:t})=>t}%;
`,Ze=({id:t})=>{const{loading:s,error:i,data:r}=fe({variables:{id:t}});if(i)return e.jsx(oe,{});if(s&&!r)return e.jsx(Ye,{});if(!r||!r.userBanHistory)return e.jsx(le,{});const{userBanHistory:o}=r;return o.length===0?e.jsx(Xe,{description:"User has never been banned",size:"large"}):e.jsx(e.Fragment,{children:o.map((n,l)=>e.jsxs(e.Fragment,{children:[e.jsx(Qe,{item:n},l),l<o.length-1&&e.jsx(Je,{})]}))})},Xe=a(je)`
  margin: 24px 0;
  padding-bottom: 24px;

  svg {
    height: 72px;
    width: 72px;
  }
`,Je=a(M)`
  width: calc(100% - 48px);
  margin: 0 24px;
`,w=()=>e.jsxs(et,{children:[e.jsx($,{children:e.jsx(X,{children:e.jsx(ee,{$percentage:50,children:e.jsx(J,{$percentage:90})})})}),e.jsx($,{children:e.jsx(X,{children:e.jsx(ee,{$percentage:100,children:e.jsx(J,{$percentage:90})})})})]}),et=a.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,X=a.div`
  width: 100%;
  height: 16px;
  display: flex;
`,J=a.div`
  width: ${({$percentage:t})=>t}%;
  border-radius: 5px;
  background-color: ${({theme:t})=>t.neutral03};
`,ee=a.div`
  display: flex;
  justify-content: space-between;
  width: ${({$percentage:t})=>t}%;
`,tt=({id:t})=>{const{loading:s,error:i,data:r}=be({variables:{id:t}});if(i)return e.jsx(oe,{});if(s&&!r)return e.jsxs(ne,{children:[e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{})]});if(!r||!r.user)return e.jsx(le,{});const{user:o}=r,{extraData:n}=o;return e.jsxs(ne,{children:[e.jsxs(b,{children:[e.jsx(y,{children:"Email"}),(n==null?void 0:n.email)??"-"]}),e.jsxs(b,{children:[e.jsx(y,{children:"Has Early Access"}),o.hasBetaAccess?"Yes":"No"]}),e.jsxs(b,{children:[e.jsx(y,{children:"SSO ID"}),e.jsxs(H,{alignItems:"center",gap:"desktop-spacing-xsmall",children:[(n==null?void 0:n.ssoId)??"-",e.jsx(O,{onPress:()=>{navigator.clipboard.writeText((n==null?void 0:n.ssoId)??""),G.success("SSO ID copied to clipboard",{autoClose:1e3})},size:"small",variant:"tertiary-neutral",children:e.jsx(Q,{})})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:"User ID"}),e.jsxs(H,{alignItems:"center",gap:"desktop-spacing-xsmall",children:[(o==null?void 0:o.id)??"-",e.jsx(O,{onPress:()=>{navigator.clipboard.writeText((o==null?void 0:o.id)??""),G.success("User ID copied to clipboard",{autoClose:1e3})},size:"small",variant:"tertiary-neutral",children:e.jsx(Q,{})})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:"Last online"}),`${ye(o.lastOnlineAt)} (${ve(o.lastOnlineAt,"MMMM Do, YYYY H:mm")})`]}),e.jsxs(b,{children:[e.jsx(y,{children:"Last Known IP"}),n!=null&&n.lastKnownIp?e.jsx(nt,{href:`https://ipapi.co/${n==null?void 0:n.lastKnownIp}`,target:"_blank",children:n==null?void 0:n.lastKnownIp}):"-"]}),e.jsxs(b,{children:[e.jsx(y,{children:"First Name"}),e.jsx(_,{description:(n==null?void 0:n.firstName)??"-",children:e.jsx(te,{children:(n==null?void 0:n.firstName)??"-"})})]}),e.jsxs(b,{children:[e.jsx(y,{children:"Last Name"}),e.jsx(_,{description:(n==null?void 0:n.lastName)??"-",children:e.jsx(te,{children:(n==null?void 0:n.lastName)??"-"})})]})]})},te=a(D)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ne=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  padding: 16px 24px 24px;

  color: ${({theme:t})=>t.text1};
`,b=a(D)`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,y=a(D)`
  color: ${({theme:t})=>t.text3} !important;
`,nt=a.a`
  color: ${({theme:t})=>t.text1} !important;
`,st=({id:t})=>{const s=P({query:`(max-width: ${p.tabletLarge})`}),[i,r]=j.useState("userData");return e.jsxs(rt,{children:[e.jsxs(at,{children:[!s&&e.jsx(ce,{}),e.jsx(it,{children:"Admin Panel"}),e.jsx(ot,{children:"Visible to employees only"})]}),e.jsxs(lt,{children:[e.jsx(dt,{tabs:[{id:"userData",label:"User Data"},{id:"banHistory",label:"Ban History"}],selectedTab:i,onSelectTab:o=>{r(o.id)},tabsClassName:"tabsGroup"}),e.jsx(ct,{}),i==="userData"&&e.jsx(tt,{id:t}),i==="banHistory"&&e.jsx(Ze,{id:t})]})]})},rt=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:t})=>t.neutral01};
  padding: 24px 0 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${p.small}) {
    border-radius: 0px;
  }
`,at=a.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
`,it=a.div`
  font: ${B["desktop-heading-xlarge-1"]};
  color: ${({theme:t})=>t.text0};
`,ot=a.div`
  display: flex;
  align-items: center;
  font: ${B["desktop-typography-heading-small"]};
  color: ${({theme:t})=>t.neutral08};
  padding: 2px 12px;
  border: ${({theme:t})=>`1px solid ${t.neutral03}`};
  font-weight: 500;
  border-radius: 40px;
`,lt=a.div`
  display: flex;
  flex-direction: column;
`,dt=a(we)`
  justify-content: flex-start;
  overflow: visible;
  padding: 0 24px;
  .tabsGroup {
    margin: 0;

    button {
      padding: 0 16px;
      display: flex;
      align-items: center;
      height: 36px;
    }
    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  ::after {
    z-index: 9;
  }
`,ct=a(M)`
  margin: -1px 24px 0 24px;
  width: calc(100% - 48px);
`,f=()=>{const t=P({query:`(max-width: ${p.mobileXLarge})`});return e.jsxs(xt,{$isSmallScreen:t,children:[e.jsxs($,{children:[e.jsxs(N,{children:[e.jsx(C,{$percentage:15}),!t&&e.jsx(C,{$percentage:5})]}),e.jsxs(N,{children:[e.jsx(C,{$percentage:30}),e.jsx(C,{$percentage:20})]}),t&&e.jsx(N,{children:e.jsx(C,{$percentage:10})})]}),e.jsx(pt,{})]})},C=a.div`
  width: ${({$percentage:t})=>t}%;
  border-radius: 5px;
  height: 20px;
  background-color: ${({theme:t})=>t.neutral03};
`,N=a.div`
  height: 24px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`,xt=a.div`
  margin: 16px 0;
  height: ${({$isSmallScreen:t})=>t?"72px":"48px"};
  width: 100%;
  padding: 0 16px;
`,pt=a(M)`
  width: 100%;
`,ht=()=>e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{}),e.jsx(f,{})]}),ut=()=>e.jsxs(gt,{children:[e.jsxs(mt,{children:[e.jsxs($,{children:[e.jsx(se,{children:e.jsx(S,{$percentage:25})}),e.jsxs(se,{$paddingTop:!0,children:[e.jsx(S,{$percentage:15}),e.jsx(S,{$percentage:15}),e.jsx(S,{$percentage:15}),e.jsx(S,{$percentage:15})]})]}),e.jsx(ft,{})]}),e.jsx(ht,{})]}),gt=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:t})=>t.neutral00};
  padding: 24px 0 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${p.small}) {
    border-radius: 0px;
  }
`,mt=a.div`
  height: 48px;
  width: 100%;
  padding: 0 16px;
`,se=a.div`
  height: max-content;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  width: 100%;
  padding-top: ${({$paddingTop:t})=>t?"8px":0};
`,S=a.div`
  width: ${({$percentage:t})=>t}%;
  border-radius: 5px;
  height: 20px;
  background-color: ${({theme:t})=>t.neutral03};
`,ft=a(M)`
  width: 100%;
  margin: 0 auto;
`,jt=({user:t,showAdminPanel:s})=>{const i=P({query:`(max-width: ${p.tabletLarge})`});return e.jsxs(bt,{children:[e.jsxs(yt,{children:[!s&&!i&&e.jsx(ce,{}),e.jsx(vt,{children:"Community Activity"})]}),e.jsx($e,{authorId:t.id,stats:t.stats})]})},bt=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${p.small}) {
    border-radius: 0px;
  }
`,yt=a.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
`,vt=a.div`
  font: ${B["desktop-heading-xlarge-1"]};
  color: ${({theme:t})=>t.text0};
`;class wt extends j.Component{constructor(){super(...arguments),this.name=Be(),this.handleChange=s=>{const{options:i,onChange:r}=this.props;r(i[parseInt(s.currentTarget.value)].value)}}render(){const{className:s,options:i,value:r}=this.props;return e.jsx("div",{className:s,children:i.map((o,n)=>e.jsx($t,{checked:o.value===r,className:k({"mt-10":n!==0}),disabled:o.disabled,name:this.name,onChange:this.handleChange,value:n,children:o.label},n))})}}const $t=({checked:t=!1,children:s,className:i,disabled:r=!1,name:o,onChange:n,value:l})=>e.jsxs("label",{className:k("group flex justify-start items-center",{"cursor-pointer":!r,"opacity-50":r},i),children:[e.jsx("input",{checked:t,className:k("absolute opacity-0 invisible",{"cursor-pointer":!r}),disabled:r,name:o,onChange:n,type:"radio",value:l}),e.jsx("div",{className:k("p-3 bg-transparent rounded-full mr-10",{"group-hover:bg-grey-lighter":!r}),children:e.jsx("div",{className:k("w-20 h-20 flex-no-grow flex-no-shrink rounded-full border","flex items-center justify-center",{"border-grey-light bg-white":!t},{"border-blue-dark bg-blue":t}),children:t&&e.jsx("div",{className:"w-5 h-5 p-3 flex-no-grow flex-no-shrink bg-white rounded-full"})})}),e.jsx("div",{className:"pt-2",children:s})]}),I={[x.Removed]:"Ban removed",[x.Warning]:"Warning",[x.Day]:"Ban for a day",[x.Week]:"Ban for a week",[x.Permanent]:"Ban permanently"},Bt=[{value:x.Warning,label:I[x.Warning],disabled:!0},{value:x.Day,label:I[x.Day]},{value:x.Week,label:I[x.Week]},{value:x.Permanent,label:I[x.Permanent]}];class Ct extends wt{}class St extends j.Component{constructor(){super(...arguments),this.state={isOpen:!1,banSent:!1,type:u.Permanent,messageToUser:"",reason:"",reportContent:!1,showBanSpammerPrompt:!1},this.renderChildren=()=>this.props.children({open:this.handleOpen}),this.handleOpen=()=>this.setState({isOpen:!0}),this.handleClose=()=>{this.setState({isOpen:!1})},this.getRefetchActivityQuery=()=>({query:Re,variables:{authorId:this.props.userId,sortBy:Ne.Latest,limit:20,offset:0}}),this.handleBan=s=>{if(this.state.reason.length<4){T("Error while banning: ",["Reason for banning is too short, it needs to be between 4 and 1000 characters long."]);return}else if(this.state.reason.length>1e3){T("Error while banning: ",["Reason for banning is too long, it needs to be between 4 and 1000 characters long."]);return}s({variables:{input:{userId:this.props.userId,type:this.state.type,reason:this.state.reason,messageToUser:this.state.messageToUser,reportContent:this.state.reportContent}},refetchQueries:[E,...this.state.reportContent?[this.getRefetchActivityQuery()]:[]]}).catch(o=>R("Error while banning",[o])),this.setState({banSent:!0})},this.handleShowBanSpammerPrompt=()=>this.setState({showBanSpammerPrompt:!0}),this.handleHideBanSpammerPrompt=()=>this.setState({showBanSpammerPrompt:!1}),this.handleBanSpammer=s=>{s({variables:{input:{userId:this.props.userId,type:u.Permanent,reason:"Spam account",messageToUser:"",reportContent:!0}},refetchQueries:[E,this.getRefetchActivityQuery()]}).catch(i=>R("Error while banning",[i])),this.setState({banSent:!0})},this.handleTypeChange=s=>{this.setState({type:s})},this.handleReasonChange=s=>this.setState({reason:s}),this.handleMessageChange=s=>this.setState({messageToUser:s}),this.handleReportContentChange=()=>this.setState(s=>({reportContent:!s.reportContent}))}render(){return this.state.isOpen?e.jsxs(e.Fragment,{children:[this.renderChildren(),!this.state.banSent&&e.jsx(Ce,{children:(s,{loading:i})=>this.state.showBanSpammerPrompt?e.jsx(A,{actionButtonLabel:"Ban",inProgress:i,inProgressActionButtonLabel:"Banning...",onAction:()=>this.handleBanSpammer(s),onClose:this.handleHideBanSpammerPrompt,isDangerous:!0,title:"Ban spammer permanently and hide all created content?"}):e.jsxs(A,{actionButtonDisabled:this.state.reason==="",actionButtonLabel:this.state.type===u.Warning?"Warn":"Ban",inProgress:i,inProgressActionButtonLabel:this.state.type===u.Warning?"Warning...":"Banning...",onAction:()=>this.handleBan(s),onClose:this.handleClose,isDangerous:!0,title:"",children:[e.jsxs("div",{className:"-mt-10",children:[e.jsx(Se,{className:"w-full rounded-6",dangerous:!0,onClick:this.handleShowBanSpammerPrompt,children:"Ban this account for spamming"}),e.jsx("div",{className:"mt-5 text-center text-12 text-grey",children:"or perform manual ban"})]}),e.jsx("div",{className:"text-grey-darker text-14 font-medium pt-10 pb-10",children:"Action type"}),e.jsx(Ct,{onChange:this.handleTypeChange,options:Bt,value:this.state.type}),e.jsx("div",{className:"text-grey-darker text-14 font-medium pt-20 pb-10",children:"User content"}),e.jsx(He,{checked:this.state.reportContent,onChange:this.handleReportContentChange,children:"Hide all content created by the user"}),e.jsx("div",{className:"text-grey-darker text-14 font-medium pt-20 pb-10",children:"Reason"}),e.jsx(W,{className:"border p-10 rounded-3 bg-primary",onChange:this.handleReasonChange,title:this.state.reason,placeholder:`Reason for ${this.state.type===u.Warning?"warning":"banning"}`}),e.jsxs("div",{className:"text-grey-darker text-14 font-medium pt-20 pb-10",children:["Message to the user",e.jsx("div",{className:"text-11 text-grey",children:"Optional, will be shown instead of the default message"})]}),e.jsx(W,{className:"border p-10 rounded-3 bg-primary",onChange:this.handleMessageChange,title:this.state.messageToUser,placeholder:"Message to the user"})]})}),this.state.banSent&&e.jsx(A,{title:"",onClose:this.handleClose,actionButtonLabel:"Close",hideCancel:!0,onAction:()=>this.state.isOpen=!1,children:e.jsxs("div",{className:"text-center -mt-10",children:[e.jsx(Oe,{color:"blue",size:64}),e.jsx("p",{className:"mt-5 text-grey-darker",children:`User has been 
                  ${this.state.type===u.Warning?"warned":"banned"}
                  !`})]})})]}):this.renderChildren()}}const kt=t=>{const[s,i]=j.useState(!1),[r,o]=j.useState(""),[n,{loading:l}]=ke(),c=()=>{if(r.length<4){T("Error while unbanning: ",["Reason for unbanning is too short, it needs to be between 4 and 1000 characters long."]);return}else if(r.length>1e3){T("Error while unbanning: ",["Reason for unbanning is too long, it needs to be between 4 and 1000 characters long."]);return}n({variables:{input:{userId:t.userId,reason:r}},refetchQueries:[E]}).catch(pe=>R("Error while unbanning",[pe]))},h=()=>i(!0),g=()=>i(!1),d=()=>t.children({open:h});return s?e.jsxs(e.Fragment,{children:[d(),e.jsx(A,{actionButtonDisabled:r==="",actionButtonLabel:"Remove",inProgress:l,inProgressActionButtonLabel:"Removing...",onAction:c,onClose:g,title:"Remove user ban?",children:e.jsx(W,{className:"border p-10 rounded-3 bg-primary",onChange:m=>o(m),title:r,placeholder:"Reason for removing ban"})})]}):e.jsx(e.Fragment,{children:d()})},Pt=({id:t})=>{const{loading:s,error:i,data:r}=Pe({variables:{id:t}});if(i||s||!(r!=null&&r.user))return null;const{user:o}=r;return e.jsx(e.Fragment,{children:o.isBannedUntil&&new Date<new Date(o.isBannedUntil)?e.jsx(kt,{userId:t,children:n=>e.jsx(v,{variant:"secondary",onClick:n.open,color:"danger",wrapClassName:"ban",full:!0,children:"Remove ban"})}):e.jsx(St,{userId:t,children:n=>e.jsx(v,{variant:"secondary",onClick:n.open,color:"danger",wrapClassName:"ban",full:!0,children:"Ban user"})})})},xe=({isAdmin:t,isModerator:s,isCurrentUserProfile:i,id:r,canDM:o})=>{const n=t,l=s&&!i,c=l&&!n;return e.jsxs(It,{$canDM:o,$hasSingleButton:c,children:[n&&e.jsx(v,{variant:"secondary",component:L,to:`/admin/user/${r}/edit`,wrapClassName:"settings",full:!0,children:"User Settings"}),l&&e.jsx(Pt,{id:r})]})},It=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .settings,
  .ban {
    max-width: 100%;
  }

  @media (max-width: ${p.tabletLarge}) {
    flex-direction: row;

    .settings,
    .ban {
      max-width: ${({$canDM:t})=>t?"50%":"33%"};
    }
  }

  @media (max-width: ${p.mobileLarge}) {
    .settings,
    .ban {
      max-width: ${({$hasSingleButton:t})=>t?"100%":"50%"};
    }
  }
`;var At={accountUrl:"https://account.ui.com"};const Tt=({username:t,userSlug:s,avatar:i,registered:r,lastOnline:o,stats:n,canDM:l,id:c,isAdmin:h,isModerator:g,isCurrentUserProfile:d,isEmployee:m})=>e.jsxs(e.Fragment,{children:[e.jsx(de,{username:t,userId:c,posts:n.questions,registeredAt:r,lastActiveAt:o,replies:n.answers+n.comments,score:n.score,solutions:n.solutions,userSlug:s,avatarDetails:i,isHoverManageEnabled:!0,isEmployee:m}),e.jsxs(Mt,{children:[(l||h||g)&&e.jsxs(e.Fragment,{children:[l&&e.jsx(v,{variant:"primary",Icon:e.jsx(Ie,{}),component:L,to:`/messages?user=${c}`,full:!0,children:"Message"}),(h||g&&!d)&&e.jsx(xe,{isAdmin:h,isModerator:g,isCurrentUserProfile:d,id:c,canDM:l})]}),d&&e.jsx(v,{href:`${At.accountUrl}/profile`,variant:"primary",target:"_blank",rel:"noopener noreferrer",children:"Manage Your UI Account"})]})]}),Mt=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;var Ut={accountUrl:"https://account.ui.com"};const Nt=({username:t,userSlug:s,avatar:i,registered:r,lastOnline:o,stats:n,canDM:l,id:c,isAdmin:h,isModerator:g,isCurrentUserProfile:d,isEmployee:m})=>e.jsxs(e.Fragment,{children:[e.jsx(de,{username:t,userId:c,posts:n.questions,registeredAt:r,lastActiveAt:o,replies:n.answers+n.comments,score:n.score,solutions:n.solutions,userSlug:s,avatarDetails:i,isHoverManageEnabled:!0,isEmployee:m}),e.jsxs(Rt,{children:[(l||h||g)&&e.jsxs(e.Fragment,{children:[l&&e.jsx(v,{variant:"primary",Icon:e.jsx(Ae,{}),component:L,to:`/messages?user=${c}`,wrapClassName:"message",full:!0,children:"Message"}),(h||g&&!d)&&e.jsx(xe,{isAdmin:h,isModerator:g,isCurrentUserProfile:d,id:c,canDM:l})]}),d&&e.jsx(v,{href:`${Ut.accountUrl}/profile`,variant:"primary",target:"_blank",rel:"noopener noreferrer",children:"Manage Your UI Account"})]})]}),Rt=a.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;

  .message {
    max-width: 33%;
  }

  div > div {
    min-width: fit-content;
  }

  @media (max-width: ${p.mobileLarge}) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .message {
      max-width: 100%;
    }
  }
`,Et=({canDM:t,id:s,avatar:i,stats:r,registered:o,lastOnline:n,username:l,userSlug:c,isEmployee:h})=>{const g=P({query:`(max-width: ${p.tabletLarge})`}),{user:d}=j.useContext(Te),m=d.data.id===s,U=d.isPermittedToStartConversation&&t&&!m;return g?e.jsx(Nt,{stats:r,avatar:i,registered:o,lastOnline:n,username:l,userSlug:c,id:s,isModerator:d.isModerator,isAdmin:d.isAdmin,canDM:U,isCurrentUserProfile:m,isEmployee:h}):e.jsx(Tt,{stats:r,avatar:i,registered:o,lastOnline:n,username:l,userSlug:c,id:s,isModerator:d.isModerator,isAdmin:d.isAdmin,canDM:U,isCurrentUserProfile:m,isEmployee:h})},zt=()=>{const{id:t}=ue(),{hasPermission:s}=j.useContext(Me);j.useEffect(()=>{window.scrollTo(0,0)},[t]);const{data:i,loading:r,error:o}=Ee({variables:{id:t},skip:!t});if(r)return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:`User profile | ${V}`})}),e.jsx(Y,{children:e.jsxs(re,{children:[e.jsx(ae,{children:e.jsx(ut,{})}),e.jsx(ie,{children:e.jsx(Fe,{})})]})})]});if(o)return We(o)?e.jsx(z,{}):e.jsx(Ue,{});if(!(i!=null&&i.user))return e.jsx(z,{});const{user:n}=i,l=s(Le.ViewExtendedUserProfile);return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:`${r?"User profile":n.username} | ${V}`})}),e.jsx(Y,{children:e.jsxs(re,{children:[e.jsxs(ae,{children:[l&&e.jsx(st,{id:n.id}),e.jsx(jt,{user:n,showAdminPanel:l})]}),e.jsx(ie,{children:e.jsx(Et,{avatar:n.avatar,stats:n.stats,registered:n.registeredAt,lastOnline:n.lastOnlineAt,canDM:n.canStartConversationWith,id:n.id,username:n.username,userSlug:n.slug,isEmployee:n.isEmployee})})]})})]})},re=a.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: ${p.tabletLarge}) {
    flex-direction: column-reverse;
  }
`,ae=a.div`
  max-width: 894px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ie=a.div`
  min-width: 280px;
  width: 280px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.neutral01};
  border-radius: 8px;
  padding: 24px;
  gap: 24px;

  @media (max-width: ${p.tabletLarge}) {
    width: 100%;
  }
`;export{zt as default};
//# sourceMappingURL=Profile-CwVygwwz.js.map
