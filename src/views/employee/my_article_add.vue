<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong>我的文章</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>我的文章</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<!-- <el-form-item label="封面图" prop="img">
				<el-upload ref="uploadRef" :action="uploadImgServer" :data="{ basket: 'img' }" :limit="1"
					list-type="picture-card" thumbnail-mode=true :headers="{ Authorization: token }"
					:before-upload="handleBeforeUpload" :on-success="handleUrlSuccess" :on-error="handleUrlError"
					:auto-upload="true" :file-list="Form.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" v-if="Form.img_url" :src="Form.img_url"
								alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="Form.disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item> -->
			<el-form-item label="标题" prop="title">
				<el-input v-model="Form.title" placeholder="请输入标题" type="text"></el-input>
			</el-form-item>
			<el-form-item label="内容" prop="content">
				<div ref='editor' style="z-index: 1;"></div>
			</el-form-item>
			<el-form-item label="发布时间" prop="release_time">
				<el-date-picker v-model="Form.release_time" type="datetime" :default-value="new Date()"
					placeholder="请输入发布时间">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-radio-group v-model="Form.status" disabled>
					<el-radio label=1>已审核</el-radio>
					<el-radio label=0>待审核</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitAdd()">{{ id ? '立即修改' : '立即创建' }}</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
	import {
		Plus,
		Delete,
	} from '@element-plus/icons-vue'
	import {
		reactive,
		ref,
		toRefs,
		onMounted,
		onBeforeUnmount
	} from 'vue'
	import WangEditor from 'wangeditor'
	import xss from 'xss'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		localGet,
		uploadImgServer,
		uploadImgsServer
	} from '@/utils'

	export default {
		name: 'news_add',
		components: {
			Plus,
			Delete
		},
		setup() {
			const attachmentRef = ref(null)
			const Ref = ref(null)
			const editor = ref(null)
			const uploadRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				token: 'Bearer ' + localGet('token') || '',
				id: id,
				Form: {
					img_url: '',
					img: '',
					office_id: '',
					title: '',
					content: '',
					release_time: ref(''),
					status: '0',
					disabled: true,
					fileList: [],
					list: [],
				},
				rules: {
					img: [{
						required: true,
						message: '图片必须',
						trigger: ['change'],
					}],
					type: [{
						required: true,
						message: '类型必须',
						trigger: ['change'],
					}],
					title: [{
						required: true,
						message: '标题',
						trigger: ['change'],
					}],
					release_time: [{
						required: 'true',
						message: '发布时间必须',
						trigger: ['change'],
					}],
					status: [{
						required: false,
						message: '状态必须',
						trigger: ['change'],
					}],
				},
			})

			let instance
			onMounted(() => {
				instance = new WangEditor(editor.value)
				instance.config.lineHeights = ['1', '1.15', '1.5', '2', '2.5', '3']
				instance.config.showLinkImg = false
				instance.config.showLinkImgAlt = false
				instance.config.showLinkImgHref = false
				instance.config.uploadImgMaxSize = 2 * 1024 * 1024 // 5M
				instance.config.uploadImgMaxLength = 1
				instance.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
				instance.config.uploadFileName = 'file'
				instance.config.uploadImgHeaders = {
					Authorization: state.token
				}
				instance.config.uploadImgParams = {
					basket: 'img'
				}
				// 图片返回格式不同，需要自定义返回格式
				instance.config.uploadImgHooks = {
					// 图片上传并返回了结果，想要自己把图片插入到编辑器中
					// 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
					customInsert: function(insertImgFn, result) {
						console.log('result', result)
						// result 即服务端返回的接口
						// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
						insertImgFn(result.data.src)
						// if (result.data && result.data.length) {
						// 	result.data.forEach(item => insertImgFn(item))
						// }
					}
				}
				instance.config.uploadImgServer = uploadImgsServer
				Object.assign(instance.config, {
					onchange() {
						console.log('change')
					},
				})

				instance.config.uploadVideoServer = uploadImgsServer
				instance.config.uploadVideoMaxSize = 1 * 200 * 1024 * 300 // 1024m
				instance.config.uploadVideoAccept = ['mp4']
				instance.config.uploadVideoParams = {
					basket: 'video',
				}
				instance.config.uploadVideoName = 'file'
				instance.config.uploadVideoHeaders = {
					Authorization: state.token
				}

				instance.config.uploadVideoHooks = {
					// 视频上传并返回了结果，想要自己把视频插入到编辑器中
					// 例如服务器端返回的不是 { errno: 0, data: { url : '.....'} } 这种格式，可使用 customInsert
					customInsert: function(insertVideoFn, result) {
						// result 即服务端返回的接口
						console.log('customInsert', result)

						// insertVideoFn 可把视频插入到编辑器，传入视频 src ，执行函数即可
						insertVideoFn(result.data.src)
					}
				}

				instance.create()
				
				if (id) {
					axios.get(`/api/head/staffs/${id}`).then(res => {
						state.Form = {
							// img_url: res.data.url || '',
							// img: res.data.file_id,
							title: res.data.title,
							release_time: res.data.release_time,
							status: String(res.data.status),
							// fileList: [res.data.url],
							// disabled: true
						}
						
						if (instance) {
							// 初始化商品详情 html
							instance.txt.html(res.data.content)
						}
					})
				}
			})

			onBeforeUnmount(() => {
				instance.destroy()
				instance = null
			})

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							// img: state.Form.img,
							type: state.Form.type,
							title: state.Form.title,
							content: instance.txt.html(),
							release_time: state.Form.release_time,
							status: state.Form.status,
						}

						let url = '/api/head/staffs'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							params.release_time = state.Form.release_time
							httpOption = axios.put
							url = `/api/head/staffs/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/employee-my-article'
							})
						})
					}
				})
			}

			const handleBeforeUpload = (file) => {
				const file_size = (file.size/1024/1024).toFixed(2)
				if (file_size > 2) {
					ElMessage.error('上传的图片大于2兆')
					return false
				}
				const sufix = file.name.split('.')[1] || ''
				if (!['jpg', 'jpeg', 'png', 'gif'].includes(sufix)) {
					ElMessage.error('请上传 jpg、jpeg、png、gif 格式的图片')
					return false
				}
			}

			const handleUrlSuccess = (val) => {
				ElMessage.success('上传成功')
				state.Form.img_url = val.data.src || ''
				state.Form.img = val.data.id || ''
			}

			const handleUrlError = (val) => {
				ElMessage.error('上传失败')
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.Form.img = ''
				state.Form.img_url = ''
				state.Form.fileList = []
			}

			return {
				...toRefs(state),
				editor,
				uploadRef,
				Ref,
				submitAdd,
				uploadImgServer,
				handleBeforeUpload,
				handleUrlSuccess,
				handleUrlError,
				handleRemove,
			}
		}
	}
</script>

<style>
</style>
