var M=Object.defineProperty,R=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var C=(t,e,o)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,B=(t,e)=>{for(var o in e||(e={}))T.call(e,o)&&C(t,o,e[o]);if(v)for(var o of v(e))z.call(e,o)&&C(t,o,e[o]);return t},N=(t,e)=>R(t,S(e));import{a as m}from"./axios.88ac8437.js";import{al as H,u as $,a as q,r as D,o as E,t as F,ad as G,c,d as s,ae as _,f as i,w as n,af as h,ag as V,e as b,g as y,h as O,ah as L,i as p}from"./vendor.1fa6d093.js";import{_ as P,b as A,l as k}from"./index.7d1985a3.js";const I={name:"ldtd",setup(){const t=H();$();const{id:e}=t.query,o=q({office_info:"",res_data:D(""),column_list:[],is_login:0,is_self:0});E(()=>{j(),r(),x(),l(),d(),u()});const l=()=>{m.get("/api/head/staffs/info").then(a=>{A("userinfo",a.data),a.data.office.is_self==e&&(o.is_self=1)})},x=()=>{m.get("/api/head/offices/info",{params:{id:e}}).then(a=>{o.office_info=a.data})},j=()=>{m.get("/api/head/offices/ksjs_detail",{params:{id:e}}).then(a=>{o.res_data=a.data})},r=()=>{m.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:e}}).then(a=>{o.column_list=a.data})},d=()=>{k("token")&&(o.is_login=1)},u=()=>{k("userinfo")&&k("userinfo").office.office_id==e&&(o.is_self=1)},g=a=>{window.open(a,"_blank")};return N(B({},F(o)),{go_detail:g,Plus:G,id:e})}},J={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},K={key:0},Q=p("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),U=p("\u79D1\u5BA4\u4ECB\u7ECD"),W=p("\u79D1\u5BA4\u8BBE\u7F6E"),X=["innerHTML"];function Y(t,e,o,l,x,j){const r=c("el-col"),d=c("el-row"),u=c("el-breadcrumb-item"),g=c("el-breadcrumb"),a=c("el-button");return s(),_(h,null,[i(d,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[i(r,{span:24},{default:n(()=>[O("div",J,[t.office_info?(s(),_("strong",K,L(t.office_info.name),1)):y("",!0)])]),_:1})]),_:1}),i(g,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[i(u,{to:{path:"/"}},{default:n(()=>[Q]),_:1}),i(u,null,{default:n(()=>[U]),_:1})]),_:1}),(s(!0),_(h,null,V(t.column_list,(w,Z)=>(s(),b(d,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[(s(!0),_(h,null,V(w,(f,ee)=>(s(),b(r,{sm:3},{default:n(()=>[i(a,{type:"primary",onClick:te=>l.go_detail(f.url+"?id="+l.id+"&column_id="+f.id+"&column_name="+f.name+"&column_type="+f.type)},{default:n(()=>[p(L(f.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(s(),b(d,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:n(()=>[i(r,{sm:3},{default:n(()=>[i(a,{type:"primary",onClick:e[0]||(e[0]=w=>l.go_detail("/kssz?id="+l.id))},{default:n(()=>[W]),_:1})]),_:1})]),_:1})):y("",!0),t.res_data?(s(),_("span",{key:1,innerHTML:t.res_data.content},null,8,X)):y("",!0)],64)}var ie=P(I,[["render",Y]]);export{ie as default};
