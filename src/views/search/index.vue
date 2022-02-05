<template>
	<el-card>
		<template #header>
			<h1 style="text-align: center; color: #409eff;">搜索</h1>
			<div>
				<el-select v-model="type" placeholder="请选择" filterable>
					<el-option value="0" label="新闻"></el-option>
					<el-option value="1" label="公告"></el-option>
					<el-option value="2" label="专家"></el-option>
					<el-option value="3" label="招聘"></el-option>
				</el-select>
				<el-input style="width: 200px; margin-top: 20px; margin-right: 10px; margin-left: 10px;" placeholder="请输入" v-model="keyword" :clearable=true />
				<el-button type="primary" @click="handleOption">搜索</el-button>
			</div>
		</template>
		
		<ul style="color: #409EFF; line-height: 38px;">
			<li v-for="(item, index) in res_data">
				<div style="display: flex; justify-content: space-between;">
					<el-link style="font-size: 16px;" :href="item.url" target="_blank" type="primary" :underline="false">
						{{ item.title || item.name }}​</el-link>
					<span style="color: #999;">{{ item.release_time }}</span>
				</div>
			</li>
		</ul>
		
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
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				keyword
			} = route.query
			const state = reactive({
				type: '0',
				keyword: '',
				res_data: [], // 数据列表
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				state.keyword = keyword
				
				getDynamicsList()
			})
			
			const getDynamicsList = () => {
				axios.get('/api/head/searchs/index', {
					params: {
						keyword: state.keyword,
						type: state.type
					}
				}).then(res => {
					state.res_data = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
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
			
			return {
				...toRefs(state),
				handleOption,
				changePage,
			}
		}
	}
</script>

<style>
</style>
