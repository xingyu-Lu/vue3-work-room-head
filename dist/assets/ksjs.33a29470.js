var z=Object.defineProperty,D=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))F.call(t,o)&&v(e,o,t[o]);if(b)for(var o of b(t))L.call(t,o)&&v(e,o,t[o]);return e},C=(e,t)=>D(e,E(t));import{a as M}from"./axios.f77ce770.js";import{_ as R}from"./index.62cfd203.js";import{a as T,o as q,t as A,c as u,d as a,ae as s,f as p,w as n,af as d,ag as f,g as w,ai as G,aj as H,ah as g,e as x,h as m,i as I}from"./vendor.d3fef3b7.js";const J={name:"Introduce",setup(){const e=T({res_data:[],default_index:"all",index_arr:{all:"\u5168\u90E8",a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z"}});q(()=>{t()});const t=()=>{M.get("/api/head/offices/kejs",{params:{index:e.default_index}}).then(i=>{e.res_data=i.data})},o=i=>{window.open(i,"_blank")},l=i=>{e.default_index=i,t()};return C(j({},A(e)),{go_detail:o,search_index:l})}},B=e=>(G("data-v-2e929f60"),e=e(),H(),e),K=B(()=>m("div",{style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},[m("strong",null,"\u90E8\u95E8\u8BBE\u7F6E")],-1)),O=I("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),P=I("\u90E8\u95E8\u8BBE\u7F6E"),Q=B(()=>m("span",{style:{color:"#999"}},"\u7D22\u5F15\uFF1A",-1)),U=["onClick"],W=["onClick"],X={key:0},Y=["onClick"],Z={key:1},ee=["onClick"];function te(e,t,o,l,i,ae){const h=u("el-col"),k=u("el-row"),y=u("el-breadcrumb-item"),N=u("el-breadcrumb"),S=u("el-space");return a(),s(d,null,[p(k,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:n(()=>[p(h,{span:24},{default:n(()=>[K]),_:1})]),_:1}),p(N,{separator:"/",style:{"margin-bottom":"20px"}},{default:n(()=>[p(y,{to:{path:"/"}},{default:n(()=>[O]),_:1}),p(y,null,{default:n(()=>[P]),_:1})]),_:1}),Q,p(S,{wrap:"",spacer:"|",size:"default",style:{cursor:"pointer",color:"#444","margin-bottom":"5px"}},{default:n(()=>[(a(!0),s(d,null,f(e.index_arr,(_,c)=>(a(),s(d,{key:c},[c==e.default_index?(a(),s("span",{key:0,class:"active",onClick:r=>l.search_index(c)},g(_),9,U)):(a(),s("span",{key:1,onClick:r=>l.search_index(c)},g(_),9,W))],64))),128))]),_:1}),e.res_data&&e.res_data.index=="all"?(a(),s("div",X,[(a(!0),s(d,null,f(e.res_data.office_0,(_,c)=>(a(),x(k,{gutter:20,style:{"margin-bottom":"10px","margin-top":"10px"},justify:"start"},{default:n(()=>[(a(!0),s(d,null,f(_,(r,V)=>(a(),x(h,{sm:4,md:4},{default:n(()=>[m("strong",{style:{"margin-bottom":"20px",cursor:"pointer",color:"#409eff"},onClick:$=>l.go_detail("/ksjs_detail?id="+r.id)},g(r.name),9,Y)]),_:2},1024))),256))]),_:2},1024))),256))])):w("",!0),e.res_data&&e.res_data.index!="all"?(a(),s("div",Z,[(a(!0),s(d,null,f(e.res_data.search,(_,c)=>(a(),x(k,{gutter:20,style:{"margin-bottom":"10px","margin-top":"20px"},justify:"start"},{default:n(()=>[(a(!0),s(d,null,f(_,(r,V)=>(a(),x(h,{sm:4},{default:n(()=>[m("strong",{style:{"margin-bottom":"20px",cursor:"pointer",color:"#409eff"},onClick:$=>l.go_detail("/ksjs_detail?id="+r.id)},g(r.name),9,ee)]),_:2},1024))),256))]),_:2},1024))),256))])):w("",!0)],64)}var de=R(J,[["render",te],["__scopeId","data-v-2e929f60"]]);export{de as default};
