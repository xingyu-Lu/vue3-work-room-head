var N=Object.defineProperty,V=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(l,e,n)=>e in l?N(l,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[e]=n,v=(l,e)=>{for(var n in e||(e={}))q.call(e,n)&&h(l,n,e[n]);if(b)for(var n of b(e))D.call(e,n)&&h(l,n,e[n]);return l},x=(l,e)=>V(l,R(e));import{a as E}from"./axios.1b49a805.js";import{ak as F,u as L,a as M,r as T,o as A,t as G,ac as H,c as s,d as c,ad as C,f as t,w as a,ae as j,i as r,ag as f,af as I,e as P,g as J,h as g}from"./vendor.3ad3b1c7.js";import{_ as K}from"./index.fa6848ce.js";const O={name:"ldtd",setup(){const l=F();L();const{id:e}=l.query,n=M({office_name:"",res_data:T(""),total:0,currentPage:1,pageSize:10});A(()=>{i()});const i=()=>{E.get("/api/head/offices/ksdt",{params:{id:e,page:n.currentPage,page_size:n.pageSize}}).then(o=>{n.res_data=o.data,n.pageSize=o.pagination.perPage,n.total=o.pagination.total,n.currentPage=o.pagination.currentPage,n.office_name=o.data[0].office_name})},p=o=>{n.currentPage=o,i()},m=o=>{window.open(o,"_blank")};return x(v({},G(n)),{changePage:p,go_detail:m,Plus:H,id:e})}},Q=g("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[g("strong",null,"\u79D1\u5BA4\u52A8\u6001")],-1),U=r("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),W=r("\u79D1\u5BA4\u4ECB\u7ECD"),X=r("\u79D1\u5BA4\u52A8\u6001"),Y=r("\u79D1\u5BA4\u533B\u751F"),Z=r("\u79D1\u5BA4\u95E8\u8BCA"),$=r("\u7279\u8272\u533B\u7597"),ee=r("\u79D1\u5BA4\u56FE\u7247"),te=r("\u5065\u5EB7\u79D1\u666E"),ae={style:{"line-height":"50px","margin-left":"40px"}},ne={style:{"line-height":"18px"}};function oe(l,e,n,i,p,m){const o=s("el-col"),u=s("el-row"),k=s("el-breadcrumb-item"),z=s("el-breadcrumb"),_=s("el-button"),w=s("el-image"),y=s("el-link"),S=s("el-pagination"),B=s("el-card");return c(),C(j,null,[t(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:a(()=>[t(o,{span:24},{default:a(()=>[Q]),_:1})]),_:1}),t(z,{separator:"/",style:{"margin-bottom":"20px"}},{default:a(()=>[t(k,{to:{path:"/"}},{default:a(()=>[U]),_:1}),t(k,null,{default:a(()=>[r(f(l.office_name),1)]),_:1})]),_:1}),t(u,{gutter:24,justify:"space-around",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:a(()=>[t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[0]||(e[0]=d=>i.go_detail("/ksjs_detail?id="+i.id))},{default:a(()=>[W]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[1]||(e[1]=d=>i.go_detail("/ksjs-ksdt?id="+i.id))},{default:a(()=>[X]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[2]||(e[2]=d=>i.go_detail("/ksjs-ksys?id="+i.id))},{default:a(()=>[Y]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[3]||(e[3]=d=>i.go_detail("/ksmz?id="+i.id))},{default:a(()=>[Z]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[4]||(e[4]=d=>i.go_detail("/kstsyl?id="+i.id))},{default:a(()=>[$]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[5]||(e[5]=d=>i.go_detail("/kstp?id="+i.id))},{default:a(()=>[ee]),_:1})]),_:1}),t(o,{md:3},{default:a(()=>[t(_,{type:"primary",onClick:e[6]||(e[6]=d=>i.go_detail("/ksjkkp?id="+i.id))},{default:a(()=>[te]),_:1})]),_:1})]),_:1}),t(B,{class:"box-card"},{default:a(()=>[(c(!0),C(j,null,I(l.res_data,(d,ie)=>(c(),P(u,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-around",align:"middle"},{default:a(()=>[t(o,{md:24},{default:a(()=>[t(u,{gutter:20},{default:a(()=>[t(o,{md:4},{default:a(()=>[d.img_url?(c(),P(w,{style:{width:"100%",height:"auto",cursor:"pointer"},src:d.img_url,key:d.img_url,onClick:le=>i.go_detail("/ksjs_dt_detail?id="+d.id)},null,8,["src","onClick"])):J("",!0)]),_:2},1024),t(o,{md:20},{default:a(()=>[g("div",ae,[g("div",null,[t(y,{underline:!1,href:"/ksjs_dt_detail?id="+d.id,target:"_blank"},{default:a(()=>[r(f(d.title),1)]),_:2},1032,["href"])]),g("div",ne,[g("span",null,f(d.strip_content),1)]),g("div",null,[t(y,{underline:!1,href:"/ksjs_dt_detail?id="+d.id,target:"_blank"},{default:a(()=>[r(f(d.release_time),1)]),_:2},1032,["href"])])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),t(S,{background:"",layout:"prev, pager, next",total:l.total,"page-size":l.pageSize,"current-page":l.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var ge=K(O,[["render",oe]]);export{ge as default};
