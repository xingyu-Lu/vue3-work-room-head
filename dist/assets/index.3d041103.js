var S=Object.defineProperty,$=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(t,a,e)=>a in t?S(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,v=(t,a)=>{for(var e in a||(a={}))z.call(a,e)&&k(t,e,a[e]);if(y)for(var e of y(a))D.call(a,e)&&k(t,e,a[e]);return t},w=(t,a)=>$(t,q(a));import{al as E,u as F,a as G,r as L,o as M,t as O,ad as P,c,d as s,ae as _,f as i,w as o,af as m,ag as C,h as T,ah as p,g as A,e as f,i as u}from"./vendor.d3fef3b7.js";import{a as j}from"./axios.56cbeb3b.js";import{_ as H,l as B,b as I}from"./index.cd1ccb06.js";const J={name:"ldtd",setup(){const t=E();F();const{id:a}=t.query,e=G({current_name:"",res_data:L(""),column_list:[],technical_office_set_list:[]});M(()=>{B("userinfo")?e.res_data=B("userinfo"):g(),l()});const l=()=>{j.get("/api/head/technicalOfficeSets",{params:{id:a}}).then(n=>{e.technical_office_set_list=n.data})},g=()=>{j.get("/api/head/staffs/info").then(n=>{e.res_data=n.data,I("userinfo",n.data)})},b=(n,d)=>{e.current_name=d,window.open(n,"_blank")};return w(v({},O(e)),{go_detail:b,Plus:P,id:a})}},K={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},Q={key:0},U=u("\u4E09\u6C5F\u540D\u533B\u5DE5\u4F5C\u5BA4"),W=u("\u90E8\u95E8\u8BBE\u7F6E");function X(t,a,e,l,g,b){const n=c("el-col"),d=c("el-row"),h=c("el-breadcrumb-item"),N=c("el-breadcrumb"),x=c("el-button");return s(),_(m,null,[i(d,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[i(n,{span:24},{default:o(()=>[T("div",K,[t.res_data.office?(s(),_("strong",Q,p(t.res_data.office.office_name),1)):A("",!0)])]),_:1})]),_:1}),i(N,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[i(h,{to:{path:"/"}},{default:o(()=>[U]),_:1}),i(h,null,{default:o(()=>[W]),_:1})]),_:1}),(s(!0),_(m,null,C(t.technical_office_set_list,(V,Y)=>(s(),f(d,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:o(()=>[(s(!0),_(m,null,C(V,(r,Z)=>(s(),f(n,{sm:4},{default:o(()=>[t.current_name==r.name?(s(),f(x,{key:0,type:"primary",onClick:R=>l.go_detail(r.url+l.id,r.name)},{default:o(()=>[u(p(r.name),1)]),_:2},1032,["onClick"])):(s(),f(x,{key:1,onClick:R=>l.go_detail(r.url+l.id,r.name)},{default:o(()=>[u(p(r.name),1)]),_:2},1032,["onClick"]))]),_:2},1024))),256))]),_:2},1024))),256))],64)}var oe=H(J,[["render",X]]);export{oe as default};
