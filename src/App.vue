<template>
	<el-container v-if="showMenu">
		<el-header>
			<el-menu :default-active="currentPath" :router=true mode="horizontal">
				<el-menu-item index="/introduce">宜宾市第三人民医院</el-menu-item>
				<el-sub-menu index="2">
					<template #title>医院概况</template>
					<el-menu-item index="/yyjj">医院简介</el-menu-item>
					<el-menu-item index="/ldtd">领导团队</el-menu-item>
					<el-menu-item index="/yywh">医院文化</el-menu-item>
					<el-menu-item index="/lsyg">历史沿革</el-menu-item>
					<el-menu-item index="/zzjg">组织机构</el-menu-item>
					<el-menu-item index="/yyry">医院荣誉</el-menu-item>
					<el-menu-item index="/wlzw">未来展望</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="3">
					<template #title>新闻动态</template>
					<el-menu-item index="/yyxw">医院新闻</el-menu-item>
					<el-menu-item index="/spxw">视频新闻</el-menu-item>
					<el-menu-item index="/yygg">医院公告</el-menu-item>
				</el-sub-menu>
				<el-menu-item index="/ksjs">科室介绍</el-menu-item>
				<el-sub-menu index="4">
					<template #title>专家介绍</template>
					<el-menu-item index="/zjjs">专家介绍</el-menu-item>
					<el-menu-item index="/czxx">出诊信息</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="5">
					<template #title>科研教学</template>
					<el-menu-item index="/kydt">科研动态</el-menu-item>
					<el-menu-item index="/xkjs">学科建设</el-menu-item>
					<el-menu-item index="/jxjy">继续教育</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="6">
					<template #title>患者服务</template>
					<el-menu-item index="/mzlc">门诊流程</el-menu-item>
					<el-menu-item index="/zylc">住院流程</el-menu-item>
					<el-menu-item index="/czxx">出诊信息</el-menu-item>
					<el-menu-item index="/jcxz">检查须知</el-menu-item>
					<el-menu-item index="/jktj">健康体检</el-menu-item>
					<el-menu-item index="/ybzn">医保指南</el-menu-item>
					<el-menu-item index="/azbyf">艾滋病暴露前后预防</el-menu-item>
					<el-menu-item index="/lyfb">楼宇分布</el-menu-item>
					<el-menu-item index="/lxwm">联系我们</el-menu-item>
					<el-menu-item index="/yzxx">院长信箱</el-menu-item>
					<el-menu-item index="/hlyd">护理园地</el-menu-item>
					<el-menu-item index="/jkcj">健康促进</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="7">
					<template #title>党建之窗</template>
					<el-menu-item index="/dwgl">党务管理</el-menu-item>
					<el-menu-item index="/dyjy">党员教育</el-menu-item>
					<el-menu-item index="/dflz">党风廉政</el-menu-item>
					<el-menu-item index="/ygzj">员工之家</el-menu-item>
					<el-menu-item index="/ydyf">医德医风</el-menu-item>
					<el-menu-item index="/qnjyz">青年加油站</el-menu-item>
				</el-sub-menu>
				<el-sub-menu index="8">
					<template #title>人才招聘</template>
					<el-menu-item index="/zpxx">招聘信息</el-menu-item>
					<el-menu-item index="/yplc">应聘流程</el-menu-item>
				</el-sub-menu>
				<div style="margin-top: 10px; margin-left: 10px; margin-right: 10px;">
					<el-input placeholder="请输入~" class="input-with-select">
						<template #append>
							<el-button :icon="Search"></el-button>
						</template>
					</el-input>
				</div>
				<el-menu-item index="/login">登录</el-menu-item>
				<el-menu-item index="/register">注册</el-menu-item>
				<!-- <el-menu-item index="/api_test">api-test</el-menu-item>
				<el-menu-item index="/good">good</el-menu-item>
				<el-menu-item index="/add_good">add_good</el-menu-item> -->
			</el-menu>
		</el-header>
		<el-main style="width: 90%; margin: 0 auto;">
			<!-- <el-row>
				<el-col :span="24">
					<el-carousel height="150px">
						<el-carousel-item>
							<h3 class="small">https://www.yibin.gov.cn/images/yb_zd_header_bg_01.png</h3>
						</el-carousel-item>
					</el-carousel>
					<div class="demo-image__lazy">
						<el-image src="https://www.yibin.gov.cn/images/yb_zd_header_bg_01.png" lazy></el-image>
					</div>
				</el-col>
			</el-row> -->
			<router-view />
		</el-main>
		<el-footer>
			<el-row :gutter="20" style="background: #333; color: #9d9d9d;">
				<el-col :md="8">
					<ul style="list-style: none; line-height: 36px;">
						<li>宜宾市第三人民医院</li>
						<li>THE THIRD PEOPLE'S HOSPITAL OF YIBIN</li>
						<li>同舟共济 厚德精医</li>
					</ul>
				</el-col>
				<el-col :md="8">
					<ul style="list-style: none; line-height: 36px;">
						<li>版权所有：@宜宾市第三人民医院</li>
						<li>蜀ICP备12031661号-1</li>
						<li>宜网备案号：51150002020011</li>
						<li><img src="	https://www.ybssyy.com/uploadfiles/2013/0307/11294310/image/20200212184618_9814.png"
								alt=""> 川公网安备51150202000042号 </li>
					</ul>
				</el-col>
				<el-col :md="8">
					<ul style="list-style: none; line-height: 36px;">
						<li>医院邮箱：ybsdsrmyy@163.com</li>
						<li>联系电话：0831-8224806</li>
						<li>医院地址：四川省宜宾市翠屏区将军街58号</li>
						<li>邮编：644000</li>
						<li>传真：0831-8211565</li>
					</ul>
				</el-col>
			</el-row>
		</el-footer>
	</el-container>
	<el-container v-else>
		<el-main style="min-height: 100vh;">
			<router-view />
		</el-main>
	</el-container>
