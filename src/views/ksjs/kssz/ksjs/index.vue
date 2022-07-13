<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data && res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: id} }">部门设置</el-breadcrumb-item>
		<el-breadcrumb-item>部门介绍</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button v-if="flag" type="primary" :icon="Plus" @click="handleEdit">编辑</el-button>
			<el-button v-else type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<div style="margin-top: 20px; margin-bottom: 20px;" v-if="flag">
				<span>状态：</span>
				<span style="color: #67C23A;" v-if="data.status == 1">已审核</span>
				<span style="color: #E6A23C;" v-else-if="data.status == 0">待审核</span>
				<span style="color: #E6A23C;" v-else>审核不过</span>
			</div>
		</template>
		<div v-html="data.content">
		</div>
	</el-card>
</template>

<script>
	import {
		Plus,
		Check,
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import {
		localGet,
		localSet
	} from '@/utils'

	export default {
		name: 'dynamin_index',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				res_data: '',
				flag: 0,
				data: {
					id: 0,
					content: '',
					status: 0,
				},
			})
			
			onMounted(() => {
				getBrief()
				
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
			
			const getBrief = () => {
				axios.get(`/api/head/technicalOfficeIntroduce/${id}`).then(res => {
					if (res.data) {
						state.data.content = res.data.content
						state.data.id = res.data.id
						state.data.status = res.data.status
						state.flag = 1
					}
				})
			}
			
			const handleAdd = () => {
				router.push({
					path: '/kssz-ksjs-add',
					query: {
						id
					}
				})
			}
			
			const handleEdit = () => {
				router.push({
					path: '/kssz-ksjs-add',
					query: {
						id
					}
				})
			}
			
			return {
				...toRefs(state),
				handleAdd,
				handleEdit,
				Plus,
				Check,
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
