var b=Object.defineProperty;var c=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,o,t)=>o in e?b(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&p(e,t,o[t]);if(c)for(var t of c(o))y.call(o,t)&&p(e,t,o[t]);return e};import{a as v}from"./axios.da182a11.js";import{al as w,u as M,a as T,r as H,o as L,t as j,c as r,d as B,ae as I,f as s,w as n,h as a,af as $,i as d,ai as k,aj as z}from"./vendor.dfcff7c2.js";import{_ as N}from"./index.4e5c271a.js";const R={name:"ldtd",setup(){const e=w();M();const{id:o}=e.query,t=T({res_data:H("")});L(()=>{i()});const i=()=>{v.get("/api/head/partys/show",{params:{id:o}}).then(_=>{t.res_data=_.data})};return u({},j(t))}},m=e=>(k("data-v-2b38554a"),e=e(),z(),e),S=m(()=>a("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[a("strong",null,"\u515A\u52A1\u7BA1\u7406")],-1)),V=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),C=d("\u515A\u52A1\u7BA1\u7406"),q={style:{display:"flex","justify-content":"center"}},E=["innerHTML"],F={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"-10px","margin-bottom":"20px"}},A=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),D=["innerHTML"],G=m(()=>a("span",null,"\xA0\xA0\xA0\xA0",-1)),J=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),K=["innerHTML"],O=["innerHTML"];function P(e,o,t,i,_,Q){const f=r("el-col"),h=r("el-row"),l=r("el-breadcrumb-item"),g=r("el-breadcrumb");return B(),I($,null,[s(h,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[s(f,{span:24},{default:n(()=>[S]),_:1})]),_:1}),s(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[s(l,{to:{path:"/"}},{default:n(()=>[V]),_:1}),s(l,null,{default:n(()=>[C]),_:1})]),_:1}),a("div",q,[a("h1",{style:{"font-size":"30px",color:"#333","font-weight":"bold"},innerHTML:e.res_data.title},null,8,E)]),a("div",F,[A,a("span",{innerHTML:e.res_data.release_time},null,8,D),G,J,a("span",{innerHTML:e.res_data.num},null,8,K)]),a("span",{innerHTML:e.res_data.content},null,8,O)],64)}var Z=N(R,[["render",P],["__scopeId","data-v-2b38554a"]]);export{Z as default};
