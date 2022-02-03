<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>科室医生</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>{{ res_data.office_name }}</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row :gutter="24" justify="space-around" align="middle" style="line-height: 36px; margin-bottom: 20px;">
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/ksjs_detail?id=' +id)">科室介绍</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksdt?id=' + id)">科室动态</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/ksjs-ksys?id=' + id)">科室医生</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/ksmz?id=' + id)">科室门诊</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kstsyl?id=' + id)">特色医疗</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/kstp?id=' + id)">科室图片</el-button>
		</el-col>
		<el-col :md="3">
			<el-button type="primary" @click="go_detail('/ksjkkp?id=' + id)">健康科普</el-button>
		</el-col>
	</el-row>

	<el-row v-for="(item,index) in res_data" :gutter="20" justify="space-around">
		<el-col v-for="(item_1, index_1) in item" :md="4">
			<el-link :href="'/ksjs_ys_detail?id=' + item_1.id" :underline="false" target="_blank">
				<el-card :body-style="{ padding: '10px'}" shadow="never">
					<div class="img" style="overflow: hidden;">
						<img :src="item_1.img_url" />
					</div>
	
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">{{ item_1.name }}</span>
						<div style="display: flex; justify-content: space-around;">
							<div style="list-style: none;">
								<!-- <li v-for="(item_2, index_2) in item_1.position">{{ item_2 }}</li> -->
								<li v-for="(item_3, index_3) in item_1.professional">{{ item_3 }}</li>
							</div>
							<!-- <el-link style="font-size: 12px;" :href="'/ksjs_ys_detail?id=' + item_1.id"
								target="_blank" type="primary" :underline="false" :icon="Plus">详细信息
							</el-link> -->
						</div>
					</div>
				</el-card>
			</el-link>
		</el-col>
	</el-row>
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
				axios.get('/api/head/offices/ksys', {
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

<style scoped>
	.img>img {
		width: 100%;
		transition: all 0.6s;
	}
	
	.img>img:hover {
		transform: scale(1.2);
	}
</style>
