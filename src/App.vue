<template>
	<el-config-provider :locale="locale">
		<el-container v-if="showMenu">
			<img style="width: 100%; margin: 0 auto;" src="/src/assets/img/public_head_bg.png" />

			<el-header style="width: 100%; margin: 0 auto;">
				<el-menu :default-active="currentPath" :router=true mode="horizontal">
					<el-menu-item index="/introduce">首页</el-menu-item>
					<el-sub-menu index="2">
						<template #title>医院概况</template>
						<el-menu-item index="/yyjj">医院简介</el-menu-item>
						<el-menu-item index="/ldtd">领导团队</el-menu-item>
						<el-menu-item index="/yywh">医院文化</el-menu-item>
						<el-menu-item index="/lsyg">历史沿革</el-menu-item>
						<el-menu-item index="/zzjg">组织机构</el-menu-item>
						<!-- <el-menu-item index="/yyry">医院荣誉</el-menu-item>
						<el-menu-item index="/wlzw">未来展望</el-menu-item> -->
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
						<el-menu-item index="/expert-czxx">出诊信息</el-menu-item>
					</el-sub-menu>
					<!-- <el-menu-item index="/kyjx">科研教学</el-menu-item> -->
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
						<!-- <el-menu-item index="/czxx">出诊信息</el-menu-item> -->
						<el-menu-item index="/jcxz">检查须知</el-menu-item>
						<el-menu-item index="/jktj">健康体检</el-menu-item>
						<el-menu-item index="/ybzn">医保指南</el-menu-item>
						<el-menu-item index="/azb">艾滋病暴露前后预防</el-menu-item>
						<el-menu-item index="/lyfb">楼宇分布</el-menu-item>
						<el-menu-item index="/lxwm">联系我们</el-menu-item>
						<!-- <el-menu-item index="/yzxx">院长信箱</el-menu-item> -->
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
					<!-- <div style="margin-top: 10px; margin-left: 10px; margin-right: 10px;"> -->
						<!-- <el-input placeholder="请输入~" class="input-with-select">
							<template #append>
								<el-button :icon="Search"></el-button>
							</template>
						</el-input> -->
					<!-- </div> -->
					<el-menu-item index="/employee-article">员工之声</el-menu-item>
					<el-menu-item index="/login" v-if="is_login == false">登录</el-menu-item>
					<el-menu-item index="/register" v-if="is_login == false">注册</el-menu-item>
					<el-menu-item index="" v-if="is_login == true" @click="logout">退出登录</el-menu-item>
					<el-menu-item index="/change-password" v-if="is_login == true">修改密码</el-menu-item>
					<el-menu-item index="/employee-my-file" v-if="is_login == true">我的云盘</el-menu-item>
					<!-- <el-menu-item index="/update_log">更新记录</el-menu-item> -->
					<div style="margin-top: 10px; margin-left: 10px; width: 210px;">
						<el-input v-model="input3" placeholder="请输入关键词" class="input-with-select" size="large">
							<!-- <template #prepend>
								<el-select v-model="select" placeholder="请选择" style="width: 90px">
									<el-option label="新闻" value="1"></el-option>
									<el-option label="医生" value="2"></el-option>
									<el-option label="视频" value="3"></el-option>
								</el-select>
							</template> -->
							<template #append>
								<el-button :icon="Search" @click="go_detail('/search?keyword=' + input3)"></el-button>
							</template>
						</el-input>
					</div>
					<!-- <el-menu-item index="/api_test">api-test</el-menu-item>
					<el-menu-item index="/good">good</el-menu-item>
					<el-menu-item index="/add_good">add_good</el-menu-item> -->
				</el-menu>
			</el-header>
			<el-main style="width: 80%; margin: 0 auto;">
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
				<el-row style="margin-bottom: 20px;">
					<el-col>
						<el-space wrap>
							<strong>友情链接：</strong>
							<el-link href="http://www.nhc.gov.cn/" type="info" target="_blank" :underline="false">
								中华人民共和国国家卫生健康委员会</el-link>
							<el-link href="http://wsjkw.sc.gov.cn/" type="info" target="_blank" :underline="false">
								四川省卫生健康委员会</el-link>
							<el-link href="http://www.scredcross.org.cn/" type="info" target="_blank" :underline="false">
								四川省红十字会</el-link>
							<el-link href="https://www.cma.org.cn/" type="info" target="_blank" :underline="false">中华医学会
							</el-link>
							<el-link href="http://www.sma.org.cn/index.asp" type="info" target="_blank" :underline="false">
								四川省医学会</el-link>
							<el-link href="http://edu.zgkw.cn/" type="info" target="_blank" :underline="false">全国百姓放心示范医院大讲堂
							</el-link>
							<el-link href="http://202.61.90.26:8089/cmntedu/" type="info" target="_blank"
								:underline="false">四川省继续医学教育网</el-link>
						</el-space>
					</el-col>
				</el-row>

				<el-row :gutter="24" style="background: #516071; color: #CCC;">
					<el-col :sm="4" style="display: flex; justify-content: center; align-items: center;">
						<div style="margin-right: 40px;">
							<a href="http://bszs.conac.cn/sitename?method=show&id=1354A7487A5C32CFE053012819ACA802"
								target="_blank">
								<img style="height: 70px;" src="/src/assets/img/qualification.png"
									alt="">
							</a>
						</div>
						<div>
							<a href="http://bszs.conac.cn/sitename?method=show&id=1354A7487A5C32CFE053012819ACA802"
								target="_blank">
								<img style="height: 70px;" src="/src/assets/img/police.png" alt="">
							</a>
						</div>
					</el-col>
					<!-- <el-col :md="6" style="display: flex; justify-content: flex-start; align-items: center;">
						<div>
							<ul style="list-style: none; line-height: 36px;">
								<li>宜宾市第三人民医院</li>
								<li>THE THIRD PEOPLE'S HOSPITAL OF YIBIN</li>
								<li>同舟共济 厚德精医</li>
							</ul>
						</div>
					</el-col> -->
					<el-col :sm="7" style="justify-content: center; align-items: center;">
						<ul style="list-style: none; line-height: 36px;">
							<li>版权所有：@宜宾市第三人民医院</li>
							<li>蜀ICP备12031661号-1</li>
							<li><a href="https://beian.miit.gov.cn/" type="info" target="_blank"
									style="color: #ccc; text-decoration: none;">宜网备案号：51150002020011</a></li>
							<li><img style="width: 20px; height: 20px;" src="/src/assets/img/c_police.png" alt=""><a
									href="http://www.beian.gov.cn/portal/registerSy%20stemInfo?%20recordcode=51150202000042"
									target="_blank" style="color: #ccc; text-decoration: none;">川公网安备51150202000042号</a>
							</li>
						</ul>
					</el-col>
					<el-col :sm="7" style="justify-content: center; align-items: center;">
						<ul style="list-style: none; line-height: 36px;">
							<li>医院邮箱：ybsdsrmyy@163.com</li>
							<li>联系电话：0831-8224806</li>
							<li>医院地址：四川省宜宾市翠屏区将军街58号</li>
							<li>邮编：644000</li>
						</ul>
					</el-col>
					<el-col :sm="6" style="display: flex; justify-content: center; align-items: center;">
						<div style="margin-right: 40px;">
							<img style="height: 100px; margin-right: 20px;" src="/src/assets/img/wxgzh.png" alt="">
							<p style="margin-left: 20px;">官方微信</p>
						</div>
						<div>
							<img style="height: 100px; margin-right: 20px;" src="/src/assets/img/wb.png" alt="">
							<p style="margin-left: 20px;">官方微博</p>
						</div>
					</el-col>
				</el-row>
			</el-footer>
		</el-container>
		<el-container v-else>
			<el-main style="min-height: 100vh;">
				<router-view />
			</el-main>
		</el-container>
	</el-config-provider>
