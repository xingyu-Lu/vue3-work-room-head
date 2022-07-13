<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>健康科普</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item>健康科普</el-breadcrumb-item>
	</el-breadcrumb>

	<div style="display: flex; justify-content: center;"><h1 style="font-size: 30px; color: #333; font-weight: bold;" v-html="res_data.title"></h1></div>
	<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: -10px; margin-bottom: 20px;">
		发布科室：<span v-html="res_data.office_name"></span>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
				axios.get('/api/head/patientservices/show', {
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
