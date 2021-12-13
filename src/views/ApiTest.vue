<template>
	<el-row :gutter="20">
		<el-col :span="6">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>Card name</span>
						<!-- <el-button class="button" type="text">Operation button</el-button> -->
					</div>
				</template>
				<div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
			</el-card>
		</el-col>
		<el-col :span="6">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span ref="bigref">Card name</span>
						<!-- <el-button class="button" type="text">Operation button</el-button> -->
					</div>
				</template>
				<div v-for="(item, index) in data" :key="index" class="text item">{{index}} {{ item.name }}</div>
			</el-card>
		</el-col>
		<el-col :span="6">
			<el-card class="box-card">
				<el-tabs style="height: 200px;">
					<el-tab-pane label="Config">Config</el-tab-pane>
					<el-tab-pane label="Role">Role</el-tab-pane>
					<el-tab-pane label="Task">Task</el-tab-pane>
				</el-tabs>
			</el-card>
		</el-col>
		<el-col :span="6">
			<el-card class="box-card">
				<template #header>
					<div class="card-header">
						<span>Card name</span>
						<el-button class="button" type="text" :icon="Plus" size="small">更多</el-button>
					</div>
				</template>
				<div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
			</el-card>
		</el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="6">
			<el-card class="box-card">
				<el-tabs style="height: 200px;">
					<el-tab-pane label="Config">Config</el-tab-pane>
					<el-tab-pane label="Role">Role</el-tab-pane>
					<el-tab-pane label="Task">Task</el-tab-pane>
				</el-tabs>
			</el-card>
		</el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-purple"></div>
		</el-col>
	</el-row>
	<!-- <el-row :gutter="20" align="middle" justify="center">
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
	</el-row>
	<el-row :gutter="20" justify="space-around">
		<el-col :span="6">
			<div class="test">
			</div>
		</el-col>
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
		<el-col :span="6">
			<div class="test"></div>
		</el-col>
	</el-row> -->
	<el-row :gutter="20" justify="space-around">
		<el-col :span="6">
			<span class="">Default</span>
			<el-image :src="url"></el-image>
		</el-col>
		<el-col :span="6">
			<span class="demonstration">Default</span>
			<el-image :src="url"></el-image>
		</el-col>
		<el-col :span="6">
			<span class="demonstration">Default</span>
			<el-image :src="url"></el-image>
		</el-col>
	</el-row>
	<el-row>
		<el-col>
			<el-tabs type="border-card" tab-position="left" style="height: 200px;">
				<el-tab-pane label="Config">Config</el-tab-pane>
				<el-tab-pane label="Role">Role</el-tab-pane>
				<el-tab-pane label="Task">Task</el-tab-pane>
			</el-tabs>
		</el-col>
	</el-row>
	<el-row>
		<el-col>
			<el-tabs type="border-card" style="height: 200px">
				<el-tab-pane label="Config">Config</el-tab-pane>
				<el-tab-pane label="Role">Role</el-tab-pane>
				<el-tab-pane label="Task">Task</el-tab-pane>
			</el-tabs>
		</el-col>
	</el-row>
	<el-row>
		<el-button>Default</el-button>
		<el-button type="primary">Primary</el-button>
		<el-button type="success">Success</el-button>
		<el-button type="info">Info</el-button>
		<el-button type="warning">Warning</el-button>
		<el-button type="danger">Danger</el-button>
		<el-button>中文</el-button>
	</el-row>

	<el-row>
		<el-button plain>Plain</el-button>
		<el-button type="primary" plain>Primary</el-button>
		<el-button type="success" plain>Success</el-button>
		<el-button type="info" plain>Info</el-button>
		<el-button type="warning" plain>Warning</el-button>
		<el-button type="danger" plain>Danger</el-button>
	</el-row>

	<el-row>
		<el-button round>Round</el-button>
		<el-button type="primary" round>Primary</el-button>
		<el-button type="success" round>Success</el-button>
		<el-button type="info" round>Info</el-button>
		<el-button type="warning" round>Warning</el-button>
		<el-button type="danger" round>Danger</el-button>
	</el-row>

	<el-row>
		<el-button :icon="Search" circle></el-button>
		<el-button type="primary" :icon="Edit" circle></el-button>
		<el-button type="success" :icon="Check" circle></el-button>
		<el-button type="info" :icon="Message" circle></el-button>
		<el-button type="warning" :icon="Star" circle></el-button>
		<el-button type="danger" :icon="Delete" circle></el-button>
	</el-row>
	<el-row>
		<i class="el-icon-edit"></i>
		<i class="el-icon-share"></i>
		<i class="el-icon-delete"></i>
		<el-button type="primary" :icon="Search">搜索</el-button>
	</el-row>
</template>

<style scoped>
	/* /deep/ .el-tabs__item.is-active, .el-tabs__item:hover{
	  color: #c29101;
	}
	/deep/ .el-tabs__active-bar{
	  background-color: #c29101;
	} */
	.test:hover {
		background-size: 110% 110%;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.el-row {
		margin-bottom: 20px;
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>

<script>
	import {
		Search,
		Edit,
		Check,
		Message,
		Star,
		Delete,
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
		setup() {
			const count = ref(0)
			// const state = reactive({
			// 	env: import.meta.env.MODE
			// })
			const state = reactive({
				bigref: null,
				data: [],
				fits: ['scale-down'],
				url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'],

			})

			// components: {
			// 	Search, Edit, Check, Message, Star, Delete
			// }

			onMounted(() => {
				// const getGoodList = () => {
				// state.loading = true
				axios.get('/index.php', {
					// params: {
					//   pageNumber: state.currentPage,
					//   pageSize: state.pageSize
					// }
				}).then(res => {
					// state.tableData = res.list
					// state.total = res.totalCount
					// state.currentPage = res.currPage
					// state.loading = false
					// state.name = res.name,
					// state.value = res.value,
					state.data = res
				})
				// }
			})
			// getGoodList()
			let aaa = "color: red"
			const big = () => {
				state.bigref.style = "color: #fede0e; font-size:30px"
				// aaa = "color: #fede0e; font-size:30px"
				console.log(state.bigref)
			}
			return {
				// count,
				// state,
				...toRefs(state),
				Search,
				Edit,
				Check,
				Message,
				Star,
				Delete,
				Plus
			}
		}
	}
</script>
