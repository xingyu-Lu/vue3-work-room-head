var R=Object.defineProperty,S=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var B=(t,e,o)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,N=(t,e)=>{for(var o in e||(e={}))z.call(e,o)&&B(t,o,e[o]);if(w)for(var o of w(e))H.call(e,o)&&B(t,o,e[o]);return t},V=(t,e)=>S(t,T(e));import{al as q,u as D,a as E,r as F,o as G,t as I,ad as O,c as f,d as l,ae as u,f as d,w as i,af as b,ag as L,e as m,g as k,h as P,ah as x,i as p}from"./vendor.d3fef3b7.js";import{a as y}from"./axios.3bd01224.js";import{_ as A,b as J,l as v}from"./index.7c0342c7.js";const K={name:"ldtd",setup(){const t=q();D();const{id:e,column_name:o}=t.query,n=E({office_info:"",res_data:F(""),column_list:[],is_login:0,is_self:0});G(()=>{r(),_(),C(),j(),g(),h()});const j=()=>{y.get("/api/head/staffs/info").then(a=>{a.data&&(J("userinfo",a.data),a.data.office.office_id==e&&(n.is_self=1))})},C=()=>{y.get("/api/head/offices/info",{params:{id:e}}).then(a=>{n.office_info=a.data})},r=()=>{y.get("/api/head/offices/ksjs_detail",{params:{id:e}}).then(a=>{n.res_data=a.data})},_=()=>{y.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:e}}).then(a=>{n.column_list=a.data})},g=()=>{v("token")&&(n.is_login=1)},h=()=>{v("userinfo")&&v("userinfo").office.office_id==e&&(n.is_self=1)},c=a=>{window.open(a,"_self")};return V(N({},I(n)),{go_detail:c,Plus:O,id:e,column_name:o})}},Q={style:{height:"150px","align-items":"center","justify-content":"center",display:"flex","font-size":"48px","letter-spacing":"0.2em",color:"#fff"}},U={key:0},W=p("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),X=p("\u90E8\u95E8\u4ECB\u7ECD"),Y=p("\u90E8\u95E8\u8BBE\u7F6E"),Z=["innerHTML"];function $(t,e,o,n,j,C){const r=f("el-col"),_=f("el-row"),g=f("el-breadcrumb-item"),h=f("el-breadcrumb"),c=f("el-button");return l(),u(b,null,[d(_,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:i(()=>[d(r,{span:24},{default:i(()=>[P("div",Q,[t.office_info?(l(),u("strong",U,x(t.office_info.name),1)):k("",!0)])]),_:1})]),_:1}),d(h,{separator:"/",style:{"margin-bottom":"20px"}},{default:i(()=>[d(g,{to:{path:"/"}},{default:i(()=>[W]),_:1}),d(g,null,{default:i(()=>[X]),_:1})]),_:1}),(l(!0),u(b,null,L(t.column_list,(a,ee)=>(l(),m(_,{gutter:18,justify:"start",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:i(()=>[(l(!0),u(b,null,L(a,(s,te)=>(l(),m(r,{sm:4},{default:i(()=>[n.column_name==s.name||s.name=="\u90E8\u95E8\u4ECB\u7ECD"&&n.column_name==null||s.name=="\u4ECB\u7ECD"&&n.column_name==null?(l(),m(c,{key:0,type:"primary",onClick:M=>n.go_detail(s.url+"?id="+n.id+"&column_id="+s.id+"&column_name="+s.name+"&column_type="+s.type)},{default:i(()=>[p(x(s.name),1)]),_:2},1032,["onClick"])):(l(),m(c,{key:1,onClick:M=>n.go_detail(s.url+"?id="+n.id+"&column_id="+s.id+"&column_name="+s.name+"&column_type="+s.type)},{default:i(()=>[p(x(s.name),1)]),_:2},1032,["onClick"]))]),_:2},1024))),256))]),_:2},1024))),256)),t.is_login&&t.is_self?(l(),m(_,{key:0,gutter:24,justify:"start",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:i(()=>[d(r,{sm:3},{default:i(()=>[d(c,{type:"primary",onClick:e[0]||(e[0]=a=>n.go_detail("/kssz?id="+n.id))},{default:i(()=>[Y]),_:1})]),_:1})]),_:1})):k("",!0),t.res_data?(l(),u("span",{key:1,innerHTML:t.res_data.content},null,8,Z)):k("",!0)],64)}var ie=A(K,[["render",$],["__scopeId","data-v-50575109"]]);export{ie as default};
