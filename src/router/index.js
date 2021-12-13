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