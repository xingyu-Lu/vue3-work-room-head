<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>历史沿革</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>历史沿革</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-tabs v-model="active">
	    <el-tab-pane label="历史沿革" name="first">
			<span v-if="res_data.lsyg" v-html="res_data.lsyg.content"></span>
		</el-tab-pane>
	    <el-tab-pane label="历任院长" name="second">
			<!-- <span v-html="res_data.lryz.content"></span> -->
			<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;" v-for="(item, index) in res_data.lryz">
				<el-col :sm="6" v-for="(item_1, index_1) in item">
					<el-card :body-style="{ padding: '0px' }">
						<!-- <img :src="item_1.img_url" style="width: 100%;" /> -->
						<el-image
						      style="width: 100%"
						      :src="item_1.img_url"
						      :preview-src-list="res_data.lryz_src"
						      :initial-index="item_1.id-1"
						      fit="cover"
						    />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>{{ item_1.name }}</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</el-tab-pane>
	    <el-tab-pane label="历史照片" name="third">
			<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;" v-for="(item, index) in res_data.lszp">
				<el-col :sm="6" v-for="(item_1, index_1) in item">
					<el-card :body-style="{ padding: '0px' }">
						<!-- <img :src="item_1.img_url"
							style="width: 100%;" /> -->
							<el-image
							      style="width: 100%"
							      :src="item_1.img_url"
							      :preview-src-list="res_data.lszp_src"
							      :initial-index="item_1.id-1"
							      fit="cover"
							    />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>{{ item_1.title }}</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import axios from '@/utils/axios'
	import {
		onMounted,
		reactive,
		ref,
		toRefs
	} from 'vue'
	
	export default {
		name: 'ldtd',
		
		setup() {
			const active = ref('first')
			
			const state = reactive({
				res_data: {
					lsyg: '',
					lryz: '',
					lryz_src: [],
					lszp: [],
					lszp_src: [],
				}
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/briefs/lsyg').then(res => {
					state.res_data.lsyg = res.data.history
					state.res_data.lryz = res.data.history_leader
					state.res_data.lryz_src = res.data.src_list.history_leader
					state.res_data.lszp = res.data.history_pic
					state.res_data.lszp_src = res.data.src_list.history_pic
				})
			}
			
			return {
				...toRefs(state),
				active
			}
		}
	}
</script>

<style>
</style>
