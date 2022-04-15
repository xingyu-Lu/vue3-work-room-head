import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
	  path: '/',
	  redirect: '/introduce'
	},
	{
	  path: '/introduce',
	  name: 'introduce',
	  component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
	},
	// 医院概况
	{
		path: '/yyjj',
		name: 'yyjj',
		component: () => import('../views/yygk/yyjj.vue')
	},
	{
		path: '/ldtd',
		name: 'ldtd',
		component: () => import('../views/yygk/ldtd.vue')
	},
	{
		path: '/yywh',
		name: 'yywh',
		component: () => import('../views/yygk/yywh.vue')
	},
	{
		path: '/lsyg',
		name: 'lsyg',
		component: () => import('../views/yygk/lsyg.vue')
	},
	{
		path: '/zzjg',
		name: 'zzjg',
		component: () => import('../views/yygk/zzjg.vue')
	},
	{
		path: '/yyry',
		name: 'yyry',
		component: () => import('../views/yygk/yyry.vue')
	},
	{
		path: '/wlzw',
		name: 'wlzw',
		component: () => import('../views/yygk/wlzw.vue')
	},
	// 医院新闻
	{
		path: '/yyxw',
		name: 'yyxw',
		component: () => import('../views/xwdt/yyxw.vue')
	},
	{
		path: '/yyxw_detail',
		name: 'yyxw_detail',
		component: () => import('../views/xwdt/yyxw_detail.vue')
	},
	{
		path: '/spxw',
		name: 'spxw',
		component: () => import('../views/xwdt/spxw.vue')
	},
	{
		path: '/spxw_detail',
		name: 'spxw_detail',
		component: () => import('../views/xwdt/spxw_detail.vue')
	},
	{
		path: '/yygg',
		name: 'yygg',
		component: () => import('../views/xwdt/yygg.vue')
	},
	{
		path: '/yygg_detail',
		name: 'yygg_detail',
		component: () => import('../views/xwdt/yygg_detail.vue')
	},
	// 科室介绍
	{
		path: '/ksjs',
		name: 'ksjs',
		component: () => import('../views/ksjs/ksjs.vue')
	},
	{
		path: '/ksjs_detail',
		name: 'ksjs_detail',
		component: () => import('../views/ksjs/ksjs_detail.vue')
	},
	// 医师介绍
	{
		path: '/ksjs-ksys',
		name: 'ksjs_ksys',
		component: () => import('../views/ksjs/ksys.vue')
	},
	{
		path: '/ksjs_ys_detail',
		name: 'ksjs_ys_detail',
		component: () => import('../views/ksjs/ksjs_ys_detail.vue')
	},
	// 科室动态
	{
		path: '/ksjs_dt_detail',
		name: 'ksjs_dt_detail',
		component: () => import('../views/ksjs/ksjs_dt_detail.vue')
	},
	{
		path: '/ksjs-ksdt',
		name: 'ksjs_ksdt',
		component: () => import('../views/ksjs/ksdt.vue')
	},
	// 科室门诊
	{
		path: '/ksmz',
		name: 'ksmz',
		component: () => import('../views/ksjs/ksmz.vue')
	},
	// 特色医疗
	{
		path: '/kstsyl',
		name: 'kstsyl',
		component: () => import('../views/ksjs/tsyl.vue')
	},
	// 特色医疗详情
	{
		path: '/kstsyl-detail',
		name: 'kstsyl_detail',
		component: () => import('../views/ksjs/tsyl_detail.vue')
	},
	// 科室图片
	{
		path: '/kstp',
		name: 'kstp',
		component: () => import('../views/ksjs/kstp.vue')
	},
	// 特色医疗
	{
		path: '/ksjkkp',
		name: 'ksjkkp',
		component: () => import('../views/ksjs/ksjkkp.vue')
	},
	// 特色医疗详情
	{
		path: '/ksjkkp-detail',
		name: 'ksjkkp_detail',
		component: () => import('../views/ksjs/ksjkkp_detail.vue')
	},
	// 科室设置
	{
		path: '/kssz',
		name: 'kssz',
		component: () => import('../views/ksjs/kssz/index.vue')
	},
	// 科室动态管理
	{
		path: '/kssz-ksdt-index',
		name: 'kssz_ksdt_index',
		component: () => import('../views/ksjs/kssz/ksdt/index.vue')
	},
	{
		path: '/kssz-ksdt-add',
		name: 'kssz_ksdt_add',
		component: () => import('../views/ksjs/kssz/ksdt/add.vue')
	},
	{
		path: '/kssz-ksdt-preview',
		name: 'kssz_ksdt_preview',
		component: () => import('../views/ksjs/kssz/ksdt/preview.vue')
	},
	// 科室门诊管理
	{
		path: '/kssz-outpatient-index',
		name: 'kssz_outpatient_index',
		component: () => import('../views/ksjs/kssz/outpatient/index.vue')
	},
	{
		path: '/kssz-outpatient-add',
		name: 'kssz_outpatient_add',
		component: () => import('../views/ksjs/kssz/outpatient/add.vue')
	},
	// 科室成员管理
	{
		path: '/kssz-member-index',
		name: 'kssz_member_index',
		component: () => import('../views/ksjs/kssz/member/index.vue')
	},
	{
		path: '/kssz-member-add',
		name: 'kssz_member_add',
		component: () => import('../views/ksjs/kssz/member/add.vue')
	},
	// 栏目设置管理
	{
		path: '/kssz-columnset-index',
		name: 'kssz_columnset_index',
		component: () => import('../views/ksjs/kssz/columnset/index.vue')
	},
	{
		path: '/kssz-columnset-add',
		name: 'kssz_columnset_add',
		component: () => import('../views/ksjs/kssz/columnset/add.vue')
	},
	// 科室栏目管理
	{
		path: '/kssz-column-index',
		name: 'kssz_column_index',
		component: () => import('../views/ksjs/kssz/column/index.vue')
	},
	{
		path: '/kssz-column-add',
		name: 'kssz_column_add',
		component: () => import('../views/ksjs/kssz/column/add.vue')
	},
	{
		path: '/kssz-column-preview',
		name: 'kssz_column_preview',
		component: () => import('../views/ksjs/kssz/column/preview.vue')
	},
	// 科室栏目
	{
		path: '/ksjs-column',
		name: 'ksjs_column',
		component: () => import('../views/ksjs/ksjs-column.vue')
	},
	{
		path: '/ksjs-column-detail',
		name: 'ksjs_column_detail',
		component: () => import('../views/ksjs/ksjs-column-detail.vue')
	},
	// 科室介绍管理
	{
		path: '/kssz-ksjs-index',
		name: 'kssz_ksjs_index',
		component: () => import('../views/ksjs/kssz/ksjs/index.vue')
	},
	{
		path: '/kssz-ksjs-add',
		name: 'kssz_ksjs_add',
		component: () => import('../views/ksjs/kssz/ksjs/add.vue')
	},
	// 科室医生管理
	{
		path: '/kssz-ksys-index',
		name: 'kssz_ksys_index',
		component: () => import('../views/ksjs/kssz/ksys/index.vue')
	},
	{
		path: '/kssz-ksys-add',
		name: 'kssz_ksys_add',
		component: () => import('../views/ksjs/kssz/ksys/add.vue')
	},
	
	
	// 专家介绍
	{
		path: '/zjjs',
		name: 'zjjs',
		component: () => import('../views/zjjs/zjjs.vue')
	},
	{
		path: '/zjjs_detail',
		name: 'zjjs_detail',
		component: () => import('../views/zjjs/zjjs_detail.vue')
	},
	{
		path: '/expert-czxx',
		name: 'expert_czxx',
		component: () => import('../views/zjjs/czxx.vue')
	},
	// 科研教学
	{
		path: '/kydt',
		name: 'kydt',
		component: () => import('../views/kyjx/kydt.vue')
	},
	{
		path: '/kydt_detail',
		name: 'kydt_detail',
		component: () => import('../views/kyjx/kydt_detail.vue')
	},
	// 学科建设
	{
		path: '/xkjs',
		name: 'xkjs',
		component: () => import('../views/kyjx/xkjs.vue')
	},
	{
		path: '/xkjs_detail',
		name: 'xkjs_detail',
		component: () => import('../views/kyjx/xkjs_detail.vue')
	},
	// 继续教育
	{
		path: '/jxjy',
		name: 'jxjy',
		component: () => import('../views/kyjx/jxjy.vue')
	},
	{
		path: '/jxjy_detail',
		name: 'jxjy_detail',
		component: () => import('../views/kyjx/jxjy_detail.vue')
	},
	
	// 患者服务
	{
		path: '/mzlc',
		name: 'mzlc',
		component: () => import('../views/hzfw/mzlc.vue')
	},
	{
		path: '/zylc',
		name: 'zylc',
		component: () => import('../views/hzfw/zylc.vue')
	},
	{
		path: '/czxx',
		name: 'czxx',
		component: () => import('../views/hzfw/czxx.vue')
	},
	{
		path: '/jcxz',
		name: 'jcxz',
		component: () => import('../views/hzfw/jcxz.vue')
	},
	{
		path: '/jcxz_detail',
		name: 'jcxz_detail',
		component: () => import('../views/hzfw/jcxz_detail.vue')
	},
	{
		path: '/jktj',
		name: 'jktj',
		component: () => import('../views/hzfw/jktj.vue')
	},
	{
		path: '/jktj_detail',
		name: 'jktj_detail',
		component: () => import('../views/hzfw/jktj_detail.vue')
	},
	{
		path: '/ybzn',
		name: 'ybzn',
		component: () => import('../views/hzfw/ybzn.vue')
	},
	{
		path: '/ybzn_detail',
		name: 'ybzn_detail',
		component: () => import('../views/hzfw/ybzn_detail.vue')
	},
	{
		path: '/azb',
		name: 'azb',
		component: () => import('../views/hzfw/azb.vue')
	},
	{
		path: '/lyfb',
		name: 'lyfb',
		component: () => import('../views/hzfw/lyfb.vue')
	},
	{
		path: '/lxwm',
		name: 'lxwm',
		component: () => import('../views/hzfw/lxwm.vue')
	},
	{
		path: '/hlyd',
		name: 'hlyd',
		component: () => import('../views/hzfw/hlyd.vue')
	},
	{
		path: '/hlyd_detail',
		name: 'hlyd_detail',
		component: () => import('../views/hzfw/hlyd_detail.vue')
	},
	{
		path: '/jkcj',
		name: 'jkcj',
		component: () => import('../views/hzfw/jkcj.vue')
	},
	{
		path: '/jkcj_detail',
		name: 'jkcj_detail',
		component: () => import('../views/hzfw/jkcj_detail.vue')
	},
	// 党建之窗
	{
		path: '/dwgl',
		name: 'dwgl',
		component: () => import('../views/djzc/dwgl.vue')
	},
	{
		path: '/dwgl_detail',
		name: 'dwgl_detail',
		component: () => import('../views/djzc/dwgl_detail.vue')
	},
	{
		path: '/dyjy',
		name: 'dyjy',
		component: () => import('../views/djzc/dyjy.vue')
	},
	{
		path: '/dyjy_detail',
		name: 'dyjy_detail',
		component: () => import('../views/djzc/dyjy_detail.vue')
	},
	{
		path: '/dflz',
		name: 'dflz',
		component: () => import('../views/djzc/dflz.vue')
	},
	{
		path: '/dflz_detail',
		name: 'dflz_detail',
		component: () => import('../views/djzc/dflz_detail.vue')
	},
	{
		path: '/ygzj',
		name: 'ygzj',
		component: () => import('../views/djzc/ygzj.vue')
	},
	{
		path: '/ygzj_detail',
		name: 'ygzj_detail',
		component: () => import('../views/djzc/ygzj_detail.vue')
	},
	{
		path: '/ydyf',
		name: 'ydyf',
		component: () => import('../views/djzc/ydyf.vue')
	},
	{
		path: '/ydyf_detail',
		name: 'ydyf_detail',
		component: () => import('../views/djzc/ydyf_detail.vue')
	},
	{
		path: '/qnjyz',
		name: 'qnjyz',
		component: () => import('../views/djzc/qnjyz.vue')
	},
	{
		path: '/qnjyz_detail',
		name: 'qnjyz_detail',
		component: () => import('../views/djzc/qnjyz_detail.vue')
	},
	// 人才招聘
	{
		path: '/zpxx',
		name: 'zpxx',
		component: () => import('../views/rczp/zpxx.vue')
	},
	{
		path: '/zpxx_detail',
		name: 'zpxx_detail',
		component: () => import('../views/rczp/zpxx_detail.vue')
	},
	{
		path: '/yplc',
		name: 'yplc',
		component: () => import('../views/rczp/yplc.vue')
	},
	
	// 登录
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	// 注册
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/register.vue')
	},
	// 更新记录
	{
		path: '/update_log',
		name: 'update_log',
		component: () => import('../views/update_log.vue')
	},
	// 员工文章列表
	{
		path: '/employee-article',
		name: 'employee_article',
		component: () => import('../views/employee/index.vue')
	},
	// 员工文章列表详情
	{
		path: '/employee-article-detail',
		name: 'employee_article_detail',
		component: () => import('../views/employee/detail.vue')
	},
	// 员工自己的文章
	{
		path: '/employee-my-article',
		name: 'employee_my_article',
		component: () => import('../views/employee/my_article.vue')
	},
	// 员工发表文章
	{
		path: '/employee-my-article-add',
		name: 'employee_my_article_add',
		component: () => import('../views/employee/my_article_add.vue')
	},
	// 员工发表文章预览
	{
		path: '/employee-my-article-preview',
		name: 'employee_my_article_preview',
		component: () => import('../views/employee/my_article_preview.vue')
	},
	// 员工上传云盘文件
	{
		path: '/employee-my-file',
		name: 'employee_my_file',
		component: () => import('../views/employee/my_file.vue')
	},
	{
		path: '/employee-my-file-add',
		name: 'employee_my_file_add',
		component: () => import('../views/employee/my_file_add.vue')
	},
	// 修改密码
	{
		path: '/change-password',
		name: 'change_password',
		component: () => import('../views/change_password.vue')
	},
	
	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	
	
	{
		path: '/api_test',
		name: 'api_test',
		component: () => import('../views/ApiTest.vue'),
	},
	{
		path: '/good',
		name: 'good',
		component: () => import('../views/Good.vue')
	},
	{
		path: '/add_good',
		name: 'add_good',
		component: () => import('../views/AddGood.vue')
	}
  ]
})

export default router