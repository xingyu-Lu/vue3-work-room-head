var C=Object.defineProperty;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var x=(e,t,s)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))I.call(t,s)&&x(e,s,t[s]);if(h)for(var s of h(t))S.call(t,s)&&x(e,s,t[s]);return e};import{a as $}from"./axios.6c7674d9.js";import{_ as N}from"./index.ca0f3838.js";import{a as V,r as z,o as D,t as E,c as l,d as a,ae as r,f as d,w as o,af as i,ag as c,e as y,h as n,ah as u,ai as F,aj as L,i as v}from"./vendor.3f1080f6.js";const M={name:"ldtd",setup(){const e=V({res_data:z("")});D(()=>{t()});const t=()=>{$.get("/api/head/briefs/ldtd").then(s=>{e.res_data=s.data})};return b({},E(e))}},R=e=>(F("data-v-38b333b0"),e=e(),L(),e),T=R(()=>n("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[n("strong",null,"\u9886\u5BFC\u56E2\u961F")],-1)),q=v("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=v("\u9886\u5BFC\u56E2\u961F"),G={class:"img",style:{overflow:"hidden"}},H=["src"],J={style:{padding:"14px","line-height":"36px","font-size":"14px"}},K={style:{color:"#DC8C00"}},O={style:{display:"flex","justify-content":"space-around"}},P={style:{"list-style":"none"}};function Q(e,t,s,U,W,X){const f=l("el-col"),m=l("el-row"),g=l("el-breadcrumb-item"),j=l("el-breadcrumb"),w=l("el-card");return a(),r(i,null,[d(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[d(f,{span:24},{default:o(()=>[T]),_:1})]),_:1}),d(j,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[d(g,{to:{path:"/"}},{default:o(()=>[q]),_:1}),d(g,null,{default:o(()=>[A]),_:1})]),_:1}),(a(!0),r(i,null,c(e.res_data,(k,Y)=>(a(),y(m,{gutter:20,justify:"space-around",style:{"margin-bottom":"20px"}},{default:o(()=>[(a(!0),r(i,null,c(k,(_,Z)=>(a(),y(f,{sm:4},{default:o(()=>[d(w,{"body-style":{padding:"10px"},shadow:"never"},{default:o(()=>[n("div",G,[n("img",{src:_.img_url},null,8,H)]),n("div",J,[n("span",K,u(_.name),1),n("div",O,[n("div",P,[(a(!0),r(i,null,c(_.position,(p,B)=>(a(),r("li",null,u(p),1))),256)),(a(!0),r(i,null,c(_.professional,(p,B)=>(a(),r("li",null,u(p),1))),256))])])])]),_:2},1024)]),_:2},1024))),256))]),_:2},1024))),256))],64)}var oe=N(M,[["render",Q],["__scopeId","data-v-38b333b0"]]);export{oe as default};
