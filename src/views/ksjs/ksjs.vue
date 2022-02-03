<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>科室设置</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室设置</el-breadcrumb-item>
	</el-breadcrumb>
	
	<span style="color: #999;">索引：</span>
	<el-space wrap spacer="|" size="default" style="cursor: pointer; color: #444;">
		<template v-for="(item, index) in index_arr" :key="index">
			<span v-if="index == default_index" class="active" @click="search_index(index)">{{ item }}</span>
			<span v-else @click="search_index(index)">{{ item }}</span>
		</template>
	</el-space>
	
	<el-row :gutter="20" style="margin-bottom: 20px; margin-top: 40px;" justify="space-around" v-for="(item, index) in res_data">
		<el-col :md="8" v-for="(item_1, index_1) in item">
			<el-card shadow="hover" style="margin-bottom: 20px; cursor: pointer;" @click="go_detail('/ksjs_detail?id=' + item_1.id)">
				<template #header>
					<div class="card-header">
						<strong>{{ item_1.name }}</strong>
					</div>
				</template>
				<div style="line-height: 32px;">
					<div style="color: #999;">科室地址：{{ item_1.address }}</div>
					<div style="color: #999;">科室电话：{{ item_1.phone }}</div>
				</div>
			</el-card>
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
