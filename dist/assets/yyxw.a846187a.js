var S=Object.defineProperty,B=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))V.call(t,a)&&y(e,a,t[a]);if(h)for(var a of h(t))$.call(t,a)&&y(e,a,t[a]);return e},b=(e,t)=>B(e,N(t));import{a as D}from"./axios.1b49a805.js";import{_ as E}from"./index.fa6848ce.js";import{a as F,o as I,t as L,ac as M,c as s,d as c,ad as v,f as n,w as o,ae as w,af as R,e as k,g as T,h as i,i as g,ag as p}from"./vendor.3ad3b1c7.js";const q={name:"Introduce",setup(){const e=F({res_data:[],total:0,currentPage:1,pageSize:10});I(()=>{t()});const t=()=>{D.get("/api/head/news/yyxw",{params:{page:e.currentPage,page_size:e.pageSize,type:0}}).then(r=>{e.res_data=r.data,e.pageSize=r.pagination.perPage,e.total=r.pagination.total,e.currentPage=r.pagination.currentPage})},a=r=>{e.currentPage=r,t()},d=r=>{window.open(r,"_blank")};return b(x({},L(e)),{changePage:a,go_detail:d,Plus:M})}},A=i("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[i("strong",null,"\u533B\u9662\u65B0\u95FB")],-1),G=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),H=g("\u533B\u9662\u65B0\u95FB"),J={style:{"line-height":"50px","margin-left":"40px"}},K={style:{"line-height":"18px"}};function O(e,t,a,d,r,Q){const _=s("el-col"),u=s("el-row"),m=s("el-breadcrumb-item"),P=s("el-breadcrumb"),C=s("el-image"),f=s("el-link"),z=s("el-pagination"),j=s("el-card");return c(),v(w,null,[n(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:o(()=>[n(_,{span:24},{default:o(()=>[A]),_:1})]),_:1}),n(P,{separator:"/",style:{"margin-bottom":"20px"}},{default:o(()=>[n(m,{to:{path:"/"}},{default:o(()=>[G]),_:1}),n(m,null,{default:o(()=>[H]),_:1})]),_:1}),n(j,{class:"box-card"},{default:o(()=>[(c(!0),v(w,null,R(e.res_data,(l,U)=>(c(),k(u,{gutter:20,style:{"margin-bottom":"20px"},justify:"space-around",align:"middle"},{default:o(()=>[n(_,{md:24},{default:o(()=>[n(u,{gutter:20},{default:o(()=>[n(_,{md:4},{default:o(()=>[l.img_url?(c(),k(C,{style:{width:"100%",height:"auto",cursor:"pointer"},src:l.img_url,key:l.img_url,onClick:W=>d.go_detail("/yyxw_detail?id="+l.id)},null,8,["src","onClick"])):T("",!0)]),_:2},1024),n(_,{md:20},{default:o(()=>[i("div",J,[i("div",null,[n(f,{underline:!1,href:"/yyxw_detail?id="+l.id,target:"_blank"},{default:o(()=>[g(p(l.title),1)]),_:2},1032,["href"])]),i("div",K,[i("span",null,p(l.strip_content),1)]),i("div",null,[n(f,{underline:!1,href:"/yyxw_detail?id="+l.id,target:"_blank"},{default:o(()=>[g(p(l.release_time),1)]),_:2},1032,["href"])])])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256)),n(z,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:d.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var te=E(q,[["render",O]]);export{te as default};
