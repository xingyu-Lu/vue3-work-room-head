<template>
	<el-container v-if="showMenu">
		<el-header>
			<el-menu :default-active="currentPath" :router=true mode="horizontal">
				<el-menu-item index="/introduce">vue3-vite-demo</el-menu-item>
				<el-sub-menu index="2">
					<template #title>Workspace</template>
					<el-menu-item index="2-1">item one</el-menu-item>
					<el-menu-item index="2-2">item two</el-menu-item>
					<el-menu-item index="2-3">item three</el-menu-item>
					<el-sub-menu index="2-4">
						<template #title>item four</template>
						<el-menu-item index="2-4-1">item one</el-menu-item>
						<el-menu-item index="2-4-2">item two</el-menu-item>
						<el-menu-item index="2-4-3">item three</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
				<el-menu-item index="/login">login</el-menu-item>
				<el-menu-item index="/api_test">api-test</el-menu-item>
				<el-menu-item index="/good">good</el-menu-item>
				<el-menu-item index="/add_good">add_good</el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
			<el-row>
				<el-col :span="24">
					<div class="demo-image__lazy">
						<el-image src="https://www.yibin.gov.cn/images/yb_zd_header_bg_01.png" lazy></el-image>
					</div>
				</el-col>
			</el-row>
			<router-view />
		</el-main>
		<el-footer>
			<el-row>
				<el-col :span="24">
					<div class="demo-image__lazy">
						<el-image src="https://www.yibin.gov.cn/images/yb_zd_header_bg_01.png" lazy></el-image>
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
</template>

<style>
	/* :root {
		--el-color-primary: red;
	} */
</style>

<script>
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
				document.title = pathMap[to.name]
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
			}
		}
	}
</script>
