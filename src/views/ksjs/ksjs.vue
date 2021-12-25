<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_07.jpg" lazy></el-image>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>科室介绍</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-tabs v-model="active">
	    <el-tab-pane label="非手术科室" name="first">
			<ul style="color: #409EFF; line-height: 38px;">
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						心血管内科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						儿科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						急诊科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						感染科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						消化内科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						重症医学科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						中医•老年病科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						呼吸与危重症医学科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						神经内科、内分泌科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						肾病内科、风湿免疫科</el-link>
				</li>
			</ul>
		</el-tab-pane>
	    <el-tab-pane label="手术科室" name="second">
			<ul style="color: #409EFF; line-height: 38px;">
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						口腔科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						麻醉科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						泌尿外科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						肝胆外科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						神经外科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						疼痛科（李庄）（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						胃肠肛门外科（市级重点专科）</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						骨一科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						骨二科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						肿瘤科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						妇产科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						疼痛科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						胸外科、普外科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						康复医学科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						眼科•耳鼻喉科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						上海肺科远程门诊</el-link>
				</li>
			</ul>
		</el-tab-pane>
	    <el-tab-pane label="诊断相关科室" name="third">
			<ul style="color: #409EFF; line-height: 38px;">
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						体检部</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						药学部</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						检验科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						输血科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						放射科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						超声科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						病理科</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						心电图室</el-link>
				</li>
				<li>
					<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
						功能检查科</el-link>
				</li>
			</ul>
		</el-tab-pane>
	  </el-tabs>
</template>

<script>
	import { ref } from 'vue'
	export default {
		setup() {
			const active = ref('first')
			return {
				active,
			}
		}
	}
</script>

<style>
</style>
