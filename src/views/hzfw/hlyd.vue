<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>护理园地</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>护理园地</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card>
		<ul style="color: #409EFF; line-height: 38px;">
			<li v-for="(item, index) in res_data">
				<div style="display: flex; justify-content: space-between;">
					<el-link style="font-size: 16px;" :href="'/hlyd_detail?id=' + item.id" target="_blank" type="primary" :underline="false">
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
	
	export default {
		setup() {
			const state = reactive({
				res_data: [],
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/patientservices/mzlc', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						type: 8
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
