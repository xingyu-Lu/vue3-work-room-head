<template>
	<el-row justify="center" align="middle"
		style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div
				style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>新闻动态</strong>
			</div>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item>新闻动态</el-breadcrumb-item>
	</el-breadcrumb>

	<el-card class="box-card">
		<el-row :gutter="20" v-for="(item,index) in res_data" style="margin-bottom: 20px;" justify="space-around"
			align="middle">
			<el-col :sm="24">
				<el-row :gutter="20">
					<el-col :sm="4">
						<el-image v-if="item.img_url" style="width: 100%; height: auto; cursor: pointer;"
							:src="item.img_url" :key="item.img_url" @click="go_detail('/yyxw_detail?id=' + item.id)">
						</el-image>
					</el-col>
					<el-col :sm="20">
						<div style="line-height: 50px; margin-left: 40px;">
							<div>
								<el-link :underline="false" :href="'/yyxw_detail?id=' + item.id" target="_blank">
									{{ item.title }}
								</el-link>
							</div>
							<div style="line-height: 18px;">
								<span>
									{{ item.strip_content }}
								</span>
							</div>
							<div>
								<el-link :underline="false" :href="'/yyxw_detail?id=' + item.id" target="_blank">
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

	export default {
		name: 'Introduce',
		setup() {
			const state = reactive({
				res_data: [],
				total: 0, // 总条数
				currentPage: 1, // 当前页
				pageSize: 10 // 分页大小
			})

			onMounted(() => {
				get_data()
			})

			const get_data = () => {
				axios.get('/api/head/news/yyxw', {
					params: {
						page: state.currentPage,
						page_size: state.pageSize,
						type: 0,
					}
				}).then(res => {
					state.res_data = res.data
					state.pageSize = res.pagination.perPage
					state.total = res.pagination.total
					state.currentPage = res.pagination.currentPage
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
				Plus
			}
		}
	}
</script>

<style>
	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
