var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&p(e,t,a[t]);if(c)for(var t of c(a))b.call(a,t)&&p(e,t,a[t]);return e};import{a as v}from"./axios.d370dd02.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as z,f as s,w as n,h as o,af as I,i as d,ai as $,aj as k}from"./vendor.3f1080f6.js";import{_ as q}from"./index.6a21959e.js";const N={name:"ldtd",setup(){const e=j();M();const{id:a}=e.query,t=T({res_data:H("")});L(()=>{i()});const i=()=>{v.get("/api/head/partys/show",{params:{id:a}}).then(_=>{t.res_data=_.data})};return u({},w(t))}},f=e=>($("data-v-5aea4994"),e=e(),k(),e),R=f(()=>o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u9752\u5E74\u52A0\u6CB9\u7AD9")],-1)),S=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=d("\u9752\u5E74\u52A0\u6CB9\u7AD9"),C={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,a,t,i,_,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),z(I,null,[s(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[s(m,{span:24},{default:n(()=>[R]),_:1})]),_:1}),s(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[s(l,{to:{path:"/"}},{default:n(()=>[S]),_:1}),s(l,null,{default:n(()=>[V]),_:1})]),_:1}),o("div",C,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),o("div",F,[A,o("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,o("span",{innerHTML:e.res_data.num},null,8,K)]),o("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=q(N,[["render",P],["__scopeId","data-v-5aea4994"]]);export{Z as default};
