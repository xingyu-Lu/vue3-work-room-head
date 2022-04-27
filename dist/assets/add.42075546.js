var T=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(o,l,i)=>l in o?T(o,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[l]=i,E=(o,l)=>{for(var i in l||(l={}))Q.call(l,i)&&B(o,i,l[i]);if(L)for(var i of L(l))X.call(l,i)&&B(o,i,l[i]);return o},H=(o,l)=>J(o,K(l));import{W as Y}from"./wangEditor.696d98d4.js";import{a as v}from"./axios.da182a11.js";import{ad as Z,ao as $,r as V,al as ee,u as oe,a as te,o as le,ap as ae,t as se,c as n,d as k,ae as y,f as e,w as s,af as ne,ak as _,h as I,ah as N,g as U,i as p}from"./vendor.dfcff7c2.js";import{_ as re,l as R,u as C,d as ie}from"./index.4e5c271a.js";const de={name:"news_add",components:{Plus:Z,Delete:$},setup(){V(null);const o=V(null),l=V(null),i=V(null),c=ee(),q=oe(),{id:f,office_id:h}=c.query,r=te({res_data:"",token:"Bearer "+R("token")||"",id:f,Form:{img_url:"",img:"",name:"",professional:"",excel:"",content:"",sort:"",status:"0",disabled:!0,fileList:[]},rules:{img:[{required:!0,message:"\u56FE\u7247\u5FC5\u987B",trigger:["change"]}],name:[{required:!0,message:"\u59D3\u540D\u5FC5\u987B",trigger:["change"]}],professional:[{required:!1,message:"\u804C\u79F0\u5FC5\u987B",trigger:["change"]}],excel:[{required:!1,message:"\u64C5\u957F\u5FC5\u987B",trigger:["change"]}],sort:[{required:!1,message:"\u6392\u5E8F\u5FC5\u987B",trigger:["change"]}],status:[{required:!0,message:"\u72B6\u6001\u5FC5\u987B",trigger:["change"]}]}});let t;le(()=>{t=new Y(l.value),t.config.lineHeights=["1","1.15","1.5","2","2.5","3"],t.config.showLinkImg=!1,t.config.showLinkImgAlt=!1,t.config.showLinkImgHref=!1,t.config.uploadImgMaxSize=2*1024*1024,t.config.uploadImgMaxLength=1,t.config.uploadImgAccept=["jpg","jpeg","png","gif","bmp","webp"],t.config.uploadFileName="file",t.config.uploadImgHeaders={Authorization:r.token},t.config.uploadImgParams={basket:"img"},t.config.uploadImgHooks={customInsert:function(a,u){console.log("result",u),a(u.data.src)}},t.config.uploadImgServer=C,Object.assign(t.config,{onchange(){console.log("change")}}),t.config.uploadVideoServer=C,t.config.uploadVideoMaxSize=1*200*1024*300,t.config.uploadVideoAccept=["mp4"],t.config.uploadVideoParams={basket:"video"},t.config.uploadVideoName="file",t.config.uploadVideoHeaders={Authorization:r.token},t.config.uploadVideoHooks={customInsert:function(a,u){console.log("customInsert",u),a(u.data.src)}},t.create(),f&&v.get(`/api/head/technicalOfficeDoctors/${f}`).then(a=>{r.Form={img_url:a.data.url||"",img:a.data.file_id,name:a.data.name,professional:a.data.professional,excel:a.data.excel,sort:a.data.sort,status:String(a.data.status),fileList:[{url:a.data.url}],disabled:!0},t&&t.txt.html(a.data.content)}),R("userinfo")?r.res_data=R("userinfo"):x()}),ae(()=>{t.destroy(),t=null});const x=()=>{v.get("/api/head/staffs/info").then(a=>{r.res_data=a.data,localSet("userinfo",a.data)})},S=()=>{o.value.validate(a=>{if(a){let u=v.post,d={img:r.Form.img,name:r.Form.name,professional:r.Form.professional,excel:r.Form.excel,content:t.txt.html(),sort:r.Form.sort,status:r.Form.status},g="/api/head/technicalOfficeDoctors";f&&(u=v.put,g=`/api/head/technicalOfficeDoctors/${f}`),u(g,d).then(()=>{f?_.success("\u4FEE\u6539\u6210\u529F"):_.success("\u6DFB\u52A0\u6210\u529F"),q.push({path:"/kssz-ksys-index",query:{id:h}})})}})},j=a=>{if((a.size/1024/1024).toFixed(2)>2)return _.error("\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u4E8E2\u5146"),!1;const d=a.name.split(".")[1]||"";if(!["jpg","jpeg","png","gif"].includes(d))return _.error("\u8BF7\u4E0A\u4F20 jpg\u3001jpeg\u3001png\u3001gif \u683C\u5F0F\u7684\u56FE\u7247"),!1},w=a=>{_.success("\u4E0A\u4F20\u6210\u529F"),r.Form.img_url=a.data.src||"",r.Form.img=a.data.id||""},z=a=>{_.error("\u4E0A\u4F20\u5931\u8D25")},b=a=>{i.value.clearFiles(),r.Form.img="",r.Form.img_url="",r.Form.fileList=[]};return H(E({},se(r)),{editor:l,uploadRef:i,Ref:o,submitAdd:S,uploadImgServer:ie,handleBeforeUpload:j,handleUrlSuccess:w,handleUrlError:z,handleRemove:b,office_id:h})}},ue={style:{float:"right",height:"150px","align-items":"center",display:"flex","font-size":"36px","letter-spacing":"0.2em",color:"#fff"}},me={key:0},ce=p("\u5B9C\u5BBE\u5E02\u7B2C\u4E09\u4EBA\u6C11\u533B\u9662"),fe=p("\u79D1\u5BA4\u8BBE\u7F6E"),pe=p("\u79D1\u5BA4\u533B\u751F"),ge=p("\u64C5\u957F\u680F\u7684\u5185\u5BB9\u4E5F\u9700\u8981\u5199\u5230\u533B\u751F\u4ECB\u7ECD\u5185\u5BB9\u91CC(\u5C55\u793A\u7684\u65F6\u5019\u64C5\u957F\u680F\u586B\u5199\u7684\u4E0D\u4F1A\u5355\u72EC\u5C55\u793A)"),_e=["src"],he={class:"el-upload-list__item-actions"},be={ref:"editor",style:{"z-index":"1"}},Fe=p("\u5DF2\u5BA1\u6838"),ve=p("\u5F85\u5BA1\u6838");function Ve(o,l,i,c,q,f){const h=n("el-col"),r=n("el-row"),t=n("el-breadcrumb-item"),x=n("el-breadcrumb"),S=n("el-descriptions-item"),j=n("el-descriptions"),w=n("el-divider"),z=n("plus"),b=n("el-icon"),a=n("delete"),u=n("el-upload"),d=n("el-form-item"),g=n("el-input"),F=n("el-option"),D=n("el-select"),A=n("el-radio"),M=n("el-radio-group"),O=n("el-button"),P=n("el-form"),W=n("el-card");return k(),y(ne,null,[e(r,{justify:"center",align:"middle",style:{background:"linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% )","margin-bottom":"20px","margin-top":"-10px"}},{default:s(()=>[e(h,{span:24},{default:s(()=>[I("div",ue,[o.res_data.office?(k(),y("strong",me,N(o.res_data.office.office_name),1)):U("",!0)])]),_:1})]),_:1}),e(x,{separator:"/",style:{"margin-bottom":"20px"}},{default:s(()=>[e(t,{to:{path:"/"}},{default:s(()=>[ce]),_:1}),e(t,{to:{path:"/kssz",query:{id:c.office_id}}},{default:s(()=>[fe]),_:1},8,["to"]),e(t,null,{default:s(()=>[pe]),_:1})]),_:1}),e(W,{style:{"min-height":"100%"}},{default:s(()=>[e(j,{title:"\u63D0\u793A"},{default:s(()=>[e(S,null,{default:s(()=>[ge]),_:1})]),_:1}),e(w),e(P,{model:o.Form,rules:o.rules,ref:"Ref","label-width":"100px"},{default:s(()=>[e(d,{label:"\u56FE\u7247",prop:"img"},{default:s(()=>[e(u,{ref:"uploadRef",action:c.uploadImgServer,data:{basket:"img"},limit:1,"list-type":"picture-card","thumbnail-mode":"true",headers:{Authorization:o.token},"before-upload":c.handleBeforeUpload,"on-success":c.handleUrlSuccess,"on-error":c.handleUrlError,"auto-upload":!0,"file-list":o.Form.fileList},{default:s(()=>[e(b,null,{default:s(()=>[e(z)]),_:1})]),file:s(({file:m})=>[I("div",null,[o.Form.img_url?(k(),y("img",{key:0,class:"el-upload-list__item-thumbnail",src:o.Form.img_url,alt:""},null,8,_e)):U("",!0),I("span",he,[o.Form.disabled?(k(),y("span",{key:0,class:"el-upload-list__item-delete",onClick:l[0]||(l[0]=(...G)=>c.handleRemove&&c.handleRemove(...G))},[e(b,null,{default:s(()=>[e(a)]),_:1})])):U("",!0)])])]),_:1},8,["action","headers","before-upload","on-success","on-error","file-list"])]),_:1}),e(d,{label:"\u533B\u751F\u540D\u5B57",prop:"name"},{default:s(()=>[e(g,{modelValue:o.Form.name,"onUpdate:modelValue":l[1]||(l[1]=m=>o.Form.name=m),placeholder:"\u8BF7\u8F93\u5165\u533B\u751F\u540D\u5B57",type:"text"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u804C\u79F0",prop:"professional"},{default:s(()=>[e(D,{modelValue:o.Form.professional,"onUpdate:modelValue":l[2]||(l[2]=m=>o.Form.professional=m),placeholder:"Select",filterable:""},{default:s(()=>[e(F,{value:"\u4E3B\u4EFB\u533B\u5E08",label:"\u4E3B\u4EFB\u533B\u5E08"}),e(F,{value:"\u526F\u4E3B\u4EFB\u533B\u5E08",label:"\u526F\u4E3B\u4EFB\u533B\u5E08"}),e(F,{value:"\u4E3B\u6CBB\u533B\u5E08",label:"\u4E3B\u6CBB\u533B\u5E08"}),e(F,{value:"\u533B\u5E08",label:"\u533B\u5E08"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u64C5\u957F",prop:"excel"},{default:s(()=>[e(g,{modelValue:o.Form.excel,"onUpdate:modelValue":l[3]||(l[3]=m=>o.Form.excel=m),placeholder:"\u8BF7\u8F93\u5165\u64C5\u957F",type:"text"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u533B\u751F\u4ECB\u7ECD",prop:"content"},{default:s(()=>[I("div",be,null,512)]),_:1}),e(d,{label:"\u6392\u5E8F",prop:"sort"},{default:s(()=>[e(g,{modelValue:o.Form.sort,"onUpdate:modelValue":l[4]||(l[4]=m=>o.Form.sort=m),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[e(M,{modelValue:o.Form.status,"onUpdate:modelValue":l[5]||(l[5]=m=>o.Form.status=m),disabled:""},{default:s(()=>[e(A,{label:"1"},{default:s(()=>[Fe]),_:1}),e(A,{label:"0"},{default:s(()=>[ve]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:s(()=>[e(O,{type:"primary",onClick:l[6]||(l[6]=m=>c.submitAdd())},{default:s(()=>[p(N(o.id?"\u7ACB\u5373\u4FEE\u6539":"\u7ACB\u5373\u521B\u5EFA"),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})],64)}var je=re(de,[["render",Ve]]);export{je as default};
