<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>员工之声</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>员工之声</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row :gutter="24" style="margin-bottom: 20px;" v-if="is_login">
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/employee-my-article')">我的文章</el-button>
		</el-col>
	</el-row>
	
	<el-card>
		<ul style="color: #409EFF; line-height: 38px;">
			<li v-for="(item, index) in res_data">
				<div style="display: flex; justify-content: space-between;">
					<el-link style="font-size: 16px;" :href="'/employee-article-detail?id=' + item.id" target="_blank" type="primary" :underline="false">
						{{ item.title }}​</el-link>
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
	import { localGet } from '@/utils'
	
	export default {
		setup() {
			const state = reactive({
				is_login: false,
				res_data: [],
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				if(localGet('token')) {
					state.is_login = true
				}
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/staffs/list', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
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
	
			return {
				...toRefs(state),
				changePage,
				go_detail,
				Plus
			}
		}
	}
</script>

<style>
</style>
