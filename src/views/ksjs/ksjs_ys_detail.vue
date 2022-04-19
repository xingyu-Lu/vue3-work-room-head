<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="height: 150px; align-items: center; justify-content: center; display: flex; font-size: 48px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data">{{ res_data.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室医生</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row :gutter="20" align="top">
		<el-col :sm="4">
			<el-image :src="res_data.img_url"></el-image>
		</el-col>
		<el-col :sm="20">
			<h3 style="color: rgb(64 158 255);">{{res_data.name}}</h3>
			<div style="line-height: 32px;">
				<!-- <div><span style="color: #999;">科室：</span><span style="color: #444;">{{res_data.office_name}}</span></div> -->
				<div><span style="color: #999;">职称：</span><span style="color: #444;">{{res_data.professional}}</span></div>
				<!-- <div><span style="color: #999;">擅长：</span><span style="color: #444;">{{res_data.excel}}</span></div> -->
			</div>
		</el-col>
	</el-row>
	
	<el-divider></el-divider>
		
	<h2 style="color: #555;">
		医生介绍
	</h2>
	
	<el-divider></el-divider>
	
	<span v-if="res_data.content" v-html="res_data.content"></span>
</template>

<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
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
				office_info: '',
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
				// get_office_info()
			})
			
			// const get_office_info = () => {
			// 	axios.get('/api/head/offices/info', {
			// 		params: {
			// 			id: id
			// 		}
			// 	}).then(res => {
			// 		state.office_info = res.data
			// 	})
			// }
			
			const get_data = () => {
				axios.get('/api/head/offices/ksys_detail', {
					params: {
						id: id,
					}
				}).then(res => {
					state.res_data = res.data
				})
			}
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			return {
				...toRefs(state),
				go_detail,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
