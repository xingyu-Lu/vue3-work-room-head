var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))y.call(o,t)&&p(e,t,o[t]);if(c)for(var t of c(o))x.call(o,t)&&p(e,t,o[t]);return e};import{a as v}from"./axios.79692243.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as z,f as n,w as a,h as s,af as I,i,ai as $,aj as k}from"./vendor.4b31625a.js";import{_ as q}from"./index.9e3323e9.js";const N={name:"ldtd",setup(){const e=j();M();const{id:o}=e.query,t=T({res_data:H("")});L(()=>{d()});const d=()=>{v.get("/api/head/partys/show",{params:{id:o}}).then(_=>{t.res_data=_.data})};return u({},w(t))}},m=e=>($("data-v-20dc7b80"),e=e(),k(),e),R=m(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u9752\u5E74\u52A0\u6CB9\u7AD9")],-1)),S=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=i("\u9752\u5E74\u52A0\u6CB9\u7AD9"),C={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},A=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),J=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,o,t,d,_,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),z(I,null,[n(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[n(f,{span:24},{default:a(()=>[R]),_:1})]),_:1}),n(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[n(l,{to:{path:"/"}},{default:a(()=>[S]),_:1}),n(l,null,{default:a(()=>[V]),_:1})]),_:1}),s("div",C,[s("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,s("span",{innerHTML:e.res_data.num},null,8,K)]),s("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=q(N,[["render",P],["__scopeId","data-v-20dc7b80"]]);export{Z as default};
