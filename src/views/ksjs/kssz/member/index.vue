<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: id} }">科室设置</el-breadcrumb-item>
		<el-breadcrumb-item>科室成员</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
				<el-button type="primary" :icon="Plus" @click="handleAdd(id)">新增</el-button>
				<div>
					<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入员工名称" v-model="staff_name" clearable />
					<el-button type="primary" @click="handleOption">搜索</el-button>
				</div>
		</template>
	
		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="科室名称" />
			<el-table-column prop="staff_name" label="员工名称" />
			<el-table-column prop="is_head" label="是否负责人">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.is_head == 1">是</span>
					<span style="color: #F56C6C;" v-else>否</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px; color: #409eff;" @click="handleEdit(scope.row.id, id)">修改</a>
				</template>
			</el-table-column>
		</el-table>
		
		<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>
</template>

<script>
	import {
		Plus
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
		name: 'technicaloffice_introduce_index',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				res_data: '',
				office_name: '',
				staff_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getOfficeMemberList()
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
			
			const getOfficeMemberList = () => {
				state.loading = true
				axios.get('/api/head/technicalOfficeMembers', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						staff_name: state.staff_name,
					}
				}).then(res => {
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = false
				})
			}
			
			const handleOption = () => {
				state.currentPage = 1
				getOfficeMemberList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getOfficeMemberList()
			}
			
			const handleAdd = (office_id) => {
				router.push({
					path: '/kssz-member-add',
					query: {
						office_id
					}
				})
			}
			
			const handleEdit = (id, office_id) => {
				router.push({
					path: '/kssz-member-add',
					query: {
						id,
						office_id
					}
				})
			}
			
			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleAdd,
				handleEdit,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
