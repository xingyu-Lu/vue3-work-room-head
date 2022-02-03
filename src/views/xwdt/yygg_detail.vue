<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>医院公告</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>医院公告</el-breadcrumb-item>
	</el-breadcrumb>

	<div style="display: flex; justify-content: center;"><strong v-html="res_data.title"></strong></div>
	<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: 10px;">
		发布时间：<span v-html="res_data.release_time"></span>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
		访问次数：<span v-html="res_data.num"></span>
	</div>
	<span v-html="res_data.content"></span>
</template>

<script>
	import axios from '@/utils/axios'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	
	export default {
		name: 'ldtd',
		
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			
			const state = reactive({
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/news/yyxw_detail', {
					params: {
						id: id,
					}
				}).then(res => {
					state.res_data = res.data
				})
			}
			
			return {
				...toRefs(state)
			}
		}
	}
</script>

<style>
</style>
