var v=Object.defineProperty,C=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var y=(n,t,s)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,k=(n,t)=>{for(var s in t||(t={}))T.call(t,s)&&y(n,s,t[s]);if(g)for(var s of g(t))H.call(t,s)&&y(n,s,t[s]);return n},b=(n,t)=>C(n,M(t));import{a as L}from"./axios.c45b30f1.js";import{aj as w,u as B,a as N,r as V,a9 as z,t as R,aa as q,b as m,c as x,ab as h,e,w as o,f as l,af as D,ac as E,g as d,ae as F}from"./vendor.dd5dfc9e.js";import{_ as P}from"./index.70b8a1f5.js";const S={name:"ldtd",setup(){const n=w();B();const{id:t}=n.query,s=N({res_data:V("")});z(()=>{a()});const a=()=>{L.get("/api/head/offices/jkkp_detail",{params:{id:t}}).then(f=>{s.res_data=f.data})},p=f=>{window.open(f,"_blank")};return b(k({},R(s)),{go_detail:p,Plus:q,id:t})}},A=l("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[l("strong",null,"\u7279\u8272\u533B\u7597")],-1),G=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),I=d("\u79D1\u5BA4\u4ECB\u7ECD"),J=d("\u79D1\u5BA4\u52A8\u6001"),K=d("\u79D1\u5BA4\u533B\u751F"),O=d("\u79D1\u5BA4\u95E8\u8BCA"),Q=d("\u7279\u8272\u533B\u7597"),U=d("\u79D1\u5BA4\u56FE\u7247"),W=d("\u5065\u5EB7\u79D1\u666E"),X={style:{display:"flex","justify-content":"center"}},Y=["innerHTML"],Z={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px","margin-bottom":"20px"}},$=d(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),tt=["innerHTML"],et=l("span",null,"\xA0\xA0\xA0\xA0",-1),ot=d(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),nt=["innerHTML"],at=["innerHTML"];function st(n,t,s,a,p,f){const i=m("el-col"),c=m("el-row"),u=m("el-breadcrumb-item"),j=m("el-breadcrumb"),r=m("el-button");return x(),h(E,null,[e(c,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[e(i,{span:24},{default:o(()=>[A]),_:1})]),_:1}),e(j,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[e(u,{to:{path:"/"}},{default:o(()=>[G]),_:1}),e(u,null,{default:o(()=>[d(F(n.res_data.office_name),1)]),_:1})]),_:1}),e(c,{gutter:24,justify:"space-around",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:o(()=>[e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[0]||(t[0]=_=>a.go_detail("/ksjs_detail?id="+a.id))},{default:o(()=>[I]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[1]||(t[1]=_=>a.go_detail("/ksjs-ksdt?id="+a.id))},{default:o(()=>[J]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[2]||(t[2]=_=>a.go_detail("/ksjs-ksys?id="+a.id))},{default:o(()=>[K]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[3]||(t[3]=_=>a.go_detail("/ksmz?id="+a.id))},{default:o(()=>[O]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[4]||(t[4]=_=>a.go_detail("/kstsyl?id="+a.id))},{default:o(()=>[Q]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[5]||(t[5]=_=>a.go_detail("/kstp?id="+a.id))},{default:o(()=>[U]),_:1})]),_:1}),e(i,{md:3},{default:o(()=>[e(r,{type:"primary",onClick:t[6]||(t[6]=_=>a.go_detail("/ksjkkp?id="+a.id))},{default:o(()=>[W]),_:1})]),_:1})]),_:1}),l("div",X,[l("strong",{innerHTML:n.res_data.title},null,8,Y)]),l("div",Z,[$,l("span",{innerHTML:n.res_data.release_time},null,8,tt),et,ot,l("span",{innerHTML:n.res_data.num},null,8,nt)]),n.res_data.content?(x(),h("span",{key:0,innerHTML:n.res_data.content},null,8,at)):D("",!0)],64)}var _t=P(S,[["render",st]]);export{_t as default};
