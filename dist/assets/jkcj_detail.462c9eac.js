var x=Object.defineProperty;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,a,t)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))b.call(a,t)&&p(e,t,a[t]);if(l)for(var t of l(a))y.call(a,t)&&p(e,t,a[t]);return e};import{a as v}from"./axios.284dbdd7.js";import{al as j,u as M,a as T,r as H,o as L,t as w,c as r,d as B,ae as k,f as o,w as n,h as s,af as I,i as d,ai as $,aj as N}from"./vendor.1fa6d093.js";import{_ as R}from"./index.2670055c.js";const S={name:"ldtd",setup(){const e=j();M();const{id:a}=e.query,t=T({res_data:H("")});L(()=>{i()});const i=()=>{v.get("/api/head/patientservices/show",{params:{id:a}}).then(_=>{t.res_data=_.data})};return u({},w(t))}},f=e=>($("data-v-74ff12aa"),e=e(),N(),e),V=f(()=>s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u5065\u5EB7\u4FC3\u8FDB")],-1)),z=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u5065\u5EB7\u4FC3\u8FDB"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>s("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,a,t,i,_,Q){const m=r("el-col"),h=r("el-row"),c=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),k(I,null,[o(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(m,{span:24},{default:n(()=>[V]),_:1})]),_:1}),o(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(c,{to:{path:"/"}},{default:n(()=>[z]),_:1}),o(c,null,{default:n(()=>[C]),_:1})]),_:1}),s("div",q,[s("strong",{innerHTML:e.res_data.title},null,8,E)]),s("div",F,[A,s("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,s("span",{innerHTML:e.res_data.num},null,8,K)]),s("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=R(S,[["render",P],["__scopeId","data-v-74ff12aa"]]);export{Z as default};
