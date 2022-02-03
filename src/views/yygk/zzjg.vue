<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>组织机构</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>组织机构</el-breadcrumb-item>
	</el-breadcrumb>
	
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
	
	export default {
		name: 'ldtd',
		
		setup() {
			const state = reactive({
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/briefs/zzjg').then(res => {
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
