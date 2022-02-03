<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>领导团队</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>领导团队</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-row v-for="(item,index) in res_data" :gutter="20" justify="space-around" style="margin-bottom: 20px;">
		<el-col v-for="(item_1, index_1) in item" :md="4">
				<el-card :body-style="{ padding: '10px'}" shadow="never">
					<div class="img" style="overflow: hidden;">
						<img :src="item_1.img_url" />
					</div>
	
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">{{ item_1.name }}</span>
						<div style="display: flex; justify-content: space-around;">
							<div style="list-style: none;">
								<li v-for="(item_2, index_2) in item_1.position">{{ item_2 }}</li>
								<li v-for="(item_3, index_3) in item_1.professional">{{ item_3 }}</li>
							</div>
						</div>
					</div>
				</el-card>
		</el-col>
	</el-row>
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
			const state = reactive({
				res_data: ref('')
			})
			
			onMounted(() => {
				get_data()
			})
			
			const get_data = () => {
				axios.get('/api/head/briefs/ldtd').then(res => {
					state.res_data = res.data
				})
			}
			
			return {
				...toRefs(state)
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