</template>

<style>
	html, body, #app {
		height: 100%;
	}
	
	section {
		min-height: 100%;
	}
	/* :root {
		--el-color-primary: #303133;
		--el-color-primary-light-1: #606266;
		--el-color-primary-light-2: #909399;
		--el-color-primary-light-3: #C0C4CC;
		--el-color-primary-light-4: #DCDFE6;
		--el-color-primary-light-5: #E4E7ED;
		--el-color-primary-light-6: #EBEEF5;
		--el-color-primary-light-7: #F2F6FC;
		--el-color-primary-light-8: #F2F6FC;
		--el-color-primary-light-9: #F2F6FC;
	} */
	/* 网站变灰 */
	/* html{filter: grayscale(100%);-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);} */
</style>

<script>
	import {
		Search
	} from '@element-plus/icons-vue'
	import {
		ref,
		reactive,
		toRefs,
		onUnmounted
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		pathMap
	} from '@/utils'

	export default {
		components: {
			Search,
		},
		setup() {
			const noMenu = ['/login']
			const router = useRouter()
			const state = reactive({
				currentPath: '/',
				showMenu: true,
			})
			const unwatch = router.beforeEach((to, from, next) => {
				if (to.path == '/login') {
					state.showMenu = false
					next()
				} else {
					next()
				}
				state.currentPath = to.path
				if (to.name) {
					document.title = pathMap[to.name]
				}
			})

			// 监听浏览器原生回退事件
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);
				window.addEventListener('popstate', () => {
					if (router.currentRoute.value.path == '/login') {
						state.showMenu = false
					} else {
						state.showMenu = true
					}
				}, false);
			}

			onUnmounted(() => {
				unwatch()
			})

			return {
				...toRefs(state),
				Search
			}
		}
	}
</script>
