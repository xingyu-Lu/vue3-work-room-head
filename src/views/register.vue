<template>
	<el-row style="min-height: 100%;" justify="space-around" align="middle">
		<el-col :md="8">
			<el-card>
				<div style="justify-content: center; display: flex;">宜宾市第三人民医院</div>
				<el-form label-position="top" :rules="rules" :model="loginModel" ref="loginRef">
					<el-form-item label="手机号" prop="username">
						<el-input type="text" v-model.trim="loginModel.username" autocomplete="off" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="password">
						<el-input type="text" v-model.trim="loginModel.password" autocomplete="off" placeholder="请输入验证码"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model.trim="loginModel.password" autocomplete="off" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<!-- <div>注册表示您已同意<a>《服务条款》</a></div> -->
						<el-button style="width: 100%" type="primary">立即注册</el-button>
					</el-form-item>
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
					username: '',
					password: ''
				},
				checked: true,
				rules: {
					username: [{
						required: 'true',
						message: '账户不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: 'true',
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			})
			const submitForm = async () => {
				loginRef.value.validate((valid) => {
					if (valid) {
						axios.post('/login.php', {
							userName: state.loginModel.username || '',
							passwordMd5: md5(state.loginModel.password)
						}).then(res => {
							// localSet('token', res)
							window.location.href = '/login'
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

<style>
</style>
