var w=Object.defineProperty,z=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(o,e,a)=>e in o?w(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,y=(o,e)=>{for(var a in e||(e={}))B.call(e,a)&&b(o,a,e[a]);if(g)for(var a of g(e))N.call(e,a)&&b(o,a,e[a]);return o},x=(o,e)=>z(o,j(e));import{a as V}from"./axios.f4ea66cc.js";import{al as R,u as S,a as q,r as D,o as E,t as F,ad as G,c as _,d as m,ae as k,f as s,w as t,af as M,h as P,ah as T,g as h,e as A,i as d}from"./vendor.d1c66501.js";import{_ as H,l as v,b as I}from"./index.af27a8db.js";const J={name:"ldtd",setup(){const o=R();S();const{id:e}=o.query,a=q({res_data:D(""),column_list:[]});E(()=>{v("userinfo")?a.res_data=v("userinfo"):n()});const n=()=>{V.get("/api/head/staffs/info").then(r=>{a.res_data=r.data,I("userinfo",r.data)})},c=r=>{window.open(r,"_blank")};return x(y({},F(a)),{go_detail:c,Plus:G,id:e})}},K={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},L={key:0},O=d("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),Q=d("\u79D1\u5BA4\u8BBE\u7F6E"),U=d("\u79D1\u5BA4\u52A8\u6001"),W=d("\u79D1\u5BA4\u95E8\u8BCA"),X=d("\u79D1\u5BA4\u6210\u5458"),Y=d("\u680F\u76EE\u8BBE\u7F6E"),Z=d("\u79D1\u5BA4\u680F\u76EE");function $(o,e,a,n,c,r){const i=_("el-col"),u=_("el-row"),p=_("el-breadcrumb-item"),C=_("el-breadcrumb"),l=_("el-button");return m(),k(M,null,[s(u,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:t(()=>[s(i,{span:24},{default:t(()=>[P("div",K,[o.res_data.office?(m(),k("strong",L,T(o.res_data.office.office_name),1)):h("",!0)])]),_:1})]),_:1}),s(C,{separator:"/",style:{"margin-bottom":"20px"}},{default:t(()=>[s(p,{to:{path:"/"}},{default:t(()=>[O]),_:1}),s(p,null,{default:t(()=>[Q]),_:1})]),_:1}),s(u,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:t(()=>[s(i,{md:3},{default:t(()=>[s(l,{type:"primary",onClick:e[0]||(e[0]=f=>n.go_detail("/kssz-ksdt-index?id="+n.id))},{default:t(()=>[U]),_:1})]),_:1}),s(i,{md:3},{default:t(()=>[s(l,{type:"primary",onClick:e[1]||(e[1]=f=>n.go_detail("/kssz-outpatient-index?id="+n.id))},{default:t(()=>[W]),_:1})]),_:1}),o.res_data.office.is_head==1?(m(),A(i,{key:0,md:3},{default:t(()=>[s(l,{type:"primary",onClick:e[2]||(e[2]=f=>n.go_detail("/kssz-member-index?id="+n.id))},{default:t(()=>[X]),_:1})]),_:1})):h("",!0),s(i,{md:3},{default:t(()=>[s(l,{type:"primary",onClick:e[3]||(e[3]=f=>n.go_detail("/kssz-columnset-index?id="+n.id))},{default:t(()=>[Y]),_:1})]),_:1}),s(i,{md:3},{default:t(()=>[s(l,{type:"primary",onClick:e[4]||(e[4]=f=>n.go_detail("/kssz-column-index?id="+n.id))},{default:t(()=>[Z]),_:1})]),_:1})]),_:1})],64)}var se=H(J,[["render",$]]);export{se as default};
