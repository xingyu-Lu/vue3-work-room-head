<template>
	<!-- <el-row style="min-height: 100%; line-height: 32px;">
		<el-col :md="8">
			<h1>2022-01-19</h1>
			<ol>
				<li>前端重构开始</li>
				<li>首页重构</li>
			</ol>
		</el-col>
	</el-row> -->

	<h2>v1版本：功能优先，尽快跑起来</h2>
	<h3>前端地址：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151">http://120.26.124.151</el-link></h3>
	<h3>后台地址：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151:8000">http://120.26.124.151:8000</el-link></h3>
	<h3>前端代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/vue3-vite-demo">https://github.com/xingyu-Lu/vue3-vite-demo</el-link></h3>
	<h3>后台代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/vue3-hospital-admin">https://github.com/xingyu-Lu/vue3-hospital-admin</el-link></h3>
	<h3>api代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/hospital_api">https://github.com/xingyu-Lu/hospital_api</el-link></h3>
	<h3>更新记录</h3>

	<div class="block">
		<el-timeline>
			<el-timeline-item v-for="(activity, index) in update_log" :key="index" :timestamp="activity.timestamp">
				{{ activity.content }}
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
	import {
		reactive,
		toRefs
	} from 'vue'

	export default {
		name: 'Introduce',
		setup() {
			const state = reactive({
				update_log: [
					{
						content: '服务器问题：docker-compose和MySQL导致内存溢出解决，后端接口仓库搭，后台部署自己服务器',
						timestamp: '2022-01-21',
					},
					{
						content: '前端fix，后台前端建代码仓库、前端框架搭建，一些问题优化',
						timestamp: '2022-01-20',
					},
					{
						content: '前端架构思考，前端首页修改，生产医院ico，图片存储本地，图片待ps操作，轮播图图片待后端接口',
						timestamp: '2022-01-19',
					},
				]
			})

			return {
				...toRefs(state),
			}
		}
	}
</script>

<style>
</style>
