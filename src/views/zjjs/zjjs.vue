<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_02.jpg" lazy></el-image>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>专家介绍</el-breadcrumb-item>
	</el-breadcrumb>

	<el-select v-model="value" placeholder="请选择" style="margin-bottom: 20px; margin-right: 10px;">
		<el-option v-for="item of options" :key="item.value" :label="item.lable" :value="item.value">
		</el-option>
	</el-select>
	<el-button type="primary">搜索</el-button>
	<el-row :gutter="20" style="margin-bottom: 20px;">
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0618/10455887/image/20200910170034_9957.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">解德琼</span>
					<div style="display: flex; justify-content: space-around">
						<div style="list-style: none;">
							<li>党委书记</li>
							<li>院长</li>
							<li>主任医师</li>
							<li>医学博士</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2021/1209/15482057/image/20211209155013_5024.png"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">吴淼</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>党委副书记</li>
							<li>院长</li>
							<li>博士</li>
							<li>研究生导师</li>
							<li>主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px'}" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0608/16172550/image/20201228173119_7749.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">彭坤云</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>副院长</li>
							<li>主任中医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0618/10365054/image/20200910165226_7301.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">赵勉</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>副院长</li>
							<li>主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0608/16423465/image/20201201160017_3593.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">刘堂华</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>副院长</li>
							<li>主任医师</li>
							<li>医学博士</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0608/16411485/image/20210125115026_0126.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">唐浩</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>副院长</li>
							<li>副主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
	<el-row :gutter="20" style="margin-bottom: 20px;">
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="	https://www.ybssyy.com/uploadfiles/2015/0604/10210045/image/20210126113354_0244.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">徐良</span>
					<div style="display: flex; justify-content: space-around">
						<div style="list-style: none;">
							<li>主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px'}" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0618/10435443/image/20211130114607_8945.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">滕华安</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0618/10420628/image/20210126112709_0966.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">冯天雷</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>主任中医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2013/0622/10541370/image/20210126112900_6132.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">郭昌平</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>副主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2020/1203/11134912/image/20210125175657_0185.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">徐祥富</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>病理科主任</li>
							<li>副主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
		<el-col :md="4">
			<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="hover">
				<img src="https://www.ybssyy.com/uploadfiles/2014/0418/11103771/image/20210125154515_0283.jpg"
					style="width: 100%;" />
				<div style="padding: 14px; line-height: 36px; font-size: 14px;">
					<span style="color: #DC8C00;">周立红</span>
					<div style="display: flex; justify-content: space-around;">
						<div style="list-style: none;">
							<li>主任医师</li>
						</div>
						<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
							:underline="false" :icon="Plus">详细信息</el-link>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
	<el-pagination background layout="prev, pager, next" :total="1000">
	</el-pagination>
</template>
<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
	import {
		reactive, toRefs, ref
	} from 'vue'

	export default {
		setup() {
			const value = ref('')
			const state = reactive({
				options: [{
						value: '肾病内科、风湿免疫科',
						label: '肾病内科、风湿免疫科',
					},
					{
						value: '神经内科、内分泌科',
						label: '神经内科、内分泌科',
					},
					{
						value: '呼吸与危重症医学科',
						label: '呼吸与危重症医学科',
					},
					{
						value: '重症医学科',
						label: '重症医学科',
					},
					{
						value: '中医·老年病科',
						label: '中医·老年病科',
					},
					{
						value: '感染科',
						label: '感染科',
					},
					{
						value: '消化内科',
						label: '消化内科',
					},
					{
						value: '急症科',
						label: '急症科',
					},
					{
						value: '儿科',
						label: '儿科',
					},
					{
						value: '心血管内科(市级重点专科)',
						label: '心血管内科(市级重点专科)',
					},
				]
			})

			return {
				...toRefs(state),
				value,
				Plus
			}
		}
	}
</script>

<style>
</style>
