<template>
	<el-row style="margin-bottom: 20px;">
		<el-col :md="24">
			<el-carousel>
				<el-carousel-item v-for="item in carousel_arr" :key="item">
					<img :src=item alt="" style="width: 100%; height: 100%;">
				</el-carousel-item>
			</el-carousel>
		</el-col>
	</el-row>
	<!-- <el-card class="account-container">
		<el-row>
			<el-col>
				<div>
					<el-button @click="show = !show">Click Me</el-button>

					<div style="margin-top: 20px; margin-bottom: 20px; height: 200px">
						<el-collapse-transition>
							<div v-show="show">
								<div class="transition-box">el-collapse-transition</div>
								<div class="transition-box">el-collapse-transition</div>
							</div>
						</el-collapse-transition>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<el-card>
					<el-tabs style="height: 200px;">
						<el-tab-pane label="Config">Config</el-tab-pane>
						<el-tab-pane label="Role">Role</el-tab-pane>
						<el-tab-pane label="Task">Task</el-tab-pane>
					</el-tabs>
				</el-card>
			</el-col>
		</el-row>
		<h1>系统简介</h1>
		<div style="line-height: 30px">
			vue3-admin 是一套企业级后台管理系统，基于 Spring Boot 、Vue 3.0 相关技术栈开发，供各位开发者们体验和学习，一定给你最好的学习体验。
		</div>
		<img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616331765416/WechatIMG40038.png" alt="">
		<h1>开发及部署文档</h1>
		<img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616938239101/419241616938196_.pic.jpg" />
		<ul class="course">
			<li>
				<el-link href="/api_test" target="_blank" :underline="false">api-test test</el-link>
			</li>
			<li>开篇词：通关Vue3.0 企业级项目开发，升职加薪快人一步</li>
			<li>项目须知与课程约定</li>
			<li>大势所趋：“前后端分离”开发模式</li>
			<li>Vue 3.0 简介及开发环境搭建</li>
			<li>Vue 3.0 组合 API 入口 Setup 浅析</li>
			<li>Vue 3.0 之响应式系统 API</li>
			<li>Vue 3.0 之生命周期钩子函数、提供注入</li>
			<li>Vue 3.0 性能和业务层面上的提升</li>
			<li>Vite 2.0 原理分析及简单插件编写</li>
			<li>Vue-Router 4.x 使用方法及路由原理</li>
			<li>Vue 3.0 实战项目启动篇</li>
			<li>技术选型之 Spring Boot</li>
			<li>后端开发环境搭建</li>
			<li>快速搭建一个 Spring Boot 项目</li>
			<li>Spring Boot 实践之 Web 功能开发</li>
			<li>Spring Boot 实践之文件上传处理</li>
			<li>Spring Boot 实践之整合 MyBatis 操作数据库</li>
			<li>Spring Boot 实践之整合 Lombok</li>
			<li>Spring Boot 实践之整合 Swagger 生成接口文档</li>
			<li>后端 API 项目启动和运行注意事项</li>
		</ul>
		<ul class="course">
			<li>接口参数处理和统一响应结果处理</li>
			<li>API 接口开发实战之用户登录接口开发</li>
			<li>API 接口开发实战之用户身份认证详解</li>
			<li>API 接口开发实战之轮播图管理模块接口开发</li>
			<li>API 接口开发实战之商品分类管理模块接口开发</li>
			<li>API 接口开发实战之商品管理模块接口开发</li>
			<li>API 接口开发实战之商品配置管理模块接口开发</li>
			<li>API 接口开发实战之订单管理模块接口开发</li>
			<li>成为一名有独立开发能力的前端工程师</li>
			<li>Vite 2.0 + Vue 3.0 + Element-plus 搭建管理后台项目</li>
			<li>Vue 3.0 实战之管理后台左右栏目布局（Menu 菜单组件）</li>
			<li>Vue 3.0 实战之登录鉴权（Form 表单组件）</li>
			<li>Vue 3.0 实战之首页大盘数据（Echart 5.x）</li>
			<li>Vue 3.0 实战之首页配置 Table</li>
			<li>Vue 3.0 实战之分类管理（多级共用 Table）</li>
			<li>Vue 3.0 实战之商品管理</li>
			<li>Vue 3.0 实战之订单管理（操作多级判断）</li>
			<li>Vue 3.0 实战之会员管理、账户修改</li>
			<li>pm2 实现一键部署云端服务器</li>
			<li>常见问题汇总讲解</li>
		</ul>
		<h1>技术选型</h1>
		<ul style="font-weight: bold;">
			<li>Vue 3.x</li>
			<li>Vite 2.x</li>
			<li>Vue-Router 4.x</li>
			<li>Element-Plus（适配全新 Vue 3.x 的 PC 端组件库）</li>
			<li>Echarts 5.0</li>
			<li>axios</li>
			<li>wangEditor</li>
		</ul>
		<h1>联系作者</h1>
		<ul>
			<li>我的邮箱：2449207463@qq.com</li>
			<li>QQ技术交流群：932227898、707779034</li>
		</ul>
	</el-card> -->
	<h1 style="color: #666;">新闻动态</h1>
	<el-row :gutter="20" style="margin-bottom: 20px;" justify="space-around">
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>医院公告</span>
						<el-link style="font-size: 12px;" href="/yygg" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span ref="bigref">医院新闻</span>
						<el-link style="font-size: 12px;" href="/yyxw" target="_blank" type="primary"
							:underline="false" :icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yyxw_detail" target="_blank" type="primary" :underline="false">
								68岁白内障患者重见光明：...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>视频新闻</span>
						<el-link style="font-size: 12px;" href="/spxw" target="_blank" type="primary"
							:underline="false" :icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="spxw_detail" target="_blank" type="primary" :underline="false">
								宜宾市第三人民医院儿科...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
	</el-row>

	<h1 style="color: #666;">科室介绍</h1>
	<el-row :gutter="20" style="margin-bottom: 20px;" justify="space-around">
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>非手术科室</span>
						<el-link style="font-size: 12px;" href="/ksjs" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								肾病内科、风湿免疫科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								神经内科、内分泌科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								呼吸与危重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								中医·老年病科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								感染科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								消化内科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								急症科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								儿科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								心血管内科(市级重点专科)</el-link>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span ref="bigref">手术科室</span>
						<el-link style="font-size: 12px;" href="/ksjs" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								上海肺科远程门诊</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								眼科·耳鼻喉科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								胸外科、普外科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								康复医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								疼痛科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								妇产科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								肿瘤科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								骨二科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								骨一科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								胃肠肛门外壳(市级重点专科)</el-link>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
		<el-col :md="8">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>诊断相关科室</span>
						<el-link style="font-size: 12px;" href="/ksjs" target="_blank" type="primary"
							:underline="false" :icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								体检部</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								药学部</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								检验科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								输血科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								放射科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								超声科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								病理科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								心电图室</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary" :underline="false">
								功能检查科</el-link>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
	</el-row>

	<h1 style="color: #666;">专家介绍</h1>
	<el-card>
		<template #header>
			<div class="card-header">
				<span>专家团队</span>
				<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20">
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px' }" shadow="hover">
					<img src="https://www.ybssyy.com/uploadfiles/2021/1130/11512665/image/20211130115224_2578.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">赵习末</span>
						<div style="display: flex; justify-content: space-around">
							<div style="list-style: none;">
								<li>疼痛科(李庄)医生</li>
								<li>副主任中医师</li>
							</div>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px'}" shadow="hover">
					<img src="	https://www.ybssyy.com/uploadfiles/2020/0305/10401999/image/20201201154720_4999.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">周红</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px' }" shadow="hover">
					<img src="https://www.ybssyy.com/uploadfiles/2020/0305/10363879/image/20201201154806_9844.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">曾辉</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px' }" shadow="hover">
					<img src="	https://www.ybssyy.com/uploadfiles/2021/0125/16111989/image/20210125161416_1816.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">古仁俊</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px' }" shadow="hover">
					<img src="https://www.ybssyy.com/uploadfiles/2020/0305/10363879/image/20201201154806_9844.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">曾辉</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px', height: '550px' }" shadow="hover">
					<img src="https://www.ybssyy.com/uploadfiles/2020/0305/10363879/image/20201201154806_9844.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">曾辉</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
								:icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</el-card>

	<h1 style="color: #666;">患者服务</h1>
	<el-card>
		<template #header>
			<div class="card-header">
				<span>就医指南</span>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_01.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">门诊流程</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_02.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">住院流程</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_03.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">出诊信息</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_04.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">艾滋病</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_05.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">楼宇分布</el-link>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_06.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">联系我们</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_07.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">检查须知</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_08.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">健康体检</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_09.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">医保指南</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover">
					<img src="https://www.ybssyy.com/images/images/link_10.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
							:icon="Plus">院长信箱</el-link>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</el-card>
	<el-card style="margin-top: 20px; margin-bottom: 20px;">
		<template #header>
			<div class="card-header">
				<span>护理园地</span>
				<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around">
			<el-col :md="10">
				<el-image src="https://www.ybssyy.com/uploadfiles/2021/1222/09123096/image/20211222091828_5996.jpg" lazy></el-image>
			</el-col>
			<el-col :md="10">
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</el-card>
	<el-card style="margin-top: 20px; margin-bottom: 20px;">
		<template #header>
			<div class="card-header">
				<span>健康促进</span>
				<el-link style="font-size: 12px;" href="" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around">
			<el-col :md="10">
				<el-image src="https://www.ybssyy.com/uploadfiles/2021/1222/09123096/image/20211222091828_5996.jpg" lazy></el-image>
			</el-col>
			<el-col :md="10">
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="" target="_blank" type="primary" :underline="false">
								朋友们请注意！疫情防护别大意！【新型冠状病毒科普知识】...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
	import {
		Plus
	} from '@element-plus/icons-vue'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		name: 'Introduce',
		setup() {
			const show = ref(true)
			const goJuejin = () => {
				console.log('goJuejin')
				window.open('https://juejin.cn/book/6933939264455442444', 'target')
			}
			const state = reactive({
				carousel_arr: [
					'https://www.ybssyy.com/uploadfiles/2021/1018/08545069/image/20211018090603_1806.jpg',
					'https://www.ybssyy.com/uploadfiles/2013/0306/12015492/image/20201130181527_7812.jpg',
					'https://www.ybssyy.com/uploadfiles/2013/0306/12044362/image/20130521172618_0937.jpg',
					'https://www.ybssyy.com/uploadfiles/2013/0306/12022353/image/20200228091628_7470.png',
				],
			})

			return {
				...toRefs(state),
				show,
				goJuejin,
				Plus,
			}
		}
	}
</script>
<style scoped>
	.transition-box {
		margin-bottom: 10px;
		width: 200px;
		height: 100px;
		border-radius: 4px;
		background-color: #409eff;
		text-align: center;
		color: #fff;
		padding: 40px 20px;
		box-sizing: border-box;
		margin-right: 20px;
	}

	.course {
		font-weight: bold;
		display: inline-block;
	}

	.course li {
		line-height: 36px;
		color: #409eff;
		cursor: pointer;
	}

	.box-card {
		/* height: 500px; */
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
