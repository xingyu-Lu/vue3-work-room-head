var x=Object.defineProperty,h=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var l=(e,t,a)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&l(e,a,t[a]);if(d)for(var a of d(t))k.call(t,a)&&l(e,a,t[a]);return e},i=(e,t)=>h(e,v(t));import{al as j,u as w,a as N,o as V,t as $,ad as z,c as n,d as _,ae as m,f as o,w as s,g as B,af as C,h as u,i as p}from"./vendor.d3fef3b7.js";import{a as M}from"./axios.81b500ed.js";import{_ as R}from"./index.897d101a.js";const T={name:"ldtd",setup(){j(),w();const e=N({res_data:[]});V(()=>{t()});const t=()=>{M.get("/api/head/offices/ksmz").then(a=>{e.res_data=a.data})};return i(c({},$(e)),{Plus:z})}},H=u("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[u("strong",null,"\u51FA\u8BCA\u4FE1\u606F")],-1),L=p("\u4E09\u6C5F\u540D\u533B\u5DE5\u4F5C\u5BA4"),E=p("\u51FA\u8BCA\u4FE1\u606F"),F=["innerHTML"];function P(e,t,a,q,A,D){const f=n("el-col"),g=n("el-row"),r=n("el-breadcrumb-item"),b=n("el-breadcrumb");return _(),m(C,null,[o(g,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[o(f,{span:24},{default:s(()=>[H]),_:1})]),_:1}),o(b,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[o(r,{to:{path:"/"}},{default:s(()=>[L]),_:1}),o(r,null,{default:s(()=>[E]),_:1})]),_:1}),e.res_data?(_(),m("div",{key:0,innerHTML:e.res_data.content},null,8,F)):B("",!0)],64)}var O=R(T,[["render",P]]);export{O as default};
