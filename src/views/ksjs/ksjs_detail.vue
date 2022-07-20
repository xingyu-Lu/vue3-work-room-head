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
		<el-breadcrumb-item>部门介绍</el-breadcrumb-item>
	</el-breadcrumb>
	
	<!-- <el-row :gutter="24" justify="space-around" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs_detail?id=' +id)">科室介绍</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksdt?id=' + id)">科室动态</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksys?id=' + id)">科室医生</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksmz?id=' + id)">科室门诊</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kstsyl?id=' + id)">特色医疗</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kstp?id=' + id)">科室图片</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjkkp?id=' + id)">健康科普</el-button>
		</el-col>
	</el-row> -->
	
	<el-row v-for="(item, index) in column_list" :gutter="18" justify="start" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col v-for="(item_1, index_1) in item" :sm="4">
			<el-button v-if="column_name == item_1.name || item_1.name == '部门介绍' && column_name == undefined || item_1.name == '介绍' && column_name == undefined" type="primary" @click="go_detail(item_1.url + '?id=' + id + '&column_id=' + item_1.id + '&column_name=' + item_1.name + '&column_type=' + item_1.type)">{{ item_1.name }}</el-button>
			<el-button v-else @click="go_detail(item_1.url + '?id=' + id + '&column_id=' + item_1.id + '&column_name=' + item_1.name + '&column_type=' + item_1.type)">{{ item_1.name }}</el-button>
		</el-col>
	</el-row>
	
	<el-row v-if="is_login && is_self" :gutter="24" justify="start" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kssz?id=' + id)">部门设置</el-button>
		</el-col>
	</el-row>

	<span v-if="res_data" v-html="res_data.content"></span>
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
				column_name
			} = route.query
			
			const state = reactive({
				office_info: '',
				res_data: ref(''),
				column_list: [],
				is_login: 0,
				is_self: 0,
			})
			
			onMounted(() => {
				get_data()
				get_column_list()
				get_office_info()
				get_user_info()
				is_login()
				is_self()
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					if (res.data) {
						localSet('userinfo', res.data)
						if (res.data.office.office_id == id) {
							state.is_self = 1
						}
					}
					// res.data.office.forEach ((repo) => {
					// 	if (repo.office_id == id) {
					// 		state.is_self = 1
					// 	}
					// })
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
				axios.get('/api/head/offices/ksjs_detail', {
					params: {
						id: id,
					}
				}).then(res => {
					state.res_data = res.data
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
			
			const go_detail = (url) => {
				window.open(url, '_self')
			}
			
			return {
				...toRefs(state),
				go_detail,
				Plus,
				id,
				column_name,
			}
		}
	}
</script>

<style scoped>
	/* table 样式 */
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
	 border-bottom: 2px solid #ccc;
	  text-align: center;
	  background-color: #f5f2f0
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f5f2f0;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f5f2f0;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul, ol {
	  margin: 10px 0 10px 20px;
	}
	
	:deep() input[type="checkbox"] {
	  margin-right: 5px;
	}
	
	:deep() div[data-w-e-type="video"] {
		text-align: center;
	}
</style>
