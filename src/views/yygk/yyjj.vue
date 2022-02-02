<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>医院简介</strong>
			</div>
		</el-col>
	</el-row>
	<!-- <el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_01.jpg" lazy></el-image>
		</el-col>
	</el-row> -->

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>医院简介</el-breadcrumb-item>
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
		name: 'yyjj',
		
		setup() {
			const state = reactive({
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/briefs/yyjj').then(res => {
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
