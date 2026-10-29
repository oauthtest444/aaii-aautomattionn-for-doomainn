import{r as c,j as e,e as o}from"./react-DGhZhtub.js";import{a6 as d,b3 as l,cs as t,B as r}from"./index-BEhlHXuB.js";import{e as p,H as x}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new i.Error().stack;n&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[n]="d0853d7b-1a8e-4cbd-8ddf-ed41d419e330",i._sentryDebugIdIdentifier="sentry-dbid-d0853d7b-1a8e-4cbd-8ddf-ed41d419e330")}catch{}})();const $=()=>{const{user:i}=c.useContext(p);return e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsx("title",{children:"Ubiquiti - Early Access"}),e.jsx("meta",{name:"robots",content:"noindex"})]}),e.jsx(g,{children:e.jsx("p",{children:"This part of community is for Early Access Users"})}),e.jsx("div",{style:{margin:"0 9px"},children:e.jsx(h,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Early Access"}),e.jsx(b,{children:"Get Exclusive Access to the Future of Ubiquiti"}),d(i.data)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Login or create an account and enroll in our Early Access program."}),e.jsx(a,{onClick:()=>i.loginUser(),children:"Log In"}),e.jsx(f,{onClick:()=>l(),children:"Sign Up"})]}),!d(i)&&e.jsxs(e.Fragment,{children:[e.jsx(s,{children:"Opt-in to our Early Access program to get started."}),e.jsx(a,{children:e.jsx("a",{href:"https://account.ui.com/profile",children:"Join EA"})})]})]})})})]})},g=o.div`
  display: flex;
  align-items: center;
  background-color: ${t.darkAthensGray};
  justify-content: center;
  padding: 13px 0;
  margin-bottom: 75px;
  p {
    font-size: 14px;
    color: ${t.regularGray};
    line-height: 22px;
  }
`,h=o.div`
  max-width: 990px;
  display: flex;
  background-image: url('/images/early-access.png'),
    linear-gradient(101.4deg, #000000 0%, #292929 100%);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size:
    100% auto,
    100%;
  border-radius: 9px;
  margin: 0 auto;
  align-self: center;
  color: ${t.white};
  overflow-y: visible;
  @media (max-width: ${r.md}px) {
    background-size: cover, 100%;
    background-position: left bottom;
  }
`,m=o.div`
  padding: 65px 60px;
  @media (max-width: 924px) {
    padding: 45px 45px;
  }
`,u=o.h1`
  font-size: 25px;
  line-height: 30px;
  padding-bottom: 30px;

  @media (max-width: 924px) {
    padding-bottom: 20px;
  }
`,b=o.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  padding-bottom: 15px;
  width: 60%;

  @media (max-width: 924px) {
    padding-bottom: 10px;
  }

  @media (max-width: ${r.sm}px) {
    width: 70%;
  }

  @media (max-width: 471px) {
    width: 100%;
  }
`,s=o.p`
  font-size: 16px;
  line-height: 22px;
  color: ${t.graySuit};
  margin-bottom: 50px;
  width: 50%;

  @media (max-width: 924px) {
    margin-bottom: 30px;
  }

  @media (max-width: ${r.sm}px) {
    width: 70%;
  }

  @media (max-width: 471px) {
    width: 90%;
  }
`,a=o.button`
  background-color: ${t.blueRibbon};
  color: ${t.white};
  padding: 12px 40px;
  border-radius: 3px;
  margin-right: 20px;
  font-size: 14px;
  line-height: 22px;
  &:hover {
    background-color: ${t.dodgerBlue};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`,f=o.button`
  border: 1px solid ${t.blueRibbon};
  background-color: transparent;
  color: ${t.blueRibbon};
  padding: 12px 40px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  &:hover {
    background-color: ${t.whiteTransparent};
  }
`;export{$ as E};
//# sourceMappingURL=EarlyAccess-NlFUIlJn.js.map
