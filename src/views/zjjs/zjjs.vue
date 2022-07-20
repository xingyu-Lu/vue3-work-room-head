<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>专家介绍</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item>专家介绍</el-breadcrumb-item>
	</el-breadcrumb>

	<el-select v-model="office_id" placeholder="请选择" filterable style="margin-bottom: 20px; margin-right: 10px;">
		<el-option value="" label="所有"></el-option>
		<el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id">
		</el-option>
	</el-select>
	<el-button type="primary" @click="handleOption">搜索</el-button>
	
	<el-row v-for="(item,index) in res_data" :gutter="20" justify="start">
		<el-col v-for="(item_1, index_1) in item" :sm="4">
			<el-link :href="'/zjjs_detail?id=' + item_1.id" :underline="false" target="_blank">
				<!-- <el-card :body-style="{ padding: '10px'}" shadow="never"> -->
				<div>
					<div class="img" style="overflow: hidden;text-align: center;">
						<img style='width: 100%; height:auto;' :src="item_1.img_url" />
					</div>
	
					<div style="padding: 14px; line-height: 36px; font-size: 14px; text-align: center;">
						<span style="color: #DC8C00;">{{ item_1.name }}</span>
						<div style="display: flex; justify-content: space-around;">
							<div style="list-style: none;">
								<li v-for="(item_2, index_2) in item_1.position">{{ item_2 }}</li>
								<li v-for="(item_3, index_3) in item_1.professional">{{ item_3 }}</li>
							</div>
							<!-- <el-link style="font-size: 12px;" :href="'/zjjs_detail?id=' + item_1.id"
								target="_blank" type="primary" :underline="false" :icon="Plus">详细信息
							</el-link> -->
						</div>
					</div>
				</div>
				<!-- </el-card> -->
			</el-link>
		</el-col>
	</el-row>
	<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
		:current-page="currentPage" @current-change="changePage" />
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
		setup() {
			const office_id = ref('')
			const state = reactive({
				office_id: '',
				list: [],
				res_data: [],
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				get_technicaloffice_list()
				get_data()
			})
			
			const get_technicaloffice_list = () => {
				axios.get('/api/head/offices/list').then(res => {
					state.list = res.data
				})
			}
			
			const get_data = () => {
				axios.get('/api/head/experts/index', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						office_id: state.office_id,
					}
				}).then(res => {
					state.res_data = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
				})
			}
			
			const changePage = (val) => {
				state.currentPage = val
				get_data()
			}
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			const handleOption = () => {
				state.currentPage = 1
				get_data()
			}

			return {
				...toRefs(state),
				changePage,
				handleOption,
				go_detail,
				Plus
			}
		}
	}
</script>

<style scoped>
	.img>img {
		width: 100%;
		transition: all 0.6s;
	}
	
	.img>img:hover {
		transform: scale(1.2);
	}
</style>
