import{X as D}from"./use-page-modal.53da0862.js";import{_ as S,d as B,a as p,b as c,o as I,c as x,e as t,w as s,g as f,I as R,f as V,p as b,i as F,h}from"./index.38f45ce1.js";const P=e=>(b("data-v-0f37676f"),e=e(),F(),e),q={class:"page-search"},w=P(()=>f("h1",{class:"header"},"\u9AD8\u7EA7\u68C0\u7D22",-1)),E={class:"handle-btns"},N=h(" \u91CD\u7F6E"),Q=h(" \u641C\u7D22"),z=B({props:{searchFormConfig:{type:Object,required:!0}},emits:["resetBtnClick","queryBtnClick"],setup(e,{emit:r}){var l;const o=(l=e.searchFormConfig.formItems)!=null?l:[],a={};for(const u of o)a[u.field]="";const n=p(a),C=()=>{n.value=a,r("resetBtnClick")},g=()=>{r("queryBtnClick",n.value)};return(u,i)=>{const v=c("Refresh"),_=c("el-icon"),d=c("el-button"),k=c("Search");return I(),x("div",q,[t(V(D),R(e.searchFormConfig,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=y=>n.value=y)}),{header:s(()=>[w]),footer:s(()=>[f("div",E,[t(d,{size:"large",onClick:C},{default:s(()=>[t(_,null,{default:s(()=>[t(v)]),_:1}),N]),_:1}),t(d,{type:"primary",size:"large",onClick:g},{default:s(()=>[t(_,null,{default:s(()=>[t(k)]),_:1}),Q]),_:1})])]),_:1},16,["modelValue"])])}}});var X=S(z,[["__scopeId","data-v-0f37676f"]]);function j(){const e=p();return{pageContentRef:e,handleResetClick:()=>{var o;(o=e.value)==null||o.getPageData()},handleQueryClick:o=>{var a;(a=e.value)==null||a.getPageData(o)}}}export{X as p,j as u};
