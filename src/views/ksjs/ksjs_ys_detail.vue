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
	
	<!-- <el-row :gutter="20" align="top"> -->
	<div>
		<!-- <el-col :sm="4"> -->
		<div style="display: flex; justify-content: center;">
			<el-image style="width: 15%;" :src="res_data.img_url"></el-image>
		</div>
		<!-- </el-col> -->
		<!-- <el-col :sm="20"> -->
			<!-- <div style="color: #999;">职称：</div><h3 style="color: rgb(64 158 255);">{{res_data.name}}</h3> -->
			<div style="line-height: 32px;">
				<div><span style="color: #999;">姓名：</span><strong style="color: rgb(64 158 255);">{{res_data.name}}</strong></div>
				<!-- <div><span style="color: #999;">科室：</span><span style="color: #444;">{{res_data.office_name}}</span></div> -->
				<div><span style="color: #999;">职称：</span><span style="color: #444;">{{res_data.professional}}</span></div>
				<div><span style="color: #999;">擅长：</span><span style="color: #444;">{{res_data.excel}}</span></div>
			</div>
		<!-- </el-col> -->
	</div>
	<!-- </el-row> -->
	
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

<style scoped>
	/* table 样式 */
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
	 border-bottom: 2px solid #ccc;
	  text-align: center;
	  background-color: #f1f1f1
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f1f1f1;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f1f1f1;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul,
	:deep() ol {
	  margin: 10px 0 10px 20px;
	}
</style>
