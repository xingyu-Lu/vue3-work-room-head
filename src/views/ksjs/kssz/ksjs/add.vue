<template>
	<el-row justify="center" align="middle" style="background: linear-gradient(135deg, rgb(36 205 103 / 95%) 0%, rgb(56 150 226 / 95%) 100% ); margin-bottom: 20px; margin-top: -10px;">
		<el-col :span="24">
			<div style="float: right; height: 150px; align-items: center; display: flex; font-size: 36px; letter-spacing: 0.2em; color: #fff;">
				<strong v-if="res_data.office">{{ res_data.office.office_name }}</strong>
			</div>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">三江名医工作室</el-breadcrumb-item>
		<el-breadcrumb-item :to="{ path: '/kssz', query: {id: id} }">部门设置</el-breadcrumb-item>
		<el-breadcrumb-item>部门介绍</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-card style="min-height: 100%;">
		<el-form :model="Form" :rules="rules" ref="Ref" label-width="100px">
			<el-form-item label="内容" prop="content" style="margin-top: 35px;">
				<div style="border: 1px solid #ccc; z-index: 100">
					<Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
						:mode="mode" />
					<Editor style="height: 500px; overflow-y: hidden;" v-model="Form.content"
						:defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
				</div>
				<!-- <div ref='editor' style="z-index: 1;"></div> -->
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
		onBeforeUnmount,
		shallowRef,
	} from 'vue'
	
	// editor
	import '@wangeditor/editor/dist/css/style.css'
	import attachmentModule from '@wangeditor/plugin-upload-attachment'
	import {
		Editor,
		Toolbar
	} from '@wangeditor/editor-for-vue'
	import {
		Boot
	} from '@wangeditor/editor'
	// 生成 html 的函数
	function attachmentToHtml(elem, childrenHtml) {
	  const { link = '', fileName = '' } = elem
	  // return `<span data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${link}" data-fileName="${fileName}">${fileName}</span>`
	  return `<a data-w-e-type="attachment" data-w-e-is-void data-w-e-is-inline data-link="${link}" data-fileName="${fileName}" href="${link}" target="_blank">${fileName}</a>`
	}
	// 配置
	const conf = {
	  type: 'attachment', // 节点 type ，重要！！！
	  elemToHtml: attachmentToHtml,
	}
	attachmentModule.elemsToHtml = [conf]
	// 注册。要在创建编辑器之前注册，且只能注册一次，不可重复注册。
	Boot.registerModule(attachmentModule)
	
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
			Delete,
			Editor,
			Toolbar
		},
		setup() {
			const Ref = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query

			const state = reactive({
				res_data: '',
				token: 'Bearer ' + localGet('token') || '',
				id: id,
				select_flag: false,
				Form: {
					content: '',
					status: '0',
				},
				rules: {
					status: [{
						required: true,
						message: '状态必须',
						trigger: ['change'],
					}],
				},
			})
			
			const editorRef = shallowRef()
			const toolbarConfig = {
				// 插入哪些菜单
				insertKeys: {
					index: 31, // 自定义插入的位置
					keys: ['uploadAttachment'], // “上传附件”菜单
				},
			}
			const editorConfig = {
				placeholder: '请输入内容...',
				hoverbarKeys: {
					attachment: {
						menuKeys: ['downloadAttachment'], // “下载附件”菜单
					},
				},
				MENU_CONF: {
					uploadImage: {
						server: uploadImgsServer,
						fieldName: 'file',
						// 单个文件的最大体积限制，默认为 2M
						maxFileSize: 2 * 1024 * 1024, // 2M
						// 最多可上传几个文件，默认为 100
						maxNumberOfFiles: 10,
						// 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
						allowedFileTypes: ['image/*'],
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'img',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, insertFn) {
							// res 即服务端返回的接口
							// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
							insertFn(res.data.src, res.data.file_name, res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					},
					uploadVideo: {
						server: uploadImgsServer,
						fieldName: 'file',
						// 单个文件的最大体积限制，默认为 10M
						maxFileSize: 100 * 1024 * 1024, // 100M
						// 选择文件时的类型限制，默认为 ['video/*'] 。如不想限制，则设置为 []
						allowedFileTypes: ['video/*'],
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'video',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, insertFn) {
							// res 即服务端返回的接口
							// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
							insertFn(res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					},
					uploadAttachment: {
						server: uploadImgsServer, // 服务端地址
						fieldName: 'file',
						maxFileSize: 10 * 1024 * 1024, // 10M
						// 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
						meta: {
							basket: 'attachment',
						},
						headers: {
							Authorization: state.token
						},
						customInsert: function(res, file, insertFn) {
							// res 即服务端返回的接口
							// 插入附件到编辑器
							insertFn(`${file.name}`, res.data.src)
							// if (res.data && res.data.length) {
							// 	res.data.forEach(item => insertImgFn(item))
							// }
						},
						// 上传错误，或者触发 timeout 超时
						onError(file, err, res) {
							ElMessage.error((new Error(err)).message)
							console.log(file, err, res)
						},
					}
				}
			}
			
			const handleCreated = (editor) => {
				editorRef.value = editor // 记录 editor 实例，重要！
			}

			onMounted(() => {
				if (id) {
					axios.get(`/api/head/technicalOfficeIntroduce/${id}`).then(res => {
						state.Form = {
							status: String(res.data.status),
							content: res.data.content,
						}
					})
				}
				
				if (!localGet('userinfo')) {
					get_user_info()
				} else {
					state.res_data = localGet('userinfo')
				}
			})

			onBeforeUnmount(() => {
				const editor = editorRef.value
				if (editor == null) return
				editor.destroy()
			})
			
			const get_user_info = () => {
				axios.get('/api/head/staffs/info').then(res => {
					state.res_data = res.data
					localSet('userinfo', res.data)
				})
			}

			const submitAdd = () => {
				Ref.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							content: state.Form.content,
							status: state.Form.status,
						}

						let url = '/api/head/technicalOfficeIntroduce'
						if (id) {
							// params.id = id
							// 修改商品使用 put 方法
							params.release_time = state.Form.release_time
							httpOption = axios.put
							url = `/api/head/technicalOfficeIntroduce/${id}`
						}

						httpOption(url, params).then(() => {
							if (id) {
								ElMessage.success('修改成功')
							} else {
								ElMessage.success('添加成功')
							}
							router.push({
								path: '/kssz-ksjs-index',
								query: {
									id: id
								}
							})
						})
					}
				})
			}

			return {
				...toRefs(state),
				editorRef,
				mode: 'default',
				toolbarConfig,
				editorConfig,
				handleCreated,
				Ref,
				submitAdd,
				id,
			}
		}
	}
</script>

<style>
</style>
