var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))x.call(s,t)&&p(e,t,s[t]);if(c)for(var t of c(s))b.call(s,t)&&p(e,t,s[t]);return e};import{a as v}from"./axios.5970783a.js";import{ak as M,u as T,a as H,r as L,o as j,t as w,c as r,d as B,ad as k,f as o,w as n,h as a,ae as I,i as d,ah as $,ai as N}from"./vendor.954c4224.js";import{_ as R}from"./index.85678b9f.js";const S={name:"ldtd",setup(){const e=M();T();const{id:s}=e.query,t=H({res_data:L("")});j(()=>{_()});const _=()=>{v.get("/api/head/partys/show",{params:{id:s}}).then(i=>{t.res_data=i.data})};return u({},w(t))}},f=e=>($("data-v-f6606666"),e=e(),N(),e),V=f(()=>a("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[a("strong",null,"\u533B\u5FB7\u533B\u98CE")],-1)),z=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u533B\u5FB7\u533B\u98CE"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,s,t,_,i,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),k(I,null,[o(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[o(m,{span:24},{default:n(()=>[V]),_:1})]),_:1}),o(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[o(l,{to:{path:"/"}},{default:n(()=>[z]),_:1}),o(l,null,{default:n(()=>[C]),_:1})]),_:1}),a("div",q,[a("strong",{innerHTML:e.res_data.title},null,8,E)]),a("div",F,[A,a("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,a("span",{innerHTML:e.res_data.num},null,8,K)]),a("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=R(S,[["render",P],["__scopeId","data-v-f6606666"]]);export{Z as default};
