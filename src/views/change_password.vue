<template>
	<el-card>
		<template #header>
			<h1 style="text-align: center; color: #409eff;">修改密码</h1>
		</template>
		
		<el-form :model="Form" :rules="rules" label-width="100px" ref="Ref">
			<el-form-item label="新密码" prop="password">
				<el-input v-model="Form.password" placeholder="请输入密码" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">立即修改</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	
	export default {
		setup() {
			const Ref = ref(null)
			const route = useRoute()
			const router = useRouter()
			const state = reactive({
				Form: {
					password: '',
				},
				rules: {
					password: [{
						required: true,
						message: '密码必须',
						trigger: ['change'],
					}],
				},
			})
			
			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						let httpOption = axios.put
						let params = {
							password: state.Form.password,
						}
			
						let url = '/api/head/staffs/change_pwd'
			
						httpOption(url, params).then(() => {
							ElMessage.success('修改成功')
							router.push({
								path: '/'
							})
						})
					}
				})
			}
			
			return {
				...toRefs(state),
				Ref,
				submitAdd,
			}
		}
	}
</script>

<style>
</style>
