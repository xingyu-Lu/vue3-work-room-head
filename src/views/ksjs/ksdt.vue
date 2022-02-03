<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>科室动态</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>{{ office_name }}</el-breadcrumb-item>
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

	<el-card class="box-card">
		<el-row :gutter="20" v-for="(item,index) in res_data" style="margin-bottom: 20px;" justify="space-around"
			align="middle">
			<el-col :md="24">
				<el-row :gutter="20">
					<el-col :md="4">
						<el-image v-if="item.img_url" style="width: 100%; height: auto; cursor: pointer;"
							:src="item.img_url" :key="item.img_url" @click="go_detail('/ksjs_dt_detail?id=' + item.id)">
						</el-image>
					</el-col>
					<el-col :md="20">
						<div style="line-height: 50px; margin-left: 40px;">
							<div>
								<el-link :underline="false" :href="'/ksjs_dt_detail?id=' + item.id" target="_blank">
									{{ item.title }}
								</el-link>
							</div>
							<div style="line-height: 18px;">
								<span>
									{{ item.strip_content }}
								</span>
							</div>
							<div>
								<el-link :underline="false" :href="'/ksjs_dt_detail?id=' + item.id" target="_blank">
									{{ item.release_time }}
								</el-link>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
		<el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"
			:current-page="currentPage" @current-change="changePage" />
	</el-card>

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
				office_name: '',
				res_data: ref(''),
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/offices/ksdt', {
					params: {
						id: id,
						page: state.currentPage,
						page_size: state.pageSize,
					}
				}).then(res => {
					state.res_data = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
					state.office_name = res.data[0].office_name
				})
			}
			
			const changePage = (val) => {
				state.currentPage = val
				get_data()
			}
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			return {
				...toRefs(state),
				changePage,
				go_detail,
				Plus,
				id,
			}
		}
	}
</script>

<style>
</style>
