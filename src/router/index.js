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