<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>部门设置</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item>部门设置</el-breadcrumb-item>
	</el-breadcrumb>
	
	<span style="color: #999;">索引：</span>
	<el-space wrap spacer="|" size="default" style="cursor: pointer; color: #444; margin-bottom: 5px;">
		<template v-for="(item, index) in index_arr" :key="index">
			<span v-if="index == default_index" class="active" @click="search_index(index)">{{ item }}</span>
			<span v-else @click="search_index(index)">{{ item }}</span>
		</template>
	</el-space>
	
	<div v-if="res_data && res_data.index == 'all'">
		<!-- <strong>临床部门</strong> -->
		<el-row :gutter="20" style="margin-bottom: 10px; margin-top: 10px;" justify="start" v-for="(item, index) in res_data.office_0">
			<el-col :sm="4" :md="4" v-for="(item_1, index_1) in item">
				<!-- <el-card body-style="border" shadow="hover" style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)"> -->
						<strong style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">{{ item_1.name }}</strong>
				<!-- </el-card> -->
			</el-col>
		</el-row>
		<!-- <strong>医技部门</strong>
		<el-row :gutter="20" style="margin-bottom: 10px; margin-top: 10px;" justify="flex-start" v-for="(item, index) in res_data.office_1">
			<el-col :sm="4" :md="4" v-for="(item_1, index_1) in item">
				<el-card body-style="border" shadow="hover" style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">
						<strong style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">{{ item_1.name }}</strong>
				</el-card>
			</el-col>
		</el-row> -->
		<!-- <strong>保障部门</strong>
		<el-row :gutter="20" style="margin-bottom: 10px; margin-top: 10px;" justify="flex-start" v-for="(item, index) in res_data.office_2">
			<el-col :sm="4" :md="4" v-for="(item_1, index_1) in item">
				<el-card body-style="border" shadow="hover" style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">
						<strong style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">{{ item_1.name }}</strong>
				</el-card>
			</el-col>
		</el-row> -->
	</div>
	
	<div v-if="res_data && res_data.index != 'all'">
		<el-row :gutter="20" style="margin-bottom: 10px; margin-top: 20px;" justify="start" v-for="(item, index) in res_data.search">
			<el-col :sm="4" v-for="(item_1, index_1) in item">
				<!-- <el-card shadow="hover" style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)"> -->
					<!-- <template #header> -->
						<!-- <div class="card-header"> -->
							<strong style="margin-bottom: 20px; cursor: pointer; color: #409eff;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">{{ item_1.name }}</strong>
						<!-- </div> -->
					<!-- </template> -->
					<!-- <div style="line-height: 32px;">
						<div style="color: #999;">科室地址：{{ item_1.address }}</div>
						<div style="color: #999;">科室电话：{{ item_1.phone }}</div>
					</div> -->
				<!-- </el-card> -->
			</el-col>
		</el-row>
	</div>
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
				default_index: 'all',
				index_arr: {
					'all': '全部',
					'a': 'A',
					'b': 'B',
					'c': 'C',
					'd': 'D',
					'e': 'E',
					'f': 'F',
					'g': 'G',
					'h': 'H',
					'i': 'I',
					'j': 'J',
					'k': 'K',
					'l': 'L',
					'm': 'M',
					'n': 'N',
					'o': 'O',
					'p': 'P',
					'q': 'Q',
					'r': 'R',
					's': 'S',
					't': 'T',
					'u': 'U',
					'v': 'V',
					'w': 'W',
					'x': 'X',
					'y': 'Y',
					'z': 'Z',
				},
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/offices/kejs', {
					params: {
						index: state.default_index
					}
				}).then(res => {					
					state.res_data = res.data
				})
			}
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			const search_index = (index) => {
				state.default_index = index
				get_data()
			}
			
			return {
				...toRefs(state),
				go_detail,
				search_index,
			}
		}
	}
</script>

<style scoped>
	.active {
		background-color: rgb(66 156 226);
		width: 40px;
		text-align: center;
	}
</style>
