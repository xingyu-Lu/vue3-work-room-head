var I=Object.defineProperty,N=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,y=(e,t)=>{for(var s in t||(t={}))V.call(t,s)&&g(e,s,t[s]);if(h)for(var s of h(t))$.call(t,s)&&g(e,s,t[s]);return e},b=(e,t)=>N(e,S(t));import{al as B,u as C,a as M,r as R,o as T,t as H,ad as q,c as n,d,ae as l,f as a,w as i,h as o,ah as _,g as v,af as z,ai as D,aj as E,i as k}from"./vendor.0774305f.js";import{a as F}from"./axios.e8c7a5a3.js";import{_ as P}from"./index.b35828bc.js";const A={name:"ldtd",setup(){const e=B();C();const{id:t}=e.query,s=M({office_info:"",res_data:R(""),srcList:[]});T(()=>{p()});const p=()=>{F.get("/api/head/offices/ksys_detail",{params:{id:t}}).then(r=>{s.res_data=r.data,s.srcList=[r.data.img_url]})},u=r=>{window.open(r,"_blank")};return b(y({},H(s)),{go_detail:u,Plus:q,id:t})}},c=e=>(D("data-v-35b26f50"),e=e(),E(),e),G={style:{height:"150px","align-items":"center","justify-content":"center",display:"flex","font-size":"48px","letter-spacing":"0.2em",color:"#fff"}},J={key:0},K=k("\u4E09\u6C5F\u540D\u533B\u5DE5\u4F5C\u5BA4"),O=k("\u90E8\u95E8\u533B\u751F"),Q={style:{display:"flex","justify-content":"center"}},U={style:{"line-height":"32px"}},W=c(()=>o("span",{style:{color:"#999"}},"\u59D3\u540D\uFF1A",-1)),X={style:{color:"rgb(64 158 255)"}},Y=c(()=>o("span",{style:{color:"#999"}},"\u804C\u79F0\uFF1A",-1)),Z={style:{color:"#444"}},ee=c(()=>o("h2",{style:{color:"#555"}}," \u533B\u751F\u4ECB\u7ECD ",-1)),te=["innerHTML"];function se(e,t,s,p,u,r){const w=n("el-col"),j=n("el-row"),m=n("el-breadcrumb-item"),x=n("el-breadcrumb"),L=n("el-image"),f=n("el-divider");return d(),l(z,null,[a(j,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:i(()=>[a(w,{span:24},{default:i(()=>[o("div",G,[e.res_data?(d(),l("strong",J,_(e.res_data.office_name),1)):v("",!0)])]),_:1})]),_:1}),a(x,{separator:"/",style:{"margin-bottom":"20px"}},{default:i(()=>[a(m,{to:{path:"/"}},{default:i(()=>[K]),_:1}),a(m,null,{default:i(()=>[O]),_:1})]),_:1}),o("div",null,[o("div",Q,[a(L,{style:{width:"15%"},src:e.res_data.img_url,"preview-src-list":e.srcList,"hide-on-click-modal":!0},null,8,["src","preview-src-list"])]),o("div",U,[o("div",null,[W,o("strong",X,_(e.res_data.name),1)]),o("div",null,[Y,o("span",Z,_(e.res_data.professional),1)])])]),a(f),ee,a(f),e.res_data.content?(d(),l("span",{key:0,innerHTML:e.res_data.content},null,8,te)):v("",!0)],64)}var ie=P(A,[["render",se],["__scopeId","data-v-35b26f50"]]);export{ie as default};
