<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="office_info">{{ office_info.name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室动态</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row v-for="(item, index) in column_list" :gutter="24" justify="space-between" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col v-for="(item_1, index_1) in item" :sm="3">
			<el-button type="primary" @click="go_detail(item_1.url + '?id=' + id + '&column_id=' + item_1.id + '&column_name=' + item_1.name + '&column_type=' + item_1.type)">{{ item_1.name }}</el-button>
		</el-col>
	</el-row>
	
	<el-row v-if="is_login && is_self" :gutter="24" justify="space-between" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kssz?id=' + id)">科室设置</el-button>
		</el-col>
	</el-row>

	<el-card class="box-card">
		<el-row :gutter="20" v-for="(item,index) in res_data" style="margin-bottom: 20px;" justify="space-around"
			align="middle">
			<el-col :sm="24">
				<el-row :gutter="20">
					<el-col :sm="4">
						<el-image v-if="item.img_url" style="width: 100%; height: auto; cursor: pointer;"
							:src="item.img_url" :key="item.img_url" @click="go_detail('/ksjs_dt_detail?id=' + item.id)">
						</el-image>
					</el-col>
					<el-col :sm="20">
						<div style="line-height: 50px; margin-left: 40px;">
							<div>
								<el-link :underline="false" :href="'/ksjs_dt_detail?id=' + item.id" target="_blank">
									{{ item.title }}
								</el-link>
							</div>
							<div style="line-height: 18px;">
								<span>
									{{ item.strip_content }}
								</span>
							</div>
							<div>
								<el-link :underline="false" :href="'/ksjs_dt_detail?id=' + item.id" target="_blank">
									{{ item.release_time }}
								</el-link>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
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
				id
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
				get_user_info()
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					localSet('userinfo', res.data)
				})
			}
			
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
				axios.get('/api/head/offices/ksdt', {
					params: {
						id: id,
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
				window.open(url, '_blank')
			}
			
			return {
				...toRefs(state),
				changePage,
				go_detail,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
