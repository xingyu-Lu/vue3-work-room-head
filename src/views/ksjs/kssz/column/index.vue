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
		<el-breadcrumb-item>科室栏目</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd(id)">新增</el-button>
			<div>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入栏目名称" v-model="column_name" clearable />
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px;" placeholder="请输入标题" v-model="title" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" />
			<el-table-column prop="office_name" label="科室名称" />
			<el-table-column prop="column_name" label="栏目名称" />
			<el-table-column prop="column_type_name" label="栏目类型" />
			<el-table-column prop="title" label="标题" />
			<el-table-column label="图片">
				<template #default="scope">
					<el-image v-if="scope.row.url" :key="scope.row.id" :src="scope.row.url" :lazy=true :initial-index="1">
					</el-image>
					<span v-else>无</span>
				</template>
			</el-table-column>
			<el-table-column prop="release_time" label="发布时间" />
			<el-table-column prop="num" label="浏览次数" />
			<el-table-column prop="sort" label="排序" />
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
					<a style="cursor: pointer; margin-right: 10px; color: #409eff;" @click="handlePreview(scope.row.id, id)">预览</a>
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
		name: 'dynamin_index',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				res_data: '',
				column_name: '',
				title: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getColumnsList()
				// getSrcList()
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
			
			const getColumnsList = () => {
				state.loading = true
				axios.get('/api/head/technicalOfficeColumns', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						column_name: state.column_name,
						title: state.title,
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
				getColumnsList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getColumnsList()
			}

			const handleAdd = (office_id) => {
				router.push({
					path: '/kssz-column-add',
					query: {
						office_id
					}
				})
			}
			
			const handleEdit = (id, office_id) => {
				router.push({
					path: '/kssz-column-add',
					query: {
						id,
						office_id
					}
				})
			}
			
			const handlePreview = (id, office_id) => {
				router.push({
					path: '/kssz-column-preview',
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
				handlePreview,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
