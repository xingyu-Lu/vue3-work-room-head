<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>我的文章</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>我的文章</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<template #header>
			<el-button type="primary" @click="handleBack">返回</el-button>
		</template>

		<div style="display: flex; justify-content: center;"><h1 style="font-size: 30px; color: #333; font-weight: bold;" v-html="data.title"></h1></div>
		<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: -10px; margin-bottom: 20px;">
			发布时间：<span v-html="data.release_time"></span>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
			访问次数：<span v-html="data.num"></span>
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
			作者：<span>{{ data.name }}</span>
		</div>
		<div v-html="data.content"></div>
	</el-card>
</template>

<script>
	import {
		reactive,
		ref,
		toRefs,
		onMounted
	} from 'vue'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'

	export default {
		name: 'dynamic_preview',
		setup() {
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				data: {
					title: '',
					release_time: '',
					content: '',
					num: '',
					name: '',
				},
			})

			onMounted(() => {
				if (id) {
					axios.get(`/api/head/staffs/${id}`).then(res => {
						state.data = {
							title: res.data.title,
							release_time: res.data.release_time,
							content: res.data.content,
							num: res.data.num,
							name: res.data.staff_name
						}
					})
				}
			})

			const handleBack = () => {
				router.push({
					path: '/employee-my-article',
				})
			}

			return {
				...toRefs(state),
				handleBack,
			}
		}
	}
</script>

<style scoped>
	/* table 样式 */
	:deep() table {
	  border-top: 1px solid #ccc;
	  border-left: 1px solid #ccc;
	}
	:deep() table td,
	:deep() table th {
	  border-bottom: 1px solid #ccc;
	  border-right: 1px solid #ccc;
	  padding: 3px 5px;
	}
	:deep() table th {
		border-bottom: 2px solid #ccc;
		text-align: center;
		background-color: #f1f1f1
	}
	
	/* blockquote 样式 */
	:deep() blockquote {
	  display: block;
	  border-left: 8px solid #d0e5f2;
	  padding: 5px 10px;
	  margin: 10px 0;
	  line-height: 1.4;
	  font-size: 100%;
	  background-color: #f1f1f1;
	}
	
	/* code 样式 */
	:deep() code {
	  display: inline-block;
	  background-color: #f1f1f1;
	  border-radius: 3px;
	  padding: 3px 5px;
	  margin: 0 3px;
	}
	:deep() pre code {
	  display: block;
	}
	
	/* ul ol 样式 */
	:deep() ul,
	:deep() ol {
	  margin: 10px 0 10px 20px;
	}
	
	:deep() div[data-w-e-type="video"] {
		text-align: center;
	}
</style>
