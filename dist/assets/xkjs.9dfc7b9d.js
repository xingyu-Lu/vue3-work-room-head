var j=Object.defineProperty,C=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&f(e,a,t[a]);if(u)for(var a of u(t))F.call(t,a)&&f(e,a,t[a]);return e},h=(e,t)=>C(e,S(t));import{a as N}from"./axios.ce2b6bcc.js";import{_ as V}from"./index.fd29aabf.js";import{a as $,o as E,t as D,ad as L,c as r,d as p,ae as d,f as o,w as s,af as b,h as l,ag as M,i as _,ah as x}from"./vendor.3f1080f6.js";const R={setup(){const e=$({res_data:[],total:0,currentPage:1,pageSize:10});E(()=>{t()});const t=()=>{N.get("/api/head/scientifics/index",{params:{page:e.currentPage,page_size:e.pageSize,type:1}}).then(n=>{e.res_data=n.data,e.pageSize=n.pagination.perPage,e.total=n.pagination.total,e.currentPage=n.pagination.currentPage})},a=n=>{e.currentPage=n,t()},i=n=>{window.open(n,"_blank")};return h(m({},D(e)),{changePage:a,go_detail:i,Plus:L})}},T=l("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[l("strong",null,"\u5B66\u79D1\u5EFA\u8BBE")],-1),q=_("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),A=_("\u5B66\u79D1\u5EFA\u8BBE"),G={style:{color:"#409EFF","line-height":"38px"}},H={style:{display:"flex","justify-content":"space-between"}},I={style:{color:"#999"}};function J(e,t,a,i,n,K){const y=r("el-col"),k=r("el-row"),g=r("el-breadcrumb-item"),P=r("el-breadcrumb"),z=r("el-link"),v=r("el-pagination"),w=r("el-card");return p(),d(b,null,[o(k,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[o(y,{span:24},{default:s(()=>[T]),_:1})]),_:1}),o(P,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[o(g,{to:{path:"/"}},{default:s(()=>[q]),_:1}),o(g,null,{default:s(()=>[A]),_:1})]),_:1}),o(w,null,{default:s(()=>[l("ul",G,[(p(!0),d(b,null,M(e.res_data,(c,O)=>(p(),d("li",null,[l("div",H,[o(z,{style:{"font-size":"16px"},href:"/kydt_detail?id="+c.id,target:"_blank",type:"primary",underline:!1},{default:s(()=>[_(x(c.title)+"\u200B",1)]),_:2},1032,["href"]),l("span",I,x(c.release_time),1)])]))),256))]),o(v,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:i.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var Y=V(R,[["render",J]]);export{Y as default};
