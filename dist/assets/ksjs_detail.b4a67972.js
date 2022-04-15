var L=Object.defineProperty,M=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var C=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,B=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&C(e,o,t[o]);if(w)for(var o of w(t))T.call(t,o)&&C(e,o,t[o]);return e},N=(e,t)=>M(e,R(t));import{a as m}from"./axios.64f7e1f7.js";import{al as H,u as $,a as q,r as D,o as E,t as F,ad as G,c as f,d as l,ae as _,f as a,w as i,g as p,af as b,ag as V,e as k,h as O,ah as z,i as g}from"./vendor.a93cca51.js";import{_ as P,b as A,l as h}from"./index.e972642b.js";const I={name:"ldtd",setup(){const e=H();$();const{id:t}=e.query,o=q({office_info:"",res_data:D(""),column_list:[],is_login:0,is_self:0});E(()=>{j(),r(),x(),s(),d(),u()});const s=()=>{m.get("/api/head/staffs/info").then(n=>{A("userinfo",n.data),n.data.office.office_id==t&&(o.is_self=1)})},x=()=>{m.get("/api/head/offices/info",{params:{id:t}}).then(n=>{o.office_info=n.data})},j=()=>{m.get("/api/head/offices/ksjs_detail",{params:{id:t}}).then(n=>{o.res_data=n.data})},r=()=>{m.get("/api/head/technicalOfficeColumnSets/list",{params:{office_id:t}}).then(n=>{o.column_list=n.data})},d=()=>{h("token")&&(o.is_login=1)},u=()=>{h("userinfo")&&h("userinfo").office.office_id==t&&(o.is_self=1)},y=n=>{window.open(n,"_blank")};return N(B({},F(o)),{go_detail:y,Plus:G,id:t})}},J={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},K={key:0},Q=g("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),U=g("\u79D1\u5BA4\u4ECB\u7ECD"),W=g("\u79D1\u5BA4\u8BBE\u7F6E"),X=["innerHTML"];function Y(e,t,o,s,x,j){const r=f("el-col"),d=f("el-row"),u=f("el-breadcrumb-item"),y=f("el-breadcrumb"),n=f("el-button");return l(),_(b,null,[a(d,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:i(()=>[a(r,{span:24},{default:i(()=>[O("div",J,[e.office_info?(l(),_("strong",K,z(e.office_info.name),1)):p("v-if",!0)])]),_:1})]),_:1}),a(y,{separator:"/",style:{"margin-bottom":"20px"}},{default:i(()=>[a(u,{to:{path:"/"}},{default:i(()=>[Q]),_:1}),a(u,null,{default:i(()=>[U]),_:1})]),_:1}),p(` <el-row :gutter="24" justify="space-around" align="middle" style="line-height: 36px; margin-bottom: 20px;">\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/ksjs_detail?id=' +id)">\u79D1\u5BA4\u4ECB\u7ECD</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/ksjs-ksdt?id=' + id)">\u79D1\u5BA4\u52A8\u6001</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/ksjs-ksys?id=' + id)">\u79D1\u5BA4\u533B\u751F</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/ksmz?id=' + id)">\u79D1\u5BA4\u95E8\u8BCA</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/kstsyl?id=' + id)">\u7279\u8272\u533B\u7597</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/kstp?id=' + id)">\u79D1\u5BA4\u56FE\u7247</el-button>\r
		</el-col>\r
		<el-col :sm="3">\r
			<el-button type="primary" @click="go_detail('/ksjkkp?id=' + id)">\u5065\u5EB7\u79D1\u666E</el-button>\r
		</el-col>\r
	</el-row> `),(l(!0),_(b,null,V(e.column_list,(v,Z)=>(l(),k(d,{gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:i(()=>[(l(!0),_(b,null,V(v,(c,tt)=>(l(),k(r,{sm:3},{default:i(()=>[a(n,{type:"primary",onClick:et=>s.go_detail(c.url+"?id="+s.id+"&column_id="+c.id+"&column_name="+c.name+"&column_type="+c.type)},{default:i(()=>[g(z(c.name),1)]),_:2},1032,["onClick"])]),_:2},1024))),256))]),_:2},1024))),256)),e.is_login&&e.is_self?(l(),k(d,{key:0,gutter:24,justify:"space-between",align:"middle",style:{"line-height":"36px","margin-bottom":"20px"}},{default:i(()=>[a(r,{sm:3},{default:i(()=>[a(n,{type:"primary",onClick:t[0]||(t[0]=v=>s.go_detail("/kssz?id="+s.id))},{default:i(()=>[W]),_:1})]),_:1})]),_:1})):p("v-if",!0),e.res_data?(l(),_("span",{key:1,innerHTML:e.res_data.content},null,8,X)):p("v-if",!0)],64)}var at=P(I,[["render",Y]]);export{at as default};
