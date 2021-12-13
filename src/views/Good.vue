<template>
	<el-card class="good-container">
		<template #header>
			<div class="header">
				<el-button type="primary" size="small" :icon="Plus" @click="handleAdd">新增商品</el-button>
			</div>
		</template>
		<el-table v-loading="loading" size="small" ref="multipleTable" stripe :data="tableData" tooltip-effect="dark"
			@selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="goodsId" label="商品编号">
			</el-table-column>
			<el-table-column prop="goodsName" label="商品名">
			</el-table-column>
			<el-table-column prop="goodsIntro" label="商品简介">
			</el-table-column>
			<el-table-column label="商品图片">
				<template #default="scope">
					<el-image :src="scope.row.goodsCoverImg" :key="scope.row.goodsId" alt="图片" :lazy="true"></el-image>
				</template>
			</el-table-column>
			<el-table-column prop="stockNum" label="商品库存">
			</el-table-column>
			<el-table-column prop="sellingPrice" label="商品售价">
			</el-table-column>
			<el-table-column label="上架状态">
				<template #default="scope">
					<span style="color: green;" v-if="scope.row.goodsSellStatus == 0">销售中</span>
					<span style="color: red;" v-else>已下架</span>
				</template>
			</el-table-column>

			<el-table-column label="操作" width="100">
				<template #default="scope">
					<el-button type="text" size="small" @click="handleEdit(scope.row.goodsId)">修改</el-button>
					<el-button type="text" size="small" v-if="scope.row.goodsSellStatus == 0" @click="handleStatus(scope.row.goodsId, 1)">下架</el-button>
					<el-button type="text" size="small" v-else @click="handleStatus(scope.row.goodsId, 0)">上架</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!--总数超过一页，再展示分页器-->
		<el-pagination style="margin-top: 20px;" background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>
</template>

<script>
	import {
		Plus,
		Timer
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref,
		toRefs,
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRouter
	} from 'vue-router'
	
	export default {
		components: { Timer },
		name: 'Good',
		setup() {
			const multipleTable = ref(null)
			const router = useRouter()
			const state = reactive({
				loading: false,
				tableData: [], // 数据列表
				multipleSelection: [], // 选中项
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 2 // 分页大小
			})
			onMounted(() => {
				getGoodList()
			})
			// 获取轮播图列表
			const getGoodList = () => {
				state.loading = true
				axios.get('/good_list.php', {
					params: {
						pageNumber: state.currentPage,
						pageSize: state.pageSize
					}
				}).then(res => {
					state.tableData = res.list
					state.total = res.totalCount
					state.currentPage = res.currPage
					state.loading = false
				})
			}
			const handleAdd = () => {
				router.push({
					path: '/add_good'
				})
			}
			const handleEdit = (id) => {
				router.push({
					path: '/add_good',
					query: {
						id
					}
				})
			}
			// 选择项
			const handleSelectionChange = (val) => {
				state.multipleSelection = val
			}
			const changePage = (val) => {
				state.currentPage = val
				getGoodList()
			}
			const handleStatus = (id, status) => {
				axios.put(`/goods/status/${status}`, {
					ids: id ? [id] : []
				}).then(() => {
					ElMessage.success('修改成功')
					getGoodList()
				})
			}
			return {
				...toRefs(state),
				multipleTable,
				handleSelectionChange,
				handleAdd,
				handleEdit,
				getGoodList,
				changePage,
				handleStatus,
				Plus,
			}
		}
	}
</script>

<style scoped>
	/* .good-container {
		min-height: 100%;
	}

	.el-card.is-always-shadow {
		min-height: 100% !important;
	} */
</style>
