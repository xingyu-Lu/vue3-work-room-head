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

	<h3>前端地址：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151">http://120.26.124.151</el-link></h3>
	<h3>后台地址：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151:8000">http://120.26.124.151:8000</el-link></h3>
	<h3>账号：admin 密码：123456</h3>
	<h3>运营系统：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151:9000">http://120.26.124.151:9000</el-link></h3>
	<h3>病例系统：<el-link type="primary" :underline="false" target="_blank" href="http://120.26.124.151:7000">http://120.26.124.151:7000</el-link></h3>
	<h3>前端代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/vue3-vite-demo">https://github.com/xingyu-Lu/vue3-vite-demo</el-link></h3>
	<h3>后台代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/vue3-hospital-admin">https://github.com/xingyu-Lu/vue3-hospital-admin</el-link></h3>
	<h3>api代码仓库：<el-link type="primary" :underline="false" target="_blank" href="https://github.com/xingyu-Lu/hos_api">https://github.com/xingyu-Lu/hos_api</el-link></h3>
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
		onMounted,
		ref,
		reactive,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'

	export default {
		name: 'Introduce',
		setup() {
			const state = reactive({
				update_log: [],
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = async () => {
				const res = await axios.get('/api/head/updatelogs/index')
				state.update_log = res.data
			}

			return {
				...toRefs(state),
			}
		}
	}
</script>

<style>
</style>
