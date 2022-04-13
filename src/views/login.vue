<template>	
	<el-row style="min-height: 100%;" justify="space-around" align="middle">
		<el-col :sm="7">
			<el-card>
				<div style="justify-content: center; display: flex; font-size: 28px; color: #1BAEAE; font-weight: bold; margin-bottom: 20px;">宜宾市第三人民医院</div>
				<el-form label-position="top" :rules="rules" :model="loginModel" ref="loginRef">
					<el-form-item label="手机号" prop="mobile">
						<el-input type="text" v-model.trim="loginModel.mobile" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model.trim="loginModel.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="width: 100%" type="primary" @click="submitForm">立即登录</el-button>
					</el-form-item>
					<!-- <el-form-item>
						<el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
					</el-form-item> -->
					<!-- <el-form-item>
						<el-button type="primary" native-type="reset" @click="resetForm">重置</el-button>
					</el-form-item> -->
				</el-form>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	import axios from '@/utils/axios'
	import md5 from 'js-md5'
	import {
		reactive,
		ref,
		toRefs
	} from 'vue'
	import {
		localSet
	} from '@/utils'
	export default {
		name: 'Login',
		setup() {
			const loginRef = ref(null)
			const state = reactive({
				loginModel: {
					mobile: '',
					password: ''
				},
				checked: true,
				rules: {
					mobile: [{
						required: true,
						message: '手机号不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			})
			const submitForm = async () => {
				loginRef.value.validate((valid) => {
					if (valid) {
						axios.post('/api/head/authorizations', {
							mobile: state.loginModel.mobile || '',
							password: state.loginModel.password
						}).then(res => {
							localSet('token', res.data.token)
							window.location.href = '/'
						})
					} else {
						console.log(2121)
						return false;
					}
				})
			}
			const resetForm = () => {
				loginRef.value.resetFields();
			}
			return {
				...toRefs(state),
				loginRef,
				submitForm,
				resetForm
			}
		}
	}
</script>

<style scoped>

</style>
