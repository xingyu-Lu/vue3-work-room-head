<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: office_id} }">部门设置</el-breadcrumb-item>
		<el-breadcrumb-item>部门栏目</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" @click="handleBack">返回</el-button>
		</template>

		<div style="display: flex; justify-content: center;"><h1 style="font-size: 30px; color: #333; font-weight: bold;" v-html="data.title"></h1></div>
		<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: -10px; margin-bottom: 20px;">
			发布时间：<span v-html="data.release_time"></span>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
			访问次数：<span v-html="data.num"></span>
		</div>
		<el-image v-if="data.url" :src="data.url" :lazy=true :initial-index="1">
		</el-image>
		<div v-html="data.content"></div>
	</el-card>
</template>

<script>
	import {
		reactive,
		ref,
		toRefs,
		onMounted
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		localGet,
	} from '@/utils'

	export default {
		name: 'dynamic_preview',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id,
				office_id
			} = route.query
			const state = reactive({
				res_data: '',
				data: {
					url: '',
					title: '',
					release_time: '',
					content: '',
					num: '',
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/head/technicalOfficeColumns/${id}`).then(res => {
						state.data = {
							url: res.data.url,
							title: res.data.title,
							release_time: res.data.release_time,
							content: res.data.content,
							num: res.data.num,
						}
					})
				}
				
				if (!localGet('userinfo')) {
					get_user_info()
				} else {
					state.res_data = localGet('userinfo')
				}
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					state.res_data = res.data
					localSet('userinfo', res.data)
				})
			}

			const handleBack = () => {
				router.push({
					path: '/kssz-column-index',
					query: {
						id: office_id
					}
				})
			}

			return {
				...toRefs(state),
				handleBack,
				office_id,
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
