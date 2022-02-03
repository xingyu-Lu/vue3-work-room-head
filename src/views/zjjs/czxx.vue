<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>出诊信息</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>出诊信息</el-breadcrumb-item>
	</el-breadcrumb>
	
	<h2 style="color: rgb(51, 127, 229); text-align: center;">院本部</h2>
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
	
	<h2 style="color: rgb(51, 127, 229); text-align: center;">李庄院区</h2>
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
	
	export default {
		name: 'ldtd',
		
		setup() {
			const route = useRoute()
			const router = useRouter()
			
			const state = reactive({
				res_data: [],
				res_data_1: [],
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/offices/ksmz', {
					params: {
						yq_type: 0
					}
				}).then(res => {
					state.res_data = res.data
				})
				
				axios.get('/api/head/offices/ksmz', {
					params: {
						yq_type: 1
					}
				}).then(res => {
					state.res_data_1 = res.data
				})
			}
			
			return {
				...toRefs(state),
				Plus,
			}
		}
	}
</script>

<style>
</style>
