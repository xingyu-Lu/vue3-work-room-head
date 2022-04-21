<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="height: 150px; align-items: center; justify-content: center; display: flex; font-size: 48px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="office_info">{{ office_info.name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室门诊</el-breadcrumb-item>
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

	<h2 style="color: #444;">院本部</h2>
	<el-table :data="res_data" stripe style="width: 100%">
	    <el-table-column prop="office_name" label="科室名称" />
		<el-table-column prop="type" label="上下午">
		<template #default="scope">
			<span v-if="scope.row.type == 0">上午</span>
			<span v-if="scope.row.type == 1">下午</span>
		</template>
		</el-table-column>
		<el-table-column prop="monday" label="周一" />
		<el-table-column prop="tuesday" label="周二" />
		<el-table-column prop="wednesday" label="周三" />
		<el-table-column prop="thursday" label="周四" />
		<el-table-column prop="friday" label="周五" />
		<el-table-column prop="saturday" label="周六" />
		<el-table-column prop="sunday" label="周日" />
	</el-table>
	
	<el-divider></el-divider>
	
	<h2 style="color: #444;">李庄院区</h2>
	<el-table :data="res_data_1" stripe style="width: 100%">
	    <el-table-column prop="office_name" label="科室名称" />
		<el-table-column prop="type" label="上下午">
		<template #default="scope">
			<span v-if="scope.row.type == 0">上午</span>
			<span v-if="scope.row.type == 1">下午</span>
		</template>	
		</el-table-column>
		<el-table-column prop="monday" label="周一" />
		<el-table-column prop="tuesday" label="周二" />
		<el-table-column prop="wednesday" label="周三" />
		<el-table-column prop="thursday" label="周四" />
		<el-table-column prop="friday" label="周五" />
		<el-table-column prop="saturday" label="周六" />
		<el-table-column prop="sunday" label="周日" />
	</el-table>
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
			} = route.query
			
			const state = reactive({
				office_info: '',
				res_data: [],
				res_data_1: [],
				column_list: [],
				is_login: 0,
				is_self: 0,
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
				axios.get('/api/head/offices/ksmz', {
					params: {
						id: id,
						yq_type: 0
					}
				}).then(res => {
					state.res_data = res.data
				})
				
				axios.get('/api/head/offices/ksmz', {
					params: {
						id: id,
						yq_type: 1
					}
				}).then(res => {
					state.res_data_1 = res.data
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
	.img>img {
		width: 100%;
		transition: all 0.6s;
	}
	
	.img>img:hover {
		transform: scale(1.2);
	}
</style>
