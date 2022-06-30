<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="height: 150px; align-items: center; justify-content: center; display: flex; font-size: 48px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="office_info">{{ office_info.name }}</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item>{{ column_name }}</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row v-for="(item, index) in column_list" :gutter="20" justify="start" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col v-for="(item_1, index_1) in item" :sm="4">
			<el-button v-if="column_name == item_1.name || item_1.name == '科室介绍' && column_name == undefined" type="primary" @click="go_detail(item_1.url + '?id=' + id + '&column_id=' + item_1.id + '&column_name=' + item_1.name + '&column_type=' + item_1.type)">{{ item_1.name }}</el-button>
			<el-button v-else @click="go_detail(item_1.url + '?id=' + id + '&column_id=' + item_1.id + '&column_name=' + item_1.name + '&column_type=' + item_1.type)">{{ item_1.name }}</el-button>
		</el-col>
	</el-row>
	
	<el-row v-if="is_login && is_self" :gutter="24" justify="start" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kssz?id=' + id)">科室设置</el-button>
		</el-col>
	</el-row>

	<el-card v-if="column_type == 0">
		<ul style="color: #409EFF; line-height: 38px;">
			<li v-for="(item, index) in res_data">
				<div style="display: flex; justify-content: space-between;">
					<el-link style="font-size: 16px;" :href="'/ksjs-column-detail?id=' + item.id + '&office_id=' + item.office_id + '&column_name=' + item.column_name + '&column_type=' + column_type" target="_blank" type="primary" :underline="false">
						{{ item.title }}​</el-link>
					<span style="color: #999;">{{ item.release_time }}</span>
				</div>
			</li>
		</ul>
		
		<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>
	
	<el-row v-if="column_type == 1" :gutter="20" justify="start" style="margin-bottom: 20px;" v-for="(item, index) in res_data">		
		<el-col :sm="4" v-for="(item_1, index_1) in item">
			<el-card :body-style="{ padding: '0px' }">
				<img :src="item_1.url"
					style="width: 100%; cursor: pointer;" @click="go_detail('/ksjs-column-detail?id=' + item_1.id + '&office_id=' + item_1.office_id + '&column_name=' + item_1.column_name + '&column_type=' + column_type)" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px; cursor: pointer;">
					<div style="display: flex; justify-content: space-around">
						<div style="list-style: none;">
							<li>{{ item_1.title }}</li>
						</div>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
	
	<el-pagination v-if="column_type == 1" background layout="prev, pager, next" :total="total" :page-size="pageSize"
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
	import {
		localGet,
		localSet
	} from '@/utils'
	
	export default {
		name: 'ldtd',
		
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id,
				column_name,
				column_id,
				column_type,
			} = route.query
			
			const state = reactive({
				office_info: '',
				res_data: ref(''),
				column_list: [],
				is_login: 0,
				is_self: 0,
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				get_data()
				get_column_list()
				is_login()
				is_self()
				get_office_info()
			})
			
			const get_office_info = () => {
				axios.get('/api/head/offices/info', {
					params: {
						id: id
					}
				}).then(res => {
					state.office_info = res.data
				})
			}
			
			const get_data = () => {
				axios.get('/api/head/offices/column', {
					params: {
						office_id: id,
						column_id: column_id,
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
			
			const get_column_list = () => {
				axios.get('/api/head/technicalOfficeColumnSets/list', {
					params: {
						office_id: id
					}
				}).then(res => {
					state.column_list = res.data
				})
			}
			
			const is_login = () => {
				if (localGet('token')) {
					state.is_login = 1
				}
			}
			
			const is_self = () => {
				if (localGet('userinfo') && localGet('userinfo').office.office_id == id) {
					state.is_self = 1
					// localGet('userinfo').office.forEach ((repo) => {
					// 	if (repo.office_id == id) {
					// 		state.is_self = 1
					// 	}
					// })
				}
			}
			
			const changePage = (val) => {
				state.currentPage = val
				get_data()
			}
			
			const go_detail = (url) => {
				window.open(url, '_self')
			}
			
			return {
				...toRefs(state),
				go_detail,
				changePage,
				Plus,
				id,
				column_name,
				column_type,
			}
		}
	}
</script>

<style>
</style>
