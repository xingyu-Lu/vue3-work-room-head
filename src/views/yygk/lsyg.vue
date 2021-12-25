<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_01.jpg" lazy></el-image>
		</el-col>
	</el-row>
	
	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>历史沿革</el-breadcrumb-item>
	</el-breadcrumb>
	
	<el-tabs v-model="active">
	    <el-tab-pane label="历史沿革" name="first">
			<p>
				<span style="font-size:18px;"><span style="line-height:2;color:#e53333;">★</span><strong><span style="line-height:2;font-size:24px;">宜宾市第一联合诊所（1951年1月—1958年6月）</span></strong></span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;1951年1月，宜宾名医罗清泉响应政府号召，</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;在城区鲁家园创办宜宾市第一联合诊所。</span> 
			</p>
			<p>
				<span style="font-size:18px;"><span style="line-height:2;font-family:Microsoft YaHei;white-space:normal;color:#e53333;font-size:18px;">★</span><strong><span style="line-height:2;font-family:Microsoft YaHei;font-size:24px;">宜宾市联合中医院（1958年6月—1960年7月）</span></strong></span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;1958年6月，宜宾市第一联合诊所与宜宾市第七联合</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;</span><span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">诊所合并，改名宜宾市联合中医院。</span> 
			</p>
			<p>
				<span style="font-size:18px;"><strong><span style="line-height:2;font-family:Microsoft YaHei;white-space:normal;color:#e53333;font-size:18px;">★</span><span style="line-height:2;font-family:Microsoft YaHei;font-size:24px;">宜宾市人民医院（1960年7月—1997年1月）</span></strong><span style="line-height:2;font-family:Microsoft YaHei;font-size:24px;">&nbsp;</span></span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;1960年7月，以宜宾市联合中医院为主体，</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;1960年7月，以宜宾市联合中医院为主体，</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;正式成立宜宾市人民医院。</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;1997年1月，宜宾市人民医院更名为宜宾市翠屏区人民医院。</span> 
			</p>
			<p>
				<span style="font-size:18px;"><strong><span style="line-height:2;font-family:Microsoft YaHei;white-space:normal;color:#e53333;font-size:18px;">★</span><span style="line-height:2;font-family:Microsoft YaHei;font-size:24px;">宜宾市第三人民医院（2007年10月至今）</span></strong></span> 
			</p>
			<p>
				<span style="font-size:18px;"><strong><span style="line-height:2;font-family:Microsoft YaHei;white-space:normal;color:#e53333;font-size:18px;">★</span><span style="line-height:2;font-family:Microsoft YaHei;font-size:24px;">宜宾市翠屏区人民医院（1997年1月—2007年10月）</span></strong></span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;2007年10月，宜宾市翠屏区人民医院更名为宜宾市第三人民医院。</span> 
			</p>
			<p>
				<span style="line-height:2;font-family:Microsoft YaHei;font-size:18px;">&nbsp; &nbsp;2012年2月，宜宾市第三人民医院与宜宾市中医专科医院整合。</span> 
			</p>
		</el-tab-pane>
	    <el-tab-pane label="历任院长" name="second">
			<ul style="font-size: 18px; line-height: 42px;">
				<li>1960年    罗清泉同志任院长</li>
				<li>1980年    周元贵同志任院长</li>
				<li>1982年    赵文林同志任院长</li>
				<li>1983年    赵忠恒同志任院长</li>
				<li>1984年    郑明德同志任院长</li>
				<li>1993年    付永秀同志任院长</li>
				<li>1996年    周玉川同志任院长</li>
				<li>1997年    副院长刘光远同志主持工作</li>
				<li>2003年    刘光远同志任院长</li>
				<li>2005年    党总支书记邓尚林同志主持工作</li>
				<li>2007年    滕华安同志任院长</li>
			</ul>
		</el-tab-pane>
	    <el-tab-pane label="历史照片" name="third">
			<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101712_9612.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>原门诊部</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101740_1956.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院大楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102059_8362.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院门诊楼全景</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102000_9143.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>将军楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
			<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101712_9612.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>原门诊部</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101740_1956.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院大楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102059_8362.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院门诊楼全景</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102000_9143.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>将军楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
			<el-row :gutter="20" justify="space-around" style="margin-bottom: 20px;">
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101712_9612.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>原门诊部</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915101740_1956.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院大楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102059_8362.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>住院门诊楼全景</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :md="6">
					<el-card :body-style="{ padding: '0px' }">
						<img src="https://www.ybssyy.com/uploadfiles/2013/0308/10074098/image/20170915102000_9143.jpg"
							style="width: 100%;" />
						<div style="padding: 14px; line-height: 36px; font-size: 14px;">
							<div style="display: flex; justify-content: space-around">
								<div style="list-style: none;">
									<li>将军楼</li>
								</div>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</el-tab-pane>
	  </el-tabs>
</template>

<script>
	import { ref } from 'vue'
	export default {
		setup() {
			const active = ref('first')
			return {
				active,
			}
		}
	}
</script>

<style>
</style>
