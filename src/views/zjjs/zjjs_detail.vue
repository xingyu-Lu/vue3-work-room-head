<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>专家介绍</strong>
			</div>
		</el-col>
	</el-row>

	<!-- <el-row :gutter="20" align="top"> -->
	<div>
		<!-- <el-col :sm="3"> -->
		<div style="display: flex; justify-content: center;">
			<el-image style="width: 15%;" :src="res_data.img_url" :preview-src-list="srcList" :hide-on-click-modal="true"></el-image>
		</div>
		<!-- </el-col> -->
		<!-- <el-col :sm="21"> -->
			<div style="line-height: 32px;">
				<strong style="color: rgb(64 158 255);">{{res_data.name}}</strong>
				<div><span style="color: #999;">科室：</span><span style="color: #444;">{{res_data.office_name}}</span></div>
				<!-- <div><span style="color: #999;">职位：</span><span style="color: #444;">{{res_data.position}}</span></div> -->
				<div><span style="color: #999;">职称：</span><span style="color: #444;">{{res_data.professional}}</span></div>
				<!-- <div><span style="color: #999;">擅长：</span><span style="color: #444;">{{res_data.excel}}</span></div> -->
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
		// name: 'ldtd',
		
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			
			const state = reactive({
				res_data: ref(''),
				srcList: [],
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/experts/show', {
					params: {
						id: id,
					}
				}).then(res => {
					state.res_data = res.data
					state.srcList = [
						res.data.img_url
					]
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
	  background-color: #f5f2f0
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f5f2f0;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f5f2f0;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul, ol {
	  margin: 10px 0 10px 20px;
	}
	
	:deep() input[type="checkbox"] {
	  margin-right: 5px;
	}
</style>
