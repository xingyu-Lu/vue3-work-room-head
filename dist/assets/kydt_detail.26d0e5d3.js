var g=Object.defineProperty;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(e,n,t)=>n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))b.call(n,t)&&p(e,t,n[t]);if(_)for(var t of _(n))x.call(n,t)&&p(e,t,n[t]);return e};import{a as y}from"./axios.d70dc4b9.js";import{al as M,u as T,a as H,r as L,o as v,t as j,c as r,d as w,ae as B,f as s,w as a,h as o,af as k,i}from"./vendor.3f1080f6.js";import{_ as $}from"./index.a221419f.js";const z={name:"ldtd",setup(){const e=M();T();const{id:n}=e.query,t=H({res_data:L("")});v(()=>{l()});const l=()=>{y.get("/api/head/scientifics/show",{params:{id:n}}).then(d=>{t.res_data=d.data})};return u({},j(t))}},N=o("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[o("strong",null,"\u79D1\u7814\u52A8\u6001")],-1),R=i("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),V=i("\u79D1\u7814\u52A8\u6001"),C={style:{display:"flex","justify-content":"center"}},q=["innerHTML"],E={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},F=i(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),A=["innerHTML"],D=o("span",null,"\xA0\xA0\xA0\xA0",-1),G=i(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),I=["innerHTML"],J=["innerHTML"];function K(e,n,t,l,d,O){const f=r("el-col"),m=r("el-row"),c=r("el-breadcrumb-item"),h=r("el-breadcrumb");return w(),B(k,null,[s(m,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[s(f,{span:24},{default:a(()=>[N]),_:1})]),_:1}),s(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[s(c,{to:{path:"/"}},{default:a(()=>[R]),_:1}),s(c,null,{default:a(()=>[V]),_:1})]),_:1}),o("div",C,[o("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,q)]),o("div",E,[F,o("span",{innerHTML:e.res_data.release_time},null,8,A),D,G,o("span",{innerHTML:e.res_data.num},null,8,I)]),o("span",{innerHTML:e.res_data.content},null,8,J)],64)}var W=$(z,[["render",K]]);export{W as default};
