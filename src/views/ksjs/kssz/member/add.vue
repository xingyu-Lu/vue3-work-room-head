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
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: office_id} }">科室设置</el-breadcrumb-item>
		<el-breadcrumb-item>科室成员</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="员工" prop="staff_id">
				<el-select v-model="Form.staff_id" placeholder="Select" filterable>
					<el-option v-for="item in Form.staff_list" :key="item.id" :label="item.name" :value="item.id">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="是否负责人" prop="is_head">
				<el-radio-group v-model="Form.is_head" disabled>
					<el-radio label=1>是</el-radio>
					<el-radio label=0>否</el-radio>
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
		uploadImgServer,
		uploadImgsServer,
		localGet,
		localSet
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
					staff_id: '',
					is_head: '0',
					staff_list: [],
				},
				
				rules: {
					staff_id: [{
						required: true,
						message: '员工必须',
						trigger: ['change'],
					}],
					is_head: [{
						required: true,
						message: '是否负责人必须',
						trigger: ['change'],
					}],
				}
			})
			
			onMounted(() => {
				get_staff_list()
				
				if (id) {
					axios.get(`/api/head/technicalOfficeMembers/${id}`).then(res => {
						state.Form = {
							staff_id: res.data.staff_id,
							is_head: String(res.data.is_head),
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
			
			const get_staff_list = async () => {
				const staff_list = await axios.get('/api/head/staffs/staff_list')
				state.Form.staff_list = staff_list.data
			}
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							id: id,
							staff_id: state.Form.staff_id,
							is_head: state.Form.is_head,
						}
				
						let url = '/api/head/technicalOfficeMembers'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							httpOption = axios.put
							url = `/api/head/technicalOfficeMembers/${id}`
						}
				
						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/kssz-member-index',
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
				office_id,
			}
		}
	}
</script>

<style>
</style>
