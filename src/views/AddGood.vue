<template>
	<el-card>
		<el-form :model="goodForm" :rules="rules" ref="goodRef" label-width="100px" class="goodForm">
			<el-form-item label="复选框">
				<el-form-item>
					<!-- <p>多个复选框：</p> -->
					  <input type="checkbox" id="runoob" value="1" v-model="checkedNames">
					  <label for="runoob">Runoob</label>
					  <input type="checkbox" id="google" value="2" v-model="checkedNames">
					  <label for="google">Google</label>
					  <input type="checkbox" id="taobao" value="3" v-model="checkedNames">
					  <label for="taobao">taobao</label>
				</el-form-item>
			</el-form-item>
			
			<el-form-item required label="商品分类">
				<el-cascader :placeholder="defaultCate" style="width: 300px" :props="category"
					@change="handleChangeCate"></el-cascader>
			</el-form-item>
			<el-form-item label="商品名称" prop="goodsName">
				<el-input style="width: 300px;" v-model="goodForm.goodsName" placeholder="请输入商品名称"></el-input>
			</el-form-item>
			<el-form-item label="商品简介" prop="goodsIntro">
				<el-input style="width: 300px" type="textarea" v-model="goodForm.goodsIntro"
					placeholder="请输入商品简介(100字)"></el-input>
			</el-form-item>
			<el-form-item label="商品价格" prop="originalPrice">
				<el-input type="number" min="0" style="width: 300px" v-model="goodForm.originalPrice"
					placeholder="请输入商品价格"></el-input>
			</el-form-item>
			<el-form-item label="商品售卖价" prop="sellingPrice">
				<el-input type="number" min="0" style="width: 300px" v-model="goodForm.sellingPrice"
					placeholder="请输入商品售价"></el-input>
			</el-form-item>
			<el-form-item label="商品库存" prop="stockNum">
				<el-input type="number" min="0" style="width: 300px" v-model="goodForm.stockNum" placeholder="请输入商品库存">
				</el-input>
			</el-form-item>
			<el-form-item label="商品标签" prop="tag">
				<el-input style="width: 300px" v-model="goodForm.tag" placeholder="请输入商品小标签"></el-input>
			</el-form-item>
			<el-form-item label="上架状态" prop="goodsSellStatus">
				<el-radio-group v-model="goodForm.goodsSellStatus">
					<el-radio label="0">上架</el-radio>
					<el-radio label="1">下架</el-radio>
				</el-radio-group>
			</el-form-item>
			<!-- 			<el-form-item required label="商品主图" prop="goodsCoverImg">
				<el-upload class="avatar-uploader" :action="uploadImgServer" accept="jpg,jpeg,png" :headers="{
              token: token
            }" :show-file-list="false" :before-upload="handleBeforeUpload" :on-success="handleUrlSuccess">
					<img style="width: 100px; height: 100px; border: 1px solid #e9e9e9;" v-if="goodForm.goodsCoverImg"
						:src="goodForm.goodsCoverImg" class="avatar">
					<el-icon v-else class="avatar-uploader-icon">
						<plus />
					</el-icon>
				</el-upload>
			</el-form-item> -->
			<el-form-item label="商品主图" prop="goodsCoverImg">
				<el-upload ref="uploadRef" :action="uploadImgServer" :limit="2" list-type="picture-card"
					thumbnail-mode=true :headers="{ token: token }" :before-upload="handleBeforeUpload"
					:on-success="handleUrlSuccess" :auto-upload="true" :file-list="goodForm.fileList">
					<template #default>
						<el-icon>
							<plus />
						</el-icon>
					</template>
					<template #file="{ file }">
						<div>
							<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
							<span class="el-upload-list__item-actions">
								<span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove">
									<el-icon>
										<delete />
									</el-icon>
								</span>
							</span>
						</div>
					</template>
				</el-upload>
			</el-form-item>
			<el-form-item label="详情内容">
				<div ref='editor'></div>
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
		getCurrentInstance
	} from 'vue'
	import WangEditor from 'wangeditor'
	import axios from '@/utils/axios'
	import {
		ElMessage
	} from 'element-plus'
	import {
		useRoute,
		useRouter
	} from 'vue-router'
	import {
		sessionGet,
		uploadImgServer,
		uploadImgsServer,
		hasEmoji
	} from '@/utils'
	export default {
		name: 'AddGood',
		components: {
			Plus,
			Delete
		},
		setup() {
			const {
				proxy
			} = getCurrentInstance()
			const uploadRef = ref(null)
			const editor = ref(null)
			const goodRef = ref(null)
			const route = useRoute()
			const router = useRouter()
			const {
				id
			} = route.query
			const state = reactive({
				checkedNames: [1,2],
				disabled: false,
				uploadImgServer,
				token: sessionGet('token') || '',
				id: id,
				defaultCate: '请选择',
				goodForm: {
					goodsName: '',
					goodsIntro: '',
					originalPrice: '',
					sellingPrice: '',
					stockNum: '',
					goodsSellStatus: '0',
					goodsCoverImg: '',
					tag: '',
					fileList: [],
				},
				// rules: {
				// 	goodsCoverImg: [{
				// 		required: 'true',
				// 		message: '请上传主图',
				// 		trigger: ['change']
				// 	}],
				// 	goodsName: [{
				// 		required: 'true',
				// 		message: '请填写商品名称',
				// 		trigger: ['change']
				// 	}],
				// 	originalPrice: [{
				// 		required: 'true',
				// 		message: '请填写商品价格',
				// 		trigger: ['change']
				// 	}],
				// 	sellingPrice: [{
				// 		required: 'true',
				// 		message: '请填写商品售价',
				// 		trigger: ['change']
				// 	}],
				// 	stockNum: [{
				// 		required: 'true',
				// 		message: '请填写商品库存',
				// 		trigger: ['change']
				// 	}],
				// },
				categoryId: '',
				category: {
					lazy: true,
					lazyLoad(node, resolve) {
						const {
							level,
							value
						} = node
						axios.get('/categories.php', {
							params: {
								// pageNumber: 1,
								// pageSize: 1000,
								categoryLevel: level + 1,
								parentId: value || 0
							}
						}).then(res => {
							const list = res.list
							const nodes = list.map(item => ({
								value: item.categoryId,
								label: item.categoryName,
								leaf: level >= 1
							}))
							resolve(nodes)
						})
					}
				}
			})
			let instance
			onMounted(() => {
				instance = new WangEditor(editor.value)
				instance.config.showLinkImg = false
				instance.config.showLinkImgAlt = false
				instance.config.showLinkImgHref = false
				instance.config.uploadImgMaxSize = 2 * 1024 * 1024 // 2M
				instance.config.uploadFileName = 'file'
				instance.config.uploadImgHeaders = {
					token: state.token,
				}
				// 图片返回格式不同，需要自定义返回格式
				instance.config.uploadImgHooks = {
					// 图片上传并返回了结果，想要自己把图片插入到编辑器中
					// 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
					customInsert: function(insertImgFn, result) {
						console.log('result', result)
						// result 即服务端返回的接口
						// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
						if (result.data && result.data.length) {
							result.data.forEach(item => insertImgFn(item))
						}
					}
				}
				instance.config.uploadImgServer = uploadImgsServer
				Object.assign(instance.config, {
					onchange() {
						console.log('change')
					},
				})
				instance.create()
				if (id) {
					axios.get('/good_info.php', {params: {id: id}}).then(res => {
						const {
							goods,
							firstCategory,
							secondCategory,
							thirdCategory
						} = res
						state.goodForm = {
							goodsName: goods.goodsName,
							goodsIntro: goods.goodsIntro,
							originalPrice: goods.originalPrice,
							sellingPrice: goods.sellingPrice,
							stockNum: goods.stockNum,
							goodsSellStatus: String(goods.goodsSellStatus),
							goodsCoverImg: goods.goodsCoverImg,
							tag: goods.tag,
							categoryId: goods.goodsCategoryId,
							fileList: [{
								url: goods.goodsCoverImg,
							}, ]
						}
						state.categoryId = goods.goodsCategoryId
						// state.defaultCate =
						// 	`${firstCategory.categoryName}/${secondCategory.categoryName}/${thirdCategory.categoryName}`
						if (instance) {
							// 初始化商品详情 html
							instance.txt.html(goods.goodsDetailContent)
						}
					})
				}
			})
			onBeforeUnmount(() => {
				instance.destroy()
				instance = null
			})
			const submitAdd = () => {
				goodRef.value.validate((vaild) => {
					if (vaild) {
						// 默认新增用 post 方法
						let httpOption = axios.post
						let params = {
							goodsCategoryId: state.categoryId,
							goodsCoverImg: state.goodForm.goodsCoverImg,
							goodsDetailContent: instance.txt.html(),
							goodsIntro: state.goodForm.goodsIntro,
							goodsName: state.goodForm.goodsName,
							goodsSellStatus: state.goodForm.goodsSellStatus,
							originalPrice: state.goodForm.originalPrice,
							sellingPrice: state.goodForm.sellingPrice,
							stockNum: state.goodForm.stockNum,
							tag: state.goodForm.tag
						}
						// if (hasEmoji(params.goodsIntro) || hasEmoji(params.goodsName) || hasEmoji(params
						// 		.tag) || hasEmoji(params.goodsDetailContent)) {
						// 	ElMessage.error('不要输入表情包，再输入就打死你个龟孙儿~')
						// 	return
						// }
						if (params.goodsName.length > 128) {
							ElMessage.error('商品名称不能超过128个字符')
							return
						}
						if (params.goodsIntro.length > 200) {
							ElMessage.error('商品简介不能超过200个字符')
							return
						}
						if (params.tag.length > 16) {
							ElMessage.error('商品标签不能超过16个字符')
							return
						}
						console.log('params', params)
						if (id) {
							params.goodsId = id
							// 修改商品使用 put 方法
							httpOption = axios.put
						}
						httpOption('/good', params).then(() => {
							ElMessage.success(id ? '修改成功' : '添加成功')
							router.push({
								path: '/good'
							})
						})
					}
				})
			}
			const handleBeforeUpload = (file) => {
				const sufix = file.name.split('.')[1] || ''
				if (!['jpg', 'jpeg', 'png'].includes(sufix)) {
					ElMessage.error('请上传 jpg、jpeg、png 格式的图片')
					return false
				}
			}
			const handleUrlSuccess = (val) => {
				state.goodForm.goodsCoverImg = val.data || ''
			}
			const handleChangeCate = (val) => {
				state.categoryId = val[1] || 0
			}

			const handleRemove = (file) => {
				uploadRef.value.clearFiles()
				state.goodForm.goodsCoverImg = ''
			}

			return {
				...toRefs(state),
				uploadRef,
				goodRef,
				submitAdd,
				handleBeforeUpload,
				handleUrlSuccess,
				editor,
				handleChangeCate,
				handleRemove
			}
		}
	}
</script>

<style scoped>
	:deep() .el-upload-list--picture-card .el-upload-list__item {
		width: 100px;
		height: 100px;
	}

	:deep() .el-upload--picture-card {
		width: 100px;
		height: 100px;
	}

	:deep() .el-upload--picture-card i {
		margin-top: 35px;
	}

	/* .avatar-uploader {
		width: 100px;
		height: 100px;
		color: #ddd;
		font-size: 30px;
	}

	.avatar-uploader-icon {
		display: block;
		width: 100%;
		height: 100%;
		border: 1px solid #e9e9e9;
		padding: 32px 17px;
	} */
</style>
