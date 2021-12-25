<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_03.jpg" lazy></el-image>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>视频新闻</el-breadcrumb-item>
	</el-breadcrumb>

	<p style="text-align:center;"><b>宜宾市第三人民医院儿科</b></p>
	<p style="text-align:center;">发布时间：2021/7/13 11:25:23&nbsp;&nbsp;&nbsp; 访问次数：<em>52</em>&nbsp;&nbsp;&nbsp; 来源：</p>
	<p>
	<p><br /></p>
	</p>
	<p style="display: flex; justify-content: center;">
		<video src="https://www.ybssyy.com/images/video/3yyek.mp4" width="1500" controls="controls">
		</video>
	</p>

</template>

<script>
	export default {
		setup() {
			document.title = '68岁白内障患者重见光明：我终于看清了！感谢眼科医护团队'
		}
	}
</script>

<style>
</style>
