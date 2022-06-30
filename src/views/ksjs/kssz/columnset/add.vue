<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: office_id} }">科室设置</el-breadcrumb-item>
		<el-breadcrumb-item>科室动态</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="栏目名字" prop="name">
				<el-input v-model="Form.name" placeholder="请输入栏目名字" type="text"></el-input>
			</el-form-item>
			<el-form-item label="类型" prop="type">
				<el-radio-group v-model="Form.type">
					<el-radio label=1>仅图</el-radio>
					<el-radio label=0>图文或视频</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="Form.status" disabled>
					<el-radio label=1>已审核</el-radio>
					<el-radio label=0>待审核</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		Plus,
		Delete,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
		onBeforeUnmount
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		localGet,
		uploadImgServer,
		uploadImgsServer
	} from '@/utils'
	
	export default {
		name: 'menu_add',
		setup() {
			const Ref = ref(null)
			const editor = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id,
				office_id
			} = route.query
			
			const state = reactive({
				res_data: '',
				token: 'Bearer ' + localGet('token') || '',
				id: id,
				Form: {
					name: '',
					type: '0',
					status: '0',
				},
				
				rules: {
					name: [{
						required: true,
						message: '栏目必须',
						trigger: ['change'],
					}],
					type: [{
						required: true,
						message: '类型必须',
						trigger: ['change'],
					}],
				}
			})
			
			onMounted(() => {				
				if (id) {
					axios.get(`/api/head/technicalOfficeColumnSets/${id}`).then(res => {
						state.Form = {
							name: res.data.name,
							type: String(res.data.type),
							status: String(res.data.status)
						}
					})
				}
				
				if (!localGet('userinfo')) {
					get_user_info()
				} else {
					state.res_data = localGet('userinfo')
				}
			})
			
			onBeforeUnmount(() => {
				
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					state.res_data = res.data
					localSet('userinfo', res.data)
				})
			}
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							id: id,
							name: state.Form.name,
							type: state.Form.type,
						}
				
						let url = '/api/head/technicalOfficeColumnSets'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/head/technicalOfficeColumnSets/${id}`
						}
				
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/kssz-columnset-index',
								query: {
									id: office_id
								}
							})
						})
					}
				})
			}
			
			return {
				...toRefs(state),
				Ref,
				submitAdd,
				office_id
			}
		}
	}
</script>

<style>
</style>
