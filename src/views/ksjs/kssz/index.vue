<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室设置</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row :gutter="24" justify="space-between" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kssz-ksdt-index?id=' + id)">科室动态</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kssz-outpatient-index?id=' + id)">科室门诊</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kssz-member-index?id=' + id)">科室成员</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kssz-columnset-index?id=' + id)">栏目设置</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kssz-column-index?id=' + id)">科室栏目</el-button>
		</el-col>
	</el-row>
	
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
				res_data: ref(''),
				column_list: [],
			})
			
			onMounted(() => {
				if (!localGet('userinfo')) {
					get_user_info()
				} else {
					state.res_data = localGet('userinfo')
				}
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					state.res_data = res.data
					localSet('userinfo', res.data)
				})
			}
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			return {
				...toRefs(state),
				go_detail,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
