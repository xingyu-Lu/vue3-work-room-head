var L=Object.defineProperty,j=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))B.call(t,n)&&b(e,n,t[n]);if(y)for(var n of y(t))w.call(t,n)&&b(e,n,t[n]);return e},k=(e,t)=>j(e,v(t));import{a as M}from"./axios.284dbdd7.js";import{al as C,u as N,a as V,r as z,o as R,t as D,ad as $,c as r,d as _,ae as p,f as i,w as l,h as a,e as q,g,af as E,i as f,ah as T}from"./vendor.1fa6d093.js";import{_ as F}from"./index.2670055c.js";const P={name:"ldtd",setup(){const e=C();N();const{id:t,office_id:n,column_name:s,column_type:h}=e.query,c=V({office_info:"",res_data:z("")});R(()=>{u(),m()});const m=()=>{M.get("/api/head/offices/info",{params:{id:n}}).then(o=>{c.office_info=o.data})},u=()=>{M.get(`/api/head/offices/column/${t}`).then(o=>{c.res_data=o.data})},d=o=>{window.open(o,"_blank")};return k(x({},D(c)),{go_detail:d,Plus:$,column_name:s,column_type:h})}},S={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},A={key:0},G=f("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),I={style:{display:"flex","justify-content":"center"}},J=["innerHTML"],K={style:{display:"flex","justify-content":"center","font-size":"12px",color:"#5B5B5B","margin-top":"10px","margin-bottom":"10px"}},O=f(" \u53D1\u5E03\u65F6\u95F4\uFF1A"),Q=["innerHTML"],U=a("span",null,"\xA0\xA0\xA0\xA0",-1),W=f(" \u8BBF\u95EE\u6B21\u6570\uFF1A"),X=["innerHTML"],Y=["innerHTML"];function Z(e,t,n,s,h,c){const m=r("el-col"),u=r("el-row"),d=r("el-breadcrumb-item"),o=r("el-breadcrumb"),H=r("el-image");return _(),p(E,null,[i(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:l(()=>[i(m,{span:24},{default:l(()=>[a("div",S,[e.office_info?(_(),p("strong",A,T(e.office_info.name),1)):g("",!0)])]),_:1})]),_:1}),i(o,{separator:"/",style:{"margin-bottom":"20px"}},{default:l(()=>[i(d,{to:{path:"/"}},{default:l(()=>[G]),_:1}),i(d,null,{default:l(()=>[f(T(s.column_name),1)]),_:1})]),_:1}),a("div",I,[a("strong",{innerHTML:e.res_data.title},null,8,J)]),a("div",K,[O,a("span",{innerHTML:e.res_data.release_time},null,8,Q),U,W,a("span",{innerHTML:e.res_data.num},null,8,X)]),e.res_data.url&&s.column_type==1?(_(),q(H,{key:0,src:e.res_data.url,lazy:!0,"initial-index":1},null,8,["src"])):g("",!0),e.res_data&&s.column_type==0?(_(),p("span",{key:1,innerHTML:e.res_data.content},null,8,Y)):g("",!0)],64)}var ae=F(P,[["render",Z]]);export{ae as default};
