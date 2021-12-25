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
	{
		path: '/ksjs_ys_detail',
		name: 'ksjs_ys_detail',
		component: () => import('../views/ksjs/ksjs_ys_detail.vue')
	},
	{
		path: '/ksjs_dt_detail',
		name: 'ksjs_dt_detail',
		component: () => import('../views/ksjs/ksjs_dt_detail.vue')
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
		path: '/czxx',
		name: 'czxx',
		component: () => import('../views/zjjs/czxx.vue')
	},
	
	{
		path: '/api_test',
		name: 'api_test',
		component: () => import('../views/ApiTest.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
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