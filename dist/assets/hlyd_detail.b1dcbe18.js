var y=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,u=(e,s)=>{for(var t in s||(s={}))b.call(s,t)&&p(e,t,s[t]);if(c)for(var t of c(s))x.call(s,t)&&p(e,t,s[t]);return e};import{a as v}from"./axios.d370dd02.js";import{al as M,u as T,a as H,r as L,o as j,t as w,c as r,d as B,ae as I,f as a,w as n,h as o,af as $,i as d,ai as k,aj as z}from"./vendor.3f1080f6.js";import{_ as N}from"./index.6a21959e.js";const R={name:"ldtd",setup(){const e=M();T();const{id:s}=e.query,t=H({res_data:L("")});j(()=>{i()});const i=()=>{v.get("/api/head/patientservices/show",{params:{id:s}}).then(_=>{t.res_data=_.data})};return u({},w(t))}},f=e=>(k("data-v-6e8ee2be"),e=e(),z(),e),S=f(()=>o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u62A4\u7406\u56ED\u5730")],-1)),V=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u62A4\u7406\u56ED\u5730"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=f(()=>o("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,s,t,i,_,Q){const m=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),I($,null,[a(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[a(m,{span:24},{default:n(()=>[S]),_:1})]),_:1}),a(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[a(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),a(l,null,{default:n(()=>[C]),_:1})]),_:1}),o("div",q,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),o("div",F,[A,o("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,o("span",{innerHTML:e.res_data.num},null,8,K)]),o("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-6e8ee2be"]]);export{Z as default};
