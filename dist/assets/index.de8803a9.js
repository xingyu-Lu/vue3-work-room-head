var E=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var w=(a,o,s)=>o in a?E(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,v=(a,o)=>{for(var s in o||(o={}))R.call(o,s)&&w(a,s,o[s]);if(C)for(var s of C(o))F.call(o,s)&&w(a,s,o[s]);return a},x=(a,o)=>N(a,O(o));import{al as U,u as G,a as L,o as M,t as T,ad as H,c as d,am as I,d as c,ae as p,f as t,w as i,af as J,h as f,ah as K,g as Q,an as W,e as P,i as _}from"./vendor.d3fef3b7.js";import{a as z}from"./axios.81b500ed.js";import{_ as X,l as V,b as Y}from"./index.897d101a.js";const Z={name:"dynamin_index",setup(){const a=U(),o=G(),{id:s}=a.query,e=L({res_data:"",column_name:"",title:"",loading:!1,tableData:[],total:0,currentPage:1,pageSize:10});M(()=>{m(),V("userinfo")?e.res_data=V("userinfo"):k()});const k=()=>{z.get("/api/head/staffs/info").then(n=>{e.res_data=n.data,Y("userinfo",n.data)})},m=()=>{e.loading=!0,z.get("/api/head/technicalOfficeColumns",{params:{page:e.currentPage,page_size:e.pageSize,column_name:e.column_name,title:e.title}}).then(n=>{e.tableData=n.data,e.pageSize=n.pagination.perPage,e.total=n.pagination.total,e.currentPage=n.pagination.currentPage,e.loading=!1})},h=()=>{e.currentPage=1,m()},b=n=>{e.currentPage=n,m()},u=n=>{o.push({path:"/kssz-column-add",query:{office_id:n}})},y=(n,l)=>{o.push({path:"/kssz-column-add",query:{id:n,office_id:l}})},g=(n,l)=>{o.push({path:"/kssz-column-preview",query:{id:n,office_id:l}})};return x(v({},T(e)),{handleOption:h,changePage:b,handleAdd:u,handleEdit:y,handlePreview:g,Plus:H,id:s})}},$={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},ee={key:0},te=_("\u4E09\u6C5F\u540D\u533B\u5DE5\u4F5C\u5BA4"),ae=_("\u90E8\u95E8\u8BBE\u7F6E"),oe=_("\u90E8\u95E8\u680F\u76EE"),ne=_("\u65B0\u589E"),le=_("\u641C\u7D22"),re={key:1},ie={key:0,style:{color:"#67C23A"}},se={key:1,style:{color:"#E6A23C"}},de={key:2,style:{color:"#F56C6C"}},ce=["onClick"],pe=["onClick"];function ue(a,o,s,e,k,m){const h=d("el-col"),b=d("el-row"),u=d("el-breadcrumb-item"),y=d("el-breadcrumb"),g=d("el-button"),n=d("el-input"),l=d("el-table-column"),D=d("el-image"),S=d("el-table"),q=d("el-pagination"),j=d("el-card"),A=I("loading");return c(),p(J,null,[t(b,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:i(()=>[t(h,{span:24},{default:i(()=>[f("div",$,[a.res_data.office?(c(),p("strong",ee,K(a.res_data.office.office_name),1)):Q("",!0)])]),_:1})]),_:1}),t(y,{separator:"/",style:{"margin-bottom":"20px"}},{default:i(()=>[t(u,{to:{path:"/"}},{default:i(()=>[te]),_:1}),t(u,{to:{path:"/kssz",query:{id:e.id}}},{default:i(()=>[ae]),_:1},8,["to"]),t(u,null,{default:i(()=>[oe]),_:1})]),_:1}),t(j,{style:{"min-height":"100%"}},{header:i(()=>[t(g,{type:"primary",icon:e.Plus,onClick:o[0]||(o[0]=r=>e.handleAdd(e.id))},{default:i(()=>[ne]),_:1},8,["icon"]),f("div",null,[t(n,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u680F\u76EE\u540D\u79F0",modelValue:a.column_name,"onUpdate:modelValue":o[1]||(o[1]=r=>a.column_name=r),clearable:""},null,8,["modelValue"]),t(n,{style:{width:"200px","margin-top":"20px","margin-right":"10px"},placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",modelValue:a.title,"onUpdate:modelValue":o[2]||(o[2]=r=>a.title=r),clearable:""},null,8,["modelValue"]),t(g,{type:"primary",onClick:e.handleOption},{default:i(()=>[le]),_:1},8,["onClick"])])]),default:i(()=>[W((c(),P(S,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:i(()=>[t(l,{prop:"id",label:"id"}),t(l,{prop:"office_name",label:"\u79D1\u5BA4\u540D\u79F0"}),t(l,{prop:"column_name",label:"\u680F\u76EE\u540D\u79F0"}),t(l,{prop:"column_type_name",label:"\u680F\u76EE\u7C7B\u578B"}),t(l,{prop:"title",label:"\u6807\u9898"}),t(l,{label:"\u56FE\u7247"},{default:i(r=>[r.row.url?(c(),P(D,{key:r.row.id,src:r.row.url,lazy:!0,"initial-index":1},null,8,["src"])):(c(),p("span",re,"\u65E0"))]),_:1}),t(l,{prop:"release_time",label:"\u53D1\u5E03\u65F6\u95F4"}),t(l,{prop:"num",label:"\u6D4F\u89C8\u6B21\u6570"}),t(l,{prop:"sort",label:"\u6392\u5E8F"}),t(l,{prop:"status",label:"\u72B6\u6001"},{default:i(r=>[r.row.status==1?(c(),p("span",ie,"\u5DF2\u5BA1\u6838")):r.row.status==0?(c(),p("span",se,"\u5F85\u5BA1\u6838")):(c(),p("span",de,"\u5BA1\u6838\u4E0D\u8FC7"))]),_:1}),t(l,{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4"}),t(l,{label:"\u64CD\u4F5C",width:"200"},{default:i(r=>[f("a",{style:{cursor:"pointer","margin-right":"10px",color:"#409eff"},onClick:B=>e.handlePreview(r.row.id,e.id)},"\u9884\u89C8",8,ce),f("a",{style:{cursor:"pointer","margin-right":"10px",color:"#409eff"},onClick:B=>e.handleEdit(r.row.id,e.id)},"\u4FEE\u6539",8,pe)]),_:1})]),_:1},8,["data"])),[[A,a.loading]]),t(q,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:e.changePage},null,8,["total","page-size","current-page","onCurrentChange"])]),_:1})],64)}var he=X(Z,[["render",ue]]);export{he as default};
