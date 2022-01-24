<template>
	<el-row style="margin-bottom: 20px;">
		<el-col :md="24">
			<el-carousel height="600px">
				<el-carousel-item v-for="item in carousel_arr" :key="item">
					<!-- <img :src=item.url alt="" style="width: 100%; height: 100%; cursor: pointer;" @click="go_detail(item.click_url)"> -->
					<el-image style="width: 100%; height: 100%" :key=item.url :src=item.url></el-image>
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
	<el-row :gutter="20" style="margin-bottom: 20px;" justify="space-around">
		<el-col :md="24">
			<el-card class="box-card" shadow="hover">
				<template #header>
					<div class="card-header">
						<strong>科室介绍</strong>
						<el-link style="font-size: 12px;" href="/ksjs" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>

				<ul style="color: #409EFF; line-height: 38px; display: flex; justify-content: space-between;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								肾病内科、风湿免疫科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								神经内科、内分泌科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								呼吸与危重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								中医·老年病科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								感染科</el-link>
						</div>
					</li>
				</ul>
				<ul style="color: #409EFF; line-height: 38px; display: flex; justify-content: space-between;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								肾病内科、风湿免疫科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								神经内科、内分泌科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								呼吸与危重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								重症医学科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								中医·老年病科</el-link>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/ksjs_detail" target="_blank" type="primary"
								:underline="false">
								感染科</el-link>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
	</el-row>

	<el-row :gutter="20" style="margin-bottom: 20px;" justify="space-around">
		<el-col :md="24">
			<el-card class="box-card" shadow="hover">
				<template #header>
					<div class="card-header">
						<strong>医院公告</strong>
						<el-link style="font-size: 12px;" href="/yygg" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
		<!-- <el-col :md="8">
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
		</el-col> -->
	</el-row>

	<el-row :gutter="20" style="margin-bottom: 20px;" justify="space-around">
		<el-col :md="24">
			<el-card class="box-card" shadow="hover">
				<template #header>
					<div class="card-header">
						<strong>医院新闻</strong>
						<el-link style="font-size: 12px;" href="/yygg" target="_blank" type="primary" :underline="false"
							:icon="Plus">更多</el-link>
					</div>
				</template>
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/yygg_detail" target="_blank" type="primary"
								:underline="false">
								宜宾市第三人民医院口腔根管治疗...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-card>
		</el-col>
	</el-row>

	<el-card shadow="hover" style="margin-bottom: 20px;">
		<template #header>
			<div class="card-header">
				<strong>专家团队</strong>
				<el-link style="font-size: 12px;" href="/zjjs" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20" justify="space-between">
			<el-col :md="5" style="margin-bottom: 20px;">
				<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="never">
					<img class="img"
						src="https://www.ybssyy.com/uploadfiles/2021/1130/11512665/image/20211130115224_2578.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">赵习末</span>
						<div style="display: flex; justify-content: space-around">
							<div style="list-style: none;">
								<li>疼痛科(李庄)医生</li>
								<li>副主任中医师</li>
							</div>
							<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
								:underline="false" :icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="5">
				<el-card :body-style="{ padding: '0px', height: '500px'}" shadow="never">
					<img class="img"
						src="https://www.ybssyy.com/uploadfiles/2020/0305/10401999/image/20201201154720_4999.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">周红</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
								:underline="false" :icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="5">
				<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="never">
					<img class="img"
						src="https://www.ybssyy.com/uploadfiles/2020/0305/10363879/image/20201201154806_9844.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">曾辉</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
								:underline="false" :icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="5">
				<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="never">
					<img class="img"
						src="https://www.ybssyy.com/uploadfiles/2021/0125/16111989/image/20210125161416_1816.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">古仁俊</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
								:underline="false" :icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :md="5">
				<el-card :body-style="{ padding: '0px', height: '500px' }" shadow="never">
					<img class="img"
						src="https://www.ybssyy.com/uploadfiles/2020/0305/10363879/image/20201201154806_9844.jpg"
						style="width: 100%;" />
					<div style="padding: 14px; line-height: 36px; font-size: 14px;">
						<span style="color: #DC8C00;">曾辉</span>
						<div style="display: flex; justify-content: space-around;">
							<span>副主任医师</span>
							<el-link style="font-size: 12px;" href="/zjjs_detail" target="_blank" type="primary"
								:underline="false" :icon="Plus">详细信息</el-link>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</el-card>

	<el-card shadow="hover">
		<template #header>
			<div class="card-header">
				<strong>就医指南</strong>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_01.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/mzlc" target="_blank" type="primary" :underline="false"
							:icon="Plus">门诊流程</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_02.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/zylc" target="_blank" type="primary" :underline="false"
							:icon="Plus">住院流程</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_03.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/czxx" target="_blank" type="primary" :underline="false"
							:icon="Plus">出诊信息</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_04.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="azb" target="_blank" type="primary" :underline="false"
							:icon="Plus">艾滋病</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_05.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/lyfb" target="_blank" type="primary" :underline="false"
							:icon="Plus">楼宇分布</el-link>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_06.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/lxwm" target="_blank" type="primary" :underline="false"
							:icon="Plus">联系我们</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_07.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/jcxz" target="_blank" type="primary" :underline="false"
							:icon="Plus">检查须知</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_08.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/jkcj" target="_blank" type="primary" :underline="false"
							:icon="Plus">健康体检</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_09.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="/ybzn" target="_blank" type="primary" :underline="false"
							:icon="Plus">医保指南</el-link>
					</div>
				</el-card>
			</el-col>
			<el-col :md="4">
				<el-card :body-style="{ padding: '0px' }" shadow="hover"
					style="justify-content: center; display: flex;">
					<img src="/src/assets/img/link_10.png" style="width: 100%;" />
					<div style="display: flex; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
						<el-link style="font-size: 12px;" href="mailto:" target="_blank" type="primary"
							:underline="false" :icon="Plus">院长信箱</el-link>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</el-card>
	<el-card style="margin-top: 20px; margin-bottom: 20px;" shadow="hover">
		<template #header>
			<div class="card-header">
				<strong>护理园地</strong>
				<el-link style="font-size: 12px;" href="/hlyd" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around" align="middle">
			<el-col :md="8">
				<el-image src="https://www.ybssyy.com/uploadfiles/2021/1222/09123096/image/20211222091828_5996.jpg"
					lazy></el-image>
			</el-col>
			<el-col :md="14">
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/hlyd_detail" target="_blank" type="primary"
								:underline="false">
								加强护理质量管理 提升专业技术水平...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</el-card>
	<el-card style="margin-top: 20px; margin-bottom: 20px;" shadow="hover">
		<template #header>
			<div class="card-header">
				<strong>健康促进</strong>
				<el-link style="font-size: 12px;" href="/jkcj" target="_blank" type="primary" :underline="false"
					:icon="Plus">更多</el-link>
			</div>
		</template>
		<el-row :gutter="20" justify="space-around" align="middle">
			<el-col :md="8">
				<el-image src="https://www.ybssyy.com/uploadfiles/2021/1222/09123096/image/20211222091828_5996.jpg"
					lazy></el-image>
			</el-col>
			<el-col :md="14">
				<ul style="color: #409EFF; line-height: 38px;">
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
							<span style="color: #999;">2021-12-23</span>
						</div>
					</li>
					<li>
						<div style="display: flex; justify-content: space-between;">
							<el-link style="font-size: 16px;" href="/jkcj_detail" target="_blank" type="primary"
								:underline="false">
								朋友们请注意！疫情防护别大意！...</el-link>
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
		onMounted,
		ref,
		reactive,
		toRefs
	} from 'vue'
	import axios from '@/utils/axios'
	export default {
		name: 'Introduce',
		setup() {
			const show = ref(true)
			const goJuejin = () => {
				console.log('goJuejin')
				window.open('https://juejin.cn/book/6933939264455442444', 'target')
			}
			const state = reactive({
				carousel_arr: []
			})

			onMounted(() => {
				get_lunbo()
			})

			const get_lunbo = async () => {
				const lunbo_arr = await axios.get('/api/head/rotates')
				state.carousel_arr = lunbo_arr
			}

			const go_detail = (url) => {
				window.open(url, 'target')
			}
			return {
				...toRefs(state),
				show,
				goJuejin,
				Plus,
				go_detail
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

	.img {
		transition: all 0.6s;
	}

	.img:hover {
		transform: scale(1.1);
	}
</style>
