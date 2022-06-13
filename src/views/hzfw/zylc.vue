<template>
	<el-row justify="center" align="middle"
		style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div
				style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>住院方式</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>住院方式</el-breadcrumb-item>
	</el-breadcrumb>

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
	}

	from 'vue'

	import {
		useRoute,
		useRouter
	}

	from 'vue-router'

	export default {
		/* name: 'ldtd', */
		setup() {
			const route = useRoute()
			const router = useRouter()
			const state = reactive({
					res_data: ref('')
				}) 
				
			onMounted(() => {
				get_data()
			}) 
			
			const get_data = () => {
				axios.get('/api/head/patientservices/mzlc', {
					params: {
						type: 1,
					}
				}).then(res => {
					state.res_data = res.data
				})
			}

			const go_detail = (url) => {
				window.open(url, '_blank')
			}

			return {
				...toRefs(state),
				go_detail,
				Plus,
			}
		}
	}
</script>

<style>
</style>
