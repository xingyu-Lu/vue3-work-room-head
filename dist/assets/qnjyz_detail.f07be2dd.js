var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))b.call(s,t)&&p(e,t,s[t]);if(c)for(var t of c(s))x.call(s,t)&&p(e,t,s[t]);return e};import{a as v}from"./axios.29fc48e7.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as z,f as n,w as o,h as a,af as I,i as d,ai as $,aj as k}from"./vendor.3f1080f6.js";import{_ as q}from"./index.61a9fb9d.js";const N={name:"ldtd",setup(){const e=j();M();const{id:s}=e.query,t=T({res_data:H("")});L(()=>{_()});const _=()=>{v.get("/api/head/partys/show",{params:{id:s}}).then(i=>{t.res_data=i.data})};return u({},w(t))}},f=e=>($("data-v-4558dfb1"),e=e(),k(),e),R=f(()=>a("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[a("strong",null,"\u9752\u5E74\u52A0\u6CB9\u7AD9")],-1)),S=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=d("\u9752\u5E74\u52A0\u6CB9\u7AD9"),C={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,s,t,_,i,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),z(I,null,[n(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(m,{span:24},{default:o(()=>[R]),_:1})]),_:1}),n(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(l,{to:{path:"/"}},{default:o(()=>[S]),_:1}),n(l,null,{default:o(()=>[V]),_:1})]),_:1}),a("div",C,[a("strong",{innerHTML:e.res_data.title},null,8,E)]),a("div",F,[A,a("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,a("span",{innerHTML:e.res_data.num},null,8,K)]),a("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=q(N,[["render",P],["__scopeId","data-v-4558dfb1"]]);export{Z as default};
