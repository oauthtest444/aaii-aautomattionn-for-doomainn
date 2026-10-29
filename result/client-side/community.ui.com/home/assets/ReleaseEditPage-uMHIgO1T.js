var Fd=e=>{throw TypeError(e)};var xt=(e,t,a)=>t.has(e)?Fd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a);import{r as l,R as E,i as Ad,j as v,e as Z,m as Bi,x as Td,F as Md,q as Od,t as Vd}from"./react-DGhZhtub.js";import{L as fe,$ as Re,t as ue,fh as En,fi as dr,eh as ki,g as $a,v as ae,ar as Pt,fj as At,a4 as Or,ek as Nd,fk as Ud,cG as cr,fl as Ri,fm as Vr,cF as be,O as ra,h as at,q as Ve,u as me,w as $t,z as ya,fn as Ii,ei as Da,el as _n,fo as fr,n as Nr,o as pt,eg as Ze,fp as Hd,fq as Fi,p as ba,cH as Ur,fr as Ai,fs as Ti,a6 as Mi,ft as Ld,fu as jd,fv as Gd,ap as Kd,fw as Ha,cE as Oi,cD as Vi,fx as Hr,s as ut,fy as Lr,fz as zd,fA as Ni,l as je,cN as jr,eo as Xd,fB as Zd,fC as Gr,fD as qd,fE as Wd,fF as Qd,fG as Yd,fH as Jd,fI as Ui,fJ as ec,fK as tc,fL as ac,fM as rc,F as Kr,fN as nc,k as ic,fO as oc,fP as St,I as Bt,fQ as sc,m as xa,x as lc,y as uc,J as dc,fR as Hi,fS as cc,A as fc,D as jt,i as mc,j as Li,fT as pc,fU as gc,N as hc,S as $c,V as yc,W as Dc,X as bc,Y as xc,Z as vc,_ as wc,a0 as Cc,a1 as Ec,fV as _c,fW as ji,fX as Gt,fY as Pc,fZ as Sc,f_ as Bc,f$ as kc,g0 as La,g1 as Rc,g2 as Ic,g3 as Fc,co as yt,cn as va,a7 as se,g4 as zr,a8 as Gi,g5 as Ac,g6 as Tc,by as Mc,bx as Oc,g7 as Ki,g8 as zi,g9 as Vc,ga as Nc,gb as Uc,gc as Hc,gd as Lc,ge as Xi,gf as jc,ah as Xr,gg as Gc,gh as Kc,gi as zc,gj as Xc,gk as Zc,gl as Zi,gm as qc,aq as Wc,gn as Qc,ab as qi,go as Yc,T as Wi,dj as Jc,e as Qi,eq as ef,aA as tf,gp as af,gq as Pn,c as na,gr as Sn,gs as rf,cd as nf,dQ as mr,bE as Ee,af as Yi,bG as pr,aW as Ji,bw as lt,bT as of,bU as sf,bD as we,fc as lf,ea as eo,P as Bn,a as uf,C as df,dG as cf,gt as to,E as ff,gu as mf,gv as kn,gw as Rn,B as In,e9 as pf,dR as Kt,b5 as vt,dP as ce,d as gf,e6 as hf,gx as $f,c5 as yf,bp as Ae,dI as De,gy as Df,d_ as Fn,H as An,gz as bf,gA as xf}from"./AppWrapper-Dv2SOsTr.js";import"./sentry-DYy3Ltx-.js";import{b as ja,c as vf,D as Tn}from"./DropdownContainer-BbvDO010.js";import{s as Ge,u as Y,b as q,m as wf,c as Cf,E as xe,x as wa,h as Zr,o as K,an as Ef,am as C,D as ao,af as gr,aC as ro,bT as Mn,bW as _f,ax as On,a8 as Pf}from"./index-BEhlHXuB.js";import{A as Sf,i as Bf,b as kf,T as Rf}from"./AssetUploader-Cj3FLjO9.js";import{G as no,h as io,f as If,D as Ff}from"./lodash-cGhQZeSM.js";import{a as Af,b as Tf,$ as Mf,m as Of,c as Vf}from"./TextInput_Area-BfI8cFFU.js";import{$ as Nf,m as Uf,l as Hf,a as Lf,o as jf,b as Gf,c as Kf}from"./SearchInputSymbol-BG4U0pKQ.js";import{c as $e,d as _e,b as zf,e as rt,f as oo,g as Xf,h as Zf,i as qf,j as hr,k as Wf,l as Qf,m as Yf,n as so,o as Jf,p as qr,q as Ga,r as Ka,s as nt,t as lo,u as za,v as em,w as Vn,$ as tm,x as am,y as rm,z as nm,A as im,B as om}from"./useDrop-D_AFUWE1.js";import{c as he}from"./copyrights-zSHbVF8S.js";import"./Actions-B2cy-KAn.js";import"./MenuItem-cZVNHDK0.js";import"./Check-CvJD8OS_.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d9860734-f320-4d14-a5c1-b93315f774ae",e._sentryDebugIdIdentifier="sentry-dbid-d9860734-f320-4d14-a5c1-b93315f774ae")}catch{}})();let Xa=new Map,$r=!1;try{$r=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let ia=!1;try{ia=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const uo={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class yr{constructor(t,a={}){this.numberFormatter=sm(t,a),this.options=a}format(t){var r;let a="";if(!$r&&this.options.signDisplay!=null?a=lm(this.numberFormatter,this.options.signDisplay,t):a=this.numberFormatter.format(t),this.options.style==="unit"&&!ia){let{unit:i,unitDisplay:n="short",locale:o}=this.resolvedOptions();if(!i)return a;let s=(r=uo[i])==null?void 0:r[n];a+=s[o]||s.default}return a}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,a){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(t,a);if(a<t)throw new RangeError("End date must be >= start date");return`${this.format(t)} – ${this.format(a)}`}formatRangeToParts(t,a){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(t,a);if(a<t)throw new RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(t),i=this.numberFormatter.formatToParts(a);return[...r.map(n=>({...n,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...i.map(n=>({...n,source:"endRange"}))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return!$r&&this.options.signDisplay!=null&&(t={...t,signDisplay:this.options.signDisplay}),!ia&&this.options.style==="unit"&&(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}}function sm(e,t={}){var n;let{numberingSystem:a}=t;if(a&&e.includes("-nu-")&&(e.includes("-u-")||(e+="-u-"),e+=`-nu-${a}`),t.style==="unit"&&!ia){let{unit:o,unitDisplay:s="short"}=t;if(!o)throw new Error('unit option must be provided with style: "unit"');if(!((n=uo[o])!=null&&n[s]))throw new Error(`Unsupported unit ${o} with unitDisplay = ${s}`);t={...t,style:"decimal"}}let r=e+(t?Object.entries(t).sort((o,s)=>o[0]<s[0]?-1:1).join():"");if(Xa.has(r))return Xa.get(r);let i=new Intl.NumberFormat(e,t);return Xa.set(r,i),i}function lm(e,t,a){if(t==="auto")return e.format(a);if(t==="never")return e.format(Math.abs(a));{let r=!1;if(t==="always"?r=a>0||Object.is(a,0):t==="exceptZero"&&(Object.is(a,-0)||Object.is(a,0)?a=Math.abs(a):r=a>0),r){let i=e.format(-a),n=e.format(a),o=i.replace(n,"").replace(/\u200e|\u061C/,"");return[...o].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),i.replace(n,"!!!").replace(o,"+").replace("!!!",n)}else return e.format(a)}}const um=new RegExp("^.*\\(.*\\).*$"),dm=["latn","arab","hanidec","deva","beng","fullwide"];class co{constructor(t,a={}){this.locale=t,this.options=a}parse(t){return Za(this.locale,this.options,t).parse(t)}isValidPartialNumber(t,a,r){return Za(this.locale,this.options,t).isValidPartialNumber(t,a,r)}getNumberingSystem(t){return Za(this.locale,this.options,t).options.numberingSystem}}const Nn=new Map;function Za(e,t,a){let r=Un(e,t);if(!e.includes("-nu-")&&!r.isValidPartialNumber(a)){for(let i of dm)if(i!==r.options.numberingSystem){let n=Un(e+(e.includes("-u-")?"-nu-":"-u-nu-")+i,t);if(n.isValidPartialNumber(a))return n}}return r}function Un(e,t){let a=e+(t?Object.entries(t).sort((i,n)=>i[0]<n[0]?-1:1).join():""),r=Nn.get(a);return r||(r=new cm(e,t),Nn.set(a,r)),r}class cm{constructor(t,a={}){this.locale=t,a.roundingIncrement!==1&&a.roundingIncrement!=null&&(a.maximumFractionDigits==null&&a.minimumFractionDigits==null?(a.maximumFractionDigits=0,a.minimumFractionDigits=0):a.maximumFractionDigits==null?a.maximumFractionDigits=a.minimumFractionDigits:a.minimumFractionDigits==null&&(a.minimumFractionDigits=a.maximumFractionDigits)),this.formatter=new Intl.NumberFormat(t,a),this.options=this.formatter.resolvedOptions(),this.symbols=fm(t,this.formatter,this.options,a),this.options.style==="percent"&&((this.options.minimumFractionDigits??0)>18||(this.options.maximumFractionDigits??0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}parse(t){let a=this.formatter.resolvedOptions().useGrouping,r=this.sanitize(t);if(!a&&this.symbols.group&&r.includes(this.symbols.group))return NaN;if(this.symbols.group&&(r=r.replaceAll(this.symbols.group,"")),this.symbols.decimal&&(r=r.replace(this.symbols.decimal,".")),this.symbols.minusSign&&(r=r.replace(this.symbols.minusSign,"-")),r=r.replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let n=r.indexOf("-");r=r.replace("-",""),r=r.replace("+","");let o=r.indexOf(".");o===-1&&(o=r.length),r=r.replace(".",""),o-2===0?r=`0.${r}`:o-2===-1?r=`0.0${r}`:o-2===-2?r="0.00":r=`${r.slice(0,o-2)}.${r.slice(o-2)}`,n>-1&&(r=`-${r}`)}let i=r?+r:NaN;if(isNaN(i))return NaN;if(this.options.style==="percent"){let n={...this.options,style:"decimal",minimumFractionDigits:Math.min((this.options.minimumFractionDigits??0)+2,20),maximumFractionDigits:Math.min((this.options.maximumFractionDigits??0)+2,20)};return new co(this.locale,n).parse(new yr(this.locale,n).format(i))}return this.options.currencySign==="accounting"&&um.test(t)&&(i=-1*i),i}sanitize(t){let a=this.formatter.resolvedOptions().useGrouping;return this.symbols.noNumeralUnits.length>0&&this.symbols.noNumeralUnits.find(r=>r.unit===t)?this.symbols.noNumeralUnits.find(r=>r.unit===t).value.toString():(t=t.replace(this.symbols.literals,""),this.symbols.minusSign&&(t=t.replace("-",this.symbols.minusSign)),this.options.numberingSystem==="arab"&&(this.symbols.decimal&&(t=Ue(t,",",this.symbols.decimal),t=Ue(t,"،",this.symbols.decimal)),this.symbols.group&&a&&(t=Ue(t,".",this.symbols.group))),this.symbols.group==="’"&&t.includes("'")&&a&&(t=Ue(t,"'",this.symbols.group)),this.symbols.group==="'"&&t.includes("’")&&a&&(t=Ue(t,"’",this.symbols.group)),this.options.locale==="fr-FR"&&this.symbols.group&&a&&(t=Ue(t," ",this.symbols.group),t=Ue(t,/\u00A0/g,this.symbols.group)),t)}isValidPartialNumber(t,a=-1/0,r=1/0){let i=this.formatter.resolvedOptions().useGrouping;return t=this.sanitize(t),this.symbols.minusSign&&t.startsWith(this.symbols.minusSign)&&a<0?t=t.slice(this.symbols.minusSign.length):this.symbols.plusSign&&t.startsWith(this.symbols.plusSign)&&r>0&&(t=t.slice(this.symbols.plusSign.length)),this.symbols.decimal&&t.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&i&&(t=Ue(t,this.symbols.group,"")),t=t.replace(this.symbols.numeral,""),this.symbols.decimal&&(t=t.replace(this.symbols.decimal,"")),t.length===0)}}const Hn=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),Ln=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function fm(e,t,a,r){var S,R,k,I;let i=new Intl.NumberFormat(e,{...a,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:"auto",roundingMode:"halfExpand",useGrouping:!0}),n=i.formatToParts(-10000.111),o=i.formatToParts(10000.111),s=Ln.map(P=>i.formatToParts(P)),u=s.map((P,w)=>{let F=P.find(M=>M.type==="unit");return F&&!P.some(M=>M.type==="integer"||M.type==="fraction")?{unit:F.value,value:Ln[w]}:null}).filter(P=>!!P),d=((S=n.find(P=>P.type==="minusSign"))==null?void 0:S.value)??"-",c=(R=o.find(P=>P.type==="plusSign"))==null?void 0:R.value;!c&&((r==null?void 0:r.signDisplay)==="exceptZero"||(r==null?void 0:r.signDisplay)==="always")&&(c="+");let f=(k=new Intl.NumberFormat(e,{...a,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(P=>P.type==="decimal"))==null?void 0:k.value,g=(I=n.find(P=>P.type==="group"))==null?void 0:I.value,p=n.filter(P=>!Hn.has(P.type)).map(P=>jn(P.value)),$=s.flatMap(P=>P.filter(w=>!Hn.has(w.type)).map(w=>jn(w.value))),y=[...new Set([...p,...$])].sort((P,w)=>w.length-P.length),h=y.length===0?new RegExp("\\p{White_Space}|\\p{Cf}","gu"):new RegExp(`${y.join("|")}|\\p{White_Space}|\\p{Cf}`,"gu"),_=[...new Intl.NumberFormat(a.locale,{useGrouping:!1}).format(9876543210)].reverse(),D=new Map(_.map((P,w)=>[P,w])),x=new RegExp(`[${_.join("")}]`,"g");return{minusSign:d,plusSign:c,decimal:f,group:g,literals:h,numeral:x,numerals:_,index:P=>String(D.get(P)),noNumeralUnits:u}}function Ue(e,t,a){return e.replaceAll?e.replaceAll(t,a):e.split(t).join(a)}function jn(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var fo={};fo={dateRange:e=>`${e.startDate} إلى ${e.endDate}`,dateSelected:e=>`${e.date} المحدد`,finishRangeSelectionPrompt:"انقر لإنهاء عملية تحديد نطاق التاريخ",maximumDate:"آخر تاريخ متاح",minimumDate:"أول تاريخ متاح",next:"التالي",previous:"السابق",selectedDateDescription:e=>`تاريخ محدد: ${e.date}`,selectedRangeDescription:e=>`المدى الزمني المحدد: ${e.dateRange}`,startRangeSelectionPrompt:"انقر لبدء عملية تحديد نطاق التاريخ",todayDate:e=>`اليوم، ${e.date}`,todayDateSelected:e=>`اليوم، ${e.date} محدد`};var mo={};mo={dateRange:e=>`${e.startDate} до ${e.endDate}`,dateSelected:e=>`Избрано е ${e.date}`,finishRangeSelectionPrompt:"Натиснете, за да довършите избора на времеви интервал",maximumDate:"Последна налична дата",minimumDate:"Първа налична дата",next:"Напред",previous:"Назад",selectedDateDescription:e=>`Избрана дата: ${e.date}`,selectedRangeDescription:e=>`Избран диапазон: ${e.dateRange}`,startRangeSelectionPrompt:"Натиснете, за да пристъпите към избора на времеви интервал",todayDate:e=>`Днес, ${e.date}`,todayDateSelected:e=>`Днес, ${e.date} са избрани`};var po={};po={dateRange:e=>`${e.startDate} až ${e.endDate}`,dateSelected:e=>`Vybráno ${e.date}`,finishRangeSelectionPrompt:"Kliknutím dokončíte výběr rozsahu dat",maximumDate:"Poslední dostupné datum",minimumDate:"První dostupné datum",next:"Další",previous:"Předchozí",selectedDateDescription:e=>`Vybrané datum: ${e.date}`,selectedRangeDescription:e=>`Vybrané období: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknutím zahájíte výběr rozsahu dat",todayDate:e=>`Dnes, ${e.date}`,todayDateSelected:e=>`Dnes, vybráno ${e.date}`};var go={};go={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:"Klik for at fuldføre valg af datoområde",maximumDate:"Sidste ledige dato",minimumDate:"Første ledige dato",next:"Næste",previous:"Forrige",selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.dateRange}`,startRangeSelectionPrompt:"Klik for at starte valg af datoområde",todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`};var ho={};ho={dateRange:e=>`${e.startDate} bis ${e.endDate}`,dateSelected:e=>`${e.date} ausgewählt`,finishRangeSelectionPrompt:"Klicken, um die Auswahl des Datumsbereichs zu beenden",maximumDate:"Letztes verfügbares Datum",minimumDate:"Erstes verfügbares Datum",next:"Weiter",previous:"Zurück",selectedDateDescription:e=>`Ausgewähltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgewählter Bereich: ${e.dateRange}`,startRangeSelectionPrompt:"Klicken, um die Auswahl des Datumsbereichs zu beginnen",todayDate:e=>`Heute, ${e.date}`,todayDateSelected:e=>`Heute, ${e.date} ausgewählt`};var $o={};$o={dateRange:e=>`${e.startDate} έως ${e.endDate}`,dateSelected:e=>`Επιλέχθηκε ${e.date}`,finishRangeSelectionPrompt:"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών",maximumDate:"Τελευταία διαθέσιμη ημερομηνία",minimumDate:"Πρώτη διαθέσιμη ημερομηνία",next:"Επόμενο",previous:"Προηγούμενο",selectedDateDescription:e=>`Επιλεγμένη ημερομηνία: ${e.date}`,selectedRangeDescription:e=>`Επιλεγμένο εύρος: ${e.dateRange}`,startRangeSelectionPrompt:"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών",todayDate:e=>`Σήμερα, ${e.date}`,todayDateSelected:e=>`Σήμερα, επιλέχτηκε ${e.date}`};var yo={};yo={previous:"Previous",next:"Next",selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.dateRange}`,todayDate:e=>`Today, ${e.date}`,todayDateSelected:e=>`Today, ${e.date} selected`,dateSelected:e=>`${e.date} selected`,startRangeSelectionPrompt:"Click to start selecting date range",finishRangeSelectionPrompt:"Click to finish selecting date range",minimumDate:"First available date",maximumDate:"Last available date",dateRange:e=>`${e.startDate} to ${e.endDate}`};var Do={};Do={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} seleccionado`,finishRangeSelectionPrompt:"Haga clic para terminar de seleccionar rango de fechas",maximumDate:"Última fecha disponible",minimumDate:"Primera fecha disponible",next:"Siguiente",previous:"Anterior",selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo seleccionado: ${e.dateRange}`,startRangeSelectionPrompt:"Haga clic para comenzar a seleccionar un rango de fechas",todayDate:e=>`Hoy, ${e.date}`,todayDateSelected:e=>`Hoy, ${e.date} seleccionado`};var bo={};bo={dateRange:e=>`${e.startDate} kuni ${e.endDate}`,dateSelected:e=>`${e.date} valitud`,finishRangeSelectionPrompt:"Klõpsake kuupäevavahemiku valimise lõpetamiseks",maximumDate:"Viimane saadaolev kuupäev",minimumDate:"Esimene saadaolev kuupäev",next:"Järgmine",previous:"Eelmine",selectedDateDescription:e=>`Valitud kuupäev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.dateRange}`,startRangeSelectionPrompt:"Klõpsake kuupäevavahemiku valimiseks",todayDate:e=>`Täna, ${e.date}`,todayDateSelected:e=>`Täna, ${e.date} valitud`};var xo={};xo={dateRange:e=>`${e.startDate} – ${e.endDate}`,dateSelected:e=>`${e.date} valittu`,finishRangeSelectionPrompt:"Lopeta päivämääräalueen valinta napsauttamalla tätä.",maximumDate:"Viimeinen varattavissa oleva päivämäärä",minimumDate:"Ensimmäinen varattavissa oleva päivämäärä",next:"Seuraava",previous:"Edellinen",selectedDateDescription:e=>`Valittu päivämäärä: ${e.date}`,selectedRangeDescription:e=>`Valittu aikaväli: ${e.dateRange}`,startRangeSelectionPrompt:"Aloita päivämääräalueen valinta napsauttamalla tätä.",todayDate:e=>`Tänään, ${e.date}`,todayDateSelected:e=>`Tänään, ${e.date} valittu`};var vo={};vo={dateRange:e=>`${e.startDate} à ${e.endDate}`,dateSelected:e=>`${e.date} sélectionné`,finishRangeSelectionPrompt:"Cliquer pour finir de sélectionner la plage de dates",maximumDate:"Dernière date disponible",minimumDate:"Première date disponible",next:"Suivant",previous:"Précédent",selectedDateDescription:e=>`Date sélectionnée : ${e.date}`,selectedRangeDescription:e=>`Plage sélectionnée : ${e.dateRange}`,startRangeSelectionPrompt:"Cliquer pour commencer à sélectionner la plage de dates",todayDate:e=>`Aujourd'hui, ${e.date}`,todayDateSelected:e=>`Aujourd’hui, ${e.date} sélectionné`};var wo={};wo={dateRange:e=>`${e.startDate} עד ${e.endDate}`,dateSelected:e=>`${e.date} נבחר`,finishRangeSelectionPrompt:"חץ כדי לסיים את בחירת טווח התאריכים",maximumDate:"תאריך פנוי אחרון",minimumDate:"תאריך פנוי ראשון",next:"הבא",previous:"הקודם",selectedDateDescription:e=>`תאריך נבחר: ${e.date}`,selectedRangeDescription:e=>`טווח נבחר: ${e.dateRange}`,startRangeSelectionPrompt:"לחץ כדי להתחיל בבחירת טווח התאריכים",todayDate:e=>`היום, ${e.date}`,todayDateSelected:e=>`היום, ${e.date} נבחר`};var Co={};Co={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} odabran`,finishRangeSelectionPrompt:"Kliknite da dovršite raspon odabranih datuma",maximumDate:"Posljednji raspoloživi datum",minimumDate:"Prvi raspoloživi datum",next:"Sljedeći",previous:"Prethodni",selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknite da započnete raspon odabranih datuma",todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, odabran ${e.date}`};var Eo={};Eo={dateRange:e=>`${e.startDate}–${e.endDate}`,dateSelected:e=>`${e.date} kiválasztva`,finishRangeSelectionPrompt:"Kattintson a dátumtartomány kijelölésének befejezéséhez",maximumDate:"Utolsó elérhető dátum",minimumDate:"Az első elérhető dátum",next:"Következő",previous:"Előző",selectedDateDescription:e=>`Kijelölt dátum: ${e.date}`,selectedRangeDescription:e=>`Kijelölt tartomány: ${e.dateRange}`,startRangeSelectionPrompt:"Kattintson a dátumtartomány kijelölésének indításához",todayDate:e=>`Ma, ${e.date}`,todayDateSelected:e=>`Ma, ${e.date} kijelölve`};var _o={};_o={dateRange:e=>`Da ${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selezionata`,finishRangeSelectionPrompt:"Fai clic per completare la selezione dell’intervallo di date",maximumDate:"Ultima data disponibile",minimumDate:"Prima data disponibile",next:"Successivo",previous:"Precedente",selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: ${e.dateRange}`,startRangeSelectionPrompt:"Fai clic per selezionare l’intervallo di date",todayDate:e=>`Oggi, ${e.date}`,todayDateSelected:e=>`Oggi, ${e.date} selezionata`};var Po={};Po={dateRange:e=>`${e.startDate} から ${e.endDate}`,dateSelected:e=>`${e.date} を選択`,finishRangeSelectionPrompt:"クリックして日付範囲の選択を終了",maximumDate:"最終利用可能日",minimumDate:"最初の利用可能日",next:"次へ",previous:"前へ",selectedDateDescription:e=>`選択した日付 : ${e.date}`,selectedRangeDescription:e=>`選択範囲 : ${e.dateRange}`,startRangeSelectionPrompt:"クリックして日付範囲の選択を開始",todayDate:e=>`本日、${e.date}`,todayDateSelected:e=>`本日、${e.date} を選択`};var So={};So={dateRange:e=>`${e.startDate} ~ ${e.endDate}`,dateSelected:e=>`${e.date} 선택됨`,finishRangeSelectionPrompt:"날짜 범위 선택을 완료하려면 클릭하십시오.",maximumDate:"마지막으로 사용 가능한 일자",minimumDate:"처음으로 사용 가능한 일자",next:"다음",previous:"이전",selectedDateDescription:e=>`선택 일자: ${e.date}`,selectedRangeDescription:e=>`선택 범위: ${e.dateRange}`,startRangeSelectionPrompt:"날짜 범위 선택을 시작하려면 클릭하십시오.",todayDate:e=>`오늘, ${e.date}`,todayDateSelected:e=>`오늘, ${e.date} 선택됨`};var Bo={};Bo={dateRange:e=>`Nuo ${e.startDate} iki ${e.endDate}`,dateSelected:e=>`Pasirinkta ${e.date}`,finishRangeSelectionPrompt:"Spustelėkite, kad baigtumėte pasirinkti datų intervalą",maximumDate:"Paskutinė galima data",minimumDate:"Pirmoji galima data",next:"Paskesnis",previous:"Ankstesnis",selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: ${e.dateRange}`,startRangeSelectionPrompt:"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą",todayDate:e=>`Šiandien, ${e.date}`,todayDateSelected:e=>`Šiandien, pasirinkta ${e.date}`};var ko={};ko={dateRange:e=>`No ${e.startDate} līdz ${e.endDate}`,dateSelected:e=>`Atlasīts: ${e.date}`,finishRangeSelectionPrompt:"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi",maximumDate:"Pēdējais pieejamais datums",minimumDate:"Pirmais pieejamais datums",next:"Tālāk",previous:"Atpakaļ",selectedDateDescription:e=>`Atlasītais datums: ${e.date}`,selectedRangeDescription:e=>`Atlasītais diapazons: ${e.dateRange}`,startRangeSelectionPrompt:"Noklikšķiniet, lai sāktu datumu diapazona atlasi",todayDate:e=>`Šodien, ${e.date}`,todayDateSelected:e=>`Atlasīta šodiena, ${e.date}`};var Ro={};Ro={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:"Klikk for å fullføre valg av datoområde",maximumDate:"Siste tilgjengelige dato",minimumDate:"Første tilgjengelige dato",next:"Neste",previous:"Forrige",selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt område: ${e.dateRange}`,startRangeSelectionPrompt:"Klikk for å starte valg av datoområde",todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`};var Io={};Io={dateRange:e=>`${e.startDate} tot ${e.endDate}`,dateSelected:e=>`${e.date} geselecteerd`,finishRangeSelectionPrompt:"Klik om de selectie van het datumbereik te voltooien",maximumDate:"Laatste beschikbare datum",minimumDate:"Eerste beschikbare datum",next:"Volgende",previous:"Vorige",selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.dateRange}`,startRangeSelectionPrompt:"Klik om het datumbereik te selecteren",todayDate:e=>`Vandaag, ${e.date}`,todayDateSelected:e=>`Vandaag, ${e.date} geselecteerd`};var Fo={};Fo={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`Wybrano ${e.date}`,finishRangeSelectionPrompt:"Kliknij, aby zakończyć wybór zakresu dat",maximumDate:"Ostatnia dostępna data",minimumDate:"Pierwsza dostępna data",next:"Dalej",previous:"Wstecz",selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknij, aby rozpocząć wybór zakresu dat",todayDate:e=>`Dzisiaj, ${e.date}`,todayDateSelected:e=>`Dzisiaj wybrano ${e.date}`};var Ao={};Ao={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:"Clique para concluir a seleção do intervalo de datas",maximumDate:"Última data disponível",minimumDate:"Primeira data disponível",next:"Próximo",previous:"Anterior",selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:"Clique para iniciar a seleção do intervalo de datas",todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`};var To={};To={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:"Clique para terminar de selecionar o intervalo de datas",maximumDate:"Última data disponível",minimumDate:"Primeira data disponível",next:"Próximo",previous:"Anterior",selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:"Clique para começar a selecionar o intervalo de datas",todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`};var Mo={};Mo={dateRange:e=>`De la ${e.startDate} până la ${e.endDate}`,dateSelected:e=>`${e.date} selectată`,finishRangeSelectionPrompt:"Apăsaţi pentru a finaliza selecţia razei pentru dată",maximumDate:"Ultima dată disponibilă",minimumDate:"Prima dată disponibilă",next:"Următorul",previous:"Înainte",selectedDateDescription:e=>`Dată selectată: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: ${e.dateRange}`,startRangeSelectionPrompt:"Apăsaţi pentru a începe selecţia razei pentru dată",todayDate:e=>`Astăzi, ${e.date}`,todayDateSelected:e=>`Azi, ${e.date} selectată`};var Oo={};Oo={dateRange:e=>`С ${e.startDate} по ${e.endDate}`,dateSelected:e=>`Выбрано ${e.date}`,finishRangeSelectionPrompt:"Щелкните, чтобы завершить выбор диапазона дат",maximumDate:"Последняя доступная дата",minimumDate:"Первая доступная дата",next:"Далее",previous:"Назад",selectedDateDescription:e=>`Выбранная дата: ${e.date}`,selectedRangeDescription:e=>`Выбранный диапазон: ${e.dateRange}`,startRangeSelectionPrompt:"Щелкните, чтобы начать выбор диапазона дат",todayDate:e=>`Сегодня, ${e.date}`,todayDateSelected:e=>`Сегодня, выбрано ${e.date}`};var Vo={};Vo={dateRange:e=>`Od ${e.startDate} do ${e.endDate}`,dateSelected:e=>`Vybratý dátum ${e.date}`,finishRangeSelectionPrompt:"Kliknutím dokončíte výber rozsahu dátumov",maximumDate:"Posledný dostupný dátum",minimumDate:"Prvý dostupný dátum",next:"Nasledujúce",previous:"Predchádzajúce",selectedDateDescription:e=>`Vybratý dátum: ${e.date}`,selectedRangeDescription:e=>`Vybratý rozsah: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknutím spustíte výber rozsahu dátumov",todayDate:e=>`Dnes ${e.date}`,todayDateSelected:e=>`Vybratý dnešný dátum ${e.date}`};var No={};No={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izbrano`,finishRangeSelectionPrompt:"Kliknite za dokončanje izbire datumskega obsega",maximumDate:"Zadnji razpoložljivi datum",minimumDate:"Prvi razpoložljivi datum",next:"Naprej",previous:"Nazaj",selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano območje: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknite za začetek izbire datumskega obsega",todayDate:e=>`Danes, ${e.date}`,todayDateSelected:e=>`Danes, ${e.date} izbrano`};var Uo={};Uo={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izabran`,finishRangeSelectionPrompt:"Kliknite da dovršite opseg izabranih datuma",maximumDate:"Zadnji raspoloživi datum",minimumDate:"Prvi raspoloživi datum",next:"Sledeći",previous:"Prethodni",selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani period: ${e.dateRange}`,startRangeSelectionPrompt:"Kliknite da započnete opseg izabranih datuma",todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, izabran ${e.date}`};var Ho={};Ho={dateRange:e=>`${e.startDate} till ${e.endDate}`,dateSelected:e=>`${e.date} har valts`,finishRangeSelectionPrompt:"Klicka för att avsluta val av datumintervall",maximumDate:"Sista tillgängliga datum",minimumDate:"Första tillgängliga datum",next:"Nästa",previous:"Föregående",selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.dateRange}`,startRangeSelectionPrompt:"Klicka för att välja datumintervall",todayDate:e=>`Idag, ${e.date}`,todayDateSelected:e=>`Idag, ${e.date} har valts`};var Lo={};Lo={dateRange:e=>`${e.startDate} - ${e.endDate}`,dateSelected:e=>`${e.date} seçildi`,finishRangeSelectionPrompt:"Tarih aralığı seçimini tamamlamak için tıklayın",maximumDate:"Son müsait tarih",minimumDate:"İlk müsait tarih",next:"Sonraki",previous:"Önceki",selectedDateDescription:e=>`Seçilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Seçilen Aralık: ${e.dateRange}`,startRangeSelectionPrompt:"Tarih aralığı seçimini başlatmak için tıklayın",todayDate:e=>`Bugün, ${e.date}`,todayDateSelected:e=>`Bugün, ${e.date} seçildi`};var jo={};jo={dateRange:e=>`${e.startDate} — ${e.endDate}`,dateSelected:e=>`Вибрано ${e.date}`,finishRangeSelectionPrompt:"Натисніть, щоб завершити вибір діапазону дат",maximumDate:"Остання доступна дата",minimumDate:"Перша доступна дата",next:"Наступний",previous:"Попередній",selectedDateDescription:e=>`Вибрана дата: ${e.date}`,selectedRangeDescription:e=>`Вибраний діапазон: ${e.dateRange}`,startRangeSelectionPrompt:"Натисніть, щоб почати вибір діапазону дат",todayDate:e=>`Сьогодні, ${e.date}`,todayDateSelected:e=>`Сьогодні, вибрано ${e.date}`};var Go={};Go={dateRange:e=>`${e.startDate} 至 ${e.endDate}`,dateSelected:e=>`已选择 ${e.date}`,finishRangeSelectionPrompt:"单击以完成选择日期范围",maximumDate:"最后一个可用日期",minimumDate:"第一个可用日期",next:"下一页",previous:"上一页",selectedDateDescription:e=>`选定的日期：${e.date}`,selectedRangeDescription:e=>`选定的范围：${e.dateRange}`,startRangeSelectionPrompt:"单击以开始选择日期范围",todayDate:e=>`今天，即 ${e.date}`,todayDateSelected:e=>`已选择今天，即 ${e.date}`};var Ko={};Ko={dateRange:e=>`${e.startDate} 至 ${e.endDate}`,dateSelected:e=>`已選取 ${e.date}`,finishRangeSelectionPrompt:"按一下以完成選取日期範圍",maximumDate:"最後一個可用日期",minimumDate:"第一個可用日期",next:"下一頁",previous:"上一頁",selectedDateDescription:e=>`選定的日期：${e.date}`,selectedRangeDescription:e=>`選定的範圍：${e.dateRange}`,startRangeSelectionPrompt:"按一下以開始選取日期範圍",todayDate:e=>`今天，${e.date}`,todayDateSelected:e=>`已選取今天，${e.date}`};var Tt={};Tt={"ar-AE":fo,"bg-BG":mo,"cs-CZ":po,"da-DK":go,"de-DE":ho,"el-GR":$o,"en-US":yo,"es-ES":Do,"et-EE":bo,"fi-FI":xo,"fr-FR":vo,"he-IL":wo,"hr-HR":Co,"hu-HU":Eo,"it-IT":_o,"ja-JP":Po,"ko-KR":So,"lt-LT":Bo,"lv-LV":ko,"nb-NO":Ro,"nl-NL":Io,"pl-PL":Fo,"pt-BR":Ao,"pt-PT":To,"ro-RO":Mo,"ru-RU":Oo,"sk-SK":Vo,"sl-SI":No,"sr-SP":Uo,"sv-SE":Ho,"tr-TR":Lo,"uk-UA":jo,"zh-CN":Go,"zh-TW":Ko};function zo(e,t){let a=l.useRef(null);return e&&a.current&&t(e,a.current)&&(e=a.current),a.current=e,e}function dt(e,t){return e-t*Math.floor(e/t)}const Xo=1721426;function Qe(e,t,a,r){t=Mt(e,t);let i=t-1,n=-2;return a<=2?n=0:Le(t)&&(n=-1),Xo-1+365*i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400)+Math.floor((367*a-362)/12+n+r)}function Le(e){return e%4===0&&(e%100!==0||e%400===0)}function Mt(e,t){return e==="BC"?1-t:t}function Ca(e){let t="AD";return e<=0&&(t="BC",e=1-e),[t,e]}const mm={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class le{fromJulianDay(t){let a=t,r=a-Xo,i=Math.floor(r/146097),n=dt(r,146097),o=Math.floor(n/36524),s=dt(n,36524),u=Math.floor(s/1461),d=dt(s,1461),c=Math.floor(d/365),m=i*400+o*100+u*4+c+(o!==4&&c!==4?1:0),[f,g]=Ca(m),p=a-Qe(f,g,1,1),$=2;a<Qe(f,g,3,1)?$=0:Le(g)&&($=1);let y=Math.floor(((p+$)*12+373)/367),h=a-Qe(f,g,y,1)+1;return new te(f,g,y,h)}toJulianDay(t){return Qe(t.era,t.year,t.month,t.day)}getDaysInMonth(t){return mm[Le(t.year)?"leapyear":"standard"][t.month-1]}getMonthsInYear(t){return 12}getDaysInYear(t){return Le(t.year)?366:365}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getYearsInEra(t){return 9999}getEras(){return["BC","AD"]}isInverseEra(t){return t.era==="BC"}balanceDate(t){t.year<=0&&(t.era=t.era==="BC"?"AD":"BC",t.year=1-t.year)}constructor(){this.identifier="gregory"}}const pm={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function ee(e,t){return t=J(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function gm(e,t){return t=J(t,e.calendar),e=Je(e),t=Je(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function hm(e,t){return Ea(e.calendar,t.calendar)&&ee(e,t)}function Ea(e,t){var a,r;return((a=e.isEqual)==null?void 0:a.call(e,t))??((r=t.isEqual)==null?void 0:r.call(t,e))??e.identifier===t.identifier}function Zo(e,t){return ee(e,_a(t))}const $m={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function Wr(e,t,a){let r=e.calendar.toJulianDay(e),i=a?$m[a]:vm(t),n=Math.ceil(r+1-i)%7;return n<0&&(n+=7),n}function qo(e){return Se(Date.now(),e)}function _a(e){return pe(qo(e))}function Wo(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function Qo(e,t){return Gn(e)-Gn(t)}function Gn(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}let qa=null,ym=!1;function Ot(){return qa==null&&(qa=new Intl.DateTimeFormat().resolvedOptions().timeZone),qa}function Yo(){return ym}function Je(e){return e.subtract({days:e.day-1})}function oa(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}function Dm(e){return Je(e.subtract({months:e.month-1}))}function kt(e,t,a){let r=Wr(e,t,a);return e.subtract({days:r})}function bm(e,t,a){return kt(e,t,a).add({days:6})}const Kn=new Map,Wa=new Map;function xm(e){if(Intl.Locale){let a=Kn.get(e);return a||(a=new Intl.Locale(e).maximize().region,a&&Kn.set(e,a)),a}let t=e.split("-")[1];return t==="u"?void 0:t}function vm(e){let t=Wa.get(e);if(!t){if(Intl.Locale){let r=new Intl.Locale(e);if("getWeekInfo"in r&&(t=r.getWeekInfo(),t))return Wa.set(e,t),t.firstDay}let a=xm(e);if(e.includes("-fw-")){let r=e.split("-fw-")[1].split("-")[0];r==="mon"?t={firstDay:1}:r==="tue"?t={firstDay:2}:r==="wed"?t={firstDay:3}:r==="thu"?t={firstDay:4}:r==="fri"?t={firstDay:5}:r==="sat"?t={firstDay:6}:t={firstDay:0}}else e.includes("-ca-iso8601")?t={firstDay:1}:t={firstDay:a&&pm[a]||0};Wa.set(e,t)}return t.firstDay}function wm(e,t,a){let r=e.calendar.getDaysInMonth(e);return Math.ceil((Wr(Je(e),t,a)+r)/7)}function Jo(e,t){return e&&t?e.compare(t)<=0?e:t:e||t}function es(e,t){return e&&t?e.compare(t)>=0?e:t:e||t}function gt(e){e=J(e,new le);let t=Mt(e.era,e.year);return ts(t,e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function ts(e,t,a,r,i,n,o){let s=new Date;return s.setUTCHours(r,i,n,o),s.setUTCFullYear(e,t-1,a),s.getTime()}function Dr(e,t){if(t==="UTC")return 0;if(e>0&&t===Ot()&&!Yo())return new Date(e).getTimezoneOffset()*-6e4;let{year:a,month:r,day:i,hour:n,minute:o,second:s}=as(e,t);return ts(a,r,i,n,o,s,0)-Math.floor(e/1e3)*1e3}const zn=new Map;function as(e,t){let a=zn.get(t);a||(a=new Intl.DateTimeFormat("en-US",{timeZone:t,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),zn.set(t,a));let r=a.formatToParts(new Date(e)),i={};for(let n of r)n.type!=="literal"&&(i[n.type]=n.value);return{year:i.era==="BC"||i.era==="B"?-i.year+1:+i.year,month:+i.month,day:+i.day,hour:i.hour==="24"?0:+i.hour,minute:+i.minute,second:+i.second}}const Xn=864e5;function Cm(e,t,a,r){return(a===r?[a]:[a,r]).filter(n=>Em(e,t,n))}function Em(e,t,a){let r=as(a,t);return e.year===r.year&&e.month===r.month&&e.day===r.day&&e.hour===r.hour&&e.minute===r.minute&&e.second===r.second}function Te(e,t,a="compatible"){let r=ke(e);if(t==="UTC")return gt(r);if(t===Ot()&&a==="compatible"&&!Yo()){r=J(r,new le);let u=new Date,d=Mt(r.era,r.year);return u.setFullYear(d,r.month-1,r.day),u.setHours(r.hour,r.minute,r.second,r.millisecond),u.getTime()}let i=gt(r),n=Dr(i-Xn,t),o=Dr(i+Xn,t),s=Cm(r,t,i-n,i-o);if(s.length===1)return s[0];if(s.length>1)switch(a){case"compatible":case"earlier":return s[0];case"later":return s[s.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(a){case"earlier":return Math.min(i-n,i-o);case"compatible":case"later":return Math.max(i-n,i-o);case"reject":throw new RangeError("No such absolute time found")}}function rs(e,t,a="compatible"){return new Date(Te(e,t,a))}function Se(e,t){let a=Dr(e,t),r=new Date(e+a),i=r.getUTCFullYear(),n=r.getUTCMonth()+1,o=r.getUTCDate(),s=r.getUTCHours(),u=r.getUTCMinutes(),d=r.getUTCSeconds(),c=r.getUTCMilliseconds();return new la(i<1?"BC":"AD",i<1?-i+1:i,n,o,t,a,s,u,d,c)}function _m(e,t){return Se(e.getTime(),t)}function pe(e){return new te(e.calendar,e.era,e.year,e.month,e.day)}function ke(e,t){let a=0,r=0,i=0,n=0;if("timeZone"in e)({hour:a,minute:r,second:i,millisecond:n}=e);else if("hour"in e&&!t)return e;return t&&({hour:a,minute:r,second:i,millisecond:n}=t),new sa(e.calendar,e.era,e.year,e.month,e.day,a,r,i,n)}function br(e){return new ht(e.hour,e.minute,e.second,e.millisecond)}function J(e,t){if(Ea(e.calendar,t))return e;let a=t.fromJulianDay(e.calendar.toJulianDay(e)),r=e.copy();return r.calendar=t,r.era=a.era,r.year=a.year,r.month=a.month,r.day=a.day,et(r),r}function Pm(e,t,a){if(e instanceof la)return e.timeZone===t?e:ns(e,t);let r=Te(e,t,a);return Se(r,t)}function Sm(e){let t=gt(e)-e.offset;return new Date(t)}function ns(e,t){let a=gt(e)-e.offset;return J(Se(a,t),e.calendar)}function Bm(e){return ns(e,Ot())}const wt=36e5;function Pa(e,t){var o,s;let a=e.copy(),r="hour"in a?ls(a,t):0;xr(a,t.years||0),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,e),a.month+=t.months||0,vr(a),is(a),a.day+=(t.weeks||0)*7,a.day+=t.days||0,a.day+=r,km(a),a.calendar.balanceDate&&a.calendar.balanceDate(a),a.year<1&&(a.year=1,a.month=1,a.day=1);let i=a.calendar.getYearsInEra(a);if(a.year>i){let u=(s=(o=a.calendar).isInverseEra)==null?void 0:s.call(o,a);a.year=i,a.month=u?1:a.calendar.getMonthsInYear(a),a.day=u?1:a.calendar.getDaysInMonth(a)}a.month<1&&(a.month=1,a.day=1);let n=a.calendar.getMonthsInYear(a);return a.month>n&&(a.month=n,a.day=a.calendar.getDaysInMonth(a)),a.day=Math.max(1,Math.min(a.calendar.getDaysInMonth(a),a.day)),a}function xr(e,t){var a,r;(r=(a=e.calendar).isInverseEra)!=null&&r.call(a,e)&&(t=-t),e.year+=t}function vr(e){for(;e.month<1;)xr(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,xr(e,1)}function km(e){for(;e.day<1;)e.month--,vr(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,vr(e)}function is(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function et(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),is(e)}function Qr(e){let t={};for(let a in e)typeof e[a]=="number"&&(t[a]=-e[a]);return t}function os(e,t){return Pa(e,Qr(t))}function Yr(e,t){let a=e.copy();return t.era!=null&&(a.era=t.era),t.year!=null&&(a.year=t.year),t.month!=null&&(a.month=t.month),t.day!=null&&(a.day=t.day),et(a),a}function Rt(e,t){let a=e.copy();return t.hour!=null&&(a.hour=t.hour),t.minute!=null&&(a.minute=t.minute),t.second!=null&&(a.second=t.second),t.millisecond!=null&&(a.millisecond=t.millisecond),ss(a),a}function Rm(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=zt(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=zt(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=zt(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=zt(e.hour,24),t}function ss(e){e.millisecond=Math.max(0,Math.min(e.millisecond,999)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function zt(e,t){let a=e%t;return a<0&&(a+=t),a}function ls(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,Rm(e)}function us(e,t){let a=e.copy();return ls(a,t),a}function Im(e,t){return us(e,Qr(t))}function Jr(e,t,a,r){var n,o;let i=e.copy();switch(t){case"era":{let s=e.calendar.getEras(),u=s.indexOf(e.era);if(u<0)throw new Error("Invalid era: "+e.era);u=Me(u,a,0,s.length-1,r==null?void 0:r.round),i.era=s[u],et(i);break}case"year":(o=(n=i.calendar).isInverseEra)!=null&&o.call(n,i)&&(a=-a),i.year=Me(e.year,a,-1/0,9999,r==null?void 0:r.round),i.year===-1/0&&(i.year=1),i.calendar.balanceYearMonth&&i.calendar.balanceYearMonth(i,e);break;case"month":i.month=Me(e.month,a,1,e.calendar.getMonthsInYear(e),r==null?void 0:r.round);break;case"day":i.day=Me(e.day,a,1,e.calendar.getDaysInMonth(e),r==null?void 0:r.round);break;default:throw new Error("Unsupported field "+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(i),et(i),i}function en(e,t,a,r){let i=e.copy();switch(t){case"hour":{let n=e.hour,o=0,s=23;if((r==null?void 0:r.hourCycle)===12){let u=n>=12;o=u?12:0,s=u?23:11}i.hour=Me(n,a,o,s,r==null?void 0:r.round);break}case"minute":i.minute=Me(e.minute,a,0,59,r==null?void 0:r.round);break;case"second":i.second=Me(e.second,a,0,59,r==null?void 0:r.round);break;case"millisecond":i.millisecond=Me(e.millisecond,a,0,999,r==null?void 0:r.round);break;default:throw new Error("Unsupported field "+t)}return i}function Me(e,t,a,r,i=!1){if(i){e+=Math.sign(t),e<a&&(e=r);let n=Math.abs(t);t>0?e=Math.ceil(e/n)*n:e=Math.floor(e/n)*n,e>r&&(e=a)}else e+=t,e<a?e=r-(a-e-1):e>r&&(e=a+(e-r-1));return e}function ds(e,t){let a;if(t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0){let i=Pa(ke(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days});a=Te(i,e.timeZone)}else a=gt(e)-e.offset;a+=t.milliseconds||0,a+=(t.seconds||0)*1e3,a+=(t.minutes||0)*6e4,a+=(t.hours||0)*36e5;let r=Se(a,e.timeZone);return J(r,e.calendar)}function Fm(e,t){return ds(e,Qr(t))}function Am(e,t,a,r){switch(t){case"hour":{let i=0,n=23;if((r==null?void 0:r.hourCycle)===12){let p=e.hour>=12;i=p?12:0,n=p?23:11}let o=ke(e),s=J(Rt(o,{hour:i}),new le),u=[Te(s,e.timeZone,"earlier"),Te(s,e.timeZone,"later")].filter(p=>Se(p,e.timeZone).day===s.day)[0],d=J(Rt(o,{hour:n}),new le),c=[Te(d,e.timeZone,"earlier"),Te(d,e.timeZone,"later")].filter(p=>Se(p,e.timeZone).day===d.day).pop(),m=gt(e)-e.offset,f=Math.floor(m/wt),g=m%wt;return m=Me(f,a,Math.floor(u/wt),Math.floor(c/wt),r==null?void 0:r.round)*wt+g,J(Se(m,e.timeZone),e.calendar)}case"minute":case"second":case"millisecond":return en(e,t,a,r);case"era":case"year":case"month":case"day":{let i=Jr(ke(e),t,a,r),n=Te(i,e.timeZone);return J(Se(n,e.timeZone),e.calendar)}default:throw new Error("Unsupported field "+t)}}function Tm(e,t,a){let r=ke(e),i=Rt(Yr(r,t),t);if(i.compare(r)===0)return e;let n=Te(i,e.timeZone,a);return J(Se(n,e.timeZone),e.calendar)}const Mm=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,Om=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,cs=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;function Vm(e){let t=e.match(Mm);if(!t)throw cs.test(e)?new Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`):new Error("Invalid ISO 8601 date string: "+e);let a=new te(Pe(t[1],0,9999),Pe(t[2],1,12),1);return a.day=Pe(t[3],1,a.calendar.getDaysInMonth(a)),a}function Nm(e){let t=e.match(Om);if(!t)throw cs.test(e)?new Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`):new Error("Invalid ISO 8601 date time string: "+e);let a=Pe(t[1],-9999,9999),r=a<1?"BC":"AD",i=new sa(r,a<1?-a+1:a,Pe(t[2],1,12),1,t[4]?Pe(t[4],0,23):0,t[5]?Pe(t[5],0,59):0,t[6]?Pe(t[6],0,59):0,t[7]?Pe(t[7],0,1/0)*1e3:0);return i.day=Pe(t[3],0,i.calendar.getDaysInMonth(i)),i}function Pe(e,t,a){let r=Number(e);if(r<t||r>a)throw new RangeError(`Value out of range: ${t} <= ${r} <= ${a}`);return r}function fs(e){return`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`}function ms(e){let t=J(e,new le),a;return t.era==="BC"?a=t.year===1?"0000":"-"+String(Math.abs(1-t.year)).padStart(6,"00"):a=String(t.year).padStart(4,"0"),`${a}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`}function ps(e){return`${ms(e)}T${fs(e)}`}function Um(e){let t=Math.sign(e)<0?"-":"+";e=Math.abs(e);let a=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%36e5%6e4/1e3),n=`${t}${String(a).padStart(2,"0")}:${String(r).padStart(2,"0")}`;return i!==0&&(n+=`:${String(i).padStart(2,"0")}`),n}function Hm(e){return`${ps(e)}${Um(e.offset)}[${e.timeZone}]`}function tn(e){let t=typeof e[0]=="object"?e.shift():new le,a;if(typeof e[0]=="string")a=e.shift();else{let o=t.getEras();a=o[o.length-1]}let r=e.shift(),i=e.shift(),n=e.shift();return[t,a,r,i,n]}var Fr;const pa=class pa{constructor(...t){xt(this,Fr);let[a,r,i,n,o]=tn(t);this.calendar=a,this.era=r,this.year=i,this.month=n,this.day=o,et(this)}copy(){return this.era?new pa(this.calendar,this.era,this.year,this.month,this.day):new pa(this.calendar,this.year,this.month,this.day)}add(t){return Pa(this,t)}subtract(t){return os(this,t)}set(t){return Yr(this,t)}cycle(t,a,r){return Jr(this,t,a,r)}toDate(t){return rs(this,t)}toString(){return ms(this)}compare(t){return Wo(this,t)}};Fr=new WeakMap;let te=pa;var Ar;const bn=class bn{constructor(t=0,a=0,r=0,i=0){xt(this,Ar);this.hour=t,this.minute=a,this.second=r,this.millisecond=i,ss(this)}copy(){return new bn(this.hour,this.minute,this.second,this.millisecond)}add(t){return us(this,t)}subtract(t){return Im(this,t)}set(t){return Rt(this,t)}cycle(t,a,r){return en(this,t,a,r)}toString(){return fs(this)}compare(t){return Qo(this,t)}};Ar=new WeakMap;let ht=bn;var Tr;const ga=class ga{constructor(...t){xt(this,Tr);let[a,r,i,n,o]=tn(t);this.calendar=a,this.era=r,this.year=i,this.month=n,this.day=o,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,et(this)}copy(){return this.era?new ga(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new ga(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(t){return Pa(this,t)}subtract(t){return os(this,t)}set(t){return Yr(Rt(this,t),t)}cycle(t,a,r){switch(t){case"era":case"year":case"month":case"day":return Jr(this,t,a,r);default:return en(this,t,a,r)}}toDate(t,a){return rs(this,t,a)}toString(){return ps(this)}compare(t){let a=Wo(this,t);return a===0?Qo(this,ke(t)):a}};Tr=new WeakMap;let sa=ga;var Mr;const ha=class ha{constructor(...t){xt(this,Mr);let[a,r,i,n,o]=tn(t),s=t.shift(),u=t.shift();this.calendar=a,this.era=r,this.year=i,this.month=n,this.day=o,this.timeZone=s,this.offset=u,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,et(this)}copy(){return this.era?new ha(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new ha(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(t){return ds(this,t)}subtract(t){return Fm(this,t)}set(t,a){return Tm(this,t,a)}cycle(t,a,r){return Am(this,t,a,r)}toDate(){return Sm(this)}toString(){return Hm(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(t){return this.toDate().getTime()-Pm(t,this.timeZone).toDate().getTime()}};Mr=new WeakMap;let la=ha;const ct=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],Lm=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],Jt=[1867,1911,1925,1988,2018],He=["meiji","taisho","showa","heisei","reiwa"];function Zn(e){const t=ct.findIndex(([a,r,i])=>e.year<a||e.year===a&&e.month<r||e.year===a&&e.month===r&&e.day<i);return t===-1?ct.length-1:t===0?0:t-1}function Qa(e){let t=Jt[He.indexOf(e.era)];if(!t)throw new Error("Unknown era: "+e.era);return new te(e.year+t,e.month,e.day)}class jm extends le{fromJulianDay(t){let a=super.fromJulianDay(t),r=Zn(a);return new te(this,He[r],a.year-Jt[r],a.month,a.day)}toJulianDay(t){return super.toJulianDay(Qa(t))}balanceDate(t){let a=Qa(t),r=Zn(a);He[r]!==t.era&&(t.era=He[r],t.year=a.year-Jt[r]),this.constrainDate(t)}constrainDate(t){let a=He.indexOf(t.era),r=Lm[a];if(r!=null){let[i,n,o]=r,s=i-Jt[a];t.year=Math.max(1,Math.min(s,t.year)),t.year===s&&(t.month=Math.min(n,t.month),t.month===n&&(t.day=Math.min(o,t.day)))}if(t.year===1&&a>=0){let[,i,n]=ct[a];t.month=Math.max(i,t.month),t.month===i&&(t.day=Math.max(n,t.day))}}getEras(){return He}getYearsInEra(t){let a=He.indexOf(t.era),r=ct[a],i=ct[a+1];if(i==null)return 9999-r[0]+1;let n=i[0]-r[0];return(t.month<i[1]||t.month===i[1]&&t.day<i[2])&&n++,n}getDaysInMonth(t){return super.getDaysInMonth(Qa(t))}getMinimumMonthInYear(t){let a=qn(t);return a?a[1]:1}getMinimumDayInMonth(t){let a=qn(t);return a&&t.month===a[1]?a[2]:1}constructor(...t){super(...t),this.identifier="japanese"}}function qn(e){if(e.year===1){let t=He.indexOf(e.era);return ct[t]}}const gs=-543;class Gm extends le{fromJulianDay(t){let a=super.fromJulianDay(t),r=Mt(a.era,a.year);return new te(this,r-gs,a.month,a.day)}toJulianDay(t){return super.toJulianDay(Wn(t))}getEras(){return["BE"]}getDaysInMonth(t){return super.getDaysInMonth(Wn(t))}balanceDate(){}constructor(...t){super(...t),this.identifier="buddhist"}}function Wn(e){let[t,a]=Ca(e.year+gs);return new te(t,a,e.month,e.day)}const ua=1911;function hs(e){return e.era==="minguo"?e.year+ua:1-e.year+ua}function Qn(e){let t=e-ua;return t>0?["minguo",t]:["before_minguo",1-t]}class Km extends le{fromJulianDay(t){let a=super.fromJulianDay(t),r=Mt(a.era,a.year),[i,n]=Qn(r);return new te(this,i,n,a.month,a.day)}toJulianDay(t){return super.toJulianDay(Yn(t))}getEras(){return["before_minguo","minguo"]}balanceDate(t){let[a,r]=Qn(hs(t));t.era=a,t.year=r}isInverseEra(t){return t.era==="before_minguo"}getDaysInMonth(t){return super.getDaysInMonth(Yn(t))}getYearsInEra(t){return t.era==="before_minguo"?9999:9999-ua}constructor(...t){super(...t),this.identifier="roc"}}function Yn(e){let[t,a]=Ca(hs(e));return new te(t,a,e.month,e.day)}const Jn=1948320,ei=[0,31,62,93,124,155,186,216,246,276,306,336];class zm{fromJulianDay(t){let a=t-Jn,r=1+Math.floor((33*a+3)/12053),i=365*(r-1)+Math.floor((8*r+21)/33),n=a-i,o=n<216?Math.floor(n/31):Math.floor((n-6)/30),s=n-ei[o]+1;return new te(this,r,o+1,s)}toJulianDay(t){let a=Jn-1+365*(t.year-1)+Math.floor((8*t.year+21)/33);return a+=ei[t.month-1],a+=t.day,a}getMonthsInYear(){return 12}getDaysInMonth(t){return t.month<=6?31:t.month<=11||dt(25*t.year+11,33)<8?30:29}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getEras(){return["AP"]}getYearsInEra(){return 9377}constructor(){this.identifier="persian"}}const Ya=78,ti=80;class Xm extends le{fromJulianDay(t){let a=super.fromJulianDay(t),r=a.year-Ya,i=t-Qe(a.era,a.year,1,1),n;i<ti?(r--,n=Le(a.year-1)?31:30,i+=n+155+90+10):(n=Le(a.year)?31:30,i-=ti);let o,s;if(i<n)o=1,s=i+1;else{let u=i-n;u<155?(o=Math.floor(u/31)+2,s=u%31+1):(u-=155,o=Math.floor(u/30)+7,s=u%30+1)}return new te(this,r,o,s)}toJulianDay(t){let a=t.year+Ya,[r,i]=Ca(a),n,o;return Le(i)?(n=31,o=Qe(r,i,3,21)):(n=30,o=Qe(r,i,3,22)),t.month===1?o+t.day-1:(o+=n+Math.min(t.month-2,5)*31,t.month>=8&&(o+=(t.month-7)*30),o+=t.day-1,o)}getDaysInMonth(t){return t.month===1&&Le(t.year+Ya)||t.month>=2&&t.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return["saka"]}balanceDate(){}constructor(...t){super(...t),this.identifier="indian"}}const da=1948440,ai=1948439,ye=1300,it=1600,Zm=460322;function ca(e,t,a,r){return r+Math.ceil(29.5*(a-1))+(t-1)*354+Math.floor((3+11*t)/30)+e-1}function $s(e,t,a){let r=Math.floor((30*(a-t)+10646)/10631),i=Math.min(12,Math.ceil((a-(29+ca(t,r,1,1)))/29.5)+1),n=a-ca(t,r,i,1)+1;return new te(e,r,i,n)}function ri(e){return(14+11*e)%30<11}class an{fromJulianDay(t){return $s(this,da,t)}toJulianDay(t){return ca(da,t.year,t.month,t.day)}getDaysInMonth(t){let a=29+t.month%2;return t.month===12&&ri(t.year)&&a++,a}getMonthsInYear(){return 12}getDaysInYear(t){return ri(t.year)?355:354}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9665}getEras(){return["AH"]}constructor(){this.identifier="islamic-civil"}}class qm extends an{fromJulianDay(t){return $s(this,ai,t)}toJulianDay(t){return ca(ai,t.year,t.month,t.day)}constructor(...t){super(...t),this.identifier="islamic-tbla"}}const Wm="qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";let wr,ft;function ea(e){return Zm+ft[e-ye]}function Et(e,t){let a=e-ye,r=1<<11-(t-1);return wr[a]&r?30:29}function ni(e,t){let a=ea(e);for(let r=1;r<t;r++)a+=Et(e,r);return a}function ii(e){return ft[e+1-ye]-ft[e-ye]}class Qm extends an{constructor(){if(super(),this.identifier="islamic-umalqura",wr||(wr=new Uint16Array(Uint8Array.from(atob(Wm),t=>t.charCodeAt(0)).buffer)),!ft){ft=new Uint32Array(it-ye+1);let t=0;for(let a=ye;a<=it;a++){ft[a-ye]=t;for(let r=1;r<=12;r++)t+=Et(a,r)}}}fromJulianDay(t){let a=t-da,r=ea(ye),i=ea(it);if(a<r||a>i)return super.fromJulianDay(t);{let n=ye-1,o=1,s=1;for(;s>0;){n++,s=a-ea(n)+1;let u=ii(n);if(s===u){o=12;break}else if(s<u){let d=Et(n,o);for(o=1;s>d;)s-=d,o++,d=Et(n,o);break}}return new te(this,n,o,a-ni(n,o)+1)}}toJulianDay(t){return t.year<ye||t.year>it?super.toJulianDay(t):da+ni(t.year,t.month)+(t.day-1)}getDaysInMonth(t){return t.year<ye||t.year>it?super.getDaysInMonth(t):Et(t.year,t.month)}getDaysInYear(t){return t.year<ye||t.year>it?super.getDaysInYear(t):ii(t.year)}}const oi=347997,ys=1080,Ds=24*ys,Ym=29,Jm=12*ys+793,e4=Ym*Ds+Jm;function We(e){return dt(e*7+1,19)<7}function ta(e){let t=Math.floor((235*e-234)/19),a=12084+13753*t,r=t*29+Math.floor(a/25920);return dt(3*(r+1),7)<3&&(r+=1),r}function t4(e){let t=ta(e-1),a=ta(e);return ta(e+1)-a===356?2:a-t===382?1:0}function _t(e){return ta(e)+t4(e)}function bs(e){return _t(e+1)-_t(e)}function a4(e){let t=bs(e);switch(t>380&&(t-=30),t){case 353:return 0;case 354:return 1;case 355:return 2}}function Xt(e,t){if(t>=6&&!We(e)&&t++,t===4||t===7||t===9||t===11||t===13)return 29;let a=a4(e);return t===2?a===2?30:29:t===3?a===0?29:30:t===6?We(e)?30:0:30}class r4{fromJulianDay(t){let a=t-oi,r=a*Ds/e4,i=Math.floor((19*r+234)/235)+1,n=_t(i),o=Math.floor(a-n);for(;o<1;)i--,n=_t(i),o=Math.floor(a-n);let s=1,u=0;for(;u<o;)u+=Xt(i,s),s++;s--,u-=Xt(i,s);let d=o-u;return new te(this,i,s,d)}toJulianDay(t){let a=_t(t.year);for(let r=1;r<t.month;r++)a+=Xt(t.year,r);return a+t.day+oi}getDaysInMonth(t){return Xt(t.year,t.month)}getMonthsInYear(t){return We(t.year)?13:12}getDaysInYear(t){return bs(t.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9999}getEras(){return["AM"]}balanceYearMonth(t,a){a.year!==t.year&&(We(a.year)&&!We(t.year)&&a.month>6?t.month--:!We(a.year)&&We(t.year)&&a.month>6&&t.month++)}constructor(){this.identifier="hebrew"}}const Cr=1723856,si=1824665,Er=5500;function fa(e,t,a,r){return e+365*t+Math.floor(t/4)+30*(a-1)+r-1}function rn(e,t){let a=Math.floor(4*(t-e)/1461),r=1+Math.floor((t-fa(e,a,1,1))/30),i=t+1-fa(e,a,r,1);return[a,r,i]}function xs(e){return Math.floor(e%4/3)}function vs(e,t){return t%13!==0?30:xs(e)+5}class nn{fromJulianDay(t){let[a,r,i]=rn(Cr,t),n="AM";return a<=0&&(n="AA",a+=Er),new te(this,n,a,r,i)}toJulianDay(t){let a=t.year;return t.era==="AA"&&(a-=Er),fa(Cr,a,t.month,t.day)}getDaysInMonth(t){return vs(t.year,t.month)}getMonthsInYear(){return 13}getDaysInYear(t){return 365+xs(t.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(t){return t.era==="AA"?9999:9991}getEras(){return["AA","AM"]}constructor(){this.identifier="ethiopic"}}class n4 extends nn{fromJulianDay(t){let[a,r,i]=rn(Cr,t);return a+=Er,new te(this,"AA",a,r,i)}getEras(){return["AA"]}getYearsInEra(){return 9999}constructor(...t){super(...t),this.identifier="ethioaa"}}class i4 extends nn{fromJulianDay(t){let[a,r,i]=rn(si,t),n="CE";return a<=0&&(n="BCE",a=1-a),new te(this,n,a,r,i)}toJulianDay(t){let a=t.year;return t.era==="BCE"&&(a=1-a),fa(si,a,t.month,t.day)}getDaysInMonth(t){let a=t.year;return t.era==="BCE"&&(a=1-a),vs(a,t.month)}isInverseEra(t){return t.era==="BCE"}balanceDate(t){t.year<=0&&(t.era=t.era==="BCE"?"CE":"BCE",t.year=1-t.year)}getEras(){return["BCE","CE"]}getYearsInEra(t){return t.era==="BCE"?9999:9715}constructor(...t){super(...t),this.identifier="coptic"}}function ws(e){switch(e){case"buddhist":return new Gm;case"ethiopic":return new nn;case"ethioaa":return new n4;case"coptic":return new i4;case"hebrew":return new r4;case"indian":return new Xm;case"islamic-civil":return new an;case"islamic-tbla":return new qm;case"islamic-umalqura":return new Qm;case"japanese":return new jm;case"persian":return new zm;case"roc":return new Km;case"gregory":default:return new le}}let Ja=new Map;class Oe{constructor(t,a={}){this.formatter=Cs(t,a),this.options=a}format(t){return this.formatter.format(t)}formatToParts(t){return this.formatter.formatToParts(t)}formatRange(t,a){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(t,a);if(a<t)throw new RangeError("End date must be >= start date");return`${this.formatter.format(t)} – ${this.formatter.format(a)}`}formatRangeToParts(t,a){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(t,a);if(a<t)throw new RangeError("End date must be >= start date");let r=this.formatter.formatToParts(t),i=this.formatter.formatToParts(a);return[...r.map(n=>({...n,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...i.map(n=>({...n,source:"endRange"}))]}resolvedOptions(){let t=this.formatter.resolvedOptions();return l4()&&(this.resolvedHourCycle||(this.resolvedHourCycle=u4(t.locale,this.options)),t.hourCycle=this.resolvedHourCycle,t.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),t.calendar==="ethiopic-amete-alem"&&(t.calendar="ethioaa"),t}}const o4={true:{ja:"h11"},false:{}};function Cs(e,t={}){if(typeof t.hour12=="boolean"&&s4()){t={...t};let i=o4[String(t.hour12)][e.split("-")[0]],n=t.hour12?"h12":"h23";t.hourCycle=i??n,delete t.hour12}let a=e+(t?Object.entries(t).sort((i,n)=>i[0]<n[0]?-1:1).join():"");if(Ja.has(a))return Ja.get(a);let r=new Intl.DateTimeFormat(e,t);return Ja.set(a,r),r}let er=null;function s4(){return er==null&&(er=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),er}let tr=null;function l4(){return tr==null&&(tr=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),tr}function u4(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),e+=(e.includes("-u-")?"":"-u")+"-nu-latn";let a=Cs(e,{...t,timeZone:void 0}),r=parseInt(a.formatToParts(new Date(2020,2,3,0)).find(n=>n.type==="hour").value,10),i=parseInt(a.formatToParts(new Date(2020,2,3,23)).find(n=>n.type==="hour").value,10);if(r===0&&i===23)return"h23";if(r===24&&i===23)return"h24";if(r===0&&i===11)return"h11";if(r===12&&i===11)return"h12";throw new Error("Unexpected hour cycle result")}function Be(e){e=zo(e??{},d4);let{locale:t}=fe();return l.useMemo(()=>new Oe(t,e),[t,e])}function d4(e,t){if(e===t)return!0;let a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(let i of a)if(t[i]!==e[i])return!1;return!0}function Es(e){return e&&e.__esModule?e.default:e}const on=new WeakMap;function It(e){return(e==null?void 0:e.calendar.identifier)==="gregory"&&e.era==="BC"?"short":void 0}function c4(e){let t=Re(Es(Tt),"@react-aria/calendar"),a,r;"highlightedRange"in e?{start:a,end:r}=e.highlightedRange||{}:(a=Array.isArray(e.value)?e.value[0]:e.value??void 0,r=Array.isArray(e.value)?e.value.at(-1):e.value??void 0);let i=Be({weekday:"long",month:"long",year:"numeric",day:"numeric",era:It(a)||It(r),timeZone:e.timeZone}),{locale:n}=fe(),o=l.useMemo(()=>new Intl.ListFormat(n),[n]),s="anchorDate"in e?e.anchorDate:null;return l.useMemo(()=>{if(!s&&a&&r){if(ee(a,r)){let u=i.format(a.toDate(e.timeZone));return t.format("selectedDateDescription",{date:u})}else if("highlightedRange"in e){let u=Pr(i,t,a,r,e.timeZone);return t.format("selectedRangeDescription",{dateRange:u})}else if(Array.isArray(e.value)){let u=e.value.map(c=>i.format(c.toDate(e.timeZone))),d=o.format(u);return t.format("selectedDateDescription",{date:d})}}return""},[a,r,s,e,t,i,o])}function _r(e,t,a,r){let i=Re(Es(Tt),"@react-aria/calendar"),n=It(e)||It(t),o=Be({month:"long",year:"numeric",era:n,calendar:e.calendar.identifier,timeZone:a}),s=Be({month:"long",year:"numeric",day:"numeric",era:n,calendar:e.calendar.identifier,timeZone:a});return l.useMemo(()=>{if(ee(e,Je(e))){let u=e,d=t;if(e.calendar.getFormattableMonth&&(u=e.calendar.getFormattableMonth(e)),t.calendar.getFormattableMonth&&(d=t.calendar.getFormattableMonth(t)),ee(t,oa(e)))return o.format(u.toDate(a));if(ee(t,oa(t)))return r?Pr(o,i,u,d,a):o.formatRange(u.toDate(a),d.toDate(a))}return r?Pr(s,i,e,t,a):s.formatRange(e.toDate(a),t.toDate(a))},[e,t,o,s,i,a,r])}function Pr(e,t,a,r,i){let n=e.formatRangeToParts(a.toDate(i),r.toDate(i)),o=-1;for(let d=0;d<n.length;d++){let c=n[d];if(c.source==="shared"&&c.type==="literal")o=d;else if(c.source==="endRange")break}let s="",u="";for(let d=0;d<n.length;d++)d<o?s+=n[d].value:d>o&&(u+=n[d].value);return t.format("dateRange",{startDate:s,endDate:u})}function f4(e){return e&&e.__esModule?e.default:e}function m4(e,t){let a=Re(f4(Tt),"@react-aria/calendar"),r=ue(e),i=_r(t.visibleRange.start,t.visibleRange.end,t.timeZone,!1),n=_r(t.visibleRange.start,t.visibleRange.end,t.timeZone,!0);En(()=>{t.isFocused||dr(n)},[n]);let o=c4(t);En(()=>{o&&dr(o,"polite",4e3)},[o]);let s=ki([!!e.errorMessage,e.isInvalid,e.validationState]);on.set(t,{ariaLabel:e["aria-label"],ariaLabelledBy:e["aria-labelledby"],errorMessageId:s,selectedDateDescription:o});let[u,d]=l.useState(!1),c=e.isDisabled||t.isNextVisibleRangeInvalid();c&&u&&(d(!1),t.setFocused(!0));let[m,f]=l.useState(!1),g=e.isDisabled||t.isPreviousVisibleRangeInvalid();g&&m&&(f(!1),t.setFocused(!0));let p=$a({id:e.id,"aria-label":[e["aria-label"],n].filter(Boolean).join(", "),"aria-labelledby":e["aria-labelledby"]});return{calendarProps:ae(r,p,{role:"application","aria-details":e["aria-details"]||void 0,"aria-describedby":e["aria-describedby"]||void 0}),nextButtonProps:{onPress:()=>t.focusNextPage(),"aria-label":a.format("next"),isDisabled:c,onFocusChange:d},prevButtonProps:{onPress:()=>t.focusPreviousPage(),"aria-label":a.format("previous"),isDisabled:g,onFocusChange:f},errorMessageProps:{id:s},title:i}}function p4(e,t){return m4(e,t)}function g4(e,t){let{startDate:a=t.visibleRange.start,endDate:r=t.visibleRange.end,firstDayOfWeek:i}=e,{direction:n}=fe(),{keyboardProps:o}=Pt({shortcuts:{End:()=>{t.focusSectionEnd()},Home:()=>{t.focusSectionStart()},Escape:()=>("setAnchorDate"in t&&t.setAnchorDate(null),!1)}}),{keyboardProps:s}=Pt({shortcuts:{Enter:()=>{t.selectFocusedDate()}," ":()=>{t.selectFocusedDate()},PageUp:()=>{t.focusPreviousSection()},"Shift+PageUp":()=>{t.focusPreviousSection(!0)},PageDown:()=>{t.focusNextSection()},"Shift+PageDown":()=>{t.focusNextSection(!0)},ArrowLeft:()=>{n==="rtl"?t.focusNextDay():t.focusPreviousDay()},ArrowUp:()=>{t.focusPreviousRow()},ArrowRight:()=>{n==="rtl"?t.focusPreviousDay():t.focusNextDay()},ArrowDown:()=>{t.focusNextRow()}},allowRepeats:!0}),u=_r(a,r,t.timeZone,!0),{ariaLabel:d,ariaLabelledBy:c}=on.get(t),m=$a({"aria-label":[d,u].filter(Boolean).join(", "),"aria-labelledby":c}),f=Be({weekday:e.weekdayStyle||"narrow",timeZone:t.timeZone}),{locale:g}=fe(),p=l.useMemo(()=>{let y=t.visibleDuration.days&&t.visibleDuration.days<7,h=y?a:kt(_a(t.timeZone),g,i),_=y?t.visibleDuration.days:7;return[...new Array(_).keys()].map(D=>{let b=h.add({days:D}).toDate(t.timeZone);return f.format(b)})},[g,t.timeZone,f,i,a,t.visibleDuration.days]),$=t.getWeeksInMonth(a);return{gridProps:ae(m,{role:"grid","aria-readonly":t.isReadOnly||void 0,"aria-disabled":t.isDisabled||void 0,"aria-multiselectable":"highlightedRange"in t||t.selectionMode==="multiple"||void 0,onFocus:()=>t.setFocused(!0),onBlur:()=>t.setFocused(!1)},o,s),headerProps:{"aria-hidden":!0},weekDays:p,weeksInMonth:$}}function h4(e){return e&&e.__esModule?e.default:e}function $4(e,t,a){let{date:r,isDisabled:i}=e,{errorMessageId:n,selectedDateDescription:o}=on.get(t),s=Re(h4(Tt),"@react-aria/calendar"),u=Be({weekday:"long",day:"numeric",month:"long",year:"numeric",era:It(r),timeZone:t.timeZone}),d=t.isCellFocused(r)&&!e.isOutsideMonth;i=i||t.isCellDisabled(r)||!!e.isOutsideMonth;let c=t.isCellUnavailable(r),m=!i&&!c,f=t.isSelected(r)&&m,g=!1;t.isValueInvalid&&("highlightedRange"in t?g=!t.anchorDate&&t.highlightedRange!=null&&r.compare(t.highlightedRange.start)>=0&&r.compare(t.highlightedRange.end)<=0:Array.isArray(t.value)?g=t.value.some(w=>ee(w,r)):t.value&&(g=ee(t.value,r))),g&&!i&&(f=!0),r=zo(r,hm);let p=l.useMemo(()=>r.toDate(t.timeZone),[r,t.timeZone]),$=Zo(r,t.timeZone),y=l.useMemo(()=>{let w="";return"highlightedRange"in t&&t.value&&!t.anchorDate&&(ee(r,t.value.start)||ee(r,t.value.end))&&(w=o+", "),w+=u.format(p),$?w=s.format(f?"todayDateSelected":"todayDate",{date:w}):f&&(w=s.format("dateSelected",{date:w})),t.minValue&&ee(r,t.minValue)?w+=", "+s.format("minimumDate"):t.maxValue&&ee(r,t.maxValue)&&(w+=", "+s.format("maximumDate")),w},[u,p,s,f,$,r,t,o]),h="";"anchorDate"in t&&d&&!t.isReadOnly&&m&&(t.anchorDate?h=s.format("finishRangeSelectionPrompt"):h=s.format("startRangeSelectionPrompt"));let _=At(h),D=l.useRef(!1),x=l.useRef(!1),b=l.useRef(void 0),{pressProps:S,isPressed:R}=Or({shouldCancelOnPointerExit:"anchorDate"in t&&!!t.anchorDate,preventFocusOnPress:!0,isDisabled:!m||t.isReadOnly,onPressStart(w){if(t.isReadOnly){t.setFocusedDate(r),t.setFocused(!0);return}if("highlightedRange"in t&&!t.anchorDate&&(w.pointerType==="mouse"||w.pointerType==="touch")){if(t.highlightedRange&&!g){if(ee(r,t.highlightedRange.start)){t.setAnchorDate(t.highlightedRange.end),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}else if(ee(r,t.highlightedRange.end)){t.setAnchorDate(t.highlightedRange.start),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}}let F=()=>{t.setDragging(!0),b.current=void 0,t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0),D.current=!0};w.pointerType==="touch"?b.current=setTimeout(F,200):F()}},onPressEnd(){x.current=!1,D.current=!1,clearTimeout(b.current),b.current=void 0},onPress(){!("anchorDate"in t)&&!t.isReadOnly&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))},onPressUp(w){t.isReadOnly||("anchorDate"in t&&b.current&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)),"anchorDate"in t&&(x.current?t.setAnchorDate(r):t.anchorDate&&!D.current?(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)):w.pointerType==="keyboard"&&!t.anchorDate?(t.selectDate(r),t.focusNearestAvailableDate(r)):w.pointerType==="virtual"&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))))}}),k;i||(k=ee(r,t.focusedDate)?0:-1),l.useEffect(()=>{d&&a.current&&(Nd(a.current),Ud()!=="pointer"&&cr()===a.current&&Ri(a.current,{containingElement:Vr(a.current)}))},[d,a]);let I=Be({day:"numeric",timeZone:t.timeZone,calendar:r.calendar.identifier}),P=l.useMemo(()=>I.formatToParts(p).find(w=>w.type==="day").value,[I,p]);return{cellProps:{role:"gridcell","aria-disabled":!m||void 0,"aria-selected":f||void 0,"aria-invalid":g||void 0},buttonProps:ae(S,{onFocus(){i||(t.setFocusedDate(r),t.setFocused(!0))},tabIndex:k,role:"button","aria-disabled":!m||void 0,"aria-label":y,"aria-invalid":g||void 0,"aria-describedby":[g?n:void 0,_["aria-describedby"]].filter(Boolean).join(" ")||void 0,onPointerEnter(w){"highlightDate"in t&&(w.pointerType!=="touch"||t.isDragging)&&m&&t.highlightDate(r)},onPointerDown(w){let F=be(w);F instanceof HTMLElement&&"releasePointerCapture"in F&&("hasPointerCapture"in F?F.hasPointerCapture(w.pointerId)&&F.releasePointerCapture(w.pointerId):F.releasePointerCapture(w.pointerId))},onContextMenu(w){w.preventDefault()}}),isPressed:R,isFocused:d,isSelected:f,isDisabled:i,isUnavailable:c,isOutsideVisibleRange:r.compare(t.visibleRange.start)<0||r.compare(t.visibleRange.end)>0,isInvalid:g,formattedDate:P}}function Zt(e,t,a){return t!=null&&e.compare(t)<0||a!=null&&e.compare(a)>0}function li(e,t,a,r,i){let n={};for(let s in t)n[s]=Math.floor(t[s]/2),n[s]>0&&t[s]%2===0&&n[s]--;let o=Ye(e,t,a).subtract(n);return Ft(e,o,t,a,r,i)}function Ye(e,t,a,r,i){let n=e;return t.years?n=Dm(e):t.months?n=Je(e):(t.weeks||t.days&&t.days>7)&&(n=kt(e,a)),Ft(e,n,t,a,r,i)}function Sr(e,t,a,r,i){let n={...t};n.days?n.days--:n.weeks?n.weeks--:n.months?n.months--:n.years&&n.years--;let o=Ye(e,t,a).subtract(n);return Ft(e,o,t,a,r,i)}function Ft(e,t,a,r,i,n){if(i&&e.compare(i)>=0){let o=es(t,Ye(pe(i),a,r));o&&(t=o)}if(n&&e.compare(n)<=0){let o=Jo(t,Sr(pe(n),a,r));o&&(t=o)}return t}function Fe(e,t,a){if(t){let r=es(e,pe(t));r&&(e=r)}if(a){let r=Jo(e,pe(a));r&&(e=r)}return e}function y4(e,t,a){if(!a)return e;for(;e.compare(t)>=0&&a(e);)e=e.subtract({days:1});return e.compare(t)>=0?e:null}function D4(e,t){return e===t?!0:e.days===t.days&&e.weeks===t.weeks&&e.months===t.months&&e.years===t.years}function b4(e){let t=l.useMemo(()=>new Oe(e.locale),[e.locale]),a=l.useMemo(()=>t.resolvedOptions(),[t]),{locale:r,createCalendar:i,visibleDuration:n={months:1},minValue:o,maxValue:s,selectionAlignment:u,isDateUnavailable:d,pageBehavior:c="visible",selectionMode:m="single",firstDayOfWeek:f,weeksInMonth:g}=e,p=l.useMemo(()=>i(a.calendar),[i,a.calendar]),[$,y]=ra(e.value,e.defaultValue??null,e.onChange),h=l.useMemo(()=>Array.isArray($)?$.map(B=>J(pe(B),p)):$?J(pe($),p):null,[$,p]),_=l.useMemo(()=>{let B=Array.isArray($)?$[0]:$;return B&&"timeZone"in B?B.timeZone:a.timeZone},[$,a.timeZone]),D=l.useMemo(()=>e.focusedValue?Fe(J(pe(e.focusedValue),p),o,s):void 0,[e.focusedValue,p,o,s]),x=l.useMemo(()=>e.defaultFocusedValue?Fe(J(pe(e.defaultFocusedValue),p),o,s):Fe(h?Array.isArray(h)?h[0]:h:J(_a(_),p),o,s),[e.defaultFocusedValue,h,_,p,o,s]),[b,S]=ra(D,x,e.onFocusChange),R=()=>{switch(u){case"start":return Ye(b,n,r,o,s);case"end":return Sr(b,n,r,o,s);case"center":default:return li(b,n,r,o,s)}},[k,I]=l.useState(R),[P,w]=l.useState(e.autoFocus||!1),[F,M]=l.useState(n);D4(n,F)||(M(n),I(R()));let O=l.useMemo(()=>{let B={...n};return B.days?B.days--:B.days=-1,k.add(B)},[k,n]),[Q,L]=l.useState(p);if(!Ea(p,Q)){let B=J(b,p);I(li(B,n,r,o,s)),S(B),L(p)}Zt(b,o,s)?S(Fe(b,o,s)):b.compare(k)<0?I(Sr(b,n,r,o,s)):b.compare(O)>0&&I(Ye(b,n,r,o,s));function G(B){B=Fe(B,o,s),S(B)}function W(B){let N=Fe(B,o,s),H=y4(N,k,d);if(!H)return null;let T=Array.isArray($)?$[0]:$,U=J(H,(T==null?void 0:T.calendar)||new le);return T&&"hour"in T?T.set(U):U}function X(B){if(!e.isDisabled&&!e.isReadOnly){if(B===null){y(m==="multiple"?[]:null);return}if(Array.isArray(B))y(B.map(W).filter(Boolean));else{let N=W(B);N&&y(N)}}}let A=l.useMemo(()=>h?Array.isArray(h)?h.some(B=>(d==null?void 0:d(B))||Zt(B,o,s)):(d==null?void 0:d(h))||Zt(h,o,s):!1,[h,d,o,s]),j=e.isInvalid||e.validationState==="invalid"||A,z=j?"invalid":null,V=l.useMemo(()=>c==="visible"?n:ar(n),[c,n]);return{isDisabled:e.isDisabled??!1,isReadOnly:e.isReadOnly??!1,value:h,setValue:X,selectionMode:m,visibleDuration:n,visibleRange:{start:k,end:O},minValue:o,maxValue:s,focusedDate:b,timeZone:_,validationState:z,isValueInvalid:j,setFocusedDate(B){G(B)},focusNextDay(){G(b.add({days:1}))},focusPreviousDay(){G(b.subtract({days:1}))},focusNextRow(){n.days?this.focusNextPage():(n.weeks||n.months||n.years)&&G(b.add({weeks:1}))},focusPreviousRow(){n.days?this.focusPreviousPage():(n.weeks||n.months||n.years)&&G(b.subtract({weeks:1}))},focusNextPage(){let B=k.add(V);S(Fe(b.add(V),o,s)),I(Ye(Ft(b,B,V,r,o,s),V,r))},focusPreviousPage(){let B=k.subtract(V);S(Fe(b.subtract(V),o,s)),I(Ye(Ft(b,B,V,r,o,s),V,r))},focusSectionStart(){n.days?G(k):n.weeks?G(kt(b,r)):(n.months||n.years)&&G(Je(b))},focusSectionEnd(){n.days?G(O):n.weeks?G(bm(b,r)):(n.months||n.years)&&G(oa(b))},focusNextSection(B){if(!B&&!n.days){G(b.add(ar(n)));return}n.days?this.focusNextPage():n.weeks?G(b.add({months:1})):(n.months||n.years)&&G(b.add({years:1}))},focusPreviousSection(B){if(!B&&!n.days){G(b.subtract(ar(n)));return}n.days?this.focusPreviousPage():n.weeks?G(b.subtract({months:1})):(n.months||n.years)&&G(b.subtract({years:1}))},selectFocusedDate(){d&&d(b)||this.selectDate(b)},selectDate(B){if(!(e.isDisabled||e.isReadOnly))if(m==="multiple"&&B!=null){let N=W(B);if(!N)return;let H=[];Array.isArray($)?H=$:$!=null&&(H=[$]);let T=H.findIndex(re=>ee(re,N)),U=T>=0?H.slice(0,T).concat(H.slice(T+1)):[...H,N];y(U)}else X(B)},isFocused:P,setFocused:w,isInvalid(B){return Zt(B,o,s)},isSelected(B){return!h||this.isCellDisabled(B)||this.isCellUnavailable(B)?!1:Array.isArray(h)?h.some(N=>ee(N,B)):ee(B,h)},isCellFocused(B){return P&&b&&ee(B,b)},isCellDisabled(B){return e.isDisabled||B.compare(k)<0||B.compare(O)>0||this.isInvalid(B)},isCellUnavailable(B){return e.isDateUnavailable?e.isDateUnavailable(B):!1},isPreviousVisibleRangeInvalid(){let B=k.subtract({days:1});return ee(B,k)||this.isInvalid(B)},isNextVisibleRangeInvalid(){let B=O.add({days:1});return ee(B,O)||this.isInvalid(B)},getDatesInWeek(B,N=k){let H=N.add({weeks:B}),T=[],U=n.days&&n.days<7?n.days:7;if(U===7){H=kt(H,r,f);let re=Wr(H,r,f);for(let Ie=0;Ie<re;Ie++)T.push(null)}for(;T.length<U;){T.push(H);let re=H.add({days:1});if(ee(H,re))break;H=re}for(;T.length<U;)T.push(null);return T},getWeeksInMonth(B=k){let N=g||wm(B,r,f);return(n.weeks||n.days)&&(N=n.weeks??0,n.days&&(N+=Math.ceil(n.days/7))),N}}}function ar(e){let t={...e};for(let a in e)t[a]=1;return t}const ma=l.createContext(null),x4=l.createContext(null),Sa=l.createContext(null),Ba=l.createContext(null),v4=l.forwardRef(function(t,a){[t,a]=at(t,a,ma);let{locale:r}=fe(),i=b4({...t,locale:r,createCalendar:t.createCalendar||ws}),{calendarProps:n,prevButtonProps:o,nextButtonProps:s,errorMessageProps:u,title:d}=p4(t,i),c=Ve({...t,values:{state:i,isDisabled:t.isDisabled||!1,isInvalid:i.isValueInvalid},defaultClassName:"react-aria-Calendar"}),m=ue(t,{global:!0});return E.createElement(me.div,{...ae(m,c,n),ref:a,slot:t.slot||void 0,"data-disabled":t.isDisabled||void 0,"data-invalid":i.isValueInvalid||void 0},E.createElement($t,{values:[[ya,{slots:{previous:o,next:s}}],[Ii,{"aria-hidden":!0,level:2,children:d}],[Sa,i],[ma,t],[Da,{slots:{errorMessage:u}}]]},E.createElement(_n,null,E.createElement("h2",null,n["aria-label"])),c.children,E.createElement(_n,null,E.createElement("button",{"aria-label":s["aria-label"],disabled:s.isDisabled,onClick:()=>i.focusNextPage(),tabIndex:-1}))))}),ka=l.createContext(null),w4=l.forwardRef(function(t,a){let r=l.useContext(Sa),i=l.useContext(Ba),n=fr(ma),o=fr(x4),s=r??i,u=s.visibleRange.start;t.offset&&(u=u.add(t.offset));let d=(n==null?void 0:n.firstDayOfWeek)??(o==null?void 0:o.firstDayOfWeek),{gridProps:c,headerProps:m,weekDays:f,weeksInMonth:g}=g4({startDate:u,endDate:oa(u),weekdayStyle:t.weekdayStyle,firstDayOfWeek:d},s),p=ue(t,{global:!0});return E.createElement(ka.Provider,{value:{headerProps:m,weekDays:f,startDate:u,weeksInMonth:g}},E.createElement(me.table,{render:t.render,...ae(p,c),ref:a,style:t.style,cellPadding:0,className:t.className??"react-aria-CalendarGrid"},typeof t.children!="function"?t.children:E.createElement(E.Fragment,null,E.createElement(_s,null,$=>E.createElement(Ps,null,$)),E.createElement(Ss,null,t.children))))});function C4(e,t){let{children:a,style:r,className:i}=e,{headerProps:n,weekDays:o}=l.useContext(ka),s=ue(e,{global:!0});return E.createElement(me.thead,{render:e.render,...ae(s,n),ref:t,style:r,className:i??"react-aria-CalendarGridHeader"},E.createElement("tr",null,o.map((u,d)=>E.cloneElement(a(u),{key:d}))))}const _s=l.forwardRef(C4);function E4(e,t){let{children:a,style:r,className:i}=e,n=ue(e,{global:!0});return E.createElement(me.th,{render:e.render,...n,ref:t,style:r,className:i||"react-aria-CalendarHeaderCell"},a)}const Ps=l.forwardRef(E4);function _4(e,t){let{children:a,style:r,className:i}=e,n=l.useContext(Sa),o=l.useContext(Ba),s=n??o,{startDate:u,weeksInMonth:d}=l.useContext(ka),c=ue(e,{global:!0});return E.createElement(me.tbody,{render:e.render,...c,ref:t,style:r,className:i??"react-aria-CalendarGridBody"},[...new Array(d).keys()].map(m=>E.createElement("tr",{key:m},s.getDatesInWeek(m,u).map((f,g)=>f?E.cloneElement(a(f),{key:g}):E.createElement("td",{key:g})))))}const Ss=l.forwardRef(_4),P4=l.forwardRef(function({date:t,...a},r){let i=l.useContext(Sa),n=l.useContext(Ba),o=i??n,{startDate:s}=l.useContext(ka)??{startDate:o.visibleRange.start},u=o.visibleDuration.days||o.visibleDuration.weeks?!1:!gm(s,t),d=Zo(t,o.timeZone),c=l.useRef(null),{cellProps:m,buttonProps:f,...g}=$4({date:t,isOutsideMonth:u},o,c),{hoverProps:p,isHovered:$}=Nr({...a,isDisabled:g.isDisabled||g.isUnavailable}),{focusProps:y,isFocusVisible:h}=pt();h&&(h=g.isFocused);let _=!1,D=!1;"highlightedRange"in o&&o.highlightedRange&&(_=ee(t,o.highlightedRange.start),D=ee(t,o.highlightedRange.end));let x=Ve({...a,defaultChildren:g.formattedDate,defaultClassName:"react-aria-CalendarCell",values:{date:t,isHovered:$,isOutsideMonth:u,isFocusVisible:h,isSelectionStart:_,isSelectionEnd:D,isToday:d,...g}}),b={"data-focused":g.isFocused||void 0,"data-hovered":$||void 0,"data-pressed":g.isPressed||void 0,"data-unavailable":g.isUnavailable||void 0,"data-disabled":g.isDisabled||void 0,"data-focus-visible":h||void 0,"data-outside-visible-range":g.isOutsideVisibleRange||void 0,"data-outside-month":u||void 0,"data-selected":g.isSelected||void 0,"data-selection-start":_||void 0,"data-selection-end":D||void 0,"data-invalid":g.isInvalid||void 0,"data-today":d||void 0},S=ue(a,{global:!0});return E.createElement("td",{...m,ref:r},E.createElement(me.div,{...ae(S,f,y,p,b,x),ref:c}))});var Bs={};Bs={Empty:"فارغ"};var ks={};ks={Empty:"Изпразни"};var Rs={};Rs={Empty:"Prázdné"};var Is={};Is={Empty:"Tom"};var Fs={};Fs={Empty:"Leer"};var As={};As={Empty:"Άδειο"};var Ts={};Ts={Empty:"Empty"};var Ms={};Ms={Empty:"Vacío"};var Os={};Os={Empty:"Tühjenda"};var Vs={};Vs={Empty:"Tyhjä"};var Ns={};Ns={Empty:"Vide"};var Us={};Us={Empty:"ריק"};var Hs={};Hs={Empty:"Prazno"};var Ls={};Ls={Empty:"Üres"};var js={};js={Empty:"Vuoto"};var Gs={};Gs={Empty:"空"};var Ks={};Ks={Empty:"비어 있음"};var zs={};zs={Empty:"Tuščias"};var Xs={};Xs={Empty:"Tukšs"};var Zs={};Zs={Empty:"Tom"};var qs={};qs={Empty:"Leeg"};var Ws={};Ws={Empty:"Pusty"};var Qs={};Qs={Empty:"Vazio"};var Ys={};Ys={Empty:"Vazio"};var Js={};Js={Empty:"Gol"};var el={};el={Empty:"Не заполнено"};var tl={};tl={Empty:"Prázdne"};var al={};al={Empty:"Prazen"};var rl={};rl={Empty:"Prazno"};var nl={};nl={Empty:"Tomt"};var il={};il={Empty:"Boş"};var ol={};ol={Empty:"Пусто"};var sl={};sl={Empty:"空"};var ll={};ll={Empty:"空白"};var ul={};ul={"ar-AE":Bs,"bg-BG":ks,"cs-CZ":Rs,"da-DK":Is,"de-DE":Fs,"el-GR":As,"en-US":Ts,"es-ES":Ms,"et-EE":Os,"fi-FI":Vs,"fr-FR":Ns,"he-IL":Us,"hr-HR":Hs,"hu-HU":Ls,"it-IT":js,"ja-JP":Gs,"ko-KR":Ks,"lt-LT":zs,"lv-LV":Xs,"nb-NO":Zs,"nl-NL":qs,"pl-PL":Ws,"pt-BR":Qs,"pt-PT":Ys,"ro-RO":Js,"ru-RU":el,"sk-SK":tl,"sl-SI":al,"sr-SP":rl,"sv-SE":nl,"tr-TR":il,"uk-UA":ol,"zh-CN":sl,"zh-TW":ll};function S4(e){return e&&e.__esModule?e.default:e}const ui=()=>{};function B4(e){const t=l.useRef(void 0);let{value:a,textValue:r,minValue:i,maxValue:n,isDisabled:o,isReadOnly:s,isRequired:u,onIncrement:d,onIncrementPage:c,onDecrement:m,onDecrementPage:f,onDecrementToMin:g,onIncrementToMax:p}=e;const $=Re(S4(ul),"@react-aria/spinbutton");let y=l.useRef(!1);const h=l.useCallback(()=>{clearTimeout(t.current),y.current=!1},[]),_=Ze(()=>{h()});l.useEffect(()=>()=>_(),[]);let{keyboardProps:D}=Pt({isDisabled:o||s,shortcuts:{PageUp:()=>{if(c){c();return}if(d){d();return}return!1},ArrowUp:()=>{if(d){d();return}return!1},PageDown:()=>{if(f){f();return}if(m){m();return}return!1},ArrowDown:()=>{if(m){m();return}return!1},Home:()=>{if(g){g();return}return!1},End:()=>{if(p){p();return}return!1}},allowRepeats:!0}),x=l.useRef(!1),b=()=>{x.current=!0},S=()=>{x.current=!1},R=r===""?$.format("Empty"):(r||`${a}`).replace("-","−");l.useEffect(()=>{x.current&&(Hd("assertive"),dr(R,"assertive"))},[R]);let k=l.useCallback(()=>{h()},[h]);const I=Ze(d??ui),P=Ze(m??ui),w=Ze(()=>{(n===void 0||isNaN(n)||a===void 0||isNaN(a)||a<n)&&(I(),F(60))}),F=Ze(V=>{_(),y.current=!0,t.current=window.setTimeout(w,V)}),M=Ze(()=>{(i===void 0||isNaN(i)||a===void 0||isNaN(a)||a>i)&&(P(),O(60))}),O=Ze(V=>{_(),y.current=!0,t.current=window.setTimeout(M,V)});let Q=V=>{V.preventDefault()},{addGlobalListener:L,removeAllGlobalListeners:G}=Fi(),W=l.useRef(!1),[X,A]=l.useState(null);l.useEffect(()=>{X==="touch"?F(600):X?F(400):X||_()},[X]);let[j,z]=l.useState(null);return l.useEffect(()=>{j==="touch"?O(600):j?O(400):j||_()},[j]),{spinButtonProps:{role:"spinbutton","aria-valuenow":a!==void 0&&!isNaN(a)?a:void 0,"aria-valuetext":R,"aria-valuemin":i,"aria-valuemax":n,"aria-disabled":o||void 0,"aria-readonly":s||void 0,"aria-required":u||void 0,...D,onFocus:b,onBlur:S},incrementButtonProps:{onPressStart:V=>{h(),V.pointerType!=="touch"?(d==null||d(),A("mouse")):(L(window,"pointercancel",k,{capture:!0}),W.current=!1,A("touch")),L(window,"contextmenu",Q)},onPressUp:V=>{h(),V.pointerType==="touch"&&(W.current=!0),G(),A(null)},onPressEnd:V=>{h(),V.pointerType==="touch"&&!y.current&&W.current&&(d==null||d()),W.current=!1,A(null)},onFocus:b,onBlur:S},decrementButtonProps:{onPressStart:V=>{h(),V.pointerType!=="touch"?(m==null||m(),z("mouse")):(L(window,"pointercancel",k,{capture:!0}),W.current=!1,z("touch"))},onPressUp:V=>{h(),V.pointerType==="touch"&&(W.current=!0),G(),z(null)},onPressEnd:V=>{h(),V.pointerType==="touch"&&!y.current&&W.current&&(m==null||m()),W.current=!1,z(null)},onFocus:b,onBlur:S}}}const k4=["day","month","year"],R4={hour:1,minute:2,second:3};function I4(e,t){let{autoComplete:a,isDisabled:r,name:i}=e,{visuallyHiddenProps:n}=ba({style:{position:"fixed",top:0,left:0}}),o=60;t.granularity==="second"?o=1:t.granularity==="hour"&&(o=3600);let s="";t.value&&(t.granularity==="day"?s=pe(t.value).toString():s=ke("timeZone"in t.value?Bm(t.value):t.value).toString());let u=t.granularity==="day"?"date":"datetime-local",d=["hour","minute","second"],c=0;return d.includes(t.granularity)&&(c=R4[t.granularity],d=d.slice(0,c)),{containerProps:{...n,"aria-hidden":!0,"data-react-aria-prevent-focus":!0,"data-a11y-ignore":"aria-hidden-focus"},inputProps:{tabIndex:-1,autoComplete:a,disabled:r,type:u,form:"",name:i,step:o,value:s,onChange:m=>{let f=be(m).value.toString();if(f)try{let g=Nm(f);if(t.granularity==="day"&&(g=Vm(f)),"setSegment"in t)for(let p in g)k4.includes(p)&&t.setSegment(p,g[p]),d.includes(p)&&t.setSegment(p,g[p]);t.setValue(g)}catch{}}}}}function F4(e){let{state:t}=e,{containerProps:a,inputProps:r}=I4({...e},t);return E.createElement("div",{...a,"data-testid":"hidden-dateinput-container"},E.createElement("input",r))}var dl={};dl={calendar:"التقويم",day:"يوم",dayPeriod:"ص/م",endDate:"تاريخ الانتهاء",era:"العصر",hour:"الساعات",minute:"الدقائق",month:"الشهر",second:"الثواني",selectedDateDescription:e=>`تاريخ محدد: ${e.date}`,selectedRangeDescription:e=>`المدى الزمني المحدد: ${e.startDate} إلى ${e.endDate}`,selectedTimeDescription:e=>`الوقت المحدد: ${e.time}`,startDate:"تاريخ البدء",timeZoneName:"التوقيت",weekday:"اليوم",year:"السنة"};var cl={};cl={calendar:"Календар",day:"ден",dayPeriod:"пр.об./сл.об.",endDate:"Крайна дата",era:"ера",hour:"час",minute:"минута",month:"месец",second:"секунда",selectedDateDescription:e=>`Избрана дата: ${e.date}`,selectedRangeDescription:e=>`Избран диапазон: ${e.startDate} до ${e.endDate}`,selectedTimeDescription:e=>`Избрано време: ${e.time}`,startDate:"Начална дата",timeZoneName:"часова зона",weekday:"ден от седмицата",year:"година"};var fl={};fl={calendar:"Kalendář",day:"den",dayPeriod:"část dne",endDate:"Konečné datum",era:"letopočet",hour:"hodina",minute:"minuta",month:"měsíc",second:"sekunda",selectedDateDescription:e=>`Vybrané datum: ${e.date}`,selectedRangeDescription:e=>`Vybrané období: ${e.startDate} až ${e.endDate}`,selectedTimeDescription:e=>`Vybraný čas: ${e.time}`,startDate:"Počáteční datum",timeZoneName:"časové pásmo",weekday:"den v týdnu",year:"rok"};var ml={};ml={calendar:"Kalender",day:"dag",dayPeriod:"AM/PM",endDate:"Slutdato",era:"æra",hour:"time",minute:"minut",month:"måned",second:"sekund",selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tidspunkt: ${e.time}`,startDate:"Startdato",timeZoneName:"tidszone",weekday:"ugedag",year:"år"};var pl={};pl={calendar:"Kalender",day:"Tag",dayPeriod:"Tageshälfte",endDate:"Enddatum",era:"Epoche",hour:"Stunde",minute:"Minute",month:"Monat",second:"Sekunde",selectedDateDescription:e=>`Ausgewähltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgewählter Bereich: ${e.startDate} bis ${e.endDate}`,selectedTimeDescription:e=>`Ausgewählte Zeit: ${e.time}`,startDate:"Startdatum",timeZoneName:"Zeitzone",weekday:"Wochentag",year:"Jahr"};var gl={};gl={calendar:"Ημερολόγιο",day:"ημέρα",dayPeriod:"π.μ./μ.μ.",endDate:"Ημερομηνία λήξης",era:"περίοδος",hour:"ώρα",minute:"λεπτό",month:"μήνας",second:"δευτερόλεπτο",selectedDateDescription:e=>`Επιλεγμένη ημερομηνία: ${e.date}`,selectedRangeDescription:e=>`Επιλεγμένο εύρος: ${e.startDate} έως ${e.endDate}`,selectedTimeDescription:e=>`Επιλεγμένη ώρα: ${e.time}`,startDate:"Ημερομηνία έναρξης",timeZoneName:"ζώνη ώρας",weekday:"καθημερινή",year:"έτος"};var hl={};hl={era:"era",year:"year",month:"month",day:"day",hour:"hour",minute:"minute",second:"second",dayPeriod:"AM/PM",calendar:"Calendar",startDate:"Start Date",endDate:"End Date",weekday:"day of the week",timeZoneName:"time zone",selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.startDate} to ${e.endDate}`,selectedTimeDescription:e=>`Selected Time: ${e.time}`};var $l={};$l={calendar:"Calendario",day:"día",dayPeriod:"a. m./p. m.",endDate:"Fecha final",era:"era",hour:"hora",minute:"minuto",month:"mes",second:"segundo",selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Rango seleccionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora seleccionada: ${e.time}`,startDate:"Fecha de inicio",timeZoneName:"zona horaria",weekday:"día de la semana",year:"año"};var yl={};yl={calendar:"Kalender",day:"päev",dayPeriod:"enne/pärast lõunat",endDate:"Lõppkuupäev",era:"ajastu",hour:"tund",minute:"minut",month:"kuu",second:"sekund",selectedDateDescription:e=>`Valitud kuupäev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,selectedTimeDescription:e=>`Valitud aeg: ${e.time}`,startDate:"Alguskuupäev",timeZoneName:"ajavöönd",weekday:"nädalapäev",year:"aasta"};var Dl={};Dl={calendar:"Kalenteri",day:"päivä",dayPeriod:"vuorokaudenaika",endDate:"Päättymispäivä",era:"aikakausi",hour:"tunti",minute:"minuutti",month:"kuukausi",second:"sekunti",selectedDateDescription:e=>`Valittu päivämäärä: ${e.date}`,selectedRangeDescription:e=>`Valittu aikaväli: ${e.startDate} – ${e.endDate}`,selectedTimeDescription:e=>`Valittu aika: ${e.time}`,startDate:"Alkamispäivä",timeZoneName:"aikavyöhyke",weekday:"viikonpäivä",year:"vuosi"};var bl={};bl={calendar:"Calendrier",day:"jour",dayPeriod:"cadran",endDate:"Date de fin",era:"ère",hour:"heure",minute:"minute",month:"mois",second:"seconde",selectedDateDescription:e=>`Date sélectionnée : ${e.date}`,selectedRangeDescription:e=>`Plage sélectionnée : ${e.startDate} au ${e.endDate}`,selectedTimeDescription:e=>`Heure choisie : ${e.time}`,startDate:"Date de début",timeZoneName:"fuseau horaire",weekday:"jour de la semaine",year:"année"};var xl={};xl={calendar:"לוח שנה",day:"יום",dayPeriod:"לפנה״צ/אחה״צ",endDate:"תאריך סיום",era:"תקופה",hour:"שעה",minute:"דקה",month:"חודש",second:"שנייה",selectedDateDescription:e=>`תאריך נבחר: ${e.date}`,selectedRangeDescription:e=>`טווח נבחר: ${e.startDate} עד ${e.endDate}`,selectedTimeDescription:e=>`זמן נבחר: ${e.time}`,startDate:"תאריך התחלה",timeZoneName:"אזור זמן",weekday:"יום בשבוע",year:"שנה"};var vl={};vl={calendar:"Kalendar",day:"dan",dayPeriod:"AM/PM",endDate:"Datum završetka",era:"era",hour:"sat",minute:"minuta",month:"mjesec",second:"sekunda",selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Odabrano vrijeme: ${e.time}`,startDate:"Datum početka",timeZoneName:"vremenska zona",weekday:"dan u tjednu",year:"godina"};var wl={};wl={calendar:"Naptár",day:"nap",dayPeriod:"napszak",endDate:"Befejező dátum",era:"éra",hour:"óra",minute:"perc",month:"hónap",second:"másodperc",selectedDateDescription:e=>`Kijelölt dátum: ${e.date}`,selectedRangeDescription:e=>`Kijelölt tartomány: ${e.startDate}–${e.endDate}`,selectedTimeDescription:e=>`Kijelölt idő: ${e.time}`,startDate:"Kezdő dátum",timeZoneName:"időzóna",weekday:"hét napja",year:"év"};var Cl={};Cl={calendar:"Calendario",day:"giorno",dayPeriod:"AM/PM",endDate:"Data finale",era:"era",hour:"ora",minute:"minuto",month:"mese",second:"secondo",selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Ora selezionata: ${e.time}`,startDate:"Data iniziale",timeZoneName:"fuso orario",weekday:"giorno della settimana",year:"anno"};var El={};El={calendar:"カレンダー",day:"日",dayPeriod:"午前/午後",endDate:"終了日",era:"時代",hour:"時",minute:"分",month:"月",second:"秒",selectedDateDescription:e=>`選択した日付 : ${e.date}`,selectedRangeDescription:e=>`選択範囲 : ${e.startDate} から ${e.endDate}`,selectedTimeDescription:e=>`選択した時間 : ${e.time}`,startDate:"開始日",timeZoneName:"タイムゾーン",weekday:"曜日",year:"年"};var _l={};_l={calendar:"달력",day:"일",dayPeriod:"오전/오후",endDate:"종료일",era:"연호",hour:"시",minute:"분",month:"월",second:"초",selectedDateDescription:e=>`선택 일자: ${e.date}`,selectedRangeDescription:e=>`선택 범위: ${e.startDate} ~ ${e.endDate}`,selectedTimeDescription:e=>`선택 시간: ${e.time}`,startDate:"시작일",timeZoneName:"시간대",weekday:"요일",year:"년"};var Pl={};Pl={calendar:"Kalendorius",day:"diena",dayPeriod:"iki pietų / po pietų",endDate:"Pabaigos data",era:"era",hour:"valanda",minute:"minutė",month:"mėnuo",second:"sekundė",selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,selectedTimeDescription:e=>`Pasirinktas laikas: ${e.time}`,startDate:"Pradžios data",timeZoneName:"laiko juosta",weekday:"savaitės diena",year:"metai"};var Sl={};Sl={calendar:"Kalendārs",day:"diena",dayPeriod:"priekšpusdienā/pēcpusdienā",endDate:"Beigu datums",era:"ēra",hour:"stundas",minute:"minūtes",month:"mēnesis",second:"sekundes",selectedDateDescription:e=>`Atlasītais datums: ${e.date}`,selectedRangeDescription:e=>`Atlasītais diapazons: no ${e.startDate} līdz ${e.endDate}`,selectedTimeDescription:e=>`Atlasītais laiks: ${e.time}`,startDate:"Sākuma datums",timeZoneName:"laika josla",weekday:"nedēļas diena",year:"gads"};var Bl={};Bl={calendar:"Kalender",day:"dag",dayPeriod:"a.m./p.m.",endDate:"Sluttdato",era:"tidsalder",hour:"time",minute:"minutt",month:"måned",second:"sekund",selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt område: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tid: ${e.time}`,startDate:"Startdato",timeZoneName:"tidssone",weekday:"ukedag",year:"år"};var kl={};kl={calendar:"Kalender",day:"dag",dayPeriod:"a.m./p.m.",endDate:"Einddatum",era:"tijdperk",hour:"uur",minute:"minuut",month:"maand",second:"seconde",selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,selectedTimeDescription:e=>`Geselecteerde tijd: ${e.time}`,startDate:"Startdatum",timeZoneName:"tijdzone",weekday:"dag van de week",year:"jaar"};var Rl={};Rl={calendar:"Kalendarz",day:"dzień",dayPeriod:"rano / po południu / wieczorem",endDate:"Data końcowa",era:"era",hour:"godzina",minute:"minuta",month:"miesiąc",second:"sekunda",selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Wybrany czas: ${e.time}`,startDate:"Data początkowa",timeZoneName:"strefa czasowa",weekday:"dzień tygodnia",year:"rok"};var Il={};Il={calendar:"Calendário",day:"dia",dayPeriod:"AM/PM",endDate:"Data final",era:"era",hour:"hora",minute:"minuto",month:"mês",second:"segundo",selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:"Data inicial",timeZoneName:"fuso horário",weekday:"dia da semana",year:"ano"};var Fl={};Fl={calendar:"Calendário",day:"dia",dayPeriod:"am/pm",endDate:"Data de Término",era:"era",hour:"hora",minute:"minuto",month:"mês",second:"segundo",selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:"Data de Início",timeZoneName:"fuso horário",weekday:"dia da semana",year:"ano"};var Al={};Al={calendar:"Calendar",day:"zi",dayPeriod:"a.m/p.m.",endDate:"Dată final",era:"eră",hour:"oră",minute:"minut",month:"lună",second:"secundă",selectedDateDescription:e=>`Dată selectată: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: de la ${e.startDate} până la ${e.endDate}`,selectedTimeDescription:e=>`Ora selectată: ${e.time}`,startDate:"Dată început",timeZoneName:"fus orar",weekday:"ziua din săptămână",year:"an"};var Tl={};Tl={calendar:"Календарь",day:"день",dayPeriod:"AM/PM",endDate:"Дата окончания",era:"эра",hour:"час",minute:"минута",month:"месяц",second:"секунда",selectedDateDescription:e=>`Выбранная дата: ${e.date}`,selectedRangeDescription:e=>`Выбранный диапазон: с ${e.startDate} по ${e.endDate}`,selectedTimeDescription:e=>`Выбранное время: ${e.time}`,startDate:"Дата начала",timeZoneName:"часовой пояс",weekday:"день недели",year:"год"};var Ml={};Ml={calendar:"Kalendár",day:"deň",dayPeriod:"AM/PM",endDate:"Dátum ukončenia",era:"letopočet",hour:"hodina",minute:"minúta",month:"mesiac",second:"sekunda",selectedDateDescription:e=>`Vybratý dátum: ${e.date}`,selectedRangeDescription:e=>`Vybratý rozsah: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Vybratý čas: ${e.time}`,startDate:"Dátum začatia",timeZoneName:"časové pásmo",weekday:"deň týždňa",year:"rok"};var Ol={};Ol={calendar:"Koledar",day:"dan",dayPeriod:"dop/pop",endDate:"Datum konca",era:"doba",hour:"ura",minute:"minuta",month:"mesec",second:"sekunda",selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano območje: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izbrani čas: ${e.time}`,startDate:"Datum začetka",timeZoneName:"časovni pas",weekday:"dan v tednu",year:"leto"};var Vl={};Vl={calendar:"Kalendar",day:"дан",dayPeriod:"пре подне/по подне",endDate:"Datum završetka",era:"ера",hour:"сат",minute:"минут",month:"месец",second:"секунд",selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izabrano vreme: ${e.time}`,startDate:"Datum početka",timeZoneName:"временска зона",weekday:"дан у недељи",year:"година"};var Nl={};Nl={calendar:"Kalender",day:"dag",dayPeriod:"fm/em",endDate:"Slutdatum",era:"era",hour:"timme",minute:"minut",month:"månad",second:"sekund",selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.startDate} till ${e.endDate}`,selectedTimeDescription:e=>`Vald tid: ${e.time}`,startDate:"Startdatum",timeZoneName:"tidszon",weekday:"veckodag",year:"år"};var Ul={};Ul={calendar:"Takvim",day:"gün",dayPeriod:"ÖÖ/ÖS",endDate:"Bitiş Tarihi",era:"çağ",hour:"saat",minute:"dakika",month:"ay",second:"saniye",selectedDateDescription:e=>`Seçilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Seçilen Aralık: ${e.startDate} - ${e.endDate}`,selectedTimeDescription:e=>`Seçilen Zaman: ${e.time}`,startDate:"Başlangıç Tarihi",timeZoneName:"saat dilimi",weekday:"haftanın günü",year:"yıl"};var Hl={};Hl={calendar:"Календар",day:"день",dayPeriod:"дп/пп",endDate:"Дата завершення",era:"ера",hour:"година",minute:"хвилина",month:"місяць",second:"секунда",selectedDateDescription:e=>`Вибрана дата: ${e.date}`,selectedRangeDescription:e=>`Вибраний діапазон: ${e.startDate} — ${e.endDate}`,selectedTimeDescription:e=>`Вибраний час: ${e.time}`,startDate:"Дата початку",timeZoneName:"часовий пояс",weekday:"день тижня",year:"рік"};var Ll={};Ll={calendar:"日历",day:"日",dayPeriod:"上午/下午",endDate:"结束日期",era:"纪元",hour:"小时",minute:"分钟",month:"月",second:"秒",selectedDateDescription:e=>`选定的日期：${e.date}`,selectedRangeDescription:e=>`选定的范围：${e.startDate} 至 ${e.endDate}`,selectedTimeDescription:e=>`选定的时间：${e.time}`,startDate:"开始日期",timeZoneName:"时区",weekday:"工作日",year:"年"};var jl={};jl={calendar:"日曆",day:"日",dayPeriod:"上午/下午",endDate:"結束日期",era:"纪元",hour:"小时",minute:"分钟",month:"月",second:"秒",selectedDateDescription:e=>`選定的日期：${e.date}`,selectedRangeDescription:e=>`選定的範圍：${e.startDate} 至 ${e.endDate}`,selectedTimeDescription:e=>`選定的時間：${e.time}`,startDate:"開始日期",timeZoneName:"时区",weekday:"工作日",year:"年"};var Ra={};Ra={"ar-AE":dl,"bg-BG":cl,"cs-CZ":fl,"da-DK":ml,"de-DE":pl,"el-GR":gl,"en-US":hl,"es-ES":$l,"et-EE":yl,"fi-FI":Dl,"fr-FR":bl,"he-IL":xl,"hr-HR":vl,"hu-HU":wl,"it-IT":Cl,"ja-JP":El,"ko-KR":_l,"lt-LT":Pl,"lv-LV":Sl,"nb-NO":Bl,"nl-NL":kl,"pl-PL":Rl,"pt-BR":Il,"pt-PT":Fl,"ro-RO":Al,"ru-RU":Tl,"sk-SK":Ml,"sl-SI":Ol,"sr-SP":Vl,"sv-SE":Nl,"tr-TR":Ul,"uk-UA":Hl,"zh-CN":Ll,"zh-TW":jl};function Gl(e,t,a){let{direction:r}=fe(),i=l.useMemo(()=>Ur(t),[t]),{keyboardProps:n}=Pt({shortcuts:{"Alt+ArrowDown":()=>{if("setOpen"in e){e.setOpen(!0);return}return!1},"Alt+ArrowUp":()=>{if("setOpen"in e){e.setOpen(!0);return}return!1},ArrowLeft:u=>{if(a)return!1;if(r==="rtl"){if(t.current){let d=be(u),c=di(t.current,d.getBoundingClientRect().left,-1);if(c){c.focus();return}}}else{i.focusPrevious();return}return!1},ArrowRight:u=>{if(a)return!1;if(r==="rtl"){if(t.current){let d=be(u),c=di(t.current,d.getBoundingClientRect().left,1);if(c){c.focus();return}}}else{i.focusNext();return}return!1}},allowRepeats:!0}),o=()=>{if(!t.current)return;let u=window.event?be(window.event):null,d=Ai(t.current,{tabbable:!0});if(u&&(d.currentNode=u,u=d.previousNode()),!u){let c;do c=d.lastChild(),c&&(u=c);while(c)}for(;u!=null&&u.hasAttribute("data-placeholder");){let c=d.previousNode();if(c&&c.hasAttribute("data-placeholder"))u=c;else break}u&&u.focus()},{pressProps:s}=Or({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(u){u.pointerType==="mouse"&&o()},onPress(u){(u.pointerType==="touch"||u.pointerType==="pen")&&o()}});return ae(s,n)}function di(e,t,a){let r=Ai(e,{tabbable:!0}),i=r.nextNode(),n=null,o=1/0;for(;i;){let u=i.getBoundingClientRect().left-t,d=Math.abs(u);Math.sign(u)===a&&d<o&&(n=i,o=d),i=r.nextNode()}return n}function A4(e){return e&&e.__esModule?e.default:e}const Kl=new WeakMap,aa="__reactAriaDateFieldRole",T4="__reactAriaDateFieldFocusManager";function M4(e,t,a){var I;let{isInvalid:r,validationErrors:i,validationDetails:n}=t.displayValidation,{labelProps:o,fieldProps:s,descriptionProps:u,errorMessageProps:d}=Ti({...e,labelElementType:"span",isInvalid:r,errorMessage:e.errorMessage||i}),c=l.useRef(null),{focusWithinProps:m}=Mi({...e,onFocusWithin(P){var w;c.current=t.value,(w=e.onFocus)==null||w.call(e,P)},onBlurWithin:P=>{var w;t.confirmPlaceholder(),t.value!==c.current&&t.commitValidation(),(w=e.onBlur)==null||w.call(e,P)},onFocusWithinChange:e.onFocusChange}),f=Re(A4(Ra),"@react-aria/datepicker"),g=t.maxGranularity==="hour"?"selectedTimeDescription":"selectedDateDescription",p=t.maxGranularity==="hour"?"time":"date",$=t.value?f.format(g,{[p]:t.formatValue({month:"long"})}):"",y=At($),h=e[aa]==="presentation"?s["aria-describedby"]:[y["aria-describedby"],s["aria-describedby"]].filter(Boolean).join(" ")||void 0,_=e[T4],D=l.useMemo(()=>_||Ur(a),[_,a]),x=Gl(t,a,e[aa]==="presentation");Kl.set(t,{ariaLabel:e["aria-label"],ariaLabelledBy:[o.id,e["aria-labelledby"]].filter(Boolean).join(" ")||void 0,ariaDescribedBy:h,focusManager:D});let b=l.useRef(e.autoFocus),S;e[aa]==="presentation"?S={role:"presentation"}:S=ae(s,{role:"group","aria-disabled":e.isDisabled||void 0,"aria-describedby":h}),l.useEffect(()=>{b.current&&D.focusFirst(),b.current=!1},[D]),Ld(e.inputRef,t.defaultValue,t.setValue),jd({...e,focus(){D.focusFirst()}},t,e.inputRef);let R={type:"hidden",name:e.name,form:e.form,value:((I=t.value)==null?void 0:I.toString())||"",disabled:e.isDisabled};e.validationBehavior==="native"&&(R.type="text",R.hidden=!0,R.required=e.isRequired,R.onChange=()=>{});let k=ue(e);return{labelProps:{...o,onClick:()=>{D.focusFirst()}},fieldProps:ae(k,S,x,m,{onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,style:{unicodeBidi:"isolate"}}),inputProps:R,descriptionProps:u,errorMessageProps:d,isInvalid:r,validationErrors:i,validationDetails:n}}function O4(e){return e&&e.__esModule?e.default:e}function V4(){let{locale:e}=fe(),t=Gd(O4(Ra),"@react-aria/datepicker");return l.useMemo(()=>{try{return new Intl.DisplayNames(e,{type:"dateTimeField"})}catch{return new N4(e,t)}},[e,t])}class N4{constructor(t,a){this.locale=t,this.dictionary=a}of(t){return this.dictionary.getStringForLocale(t,this.locale)}}function U4(e,t,a){let r=l.useRef(""),{locale:i,direction:n}=fe(),o=V4(),{ariaLabel:s,ariaLabelledBy:u,ariaDescribedBy:d,focusManager:c}=Kl.get(t),m=e.isPlaceholder?"":e.text,f=l.useMemo(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),g=Be({month:"long",timeZone:f.timeZone}),p=Be({hour:"numeric",hour12:f.hour12,timeZone:f.timeZone});if(e.type==="month"&&!e.isPlaceholder){let A=g.format(t.dateValue);m=A!==m?`${m} – ${A}`:A}else e.type==="hour"&&!e.isPlaceholder&&(m=p.format(t.dateValue));let{spinButtonProps:$}=B4({value:e.value??void 0,textValue:m,minValue:e.minValue,maxValue:e.maxValue,isDisabled:t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:t.isRequired,onIncrement:()=>{r.current="",t.increment(e.type)},onDecrement:()=>{r.current="",t.decrement(e.type)},onIncrementPage:()=>{r.current="",t.incrementPage(e.type)},onDecrementPage:()=>{r.current="",t.decrementPage(e.type)},onIncrementToMax:()=>{r.current="",t.incrementToMax(e.type)},onDecrementToMin:()=>{r.current="",t.decrementToMin(e.type)}}),y=l.useMemo(()=>new co(i,{maximumFractionDigits:0}),[i]),h=()=>{if(e.text===e.placeholder&&c.focusPrevious(),y.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){let A=e.text.slice(0,-1),j=y.parse(A);A=j===0?"":A,A.length===0||j===0?t.clearSegment(e.type):t.setSegment(e.type,j),r.current=A}else(e.type==="dayPeriod"||e.type==="era")&&t.clearSegment(e.type)},{keyboardProps:_}=Pt({shortcuts:{Backspace:()=>{h()},Delete:()=>{h()},"Mod+a":()=>{}},allowRepeats:!0}),{startsWith:D}=Kd({sensitivity:"base"}),x=Be({hour:"numeric",hour12:!0}),b=l.useMemo(()=>{let A=new Date;return A.setHours(0),x.formatToParts(A).find(j=>j.type==="dayPeriod").value},[x]),S=l.useMemo(()=>{let A=new Date;return A.setHours(12),x.formatToParts(A).find(j=>j.type==="dayPeriod").value},[x]),R=Be({year:"numeric",era:"narrow",timeZone:"UTC"}),k=l.useMemo(()=>{if(e.type!=="era")return[];let A=J(new te(1,1,1),t.calendar),j=t.calendar.getEras().map(V=>{let B=A.set({year:1,month:1,day:1,era:V}).toDate("UTC"),H=R.formatToParts(B).find(T=>T.type==="era").value;return{era:V,formatted:H}}),z=H4(j.map(V=>V.formatted));if(z)for(let V of j)V.formatted=V.formatted.slice(z);return j},[R,t.calendar,e.type]),I=A=>{if(t.isDisabled||t.isReadOnly)return;let j=r.current+A;switch(e.type){case"dayPeriod":if(D(b,A))t.setSegment("dayPeriod",0);else if(D(S,A))t.setSegment("dayPeriod",1);else break;c.focusNext();break;case"era":{let z=k.find(V=>D(V.formatted,A));z&&(t.setSegment("era",z.era),c.focusNext());break}case"day":case"hour":case"minute":case"second":case"month":case"year":{if(!y.isValidPartialNumber(j))return;let z=y.parse(j),V=z;if(e.maxValue!==void 0&&z>e.maxValue&&(V=y.parse(A)),isNaN(z))return;t.setSegment(e.type,V),e.maxValue!==void 0&&(+(z+"0")>e.maxValue||j.length>=String(e.maxValue).length)?(r.current="",c.focusNext()):r.current=j;break}}},P=()=>{r.current="",a.current&&Ri(a.current,{containingElement:Vr(a.current)});let A=window.getSelection();A==null||A.collapse(a.current)},w=l.useRef(typeof document<"u"?document:null);Ha(w,"selectionchange",()=>{let A=window.getSelection();A!=null&&A.anchorNode&&Oi(a.current,A==null?void 0:A.anchorNode)&&cr()===a.current&&A.collapse(a.current)});let F=l.useRef("");Ha(a,"beforeinput",A=>{if(a.current)switch(A.preventDefault(),A.inputType){case"deleteContentBackward":case"deleteContentForward":y.isValidPartialNumber(e.text)&&!t.isReadOnly&&h();break;case"insertCompositionText":F.current=a.current.textContent,a.current.textContent=a.current.textContent;break;default:A.data!=null&&I(A.data);break}}),Ha(a,"input",A=>{let{inputType:j,data:z}=A;switch(j){case"insertCompositionText":a.current&&(a.current.textContent=F.current),z!=null&&(D(b,z)||D(S,z))&&I(z);break}}),Vi(()=>{let A=a.current;return()=>{cr()===A&&(c.focusPrevious()||c.focusNext())}},[a,c]);let M=Hr()||e.type==="timeZoneName"?{role:"textbox","aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{},O=l.useMemo(()=>t.segments.find(A=>A.isEditable),[t.segments]);e!==O&&!t.isInvalid&&(d=void 0);let Q=ut(),L=!t.isDisabled&&!t.isReadOnly&&e.isEditable,G=e.type==="literal"?"":o.of(e.type),W=$a({"aria-label":`${G}${s?`, ${s}`:""}${u?", ":""}`,"aria-labelledby":u});if(e.type==="literal")return{segmentProps:{"aria-hidden":!0}};let X={caretColor:"transparent"};if(n==="rtl"){X.unicodeBidi="embed";let A=f[e.type];(A==="numeric"||A==="2-digit")&&(X.direction="ltr")}return{segmentProps:ae($,W,{id:Q,...M,..._,"aria-invalid":t.isInvalid?"true":void 0,"aria-describedby":d,"aria-readonly":t.isReadOnly||!e.isEditable?"true":void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:L,suppressContentEditableWarning:L,spellCheck:L?"false":void 0,autoCorrect:L?"off":void 0,[parseInt(E.version,10)>=17?"enterKeyHint":"enterkeyhint"]:L?"next":void 0,inputMode:t.isDisabled||e.type==="dayPeriod"||e.type==="era"||!L?void 0:"numeric",tabIndex:t.isDisabled?void 0:0,onFocus:P,style:X,onPointerDown(A){A.stopPropagation()},onMouseDown(A){A.stopPropagation()}})}}function H4(e){e.sort();let t=e[0],a=e[e.length-1];for(let r=0;r<t.length;r++)if(t[r]!==a[r])return r;return 0}var zl={};zl={rangeOverflow:e=>`يجب أن تكون القيمة ${e.maxValue} أو قبل ذلك.`,rangeReversed:"تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.",rangeUnderflow:e=>`يجب أن تكون القيمة ${e.minValue} أو بعد ذلك.`,unavailableDate:"البيانات المحددة غير متاحة."};var Xl={};Xl={rangeOverflow:e=>`Стойността трябва да е ${e.maxValue} или по-ранна.`,rangeReversed:"Началната дата трябва да е преди крайната.",rangeUnderflow:e=>`Стойността трябва да е ${e.minValue} или по-късно.`,unavailableDate:"Избраната дата не е налична."};var Zl={};Zl={rangeOverflow:e=>`Hodnota musí být ${e.maxValue} nebo dřívější.`,rangeReversed:"Datum zahájení musí předcházet datu ukončení.",rangeUnderflow:e=>`Hodnota musí být ${e.minValue} nebo pozdější.`,unavailableDate:"Vybrané datum není k dispozici."};var ql={};ql={rangeOverflow:e=>`Værdien skal være ${e.maxValue} eller tidligere.`,rangeReversed:"Startdatoen skal være før slutdatoen.",rangeUnderflow:e=>`Værdien skal være ${e.minValue} eller nyere.`,unavailableDate:"Den valgte dato er ikke tilgængelig."};var Wl={};Wl={rangeOverflow:e=>`Der Wert muss ${e.maxValue} oder früher sein.`,rangeReversed:"Das Startdatum muss vor dem Enddatum liegen.",rangeUnderflow:e=>`Der Wert muss ${e.minValue} oder später sein.`,unavailableDate:"Das ausgewählte Datum ist nicht verfügbar."};var Ql={};Ql={rangeOverflow:e=>`Η τιμή πρέπει να είναι ${e.maxValue} ή παλαιότερη.`,rangeReversed:"Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.",rangeUnderflow:e=>`Η τιμή πρέπει να είναι ${e.minValue} ή μεταγενέστερη.`,unavailableDate:"Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη."};var Yl={};Yl={rangeUnderflow:e=>`Value must be ${e.minValue} or later.`,rangeOverflow:e=>`Value must be ${e.maxValue} or earlier.`,rangeReversed:"Start date must be before end date.",unavailableDate:"Selected date unavailable."};var Jl={};Jl={rangeOverflow:e=>`El valor debe ser ${e.maxValue} o anterior.`,rangeReversed:"La fecha de inicio debe ser anterior a la fecha de finalización.",rangeUnderflow:e=>`El valor debe ser ${e.minValue} o posterior.`,unavailableDate:"Fecha seleccionada no disponible."};var eu={};eu={rangeOverflow:e=>`Väärtus peab olema ${e.maxValue} või varasem.`,rangeReversed:"Alguskuupäev peab olema enne lõppkuupäeva.",rangeUnderflow:e=>`Väärtus peab olema ${e.minValue} või hilisem.`,unavailableDate:"Valitud kuupäev pole saadaval."};var tu={};tu={rangeOverflow:e=>`Arvon on oltava ${e.maxValue} tai sitä aikaisempi.`,rangeReversed:"Aloituspäivän on oltava ennen lopetuspäivää.",rangeUnderflow:e=>`Arvon on oltava ${e.minValue} tai sitä myöhäisempi.`,unavailableDate:"Valittu päivämäärä ei ole käytettävissä."};var au={};au={rangeOverflow:e=>`La valeur doit être ${e.maxValue} ou antérieure.`,rangeReversed:"La date de début doit être antérieure à la date de fin.",rangeUnderflow:e=>`La valeur doit être ${e.minValue} ou ultérieure.`,unavailableDate:"La date sélectionnée n’est pas disponible."};var ru={};ru={rangeOverflow:e=>`הערך חייב להיות ${e.maxValue} או מוקדם יותר.`,rangeReversed:"תאריך ההתחלה חייב להיות לפני תאריך הסיום.",rangeUnderflow:e=>`הערך חייב להיות ${e.minValue} או מאוחר יותר.`,unavailableDate:"התאריך הנבחר אינו זמין."};var nu={};nu={rangeOverflow:e=>`Vrijednost mora biti ${e.maxValue} ili ranije.`,rangeReversed:"Datum početka mora biti prije datuma završetka.",rangeUnderflow:e=>`Vrijednost mora biti ${e.minValue} ili kasnije.`,unavailableDate:"Odabrani datum nije dostupan."};var iu={};iu={rangeOverflow:e=>`Az értéknek ${e.maxValue} vagy korábbinak kell lennie.`,rangeReversed:"A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.",rangeUnderflow:e=>`Az értéknek ${e.minValue} vagy későbbinek kell lennie.`,unavailableDate:"A kiválasztott dátum nem érhető el."};var ou={};ou={rangeOverflow:e=>`Il valore deve essere ${e.maxValue} o precedente.`,rangeReversed:"La data di inizio deve essere antecedente alla data di fine.",rangeUnderflow:e=>`Il valore deve essere ${e.minValue} o successivo.`,unavailableDate:"Data selezionata non disponibile."};var su={};su={rangeOverflow:e=>`値は ${e.maxValue} 以下にする必要があります。`,rangeReversed:"開始日は終了日より前にする必要があります。",rangeUnderflow:e=>`値は ${e.minValue} 以上にする必要があります。`,unavailableDate:"選択した日付は使用できません。"};var lu={};lu={rangeOverflow:e=>`값은 ${e.maxValue} 이전이어야 합니다.`,rangeReversed:"시작일은 종료일 이전이어야 합니다.",rangeUnderflow:e=>`값은 ${e.minValue} 이후여야 합니다.`,unavailableDate:"선택한 날짜를 사용할 수 없습니다."};var uu={};uu={rangeOverflow:e=>`Reikšmė turi būti ${e.maxValue} arba ankstesnė.`,rangeReversed:"Pradžios data turi būti ankstesnė nei pabaigos data.",rangeUnderflow:e=>`Reikšmė turi būti ${e.minValue} arba naujesnė.`,unavailableDate:"Pasirinkta data nepasiekiama."};var du={};du={rangeOverflow:e=>`Vērtībai ir jābūt ${e.maxValue} vai agrākai.`,rangeReversed:"Sākuma datumam ir jābūt pirms beigu datuma.",rangeUnderflow:e=>`Vērtībai ir jābūt ${e.minValue} vai vēlākai.`,unavailableDate:"Atlasītais datums nav pieejams."};var cu={};cu={rangeOverflow:e=>`Verdien må være ${e.maxValue} eller tidligere.`,rangeReversed:"Startdatoen må være før sluttdatoen.",rangeUnderflow:e=>`Verdien må være ${e.minValue} eller senere.`,unavailableDate:"Valgt dato utilgjengelig."};var fu={};fu={rangeOverflow:e=>`Waarde moet ${e.maxValue} of eerder zijn.`,rangeReversed:"De startdatum moet voor de einddatum liggen.",rangeUnderflow:e=>`Waarde moet ${e.minValue} of later zijn.`,unavailableDate:"Geselecteerde datum niet beschikbaar."};var mu={};mu={rangeOverflow:e=>`Wartość musi mieć wartość ${e.maxValue} lub wcześniejszą.`,rangeReversed:"Data rozpoczęcia musi być wcześniejsza niż data zakończenia.",rangeUnderflow:e=>`Wartość musi mieć wartość ${e.minValue} lub późniejszą.`,unavailableDate:"Wybrana data jest niedostępna."};var pu={};pu={rangeOverflow:e=>`O valor deve ser ${e.maxValue} ou anterior.`,rangeReversed:"A data inicial deve ser anterior à data final.",rangeUnderflow:e=>`O valor deve ser ${e.minValue} ou posterior.`,unavailableDate:"Data selecionada indisponível."};var gu={};gu={rangeOverflow:e=>`O valor tem de ser ${e.maxValue} ou anterior.`,rangeReversed:"A data de início deve ser anterior à data de fim.",rangeUnderflow:e=>`O valor tem de ser ${e.minValue} ou posterior.`,unavailableDate:"Data selecionada indisponível."};var hu={};hu={rangeOverflow:e=>`Valoarea trebuie să fie ${e.maxValue} sau anterioară.`,rangeReversed:"Data de început trebuie să fie anterioară datei de sfârșit.",rangeUnderflow:e=>`Valoarea trebuie să fie ${e.minValue} sau ulterioară.`,unavailableDate:"Data selectată nu este disponibilă."};var $u={};$u={rangeOverflow:e=>`Значение должно быть не позже ${e.maxValue}.`,rangeReversed:"Дата начала должна предшествовать дате окончания.",rangeUnderflow:e=>`Значение должно быть не раньше ${e.minValue}.`,unavailableDate:"Выбранная дата недоступна."};var yu={};yu={rangeOverflow:e=>`Hodnota musí byť ${e.maxValue} alebo skoršia.`,rangeReversed:"Dátum začiatku musí byť skorší ako dátum konca.",rangeUnderflow:e=>`Hodnota musí byť ${e.minValue} alebo neskoršia.`,unavailableDate:"Vybratý dátum je nedostupný."};var Du={};Du={rangeOverflow:e=>`Vrednost mora biti ${e.maxValue} ali starejša.`,rangeReversed:"Začetni datum mora biti pred končnim datumom.",rangeUnderflow:e=>`Vrednost mora biti ${e.minValue} ali novejša.`,unavailableDate:"Izbrani datum ni na voljo."};var bu={};bu={rangeOverflow:e=>`Vrednost mora da bude ${e.maxValue} ili starija.`,rangeReversed:"Datum početka mora biti pre datuma završetka.",rangeUnderflow:e=>`Vrednost mora da bude ${e.minValue} ili novija.`,unavailableDate:"Izabrani datum nije dostupan."};var xu={};xu={rangeOverflow:e=>`Värdet måste vara ${e.maxValue} eller tidigare.`,rangeReversed:"Startdatumet måste vara före slutdatumet.",rangeUnderflow:e=>`Värdet måste vara ${e.minValue} eller senare.`,unavailableDate:"Det valda datumet är inte tillgängligt."};var vu={};vu={rangeOverflow:e=>`Değer, ${e.maxValue} veya öncesi olmalıdır.`,rangeReversed:"Başlangıç tarihi bitiş tarihinden önce olmalıdır.",rangeUnderflow:e=>`Değer, ${e.minValue} veya sonrası olmalıdır.`,unavailableDate:"Seçilen tarih kullanılamıyor."};var wu={};wu={rangeOverflow:e=>`Значення має бути не пізніше ${e.maxValue}.`,rangeReversed:"Дата початку має передувати даті завершення.",rangeUnderflow:e=>`Значення має бути не раніше ${e.minValue}.`,unavailableDate:"Вибрана дата недоступна."};var Cu={};Cu={rangeOverflow:e=>`值必须是 ${e.maxValue} 或更早日期。`,rangeReversed:"开始日期必须早于结束日期。",rangeUnderflow:e=>`值必须是 ${e.minValue} 或更晚日期。`,unavailableDate:"所选日期不可用。"};var Eu={};Eu={rangeOverflow:e=>`值必須是 ${e.maxValue} 或更早。`,rangeReversed:"開始日期必須在結束日期之前。",rangeUnderflow:e=>`值必須是 ${e.minValue} 或更晚。`,unavailableDate:"所選日期無法使用。"};var _u={};_u={"ar-AE":zl,"bg-BG":Xl,"cs-CZ":Zl,"da-DK":ql,"de-DE":Wl,"el-GR":Ql,"en-US":Yl,"es-ES":Jl,"et-EE":eu,"fi-FI":tu,"fr-FR":au,"he-IL":ru,"hr-HR":nu,"hu-HU":iu,"it-IT":ou,"ja-JP":su,"ko-KR":lu,"lt-LT":uu,"lv-LV":du,"nb-NO":cu,"nl-NL":fu,"pl-PL":mu,"pt-BR":pu,"pt-PT":gu,"ro-RO":hu,"ru-RU":$u,"sk-SK":yu,"sl-SI":Du,"sr-SP":bu,"sv-SE":xu,"tr-TR":vu,"uk-UA":wu,"zh-CN":Cu,"zh-TW":Eu};function L4(e){return e&&e.__esModule?e.default:e}const j4=new Lr(L4(_u));function G4(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return e}function Pu(e,t,a,r,i){let n=e!=null&&a!=null&&e.compare(a)>0,o=e!=null&&t!=null&&e.compare(t)<0,s=e!=null&&(r==null?void 0:r(e))||!1,u=n||o||s,d=[];if(u){let c=G4(),m=Lr.getGlobalDictionaryForPackage("@react-stately/datepicker")||j4,f=new zd(c,m),g=new Oe(c,mt({},i)),p=g.resolvedOptions().timeZone;o&&t!=null&&d.push(f.format("rangeUnderflow",{minValue:g.format(t.toDate(p))})),n&&a!=null&&d.push(f.format("rangeOverflow",{maxValue:g.format(a.toDate(p))})),s&&d.push(f.format("unavailableDate"))}return{isInvalid:u,validationErrors:d,validationDetails:{badInput:s,customError:!1,patternMismatch:!1,rangeOverflow:n,rangeUnderflow:o,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!u}}}const K4={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit"},z4={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"};function mt(e,t){e={...t.shouldForceLeadingZeros?z4:K4,...e};let r=t.granularity||"minute",i=Object.keys(e),n=i.indexOf(t.maxGranularity??"year");n<0&&(n=0);let o=i.indexOf(r);if(o<0&&(o=2),n>o)throw new Error("maxGranularity must be greater than granularity");let s=i.slice(n,o+1).reduce((d,c)=>(d[c]=e[c],d),{});return t.hourCycle!=null&&(s.hour12=t.hourCycle===12),s.timeZone=t.timeZone||"UTC",(r==="hour"||r==="minute"||r==="second")&&t.timeZone&&!t.hideTimeZone&&(s.timeZoneName="short"),t.showEra&&n===0&&(s.era="short"),s}function ci(e){return e&&"hour"in e?e:new ht}function Su(e,t){if(e===null)return null;if(e)return J(e,t)}function X4(e,t,a,r){if(e)return Su(e,a);let i=J(qo(r??Ot()).set({hour:0,minute:0,second:0,millisecond:0}),a);return t==="year"||t==="month"||t==="day"?pe(i):r?i:ke(i)}function Bu(e,t){let a=e&&"timeZone"in e?e.timeZone:void 0,r=e&&"minute"in e?"minute":"day";if(e&&t&&!(t in e))throw new Error("Invalid granularity "+t+" for value "+e.toString());let[i,n]=l.useState([r,a]);e&&(i[0]!==r||i[1]!==a)&&n([r,a]),t||(t=e?r:i[0]);let o=e?a:i[1];return[t,o]}const Z4=new Lr({ach:{year:"mwaka",month:"dwe",day:"nino"},af:{year:"jjjj",month:"mm",day:"dd"},am:{year:"ዓዓዓዓ",month:"ሚሜ",day:"ቀቀ"},an:{year:"aaaa",month:"mm",day:"dd"},ar:{year:"سنة",month:"شهر",day:"يوم"},ast:{year:"aaaa",month:"mm",day:"dd"},az:{year:"iiii",month:"aa",day:"gg"},be:{year:"гггг",month:"мм",day:"дд"},bg:{year:"гггг",month:"мм",day:"дд"},bn:{year:"yyyy",month:"মিমি",day:"dd"},br:{year:"bbbb",month:"mm",day:"dd"},bs:{year:"gggg",month:"mm",day:"dd"},ca:{year:"aaaa",month:"mm",day:"dd"},cak:{year:"jjjj",month:"ii",day:"q'q'"},ckb:{year:"ساڵ",month:"مانگ",day:"ڕۆژ"},cs:{year:"rrrr",month:"mm",day:"dd"},cy:{year:"bbbb",month:"mm",day:"dd"},da:{year:"åååå",month:"mm",day:"dd"},de:{year:"jjjj",month:"mm",day:"tt"},dsb:{year:"llll",month:"mm",day:"źź"},el:{year:"εεεε",month:"μμ",day:"ηη"},en:{year:"yyyy",month:"mm",day:"dd"},eo:{year:"jjjj",month:"mm",day:"tt"},es:{year:"aaaa",month:"mm",day:"dd"},et:{year:"aaaa",month:"kk",day:"pp"},eu:{year:"uuuu",month:"hh",day:"ee"},fa:{year:"سال",month:"ماه",day:"روز"},ff:{year:"hhhh",month:"ll",day:"ññ"},fi:{year:"vvvv",month:"kk",day:"pp"},fr:{year:"aaaa",month:"mm",day:"jj"},fy:{year:"jjjj",month:"mm",day:"dd"},ga:{year:"bbbb",month:"mm",day:"ll"},gd:{year:"bbbb",month:"mm",day:"ll"},gl:{year:"aaaa",month:"mm",day:"dd"},he:{year:"שנה",month:"חודש",day:"יום"},hr:{year:"gggg",month:"mm",day:"dd"},hsb:{year:"llll",month:"mm",day:"dd"},hu:{year:"éééé",month:"hh",day:"nn"},ia:{year:"aaaa",month:"mm",day:"dd"},id:{year:"tttt",month:"bb",day:"hh"},is:{year:"áááá",month:"mm",day:"dd"},it:{year:"aaaa",month:"mm",day:"gg"},ja:{year:"年",month:"月",day:"日"},ka:{year:"წწწწ",month:"თთ",day:"რრ"},kk:{year:"жжжж",month:"аа",day:"кк"},kn:{year:"ವವವವ",month:"ಮಿಮೀ",day:"ದಿದಿ"},ko:{year:"연도",month:"월",day:"일"},lb:{year:"jjjj",month:"mm",day:"dd"},lo:{year:"ປປປປ",month:"ດດ",day:"ວວ"},lt:{year:"mmmm",month:"mm",day:"dd"},lv:{year:"gggg",month:"mm",day:"dd"},meh:{year:"aaaa",month:"mm",day:"dd"},ml:{year:"വർഷം",month:"മാസം",day:"തീയതി"},ms:{year:"tttt",month:"mm",day:"hh"},nb:{year:"åååå",month:"mm",day:"dd"},nl:{year:"jjjj",month:"mm",day:"dd"},nn:{year:"åååå",month:"mm",day:"dd"},no:{year:"åååå",month:"mm",day:"dd"},oc:{year:"aaaa",month:"mm",day:"jj"},pl:{year:"rrrr",month:"mm",day:"dd"},pt:{year:"aaaa",month:"mm",day:"dd"},rm:{year:"oooo",month:"mm",day:"dd"},ro:{year:"aaaa",month:"ll",day:"zz"},ru:{year:"гггг",month:"мм",day:"дд"},sc:{year:"aaaa",month:"mm",day:"dd"},scn:{year:"aaaa",month:"mm",day:"jj"},sk:{year:"rrrr",month:"mm",day:"dd"},sl:{year:"llll",month:"mm",day:"dd"},sr:{year:"гггг",month:"мм",day:"дд"},"sr-Latn":{year:"gggg",month:"mm",day:"dd"},sv:{year:"åååå",month:"mm",day:"dd"},szl:{year:"rrrr",month:"mm",day:"dd"},tg:{year:"сссс",month:"мм",day:"рр"},th:{year:"ปปปป",month:"ดด",day:"วว"},tr:{year:"yyyy",month:"aa",day:"gg"},uk:{year:"рррр",month:"мм",day:"дд"},"zh-CN":{year:"年",month:"月",day:"日"},"zh-TW":{year:"年",month:"月",day:"日"}},"en");function q4(e,t,a){return e==="era"||e==="dayPeriod"?t:e==="year"||e==="month"||e==="day"?Z4.getStringForLocale(e,a):"––"}class Ce{constructor(t,a,r){if(this.era=(r==null?void 0:r.era)??null,this.calendar=t,this.year=(r==null?void 0:r.year)??null,this.month=(r==null?void 0:r.month)??null,this.day=(r==null?void 0:r.day)??null,this.hour=(r==null?void 0:r.hour)??null,this.hourCycle=a,this.dayPeriod=null,this.minute=(r==null?void 0:r.minute)??null,this.second=(r==null?void 0:r.second)??null,this.millisecond=(r==null?void 0:r.millisecond)??null,this.offset="offset"in(r??{})?r.offset:null,this.hour!=null){let[i,n]=ot(this.hour,a);this.dayPeriod=i,this.hour=n}}copy(){let t=new Ce(this.calendar,this.hourCycle);return t.era=this.era,t.year=this.year,t.month=this.month,t.day=this.day,t.hour=this.hour,t.dayPeriod=this.dayPeriod,t.minute=this.minute,t.second=this.second,t.millisecond=this.millisecond,t.offset=this.offset,t}isComplete(t){return t.every(a=>this[a]!=null)}validate(t,a){return a.every(r=>{if((r==="hour"||r==="dayPeriod")&&"hour"in t){let[i,n]=ot(t.hour,this.hourCycle);return this.dayPeriod===i&&this.hour===n}return this[r]===t[r]})}isCleared(t){return t.every(a=>this[a]===null)}set(t,a,r){let i=this.copy();return i[t]=a,t==="hour"&&i.dayPeriod==null&&"hour"in r&&(i.dayPeriod=ot(r.hour,this.hourCycle)[0]),t==="year"&&i.era==null&&(i.era=r.era),t!=="second"&&t!=="literal"&&t!=="timeZoneName"&&(i.offset=null),i}clear(t){let a=this.copy();return a[t]=null,t==="year"&&(a.era=null),a.offset=null,a}cycle(t,a,r,i){let n=this.copy();if(n[t]==null&&t!=="dayPeriod"&&t!=="era"){if(t==="hour"&&"hour"in r){let[o,s]=ot(r.hour,this.hourCycle);n.dayPeriod=o,n.hour=s}else n[t]=r[t];return t==="year"&&n.era==null&&(n.era=r.era),n}switch(t){case"era":{let o=this.calendar.getEras(),s=o.indexOf(n.era);s=qe(s,a,0,o.length-1),n.era=o[s];break}case"year":{let o=new te(this.calendar,this.era??r.era,this.year??r.year,this.month??1,this.day??1);o=o.cycle(t,a,{round:t==="year"}),n.era=o.era,n.year=o.year;break}case"month":n.month=qe(n.month??1,a,1,this.calendar.getMaximumMonthsInYear());break;case"day":n.day=qe(n.day??1,a,1,this.calendar.getMaximumDaysInMonth());break;case"hour":{let o=i.some(s=>["year","month","day"].includes(s));if("timeZone"in r&&(!o||n.year!=null&&n.month!=null&&n.day!=null)){let s=this.toValue(r);s=s.cycle("hour",a,{hourCycle:this.hourCycle==="h12"?12:24,round:!1});let[u,d]=ot(s.hour,this.hourCycle);n.hour=d,n.dayPeriod=u,n.offset=s.offset}else{let s=n.hour??0,u=this.getSegmentLimits("hour");n.hour=qe(s,a,u.minValue,u.maxValue),n.dayPeriod==null&&"hour"in r&&(n.dayPeriod=ot(r.hour,this.hourCycle)[0])}break}case"dayPeriod":n.dayPeriod=qe(n.dayPeriod??0,a,0,1);break;case"minute":n.minute=qe(n.minute??0,a,0,59,!0);break;case"second":n.second=qe(n.second??0,a,0,59,!0);break}return n}toValue(t){if("hour"in t){let a=this.hour;a!=null?a=W4(a,this.dayPeriod??0,this.hourCycle):(this.hourCycle==="h12"||this.hourCycle==="h11")&&(a=this.dayPeriod===1?12:0);let r=t.set({era:this.era??t.era,year:this.year??t.year,month:this.month??t.month,day:this.day??t.day,hour:a??t.hour,minute:this.minute??t.minute,second:this.second??t.second,millisecond:this.millisecond??t.millisecond});return"offset"in r&&this.offset!=null&&r.offset!==this.offset&&(r=r.add({milliseconds:r.offset-this.offset})),r}else return t.set({era:this.era??t.era,year:this.year??t.year,month:this.month??t.month,day:this.day??t.day})}getSegmentLimits(t){switch(t){case"era":{let a=this.calendar.getEras();return{value:this.era!=null?a.indexOf(this.era):a.length-1,minValue:0,maxValue:a.length-1}}case"year":return{value:this.year,minValue:1,maxValue:9999};case"month":return{value:this.month,minValue:1,maxValue:this.calendar.getMaximumMonthsInYear()};case"day":return{value:this.day,minValue:1,maxValue:this.calendar.getMaximumDaysInMonth()};case"dayPeriod":return{value:this.dayPeriod,minValue:0,maxValue:1};case"hour":{let a=0,r=23;return this.hourCycle==="h12"?(a=1,r=12):this.hourCycle==="h11"&&(a=0,r=11),{value:this.hour,minValue:a,maxValue:r}}case"minute":return{value:this.minute,minValue:0,maxValue:59};case"second":return{value:this.second,minValue:0,maxValue:59}}}}function qe(e,t,a,r,i=!1){if(i){e+=Math.sign(t),e<a&&(e=r);let n=Math.abs(t);t>0?e=Math.ceil(e/n)*n:e=Math.floor(e/n)*n,e>r&&(e=a)}else e+=t,e<a?e=r-(a-e-1):e>r&&(e=a+(e-r-1));return e}function ot(e,t){let a=e>=12?1:0;switch(t){case"h11":e>=12&&(e-=12);break;case"h12":e===0?e=12:e>12&&(e-=12);break;case"h23":a=null;break;case"h24":e+=1,a=null}return[a,e]}function W4(e,t,a){switch(a){case"h11":t===1&&(e+=12);break;case"h12":e===12&&(e=0),t===1&&(e+=12);break;case"h24":e-=1;break}return e}const rr={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},fi={year:5,month:2,day:7,hour:2,minute:15,second:15},Q4={dayperiod:"dayPeriod",relatedYear:"year",yearName:"literal",unknown:"literal"};function Y4(e){let{locale:t,createCalendar:a,hideTimeZone:r,isDisabled:i=!1,isReadOnly:n=!1,isRequired:o=!1,minValue:s,maxValue:u,isDateUnavailable:d}=e,c=e.value||e.defaultValue||e.placeholderValue||null,[m,f]=Bu(c,e.granularity),g=f||"UTC";if(c&&!(m in c))throw new Error("Invalid granularity "+m+" for value "+c.toString());let[p,$]=l.useMemo(()=>{let U=new Oe(t,{dateStyle:"short",timeStyle:"short",hour12:e.hourCycle!=null?e.hourCycle===12:void 0}).resolvedOptions();return[a(U.calendar),U.hourCycle]},[t,e.hourCycle,a]),[y,h]=ra(e.value,e.defaultValue??null,e.onChange),[_]=l.useState(y),D=l.useMemo(()=>Su(y,p)??null,[y,p]),[x,b]=l.useState(()=>new Ce(p,$,D)),S=p.identifier==="gregory"&&x.era==="BC",R=l.useMemo(()=>({granularity:m,maxGranularity:e.maxGranularity??"year",timeZone:f,hideTimeZone:r,hourCycle:e.hourCycle,showEra:S,shouldForceLeadingZeros:e.shouldForceLeadingZeros}),[e.maxGranularity,m,e.hourCycle,e.shouldForceLeadingZeros,f,r,S]),k=l.useMemo(()=>mt({},R),[R]),I=l.useMemo(()=>new Oe(t,k),[t,k]),P=l.useMemo(()=>I.resolvedOptions(),[I]),w=l.useMemo(()=>X4(e.placeholderValue,m,p,f),[e.placeholderValue,m,p,f]),F=l.useMemo(()=>{let T=$==="h11"||$==="h12",U=["era","year","month","day","hour",...T?["dayPeriod"]:[],"minute","second"],re=U.indexOf(e.maxGranularity||"era"),Ie=U.indexOf(m==="hour"&&T?"dayPeriod":m);return U.slice(re,Ie+1)},[e.maxGranularity,m,$]),[M,O]=l.useState(D),[Q,L]=l.useState(p),[G,W]=l.useState($);(D!==M||$!==G||!Ea(p,Q))&&(x=new Ce(p,$,D),O(D),L(p),W($),b(x));let X=T=>{if(!(e.isDisabled||e.isReadOnly))if(T==null||T instanceof Ce&&T.isCleared(F))b(new Ce(p,$,D)),h(null);else if(!(T instanceof Ce))T=J(T,(c==null?void 0:c.calendar)||new le),b(new Ce(p,$,D)),h(T);else{if(T.isComplete(F)){let U=T.toValue(D??w);if(T.validate(U,F)){let re=J(U,(c==null?void 0:c.calendar)||new le);if(!y||re.compare(y)!==0){b(new Ce(p,$,D)),h(re);return}}}b(T)}},A=l.useMemo(()=>x.toValue(D??w).toDate(g),[x,g,D,w]),j=l.useMemo(()=>J4(A,x,I,P,p,t,m),[A,I,P,x,p,t,m]),z=(T,U)=>{X(x.cycle(T,U,w,F))},V=l.useMemo(()=>Pu(y,s,u,d,R),[y,s,u,d,R]),B=Ni({...e,value:y,builtinValidation:V}),N=B.displayValidation.isInvalid,H=e.validationState||(N?"invalid":null);return{...B,value:D,defaultValue:e.defaultValue??_,dateValue:A,calendar:p,setValue:X,segments:j,dateFormatter:I,validationState:H,isInvalid:N,granularity:m,maxGranularity:e.maxGranularity??"year",isDisabled:i,isReadOnly:n,isRequired:o,increment(T){z(T,1)},decrement(T){z(T,-1)},incrementPage(T){z(T,fi[T]||1)},decrementPage(T){z(T,-(fi[T]||1))},incrementToMax(T){let U=T==="hour"&&$==="h12"?11:x.getSegmentLimits(T).maxValue;X(x.set(T,U,w))},decrementToMin(T){let U=T==="hour"&&$==="h12"?12:x.getSegmentLimits(T).minValue;X(x.set(T,U,w))},setSegment(T,U){X(x.set(T,U,w))},confirmPlaceholder(){if(!(e.isDisabled||e.isReadOnly)&&x.isComplete(F)){let T=x.toValue(D??w),U=J(T,(c==null?void 0:c.calendar)||new le);(!y||U.compare(y)!==0)&&h(U),b(new Ce(p,$,D))}},clearSegment(T){let U=x;T!=="timeZoneName"&&T!=="literal"&&(U=x.clear(T)),X(U)},formatValue(T){if(!D)return"";let U=mt(T,R);return new Oe(t,U).format(A)},getDateFormatter(T,U){let re={...R,...U},Ie=mt({},re);return new Oe(T,Ie)}}}function J4(e,t,a,r,i,n,o){let s=["hour","minute","second"],u=a.formatToParts(e),d=new yr(n,{useGrouping:!1}),c=new yr(n,{useGrouping:!1,minimumIntegerDigits:2});for(let f of u)if(f.type==="year"||f.type==="month"||f.type==="day"||f.type==="hour"){let g=t[f.type]??0;r[f.type]==="2-digit"?f.value=c.format(g):f.value=d.format(g)}let m=[];for(let f of u){let g=Q4[f.type]||f.type,p=rr[g];g==="era"&&i.getEras().length===1&&(p=!1);let $=rr[g]&&t[f.type]==null,y=rr[g]?q4(g,f.value,n):null,h={type:g,text:$?y:f.value,...t.getSegmentLimits(g),isPlaceholder:$,placeholder:y,isEditable:p};g==="hour"?(m.push({type:"literal",text:"⁦",isPlaceholder:!1,placeholder:"",isEditable:!1}),m.push(h),g===o&&m.push({type:"literal",text:"⁩",isPlaceholder:!1,placeholder:"",isEditable:!1})):s.includes(g)&&g===o?(m.push(h),m.push({type:"literal",text:"⁩",isPlaceholder:!1,placeholder:"",isEditable:!1})):m.push(h)}return m}const ku=l.createContext(null),Ia=l.createContext(null),sn=l.createContext(null),e0=l.forwardRef(function(t,a){let r=l.useContext(Ia),i=l.useContext(sn);return r||i?E.createElement(Ru,{...t,ref:a}):E.createElement(t0,{...t,ref:a})}),t0=l.forwardRef((e,t)=>{let[a,r]=at({slot:e.slot},t,ku),{locale:i}=fe(),n=Y4({...a,locale:i,createCalendar:ws}),o=l.useRef(null),{fieldProps:s,inputProps:u}=M4({...a,inputRef:o},n,r);return E.createElement($t,{values:[[Ia,n],[Zd,{...u,ref:o}],[Gr,{...s,ref:r,isInvalid:n.isInvalid,isDisabled:n.isDisabled}]]},E.createElement(Ru,e))}),Ru=l.forwardRef((e,t)=>{let{className:a,children:r}=e,i=l.useContext(Ia),n=l.useContext(sn),o=i??n;return E.createElement(E.Fragment,null,E.createElement(jr,{...e,ref:t,slot:e.slot||void 0,className:a??"react-aria-DateInput",isReadOnly:o.isReadOnly,isInvalid:o.isInvalid,isDisabled:o.isDisabled},o.segments.map((s,u)=>l.cloneElement(r(s),{key:u}))),E.createElement(Xd,{className:""}))}),a0=l.forwardRef(function({segment:t,...a},r){let i=l.useContext(Ia),n=l.useContext(sn),o=i??n,s=je(r),{segmentProps:u}=U4(t,o,s),{focusProps:d,isFocused:c,isFocusVisible:m}=pt(),{hoverProps:f,isHovered:g}=Nr({...a,isDisabled:o.isDisabled||t.type==="literal"}),p=Ve({...a,values:{...t,isReadOnly:o.isReadOnly,isInvalid:o.isInvalid,isDisabled:o.isDisabled,isHovered:g,isFocused:c,isFocusVisible:m},defaultChildren:t.text,defaultClassName:"react-aria-DateSegment"});return E.createElement(me.span,{...ae(ue(a,{global:!0}),u,d,f),...p,style:u.style,ref:s,"data-placeholder":t.isPlaceholder||void 0,"data-invalid":o.isInvalid||void 0,"data-readonly":o.isReadOnly||void 0,"data-disabled":o.isDisabled||void 0,"data-type":t.type,"data-hovered":g||void 0,"data-focused":c||void 0,"data-focus-visible":m||void 0})});function r0(e){return e&&e.__esModule?e.default:e}function n0(e,t,a){let r=ut(),i=ut(),n=ut(),o=Re(r0(Ra),"@react-aria/datepicker"),{isInvalid:s,validationErrors:u,validationDetails:d}=t.displayValidation,{labelProps:c,fieldProps:m,descriptionProps:f,errorMessageProps:g}=Ti({...e,labelElementType:"span",isInvalid:s,errorMessage:e.errorMessage||u}),p=Gl(t,a),$=m["aria-labelledby"]||m.id,{locale:y}=fe(),h=t.formatValue(y,{month:"long"}),_=h?o.format("selectedDateDescription",{date:h}):"",D=At(_),x=[D["aria-describedby"],m["aria-describedby"]].filter(Boolean).join(" ")||void 0,b=ue(e),S=l.useMemo(()=>Ur(a),[a]),R=l.useRef(!1),{focusWithinProps:k}=Mi({...e,isDisabled:t.isOpen,onBlurWithin:I=>{var w,F;let P=document.getElementById(i);Oi(P,I.relatedTarget)||(R.current=!1,(w=e.onBlur)==null||w.call(e,I),(F=e.onFocusChange)==null||F.call(e,!1))},onFocusWithin:I=>{var P,w;R.current||(R.current=!0,(P=e.onFocus)==null||P.call(e,I),(w=e.onFocusChange)==null||w.call(e,!0))}});return{groupProps:ae(b,p,m,D,k,{role:"group","aria-disabled":e.isDisabled||null,"aria-labelledby":$,"aria-describedby":x,onKeyDown(I){t.isOpen||e.onKeyDown&&e.onKeyDown(I)},onKeyUp(I){t.isOpen||e.onKeyUp&&e.onKeyUp(I)}}),labelProps:{...c,onClick:()=>{S.focusFirst()}},fieldProps:{...m,id:n,[aa]:"presentation","aria-describedby":x,value:t.value,defaultValue:t.defaultValue,onChange:t.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[qd]:t,autoFocus:e.autoFocus,name:e.name,form:e.form},descriptionProps:f,errorMessageProps:g,buttonProps:{...D,id:r,"aria-haspopup":"dialog","aria-label":o.format("calendar"),"aria-labelledby":`${r} ${$}`,"aria-describedby":x,"aria-expanded":t.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>t.setOpen(!0)},dialogProps:{id:i,"aria-labelledby":`${r} ${$}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,isInvalid:t.isInvalid,errorMessage:typeof e.errorMessage=="function"?e.errorMessage(t.displayValidation):e.errorMessage||t.displayValidation.validationErrors.join(" "),firstDayOfWeek:e.firstDayOfWeek,pageBehavior:e.pageBehavior},isInvalid:s,validationErrors:u,validationDetails:d}}function i0(e){let t=Wd(e),[a,r]=ra(e.value,e.defaultValue||null,e.onChange),[i]=l.useState(a),n=a||e.placeholderValue||null,[o,s]=Bu(n,e.granularity),u=a!=null?a.toDate(s??"UTC"):null,d=o==="hour"||o==="minute"||o==="second",c=e.shouldCloseOnSelect??!0,[m,f]=l.useState(null),[g,p]=l.useState(null);if(a&&(m=a,"hour"in a&&(g=a)),n&&!(o in n))throw new Error("Invalid granularity "+o+" for value "+n.toString());let $=(a==null?void 0:a.calendar.identifier)==="gregory"&&a.era==="BC",y=l.useMemo(()=>({granularity:o,timeZone:s,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:$}),[o,e.hourCycle,e.shouldForceLeadingZeros,s,e.hideTimeZone,$]),{minValue:h,maxValue:_,isDateUnavailable:D}=e,x=l.useMemo(()=>Pu(a,h,_,D,y),[a,h,_,D,y]),b=Ni({...e,value:a,builtinValidation:x}),S=b.displayValidation.isInvalid,R=e.validationState||(S?"invalid":null),k=(w,F)=>{r("timeZone"in F?F.set(pe(w)):ke(w,F)),f(null),p(null),b.commitValidation()},I=w=>{let F=typeof c=="function"?c():c;d?g||F?k(w,g||ci(e.defaultValue||e.placeholderValue)):f(w):(r(w),b.commitValidation()),F&&t.setOpen(!1)},P=w=>{m&&w?k(m,w):p(w)};return{...b,value:a,defaultValue:e.defaultValue??i,setValue:r,dateValue:m,timeValue:g,setDateValue:I,setTimeValue:P,granularity:o,hasTime:d,...t,setOpen(w){!w&&!a&&m&&d&&k(m,g||ci(e.defaultValue||e.placeholderValue)),t.setOpen(w)},validationState:R,isInvalid:S,formatValue(w,F){if(!u)return"";let M=mt(F,y);return new Oe(w,M).format(u)},getDateFormatter(w,F){let M={...y,...F},O=mt({},M);return new Oe(w,O)}}}const o0=l.createContext(null),Iu=l.createContext(null),s0=l.createContext(null),l0=[Gr,ya,Ui,Da],u0=l.forwardRef(function(t,a){[t,a]=at(t,a,o0);let{validationBehavior:r}=fr(Qd)||{},i=t.validationBehavior??r??"native",n=i0({...t,validationBehavior:i}),o=l.useRef(null),[s,u]=Yd(!t["aria-label"]&&!t["aria-labelledby"]),{groupProps:d,labelProps:c,fieldProps:m,buttonProps:f,dialogProps:g,calendarProps:p,descriptionProps:$,errorMessageProps:y,...h}=n0({...Jd(t),label:u,validationBehavior:i},n,o),{focusProps:_,isFocused:D,isFocusVisible:x}=pt({within:!0}),b=Ve({...t,values:{state:n,isFocusWithin:D,isFocusVisible:x,isDisabled:t.isDisabled||!1,isInvalid:n.isInvalid,isOpen:n.isOpen,isReadOnly:t.isReadOnly||!1,isRequired:t.isRequired||!1},defaultClassName:"react-aria-DatePicker"}),S=ue(t,{global:!0});return delete S.id,E.createElement($t,{values:[[Iu,n],[Gr,{...d,ref:o,isInvalid:n.isInvalid}],[ku,m],[ya,{...f,isPressed:n.isOpen}],[Ui,{...c,ref:s,elementType:"span"}],[ma,p],[ec,n],[tc,{trigger:"DatePicker",triggerRef:o,placement:"bottom start",clearContexts:l0}],[ac,g],[Da,{slots:{description:$,errorMessage:y}}],[rc,h]]},E.createElement(me.div,{...ae(S,b,_),ref:a,slot:t.slot||void 0,"data-focus-within":D||void 0,"data-invalid":n.isInvalid||void 0,"data-focus-visible":x||void 0,"data-disabled":t.isDisabled||void 0,"data-readonly":t.isReadOnly||void 0,"data-required":t.isRequired||void 0,"data-open":n.isOpen||void 0}),E.createElement(F4,{autoComplete:t.autoComplete,name:t.name,isDisabled:t.isDisabled,state:n}))});function d0(e,t,a){let{"aria-label":r}=e,i=ki(),n=$a({"aria-label":r,"aria-labelledby":i});return{rowProps:{role:"row"},rowHeaderProps:{id:i,role:"rowheader"},rowGroupProps:{role:"rowgroup",...n}}}const c0=l.createContext(null),f0=l.forwardRef(function(t,a){return[t,a]=at(t,a,c0),E.createElement(mc,{content:E.createElement(Li,t)},r=>E.createElement(m0,{props:t,collection:r,gridListRef:a}))});function m0({props:e,collection:t,gridListRef:a}){[e,a]=at(e,a,Hi);let{shouldUseVirtualFocus:r,filter:i,disallowTypeAhead:n,UNSTABLE_focusOnEntry:o,...s}=e,{dragAndDropHooks:u,keyboardNavigationBehavior:d="arrow",layout:c="stack",orientation:m="vertical"}=e,{CollectionRoot:f,isVirtualized:g,layoutDelegate:p,dropTargetDelegate:$}=l.useContext(Bt),y=pc({...s,collection:t,children:void 0,layoutDelegate:p}),h=gc(y,i),_=hc({usage:"search",sensitivity:"base"}),{disabledBehavior:D,disabledKeys:x}=h.selectionManager,{direction:b}=fe(),S=l.useMemo(()=>new $c({collection:h.collection,collator:_,ref:a,disabledKeys:x,disabledBehavior:D,layoutDelegate:p,layout:c,orientation:m,direction:b}),[h.collection,a,c,m,x,D,p,_,b]),{gridProps:R}=Mf({...s,keyboardDelegate:S,keyboardNavigationBehavior:c==="grid"?"tab":d,isVirtualized:g,shouldSelectOnPressUp:e.shouldSelectOnPressUp,disallowTypeAhead:n,UNSTABLE_focusOnEntry:o},h,a),k=h.selectionManager,I=!!(u!=null&&u.useDraggableCollectionState),P=!!(u!=null&&u.useDroppableCollectionState);l.useRef(I),l.useRef(P),l.useEffect(()=>{},[I,P]);let w,F,M,O=!1,Q=null,L=l.useRef(null);if(I&&u){w=u.useDraggableCollectionState({collection:h.collection,selectionManager:k,preview:u.renderDragPreview?L:void 0}),u.useDraggableCollection({},w,a);let H=u.DragPreview;Q=u.renderDragPreview?E.createElement(H,{ref:L},u.renderDragPreview):null}if(P&&u){F=u.useDroppableCollectionState({collection:h.collection,selectionManager:k});let H=u.dropTargetDelegate||$||new u.ListDropTargetDelegate(t,a,{layout:c,direction:b,orientation:m});M=u.useDroppableCollection({keyboardDelegate:S,dropTargetDelegate:H},F,a),O=F.isDropTarget({type:"root"})}let{focusProps:G,isFocused:W,isFocusVisible:X}=pt(),A=h.collection.size===0,j={isDropTarget:O,orientation:m,isEmpty:A,isFocused:W,isFocusVisible:X,layout:c,state:h},z=Ve({...e,children:void 0,defaultClassName:"react-aria-GridList",values:j}),V=null,B=null;if(A&&e.renderEmptyState){let H=e.renderEmptyState(j);V=E.createElement("div",{role:"row","aria-rowindex":1,style:{display:"contents"}},E.createElement("div",{role:"gridcell",style:{display:"contents"}},H))}let N=ue(e,{global:!0});return E.createElement(yc,null,E.createElement(me.div,{...ae(N,z,R,G,M==null?void 0:M.collectionProps,B),ref:a,slot:e.slot||void 0,onScroll:e.onScroll,"data-drop-target":O||void 0,"data-empty":A||void 0,"data-focused":W||void 0,"data-focus-visible":X||void 0,"data-layout":c,"data-orientation":m},E.createElement($t,{values:[[St,h],[xa,{dragAndDropHooks:u,dragState:w,dropState:F}],[Dc,{render:g0}]]},P&&E.createElement(y0,null),E.createElement(bc,null,E.createElement(f,{collection:h.collection,scrollRef:a,persistedKeys:vc(k,u,F),renderDropIndicator:xc(u,F)}))),V,Q))}const p0=Kr(sc,function(t,a,r){let i=l.useContext(St),{dragAndDropHooks:n,dragState:o,dropState:s}=l.useContext(xa),u=je(a),{isVirtualized:d}=l.useContext(Bt),c=o&&!(o.isDisabled||o.selectionManager.isDisabled(r.key)),{rowProps:m,gridCellProps:f,descriptionProps:g,...p}=Af({node:r,shouldSelectOnPressUp:!!o,isVirtualized:d,focusMode:t.focusMode,allowsArrowNavigation:t.allowsArrowNavigation},i,u),{hoverProps:$,isHovered:y}=Nr({isDisabled:!p.allowsSelection&&!p.hasAction&&!c,onHoverStart:r.props.onHoverStart,onHoverChange:r.props.onHoverChange,onHoverEnd:r.props.onHoverEnd}),{isFocusVisible:h,focusProps:_}=pt(),{isFocusVisible:D,focusProps:x}=pt({within:!0}),{checkboxProps:b}=Tf({key:r.key},i),S=i.selectionManager.disabledBehavior==="all"&&p.isDisabled?{isDisabled:!0}:{},R=null;o&&n&&(R=n.useDraggableItem({key:r.key,hasDragButton:!0},o));let k=null,I=l.useRef(null),{visuallyHiddenProps:P}=ba();s&&n&&(k=n.useDropIndicator({target:{type:"item",key:r.key,dropPosition:"on"}},s,I));let w=o&&o.isDragging(r.key),F=Ve({...t,id:void 0,children:r.rendered,defaultClassName:"react-aria-GridListItem",values:{...p,isHovered:y,isFocusVisible:h,isFocusVisibleWithin:D,selectionMode:i.selectionManager.selectionMode,selectionBehavior:i.selectionManager.selectionBehavior,allowsDragging:!!o,isDragging:w,isDropTarget:k==null?void 0:k.isDropTarget,id:r.key,state:i}}),M=l.useRef(null);l.useEffect(()=>{o&&!M.current&&console.warn('Draggable items in a GridList must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.')},[]),l.useEffect(()=>{r.textValue},[r.textValue]);let O=ue(t,{global:!0});return delete O.id,delete O.onClick,E.createElement(E.Fragment,null,k&&!k.isHidden&&E.createElement("div",{role:"row",style:{position:"absolute"}},E.createElement("div",{role:"gridcell"},E.createElement("div",{role:"button",...P,...k==null?void 0:k.dropIndicatorProps,ref:I}))),E.createElement(me.div,{...ae(O,F,m,_,x,$,R==null?void 0:R.dragProps),ref:u,"data-selected":p.isSelected||void 0,"data-disabled":p.isDisabled||void 0,"data-hovered":y||void 0,"data-focused":p.isFocused||void 0,"data-focus-visible":h||void 0,"data-focus-visible-within":D||void 0,"data-pressed":p.isPressed||void 0,"data-allows-dragging":!!o||void 0,"data-dragging":w||void 0,"data-drop-target":(k==null?void 0:k.isDropTarget)||void 0,"data-selection-mode":i.selectionManager.selectionMode==="none"?void 0:i.selectionManager.selectionMode},E.createElement("div",{...f,style:{display:"contents"}},E.createElement($t,{values:[[lc,{slots:{[jt]:{},selection:b}}],[uc,{slots:{[jt]:{},selection:b}}],[ya,{slots:{[jt]:S,drag:{...R==null?void 0:R.dragButtonProps,ref:M,style:{pointerEvents:"none"}}}}],[Da,{slots:{[jt]:{},description:g}}],[Bt,dc],[St,null],[Hi,null],[cc,null],[fc,{isSelected:p.isSelected}]]},F.children))))});function g0(e,t){t=je(t);let{dragAndDropHooks:a,dropState:r}=l.useContext(xa),i=l.useRef(null),{dropIndicatorProps:n,isHidden:o,isDropTarget:s}=a.useDropIndicator(e,r,i);return o?null:E.createElement($0,{...e,dropIndicatorProps:n,isDropTarget:s,buttonRef:i,ref:t})}function h0(e,t){let{dropIndicatorProps:a,isDropTarget:r,buttonRef:i,...n}=e,{visuallyHiddenProps:o}=ba(),s=Ve({...n,defaultClassName:"react-aria-DropIndicator",values:{isDropTarget:r}});return E.createElement(me.div,{...s,role:"row",ref:t,"data-drop-target":r||void 0},E.createElement("div",{role:"gridcell"},E.createElement("div",{...o,role:"button",...a,ref:i}),s.children))}const $0=l.forwardRef(h0);function y0(){let{dragAndDropHooks:e,dropState:t}=l.useContext(xa),a=l.useRef(null),{dropIndicatorProps:r}=e.useDropIndicator({target:{type:"root"}},t,a),i=t.isDropTarget({type:"root"}),{visuallyHiddenProps:n}=ba();return!i&&r["aria-hidden"]?null:E.createElement("div",{role:"row","aria-hidden":r["aria-hidden"],style:{position:"absolute"}},E.createElement("div",{role:"gridcell"},E.createElement("div",{role:"button",...n,...r,ref:a})))}Kr(wc,function(t,a,r){let i=l.useContext(St),{isVirtualized:n}=l.useContext(Bt),{isLoading:o,onLoadMore:s,scrollOffset:u,...d}=t,c=l.useRef(null),m=l.useMemo(()=>({onLoadMore:s,collection:i==null?void 0:i.collection,sentinelRef:c,scrollOffset:u}),[s,u,c,i==null?void 0:i.collection]);Cc(m,c);let f=Ve({...d,id:void 0,children:r.rendered,defaultClassName:"react-aria-GridListLoadingIndicator",values:void 0});return E.createElement(E.Fragment,null,E.createElement("div",{style:{position:"relative",width:0,height:0},inert:Ec(!0)},E.createElement("div",{"data-testid":"loadMoreSentinel",ref:c,style:{position:"absolute",height:1,width:1}})),o&&f.children&&E.createElement(me.div,{...f,...ue(t,{global:!0}),role:"row",ref:a},E.createElement("div",{"aria-colindex":n?1:void 0,role:"gridcell"},f.children)))});const D0=ic(oc,(e,t,a)=>{let r=l.useContext(St),{CollectionBranch:i}=l.useContext(Bt),n=l.useRef(null);t=je(t);let{rowHeaderProps:o,rowProps:s,rowGroupProps:u}=d0({"aria-label":e["aria-label"]??void 0},r,t),d=Ve({...e,id:void 0,children:void 0,defaultClassName:"react-aria-GridListSection",values:void 0}),c=ue(e,{global:!0});return delete c.id,E.createElement(me.div,{...ae(c,d,u),ref:t},E.createElement($t,{values:[[Fu,{...s,ref:n}],[Au,{...o}]]},E.createElement(i,{collection:r.collection,parent:a})))}),Fu=l.createContext({}),Au=l.createContext(null),Tu=Kr(nc,function(t,a){[t,a]=at(t,a,Fu);let r=l.useContext(Au);return E.createElement(me.div,{render:t.render,className:"react-aria-GridListHeader",ref:a,...t},E.createElement("div",{...r,style:{display:"contents"}},t.children))});function b0(e,t,a,r,i=!1,n=!1){switch(r){case"left":return i?nr(e,t,a,n,"left"):ir(e,t,a,n,"left");case"right":return i?ir(e,t,a,n,"right"):nr(e,t,a,n,"right");case"up":return ir(e,t,a,n);case"down":return nr(e,t,a,n)}}function nr(e,t,a,r=!1,i=null){var n,o,s,u;if(!a)return{type:"root"};if(a.type==="root"){let d=((n=e.getFirstKey)==null?void 0:n.call(e))??null;return d!=null?{type:"item",key:d,dropPosition:"before"}:null}if(a.type==="item"){let d=null;i?d=i==="right"?(o=e.getKeyRightOf)==null?void 0:o.call(e,a.key,{includeDisabled:!0}):(s=e.getKeyLeftOf)==null?void 0:s.call(e,a.key,{includeDisabled:!0}):d=(u=e.getKeyBelow)==null?void 0:u.call(e,a.key,{includeDisabled:!0});let c=ln(t,a.key,m=>t.getKeyAfter(m));if(d!=null&&d!==c)return{type:"item",key:d,dropPosition:a.dropPosition};switch(a.dropPosition){case"before":return{type:"item",key:a.key,dropPosition:"on"};case"on":{let m=t.getItem(a.key),f=d!=null?t.getItem(d):null;return m&&f&&f.level>=m.level?{type:"item",key:f.key,dropPosition:"before"}:{type:"item",key:a.key,dropPosition:"after"}}case"after":{let m=t.getItem(a.key),f=(m==null?void 0:m.nextKey)!=null?t.getItem(m.nextKey):null;for(;f!=null&&f.type!=="item";)f=f.nextKey!=null?t.getItem(f.nextKey):null;if(m&&f==null&&m.parentKey!=null){let g=t.getItem(m.parentKey);const p=(g==null?void 0:g.nextKey)!=null?t.getItem(g.nextKey):null;if((p==null?void 0:p.type)==="item")return{type:"item",key:p.key,dropPosition:"before"};if((g==null?void 0:g.type)==="item")return{type:"item",key:g.key,dropPosition:"after"}}if(f)return{type:"item",key:f.key,dropPosition:"on"}}}}return r?{type:"root"}:null}function ir(e,t,a,r=!1,i=null){var n,o,s,u;if(!a||r&&a.type==="root"){let d=null,c=(n=e.getLastKey)==null?void 0:n.call(e);for(;c!=null;){let m=t.getItem(c);if((m==null?void 0:m.type)!=="item")break;d=c,c=m==null?void 0:m.parentKey}return d!=null?{type:"item",key:d,dropPosition:"after"}:null}if(a.type==="item"){let d=null;i?d=i==="left"?(o=e.getKeyLeftOf)==null?void 0:o.call(e,a.key,{includeDisabled:!0}):(s=e.getKeyRightOf)==null?void 0:s.call(e,a.key,{includeDisabled:!0}):d=(u=e.getKeyAbove)==null?void 0:u.call(e,a.key,{includeDisabled:!0});let c=ln(t,a.key,m=>t.getKeyBefore(m));if(d!=null&&d!==c)return{type:"item",key:d,dropPosition:a.dropPosition};switch(a.dropPosition){case"before":{let m=t.getItem(a.key);if(m&&m.prevKey!=null){let f=mi(t,m.prevKey);if(f)return f}return d!=null?{type:"item",key:d,dropPosition:"on"}:{type:"root"}}case"on":return{type:"item",key:a.key,dropPosition:"before"};case"after":{let m=mi(t,a.key);return m||{type:"item",key:a.key,dropPosition:"on"}}}}return a.type!=="root"?{type:"root"}:null}function mi(e,t){let a=e.getItem(t),r=ln(e,t,n=>e.getKeyAfter(n)),i=r!=null?e.getItem(r):null;if(a&&i&&i.level>a.level){let n=null;if("lastChildKey"in a)for(n=a.lastChildKey!=null?e.getItem(a.lastChildKey):null;n&&n.type!=="item"&&n.prevKey!=null;)n=e.getItem(n.prevKey);else n=Array.from(a.childNodes).findLast(o=>o.type==="item")||null;if(n)return{type:"item",key:n.key,dropPosition:"after"}}return null}function ln(e,t,a){let r=a(t),i=r!=null?e.getItem(r):null;for(;i&&i.type!=="item";)r=a(i.key),i=r!=null?e.getItem(r):null;return r}const qt=20;function x0(e){let t=l.useRef(null),a=l.useRef(!0),r=l.useRef(!0);l.useEffect(()=>{if(e.current){t.current=_c(e.current)?e.current:Vr(e.current);let o=window.getComputedStyle(t.current);a.current=/(auto|scroll)/.test(o.overflowX),r.current=/(auto|scroll)/.test(o.overflowY)}},[e]);let i=l.useRef({timer:void 0,dx:0,dy:0}).current;l.useEffect(()=>()=>{i.timer&&(cancelAnimationFrame(i.timer),i.timer=void 0)},[i]);let n=l.useCallback(()=>{a.current&&t.current&&(t.current.scrollLeft+=i.dx),r.current&&t.current&&(t.current.scrollTop+=i.dy),i.timer&&(i.timer=requestAnimationFrame(n))},[t,i]);return{move(o,s){if(!ji()||Hr()||!t.current)return;let u=t.current.getBoundingClientRect(),d=qt,c=qt,m=u.height-qt,f=u.width-qt;o<d||o>f||s<c||s>m?(o<d?i.dx=o-d:o>f&&(i.dx=o-f),s<c?i.dy=s-c:s>m&&(i.dy=s-m),i.timer||(i.timer=requestAnimationFrame(n))):this.stop()},stop(){i.timer&&(cancelAnimationFrame(i.timer),i.timer=void 0)}}}function v0(e,t,a){let r=l.useRef({props:e,state:t,nextTarget:null,dropOperation:null}).current;r.props=e,r.state=t;let i=l.useCallback(async f=>{let{onInsert:g,onRootDrop:p,onItemDrop:$,onReorder:y,onMove:h,acceptedDragTypes:_="all",shouldAcceptItemDrop:D}=r.props,{draggingKeys:x}=$e,b=_e(a),{target:S,dropOperation:R,items:k}=f,I=k;(_!=="all"||D)&&(I=k.filter(P=>{let w;return P.kind==="directory"?w=new Set([qf]):w=P.kind==="file"?new Set([P.type]):P.types,_==="all"||_.some(F=>w.has(F))?S.type==="item"&&S.dropPosition==="on"&&D?D(S,w):!0:!1})),I.length>0&&(S.type==="root"&&p&&await p({items:I,dropOperation:R}),S.type==="item"&&(S.dropPosition==="on"&&$&&await $({items:I,dropOperation:R,isInternal:b,target:S}),h&&b&&await h({keys:x,dropOperation:R,target:S}),S.dropPosition!=="on"&&(!b&&g&&await g({items:I,dropOperation:R,target:S}),b&&y&&await y({keys:x,dropOperation:R,target:S}))))},[r,a]),n=x0(a),{dropProps:o}=zf({ref:a,onDropEnter(){r.nextTarget!=null&&t.setTarget(r.nextTarget)},onDropMove(f){r.nextTarget!=null&&t.setTarget(r.nextTarget),n.move(f.x,f.y)},getDropOperationForPoint(f,g,p,$){let{draggingKeys:y,dropCollectionRef:h}=$e,_=_e(a),D=b=>t.getDropOperation({target:b,types:f,allowedOperations:g,isInternal:_,draggingKeys:y})!=="cancel",x=e.dropTargetDelegate.getDropTargetFromPoint(p,$,D);if(!x)return r.dropOperation="cancel",r.nextTarget=null,"cancel";if(r.dropOperation=t.getDropOperation({target:x,types:f,allowedOperations:g,isInternal:_,draggingKeys:y}),r.dropOperation==="cancel"){let b={type:"root"},S=t.getDropOperation({target:b,types:f,allowedOperations:g,isInternal:_,draggingKeys:y});S!=="cancel"&&(x=b,r.dropOperation=S)}return x&&r.dropOperation!=="cancel"&&(a==null?void 0:a.current)!==(h==null?void 0:h.current)&&rt(a),r.nextTarget=r.dropOperation==="cancel"?null:x,r.dropOperation},onDropExit(){rt(void 0),t.setTarget(null),n.stop()},onDropActivate(f){var g;((g=t.target)==null?void 0:g.type)==="item"&&typeof e.onDropActivate=="function"&&e.onDropActivate({type:"dropactivate",x:f.x,y:f.y,target:t.target})},onDrop(f){rt(a),t.target&&d(f,t.target);let{draggingCollectionRef:g}=$e;g==null&&oo()}}),s=l.useRef(null),u=l.useCallback(()=>{var g,p,$;let{state:f}=r;if(s.current){let{target:y,collection:h,selectedKeys:_,focusedKey:D,isInternal:x,draggingKeys:b}=s.current;if(f.collection.size>h.size&&f.selectionManager.isSelectionEqual(_)){let S=new Set,R=f.collection.getFirstKey();for(;R!=null;){let k=f.collection.getItem(R);(k==null?void 0:k.type)==="item"&&!h.getItem(k.key)&&S.add(k.key),k!=null&&k.hasChildNodes&&((g=f.collection.getItem(k.lastChildKey))==null?void 0:g.type)==="item"?R=k.firstChildKey:R=f.collection.getKeyAfter(R)}if(f.selectionManager.setSelectedKeys(S),f.selectionManager.focusedKey===D){let k=S.keys().next().value;if(k!=null){let I=f.collection.getItem(k),P=s.current.target,w=f.collection.expandedKeys?f.collection.expandedKeys.has(I==null?void 0:I.parentKey):!1;I&&((I==null?void 0:I.type)==="cell"||P.type==="item"&&P.dropPosition==="on"&&!w)&&(k=I.parentKey),k!=null&&f.selectionManager.setFocusedKey(k),f.selectionManager.selectionMode==="none"&&Gt("keyboard")}}}else D!=null&&f.selectionManager.focusedKey===D&&x&&y.type==="item"&&y.dropPosition!=="on"&&b.has((p=f.collection.getItem(D))==null?void 0:p.parentKey)?(f.selectionManager.setFocusedKey((($=f.collection.getItem(D))==null?void 0:$.parentKey)??null),Gt("keyboard")):f.selectionManager.focusedKey===D&&y.type==="item"&&y.dropPosition==="on"&&f.collection.getItem(y.key)!=null?(f.selectionManager.setFocusedKey(y.key),Gt("keyboard")):f.selectionManager.focusedKey!=null&&!f.selectionManager.isSelected(f.selectionManager.focusedKey)&&Gt("keyboard");f.selectionManager.setFocused(!0)}},[r]),d=l.useCallback((f,g)=>{let{state:p}=r;s.current={timeout:void 0,focusedKey:p.selectionManager.focusedKey,collection:p.collection,selectedKeys:p.selectionManager.selectedKeys,draggingKeys:$e.draggingKeys,isInternal:_e(a),target:g},(r.props.onDrop||i)({type:"drop",x:f.x,y:f.y,target:g,items:f.items,dropOperation:f.dropOperation}),s.current.timeout=setTimeout(()=>{u(),s.current=null},50)},[r,i,a,u]);l.useEffect(()=>()=>{s.current&&clearTimeout(s.current.timeout)},[]),Vi(()=>{s.current&&t.collection!==s.current.collection&&u()});let{direction:c}=fe();l.useEffect(()=>{if(!a.current)return;let f=($,y=!0,h="down")=>b0(r.props.keyboardDelegate,r.state.collection,$,h,c==="rtl",y),g=($,y=!0)=>f($,y,"up"),p=($,y,h,_,D=!0)=>{let x=0,b,{draggingKeys:S}=$e,R=_e(a);do{let k=_($,D);if(!k)return null;$=k,b=r.state.getDropOperation({target:k,types:y,allowedOperations:h,isInternal:R,draggingKeys:S}),$.type==="root"&&x++}while(b==="cancel"&&!r.state.isDropTarget($)&&x<2);return b==="cancel"?null:$};return Xf({element:a.current,preventFocusOnDrop:!0,getDropOperation($,y){if(r.state.target){let{draggingKeys:_}=$e,D=_e(a);return r.state.getDropOperation({target:r.state.target,types:$,allowedOperations:y,isInternal:D,draggingKeys:_})}return p(null,$,y,f)?"move":"cancel"},onDropEnter($,y){let h=hr(y.items),_=r.state.selectionManager,D=null;rt(a);let x=_.focusedKey,b="after",S=x!=null?r.state.collection.getItem(x):null;if((S==null?void 0:S.type)==="cell"&&(x=S.parentKey),x!=null&&_.isSelected(x)&&(_.selectedKeys.size>1&&_.firstSelectedKey===x?b="before":x=_.lastSelectedKey),x!=null){D={type:"item",key:x,dropPosition:b};let{draggingKeys:R}=$e,k=_e(a);r.state.getDropOperation({target:D,types:h,allowedOperations:y.allowedDropOperations,isInternal:k,draggingKeys:R})==="cancel"&&(D=p(D,h,y.allowedDropOperations,f,!1)??p(D,h,y.allowedDropOperations,g,!1))}D||(D=p(null,h,y.allowedDropOperations,f)),r.state.setTarget(D)},onDropExit(){rt(void 0),r.state.setTarget(null)},onDropTargetEnter($){r.state.setTarget($)},onDropActivate($,y){(y==null?void 0:y.type)==="item"&&(y==null?void 0:y.dropPosition)==="on"&&typeof r.props.onDropActivate=="function"&&r.props.onDropActivate({type:"dropactivate",x:$.x,y:$.y,target:y})},onDrop($,y){rt(a),r.state.target&&d($,y||r.state.target)},onKeyDown($,y){var D,x,b,S,R,k,I;let{keyboardDelegate:h}=r.props,_=hr(y.items);switch($.key){case"ArrowDown":if(h.getKeyBelow){let P=p(r.state.target,_,y.allowedDropOperations,(w,F)=>f(w,F,"down"));r.state.setTarget(P)}break;case"ArrowUp":if(h.getKeyAbove){let P=p(r.state.target,_,y.allowedDropOperations,(w,F)=>f(w,F,"up"));r.state.setTarget(P)}break;case"ArrowLeft":if(h.getKeyLeftOf){let P=p(r.state.target,_,y.allowedDropOperations,(w,F)=>f(w,F,"left"));r.state.setTarget(P)}break;case"ArrowRight":if(h.getKeyRightOf){let P=p(r.state.target,_,y.allowedDropOperations,(w,F)=>f(w,F,"right"));r.state.setTarget(P)}break;case"Home":if(h.getFirstKey){let P=p(null,_,y.allowedDropOperations,f);r.state.setTarget(P)}break;case"End":if(h.getLastKey){let P=p(null,_,y.allowedDropOperations,g);r.state.setTarget(P)}break;case"PageDown":if(h.getKeyPageBelow){let P=r.state.target;if(!P)P=p(null,_,y.allowedDropOperations,f);else{let w=(D=h.getFirstKey)==null?void 0:D.call(h);P.type==="item"&&(w=P.key);let F=null;w!=null&&(F=h.getKeyPageBelow(w));let M=P.type==="item"?P.dropPosition:"after";if((F==null||P.type==="item"&&P.key===((x=h.getLastKey)==null?void 0:x.call(h)))&&(F=((b=h.getLastKey)==null?void 0:b.call(h))??null,M="after"),F==null)break;P={type:"item",key:F,dropPosition:M};let{draggingCollectionRef:O,draggingKeys:Q}=$e,L=(O==null?void 0:O.current)===(a==null?void 0:a.current);r.state.getDropOperation({target:P,types:_,allowedOperations:y.allowedDropOperations,isInternal:L,draggingKeys:Q})==="cancel"&&(P=p(P,_,y.allowedDropOperations,f,!1)??p(P,_,y.allowedDropOperations,g,!1))}r.state.setTarget(P??r.state.target)}break;case"PageUp":{if(!h.getKeyPageAbove)break;let P=r.state.target;if(!P)P=p(null,_,y.allowedDropOperations,g);else if(P.type==="item"){if(P.key===((S=h.getFirstKey)==null?void 0:S.call(h)))P={type:"root"};else{let O=h.getKeyPageAbove(P.key),Q=P.dropPosition;if(O==null&&(O=(R=h.getFirstKey)==null?void 0:R.call(h),Q="before"),O==null)break;P={type:"item",key:O,dropPosition:Q}}let{draggingKeys:w}=$e,F=_e(a);r.state.getDropOperation({target:P,types:_,allowedOperations:y.allowedDropOperations,isInternal:F,draggingKeys:w})==="cancel"&&(P=p(P,_,y.allowedDropOperations,g,!1)??p(P,_,y.allowedDropOperations,f,!1))}r.state.setTarget(P??r.state.target);break}}(I=(k=r.props).onKeyDown)==null||I.call(k,$)}})},[r,a,d,c]);let m=ut();return Zf.set(t,{id:m,ref:a}),{collectionProps:ae(o,{id:m,"aria-describedby":null})}}function Mu(e,t,a){let{dropProps:r}=Wf(),i=Qf(t);l.useEffect(()=>{if(a.current)return Yf({element:a.current,target:e.target,getDropOperation(c,m){let{draggingKeys:f}=$e,g=_e(i);return t.getDropOperation({target:e.target,types:c,allowedOperations:m,isInternal:g,draggingKeys:f})},activateButtonRef:e.activateButtonRef})},[a,e.target,t,i,e.activateButtonRef]);let n=so(),{draggingKeys:o}=$e,s=_e(i),u=n&&t.getDropOperation({target:e.target,types:hr(n.dragTarget.items),allowedOperations:n.dragTarget.allowedDropOperations,isInternal:s,draggingKeys:o})!=="cancel",d=t.isDropTarget(e.target);return l.useEffect(()=>{n&&d&&a.current&&a.current.focus()},[d,n,a]),{dropProps:{...r,"aria-hidden":!n||u?void 0:"true"},isDropTarget:d}}function w0(e){return e&&e.__esModule?e.default:e}function C0(e,t,a){var p,$;let{target:r}=e,{collection:i}=t,n=Re(w0(qr),"@react-aria/dnd"),o=so(),{dropProps:s}=Mu(e,t,a),u=ut(),d=y=>{var h,_;return y==null?"":((h=i.getTextValue)==null?void 0:h.call(i,y))??((_=i.getItem(y))==null?void 0:_.textValue)??""},c="",m;if(r.type==="root")c=n.format("dropOnRoot"),m=`${u} ${Jf(t)}`;else if(r.dropPosition==="on")c=n.format("dropOnItem",{itemText:d(r.key)});else{let y,h;if(r.dropPosition==="before"){let _=(p=i.getItem(r.key))==null?void 0:p.prevKey,D=_!=null?i.getItem(_):null;y=(D==null?void 0:D.type)==="item"?D.key:null}else y=r.key;if(r.dropPosition==="after"){let _=($=i.getItem(r.key))==null?void 0:$.nextKey,D=_!=null?i.getItem(_):null;h=(D==null?void 0:D.type)==="item"?D.key:null}else h=r.key;y!=null&&h!=null?c=n.format("insertBetween",{beforeItemText:d(y),afterItemText:d(h)}):y!=null?c=n.format("insertAfter",{itemText:d(y)}):h!=null&&(c=n.format("insertBefore",{itemText:d(h)}))}let f=t.isDropTarget(r),g=o?s["aria-hidden"]:"true";return{dropIndicatorProps:{...s,id:u,"aria-roledescription":n.format("dropIndicator"),"aria-label":c,"aria-labelledby":m,"aria-hidden":g,tabIndex:-1},isDropTarget:f,isHidden:!f&&!!g}}function E0(e){return e&&e.__esModule?e.default:e}const pi={keyboard:{start:"dragDescriptionKeyboard",end:"endDragKeyboard"},touch:{start:"dragDescriptionTouch",end:"endDragTouch"},virtual:{start:"dragDescriptionVirtual",end:"endDragVirtual"}};function _0(e){let{hasDragButton:t,isDisabled:a}=e,r=Re(E0(qr),"@react-aria/dnd"),i=l.useRef({options:e,x:0,y:0}).current;i.options=e;let n=l.useRef(null),[o,s]=l.useState(!1),u=b=>{n.current=b,s(!!b)},{addGlobalListener:d,removeAllGlobalListeners:c}=Fi(),m=l.useRef(null),f=b=>{var P,w,F;if(b.defaultPrevented)return;if(b.stopPropagation(),m.current==="virtual"){b.preventDefault(),y(be(b)),m.current=null;return}typeof e.onDragStart=="function"&&e.onDragStart({type:"dragstart",x:b.clientX,y:b.clientY});let S=e.getItems();(w=(P=b.dataTransfer).clearData)==null||w.call(P),tm(b.dataTransfer,S);let R=nt.all;if(typeof e.getAllowedDropOperations=="function"){let M=e.getAllowedDropOperations();R=nt.none;for(let O of M)R|=nt[O]||nt.none}Ka(R);let k=am[R]||"none";b.dataTransfer.effectAllowed=k==="cancel"?"none":k,typeof((F=e.preview)==null?void 0:F.current)=="function"&&e.preview.current(S,(M,O,Q)=>{if(!M)return;let L=M.getBoundingClientRect(),G=b.currentTarget.getBoundingClientRect(),W=b.clientX-G.x,X=b.clientY-G.y;(W>L.width||X>L.height)&&(W=L.width/2,X=L.height/2);let A=W,j=X;typeof O=="number"&&typeof Q=="number"&&(A=O,j=Q),A=Math.max(0,Math.min(A,L.width)),j=Math.max(0,Math.min(j,L.height));let z=2*Math.round(L.height/2);M.style.height=`${z}px`,b.dataTransfer.setDragImage(M,A,j)}),d(window,"drop",M=>{M.preventDefault(),M.stopPropagation(),console.warn("Drags initiated from the React Aria useDrag hook may only be dropped on a target created with useDrop. This ensures that a keyboard and screen reader accessible alternative is available.")},{once:!0}),i.x=b.clientX,i.y=b.clientY;let I=be(b);requestAnimationFrame(()=>{u(I)})},g=b=>{b.stopPropagation(),!(b.clientX===i.x&&b.clientY===i.y)&&(typeof e.onDragMove=="function"&&e.onDragMove({type:"dragmove",x:b.clientX,y:b.clientY}),i.x=b.clientX,i.y=b.clientY)},p=b=>{if(b.stopPropagation(),typeof e.onDragEnd=="function"){let S={type:"dragend",x:b.clientX,y:b.clientY,dropOperation:Ga[b.dataTransfer.dropEffect]};za&&(S.dropOperation=Ga[za]),e.onDragEnd(S)}u(null),c(),Ka(nt.none),Vn(void 0)};l.useEffect(()=>()=>{if(n.current&&(!n.current.isConnected||parseInt(l.version,10)<17)){if(typeof i.options.onDragEnd=="function"){let b={type:"dragend",x:0,y:0,dropOperation:Ga[za||"none"]};i.options.onDragEnd(b)}u(null),Ka(nt.none),Vn(void 0)}},[i]);let $=b=>{b.pointerType!=="keyboard"&&b.pointerType!=="virtual"||y(b.target)},y=b=>{if(typeof i.options.onDragStart=="function"){let S=b.getBoundingClientRect();i.options.onDragStart({type:"dragstart",x:S.x+S.width/2,y:S.y+S.height/2})}em({element:b,items:i.options.getItems(),allowedDropOperations:typeof i.options.getAllowedDropOperations=="function"?i.options.getAllowedDropOperations():["move","copy","link"],onDragEnd(S){u(null),typeof i.options.onDragEnd=="function"&&i.options.onDragEnd(S)}},r),u(b)},h=lo(),_=o?pi[h].end:pi[h].start,D=At(r.format(_)),x={};return t||(x={...D,onPointerDown(b){if(m.current=Sc(b.nativeEvent)?"virtual":b.pointerType,b.width<1&&b.height<1&&Hr()&&ji())m.current="virtual";else{let S=b.currentTarget.getBoundingClientRect(),R=b.clientX-S.x,k=b.clientY-S.y,I=S.width/2,P=S.height/2;Math.abs(R-I)<=.5&&Math.abs(k-P)<=.5?m.current="virtual":m.current=b.pointerType}},onKeyDownCapture(b){be(b)===b.currentTarget&&b.key==="Enter"&&(b.preventDefault(),b.stopPropagation())},onKeyUpCapture(b){be(b)===b.currentTarget&&b.key==="Enter"&&(b.preventDefault(),b.stopPropagation(),y(be(b)))},onClick(b){(Pc(b.nativeEvent)||m.current==="virtual")&&(b.preventDefault(),b.stopPropagation(),y(be(b)))}}),a?{dragProps:{draggable:"false"},dragButtonProps:{},isDragging:!1}:{dragProps:{...x,draggable:"true",onDragStart:f,onDrag:g,onDragEnd:p},dragButtonProps:{...D,onPress:$},isDragging:o}}function P0(e){return e&&e.__esModule?e.default:e}const S0={keyboard:{selected:"dragSelectedKeyboard",notSelected:"dragDescriptionKeyboard"},touch:{selected:"dragSelectedLongPress",notSelected:"dragDescriptionLongPress"},virtual:{selected:"dragDescriptionVirtual",notSelected:"dragDescriptionVirtual"}};function B0(e,t){var g,p;let a=Re(P0(qr),"@react-aria/dnd"),r=t.isDisabled||t.selectionManager.isDisabled(e.key),{dragProps:i,dragButtonProps:n}=_0({getItems(){return t.getItems(e.key)},preview:t.preview,getAllowedDropOperations:t.getAllowedDropOperations,hasDragButton:e.hasDragButton,onDragStart($){t.startDrag(e.key,$),rm(t.draggingKeys)},onDragMove($){t.moveDrag($)},onDragEnd($){let{dropOperation:y}=$,h=y==="cancel"?!1:_e();t.endDrag({...$,keys:t.draggingKeys,isInternal:h}),oo()}}),o=t.collection.getItem(e.key),s=t.getKeysForDrag(e.key).size,u=s>1&&t.selectionManager.isSelected(e.key),d,c,m=lo();if(!e.hasDragButton&&t.selectionManager.selectionMode!=="none"){let $=S0[m][u?"selected":"notSelected"];e.hasAction&&m==="keyboard"&&($+="Alt"),u?c=a.format($,{count:s}):c=a.format($),delete i.onClick}else if(u)d=a.format("dragSelectedItems",{count:s});else{let $=((p=(g=t.collection).getTextValue)==null?void 0:p.call(g,e.key))??(o==null?void 0:o.textValue)??"";d=a.format("dragItem",{itemText:$})}let f=At(c);if(c&&Object.assign(i,f),!e.hasDragButton&&e.hasAction){let{onKeyDownCapture:$,onKeyUpCapture:y}=i;m==="touch"&&delete i["aria-describedby"],i.onKeyDownCapture=h=>{h.altKey&&($==null||$(h))},i.onKeyUpCapture=h=>{h.altKey&&(y==null||y(h))}}return{dragProps:r?{}:i,dragButtonProps:{...n,isDisabled:r,"aria-label":d}}}function k0(e,t,a){let{draggingCollectionRef:r}=$e;t.draggingKeys.size>0&&(r==null?void 0:r.current)!==a.current&&nm(a)}const R0=E.forwardRef(function(t,a){let r=t.children,[i,n]=l.useState(null),o=l.useRef(null),s=l.useRef(void 0);return l.useImperativeHandle(a,()=>(u,d)=>{let c=r(u),m,f,g;c&&typeof c=="object"&&"element"in c?(m=c.element,f=c.x,g=c.y):m=c,Ad.flushSync(()=>{n(m)}),d(o.current,f,g),s.current=requestAnimationFrame(()=>{n(null)})},[r]),l.useEffect(()=>()=>{s.current&&cancelAnimationFrame(s.current)},[]),i?E.createElement("div",{style:{zIndex:-100,position:"fixed",top:0,left:-1e5},ref:o},i):null});function I0(e){let{getItems:t,isDisabled:a,collection:r,selectionManager:i,onDragStart:n,onDragMove:o,onDragEnd:s,preview:u,getAllowedDropOperations:d}=e,[,c]=l.useState(!1),m=l.useRef(new Set),f=l.useRef(null),g=p=>{let $=new Set;if(i.isSelected(p))for(let y of i.selectedKeys){let h=r.getItem(y);if(h){let _=!1,D=h.parentKey;for(;D!=null;){if(i.selectedKeys.has(D)){_=!0;break}let x=r.getItem(D);D=x?x.parentKey:null}_||$.add(y)}}else $.add(p);return $};return{collection:r,selectionManager:i,get draggedKey(){return f.current},get draggingKeys(){return m.current},isDragging(p){return m.current.has(p)},getKeysForDrag:g,getItems(p){var h;let $=g(p),y=[];for(let _ of $){let D=(h=r.getItem(_))==null?void 0:h.value;D!=null&&y.push(D)}return t(g(p),y)},isDisabled:a,preview:u,getAllowedDropOperations:d,startDrag(p,$){let y=g(p);m.current=y,f.current=p,i.setFocused(!1),c(!0),typeof n=="function"&&n({...$,keys:y})},moveDrag(p){typeof o=="function"&&o({...p,keys:m.current})},endDrag(p){let{isInternal:$}=p;typeof s=="function"&&s({...p,keys:m.current,isInternal:$}),m.current=new Set,f.current=null,c(!1)}}}function F0(e){let{acceptedDragTypes:t="all",isDisabled:a,onInsert:r,onRootDrop:i,onItemDrop:n,onReorder:o,onMove:s,shouldAcceptItemDrop:u,collection:d,selectionManager:c,onDropEnter:m,getDropOperation:f,onDrop:g}=e,[p,$]=l.useState(null),y=l.useRef(null),h=D=>{if(D.dropPosition==="before"){let x=d.getItem(D.key);return x&&x.prevKey!=null?{type:"item",key:x.prevKey,dropPosition:"after"}:null}else if(D.dropPosition==="after"){let x=d.getItem(D.key);return x&&x.nextKey!=null?{type:"item",key:x.nextKey,dropPosition:"before"}:null}return null},_=l.useCallback(D=>{let{target:x,types:b,allowedOperations:S,isInternal:R,draggingKeys:k}=D;if(a||!x)return"cancel";if(t==="all"||t.some(I=>b.has(I))){let I=r&&x.type==="item"&&!R&&(x.dropPosition==="before"||x.dropPosition==="after"),P=o&&x.type==="item"&&R&&(x.dropPosition==="before"||x.dropPosition==="after")&&A0(d,x,k),w=x.type!=="item"||x.dropPosition!=="on"||!u||u(x,b),F=s&&x.type==="item"&&R&&w,M=i&&x.type==="root"&&!R,O=n&&x.type==="item"&&x.dropPosition==="on"&&!(R&&x.key!=null&&k.has(x.key))&&w;if(g||I||P||F||M||O)return f?f(x,b,S):S[0]}return"cancel"},[a,d,t,f,r,i,n,u,o,s,g]);return{collection:d,selectionManager:c,isDisabled:a,target:p,setTarget(D){if(this.isDropTarget(D))return;let x=y.current;x&&typeof e.onDropExit=="function"&&e.onDropExit({type:"dropexit",x:0,y:0,target:x}),D&&typeof m=="function"&&m({type:"dropenter",x:0,y:0,target:D}),y.current=D??null,$(D??null)},isDropTarget(D){let x=y.current;return!x||!D?!1:or(D,x)?!0:(D==null?void 0:D.type)==="item"&&(x==null?void 0:x.type)==="item"&&D.key!==x.key&&D.dropPosition!==x.dropPosition&&D.dropPosition!=="on"&&x.dropPosition!=="on"?or(h(D),x)||or(D,h(x)):!1},getDropOperation(D){let{target:x,isInternal:b,draggingKeys:S}=D;if(b&&x.type==="item"&&S.size>0){if(S.has(x.key)&&x.dropPosition==="on")return"cancel";let R=x.key;for(;R!=null;){let k=d.getItem(R),I=k==null?void 0:k.parentKey;if(I!=null&&S.has(I))return"cancel";R=I??null}}return _(D)}}}function or(e,t){if(!e)return!t;switch(e.type){case"root":return(t==null?void 0:t.type)==="root";case"item":return(t==null?void 0:t.type)==="item"&&(t==null?void 0:t.key)===e.key&&(t==null?void 0:t.dropPosition)===e.dropPosition}}function A0(e,t,a){let r=e.getItem(t.key);for(let i of a){let n=e.getItem(i);if((n==null?void 0:n.parentKey)!==(r==null?void 0:r.parentKey))return!1}return!0}class T0{constructor(t,a,r){this.collection=t,this.ref=a,this.layout=(r==null?void 0:r.layout)||"stack",this.orientation=(r==null?void 0:r.orientation)||"vertical",this.direction=(r==null?void 0:r.direction)||"ltr"}getPrimaryStart(t){return this.orientation==="horizontal"?t.left:t.top}getPrimaryEnd(t){return this.orientation==="horizontal"?t.right:t.bottom}getSecondaryStart(t){return this.orientation==="horizontal"?t.top:t.left}getSecondaryEnd(t){return this.orientation==="horizontal"?t.bottom:t.right}getFlowStart(t){return this.layout==="stack"?this.getPrimaryStart(t):this.getSecondaryStart(t)}getFlowEnd(t){return this.layout==="stack"?this.getPrimaryEnd(t):this.getSecondaryEnd(t)}getFlowSize(t){return this.getFlowEnd(t)-this.getFlowStart(t)}getDropTargetFromPoint(t,a,r){var D;if(this.collection[Symbol.iterator]().next().done||!this.ref.current)return{type:"root"};let i=this.ref.current.getBoundingClientRect(),n=this.orientation==="horizontal"?t:a,o=this.orientation==="horizontal"?a:t;n+=this.getPrimaryStart(i),o+=this.getSecondaryStart(i);let s=this.layout==="stack"?n:o,u=this.orientation==="horizontal"&&this.direction==="rtl",d=this.layout==="grid"&&this.orientation==="vertical"&&this.direction==="rtl",c=this.layout==="stack"?u:d,m=(D=this.ref.current)==null?void 0:D.dataset.collection,f=this.ref.current.querySelectorAll(m?`[data-collection="${CSS.escape(m)}"]`:"[data-key]"),g=new Map;for(let x of f)x instanceof HTMLElement&&x.dataset.key!=null&&g.set(x.dataset.key,x);let p=[...this.collection].filter(x=>x.type==="item");if(p.length<1)return{type:"root"};let $=0,y=p.length;for(;$<y;){let x=Math.floor(($+y)/2),b=p[x],S=g.get(String(b.key));if(!S)break;let R=S.getBoundingClientRect(),k=I=>{I?$=x+1:y=x};if(n<this.getPrimaryStart(R))k(u);else if(n>this.getPrimaryEnd(R))k(!u);else if(o<this.getSecondaryStart(R))k(d);else if(o>this.getSecondaryEnd(R))k(!d);else{let I={type:"item",key:b.key,dropPosition:"on"};if(r(I))s<=this.getFlowStart(R)+5&&r({...I,dropPosition:"before"})?I.dropPosition=c?"after":"before":s>=this.getFlowEnd(R)-5&&r({...I,dropPosition:"after"})&&(I.dropPosition=c?"before":"after");else{let P=this.getFlowStart(R)+this.getFlowSize(R)/2;s<=P&&r({...I,dropPosition:"before"})?I.dropPosition=c?"after":"before":s>=P&&r({...I,dropPosition:"after"})&&(I.dropPosition=c?"before":"after")}return I}}let h=p[Math.min($,p.length-1)],_=g.get(String(h.key));return i=_==null?void 0:_.getBoundingClientRect(),i&&(n<this.getPrimaryStart(i)||Math.abs(s-this.getFlowStart(i))<Math.abs(s-this.getFlowEnd(i)))?{type:"item",key:h.key,dropPosition:c?"after":"before"}:{type:"item",key:h.key,dropPosition:c?"before":"after"}}}function M0(e){return{dragAndDropHooks:l.useMemo(()=>{let{onDrop:a,onInsert:r,onItemDrop:i,onReorder:n,onMove:o,onRootDrop:s,getItems:u,renderDragPreview:d,renderDropIndicator:c,dropTargetDelegate:m}=e,f=!!u,g=!!(a||r||i||n||o||s),p={};return f&&(p.useDraggableCollectionState=function(y){return I0({...y,...e})},p.useDraggableCollection=k0,p.useDraggableItem=B0,p.DragPreview=R0,p.renderDragPreview=d,p.isVirtualDragging=im),g&&(p.useDroppableCollectionState=function(y){return F0({...y,...e})},p.useDroppableItem=Mu,p.useDroppableCollection=function(y,h,_){return v0({...y,...e},h,_)},p.useDropIndicator=C0,p.renderDropIndicator=c,p.dropTargetDelegate=m,p.ListDropTargetDelegate=T0),p},[e])}}function O0(e,t,a){const r=_m(e,a);switch(t){case"CalendarDate":return pe(r);case"CalendarDateTime":return ke(r);case"ZonedDateTime":default:return r;case"Time":return br(r)}}const gi=e=>`${e.toString().slice(0,5)}:00`,Ou=l.createContext(void 0);Ou.displayName="UICTimeZoneContext";const V0=()=>{var e;return(e=l.useContext(Ou))!==null&&e!==void 0?e:Ot()},N0=["actionable","isActive","transparent","className","children","width","height","motif","size","style"],U0=Rc.bind(Ic);function Vu(e){const t=E.isValidElement(e)?e:E.createElement(e);return a=>function(r){const{actionable:i=!1,isActive:n,transparent:o=!1,className:s="",children:u=null,width:d,height:c,motif:m,size:f="medium",style:g={}}=r,p=Fc(r,N0),{motif:$}=E.useContext(Bc),y=m||$||"light",{setHeight:h,setWidth:_}=kc(d,c,f);return E.cloneElement(u,La({className:U0(s,"icon",`icon-${y}`,{actionable:i,active:n,transparent:o}),width:d&&_,height:h,style:g},p))}(La(La({},a),{},{children:t}))}const H0=Vu(e=>l.createElement("svg",yt({viewBox:"0 0 734 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),l.createElement("path",{d:"M184.89 11.65c0 6.28 5.21 11.49 11.65 11.49 6.279 0 11.489-5.05 11.489-11.49S202.979 0 196.54 0c-6.44 0-11.65 5.37-11.65 11.65Zm104.43 0c0 6.28 5.21 11.49 11.651 11.49 6.279 0 11.489-5.05 11.489-11.49S307.41 0 300.971 0c-6.441 0-11.651 5.37-11.651 11.65Zm-82.849 19.58H186.44v64.02h20.031V31.23ZM279.95 2.84h-56.72v92.41h20.031V60.34h30.87V42.87h-30.87V20.31h36.689V2.84Zm30.96 28.39h-20.03v64.02h20.03V31.23ZM69.85 42.87V31.21h11.63V19.57h11.64v11.64H81.49v11.64h11.64v3.69c0 4.26-.36 9.31-1.2 13.28-.46 2.22-1.17 4.42-2 6.54a48.295 48.295 0 0 1-1.694 3.839l-.258.516a64.55 64.55 0 0 1-.275.525l-.166.31-.21.386c-.099.176-.197.351-.297.524-1.39 2.43-3 4.76-4.87 6.95l-.224.262-.014.017a39.629 39.629 0 0 1-1.403 1.581c-.569.61-1.159 1.19-1.76 1.76C71.31 90.2 61.61 94.68 51.46 95.71c-1.22.12-3.67.25-4.9.25-.623 0-1.561-.033-2.493-.082a58.619 58.619 0 0 1-2.407-.168c-10.15-1.03-19.85-5.51-27.3-12.68l-.226-.223-.009-.01c-.512-.5-1.021-.998-1.515-1.527-.58-.61-1.1-1.23-1.64-1.86a46.12 46.12 0 0 1-4.87-6.95 41.78 41.78 0 0 1-.955-1.777 47.257 47.257 0 0 1-1.335-2.865 54.061 54.061 0 0 1-.247-.583l-.12-.295-.11-.27-.123-.31c-.84-2.12-1.54-4.32-2.01-6.54C.36 55.86 0 50.8 0 46.54V2.84h23.27v40.03l.002.737c0 .426.002.985.006 1.538.006.71.016 1.408.032 1.795.05 1.38.1 2.73.24 4.07.39 3.6 1.18 7 2.82 9.89.48.84.96 1.64 1.53 2.41 3.5 4.67 8.82 8.17 15.47 9.15.79.11 2.39.21 3.19.21.8 0 2.4-.09 3.19-.21 6.64-.98 11.97-4.48 15.47-9.15.35-.466.665-.946.963-1.436.194-.32.381-.646.567-.974 1.64-2.89 2.44-6.29 2.82-9.89.14-1.34.19-2.69.24-4.07.018-.467.028-1.386.034-2.233l.005-1.239v-.598Z",fill:"currentColor"}),l.createElement("path",{d:"M81.48 19.57h-8.73v-8.73h8.73v8.73Zm2.91-17.46h5.82v5.82h-5.82V2.11Zm85.299 93.14H149.8V57.61s0-1.32-.02-1.75v-.027c-.02-.58-.041-1.152-.1-1.723-.16-1.54-.5-3.01-1.21-4.25l-.038-.067-.015-.026a9.574 9.574 0 0 0-.607-.947c-1.51-2.01-3.79-3.51-6.65-3.93a5.912 5.912 0 0 0-.495-.059l-.222-.016a11 11 0 0 0-.653-.025c-.2.006-.52.022-.82.044-.21.016-.41.035-.55.056-2.86.42-5.15 1.92-6.65 3.93a7.386 7.386 0 0 0-.318.463c-.12.189-.232.38-.342.577-.7 1.24-1.05 2.71-1.211 4.25a20.7 20.7 0 0 0-.109 1.75c-.01.43-.01 1.75-.01 1.75v37.57h-19.9V31.16h19.17v5.82s6.82-8.5 20.44-7.9c12.239.54 20.199 9.94 20.199 22.7v43.47Z",fill:"currentColor"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M386.16 3.28h10.601l36.719 91.54h-12.02l-10.73-27.41H372.2l-10.729 27.41H349.44l36.72-91.54Zm5.295 14.622L376.2 56.81h30.51l-15.255-38.908Z",fill:"currentColor"}),l.createElement("path",{d:"M488.216 77.801a2.918 2.918 0 0 1-.176.199c-4.14 5.05-10.09 8.15-16.81 8.28-14.35 0-21.459-10.09-21.459-24.05s7.109-24.05 21.459-24.05c6.73.14 12.67 3.24 16.81 8.28.39.39 1.94 2.59 2.07 2.72l6.08-6.34c-5.56-9.31-15.129-14.22-25.86-14.22-19.53 0-31.42 15.12-31.42 33.61 0 18.49 11.901 33.61 31.42 33.61 10.731 0 20.3-4.91 25.86-14.22l-6.08-6.33a7.51 7.51 0 0 0-.354.46l-.834 1.132c-.113.153-.226.302-.331.44-.142.186-.271.352-.375.479ZM552.16 78c.39-.39 1.941-2.59 2.07-2.71l6.081 6.33c-5.561 9.31-15.13 14.22-25.861 14.22-19.519 0-31.42-15.12-31.42-33.61 0-18.49 11.89-33.61 31.42-33.61 10.731 0 20.3 4.91 25.861 14.22l-6.081 6.34c-.129-.13-1.68-2.33-2.07-2.72-4.139-5.04-10.08-8.14-16.809-8.28-14.351 0-21.46 10.09-21.46 24.05s7.109 24.05 21.46 24.05c6.719-.13 12.67-3.23 16.809-8.28Z",fill:"currentColor"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M624.7 65.85c0-23.14-10.349-36.97-28.319-37.23h-1.171c-11.89.13-21.46 7.24-25.98 19.39-5.69 14.74-2.32 31.81 7.76 40.86 5.04 4.4 11.901 6.98 18.88 6.98 15.12 0 25.34-10.99 27.021-14.61l-5.821-6.34c-5.17 6.85-12.67 10.99-21.2 10.99-11.25 0-17.84-9.44-17.84-20.04h46.67Zm-11.38-9.04h-35.04c.651-10.6 8.031-18.23 17.59-18.23 9.561 0 17.191 8.02 17.45 18.23Z",fill:"currentColor"}),l.createElement("path",{d:"M678.48 74.51c.26 5.56-2.2 11.51-6.459 15.25-4.661 4.01-10.861 6.08-18.491 6.08-9.56 0-19.009-6.08-22.37-10.08l6.21-6.6c5.43 4.26 9.7 6.85 16.68 6.85 4.65 0 10.6-1.16 13.19-6.85.781-1.55.781-3.88.13-5.43-1.809-4.52-9.82-6.59-14.09-7.63-3.62-.9-8.92-2.45-13.06-5.43-6.199-4.4-8.14-13.19-4.52-20.95 3.88-8.15 13.31-11.12 20.81-11.12 8.15 0 15.78 3.36 20.69 8.79l-6.2 6.59c-4.91-3.62-8.41-5.68-14.74-5.68-4.27 0-10.09 1.81-11.38 6.46-.52 2.07-.13 4.4 1.04 5.95 1.94 2.84 6.46 4.65 9.7 5.56 4.91 1.29 9.561 2.72 13.57 4.52 4.27 2.07 9.18 6.47 9.31 13.71l-.02.01Zm48.48 15.25c4.26-3.74 6.72-9.69 6.46-15.25l.019-.01c-.129-7.24-5.04-11.64-9.309-13.71-4.01-1.8-8.66-3.23-13.57-4.52-3.241-.91-7.76-2.72-9.701-5.56-1.17-1.55-1.559-3.88-1.04-5.95 1.29-4.65 7.111-6.46 11.38-6.46 6.33 0 9.83 2.06 14.74 5.68l6.201-6.59c-4.911-5.43-12.54-8.79-20.691-8.79-7.5 0-16.929 2.97-20.809 11.12-3.62 7.76-1.68 16.55 4.519 20.95 4.141 2.98 9.441 4.53 13.061 5.43 4.269 1.04 12.28 3.11 14.09 7.63.65 1.55.65 3.88-.13 5.43-2.59 5.69-8.54 6.85-13.191 6.85-6.979 0-11.25-2.59-16.679-6.85l-6.21 6.6c3.36 4 12.809 10.08 22.37 10.08 7.63 0 13.83-2.07 18.49-6.08Z",fill:"currentColor"}))),L0=va(e=>l.createElement("svg",yt({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),e.baseclassname!==void 0&&l.createElement("path",{d:"M12 15a.498.498 0 0 1-.366-.16L7.785 10.7a1.001 1.001 0 0 1 0-1.4l3.848-4.14a.5.5 0 0 1 .733.68L8.5 10l.013.013 3.853 4.147A.5.5 0 0 1 12 15Z",fill:"currentColor",className:e.baseclassname}),e.fillclassname!==void 0&&l.createElement("path",{d:"M12 15.25a.75.75 0 0 1-.55-.239l-3.846-4.139a1.25 1.25 0 0 1 0-1.744L11.45 4.99a.75.75 0 0 1 1.099 1.021L8.84 10l3.708 3.989a.75.75 0 0 1-.55 1.261Z",fill:"currentColor",className:e.fillclassname}))),j0=va(e=>l.createElement("svg",yt({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),e.twotonedclassname!==void 0&&l.createElement("rect",{x:3,y:3,width:14,height:14,rx:1,fill:"currentColor",className:e.twotonedclassname}),e.baseclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 7V4H4v12h12v-5.5a.5.5 0 0 1 1 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6.5a.5.5 0 0 1 0-1H16Zm-9.25 4a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",fill:"currentColor",className:e.baseclassname}),e.fillclassname!==void 0&&l.createElement("path",{d:"M16 7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6.5a.5.5 0 0 1 0-1H16Zm-9.25 7a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm6.5-4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM10 9.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-3.25-3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",fill:"currentColor",className:e.fillclassname}))),G0=va(e=>l.createElement("svg",yt({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),e.twotonedclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.001H4v11h4v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8.415a1 1 0 0 0-.292-.707l-2.415-2.414A1 1 0 0 0 13.586 5h-1.585V4Z",fill:"currentColor",className:e.twotonedclassname}),e.baseclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4.001h8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-1H4v-10Zm9.586 2H9v10h7V8.415l-2.414-2.414ZM9 5.001h4.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707v7.586a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Zm3.31 4.44a2 2 0 0 1 1.142.272l.044-.044a.5.5 0 1 1 .707.707L12.79 11.79a.5.5 0 0 1-.707 0 .2.2 0 0 0-.283 0l-.424.424a.2.2 0 0 0 0 .283 1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0-2.122-2.121l-.479.478Zm.251 3.992a2 2 0 0 1-1.141-.273l-.045.044a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0 .2.2 0 0 0 .283 0l.424-.424a.2.2 0 0 0 0-.283 1.5 1.5 0 0 0-2.12 0L9.96 11.79a1.5 1.5 0 1 0 2.121 2.121l.479-.478Z",fill:"currentColor",className:e.baseclassname}),e.fillclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14.001v-9a1 1 0 0 1 1-1h4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v-1Zm6.586-9H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8.415a1 1 0 0 0-.293-.707l-2.414-2.414A1 1 0 0 0 13.586 5Zm-.134 4.712a2 2 0 0 0-1.142-.273l.48-.478a1.5 1.5 0 1 1 2.12 2.121l-1.414 1.414a1.5 1.5 0 0 1-2.12 0 .2.2 0 0 1 0-.283l.423-.424a.2.2 0 0 1 .283 0 .5.5 0 0 0 .707 0l1.415-1.414a.5.5 0 1 0-.708-.707l-.044.044ZM11.42 13.16a2 2 0 0 0 1.141.273l-.479.478a1.5 1.5 0 1 1-2.121-2.12l1.414-1.415a1.5 1.5 0 0 1 2.121 0 .2.2 0 0 1 0 .283l-.424.424a.2.2 0 0 1-.283 0 .5.5 0 0 0-.707 0l-1.414 1.414a.5.5 0 1 0 .707.707l.045-.044Z",fill:"currentColor",className:e.fillclassname}))),K0=Vu(e=>l.createElement("svg",yt({viewBox:"0 0 292 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),l.createElement("path",{d:"M90.216 2h-5.822v5.821h5.822V2Zm61.97 66.44-.001-.001.013-.013-.012.014Z",fill:"currentColor"}),l.createElement("path",{d:"m141.741 80.668 10.445-12.228c5.611 5.1 14.148 10.583 22.947 10.583 8.161 0 12.746-5.483 12.746-11.222 0-4.59-2.423-6.63-6.249-8.416-.717-.359-1.515-.677-2.325-1a43.466 43.466 0 0 1-1.883-.785c-18.229-7.27-30.727-13.008-30.727-29.197.007-11.47 9.443-26.384 31.243-26.384 11.344 0 21.8 6.759 29.069 15.041l-11.598 11.726c-4.718-5.356-11.471-10.202-18.867-10.202-6.504 0-9.685 4.591-9.685 9.31 0 6.886 5.738 9.047 11.222 11.087 18.229 6.631 30.344 12.491 30.344 28.304 0 11.98-10.202 28.559-33.15 28.559-12.873 0-24.605-6.377-33.532-15.176ZM129.932 2.727h-20.034v92.415h20.034V2.727Z",fill:"currentColor"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M243.81 63.797v31.345h-20.034V2.727h31.173c19.524 0 36.829 7.862 36.829 30.401 0 22.54-16.119 30.67-36.829 30.67H243.81Zm0-45.085v28.96h11.139c9.832 0 15.596-4.457 15.596-14.282 0-9.826-6.025-14.678-15.596-14.678H243.81Z",fill:"currentColor"}),l.createElement("path",{d:"M69.85 31.1v11.663s0 3.067-.038 4.074l-.008.208c-.048 1.306-.095 2.589-.234 3.866-.383 3.596-1.18 7.001-2.819 9.89-.471.835-.95 1.638-1.53 2.41-3.5 4.667-8.83 8.174-15.475 9.15-.79.114-2.384.216-3.188.216-.797 0-2.397-.102-3.188-.216-6.644-.976-11.974-4.483-15.474-9.15-.574-.765-1.059-1.575-1.53-2.41-1.64-2.882-2.436-6.294-2.819-9.89-.14-1.345-.191-2.69-.242-4.074-.039-1.007-.039-4.074-.039-4.074V2.727H0v43.702c0 4.26.363 9.315 1.199 13.288.465 2.219 1.173 4.425 2.002 6.542a46.06 46.06 0 0 0 2.895 6.095 45.292 45.292 0 0 0 4.87 6.944l.147.172c.485.572.965 1.14 1.493 1.69a50.682 50.682 0 0 0 1.753 1.753l.006.006c7.448 7.174 17.152 11.65 27.303 12.683a70.2 70.2 0 0 0 4.897.254c1.224 0 3.679-.127 4.897-.254 10.144-1.033 19.855-5.51 27.302-12.683.6-.573 1.193-1.147 1.76-1.76.506-.522.96-1.059 1.419-1.602l.22-.26a45.605 45.605 0 0 0 4.87-6.943 46.832 46.832 0 0 0 2.896-6.095c.829-2.117 1.536-4.323 2.002-6.542.835-3.973 1.198-9.023 1.198-13.288v-3.686H81.493V31.101H69.85Zm2.901-20.371h8.729v8.729h-8.73v-8.729Z",fill:"currentColor"}),l.createElement("path",{d:"M81.486 31.1h11.637V19.464H81.486V31.1Z",fill:"currentColor"}))),z0=va(e=>l.createElement("svg",yt({viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),e.twotonedclassname!==void 0&&l.createElement("path",{d:"M16 3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z",fill:"currentColor",className:e.twotonedclassname}),e.baseclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m9.633 6.113-2.12 2.121a.5.5 0 1 0 .706.708l1.267-1.268V16.5a.5.5 0 0 0 1 0V7.673l1.268 1.269a.5.5 0 0 0 .707-.708l-2.12-2.121a.502.502 0 0 0-.708 0ZM3 14a1 1 0 0 0 1 1h3v-1H4V4h12v10h-3v1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10Z",fill:"currentColor",className:e.baseclassname}),e.fillclassname!==void 0&&l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.962 17.004a.75.75 0 0 1-.75-.75V8.57l-.479.479a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.061L9.44 6.22A.737.737 0 0 1 9.97 6l.072.003a.737.737 0 0 1 .47.217l1.768 1.768a.752.752 0 0 1 .001 1.06.751.751 0 0 1-1.062 0l-.507-.506v7.71a.75.75 0 0 1-.75.75ZM3 14a1 1 0 0 0 1 1h3v-1.5H4.5v-9h11v9H13V15h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10Z",fill:"currentColor",className:e.fillclassname}))),X0={monday:"mon",sunday:"sun"};var Ne={root:"root__XxPwDie7",header:"header__XxPwDie7",headerButton:"headerButton__XxPwDie7","headerButton-light":"headerButton-light__XxPwDie7","headerButton-dark":"headerButton-dark__XxPwDie7",heading:"heading__XxPwDie7","heading-light":"heading-light__XxPwDie7","heading-dark":"heading-dark__XxPwDie7","two-month-heading":"two-month-heading__XxPwDie7","two-month-heading-light":"two-month-heading-light__XxPwDie7","two-month-heading-dark":"two-month-heading-dark__XxPwDie7","heading-part":"heading-part__XxPwDie7",grid:"grid__XxPwDie7",gridHeader:"gridHeader__XxPwDie7",headerCell:"headerCell__XxPwDie7","headerCell-light":"headerCell-light__XxPwDie7","headerCell-dark":"headerCell-dark__XxPwDie7",body:"body__XxPwDie7",cell:"cell__XxPwDie7","cell-light":"cell-light__XxPwDie7","cell-dark":"cell-dark__XxPwDie7","cell-today":"cell-today__XxPwDie7","root-range":"root-range__XxPwDie7","invalid-selection":"invalid-selection__XxPwDie7",container:"container__XxPwDie7",calendars:"calendars__XxPwDie7",presets:"presets__XxPwDie7","presets-light":"presets-light__XxPwDie7","presets-dark":"presets-dark__XxPwDie7",preset:"preset__XxPwDie7","preset-light":"preset-light__XxPwDie7",disabled:"disabled__XxPwDie7",selected:"selected__XxPwDie7","preset-dark":"preset-dark__XxPwDie7","selected-light":"selected-light__XxPwDie7","selected-dark":"selected-dark__XxPwDie7"};Ge('.root__XxPwDie7{border-collapse:collapse;border-radius:4px;display:flex;flex-direction:column;gap:8px;padding:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:min-content}.header__XxPwDie7{display:flex;justify-content:space-between}.headerButton__XxPwDie7{background:none;border:none;border-radius:4px;cursor:pointer;outline:none;padding:0}.headerButton-light__XxPwDie7{color:#808893}.headerButton-light__XxPwDie7[data-hovered]{color:#9fa5ad}.headerButton-light__XxPwDie7[data-pressed]{color:#676f79}.headerButton-light__XxPwDie7[data-disabled]{color:#c2c6cb}.headerButton-light__XxPwDie7[data-focus-visible]{outline:1px solid #66a8ff}.headerButton-dark__XxPwDie7{color:#b7bcc2}.headerButton-dark__XxPwDie7[data-hovered]{color:#cbced2}.headerButton-dark__XxPwDie7[data-pressed]{color:#99a0a8}.headerButton-dark__XxPwDie7[data-disabled]{color:#737c87}.headerButton-dark__XxPwDie7[data-focus-visible]{outline:1px solid #0e65d8}.headerButton__XxPwDie7[data-disabled]{cursor:default}.heading__XxPwDie7{font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-semibold,600);line-height:20px}.heading-light__XxPwDie7{color:#50565e}.heading-dark__XxPwDie7{color:#dee0e3}.two-month-heading__XxPwDie7{display:flex;font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-semibold,600);justify-content:space-between;line-height:20px;width:100%}.two-month-heading-light__XxPwDie7{color:#50565e}.two-month-heading-dark__XxPwDie7{color:#dee0e3}.two-month-heading__XxPwDie7 .heading-part__XxPwDie7{display:flex;justify-content:center;width:100%}.two-month-heading__XxPwDie7 .heading-part__XxPwDie7:first-child{margin-right:24px}.two-month-heading__XxPwDie7 .heading-part__XxPwDie7:last-child{margin-left:24px}.grid__XxPwDie7{width:224px}.grid__XxPwDie7 .gridHeader__XxPwDie7 .headerCell__XxPwDie7{font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-small,11px);font-weight:var(--desktop-font-weight-regular,400);line-height:16px;padding:0}.grid__XxPwDie7 .gridHeader__XxPwDie7 .headerCell-light__XxPwDie7{color:#808893}.grid__XxPwDie7 .gridHeader__XxPwDie7 .headerCell-dark__XxPwDie7{color:#b7bcc2}.body__XxPwDie7,.grid__XxPwDie7{border-collapse:collapse}.body__XxPwDie7:before{content:"@";display:block;line-height:8px;text-indent:-99999px}.cell__XxPwDie7{align-items:center;border-radius:99999px;cursor:pointer;display:flex;font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-regular,400);height:32px;justify-content:center;line-height:20px;margin:-1px;outline:none;width:32px}.cell-light__XxPwDie7{background-color:#0000;color:#50565e}.cell-light__XxPwDie7[data-hovered]{background-color:#f9fafa}.cell-light__XxPwDie7[data-pressed]{background-color:#e6f1ff;color:#212327}.cell-light__XxPwDie7[data-selected]{background-color:#006fff;color:#fff}.cell-light__XxPwDie7[data-disabled],.cell-light__XxPwDie7[data-unavailable]{background-color:#0000;color:#c2c6cb}.cell-light__XxPwDie7[data-focus-visible]{outline:1px solid #66a8ff}.cell-dark__XxPwDie7{background-color:#0000;color:#dee0e3}.cell-dark__XxPwDie7[data-hovered]{background-color:#1c1e21}.cell-dark__XxPwDie7[data-pressed]{background-color:#1c1e21;color:#f9fafa}.cell-dark__XxPwDie7[data-selected]{background-color:#4797ff;color:#fff}.cell-dark__XxPwDie7[data-disabled],.cell-dark__XxPwDie7[data-unavailable]{background-color:#0000;color:#737c87}.cell-dark__XxPwDie7[data-focus-visible]{outline:1px solid #0e65d8}.cell__XxPwDie7[data-invalid]{background-color:var(--color-red-06);color:var(--color-neutral-inverse,#fff)}.cell__XxPwDie7[data-invalid][data-hovered]{background-color:var(--color-red-07)}.cell__XxPwDie7[data-selected]{position:relative;z-index:1}.cell__XxPwDie7[data-outside-month]{display:none}.cell__XxPwDie7[data-disabled],.cell__XxPwDie7[data-unavailable]{cursor:default}.cell-today__XxPwDie7{font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-semibold,600);line-height:20px}.root-range__XxPwDie7{border-collapse:collapse;border-radius:4px;display:flex;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:min-content}.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selected]{background:#e6f1ff;color:#006fff}.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selected]:hover{background:#e6f1ff}.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selection-end],.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selection-start]{color:#fff}.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selection-end]:after,.root-range__XxPwDie7 .cell-light__XxPwDie7[data-selection-start]:after{background:#006fff}.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selected]{background:#05254d;color:#4797ff}.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selected]:hover{background:#05254d}.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selection-end],.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selection-start]{color:#fff}.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selection-end]:after,.root-range__XxPwDie7 .cell-dark__XxPwDie7[data-selection-start]:after{background:#4797ff}.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled],.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-unavailable]{background:var(--color-red-01);color:var(--color-red-06)}.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled][data-selection-end],.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled][data-selection-start],.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-unavailable][data-selection-end],.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-unavailable][data-selection-start]{color:var(--color-neutral-inverse,#fff)}.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled][data-selection-end]:after,.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled][data-selection-start]:after,.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-unavailable][data-selection-end]:after,.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-unavailable][data-selection-start]:after{background:var(--color-red-06)}.root-range__XxPwDie7 .cell__XxPwDie7[data-selected]{border-radius:0}.root-range__XxPwDie7 .cell__XxPwDie7[data-invalid][data-disabled]{border-radius:var(--radius-none,0)}.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-start]{border-end-end-radius:0;border-end-start-radius:99999px;border-start-end-radius:0;border-start-start-radius:99999px}.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-end]{border-end-end-radius:99999px;border-end-start-radius:0;border-start-end-radius:99999px;border-start-start-radius:0}.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-start][data-selection-end]{border-radius:99999px}.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-end],.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-start]{position:relative;z-index:2}.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-end]:after,.root-range__XxPwDie7 .cell__XxPwDie7[data-selection-start]:after{border-radius:100%;content:"";height:100%;position:absolute;width:100%;z-index:-1}.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid]{background:var(--color-red-01);color:var(--color-red-06)}.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid]:hover{background:var(--color-red-02)}.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid][data-selection-end],.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid][data-selection-start]{color:var(--color-neutral-inverse,#fff)}.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid][data-selection-end]:after,.root-range__XxPwDie7.invalid-selection__XxPwDie7 .cell__XxPwDie7[data-selected][data-invalid][data-selection-start]:after{background:var(--color-red-06)}.container__XxPwDie7{display:flex;flex-direction:column;gap:8px;padding:12px}.calendars__XxPwDie7{display:flex;gap:16px;justify-content:space-evenly}.presets__XxPwDie7{display:flex;flex-direction:column;gap:4px;padding:12px;width:max-content}.presets-light__XxPwDie7{border-left:1px solid #21232712}.presets-dark__XxPwDie7{border-left:1px solid #f9fafa12}.preset__XxPwDie7{background:none;border:none;border-radius:4px;cursor:pointer;font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-regular,400);line-height:20px;padding:4px 8px;text-align:start}.preset-light__XxPwDie7{color:#50565e}.preset-light__XxPwDie7[data-disabled]{color:#c2c6cb}.preset-light__XxPwDie7:hover:not(.disabled__XxPwDie7):not(.selected__XxPwDie7){background-color:#50565e0a}.preset-dark__XxPwDie7{color:#dee0e3}.preset-dark__XxPwDie7[data-disabled]{color:#737c87}.preset-dark__XxPwDie7:hover:not(.disabled__XxPwDie7):not(.selected__XxPwDie7){background-color:#dee0e30a}.preset__XxPwDie7[data-disabled]:hover{cursor:default}.preset__XxPwDie7[data-disabled]{background:none;cursor:default}.preset__XxPwDie7.selected-light__XxPwDie7{background-color:#e6f1ff;color:#006fff}.preset__XxPwDie7.selected-dark__XxPwDie7{background-color:#05254d;color:#4797ff}');const Z0=q(Ne),Nu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,startOfWeek:n,firstDayOfWeek:o,...s}=e,{motif:u}=Y(i);return l.createElement(v4,{ref:t,"data-uic-component":"Calendar.Root",firstDayOfWeek:o??(n?X0[n]:void 0),...s,className:d=>Z0.concat(se(r,d))("root",`root-${u}`)},a)});Nu.displayName="CalendarRoot";const q0=q(Ne),Br=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(zr,{ref:t,"data-uic-component":"Calendar.HeaderButton",...n,className:q0.concat(r)("headerButton",`headerButton-${o}`)},a)});Br.displayName="CalendarHeaderButton";const W0=q(Ne),Uu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement("header",{ref:t,"data-uic-component":"Calendar.Header",...n,className:W0.concat(r)("header",`header-${o}`)},a)});Uu.displayName="CalendarHeader";const Wt=q(Ne),Hu=l.forwardRef((e,t)=>{const a=l.useContext(Ba),[r,i]=at(e,t,Ii),{locale:n}=fe(),{children:o,className:s,style:u,motif:d,"data-testid":c}=e,{motif:m}=Y(d),{children:f,...g}=r,p={className:Wt.concat(s)("heading",`heading-${m}`),style:u,ref:i};if(typeof o=="function"&&a){const $=o(a.visibleRange.start);if($&&typeof $=="function")return l.cloneElement($,p)}if(a&&a.visibleRange.start.month!==a.visibleRange.end.month){const $=new Date(a.visibleRange.start.year,a.visibleRange.start.month-1),y=new Date(a.visibleRange.end.year,a.visibleRange.end.month-1);return l.createElement("span",{className:Wt.concat(s)("two-month-heading",`two-month-heading-${m}`),style:u,ref:i,"data-testid":c,"data-uic-component":"Calendar.Heading"},l.createElement("span",{className:Wt("heading-part")},a.visibleRange.start.year," ",$.toLocaleString(n,{month:"long"})),l.createElement("span",{className:Wt("heading-part")},a.visibleRange.end.year," ",y.toLocaleString(n,{month:"long"})))}return l.createElement("span",{"data-uic-component":"Calendar.Heading","data-testid":c,...p,...g},l.createElement(l.Fragment,null,f))});Hu.displayName="CalendarHeading";const Q0=q(Ne),Lu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(w4,{ref:t,"data-uic-component":"Calendar.Grid",...n,className:Q0.concat(r)("grid",`grid-${o}`)},a)});Lu.displayName="CalendarGrid";const Y0=q(Ne),ju=l.forwardRef((e,t)=>{const{className:a,motif:r,date:i,today:n,...o}=e,{motif:s}=Y(r),u=V0(),d=l.useMemo(()=>i.compare(n??_a(u))===0,[i,n,u]),c=Y0.concat(a)("cell",`cell-${s}`,d&&"cell-today");return l.createElement(P4,{date:i,ref:t,"data-uic-component":"Calendar.GridCell",...o,className:c})});ju.displayName="CalendarGridCell";const J0=q(Ne),Gu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(Ss,{ref:t,"data-uic-component":"Calendar.GridBody",...n,className:J0.concat(r)("body",`body-${o}`)},a)});Gu.displayName="CalendarGridBody";const e1=q(Ne),Ku=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(_s,{ref:t,"data-uic-component":"Calendar.GridHeader",...n,className:e1.concat(r)("gridHeader",`gridHeader-${o}`)},a)});Ku.displayName="CalendarGridHeader";const t1=q(Ne),zu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(Ps,{ref:t,"data-uic-component":"Calendar.GridHeaderCell",...n,className:t1.concat(r)("headerCell",`headerCell-${o}`)},a)});zu.displayName="CalendarGridHeaderCell";const Xu=l.forwardRef((e,t)=>{const{motif:a,isDisabled:r,isInvalid:i,today:n,...o}=e,{isDisabled:s,isInvalid:u}=Gi({isDisabled:r,isInvalid:i}),{motif:d}=Y(a);return l.createElement(Nu,{motif:d,ref:t,isDisabled:s,isInvalid:u,...o},l.createElement(Uu,null,l.createElement(Br,{slot:"previous",isDisabled:s},l.createElement(L0,{size:20})),l.createElement(Hu,null),l.createElement(Br,{slot:"next"},l.createElement(Ac,{size:20}))),l.createElement(Lu,null,l.createElement(Ku,null,c=>l.createElement(zu,null,c)),l.createElement(Gu,null,c=>l.createElement(ju,{date:c,today:n}))))});Xu.displayName="Calendar_Default";var Zu={root:"root__l9xPbOc4","root-light":"root-light__l9xPbOc4",container:"container__l9xPbOc4","root-dark":"root-dark__l9xPbOc4",full:"full__l9xPbOc4","container-light":"container-light__l9xPbOc4",field:"field__l9xPbOc4","container-dark":"container-dark__l9xPbOc4",auto:"auto__l9xPbOc4","field-light":"field-light__l9xPbOc4",segment:"segment__l9xPbOc4","field-dark":"field-dark__l9xPbOc4","segment-light":"segment-light__l9xPbOc4","segment-dark":"segment-dark__l9xPbOc4"};Ge(".root__l9xPbOc4{display:flex;flex-direction:column;gap:2px}.root-light__l9xPbOc4[data-visually-invalid=true] .container__l9xPbOc4{outline:1px solid #f0383b}.root-dark__l9xPbOc4[data-visually-invalid=true] .container__l9xPbOc4{outline:1px solid #ee6368}.root__l9xPbOc4.full__l9xPbOc4{width:100%}.container__l9xPbOc4{align-items:center;border-radius:4px;display:flex;gap:8px;height:32px;padding:0 8px}.container-light__l9xPbOc4{background:#2123270a;color:#212327}.container-light__l9xPbOc4 svg{color:#808893}.container-light__l9xPbOc4:has(.field__l9xPbOc4[data-hovered]){background:#21232712}.container-light__l9xPbOc4:has(.field__l9xPbOc4[data-disabled]){background:#21232705}.container-light__l9xPbOc4:has(.field__l9xPbOc4[data-focus-within]){outline:1px solid #66a8ff}.container-dark__l9xPbOc4{background:#f9fafa0a;color:#f9fafa}.container-dark__l9xPbOc4 svg{color:#b7bcc2}.container-dark__l9xPbOc4:has(.field__l9xPbOc4[data-hovered]){background:#f9fafa12}.container-dark__l9xPbOc4:has(.field__l9xPbOc4[data-disabled]){background:#f9fafa05}.container-dark__l9xPbOc4:has(.field__l9xPbOc4[data-focus-within]){outline:1px solid #0e65d8}.container__l9xPbOc4.auto__l9xPbOc4{width:min-content}.container__l9xPbOc4.full__l9xPbOc4{width:100%}.field__l9xPbOc4{display:flex}.field-light__l9xPbOc4{color:#212327}.field-light__l9xPbOc4:has(.segment__l9xPbOc4[data-placeholder])~[data-type=literal]{color:#c2c6cb}.field-dark__l9xPbOc4{color:#f9fafa}.field-dark__l9xPbOc4:has(.segment__l9xPbOc4[data-placeholder])~[data-type=literal]{color:#737c87}.field-light__l9xPbOc4 [data-disabled]{color:#c2c6cb}.field-dark__l9xPbOc4 [data-disabled]{color:#737c87}.field__l9xPbOc4[data-disabled]{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.field__l9xPbOc4 svg{height:20px;width:20px}.field__l9xPbOc4 [data-type=day],.field__l9xPbOc4 [data-type=month]{min-width:2ch}.field__l9xPbOc4 [data-type=year]{min-width:4ch}.segment__l9xPbOc4{border-radius:4px;font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-regular,400);line-height:20px;outline:none;padding:1px}.segment__l9xPbOc4[data-focused],.segment__l9xPbOc4[data-focused][data-placeholder]{color:#fafafa}.segment-light__l9xPbOc4[data-placeholder],.segment-light__l9xPbOc4[data-placeholder]+[data-type=literal]{color:#c2c6cb}.segment-light__l9xPbOc4[data-focused]{background:#006fff}.segment-light__l9xPbOc4[data-focus-visible]{outline:1px solid #66a8ff}.segment-dark__l9xPbOc4[data-placeholder],.segment-dark__l9xPbOc4[data-placeholder]+[data-type=literal]{color:#737c87}.segment-dark__l9xPbOc4[data-focused]{background:#4797ff}.segment-dark__l9xPbOc4[data-focus-visible]{outline:1px solid #0e65d8}");const a1=q(Zu),qu=l.forwardRef((e,t)=>{const{className:a,motif:r,...i}=e,{motif:n}=Y(r),o=je(t);return l.useEffect(()=>{const s=o.current;if(!s)return;const u=new WeakMap,d=m=>{var f;if(!(m.target instanceof Element))return;const g=m.target.closest("[aria-valuemin]");if(!g)return;const p=m.data;if(p===null)return void u.delete(g);if(!/^[0-9]$/.test(p))return;const $=g.getAttribute("aria-valuemin");if($===null)return;const y=(f=u.get(g))!==null&&f!==void 0?f:"";if(p==="0"&&y===""&&Number($)>0)return m.stopImmediatePropagation(),void m.preventDefault();const h=y+p,_=g.getAttribute("aria-valuemax"),D=_!==null?Number(_):9999,x=String(D);h.length>=x.length||+(h+"0")>D?u.delete(g):u.set(g,h)},c=m=>{if(!(m.target instanceof Element))return;const f=m.target.closest("[aria-valuemin]");f&&u.delete(f)};return s.addEventListener("beforeinput",d,{capture:!0}),s.addEventListener("focusin",c),()=>{s.removeEventListener("beforeinput",d,{capture:!0}),s.removeEventListener("focusin",c)}},[o]),l.createElement(e0,{ref:o,className:a1.concat(a)("field",`field-${n}`),"data-uic-component":"DateInput.Field",...i})});qu.displayName="DateInputField";const r1=q(Zu),Wu=l.forwardRef((e,t)=>{const{className:a,segment:r,motif:i,...n}=e,{motif:o}=Y(i);return l.createElement(a0,{ref:t,segment:r,"data-uic-component":"DateInput.Segment",className:r1.concat(a)("segment",`segment-${o}`),...n})});Wu.displayName="DateInputSegment";var Fa={root:"root__HF9gG0mV",inputs:"inputs__HF9gG0mV",full:"full__HF9gG0mV",input:"input__HF9gG0mV","input-light":"input-light__HF9gG0mV","input-dark":"input-dark__HF9gG0mV",trigger:"trigger__HF9gG0mV","trigger-light":"trigger-light__HF9gG0mV","trigger-dark":"trigger-dark__HF9gG0mV","trigger-arrow":"trigger-arrow__HF9gG0mV","trigger-arrow-open":"trigger-arrow-open__HF9gG0mV","dropdown-trigger":"dropdown-trigger__HF9gG0mV","calendar-light":"calendar-light__HF9gG0mV","calendar-dark":"calendar-dark__HF9gG0mV",date:"date__HF9gG0mV","date-light":"date-light__HF9gG0mV","date-dark":"date-dark__HF9gG0mV",clear:"clear__HF9gG0mV","clear-light":"clear-light__HF9gG0mV","clear-dark":"clear-dark__HF9gG0mV",footer:"footer__HF9gG0mV",footerLeft:"footerLeft__HF9gG0mV",footerRight:"footerRight__HF9gG0mV",dropdownInputs:"dropdownInputs__HF9gG0mV",rangeDropdownInputs:"rangeDropdownInputs__HF9gG0mV"};Ge(".root__HF9gG0mV{display:flex;flex-direction:column;gap:2px}.inputs__HF9gG0mV{display:flex;gap:4px;width:min-content}.inputs__HF9gG0mV.full__HF9gG0mV{width:100%}.input__HF9gG0mV{align-items:center;border-radius:4px;display:flex;height:32px;justify-content:space-between;min-width:160px;padding:0 8px;width:min-content}.input-light__HF9gG0mV{background:#2123270a}.input-light__HF9gG0mV[data-hovered]{background:#21232712}.input-light__HF9gG0mV[data-focus-within]{outline:1px solid #66a8ff}.input-light__HF9gG0mV[data-disabled]{background:#21232705;color:#c2c6cb}.input-light__HF9gG0mV[data-invalid]{outline:1px solid #f0383b}.input-dark__HF9gG0mV{background:#f9fafa0a}.input-dark__HF9gG0mV[data-hovered]{background:#f9fafa12}.input-dark__HF9gG0mV[data-focus-within]{outline:1px solid #0e65d8}.input-dark__HF9gG0mV[data-disabled]{background:#f9fafa05;color:#737c87}.input-dark__HF9gG0mV[data-invalid]{outline:1px solid #ee6368}.input__HF9gG0mV .trigger__HF9gG0mV:first-of-type{margin-right:8px}.input__HF9gG0mV .trigger__HF9gG0mV:last-of-type{margin-left:8px}.input__HF9gG0mV.full__HF9gG0mV{width:100%}.input__HF9gG0mV.full__HF9gG0mV .trigger__HF9gG0mV:last-of-type{margin-left:auto;padding-left:8px}.input__HF9gG0mV>[data-type=literal]{margin:0 2px}.input__HF9gG0mV[data-disabled]{cursor:default}.trigger__HF9gG0mV{background:none;border:none;border-radius:4px;cursor:pointer;outline:none;padding:0}.trigger-light__HF9gG0mV>svg{color:#808893}.trigger-dark__HF9gG0mV>svg{color:#b7bcc2}.trigger-light__HF9gG0mV[data-hovered]>svg{color:#9fa5ad}.trigger-light__HF9gG0mV[data-pressed]>svg{color:#676f79}.trigger-light__HF9gG0mV[data-disabled]>svg{color:#c2c6cb}.trigger-light__HF9gG0mV[data-focus-visible]{outline:1px solid #66a8ff}.trigger-dark__HF9gG0mV[data-hovered]>svg{color:#cbced2}.trigger-dark__HF9gG0mV[data-pressed]>svg{color:#99a0a8}.trigger-dark__HF9gG0mV[data-disabled]>svg{color:#737c87}.trigger-dark__HF9gG0mV[data-focus-visible]{outline:1px solid #0e65d8}.trigger-arrow__HF9gG0mV{transform:rotate(0);transition:transform .2s cubic-bezier(.4,0,0,1.3)}.trigger-arrow-open__HF9gG0mV{transform:rotate(-180deg)}.trigger__HF9gG0mV[data-disabled]{cursor:default}.dropdown-trigger__HF9gG0mV{cursor:pointer;display:flex;width:fit-content}.dropdown-trigger__HF9gG0mV .calendar-light__HF9gG0mV{color:#676f79}.dropdown-trigger__HF9gG0mV .calendar-dark__HF9gG0mV{color:#cbced2}.dropdown-trigger__HF9gG0mV .date__HF9gG0mV{font-family:var(--desktop-font-family-default,Inter,Lato,Arial,sans-serif);font-size:var(--desktop-font-size-medium,13px);font-weight:var(--desktop-font-weight-regular,400);line-height:20px}.dropdown-trigger__HF9gG0mV .date-light__HF9gG0mV{color:#006fff}.dropdown-trigger__HF9gG0mV .date-dark__HF9gG0mV{color:#4797ff}.dropdown-trigger__HF9gG0mV .clear__HF9gG0mV{background:none;border:none;border-radius:4px;cursor:pointer;outline:none;padding:0}.dropdown-trigger__HF9gG0mV .clear-light__HF9gG0mV{color:#006fff}.dropdown-trigger__HF9gG0mV .clear-light__HF9gG0mV[data-focused]{outline:1px solid #66a8ff}.dropdown-trigger__HF9gG0mV .clear-dark__HF9gG0mV{color:#4797ff}.dropdown-trigger__HF9gG0mV .clear-dark__HF9gG0mV[data-focused]{outline:1px solid #0e65d8}.dropdown-trigger__HF9gG0mV[data-disabled]{cursor:default}.dropdown-trigger__HF9gG0mV[data-disabled] .calendar-light__HF9gG0mV{color:#c2c6cb}.dropdown-trigger__HF9gG0mV[data-disabled] .calendar-dark__HF9gG0mV{color:#737c87}.dropdown-trigger__HF9gG0mV[data-disabled] .clear-light__HF9gG0mV,.dropdown-trigger__HF9gG0mV[data-disabled] .date-light__HF9gG0mV{color:#99c5ff}.dropdown-trigger__HF9gG0mV[data-disabled] .clear-dark__HF9gG0mV,.dropdown-trigger__HF9gG0mV[data-disabled] .date-dark__HF9gG0mV{color:#0b4ead}.dropdown-trigger__HF9gG0mV[data-invalid] .clear-light__HF9gG0mV,.dropdown-trigger__HF9gG0mV[data-invalid] .date-light__HF9gG0mV{color:#f0383b}.dropdown-trigger__HF9gG0mV[data-invalid] .clear-dark__HF9gG0mV,.dropdown-trigger__HF9gG0mV[data-invalid] .date-dark__HF9gG0mV{color:#ee6368}.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV{background:none;border:none}.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-hovered] .calendar-light__HF9gG0mV{color:#50565e}.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-hovered] .calendar-dark__HF9gG0mV{color:#dee0e3}.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-active] .calendar-light__HF9gG0mV,.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-pressed] .calendar-light__HF9gG0mV{color:#3b3f45}.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-active] .calendar-dark__HF9gG0mV,.dropdown-trigger__HF9gG0mV .trigger__HF9gG0mV[data-pressed] .calendar-dark__HF9gG0mV{color:#ecedef}.footer__HF9gG0mV{display:flex;gap:8px;justify-content:flex-end;padding:0 12px 12px}.footerLeft__HF9gG0mV{align-items:center;display:flex;margin-right:auto}.footerRight__HF9gG0mV{align-items:center;display:flex;gap:8px;margin-left:auto}.dropdownInputs__HF9gG0mV,.rangeDropdownInputs__HF9gG0mV{display:flex;padding:12px}.dropdownInputs__HF9gG0mV{flex-direction:column;gap:4px}.rangeDropdownInputs__HF9gG0mV{flex-direction:row;gap:8px}");const n1=q(Fa),Qu=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,isInvalid:n,isDisabled:o,width:s,...u}=e,{motif:d}=Y(i);return l.createElement(jr,{ref:t,isInvalid:n,isDisabled:o,className:n1.concat(r)("input",`input-${d}`,s),"data-uic-component":"DatePicker.Input",...u},a)});Qu.displayName="DatePickerInput";const i1=q(Fa),Yu=E.forwardRef((e,t)=>{const{className:a,style:r,children:i,width:n,...o}=e;return E.createElement(jr,{ref:t,className:i1.concat(a)("inputs",n),style:r,"data-uic-component":"DatePicker.Inputs",...o},i)});Yu.displayName="DatePickerInputs";const hi=q(Fa),kr=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,isOpen:n,...o}=e,s=l.useContext(Iu),u=l.useContext(s0),d=n||(s==null?void 0:s.isOpen)||(u==null?void 0:u.isOpen),{motif:c}=Y(i);return l.createElement(zr,{ref:t,...o,className:hi.concat(r)("trigger",`trigger-${c}`),"data-uic-component":"DatePicker.Trigger"},a??l.createElement(Tc,{size:20,className:hi("trigger-arrow",d&&"trigger-arrow-open")}))});kr.displayName="DatePickerTrigger";const o1=q(Fa),Ju=l.forwardRef((e,t)=>{const{children:a,className:r,motif:i,...n}=e,o=Y(i);return l.createElement(u0,{ref:t,className:o1.concat(r)("root",`root-${o.motif}`),hideTimeZone:!0,granularity:"day",shouldForceLeadingZeros:!0,"data-uic-component":"DateTimePicker.Root",...n},a)});Ju.displayName="DateTimePickerRoot";var s1={root:"root__l0XdFcHA"};Ge(".root__l0XdFcHA{display:flex;flex-direction:column;position:relative}");const l1=q(s1),ed=E.forwardRef((e,t)=>{const{children:a,className:r,style:i,...n}=e;return E.createElement("div",{ref:t,"data-uic-component":"TimePicker.Root",style:i,className:l1.concat(r)("root"),...n},a)});ed.displayName="TimePickerRoot";const ge={HOURS_12:"h:mm A",HOURS_12_HOUR:"hh A",HOURS_24:"HH:mm",HOURS_24_HOUR:"HH"},u1={MINUTES_5:5},d1=e=>{try{const{hour12:t}=new Intl.DateTimeFormat(e,{hour:"numeric"}).resolvedOptions();return t===!1?ge.HOURS_24:ge.HOURS_12}catch{return ge.HOURS_12}},$i=(e,t)=>new Intl.DateTimeFormat(e,{hour:"2-digit",minute:t===ge.HOURS_12_HOUR||t===ge.HOURS_24_HOUR?void 0:"numeric",hour12:t===ge.HOURS_12_HOUR||t===ge.HOURS_12}),c1=(e,t,a)=>t===ge.HOURS_12||t===ge.HOURS_24?((r,i,n)=>{const o=[],s=new ht(0,0),u=$i(r,i);for(let d=0;d<1440;d+=n){const c=Math.floor(d/60),m=d%60,f=new Date(2e3,0,1).setHours(c,m,0),g=u.format(f),p=c===0&&i===ge.HOURS_24?g.replace(/^24(?=:)/,"00"):g,$={value:s.add({hours:c,minutes:m}),label:p,id:s.add({hours:c,minutes:m}).toString()};o.push($)}return o})(e,t,a):((r,i)=>{const n=[],o=new ht(0,0),s=$i(r,i);for(let u=0;u<24;u+=1){const d=new Date(2e3,0,1).setHours(u,0,0),c=s.format(d),m=u===0&&i===ge.HOURS_24_HOUR?"00":c,f={value:o.add({hours:u}),label:m,id:o.add({hours:u}).toString()};n.push(f)}return n})(e,t),f1=(e,t)=>{const a=e.find(r=>r.id===t);return a===void 0?null:a.value},td=e=>{const{timeFormat:t,minuteIntervals:a,locale:r}=e,{items:i,placeholder:n}=E.useMemo(()=>{const o=c1(r,t,a);return{items:o,placeholder:o[0].label||void 0}},[r,t,a]);return{items:i,placeholder:n}};td.displayName="useTimeItems";const ad=E.forwardRef((e,t)=>{const{timeFormat:a,minuteIntervals:r=u1.MINUTES_5,placement:i="bottom start",listBoxHeight:n=214,size:o="medium",isDisabled:s=!1,isInvalid:u=!1,isRequired:d=!1,fallbackLabel:c,motif:m,onChange:f,defaultValue:g,label:p,labelEnd:$,tooltipMessage:y,helpMessage:h,isTooltipDisabled:_=!1,"data-testid":D,...x}=e,{motif:b}=Y(m),{locale:S}=fe(),R=a??d1(S),k=c===void 0?"Time":c,{items:I,placeholder:P}=td({timeFormat:R,minuteIntervals:r,locale:S}),w=E.useMemo(()=>I.map(F=>E.createElement(Mc.Item,{"aria-label":F.label,key:F.id,id:F.id,label:F.label})),[I]);return E.createElement(ed,{ref:t,"data-testid":D},E.createElement(Oc,{motif:b,"aria-label":k,onChange:F=>{if(f&&F){const M=f1(I,F);M&&f(M,F)}},placeholder:P,size:o,isDisabled:s,height:n,placement:i,isRequired:d,isInvalid:u,label:p,labelEnd:$,helpMessage:h,tooltipMessage:y,isTooltipDisabled:_,...x},w))});ad.displayName="TimePicker_Default";const rd=l.forwardRef((e,t)=>{const{inputStyle:a,inputClassName:r,calendarClassname:i,calendarStyle:n,popoverPlacement:o="bottom left",timePickerProps:s,hourCycle:u,motif:d,isDisabled:c,isInvalid:m,label:f,labelEnd:g,tooltipMessage:p,helpMessage:$,defaultValue:y,focusedValue:h,defaultFocusedValue:_,value:D,startOfWeek:x,width:b="auto",popoverProps:S,today:R,...k}=e,{motif:I}=Y(d),P=l.useRef(null),{isDisabled:w,isInvalid:F}=Gi({isDisabled:c,isInvalid:m}),M=y?`${gi(br(y))}`:void 0,O=D?`${gi(br(D))}`:void 0,Q=u===24?ge.HOURS_24:u===12?ge.HOURS_12:void 0;return l.createElement(Ju,{ref:t,motif:I,isDisabled:w,isInvalid:F,defaultValue:y,value:D,hourCycle:u,...k},L=>l.createElement(l.Fragment,null,f&&l.createElement(Ki,{isDisabled:L.isDisabled,label:se(f,L),labelEnd:se(g,L),tooltipMessage:se(p,L)}),l.createElement(Yu,{width:b},l.createElement(Qu,{ref:P,isDisabled:w,isInvalid:F,style:a,className:r,width:b},l.createElement(kr,{isDisabled:w},l.createElement(j0,{size:20})),l.createElement(qu,null,G=>l.createElement(Wu,{segment:G})),l.createElement(kr,{isDisabled:w})),l.createElement(ad,{isDisabled:w,isInvalid:L.state.isInvalid,minWidth:108,onChange:G=>L.state.setTimeValue(G),value:O,defaultValue:M,timeFormat:Q,...s})),$!==null&&($||L.isInvalid)&&l.createElement(zi,{isInvalid:L.isInvalid,isDisabled:L.isDisabled,label:se($,L)||l.createElement(Vc,null),motif:I}),l.createElement(Nc,{style:{scrollbarGutter:"auto",width:"min-content",minWidth:"min-content"},offset:4,borderRadius:"small",triggerRef:P,placement:o,...S},l.createElement(Xu,{today:R,className:i,style:n,isDisabled:w,focusedValue:h,defaultFocusedValue:_,startOfWeek:x}))))});rd.displayName="DateTimePicker_Default";var m1={root:"root__sxpD5yNv","root-light":"root-light__sxpD5yNv","root-dark":"root-dark__sxpD5yNv"};Ge('.root__sxpD5yNv{margin-bottom:-2px}.root__sxpD5yNv:after{content:"";display:block;height:2px;width:100%}.root-light__sxpD5yNv:after{background-color:#cce2ff}.root-dark__sxpD5yNv:after{background-color:#08397d}');const p1=q(m1),nd=l.forwardRef((e,t)=>{const{className:a,motif:r,...i}=e,{motif:n}=Y(r);return l.createElement(Uc,{ref:t,"data-uic-component":"DragAndDropIndicator",className:p1.concat(a)("root",`root-${n}`),...i})});nd.displayName="DragAndDropIndicator";var g1={root:"root__ydjMiCXO","root-light":"root-light__ydjMiCXO","root-dark":"root-dark__ydjMiCXO"};Ge(".root__ydjMiCXO{all:unset;align-self:flex-start;box-sizing:border-box;margin-right:-2px}.root-light__ydjMiCXO{color:#808893}.root-light__ydjMiCXO[data-focus-visible]{outline:1px solid #66a8ff}.root-dark__ydjMiCXO{color:#b7bcc2}.root-dark__ydjMiCXO[data-focus-visible]{outline:1px solid #0e65d8}.root__ydjMiCXO[data-hovered]{cursor:grab}.root__ydjMiCXO[data-pressed]{cursor:grabbing}");const h1=20,$1=q(g1),Vt=l.forwardRef((e,t)=>{const{className:a,motif:r,slot:i="drag",...n}=e,{motif:o}=Y(r);return l.createElement(zr,{ref:t,slot:i,"data-uic-component":"DragAndDropHandleButton",className:$1.concat(a)("root",`root-${o}`),...n},l.createElement(Of,{size:h1}))});Vt.displayName="DragAndDropHandleButton";var Aa={root:"root__xOiB6OSh",selectorTrigger:"selectorTrigger__xOiB6OSh",selectorIndicator:"selectorIndicator__xOiB6OSh",popover:"popover__xOiB6OSh","popover-light":"popover-light__xOiB6OSh","popover-dark":"popover-dark__xOiB6OSh",fade:"fade__xOiB6OSh"};Ge(".root__xOiB6OSh{display:flex;flex-direction:column;gap:2px;transition:width .2s ease-in-out}.root__xOiB6OSh[data-full-width=true]{width:100%}.root__xOiB6OSh[data-default-width=true]{width:32px}.selectorTrigger__xOiB6OSh{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;color:inherit;display:flex;padding:var(--spacing-none,0)}.selectorIndicator__xOiB6OSh{color:var(--color-neutral-08);cursor:pointer}.selectorIndicator__xOiB6OSh[data-disclosed]{transform:rotate(180deg)}.selectorIndicator__xOiB6OSh[data-disabled]{color:var(--color-neutral-06);cursor:default}.popover__xOiB6OSh{border-radius:4px;display:flex;flex-direction:column;max-height:inherit;outline:none;overflow:hidden}.popover-light__xOiB6OSh{background-color:#fff;box-shadow:0 4px 12px #21232714,0 0 1px #21232714}.popover-dark__xOiB6OSh{background-color:#1c1e21;box-shadow:0 4px 12px #0006,0 0 1px #f9fafa14}.popover__xOiB6OSh>[role=listbox]{min-height:0}.popover__xOiB6OSh[data-placement=top]{margin-top:40px}.popover__xOiB6OSh[data-placement=bottom]{margin-bottom:40px}.popover__xOiB6OSh[data-entering]{animation:fade__xOiB6OSh .2s}.popover__xOiB6OSh[data-exiting]{animation:fade__xOiB6OSh .2s ease-in reverse}@keyframes fade__xOiB6OSh{0%{opacity:0;transform:var(--origin)}to{opacity:1;transform:translateY(0)}}");const y1=q(Aa),un=E.forwardRef((e,t)=>{const{className:a,...r}=e;return E.createElement(Hc,{ref:t,className:i=>y1.concat(se(a,i))("comboBox"),...r})});un.displayName="SearchComboBox";const D1=(e,t)=>{const[a,r]=l.useState(!1),i=l.useRef(e);return l.useEffect(()=>{if(!(t===0||e&&i.current)){if(e&&!i.current){const n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)}return e||r(!1),i.current=e,()=>{}}r(!0)},[e,t]),{shouldRender:a}},b1=Cf["desktop-spacing-base"],x1=248,v1=wf["desktop-timing-promptly"]+20,w1=0,C1={estimatedRowSize:28},E1="0 Results",_1="No Results",P1=q(Aa),dn=E.forwardRef((e,t)=>{var a,r;const{className:i,motif:n,isExpanded:o,width:s,renderDelay:u=v1,...d}=e,{motif:c}=Y(n),{shouldRender:m}=D1(no(o,!1),u);return m?E.createElement(Lc,{ref:t,className:f=>P1.concat(se(i,f))("popover",`popover-${c}`),style:{width:s==="full"?(r=(a=e.triggerRef)===null||a===void 0?void 0:a.current)===null||r===void 0?void 0:r.clientWidth:s},...d}):null});dn.displayName="SearchPopover";const S1=q(Aa),cn=E.forwardRef((e,t)=>{const{className:a,onPress:r,isFullWidth:i,...n}=e,o=i||void 0,s=!io(i)&&!i||void 0;return E.createElement(Nf,{ref:t,"data-uic-component":"Search.Root","data-full-width":o,"data-default-width":s,className:u=>S1.concat(se(a,u))("root"),...n})});cn.displayName="SearchRoot";const B1=({collectionRef:e,selectedItemRef:t})=>{var a,r;const i=E.useContext(Xi),n=(a=i==null?void 0:i.selectedItem)===null||a===void 0?void 0:a.key,o=(r=i==null?void 0:i.selectedItem)===null||r===void 0?void 0:r.textValue;return E.useEffect(()=>{var s;e.current=(s=i==null?void 0:i.collection)!==null&&s!==void 0?s:null},[i==null?void 0:i.collection,e]),E.useEffect(()=>{t&&(t.current=n!=null&&o!=null?{key:n,label:o}:null)},[n,o,t]),null},k1=e=>{var t;return e==null?null:typeof e=="object"?(t=e[0])!==null&&t!==void 0?t:null:e},R1=({value:e,isSelectionControlled:t,isInputControlled:a,text:r,onTextChange:i})=>{var n;const o=E.useContext(Xi),s=o==null?void 0:o.selectedItem,u=t?e:(n=k1(o==null?void 0:o.value))!==null&&n!==void 0?n:null,d=(s==null?void 0:s.key)===u?s.textValue:void 0,c=E.useRef(void 0),m=E.useRef(void 0);return E.useEffect(()=>{if(!a)if(c.current!==u){if(u===null){const f=c.current===void 0;return c.current=null,void(!f&&t&&(m.current="",i("")))}d!==void 0&&(c.current=u,m.current=d,i(d))}else d!==void 0&&d!==r&&r===m.current&&(m.current=d,i(d))},[u,d,r,a,t,i]),null},I1=()=>{const e=E.useRef(null),t=E.useRef(null),a=E.useCallback(i=>{var n,o;if(i===null)return"";const s=(o=(n=e.current)===null||n===void 0?void 0:n.getItem(i))===null||o===void 0?void 0:o.textValue;return s??i.toString()},[]),r=E.useCallback(i=>{if(i===null)return"";const n=t.current;return n&&n.key===i?n.label:a(i)},[a]);return{collectionRef:e,selectedItemRef:t,resolveLabel:a,resolveSelectedLabel:r}};q(Aa);const F1=(e,t)=>typeof e=="number"?e:typeof e=="string"&&e!=="full"?parseFloat(e):t?parseFloat(jc):void 0,yi={padding:xe["desktop-spacing-small"]},A1=(e,t,a=E1,r=_1)=>E.useMemo(()=>e?typeof e=="function"?i=>e({...i,filterText:t}):()=>e:t?()=>E.createElement("div",{style:yi},E.createElement(Xr,{label:t,data:a,isDisabled:!0})):()=>E.createElement(Gc,{style:yi,description:r}),[e,t,a,r]),id=E.forwardRef((e,t)=>{var a,r;const{motif:i,children:n,menuTrigger:o="focus",isDisabled:s,isInvalid:u,width:d=x1,placeholder:c,renderEmptyState:m,onClear:f,onChange:g,onInputChange:p,inputValue:$,defaultOpen:y,autoFocus:h,allowsEmptyCollection:_=!0,defaultInputValue:D,defaultValue:x,symbol:b,isVirtualized:S,virtualizerProps:R,height:k,inputHeight:I="medium",isTruncated:P,popoverProps:w,allowsCustomValue:F=!0,control:M,hasSelectedIndicator:O,label:Q,labelEnd:L,tooltipMessage:G,isTooltipDisabled:W,helpMessage:X,"data-uic-component":A="Search_Default",items:j,selectedKey:z,defaultSelectedKey:V,onSelectionChange:B,...N}=e,H=g??B,T=x??V,U=z===void 0||"value"in N?N:{...N,value:z},re="value"in U,Ie=(a=U.value)!==null&&a!==void 0?a:null,{motif:bt}=Y(i),_d=ae(C1,R),Oa=je(t),Va=E.useRef(null),xn=E.useId(),vn=E.useId(),Pd=F1(k,S),Ht=E.useRef(re?Ie:T??null),[Sd,Lt]=E.useState((r=$??D)!==null&&r!==void 0?r:""),Bd=A1(m,$??Sd),{collectionRef:kd,selectedItemRef:Rd,resolveSelectedLabel:Id}=I1(),wn=!io($),{pressProps:Cn}=Or({isDisabled:s,onPress:()=>{var ne;(ne=Va.current)===null||ne===void 0||ne.focus()}});return E.createElement(cn,{ref:Oa,"data-uic-component":A,"aria-label":N["aria-label"],defaultValue:D,value:$},ne=>{var Na,Ua;return E.createElement(E.Fragment,null,Q&&E.createElement(Ki,{id:xn,label:se(Q,ne),labelEnd:se(L,ne),tooltipMessage:se(G,ne),isTooltipDisabled:W,isDisabled:s,motif:bt,tooltipProps:{zIndex:Kc}}),E.createElement(un,{...U,"aria-labelledby":(Na=U["aria-labelledby"])!==null&&Na!==void 0?Na:Q?xn:void 0,"aria-describedby":[U["aria-describedby"],se(X,ne)&&vn].filter(Boolean).join(" ")||void 0,defaultValue:T,isDisabled:s,isInvalid:u,inputValue:no($,ne.state.value),defaultInputValue:D,items:j,onChange:ie=>{if(ie===null&&Ht.current!==null&&re&&U.value===Ht.current)return;Ht.current=ie;const Xe=Id(ie);ne.state.setValue(Xe),Lt(Xe),H==null||H(ie),p==null||p(Xe)},onInputChange:ie=>{ne.state.setValue(ie),Lt(ie),p==null||p(ie)},allowsEmptyCollection:_,menuTrigger:o,autoFocus:h||y,allowsCustomValue:F},E.createElement(B1,{collectionRef:kd,selectedItemRef:Rd}),E.createElement(R1,{value:Ie,isSelectionControlled:re,isInputControlled:wn,text:ne.state.value,onTextChange:ie=>{ne.state.setValue(ie),Lt(ie)}}),E.createElement(Uf,{motif:bt,width:d,isExpanded:!0,height:I},b!==null&&E.createElement(Hf,{motif:bt,...Cn,isDisabled:s},se(b,ne)),E.createElement(Lf,{ref:Va,onChange:ie=>{ne.state.setValue(ie.target.value)},placeholder:c,isExpanded:!0}),E.createElement(jf,{...Cn},(()=>{const ie=E.createElement(Gf,{slot:null,isDisabled:s,onPress:()=>{var Xe;Ht.current=null,ne.state.setValue(""),Lt(""),(Xe=Va.current)===null||Xe===void 0||Xe.focus(),H==null||H(null),p==null||p(""),f==null||f()},isVisible:wn?!If($):!ne.isEmpty,preventFocusOnPress:!0,excludeFromTabOrder:!0});return typeof M=="function"?M(ne,ie):M===void 0?ie:M})())),E.createElement(dn,{triggerRef:Oa,offset:b1,renderDelay:w1,maxHeight:Pd,style:{width:d==="full"?(Ua=Oa.current)===null||Ua===void 0?void 0:Ua.clientWidth:d},...w},E.createElement(zc,{motif:bt,isVirtualized:S,virtualizerProps:_d,width:d,height:k,hasSelectedIndicator:O,renderEmptyState:Bd,isTruncated:P},n))),X&&E.createElement(zi,{id:vn,label:se(X,ne),isDisabled:s,isInvalid:u,motif:bt}))})});id.displayName="Search_Default";const od=new Proxy({Root:cn,ComboBox:un,Popover:dn,Section:Zc,Item:Xc},{get:(e,t)=>t in e?e[t]:Zi("Search")});var Dt={root:"root__lSnHebSv","root-light":"root-light__lSnHebSv","root-dark":"root-dark__lSnHebSv",item:"item__lSnHebSv",header:"header__lSnHebSv",emptyBlock:"emptyBlock__lSnHebSv","item-light":"item-light__lSnHebSv","item-dark":"item-dark__lSnHebSv",preview:"preview__lSnHebSv","preview-light":"preview-light__lSnHebSv","preview-dark":"preview-dark__lSnHebSv",sectionedRoot:"sectionedRoot__lSnHebSv","sectionedRoot-light":"sectionedRoot-light__lSnHebSv","sectionedRoot-dark":"sectionedRoot-dark__lSnHebSv","emptyBlock-light":"emptyBlock-light__lSnHebSv","emptyBlock-dark":"emptyBlock-dark__lSnHebSv"};Ge('.root__lSnHebSv{border:1px solid;border-radius:4px;display:inline-block;overflow:hidden;padding:2px}.root-light__lSnHebSv{border-color:#eef0f1}.root-dark__lSnHebSv{border-color:#34383d}.root__lSnHebSv[data-bordered=false]{border:none;border-radius:0;padding:0}.item__lSnHebSv{align-items:flex-start;display:flex;gap:6px;outline-offset:-1px;padding:4px 8px 4px 6px}.item__lSnHebSv:first-of-type{border-top-left-radius:3px;border-top-right-radius:3px}.item__lSnHebSv:last-of-type{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.item__lSnHebSv:has(.emptyBlock__lSnHebSv),.item__lSnHebSv:has(.header__lSnHebSv){padding:0}.item-light__lSnHebSv[data-hovered]{background-color:#21232705}.item-light__lSnHebSv[data-focus-visible]{outline:1px solid #66a8ff}.item-dark__lSnHebSv[data-hovered]{background-color:#f9fafa05}.item-dark__lSnHebSv[data-focus-visible]{outline:1px solid #0e65d8}.item__lSnHebSv[data-selected]:not(:has([data-uic-component="Checkbox.Indicator"])):not([data-disabled=true]){border-radius:4px}.item-light__lSnHebSv[data-selected]:not(:has([data-uic-component="Checkbox.Indicator"])):not([data-disabled=true]){background-color:#e6f1ff;outline:1px solid #006fff}.item-dark__lSnHebSv[data-selected]:not(:has([data-uic-component="Checkbox.Indicator"])):not([data-disabled=true]){background-color:#05254d;outline:1px solid #4797ff}.header__lSnHebSv{padding:2px 8px}.preview__lSnHebSv{align-items:flex-start;display:flex;gap:6px;opacity:1;padding:4px 8px 4px 6px}.preview__lSnHebSv>[data-uic-component="Badge.Indicator"]{margin-top:2px}.preview-light__lSnHebSv{background:#fff}.preview-dark__lSnHebSv{background:#131416}.sectionedRoot__lSnHebSv{border:1px solid;border-radius:4px;display:inline-block;overflow:hidden;padding:2px}.sectionedRoot-light__lSnHebSv{border-color:#eef0f1}.sectionedRoot-dark__lSnHebSv{border-color:#34383d}.sectionedRoot__lSnHebSv>[data-uic-component="GridList.Header"]{padding:2px 8px}.sectionedRoot__lSnHebSv>[data-uic-component=GridList_DnD]{border:none;border-radius:0;overflow:visible;padding:0;width:100%}.sectionedRoot__lSnHebSv[data-bordered=false]{border:none;border-radius:0;padding:0}.emptyBlock__lSnHebSv{align-items:center;border:1px dashed;border-radius:4px;display:flex;flex:1;justify-content:center;margin:0 8px;padding:8px}.emptyBlock-light__lSnHebSv{border-color:#eef0f1}.emptyBlock-light__lSnHebSv[data-drop-target]{background-color:#e6f1ff;border-color:#006fff}.emptyBlock-light__lSnHebSv[data-drop-target] *{color:#006fff}.emptyBlock-dark__lSnHebSv{border-color:#34383d}.emptyBlock-dark__lSnHebSv[data-drop-target]{background-color:#05254d;border-color:#4797ff}.emptyBlock-dark__lSnHebSv[data-drop-target] *{color:#4797ff}');const T1=q(Dt),fn=l.forwardRef((e,t)=>{const{className:a,motif:r,hasBorder:i=!0,...n}=e,o=je(t),{motif:s}=Y(r);return l.createElement(f0,{ref:o,"data-uic-component":"GridList.Root","data-bordered":i,className:T1.concat(a)("root",`root-${s}`),...n})});fn.displayName="GridListRoot";const M1=q(Dt),mn=l.forwardRef((e,t)=>{const{className:a,motif:r,...i}=e,{motif:n}=Y(r);return l.createElement(p0,{ref:t,"data-uic-component":"GridList.Item",className:M1.concat(a)("item",`item-${n}`),...i})});mn.displayName="GridListItem";const O1=q(Dt),pn=l.forwardRef((e,t)=>{const{className:a,children:r,...i}=e;return l.createElement(Tu,{ref:t,"data-uic-component":"GridList.Header",className:O1.concat(a)("header"),...i},l.createElement(qc,{variant:"caption"},r))});pn.displayName="GridListHeader";const sd=l.forwardRef((e,t)=>{const{className:a,items:r,children:i,title:n,...o}=e;return l.createElement(D0,{ref:t,"data-uic-component":"GridList.Section",className:a,...o},n&&l.createElement(pn,null,n),r?l.createElement(Li,{items:r},s=>se(i,s)):l.createElement(l.Fragment,null,i))});sd.displayName="GridListSection";const V1=q(Dt),gn=l.forwardRef((e,t)=>{const{className:a,motif:r,...i}=e,{motif:n}=Y(r);return l.createElement("div",{ref:t,"data-uic-component":"GridList.DragPreview",className:V1.concat(a)("preview",`preview-${n}`),...i})});gn.displayName="GridListDragPreview";const N1=q(Dt),hn=l.forwardRef((e,t)=>{const{className:a,motif:r,isDropTarget:i,localizationTexts:n,emptyLabel:o,dropLabel:s,...u}=e,{motif:d}=Y(r),c=Wc(),m=l.useMemo(()=>{var p,$;return{EMPTY_LABEL:(p=n==null?void 0:n.EMPTY_LABEL)!==null&&p!==void 0?p:c("GRID_LIST_EMPTY_LABEL"),DROP_LABEL:($=n==null?void 0:n.DROP_LABEL)!==null&&$!==void 0?$:c("GRID_LIST_DROP_LABEL")}},[n,c]),f=o??m.EMPTY_LABEL,g=s??m.DROP_LABEL;return l.createElement(Tu,{ref:t,"data-uic-component":"GridList.EmptyBlock","data-drop-target":i||void 0,className:N1.concat(a)("emptyBlock",`emptyBlock-${d}`),...u},l.createElement(Qc,{variant:"caption"},i?g:f))});hn.displayName="GridListEmptyBlock";const U1=q(Dt),ld=l.forwardRef((e,t)=>{const{className:a,motif:r,children:i,"data-testid":n,hasBorder:o=!0}=e,{motif:s}=Y(r);return l.createElement("div",{ref:t,"data-uic-component":"GridList.SectionedRoot","data-bordered":o,"data-testid":n,className:U1.concat(a)("sectionedRoot",`sectionedRoot-${s}`)},i)});ld.displayName="GridListSectionedRoot";const ud=l.forwardRef((e,t)=>{const{renderEmptyState:a,localizationTexts:r,...i}=e;return l.createElement(fn,{ref:t,"data-uic-component":"GridList_Default",renderEmptyState:a??(({isDropTarget:n})=>l.createElement(hn,{isDropTarget:n,localizationTexts:r})),...i})});ud.displayName="GridList_Default";const Ct="application/x-ui-grid-list-item",H1=["id","label","caption","data","isDisabled","isTruncated","isLabelCentered"],tt=new Map;function L1(e){return t=>{t.target.dropPosition==="before"?e.moveBefore(t.target.key,t.keys):t.target.dropPosition==="after"&&e.moveAfter(t.target.key,t.keys)}}function j1(e,t){return a=>{const r=!tt.has(t);tt.delete(t),a.dropOperation!=="move"||a.isInternal||r||e.remove(...a.keys)}}function G1(e){return l.createElement(nd,{target:e})}async function dd(e,t){return Promise.all(Array.from(e).filter(om).map(async a=>JSON.parse(await a.getText(t))))}function K1(e,t){return a=>{const r=n=>{n.every(o=>e.items.some(s=>s.id===o.id))||(a.target.dropPosition==="before"?e.insertBefore(a.target.key,...n):a.target.dropPosition==="after"&&e.insertAfter(a.target.key,...n))},i=tt.get(t);if(i)return r(i.items),i.sourceList.remove(...i.keys),void tt.delete(t);(async()=>r(await dd(a.items,t)))()}}function z1(e,t){return a=>{const r=tt.get(t);if(r)return e.append(...r.items),r.sourceList.remove(...r.keys),void tt.delete(t);(async()=>e.append(...await dd(a.items,t)))()}}function X1(e,t){return a=>{const r=[],i=[...a].map(n=>{const o=e.getItem(n);if(!o)return null;const s=function(d){const c={};for(const m of H1){if(!(m in d))continue;const f=d[m];f!=null&&typeof f!="string"&&typeof f!="number"&&typeof f!="boolean"||(c[m]=f)}return c}(o);return r.push(s),{[t]:JSON.stringify(s),"text/plain":o.id}}).filter(n=>n!==null);return tt.set(t,{items:r,sourceList:e,keys:[...a]}),i}}function Z1(e,t,a){return r=>{const i=r.map(u=>u["text/plain"]).sort()[0],n=e.getItem(i);if(!n)return l.createElement(l.Fragment);const o=t==="multiple",s=e.selectedKeys==="all"||e.selectedKeys.has(i);return l.createElement(gn,{style:{width:a}},l.createElement(Vt,null),o?l.createElement(qi,{...n,slot:"selection",isSelected:s}):l.createElement(Xr,{...n}),r.length>1&&l.createElement(Yc,{value:r.length}))}}const cd=l.forwardRef((e,t)=>{const{list:a,dragAndDropOptions:r,mode:i,selectionMode:n,children:o,localizationTexts:s,onSelectionChange:u,...d}=e,c=je(t),m=l.useMemo(()=>{var y;const h={getItems:X1(a,Ct),acceptedDragTypes:[Ct],getDropOperation:()=>"move",onInsert:K1(a,Ct),onRootDrop:z1(a,Ct),onReorder:L1(a),onDragEnd:j1(a,Ct),renderDropIndicator:G1,renderDragPreview:Z1(a,n,(y=c.current)===null||y===void 0?void 0:y.offsetWidth)};return i==="transfer"?{...h,onReorder:void 0}:i==="reorder"?{...h,onInsert:void 0,onRootDrop:void 0,onDragEnd:void 0}:h},[i,a,n,c]),f=l.useMemo(()=>ae(m,r),[m,r]),{dragAndDropHooks:g}=M0(f),p=l.useCallback(y=>l.createElement(mn,{textValue:y.id},({isDragging:h,selectionMode:_,isDisabled:D})=>l.createElement(l.Fragment,null,l.createElement(Vt,null),_==="multiple"?l.createElement(qi,{...y,slot:"selection",isDisabled:h||D,width:"full"}):l.createElement(Xr,{...y,isDisabled:h||D}))),[]),$=l.useCallback(y=>{a.setSelectedKeys(y),u==null||u(y)},[a,u]);return l.createElement(ud,{ref:c,"data-uic-component":"GridList_DnD",dragAndDropHooks:g,items:a.items,selectedKeys:a.selectedKeys,onSelectionChange:$,selectionMode:n,localizationTexts:s,...d},o||p)});cd.displayName="GridList_DnD";const q1=new Proxy({Root:fn,Item:mn,Section:sd,DragPreview:gn,Header:pn,EmptyBlock:hn,SectionedRoot:ld},{get:(e,t)=>t in e?e[t]:Zi("GridList")}),Qt=()=>v.jsx("span",{className:"text-red",children:"*"}),sr=({tagGroup:e})=>{let t=v.jsx(W1,{children:"Other"});return e==="unifi"&&(t=v.jsxs(Y1,{children:[v.jsx(H0,{height:13})," "]})),e==="uisp"&&(t=v.jsx(K0,{height:13})),v.jsx(Q1,{children:t})},W1=Z.div`
  font: ${wa["desktop-typography-heading-medium"]};
  color: ${({theme:e})=>e.neutral08};
`,Q1=Z.div`
  color: ${({theme:e})=>e.neutral08};
`,Y1=Z.div`
  width: 47px;
  overflow: hidden;
`,J1=({selectedTags:e,type:t,handleChange:a,disableNonGeneral:r,disableGeneral:i,disableNewToUniFi:n,isRelease:o})=>{var g,p,$;const{PUBLIC_TAGS_GROUPED:s,BETA_TAGS_GROUPED:u,ALPHA_TAGS_GROUPED:d}=l.useContext(Wi),c=l.useMemo(()=>{const y={unifi:[],uisp:[],others:[]};let h=s.filter(_=>_);return t==="beta"&&(h=(u==null?void 0:u.filter(_=>_))??[]),t==="alpha"&&(h=(d==null?void 0:d.filter(_=>_))??[]),h!=null&&h.length&&(y.unifi=h[0],y.uisp=h[1],y.others=h[2]),y},[d,u,s,t]),m=()=>{var h,_,D;let y=0;return(h=c.unifi)!=null&&h.length&&(y+=2),(_=c.uisp)!=null&&_.length&&(y+=2),(D=c.others)!=null&&D.length&&(y+=1),y},f=o&&!e.length;return v.jsxs(ep,{$columns:m(),children:[((g=c.unifi)==null?void 0:g.length)&&v.jsxs(lr,{children:[v.jsx(sr,{tagGroup:"unifi"}),v.jsx(ja,{onChange:a,tags:c.unifi,selectedTags:e,isAlpha:t==="alpha",isBeta:t==="beta",disableNonGeneral:r,disableGeneral:i,disableNewToUniFi:n||o,disableUniFi:f})]}),((p=c.uisp)==null?void 0:p.length)&&v.jsxs(lr,{children:[v.jsx(sr,{tagGroup:"uisp"}),v.jsx(ja,{onChange:a,tags:c.uisp,selectedTags:e,isAlpha:t==="alpha",isBeta:t==="beta",disableNonGeneral:r,disableGeneral:i,disableNewToUniFi:n,disableUniFi:f})]}),(($=c.others)==null?void 0:$.length)&&v.jsxs(lr,{children:[v.jsx(sr,{tagGroup:"others"}),v.jsx(ja,{onChange:a,tags:c.others,selectedTags:e,isAlpha:t==="alpha",isBeta:t==="beta",disableNewToUniFi:n,disableNonGeneral:r,disableGeneral:i,disableUniFi:f})]})]})},ep=Z.div`
  display: grid;
  grid-template-columns: ${({$columns:e})=>e===5?"2fr 2fr 1fr":e===4?"2fr 2fr":e===3?"2fr 1fr":e===2?"2fr":"1fr"};
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  @media (max-width: ${Zr.mobileLarge}) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`,lr=Z.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: ${Zr.mobileLarge}) {
    grid-template-columns: 1fr;
    grid-row-gap: 12px;
  }
`;var oe=(e=>(e.CATEGORIES="categories",e.TAGS="tags",e))(oe||{});Z.div`
  margin: ${({$isModal:e})=>e?"8px 0px":"0"};
  div {
    width: 100% !important;
  }
  .filterTabGroup {
    height: 32px;
    margin: 0px;
    border-radius: 8px;
    padding: 2px;
    button {
      min-height: 28px;
    }
  }
  .filterTab {
    span {
      font: ${wa["desktop-typography-body"]};
    }
    width: 50%;
  }
`;const tp=({tags:e,betas:t,alphas:a,handleRestrictionChange:r,handleTagsChange:i,restrictionType:n,isRelease:o,isEdit:s,disableNonGeneral:u,disableGeneral:d,disableNewToUniFi:c,isModerator:m})=>{const{ALPHA_TAG_IDS:f,BETA_TAG_IDS:g,PUBLIC_TAGS:p,ALPHA_TAGS:$,BETA_TAGS:y}=l.useContext(Wi),{categoriesWithTags:h}=l.useContext(Jc),{user:_}=l.useContext(Qi),[D,x]=l.useState(!1),[b,S]=l.useState(!1),R=l.useMemo(()=>n===K.Alpha?a:n===K.Beta?t:e,[a,t,n,e]),k=Object.keys(h),I=l.useMemo(()=>{const B=[];return R.forEach(N=>{k.forEach(H=>{let T=[];n===K.Public&&(T=h[H].public),n===K.Beta&&(T=h[H].beta??[]),n===K.Alpha&&(T=h[H].alpha??[]),T.some(U=>U.id===N)&&(B.includes(H)||B.push(H))})}),B},[h,R,k,n]),P=I.length>1,[w,F]=l.useState(P?oe.TAGS:oe.CATEGORIES),M=!!(f!=null&&f.length),O=!!(g!=null&&g.length),Q=(!s||m)&&(M||O),L=l.useMemo(()=>(o||O)&&!M,[O,o,M]),G=()=>{if(o){if(w===oe.CATEGORIES)return F(oe.TAGS);if(w===oe.TAGS)return F(oe.CATEGORIES)}},W=()=>{const B=[{id:K.Public,label:"General"}];return O&&B.push({id:K.Beta,label:"Early Access"}),M&&B.push({id:K.Alpha,label:"Alpha"}),B},X=B=>{const N=B;return R.includes(n===K.Public?"security":"beta:security")&&!N.includes(n===K.Public?"security":"beta:security")&&N.push(n===K.Public?"security":"beta:security"),n===K.Beta?i({betas:N}):n===K.Alpha?i({alphas:B}):i({tags:N})},A=()=>{const B=n===K.Public?"security":"beta:security",N=Ff(R,[B]);return n===K.Beta?i({betas:N}):i({tags:N})},j=B=>{if(R.includes(B)){const N=R.filter(H=>H!==B);X(N);return}X([...R,B])};l.useEffect(()=>{const B=Object.values(h);n===K.Alpha&&!B.some(({alpha:N})=>!!N)?(F(oe.TAGS),S(!0)):S(!1)},[h,n,w]),l.useEffect(()=>{n===K.Alpha&&F(oe.TAGS)},[n]),l.useEffect(()=>{n===K.Alpha||!I.length||x(I.includes(ef.Uisp))},[n,I]);const z=l.useMemo(()=>{const B=[];return n===K.Public&&B.push(h.UISP.public),n===K.Beta&&B.push(h.UISP.beta),B.flat().filter(N=>!!N)},[n,h]),V=l.useMemo(()=>n===K.Public?p:n===K.Beta?y??[]:$??[],[n,$,p,y]);return v.jsxs(ap,{children:[M&&v.jsx(sp,{selectedTab:n,tabs:W(),variant:"capsule",stretched:!0,disabled:!Q,selectedTabClassName:"tab-selected",$type:n,onSelectTab:B=>{r(B.id),B.id===K.Alpha?F(oe.TAGS):F(oe.CATEGORIES)}}),v.jsxs(rp,{children:[v.jsxs(np,{children:[v.jsx(fd,{children:w===oe.CATEGORIES?"Choose category that best relates to your post":"Choose tags that best relate to your post"}),v.jsxs(op,{children:[o&&n!==K.Alpha&&v.jsx(Di,{checked:R.includes(n===K.Public?"security":"beta:security"),onChange:A,size:"small",labelClassName:"settings_toggle",children:"Security update"}),o&&n===K.Alpha&&v.jsx(Di,{checked:w===oe.TAGS,onChange:G,size:"small",labelClassName:"settings_toggle",disabled:b,children:"Advanced"}),L&&v.jsx(tf,{id:"early-access-checkbox",variant:"primary",checked:n===K.Beta,onChange:()=>n===K.Beta?r(K.Public):r(K.Beta),children:"Early Access Post"})]})]}),w===oe.CATEGORIES&&v.jsxs(v.Fragment,{children:[v.jsx(af,{type:n,hideNewToUniFi:s&&!_.isEmployee,isRelease:o,selectedCategory:I.at(0),handleChange:X,setUispSelected:x,uispSelected:D}),D&&n!==K.Alpha&&v.jsxs(v.Fragment,{children:[v.jsx(ip,{children:"Choose tags that best relate to your post"}),v.jsx(Pn,{children:(z??[]).filter(B=>!!B).map(({id:B,title:N,type:H})=>v.jsx(na,{type:Sn(H),title:N,isSelected:R.includes(B),onClick:()=>j(B)},B))})]})]}),w===oe.TAGS&&(o?v.jsx(J1,{type:n,selectedTags:R,handleChange:X,disableNonGeneral:u,disableGeneral:d,disableNewToUniFi:c,isRelease:o}):v.jsx(Pn,{children:V.filter(B=>!!B).map(({id:B,title:N,type:H})=>v.jsx(na,{title:N,type:Sn(H),isSelected:R.includes(B),onClick:()=>j(B)},B))}))]})]})},ap=Z.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,rp=Z.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,np=Z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${Zr.mobileXLarge}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
  }
`,fd=Z.div`
  font: ${wa["desktop-body"]};
  color: ${({theme:e})=>e.text2};
`,ip=Z(fd)`
  margin-top: 8px;
`,op=Z.div`
  display: flex;
  gap: 24px;
`,Di=Z(rf)`
  flex-direction: row;
  gap: 8px;

  .settings_toggle {
    font: ${wa["desktop-body"]};

    div {
      color: ${({theme:e})=>e.text3};
    }
  }

  div:first-of-type {
    margin-left: 0;
  }
`,sp=Z(nf)`
  .tab-selected span {
    color: ${({$type:e,theme:t})=>e===K.Public?`${t.ublue06} !important`:e===K.Beta?`${t.orange06} !important`:`${t.red06} !important`};
  }

  [data-testid='public'] {
    &:hover {
      span {
        color: ${({theme:e})=>`${e.ublue06} !important`};
      }
    }
  }

  [data-testid='beta'] {
    &:hover {
      span {
        color: ${({theme:e})=>`${e.orange06} !important`};
      }
    }
  }

  [data-testid='alpha'] {
    &:hover {
      span {
        color: ${({theme:e})=>`${e.red06} !important`};
      }
    }
  }
`,lp=(e,t,a)=>e?t?"Saving...":"Save":t?"Creating...":a.publishAsOfficial?"Create as UI-Official":"Create",Rr=e=>{var t,a;return{key:mr(),title:e.title,url:e.url,checksums:{md5:((t=e.checksums)==null?void 0:t.md5)||"",sha256:((a=e.checksums)==null?void 0:a.sha256)||""}}},up=()=>Rr({title:"",url:"",checksums:{md5:"",sha256:""}}),bi=e=>e.map(({key:t,...a})=>a),ur=200,dp=[{column:"title",aliases:["linktitle","title","name","names","label"]},{column:"url",aliases:["binaryurl","url","downloadurl","binary","link","file"]},{column:"md5",aliases:["md5checksum","md5checksumurl","md5url","md5sum","md5"]},{column:"sha256",aliases:["sha256checksum","sha256checksumurl","sha256url","sha256sum","sha256"]}],cp=["title","url","md5","sha256"],fp=e=>{const[t=""]=e.split(/\r?\n/,1);let a=0,r=0,i=!1;for(const n of t){if(n==='"'){i=!i;continue}i||(n==="	"&&(a+=1),n===","&&(r+=1))}return a>0&&a>=r?"	":","},mp=(e,t)=>{const a=[];let r=[],i="",n=!1,o=!0,s=0;for(;s<e.length;){const u=e[s];if(n){if(u==='"'){if(e[s+1]==='"'){i+='"',s+=2;continue}n=!1,s+=1;continue}i+=u,s+=1;continue}if(u==='"'&&o){n=!0,o=!1,s+=1;continue}if(u===t){r.push(i),i="",o=!0,s+=1;continue}if(u===`
`||u==="\r"){r.push(i),a.push(r),r=[],i="",o=!0,s+=u==="\r"&&e[s+1]===`
`?2:1;continue}i+=u,o=!1,s+=1}return(i!==""||r.length)&&(r.push(i),a.push(r)),a},pp=e=>e.toLowerCase().replace(/[^a-z0-9]/g,""),md=e=>{const t=pp(e);if(!t)return null;const a=dp.find(({aliases:r})=>r.includes(t));return a?a.column:null},gp=e=>/^https?:\/\//i.test(e.trim()),hp=e=>e.split(";").map(t=>t.trim()).filter(Boolean).join(" | "),$p=e=>!e.some(gp)&&e.some(t=>md(t)!==null),yp=e=>e.map(t=>md(t)),Dp=e=>e.every(t=>t.trim()===""),bp=e=>{const t=e.replace(/^\uFEFF/,""),a=mp(t,fp(t)),r=[],i=[];if(!a.length)return{links:r,errors:["The CSV is empty."]};const n=$p(a[0]),o=n?yp(a[0]):cp,s=n?a.slice(1):a;if(n&&!o.includes("url"))return{links:r,errors:['Could not find a "Binary URL" column. Expected columns: Link Title, Binary URL, MD5 Checksum, SHA256 Checksum.']};for(let u=0;u<s.length;u+=1){const d=s[u];if(Dp(d))continue;if(r.length>=ur){i.push(`Stopped after ${ur} links: a single import can add at most ${ur}. The remaining rows were skipped.`);break}const c=n?u+2:u+1,m=g=>{const p=o.indexOf(g);return p===-1?"":(d[p]??"").trim()},f=m("url");if(!f){i.push(`Row ${c}: skipped, no binary URL.`);continue}r.push({title:hp(m("title")),url:f,checksums:{md5:m("md5"),sha256:m("sha256")}})}return!r.length&&!i.length&&i.push("No download links found."),{links:r,errors:i}},xp=e=>{var t,a,r,i;return!e.title.trim()&&!e.url.trim()&&!((a=(t=e.checksums)==null?void 0:t.md5)!=null&&a.trim())&&!((i=(r=e.checksums)==null?void 0:r.sha256)!=null&&i.trim())},vp=C`
    fragment BasicQuestions on Questions {
  totalCount
  items {
    id
    slug
    title
    acceptedAnswer
    isLocked
    stats {
      score
    }
    lastActivityAt
  }
}
    `,wp=C`
    fragment BasicAnswers on Answers {
  totalCount
  items {
    id
    createdAt
    parentEntity {
      id
      title
      acceptedAnswer
      isLocked
    }
    content {
      type
      ... on TextContent {
        content
      }
      ... on ImagesContent {
        grid {
          images {
            src
            caption
            width
            height
            placeholder
          }
        }
      }
      ... on VideoContent {
        src
      }
    }
    stats {
      score
    }
  }
}
    `,Cp=C`
    fragment BasicComments on Comments {
  totalCount
  items {
    id
    createdAt
    entityType
    parentEntity {
      ... on Release {
        id
        title
        isLocked
        entityType
      }
    }
    content {
      type
      ... on TextContent {
        content
      }
      ... on ImagesContent {
        grid {
          images {
            src
            caption
            width
            height
            placeholder
          }
        }
      }
      ... on VideoContent {
        src
      }
    }
    stats {
      score
    }
  }
}
    `,Ep=C`
    fragment BasicReleases on Releases {
  totalCount
  items {
    id
    slug
    title
    version
    isLocked
    createdAt
  }
}
    `,Ke=C`
    fragment PageInfo on PageInfo {
  offset
  limit
}
    `,ze=C`
    fragment Content on Content {
  type
  ... on TextContent {
    content
  }
  ... on ImagesContent {
    grid {
      images {
        src
        caption
        width
        height
        placeholder
      }
    }
  }
  ... on VideoContent {
    src
  }
  ... on AttachmentsContent {
    files {
      filename
      url
      isPublic
    }
  }
}
    `,pd=C`
    fragment CommentStats on CommentStats {
  reports
  score
}
    `,de=C`
    fragment User on User {
  id
  username
  title
  slug
  avatar {
    color
    content
    image
  }
  isEmployee
  registeredAt
  lastOnlineAt
  groups
  showOfficialBadge
  canBeMentioned
  canViewProfile
  canStartConversationWith
}
    `,ve=C`
    fragment UserWithStats on User {
  ...User
  stats {
    questions
    answers
    solutions
    comments
    score
  }
}
    ${de}`,Nt=C`
    fragment UserStatus on UserStatus {
  isFollowing
  lastViewedAt
  reported
  vote
}
    `,$n=C`
    fragment Comment on Comment {
  id
  parentReplyIds
  content {
    ...Content
  }
  stats {
    ...CommentStats
  }
  createdAt
  author {
    ...UserWithStats
  }
  publishedAs {
    ...User
  }
  updatedAt
  editor {
    ...User
  }
  userStatus {
    ...UserStatus
  }
  connectedQuestion {
    id
    slug
    title
  }
}
    ${ze}
${pd}
${ve}
${de}
${Nt}`,gd=C`
    fragment Comments on Comments {
  items {
    ...Comment
  }
  pageInfo {
    offset
    limit
  }
  totalCount
}
    ${$n}`;C`
    fragment QuestionComments on Question {
  comments(offset: $commentOffset, limit: $commentLimit) {
    ...Comments
  }
}
    ${gd}`;const _p=C`
    fragment ReleaseComments on Release {
  comments(
    offset: $commentOffset
    limit: $commentLimit
    targetId: $targetId
    targetCreatedAfter: $targetCreatedAfter
    sortBy: $commentSortBy
  ) {
    ...Comments
  }
}
    ${gd}`,Pp=C`
    fragment QuestionStats on QuestionStats {
  answers
  comments
  reports
  score
  views
}
    `,Ut=C`
    fragment BasicQuestion on Question {
  id
  slug
  title
  tags
  isFeatured
  isLocked
  isOfficial
  hasUiEngagement
  stats {
    ...QuestionStats
  }
  createdAt
  author {
    ...UserWithStats
  }
  publishedAs {
    ...UserWithStats
  }
  assignee {
    ...User
  }
  lastActivityAt
  content {
    type
  }
  updatedAt
  acceptedAnswer
  pinnedAnswer
  betas
  alphas
  originEntity {
    ... on ExternalReference {
      origin
      thumbnail
      url
    }
  }
  userStatus {
    lastViewedId
    ...UserStatus
  }
}
    ${Pp}
${ve}
${de}
${Nt}`,hd=C`
    fragment AnswerStats on AnswerStats {
  comments
  reports
  score
}
    `,Ta=C`
    fragment Answer on Answer {
  id
  parentReplyIds
  content {
    ...Content
  }
  stats {
    ...AnswerStats
  }
  createdAt
  author {
    ...UserWithStats
  }
  publishedAs {
    ...User
  }
  updatedAt
  editor {
    ...User
  }
  userStatus {
    ...UserStatus
  }
  connectedQuestion {
    id
    slug
    title
  }
}
    ${ze}
${hd}
${ve}
${de}
${Nt}`,$d=C`
    fragment RelatedQuestion on Question {
  id
  slug
  title
  stats {
    score
    views
    comments
  }
}
    `,Sp=C`
    fragment Question on Question {
  ...BasicQuestion
  content {
    ...Content
  }
  logfiles {
    filename
    url
  }
  editor {
    ...User
  }
  solution {
    ...Answer
  }
  pinned {
    ...Answer
  }
  betas
  alphas
  relatedLinks {
    type
    question {
      ...RelatedQuestion
    }
    release {
      id
      slug
      title
      version
    }
    externalLink {
      url
      title
    }
  }
  originEntity {
    ... on Answer {
      id
      parentEntity {
        entityType
        id
        title
        slug
      }
    }
    ... on Comment {
      id
      parentEntity {
        ... on Release {
          entityType
          id
          title
          version
          slug
        }
      }
    }
    ... on ExternalReference {
      origin
      originId
      thumbnail
      url
      createdAt
      author {
        thumbnail
        username
        url
      }
    }
  }
}
    ${Ut}
${ze}
${de}
${Ta}
${$d}`,yd=C`
    fragment BasicRelease on Release {
  id
  slug
  type
  title
  version
  stage
  tags
  betas
  alphas
  isFeatured
  isLocked
  hasUiEngagement
  stats {
    comments
    views
  }
  createdAt
  lastActivityAt
  updatedAt
  userStatus {
    ...UserStatus
    lastViewedId
  }
  author {
    ...UserWithStats
  }
  publishedAs {
    ...User
  }
}
    ${Nt}
${ve}
${de}`,Bp=C`
    fragment Release on Release {
  ...BasicRelease
  groupId
  content {
    ...Content
  }
  newFeatures {
    ...Content
  }
  improvements {
    ...Content
  }
  bugfixes {
    ...Content
  }
  knownIssues {
    ...Content
  }
  importantNotes {
    ...Content
  }
  instructions {
    ...Content
  }
  rollingReleaseNotes {
    ...Content
  }
  rollingReleaseNotesEndDate
  links {
    url
    title
    checksums {
      md5
      sha256
    }
  }
  editor {
    ...UserWithStats
  }
  status
}
    ${yd}
${ze}
${ve}`,yn=C`
    fragment BasicConversation on Conversation {
  id
  preview {
    ...Content
  }
  createdAt
  lastActivityAt
  users {
    ...User
  }
  userStatus {
    ...UserStatus
  }
}
    ${ze}
${de}
${Nt}`,Dd=C`
    fragment Message on Message {
  id
  conversationId
  content {
    ...Content
  }
  author {
    ...User
  }
  createdAt
}
    ${ze}
${de}`,bd=C`
    fragment CursorInfo on CursorInfo {
  start
  end
  limit
  hasMore
}
    `,Ma=C`
    fragment Messages on Messages {
  items {
    ...Message
  }
  cursorInfo {
    ...CursorInfo
  }
}
    ${Dd}
${bd}`,kp=C`
    fragment Conversation on Conversation {
  ...BasicConversation
  messages(limit: $messageLimit) {
    ...Messages
  }
}
    ${yn}
${Ma}`,Rp=C`
    fragment Conversations on Conversations {
  items {
    ...BasicConversation
  }
  cursorInfo {
    ...CursorInfo
  }
}
    ${yn}
${bd}`,Ip=C`
    fragment SmallListQuestion on Question {
  id
  slug
  title
  isLocked
  acceptedAnswer
  stats {
    answers
    score
    views
  }
}
    `;C`
    fragment SmallListQuestionWithAuthor on Question {
  ...SmallListQuestion
  author {
    id
    username
  }
  publishedAs {
    id
    username
  }
}
    ${Ip}`;const Fp=C`
    fragment MainFeedItem on Question {
  id
  title
  slug
  lastActivityAt
  createdAt
  isOfficial
  hasUiEngagement
  content {
    type
  }
  stats {
    answers
    comments
    score
    views
  }
  userStatus {
    lastViewedAt
  }
  author {
    ...UserWithStats
  }
  publishedAs {
    id
    username
  }
}
    ${ve}`;C`
    mutation Feature($entityId: ID!, $entityType: FeatureEntityType!) {
  feature(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Unfeature($entityId: ID!, $entityType: FeatureEntityType!) {
  unfeature(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Lock($entityId: ID!, $entityType: LockEntityType!) {
  lock(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Unlock($entityId: ID!, $entityType: LockEntityType!) {
  unlock(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Report($entityId: ID!, $entityType: ReportEntityType!, $reason: String!) {
  report(input: {entityId: $entityId, entityType: $entityType, reason: $reason}) {
    status
  }
}
    `;C`
    mutation DeleteAnswer($id: ID!) {
  deleteAnswer(input: {id: $id}) {
    status
  }
}
    `;C`
    mutation AcceptAnswer($id: ID!, $answerId: ID!) {
  acceptAnswer(input: {questionId: $id, answerId: $answerId}) {
    status
  }
}
    `;C`
    mutation RemoveAcceptedAnswer($id: ID!) {
  removeAcceptedAnswer(input: {questionId: $id}) {
    status
  }
}
    `;C`
    mutation PinAnswer($id: ID!, $answerId: ID!) {
  pinAnswer(input: {questionId: $id, answerId: $answerId}) {
    status
  }
}
    `;C`
    mutation RemovePinnedAnswer($id: ID!) {
  removePinnedAnswer(input: {questionId: $id}) {
    status
  }
}
    `;C`
    mutation DeleteComment($id: ID!) {
  deleteComment(input: {id: $id}) {
    status
  }
}
    `;C`
    mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    status
  }
}
    `;C`
    mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    status
  }
}
    `;C`
    query GetComments($authorId: UserID, $offset: Int, $limit: Int, $searchTerm: String) {
  comments(
    authorId: $authorId
    offset: $offset
    limit: $limit
    searchTerm: $searchTerm
  ) {
    items {
      ...Comment
      parentEntity {
        ... on Release {
          entityType
          id
          title
          slug
          tags
          betas
          alphas
          stats {
            comments
            views
          }
        }
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${$n}
${Ke}`;C`
    mutation Follow($entityId: ID!, $entityType: FollowEntityType!) {
  follow(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Unfollow($entityId: ID!, $entityType: FollowEntityType!) {
  unfollow(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    query MainFeedPosts {
  mainFeedPosts {
    category
    items {
      ...MainFeedItem
    }
  }
}
    ${Fp}`;C`
    query GetConversation($id: ID, $userId: UserID, $messageLimit: Int) {
  conversation(id: $id, userId: $userId) {
    ...Conversation
  }
}
    ${kp}`;C`
    query ConversationMoreMessages($id: ID!, $messageBefore: Date!, $messageLimit: Int) {
  conversation(id: $id) {
    id
    messages(before: $messageBefore, limit: $messageLimit) {
      ...Messages
    }
  }
}
    ${Ma}`;C`
    query GetConversations($before: Date, $limit: Int) {
  conversations(before: $before, limit: $limit) {
    ...Conversations
  }
}
    ${Rp}`;C`
    mutation CreateConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
    ...BasicConversation
    messages {
      ...Messages
    }
  }
}
    ${yn}
${Ma}`;C`
    mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    ...Message
  }
}
    ${Dd}`;C`
    query NewMessages($after: Date!) {
  newMessages(after: $after) {
    ...Messages
  }
}
    ${Ma}`;C`
    query SearchUsers($username: String!) {
  users: searchUsers(username: $username) {
    ...User
  }
}
    ${de}`;C`
    query GetUserFragment($id: UserID!) {
  user(id: $id) {
    ...User
  }
}
    ${de}`;C`
    query ConversationCount {
  conversationCount {
    count
  }
}
    `;C`
    mutation MarkNotificationAsRead($input: MarkNotificationAsReadInput!) {
  markNotificationAsRead(input: $input) {
    status
  }
}
    `;C`
    mutation MarkAllNotificationsAsRead($input: MarkAllNotificationsAsReadInput) {
  markAllNotificationsAsRead(input: $input) {
    status
  }
}
    `;C`
    mutation ClearNotification($input: ClearNotificationInput!) {
  clearNotification(input: $input) {
    status
  }
}
    `;C`
    mutation ClearAllNotifications($input: ClearAllNotificationsInput) {
  clearAllNotifications(input: $input) {
    status
  }
}
    `;C`
    query GetUserExtra($id: UserID!) {
  user(id: $id) {
    id
    lastOnlineAt
    hasBetaAccess
    extraData {
      ssoId
      firstName
      lastName
      email
      lastKnownIp
      frontendVersion
    }
  }
}
    `;C`
    query GetUserBanStatus($id: UserID!) {
  user(id: $id) {
    id
    isBannedUntil
  }
}
    `;C`
    query GetUserBanHistory($id: UserID!) {
  userBanHistory(userId: $id) {
    type
    reason
    expiresAt
    messageToUser
    author {
      ...UserWithStats
    }
    createdAt
  }
}
    ${ve}`;C`
    mutation BanUser($input: BanUserInput!) {
  banUser(input: $input) {
    status
  }
}
    `;C`
    mutation RemoveUserBan($input: RemoveUserBanInput!) {
  removeUserBan(input: $input) {
    status
  }
}
    `;C`
    query GetUser($id: UserID!) {
  user(id: $id) {
    ...UserWithStats
  }
}
    ${ve}`;C`
    query GetInfoMessageStatus($id: UserID!) {
  user(id: $id) {
    id
    hasSeenInfoMessage
  }
}
    `;C`
    mutation MarkInfoMessageAsSeen {
  markInfoMessageAsSeen {
    status
  }
}
    `;C`
    mutation UpdateQuestionRelatedLinks($input: UpdateQuestionRelatedLinksInput!) {
  updateQuestionRelatedLinks(input: $input) {
    status
  }
}
    `;C`
    mutation DeleteQuestion($id: ID!) {
  deleteQuestion(input: {id: $id}) {
    status
  }
}
    `;C`
    query GetQuestions($tagMatchType: TagMatchType, $tags: [String!], $betas: [String!], $alphas: [String!], $filterTags: [String!], $filterEATags: [String!], $filterAlphaTags: [String!], $featuredOnly: Boolean, $officialOnly: Boolean, $filters: [QuestionFilter!], $authorId: UserID, $searchTerm: String, $sortBy: QuestionsSortBy, $sortDirection: QuestionsSortDirection, $offset: Int, $limit: Int, $after: Date, $userIsFollowing: Boolean, $withContent: Boolean = false) {
  questions(
    tagMatchType: $tagMatchType
    tags: $tags
    betas: $betas
    alphas: $alphas
    filterTags: $filterTags
    filterEATags: $filterEATags
    filterAlphaTags: $filterAlphaTags
    featuredOnly: $featuredOnly
    officialOnly: $officialOnly
    filters: $filters
    authorId: $authorId
    searchTerm: $searchTerm
    sortBy: $sortBy
    sortDirection: $sortDirection
    offset: $offset
    limit: $limit
    after: $after
    userIsFollowing: $userIsFollowing
  ) {
    items {
      ...BasicQuestion
      content {
        ... on TextContent @include(if: $withContent) {
          content
        }
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${Ut}
${Ke}`;C`
    query GetQuestionsWithPinned($tags: [String!], $betas: [String!], $alphas: [String!], $featuredOnly: Boolean, $officialOnly: Boolean, $filters: [QuestionFilter!], $authorId: UserID, $searchTerm: String, $sortBy: QuestionsSortBy, $offset: Int, $limit: Int, $after: Date, $userIsFollowing: Boolean) {
  questions(
    tags: $tags
    betas: $betas
    alphas: $alphas
    featuredOnly: $featuredOnly
    officialOnly: $officialOnly
    filters: $filters
    authorId: $authorId
    searchTerm: $searchTerm
    sortBy: $sortBy
    offset: $offset
    limit: $limit
    after: $after
    userIsFollowing: $userIsFollowing
  ) {
    items {
      ...BasicQuestion
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
  pinnedQuestions: questions(
    tags: $tags
    betas: $betas
    alphas: $alphas
    featuredOnly: true
    officialOnly: $officialOnly
    filters: $filters
    sortBy: $sortBy
    offset: $offset
    limit: $limit
    after: $after
    userIsFollowing: $userIsFollowing
  ) {
    items {
      ...BasicQuestion
    }
  }
}
    ${Ut}
${Ke}`;C`
    query GetQuestionsWithoutTotal($tags: [String!], $betas: [String!], $alphas: [String!], $featuredOnly: Boolean, $filters: [QuestionFilter!], $authorId: UserID, $searchTerm: String, $sortBy: QuestionsSortBy, $offset: Int, $limit: Int, $after: Date, $userIsFollowing: Boolean) {
  questions(
    tags: $tags
    betas: $betas
    alphas: $alphas
    featuredOnly: $featuredOnly
    filters: $filters
    authorId: $authorId
    searchTerm: $searchTerm
    sortBy: $sortBy
    offset: $offset
    limit: $limit
    after: $after
    userIsFollowing: $userIsFollowing
  ) {
    items {
      ...BasicQuestion
    }
  }
}
    ${Ut}`;C`
    query GetRelatedQuestions($tags: [String!], $betas: [String!], $alphas: [String!], $searchTerm: String, $sortBy: QuestionsSortBy, $limit: Int, $filters: [QuestionFilter!]) {
  questions(
    tags: $tags
    betas: $betas
    alphas: $alphas
    searchTerm: $searchTerm
    sortBy: $sortBy
    limit: $limit
    filters: $filters
  ) {
    items {
      ...RelatedQuestion
    }
  }
}
    ${$d}`;C`
    mutation PublishRelease($id: ID!) {
  publishRelease(input: {releaseId: $id}) {
    status
  }
}
    `;C`
    mutation DeleteRelease($id: ID!) {
  deleteRelease(input: {id: $id}) {
    status
  }
}
    `;C`
    query GetReleases($limit: Int, $offset: Int, $searchTerm: String, $sortBy: ReleasesSortBy, $sortDirection: ReleasesSortDirection, $stage: ReleaseStage, $statuses: [ReleaseStatus!], $tagMatchType: TagMatchType, $tags: [String!], $betas: [String!], $alphas: [String!], $filterTags: [String!], $filterEATags: [String!], $filterAlphaTags: [String!], $type: ReleaseType, $featuredOnly: Boolean, $nonFeaturedOnly: Boolean, $userIsFollowing: Boolean) {
  releases(
    limit: $limit
    offset: $offset
    searchTerm: $searchTerm
    sortBy: $sortBy
    sortDirection: $sortDirection
    stage: $stage
    statuses: $statuses
    tagMatchType: $tagMatchType
    tags: $tags
    betas: $betas
    alphas: $alphas
    filterTags: $filterTags
    filterEATags: $filterEATags
    filterAlphaTags: $filterAlphaTags
    type: $type
    featuredOnly: $featuredOnly
    nonFeaturedOnly: $nonFeaturedOnly
    userIsFollowing: $userIsFollowing
  ) {
    items {
      ...BasicRelease
    }
    pageInfo {
      limit
      offset
    }
    totalCount
  }
}
    ${yd}`;C`
    query GetReleaseVersionHistory($limit: Int!, $groupId: ID!, $betas: [String!], $alphas: [String!]) {
  releases(limit: $limit, groupId: $groupId, betas: $betas, alphas: $alphas) {
    items {
      id
      slug
      title
      version
      createdAt
      betas
      alphas
      stage
    }
  }
}
    `;C`
    query SearchContent($searchTerm: String!) {
  questions(limit: 5, searchTerm: $searchTerm, sortBy: ACTIVITY) {
    ...BasicQuestions
  }
  answers(limit: 5, searchTerm: $searchTerm, sortBy: LATEST) {
    ...BasicAnswers
  }
  comments(limit: 5, searchTerm: $searchTerm, sortBy: LATEST) {
    ...BasicComments
  }
  releases(limit: 3, searchTerm: $searchTerm, sortBy: LATEST) {
    ...BasicReleases
  }
  searchUsers(limit: 6, username: $searchTerm) {
    ...UserWithStats
  }
}
    ${vp}
${wp}
${Cp}
${Ep}
${ve}`;C`
    query GetTags {
  tags {
    id
    title
    type
    group
    category {
      key
      title
    }
  }
}
    `;C`
    query GetRestrictions {
  restrictions {
    id
    title
    type
    group
    category {
      key
      title
    }
  }
}
    `;C`
    query GetTagsWithCounts {
  tags {
    id
    title
    type
    category {
      key
      title
    }
    stats {
      questions
      releases
    }
  }
}
    `;C`
    query GetRestrictionsWithCounts {
  restrictions {
    id
    title
    type
    category {
      key
      title
    }
    stats {
      questions
      releases
    }
  }
}
    `;C`
    mutation RemoveUpvote($entityId: ID!, $entityType: VoteEntityType!) {
  removeUpvote(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation Upvote($entityId: ID!, $entityType: VoteEntityType!) {
  upvote(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation AddExternalContent($input: CreateExternalReferenceInput!) {
  createExternalReference(input: $input) {
    status
  }
}
    `;C`
    query GetPermissions {
  permissions {
    key
    value
  }
}
    `;C`
    query GetCurrentUser($id: UserID!) {
  user(id: $id) {
    id
    username
    extraData {
      email
    }
  }
}
    `;C`
    query GetUserPermissions($id: UserID!) {
  user(id: $id) {
    id
    username
    groups
    isEmployee
    hasBetaAccess
    alphas
  }
}
    `;C`
    query GetUserPermissionsLogs($offset: Int, $limit: Int) {
  userPermissionsLog(offset: $offset, limit: $limit) {
    id
    user {
      ...User
    }
    createdAt
    author {
      ...User
    }
    groups
    alphas
  }
}
    ${de}`;C`
    mutation UpdateUserPermissions($data: UpdateUserPermissionsInput!) {
  updateUserPermissions(input: $data) {
    status
  }
}
    `;C`
    mutation CreateRestriction($input: CreateRestrictionInput!) {
  createRestriction(input: $input) {
    status
  }
}
    `;C`
    mutation UpdateRestriction($input: UpdateRestrictionInput!) {
  updateRestriction(input: $input) {
    status
  }
}
    `;C`
    mutation ArchiveRestriction($input: ArchiveRestrictionInput!) {
  archiveRestriction(input: $input) {
    status
  }
}
    `;C`
    query GetRestrictionsFull {
  restrictions {
    id
    title
    type
    group
    sort
    category {
      key
      title
    }
    stats {
      questions
      releases
    }
  }
}
    `;C`
    mutation ReorderRestrictions($input: ReorderRestrictionsInput!) {
  reorderRestrictions(input: $input) {
    status
  }
}
    `;C`
    mutation CreateTag($input: CreateTagInput!) {
  createTag(input: $input) {
    status
  }
}
    `;C`
    mutation UpdateTag($input: UpdateTagInput!) {
  updateTag(input: $input) {
    status
  }
}
    `;C`
    mutation ArchiveTag($input: ArchiveTagInput!) {
  archiveTag(input: $input) {
    status
  }
}
    `;C`
    query GetTagsFull {
  tags {
    id
    title
    type
    group
    sort
    category {
      key
      title
    }
    stats {
      questions
      releases
    }
  }
}
    `;C`
    mutation ReorderTags($input: ReorderTagsInput!) {
  reorderTags(input: $input) {
    status
  }
}
    `;C`
    query GetBanHistory($offset: Int, $limit: Int) {
  banHistory(offset: $offset, limit: $limit) {
    items {
      createdAt
      createdById
      createdByUsername
      expiresAt
      reason
      bannedUserId
      bannedUserUsername
    }
    totalCount
  }
}
    `;C`
    query GetSpamHistory($offset: Int, $limit: Int) {
  spamBlockHistory(limit: $limit, offset: $offset) {
    items {
      blockedUserId
      blockedUserUsername
      reason
      createdAt
      expiresAt
    }
    totalCount
  }
}
    `;C`
    query GetReportedQuestions($offset: Int, $limit: Int, $hiddenOnly: Boolean) {
  reportedQuestions(offset: $offset, limit: $limit, hiddenOnly: $hiddenOnly) {
    items {
      ...BasicQuestion
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${Ut}
${Ke}`;C`
    query GetReportedAnswers($offset: Int, $limit: Int, $hiddenOnly: Boolean) {
  reportedAnswers(offset: $offset, limit: $limit, hiddenOnly: $hiddenOnly) {
    items {
      id
      parentEntity {
        id
      }
      content {
        ...Content
      }
      stats {
        ...AnswerStats
      }
      createdAt
      author {
        ...User
      }
      updatedAt
      editor {
        ...User
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ze}
${hd}
${de}
${Ke}`;C`
    query GetReportedComments($offset: Int, $limit: Int, $hiddenOnly: Boolean) {
  reportedComments(offset: $offset, limit: $limit, hiddenOnly: $hiddenOnly) {
    items {
      id
      parentEntity {
        ... on Release {
          id
        }
      }
      content {
        ...Content
      }
      stats {
        ...CommentStats
      }
      createdAt
      author {
        ...User
      }
      updatedAt
      editor {
        ...User
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ze}
${pd}
${de}
${Ke}`;C`
    mutation ClearReportCount($entityId: ID!, $entityType: ReportEntityType!) {
  clearReportCount(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    query GetReports($entityId: ID!) {
  reports(entityId: $entityId) {
    author {
      ...User
    }
    reason
    createdAt
  }
}
    ${de}`;C`
    query GetBlacklistedTerms {
  blacklistedTerms {
    term
    comment
    createdAt
    author {
      ...User
    }
    updatedAt
    editor {
      ...User
    }
  }
}
    ${de}`;C`
    mutation AddTermToBlacklist($input: AddTermToBlacklistInput!) {
  addTermToBlacklist(input: $input) {
    status
  }
}
    `;C`
    mutation UpdateBlacklistedTerm($input: UpdateBlacklistedTermInput!) {
  updateBlacklistedTerm(input: $input) {
    status
  }
}
    `;C`
    mutation RemoveTermFromBlacklist($input: RemoveTermFromBlacklistInput!) {
  removeTermFromBlacklist(input: $input) {
    status
  }
}
    `;C`
    mutation AssignToQuestion($input: AssignToQuestionInput!) {
  assignToQuestion(input: $input) {
    status
  }
}
    `;C`
    mutation UnassignFromQuestion($input: UnassignFromQuestionInput!) {
  unassignFromQuestion(input: $input) {
    status
  }
}
    `;C`
    mutation CreateQuestion($data: CreateQuestionInput!) {
  createQuestion(input: $data) {
    status
  }
}
    `;C`
    mutation UpdateQuestion($data: UpdateQuestionInput!) {
  updateQuestion(input: $data) {
    status
  }
}
    `;C`
    query GetQuestion($id: ID!) {
  question(id: $id) {
    ...Question
  }
}
    ${Sp}`;C`
    query GetResponses($topicId: ID!, $offset: Int, $limit: Int, $targetId: ID, $targetCreatedAfter: Date, $reverse: Boolean) {
  question(id: $topicId) {
    id
    answers(
      offset: $offset
      limit: $limit
      targetId: $targetId
      targetCreatedAfter: $targetCreatedAfter
      reverse: $reverse
    ) {
      items {
        ...Answer
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
}
    ${Ta}
${Ke}`;C`
    query GetAnswer($id: ID!) {
  answer(id: $id) {
    ...Answer
    parentEntity {
      id
      title
      slug
      tags
      betas
      alphas
      acceptedAnswer
    }
  }
}
    ${Ta}`;C`
    query GetComment($id: ID!) {
  comment(id: $id) {
    ...Comment
    parentEntity {
      ... on Release {
        entityType
        id
        title
        version
        slug
        tags
        betas
        alphas
      }
    }
  }
}
    ${$n}`;C`
    query GetResponsesCustom($authorId: UserID, $offset: Int, $limit: Int, $searchTerm: String, $sortBy: AnswersSortBy, $tagMatchType: TagMatchType, $tags: [String!], $betas: [String!], $alphas: [String!]) {
  answers(
    authorId: $authorId
    offset: $offset
    limit: $limit
    searchTerm: $searchTerm
    sortBy: $sortBy
    tagMatchType: $tagMatchType
    tags: $tags
    betas: $betas
    alphas: $alphas
  ) {
    items {
      ...Answer
      parentEntity {
        entityType
        id
        title
        slug
        tags
        betas
        alphas
        acceptedAnswer
        lastActivityAt
        author {
          id
          username
          avatar {
            color
            content
            image
          }
        }
        stats {
          answers
          views
          score
        }
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${Ta}
${Ke}`;C`
    mutation RegisterView($entityId: ID!, $entityType: ViewEntityType!) {
  registerView(input: {entityId: $entityId, entityType: $entityType}) {
    status
  }
}
    `;C`
    mutation CreateAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
    status
  }
}
    `;C`
    mutation UpdateAnswer($input: UpdateAnswerInput!) {
  updateAnswer(input: $input) {
    status
  }
}
    `;C`
    mutation CreateRelease($data: CreateReleaseInput!) {
  createRelease(input: $data) {
    status
  }
}
    `;C`
    mutation UpdateRelease($data: UpdateReleaseInput!) {
  updateRelease(input: $data) {
    status
  }
}
    `;C`
    query GetReleaseGroups {
  releaseGroups {
    id
    type
    title
    tags
  }
}
    `;C`
    query GetReleaseGroup($id: ID!) {
  releaseGroup(id: $id) {
    id
    type
    title
    tags
    restrictions
    releaseMappingUrls
    createdAt
    author {
      ...UserWithStats
    }
    updatedAt
    editor {
      ...UserWithStats
    }
  }
}
    ${ve}`;C`
    query GetReleaseGroupListFull {
  releaseGroups {
    id
    type
    title
    tags
    restrictions
    createdAt
    author {
      ...UserWithStats
    }
    updatedAt
    editor {
      ...UserWithStats
    }
  }
}
    ${ve}`;C`
    mutation CreateReleaseGroup($data: CreateReleaseGroupInput!) {
  createReleaseGroup(input: $data) {
    status
  }
}
    `;C`
    mutation UpdateReleaseGroup($data: UpdateReleaseGroupInput!) {
  updateReleaseGroup(input: $data) {
    status
  }
}
    `;const Ap=C`
    query GetRelease($id: ID!) {
  release(id: $id) {
    ...Release
  }
}
    ${Bp}`,Tp=e=>v.jsx(Ef,{query:Ap,...e});C`
    query GetReleaseIdForRedirect($version: String!, $identifier: String!) {
  releaseIdForRedirect(version: $version, identifier: $identifier)
}
    `;C`
    query GetReleaseComments($parentId: ID!, $commentOffset: Int, $commentLimit: Int, $targetId: ID, $targetCreatedAfter: Date, $commentSortBy: CommentsSortBy) {
  release(id: $parentId) {
    id
    ...ReleaseComments
  }
}
    ${_p}`;C`
    query GetUserNotificationPreferences($id: UserID!) {
  user(id: $id) {
    id
    notificationPreferences {
      autoFollow
      onUpdate
      email
      follows {
        web
        browser
        email
      }
      mentions {
        web
        browser
        email
      }
      messages {
        web
        browser
        email
      }
      questions {
        web
        browser
        email
        filters {
          tags
          betas
          alphas
        }
      }
      releases {
        web
        browser
        email
        filters {
          groupIds
        }
      }
      stories {
        web
        browser
        email
      }
      upvotes {
        web
        browser
        email
      }
      officialMentions {
        web
        browser
        email
      }
      onReport {
        web
        browser
        email
      }
      pendingStories {
        web
        browser
        email
      }
    }
  }
}
    `;C`
    mutation UpdateUserNotificationPreferences($input: UpdateUserNotificationPreferencesInput!) {
  updateUserNotificationPreferences(input: $input) {
    status
  }
}
    `;C`
    query GetPublicReleaseGroups {
  publicReleaseGroups {
    id
    title
  }
}
    `;C`
    mutation CreateAttachmentDeleteUrl($input: CreateAttachmentDeleteUrlInput!) {
  createAttachmentDeleteUrl(input: $input) {
    url
  }
}
    `;C`
    mutation CreateAttachmentDownloadUrl($input: CreateAttachmentDownloadUrlInput!) {
  createAttachmentDownloadUrl(input: $input) {
    url
    isClean
    filename
  }
}
    `;C`
    mutation CreateAttachmentUploadUrl($input: CreateAttachmentUploadUrlInput!) {
  createAttachmentUploadUrl(input: $input) {
    items {
      putUrl
      getUrl
      filename
    }
  }
}
    `;const xd="Link Title, Binary URL, MD5 Checksum, SHA256 Checksum",Mp=`Link Title,Binary URL,MD5 Checksum,SHA256 Checksum
U5G-MAX,https://fw-download.ubnt.com/…bin,https://…/md5sum,https://…/sha256sum`,Op=`Drag a row by its handle into the order the files should appear in on the release page. To fill them in from a CSV file or by pasting its rows, use the buttons below — expected columns: ${xd}. Both checksum columns take a URL to the checksum file and may be left empty.`,Vp={disallowTypeAhead:!0},Np="[data-drag-handle]",Dn="Download link",Up=({links:e,onChange:t,onImportCsvFile:a,onImportCsvText:r,isValidUrl:i,invalidUrlHint:n})=>{const o=l.useRef(e);o.current=e;const s=l.useRef(t);s.current=t;const u=l.useCallback(D=>s.current(D),[]),d=l.useCallback((D,x)=>u(o.current.map(b=>b.key===D?{...b,...x}:b)),[u]),c=l.useCallback(D=>u(o.current.filter(x=>x.key!==D)),[u]),m=l.useCallback(()=>u([...o.current,up()]),[u]),f=l.useCallback((D,x,b)=>{const S=new Set([...x].map(String)),R=o.current.filter(w=>S.has(w.key)),k=o.current.filter(w=>!S.has(w.key)),I=k.findIndex(w=>w.key===String(D));if(I===-1)return;const P=b==="before"?I:I+1;u([...k.slice(0,P),...R,...k.slice(P)])},[u]),g=Hp(e.map(jp),e.map(D=>D.key).join(`
`)),p=l.useMemo(()=>({items:g,selectedKeys:new Set,setSelectedKeys:()=>{},getItem:D=>g.find(x=>x.id===String(D)),moveBefore:(D,x)=>f(D,x,"before"),moveAfter:(D,x)=>f(D,x,"after"),remove:(...D)=>{const x=new Set(D.map(String));u(o.current.filter(b=>!x.has(b.key)))},append:()=>{},insertBefore:()=>{},insertAfter:()=>{},update:()=>{}}),[u,g,f]),$=l.useMemo(()=>({renderDragPreview:D=>{const x=o.current.find(b=>{var S;return b.key===((S=D[0])==null?void 0:S["text/plain"])});return v.jsxs(o3,{children:[v.jsx(Cd,{children:v.jsx(Vt,{"aria-label":`Reorder ${(x==null?void 0:x.title)||"download link"}`})}),v.jsx(Ee,{variant:"body-primary",isTruncated:!0,children:(x==null?void 0:x.title)||(x==null?void 0:x.url)||Dn})]})}}),[]),y=l.useCallback(({id:D})=>v.jsx(Gp,{linkKey:D}),[]),h=Lp(),_=l.useMemo(()=>({links:e,updateLink:d,removeLink:c,isValidUrl:i,invalidUrlHint:n}),[n,i,e,c,d]);return v.jsxs(qp,{children:[v.jsxs(Wp,{children:[v.jsxs(Qp,{children:[v.jsx(Ee,{variant:"heading-medium",children:"Download links"}),v.jsx(Yi,{description:Op})]}),e.length>0&&v.jsxs(Ee,{variant:"caption",color:"text-3",children:[e.length," ",e.length===1?"file":"files"]})]}),e.length>0&&v.jsx(vd.Provider,{value:_,children:v.jsx(Yp,{...Vp,ref:h,"aria-label":"Download links",list:p,mode:"reorder",hasBorder:!1,keyboardNavigationBehavior:"tab",dragAndDropOptions:$,children:y})}),v.jsx(s3,{variant:"tertiary-neutral",width:"full",onPress:m,children:v.jsxs(Ir,{children:[v.jsx(Kf,{size:"medium"}),"Add download link"]})}),v.jsx(Zp,{onFileSelected:a,onPasteSubmitted:r})]})};function Hp(e,t){const a=l.useRef({signature:t,value:e});return a.current.signature!==t&&(a.current={signature:t,value:e}),a.current.value}function Lp(){return l.useCallback(e=>{if(!e)return;let t=!1,a=null;const r=()=>{a==null||a.setAttribute("draggable","true"),a=null},i=o=>{r();const s=o.target instanceof Element?o.target:null;if(t=!!(s!=null&&s.closest(Np)),!s||t)return;const u=s.closest('[draggable="true"]');!u||!e.contains(u)||(u.setAttribute("draggable","false"),a=u)},n=o=>{t||o.preventDefault()};return e.addEventListener("pointerdown",i,!0),e.addEventListener("dragstart",n,!0),window.addEventListener("pointerup",r,!0),window.addEventListener("pointercancel",r,!0),()=>{e.removeEventListener("pointerdown",i,!0),e.removeEventListener("dragstart",n,!0),window.removeEventListener("pointerup",r,!0),window.removeEventListener("pointercancel",r,!0),r()}},[])}const jp=e=>({id:e.key,label:Dn,isTruncated:!0}),vd=l.createContext({links:[],updateLink:()=>{},removeLink:()=>{},isValidUrl:()=>!0,invalidUrlHint:""}),Gp=l.memo(function({linkKey:t}){return v.jsx(Jp,{id:t,textValue:Dn,children:v.jsx(zp,{linkKey:t})})}),xi=e=>{const{tagName:t}=e.target;(t==="INPUT"||t==="TEXTAREA")&&e.stopPropagation()},Kp=new Set,zp=({linkKey:e})=>{const{links:t,updateLink:a,removeLink:r,isValidUrl:i,invalidUrlHint:n}=l.useContext(vd),o=t.find(s=>s.key===e);return o?v.jsx(Xp,{link:o,onChange:a,onRemove:r,isValidUrl:i,invalidUrlHint:n}):null},Xp=l.memo(function({link:t,onChange:a,onRemove:r,isValidUrl:i,invalidUrlHint:n}){var h,_;const[o,s]=l.useState(Kp),u=(D,x,b)=>o.has(D)&&x.trim()&&!i(x.trim())?`${b} ${n}.`:void 0,d=D=>s(x=>new Set(x).add(D)),c=D=>a(t.key,D),m=D=>c({checksums:{...t.checksums,...D}}),f=((h=t.checksums)==null?void 0:h.md5)||"",g=((_=t.checksums)==null?void 0:_.sha256)||"",p=u("md5",f,"MD5 checksum URL"),$=u("sha256",g,"SHA256 checksum URL"),y=u("url",t.url,"Binary URL");return v.jsxs(a3,{$isInvalid:!!y,children:[v.jsx(Cd,{"data-drag-handle":!0,children:v.jsx(Vt,{"aria-label":`Reorder ${t.title||"download link"}`})}),v.jsxs(r3,{onKeyDown:xi,children:[v.jsx(lt,{label:"Link title",placeholder:"Link title",value:t.title,onChange:D=>c({title:D})}),v.jsx(lt,{label:"Binary URL",placeholder:"https://",value:t.url,onChange:D=>c({url:D}),onBlur:()=>d("url"),isInvalid:!!y,helpMessage:y})]}),v.jsx(n3,{children:v.jsx(of,{"aria-label":"Remove download link",variant:"tertiary-destructive",size:"small",onPress:()=>r(t.key),children:v.jsx(sf,{size:"original"})})}),v.jsxs(i3,{onKeyDown:xi,children:[v.jsx(lt,{label:"MD5 checksum URL",placeholder:"https://",value:f,onChange:D=>m({md5:D}),onBlur:()=>d("md5"),isInvalid:!!p,helpMessage:p}),v.jsx(lt,{label:"SHA256 checksum URL",placeholder:"https://",value:g,onChange:D=>m({sha256:D}),onBlur:()=>d("sha256"),isInvalid:!!$,helpMessage:$})]})]})}),Zp=({onFileSelected:e,onPasteSubmitted:t})=>{const a=l.useRef(null),[r,i]=l.useState(null),n=s=>{var d;const u=(d=s.target.files)==null?void 0:d[0];s.target.value="",u&&e(u)},o=()=>{t(r??"")&&i(null)};return v.jsxs(l3,{children:[v.jsx(pr,{variant:"tertiary-neutral",size:"small",onPress:()=>{var s;return(s=a.current)==null?void 0:s.click()},children:v.jsxs(Ir,{children:[v.jsx(z0,{size:"medium"}),"Import CSV"]})}),v.jsx("input",{className:"hidden",type:"file",accept:".csv,text/csv",ref:a,onChange:n}),v.jsx(pr,{variant:"tertiary-neutral",size:"small",onPress:()=>i(""),children:v.jsxs(Ir,{children:[v.jsx(G0,{size:"medium"}),"Paste CSV"]})}),r!==null&&v.jsx(Ji,{title:"Paste CSV",description:`Paste rows with the columns: ${xd}. The header row is optional.`,actionButtonLabel:"Import",actionButtonDisabled:!r.trim(),width:560,stopPropagation:!0,onAction:o,onClose:()=>i(null),children:v.jsx(Vf,{autoFocus:!0,"aria-label":"CSV contents",onChange:i,placeholder:Mp,rows:8,value:r,width:"full"})})]})},qp=Z.div`
  display: flex;
  flex-direction: column;
  gap: ${xe["desktop-spacing-small"]};
  width: 100%;
`,Wp=Z.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,Qp=Z.div`
  align-items: center;
  display: flex;
  gap: ${xe["desktop-spacing-xsmall"]};
`,Yp=Z(cd)`
  && {
    display: flex;
    flex-direction: column;
    gap: ${xe["desktop-spacing-small"]};
    overflow: visible;
    width: 100%;
  }
`,Jp=Z(q1.Item)`
  && {
    display: block;
    padding: 0;
  }

  &&[data-hovered],
  &&[data-focus-visible] {
    background: none;
    outline: none;
  }

  /* The row lifts out of the list while it is being dragged. */
  &&[data-dragging] {
    opacity: 0.4;
  }
`,e3="32px",vi="22px",t3=Bi`
  box-sizing: border-box;
  height: calc(${vi} + ${e3});
  padding-top: ${vi};
`,a3=Z.div`
  align-items: start;
  background: ${({theme:e})=>e.neutral01};
  border: 1px solid
    ${({theme:e,$isInvalid:t})=>t?e.red06:e.neutral03};
  border-radius: ${ao["desktop-radius-medium"]};
  display: grid;
  gap: ${xe["desktop-spacing-small"]};
  grid-template-columns: auto minmax(0, 1fr) auto;
  padding: ${xe["desktop-spacing-small"]};

  /* Chrome turns off text selection under a draggable element, and the row
     is one — the fields inside it are there to be read and edited. */
  user-select: text;
`,wd=Bi`
  display: grid;
  gap: ${xe["desktop-spacing-small"]};
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
  min-width: 0;

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,r3=Z.div`
  ${wd}
  align-items: start;
`,n3=Z.div`
  ${t3}
  align-items: center;
  display: flex;
  gap: ${xe["desktop-spacing-xxsmall"]};
`,Cd=Z.span`
  align-items: center;
  cursor: grab;
  display: flex;
  flex-shrink: 0;
  /* Dragging the row should not paint a text selection across it. */
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  > button {
    align-self: center;
  }
`,i3=Z.div`
  ${wd}
  grid-column: 2;
`,o3=Z(we)`
  background: ${({theme:e})=>e.neutral01};
  border: 1px solid ${({theme:e})=>e.ublue06};
  border-radius: ${ao["desktop-radius-medium"]};
  padding: ${xe["desktop-spacing-small"]};
`,s3=Z(pr)`
  && {
    border: 1px dashed ${({theme:e})=>e.neutral04};
    height: 40px;
  }

  &&[data-hovered] {
    border-color: ${({theme:e})=>e.ublue06};
  }
`,l3=Z.div`
  display: flex;
  gap: ${xe["desktop-spacing-small"]};
`,Ir=Z.span`
  align-items: center;
  color: ${({theme:e})=>e.ublue06};
  display: inline-flex;
  gap: ${xe["desktop-spacing-xsmall"]};
`,Ed=Z(id)`
  height: 40px;

  & > :first-child {
    height: 100%;
  }
`,u3=()=>{const e=window.innerHeight;return Math.round(e/5)},d3=(e,t)=>{const a=e==null?void 0:e.find(r=>r.id===t);return a==null?void 0:a.title},c3=e=>{const{loading:t,error:a,groupId:r,releaseGroups:i,onSelectCallback:n}=e,[o,s]=l.useState(),u=l.useMemo(()=>{const d=i==null?void 0:i.find(c=>c.id===r);return d==null?void 0:d.title},[i,r]);return a?v.jsx(v.Fragment,{}):t?v.jsx(vf,{className:"rounded-3",height:40,isLoading:!0}):v.jsx(Ed,{width:"full",defaultInputValue:u,isVirtualized:!0,height:u3(),inputValue:o,"aria-label":"Select release group",placeholder:"Select release group",onSelectionChange:d=>{const c=d3(i,d);s(c),n(d)},children:i==null?void 0:i.map(d=>v.jsx(od.Item,{id:d.id,symbol:v.jsx(na,{type:d.type===gr.Sw?"release":"general",isSelected:!0,title:lf[d.type].title}),label:d.title},d.id))})},Yt="text-14 font-medium mt-10 md:mt-15 mb-5",wi=Ae([{type:Pf.Text,content:"<p>This update is being rolled out in stages and may not be visible to all users immediately.</p>"}]),st=({editorState:e,placeholderFirst:t,uploader:a,userAccessType:r,attachmentDownloadOptions:i,onChange:n})=>v.jsx(Rf,{editorState:e,onChange:n,onImagesUpload:a.handleImagesUpload,onAttachmentsUpload:a.handleAttachmentsUpload,placeholderFirst:t,placeholderRest:"Keep writing here ...",noAutoFocus:!0,isPublicOnly:!0,fitContent:!0,userAccessType:r,attachmentDownloadOptions:i}),Ci=10,Ei=10,_i=10,Pi=({children:e})=>v.jsx("span",{className:"text-grey-dark text-12 font-regular",children:e}),P3=()=>{const e=Td(),{id:t}=Md(),r=/\/clone/.test(e.pathname),{user:i}=l.useContext(Qi),{hasPermission:n}=l.useContext(eo),o=Od(),s=Vd();return t?v.jsx(Bn,{children:v.jsx(Tp,{variables:{id:t},children:({loading:u,error:d,data:c})=>d?v.jsx(uf,{}):u?v.jsx(df,{}):!c||!c.release?v.jsx(cf,{}):(n(ro.ReleaseUpdate)||o(to(c.release)),v.jsx(Si,{release:c.release,user:i,isReleaseClone:r,navigate:o,queryClient:s}))})}):v.jsx(Bn,{children:v.jsx(Si,{user:i,navigate:o,queryClient:s})})};class Si extends l.Component{constructor(t){if(super(t),this.handleBeforeUnload=a=>{this.state.hasUnsavedChanges&&a.preventDefault()},this.renderForm=(a,r,i,n,o)=>{const s=this.state.rollingReleaseNotesEndDate?O0(new Date(this.state.rollingReleaseNotesEndDate),"ZonedDateTime","UTC"):void 0,u={entityId:this.state.id,entityType:Mn.Release};return v.jsx(eo.Consumer,{children:({hasPermission:d})=>{var f;const c=d(ro.ReleaseMarkAsOfficial),m=lp(a,!!o,{publishAsOfficial:c});return v.jsxs("form",{onSubmit:g=>{g.preventDefault(),r()},children:[v.jsxs(ff,{pageTitle:i,buttons:v.jsxs(v.Fragment,{children:[v.jsx(In,{plain:!0,onClick:this.handleCancelClick,disabled:o,className:"px-15 mr-5 w-full sm:w-auto",children:"Cancel"}),v.jsx(In,{primary:!0,submit:!0,className:"w-full min-w-max sm:w-auto",disabled:o,children:m}),(!a&&c||a&&this.state.publishedAs)&&v.jsx(pf,{className:"self-center ml-5 flex-no-shrink",color:"blue-light",size:16})]}),children:[v.jsxs("div",{className:"flex flex-col md:flex-row w-full pt-5 md:pt-0",children:[v.jsxs("div",{className:"flex-grow",children:[v.jsxs("div",{className:Yt,children:["Release group ",v.jsx(Qt,{})]}),v.jsx(mf,{fetchPolicy:"cache-first",children:({loading:g,error:p,data:$})=>{const y=this.state.groupId,h=_=>{const D=$==null?void 0:$.releaseGroups.find(x=>x.id===_);if(D){const x={groupId:D.id,tags:D.tags,hasUnsavedChanges:!0};this.props.release?this.setState({...x}):this.setState({...x,title:D.title})}};return v.jsx(c3,{loading:g,error:p,groupId:y,releaseGroups:$==null?void 0:$.releaseGroups,onSelectCallback:h})}})]}),v.jsx("div",{className:"px-10"}),v.jsxs("div",{className:"md:w-1/4",children:[v.jsxs("div",{className:Yt,children:["Stage ",v.jsx(Pi,{children:"(not publicly displayed)"})," ",v.jsx(Qt,{})]}),v.jsx(Ed,{width:"full",defaultInputValue:this.state.stage?kn[this.state.stage].tooltip:void 0,"aria-label":"Select stage",placeholder:"Select stage",onSelectionChange:g=>{const p=Rn.find($=>$.label===g);p&&this.setState({stage:p.value,hasUnsavedChanges:!0})},children:Rn.map(g=>v.jsx(od.Item,{id:g.label,symbol:v.jsx(na,{type:"general",isSelected:!0,title:kn[g.value].title}),label:g.label},g.label))})]})]}),v.jsxs("div",{className:"flex flex-col md:flex-row w-full",children:[v.jsxs("div",{className:"flex-grow",children:[v.jsxs("div",{className:Yt,children:["Title ",v.jsx(Qt,{})]}),v.jsx(lt,{height:"large",placeholder:"Name this release, e.g. UniFi Network Controller",onChange:this.handleTitleChange,value:this.state.title})]}),v.jsx("div",{className:"px-10 -mt-10 md:mt-0"}),v.jsxs("div",{className:"md:w-1/4",children:[v.jsxs("div",{className:Yt,children:["Version ",v.jsx(Pi,{children:"(SemVer)"})," ",v.jsx(Qt,{})]}),v.jsx(lt,{height:"large",placeholder:"E.g. 6.0.22-beta.1",onChange:this.handleVersionChange,value:this.state.version})]})]}),v.jsx(Tn,{withPadding:!0}),v.jsxs(we,{d:"v",gap:"desktop-spacing-medium",children:[v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.rollingReleaseNotice.label}),v.jsxs(we,{d:"v",gap:"desktop-spacing-small",children:[v.jsxs(we,{gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{children:"End date"}),v.jsx(Yi,{description:"The date when the rolling release will end and show that the rolling release is finished."})]}),v.jsx(rd,{value:s,onChange:g=>{const p=g==null?void 0:g.toDate("UTC");if(!p)return;const $=new Date(p);this.handleRollingReleaseEndDateChange($)}}),v.jsx(st,{editorState:this.state.rollingReleaseNotice,onChange:this.handleRollingReleaseNoticeChange,uploader:this.assetUploader,placeholderFirst:he.instructions.placeholder,userAccessType:n,attachmentDownloadOptions:u})]})]}),v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.importantNotes.label}),v.jsx(st,{editorState:this.state.importantNotes,onChange:this.handleImportantNotesChange,uploader:this.assetUploader,placeholderFirst:he.importantNotes.placeholder,userAccessType:n,attachmentDownloadOptions:u})]}),v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.improvements.label}),v.jsx(st,{editorState:this.state.improvements,onChange:this.handleImprovementsChange,uploader:this.assetUploader,placeholderFirst:he.improvements.placeholder,userAccessType:n,attachmentDownloadOptions:u})]}),v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.bugfixes.label}),v.jsx(st,{editorState:this.state.bugfixes,onChange:this.handleBugfixesChange,uploader:this.assetUploader,placeholderFirst:he.bugfixes.placeholder,userAccessType:n,attachmentDownloadOptions:u})]}),v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.knownIssues.label}),v.jsx(st,{editorState:this.state.knownIssues,onChange:this.handleKnownIssuesChange,uploader:this.assetUploader,placeholderFirst:he.knownIssues.placeholder,userAccessType:n,attachmentDownloadOptions:u})]}),v.jsxs(we,{d:"v",gap:"desktop-spacing-xsmall",children:[v.jsx(Ee,{variant:"heading-medium",children:he.instructions.label}),v.jsx(st,{editorState:this.state.instructions,onChange:this.handleInstructionsChange,uploader:this.assetUploader,placeholderFirst:he.instructions.placeholder,userAccessType:n,attachmentDownloadOptions:u})]}),v.jsx(Up,{links:this.state.links,onChange:this.handleLinksChange,onImportCsvFile:this.handleImportLinksCsvFile,onImportCsvText:this.handleImportLinksCsv,isValidUrl:this.linkUrlRule.isValid,invalidUrlHint:this.linkUrlRule.hint})]}),v.jsx(Tn,{className:"-mx-15 my-15"}),v.jsx(tp,{tags:this.state.tags,betas:this.state.betas,alphas:this.state.alphas,handleTagsChange:this.handleTagsChange,handleRestrictionChange:g=>this.shouldShowConfirmation()?this.handleRestrictionWithConfirmation(g):this.handleRestrictionChange(g),restrictionType:this.state.restrictionType,isRelease:!0})]}),((f=this.state)==null?void 0:f.temporaryReleaseRestriction)&&v.jsx(Ji,{title:"Are you sure you want to change restriction type?",isDangerous:!0,stopPropagation:!0,actionButtonLabel:"Confirm",onAction:()=>this.onConfirmRestrictionTypeChange(),onClose:()=>this.setState({temporaryReleaseRestriction:null})})]})}})},this.handleTitleChange=a=>{this.setState({title:a,hasUnsavedChanges:!0})},this.handleVersionChange=a=>{this.setState({version:a,hasUnsavedChanges:!0})},this.handleRestrictionChange=a=>{this.setState({restrictionType:a,hasUnsavedChanges:!0})},this.handleOldContentChange=a=>{this.setState({content:a,hasUnsavedChanges:!0})},this.handleFeaturesChange=a=>{this.setState({newFeatures:a,hasUnsavedChanges:!0})},this.handleImprovementsChange=a=>{this.setState({improvements:a,hasUnsavedChanges:!0})},this.handleBugfixesChange=a=>{this.setState({bugfixes:a,hasUnsavedChanges:!0})},this.handleKnownIssuesChange=a=>{this.setState({knownIssues:a,hasUnsavedChanges:!0})},this.handleImportantNotesChange=a=>{this.setState({importantNotes:a,hasUnsavedChanges:!0})},this.handleRollingReleaseNoticeChange=a=>{this.setState({rollingReleaseNotice:a,hasUnsavedChanges:!0})},this.handleRollingReleaseEndDateChange=a=>{this.setState({rollingReleaseNotesEndDate:a,hasUnsavedChanges:!0})},this.handleInstructionsChange=a=>{this.setState({instructions:a,hasUnsavedChanges:!0})},this.handleLinksChange=a=>{this.setState({links:a,hasUnsavedChanges:!0})},this.handleImportLinksCsv=a=>{Kt();const{links:r,errors:i}=bp(a);return r.length?(this.setState(n=>({links:[...n.links.filter(o=>!xp(o)),...r.map(Rr)],hasUnsavedChanges:!0})),i.length&&vt(`Imported ${r.length} download links, skipped ${i.length}`,i),!0):(vt("Could not import CSV",i),!1)},this.handleImportLinksCsvFile=async a=>{let r;try{r=await a.text()}catch{Kt(),vt("Could not import CSV",[`"${a.name}" could not be read.`]);return}this.handleImportLinksCsv(r)},this.handleTagsChange=({tags:a,betas:r,alphas:i})=>{this.setState({tags:a||[],betas:r||[],alphas:i||[],hasUnsavedChanges:!0})},this.getTagsAndRestrictions=()=>{const a=this.state.restrictionType===K.Public?this.state.tags:[],r=this.state.restrictionType===K.Beta?this.state.betas:[],i=this.state.restrictionType===K.Alpha?this.state.alphas:[];return{tags:a,betas:r,alphas:i}},this.validateTagsAndRestrictions=()=>{const{tags:a,betas:r,alphas:i}=this.getTagsAndRestrictions(),n=(a==null?void 0:a.length)!==0,o=(r==null?void 0:r.length)!==0,s=(i==null?void 0:i.length)!==0;return!n&&!o&&!s?"Release needs at least one tag or restriction":n&&a.length>Ci?`Release can have no more than ${Ci} tags`:o&&r.length>Ei?`Release can have no more than ${Ei} beta restrictions`:o&&r.length===1&&r[0]==="beta:ea-hardware"?"Release must have an additional tag to Early Access Hardware":s&&i.length>_i?`Release can have no more than ${_i} alpha restrictions`:null},this.checkForErrors=()=>{const{title:a,groupId:r,version:i,stage:n,links:o}=this.state,s=[],u=3,d=200;a?a.length<u?s.push(`Title is too short, it needs to be between ${u} and ${d} characters long.`):a.length>d&&s.push(`Title is too long, it needs to be between ${u} and ${d} characters long.`):s.push("Please enter a title for this entry."),r===""&&s.push("Please select release group");const c=this.validateTagsAndRestrictions();c&&s.push(c),i||s.push("Please provide version."),n||s.push("Please select release stage.");const m=o.filter(g=>g.url!==""),f=this.linkUrlRule.isValid;for(let g=0,p=m.length;g<p;g++){const $=m[g];f($.url)||s.push(`"${$.url}" is an invalid URL.`),$.checksums&&($.checksums.md5&&!f($.checksums.md5)&&s.push(`"${$.checksums.md5}" is an invalid URL.`),$.checksums.sha256&&!f($.checksums.sha256)&&s.push(`"${$.checksums.sha256}" is an invalid URL.`))}return s},this.validate=()=>{Kt();const a=this.checkForErrors();return a.length?(vt("Validation errors",a),!1):!0},this.hasNoPendingUploads=()=>(Kt(),this.assetUploader.isInProgress()?(vt("Upload in progress",["Please wait a moment and try again"]),!1):!0),this.handleCreate=a=>{if(!this.validate()||!this.hasNoPendingUploads())return;const{tags:r,betas:i,alphas:n}=this.getTagsAndRestrictions();a({variables:{data:{id:this.state.id,groupId:this.state.groupId,type:gr.Sw,title:this.state.title,version:this.state.version,stage:this.state.stage,newFeatures:void 0,improvements:ce(this.state.improvements),bugfixes:ce(this.state.bugfixes),knownIssues:ce(this.state.knownIssues),importantNotes:ce(this.state.importantNotes),instructions:ce(this.state.instructions),rollingReleaseNotes:ce(this.state.rollingReleaseNotice),rollingReleaseNotesEndDate:this.state.rollingReleaseNotesEndDate,tags:r,betas:i,alphas:n,links:bi(this.state.links.filter(o=>o.url!==""))}}}).then(this.handleSaveCompleted).catch(o=>{this.handleErrors([o])})},this.handleUpdate=a=>{if(!this.validate()||!this.hasNoPendingUploads())return;const{tags:r,betas:i,alphas:n}=this.getTagsAndRestrictions();a({variables:{data:{id:this.state.id,groupId:this.state.groupId,type:gr.Sw,title:this.state.title,version:this.state.version,stage:this.state.stage,content:this.state.content&&ce(this.state.content),newFeatures:this.state.newFeatures?ce(this.state.newFeatures):void 0,improvements:ce(this.state.improvements),bugfixes:ce(this.state.bugfixes),knownIssues:ce(this.state.knownIssues),importantNotes:ce(this.state.importantNotes),instructions:ce(this.state.instructions),rollingReleaseNotes:ce(this.state.rollingReleaseNotice),rollingReleaseNotesEndDate:this.state.rollingReleaseNotesEndDate,tags:r,betas:i,alphas:n,links:bi(this.state.links.filter(o=>o.url!==""))}}}).then(this.handleSaveCompleted).catch(o=>{this.handleErrors([o])})},this.handleErrors=a=>{gf("Error while saving release",a)},this.handleSaveCompleted=a=>{if(a!=null&&a.errors)this.handleErrors(a.errors);else{this.setState({hasUnsavedChanges:!1});const r=to({id:this.state.id,slug:this.props.release&&!this.props.isReleaseClone?this.props.release.slug:hf(`${this.state.title} ${this.state.version}`)});$f(this.props.queryClient,this.state.id),yf(r)||this.props.navigate(r,{replace:!0})}},this.handleCancelClick=()=>{this.props.navigate(-1)},t.release){const{groupId:a,title:r,version:i,stage:n,content:o,newFeatures:s,publishedAs:u,improvements:d,bugfixes:c,knownIssues:m,importantNotes:f,instructions:g,rollingReleaseNotes:p,rollingReleaseNotesEndDate:$,tags:y,betas:h,alphas:_,links:D}=t.release;let{id:x}=t.release;t.release&&t.isReleaseClone&&(x=mr()),this.state={id:x,groupId:a||"",title:r,version:i,stage:n,content:o?Ae(o):void 0,restrictionType:Df({betas:h,alphas:_}),publishedAs:u||null,newFeatures:s!=null&&s.length?Ae(s):De(),improvements:d!=null&&d.length?Ae(d):De(),bugfixes:c!=null&&c.length?Ae(c):De(),knownIssues:m!=null&&m.length?Ae(m):De(),importantNotes:f!=null&&f.length?Ae(f):De(),instructions:g!=null&&g.length?Ae(g):De(),rollingReleaseNotice:p!=null&&p.length?Ae(p):wi,rollingReleaseNotesEndDate:$,tags:y,betas:h,alphas:_,links:D.map(Rr),isEdit:!0,hasUnsavedChanges:!1,temporaryReleaseRestriction:null}}else this.state={id:mr(),groupId:"",title:"",version:"",newFeatures:void 0,improvements:De(),bugfixes:De(),knownIssues:De(),importantNotes:De(),instructions:De(),rollingReleaseNotice:wi,rollingReleaseNotesEndDate:null,restrictionType:K.Public,publishedAs:null,tags:[],betas:[],alphas:[],links:[],hasUnsavedChanges:!1,temporaryReleaseRestriction:null};this.assetUploader=new Sf(this.state.id,_f.Release,Mn.Release)}componentDidMount(){window.addEventListener("beforeunload",this.handleBeforeUnload)}componentWillUnmount(){window.removeEventListener("beforeunload",this.handleBeforeUnload)}render(){var r;let t="";const a=Fn({isEmployee:(r=this.props.user)==null?void 0:r.isEmployee});return this.props.release&&!this.props.isReleaseClone?(t="Edit release",v.jsxs(v.Fragment,{children:[v.jsx(An,{children:v.jsx("title",{children:`${t} | ${On}`})}),v.jsx(bf,{children:(i,{loading:n})=>this.renderForm(!0,()=>this.handleUpdate(i),t,a,n)})]})):(t="Create new release",v.jsxs(v.Fragment,{children:[v.jsx(An,{children:v.jsx("title",{children:`${t} | ${On}`})}),v.jsx(xf,{children:(i,{loading:n})=>this.renderForm(!1,()=>this.handleCreate(i),t,a,n)})]}))}shouldShowConfirmation(){return this.state.isEdit&&!this.props.isReleaseClone}handleRestrictionWithConfirmation(t){this.shouldShowConfirmation()&&this.setState({temporaryReleaseRestriction:t})}onConfirmRestrictionTypeChange(){this.state.temporaryReleaseRestriction&&this.handleRestrictionChange(this.state.temporaryReleaseRestriction),this.setState({temporaryReleaseRestriction:null})}get linkUrlRule(){var a;return Fn({isEmployee:(a=this.props.user)==null?void 0:a.isEmployee})==="employee"?{isValid:Bf,hint:"is not a valid URL"}:{isValid:kf,hint:"must be an https:// link to ui.com, ubnt.com, uisp.com or amplifi.com"}}}export{_i as ALPHA_TAGS_MAX,Ei as BETA_TAGS_MAX,Ci as TAGS_MAX,P3 as default};
//# sourceMappingURL=ReleaseEditPage-uMHIgO1T.js.map
