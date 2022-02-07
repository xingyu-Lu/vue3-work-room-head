<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>我的文章</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>我的文件</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
			<div>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入标题" v-model="file_name" clearable />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe style="width: 100%">
			<el-table-column prop="id" label="id" width="100" />
			<el-table-column prop="file_name" label="文件名" width="300" />
			<el-table-column prop="file_size_m" label="文件大小(兆)" width="100">
				<template #default="scope">
					<span>{{ scope.row.files.file_size_m }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="file_type" label="文件类型" width="300">
				<template #default="scope">
					<span>{{ scope.row.files.file_type }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="extension" label="文件扩展名" width="100">
				<template #default="scope">
					<span>{{ scope.row.files.extension }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="created_at" label="创建时间" />
			<el-table-column label="操作" width="200">
				<template #default="scope">
					<a style="cursor: pointer; margin-right: 10px; color: #409EFF;" v-if="scope.row.status != 0" @click="handleStatus(scope.row.id, 0)">删除</a>
					<!-- <a style="cursor: pointer; margin-right: 10px" v-if="scope.row.status == 1"
						@click="handleStatus(scope.row.id, 0)">撤销审核</a> -->
					<!-- <a style="cursor: pointer; margin-right: 10px" v-else-if="scope.row.status == 0" @click="handleStatus(scope.row.id, 1)">审核</a> -->
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

	export default {
		name: 'dynamin_index',
		setup() {
			const router = useRouter()
			const state = reactive({
				file_name: '',
				loading: false,
				tableData: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			onMounted(() => {
				getDynamicsList()
				// getSrcList()
			})
			const getDynamicsList = () => {
				state.loading = true
				axios.get('/api/head/staffs/file_list', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						file_name: state.file_name,
					}
				}).then(res => {					
					state.tableData = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.loading = false
				})
			}
			// 获取src图片做预览
			const getSrcList = () => {
				axios.get('/api/back/news/srclist').then(res => {
					state.srcList = res.data
				})
			}
			
			const handleOption = () => {
				state.currentPage = 1
				getDynamicsList()
			}
			
			const changePage = (val) => {
				state.currentPage = val
				getDynamicsList()
			}

			const handleAdd = () => {
				router.push({
					path: '/employee-my-file-add'
				})
			}

			const handleStatus = (id, status) => {
				axios.put('/api/head/staffs/file_delete', {
					id: id,
					status: status
				}).then(() => {
					ElMessage.success('删除成功')
					getDynamicsList()
				})
			}

			return {
				...toRefs(state),
				handleOption,
				changePage,
				handleAdd,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style>
</style>