</template>

<style>
	html,
	body,
	#app {
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
	import zhCn from 'element-plus/lib/locale/lang/zh-cn'
	import {
		Search
	} from '@element-plus/icons-vue'
	import {
		ref,
		reactive,
		toRefs,
		onMounted,
		onUnmounted
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import {
		pathMap
	} from '@/utils'
	import { localGet, localRemove } from '@/utils'
	// import jwt from 'jsonwebtoken'

	export default {
		components: {
			Search,
		},
		setup() {
			const input3 = ref('')
			const select = ref()
			const noMenu = ['/login']
			const router = useRouter()
			const state = reactive({
				is_login: false,
				currentPath: '/',
				showMenu: true,
			})
			const unwatch = router.beforeEach((to, from, next) => {
				if (to.path == '/login' || to.path == '/register') {
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

			onMounted(() => {
				if(localGet('token')) {
					let jwt_str = atob(localGet('token').split('.')[1])
					let jwt_exp = JSON.parse(jwt_str).exp
					let now_time = Date.parse(new Date())/1000
					if (now_time > jwt_exp) {
						localRemove('token')
					} else {
						state.is_login = true
					}
				}
			})

			onUnmounted(() => {
				unwatch()
			})
			
			const go_detail = (url) => {
				window.open(url, '_blank')
			}
			
			const logout = () => {
				// axios.delete('/logout').then(() => {
				//   sessionRemove('token')
				//   window.location.reload()
				// })
				localRemove('token')
				localRemove('userinfo')
				window.location.reload()
			}

			return {
				locale: zhCn,
				...toRefs(state),
				go_detail,
				Search,
				logout,
				input3,
				select
			}
		}
	}
</script>
