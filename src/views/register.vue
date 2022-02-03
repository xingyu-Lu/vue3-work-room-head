<template>
	<el-row style="min-height: 100%;" justify="space-around" align="middle">
		<el-col :md="8">
			<el-card>
				<div
					style="justify-content: center; display: flex; font-size: 28px; color: #1BAEAE; font-weight: bold; margin-bottom: 20px;">
					宜宾市第三人民医院</div>
				<el-form label-position="top" :rules="rules" :model="loginModel" ref="loginRef">
					<el-form-item label="姓名" prop="name">
						<el-input type="text" v-model.trim="loginModel.name" autocomplete="off" placeholder="请输入姓名">
						</el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="mobile">
						<el-input type="text" v-model.trim="loginModel.mobile" autocomplete="off" placeholder="请输入手机号">
						</el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input type="text" v-model.trim="loginModel.email" autocomplete="off" placeholder="请输入手机号">
						</el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="code">
						<el-row :gutter="20">
							<el-col :md="16">
								<el-input type="text" v-model.trim="loginModel.code" autocomplete="off"
									placeholder="请输入验证码"></el-input>
							</el-col>
							<el-col :md="4">
								<el-button type="primary"><span v-show="show" @click="Verification">获取邮箱验证码</span>
									<span v-show="!show">{{ count }} s 后获取</span>
								</el-button>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password" v-model.trim="loginModel.password" autocomplete="off"
							placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="width: 100%" type="primary" @click="submitForm">立即注册</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
	import {
		ElMessage
	} from 'element-plus'
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
			const show = ref(true)
			const timer = ref()
			const time_count = ref(60)
			const count = ref();
			const loginRef = ref(null)
			const state = reactive({
				loginModel: {
					name: '',
					mobile: '',
					email: '',
					code: '',
					password: '',
				},
				checked: true,
				rules: {
					name: [{
						required: 'true',
						message: '姓名不能为空',
						trigger: 'blur'
					}],
					mobile: [{
						required: 'true',
						message: '手机号不能为空',
						trigger: 'blur'
					}],
					email: [{
						required: 'true',
						message: '邮箱不能为空',
						trigger: 'blur'
					}],
					code: [{
						required: 'true',
						message: '验证码不能为空',
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
						axios.post('/api/head/registers', {
							name: state.loginModel.name,
							mobile: state.loginModel.mobile,
							email: state.loginModel.email,
							code: state.loginModel.code,
							password: state.loginModel.password,
						}).then(res => {
							ElMessage.success('注册成功，待管理员审核')
							// window.location.href = '/login'
						})
					} else {
						return false;
					}
				})
			}
			const resetForm = () => {
				loginRef.value.resetFields();
			}

			const Verification = () => {
				if (!timer.value) {
					count.value = time_count.value;
					show.value = false;
					timer.value = setInterval(() => {
						if (count.value > 0 && count.value <= time_count.value) {
							count.value--;
						} else {
							show.value = true;
							clearInterval(timer.value);
							timer.value = null;
						}
					}, 1000);
				}
				get_code()
				ElMessage.success('已发送，请注意查收')
			};
			
			const get_code = () => {
				axios.get('/api/head/registers/code', {
					params: {
						email: state.loginModel.email,
					}
				})
			}

			return {
				...toRefs(state),
				show,
				count,
				loginRef,
				submitForm,
				resetForm,
				Verification
			}
		}
	}
</script>

<style>
</style>
