var g=Object.defineProperty;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&p(e,t,n[t]);if(_)for(var t of _(n))x.call(n,t)&&p(e,t,n[t]);return e};import{a as y}from"./axios.1b49a805.js";import{ak as M,u as T,a as j,r as H,o as L,t as v,c as r,d as B,ad as w,f as o,w as a,h as s,ae as k,i}from"./vendor.3ad3b1c7.js";import{_ as $}from"./index.fa6848ce.js";const N={name:"ldtd",setup(){const e=M();T();const{id:n}=e.query,t=j({res_data:H("")});L(()=>{d()});const d=()=>{y.get("/api/head/scientifics/show",{params:{id:n}}).then(l=>{t.res_data=l.data})};return u({},v(t))}},R=s("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[s("strong",null,"\u7EE7\u7EED\u6559\u80B2")],-1),V=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),z=i("\u7EE7\u7EED\u6559\u80B2"),C={style:{display:"flex","justify-content":"center"}},q=["innerHTML"],E={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px"}},F=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),A=["innerHTML"],D=s("span",null,"\xA0\xA0\xA0\xA0",-1),G=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),I=["innerHTML"],J=["innerHTML"];function K(e,n,t,d,l,O){const m=r("el-col"),f=r("el-row"),c=r("el-breadcrumb-item"),h=r("el-breadcrumb");return B(),w(k,null,[o(f,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[o(m,{span:24},{default:a(()=>[R]),_:1})]),_:1}),o(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[o(c,{to:{path:"/"}},{default:a(()=>[V]),_:1}),o(c,null,{default:a(()=>[z]),_:1})]),_:1}),s("div",C,[s("strong",{innerHTML:e.res_data.title},null,8,q)]),s("div",E,[F,s("span",{innerHTML:e.res_data.release_time},null,8,A),D,G,s("span",{innerHTML:e.res_data.num},null,8,I)]),s("span",{innerHTML:e.res_data.content},null,8,J)],64)}var W=$(N,[["render",K]]);export{W as default};
