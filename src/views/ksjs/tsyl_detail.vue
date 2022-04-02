<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>特色医疗</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>{{res_data.office_name}}</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row :gutter="24" justify="space-around" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs_detail?id=' +id)">科室介绍</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksdt?id=' + id)">科室动态</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksys?id=' + id)">科室医生</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksmz?id=' + id)">科室门诊</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kstsyl?id=' + id)">特色医疗</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/kstp?id=' + id)">科室图片</el-button>
		</el-col>
		<el-col :sm="3">
			<el-button type="primary" @click="go_detail('/ksjkkp?id=' + id)">健康科普</el-button>
		</el-col>
	</el-row>
	
	<div style="display: flex; justify-content: center;"><strong v-html="res_data.title"></strong></div>
	<div style="display: flex; justify-content: center; font-size: 12px; color: #5B5B5B; margin-top: 10px; margin-bottom: 20px;">
		发布时间：<span v-html="res_data.release_time"></span>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
		访问次数：<span v-html="res_data.num"></span>
	</div>

	<span v-if="res_data.content" v-html="res_data.content"></span>
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
			const {
				id
			} = route.query
			
			const state = reactive({
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/offices/tsyl_detail', {
					params: {
						id: id,
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
				id,
			}
		}
	}
</script>

<style>
</style>
