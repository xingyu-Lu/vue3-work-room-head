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
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: id} }">科室设置</el-breadcrumb-item>
		<el-breadcrumb-item>科室门诊</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd(id)">新增</el-button>
			<!-- <div>
				<el-select v-model="yq_type" placeholder="Select" filterable>
					<el-option value="0" label="院本部"></el-option>
					<el-option value="1" label="李庄院区"></el-option>
				</el-select>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入科室名称" v-model="technicaloffice_name" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div> -->
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="科室名称" />
			<el-table-column prop="monday" label="周一" />
			<el-table-column prop="tuesday" label="周二" />
			<el-table-column prop="wednesday" label="周三" />
			<el-table-column prop="thursday" label="周四" />
			<el-table-column prop="friday" label="周五" />
			<el-table-column prop="saturday" label="周六" />
			<el-table-column prop="sunday" label="周天" />
			<el-table-column prop="yq_type" label="院区">
				<template #default="scope">
					<span v-if="scope.row.yq_type == 0">院本部</span>
					<span v-if="scope.row.yq_type == 1">李庄院区</span>
				</template>
			</el-table-column>
			<el-table-column prop="type" label="上下午">
				<template #default="scope">
					<span v-if="scope.row.type == 0">上午</span>
					<span v-if="scope.row.type == 1">下午</span>
				</template>
			</el-table-column>
			<el-table-column prop="status" label="状态">
				<template #default="scope">
					<span style="color: #67C23A;" v-if="scope.row.status == 1">已审核</span>
					<span style="color: #E6A23C;" v-else-if="scope.row.status == 0">待审核</span>
					<span style="color: #F56C6C;" v-else>审核不过</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />

			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px; color: #409eff;"
						@click="handleEdit(scope.row.id, id)">修改</a>
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
		name: 'technicaloffice_setting_index',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				res_data: '',
				yq_type: '0',
				technicaloffice_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getOutpatientList()
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

			const getOutpatientList = () => {
				state.loading = true
				axios.get('/api/head/technicalOfficeOutpatients', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						technicaloffice_name: state.technicaloffice_name,
						yq_type: state.yq_type,
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
				getOutpatientList()
			}

			const changePage = (val) => {
				state.currentPage = val
				getOutpatientList()
			}

			const handleAdd = (office_id) => {
				router.push({
					path: '/kssz-outpatient-add',
					query: {
						office_id
					}
				})
			}

			const handleEdit = (id, office_id) => {
				router.push({
					path: '/kssz-outpatient-add',
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
