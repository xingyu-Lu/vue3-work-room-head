var u=Object.defineProperty;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var l=(a,e,t)=>e in a?u(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))g.call(e,t)&&l(a,t,e[t]);if(d)for(var t of d(e))b.call(e,t)&&l(a,t,e[t]);return a};import{a as h}from"./axios.1b49a805.js";import{_ as x}from"./index.fa6848ce.js";import{a as y,r as w,o as v,t as j,c as s,d as $,ad as k,f as o,w as n,h as r,ae as B,i as _}from"./vendor.3ad3b1c7.js";const M={name:"ldtd",setup(){const a=y({res_data:w("")});v(()=>{e()});const e=()=>{h.get("/api/head/briefs/yywh").then(t=>{a.res_data=t.data})};return i({},j(a))}},N=r("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[r("strong",null,"\u533B\u9662\u6587\u5316")],-1),T=_("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=_("\u533B\u9662\u6587\u5316"),C=["innerHTML"];function H(a,e,t,L,z,E){const m=s("el-col"),p=s("el-row"),c=s("el-breadcrumb-item"),f=s("el-breadcrumb");return $(),k(B,null,[o(p,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(m,{span:24},{default:n(()=>[N]),_:1})]),_:1}),o(f,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(c,{to:{path:"/"}},{default:n(()=>[T]),_:1}),o(c,null,{default:n(()=>[V]),_:1})]),_:1}),r("span",{innerHTML:a.res_data.content},null,8,C)],64)}var D=x(M,[["render",H]]);export{D as default};
