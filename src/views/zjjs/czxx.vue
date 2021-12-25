<template>
	<el-row style="margin-bottom: 20px;">
		<el-col>
			<el-image style="width: 100%;" src="https://www.ybssyy.com/images/images/ad_02.jpg" lazy></el-image>
		</el-col>
	</el-row>

	<el-breadcrumb separator="/" style="margin-bottom: 20px;">
		<el-breadcrumb-item :to="{ path: '/' }">宜宾市第三人民医院</el-breadcrumb-item>
		<el-breadcrumb-item>出诊信息</el-breadcrumb-item>
	</el-breadcrumb>
			
	<p style="text-align:center;">
		<b><span style="font-size:24px;color:#337FE5;line-height:2;">宜宾市第三人民医院专家、专科门诊安排</span></b>
	</p>
	<div align="center">
		<table border="0" cellspacing="0" style="width:1000px;border:none;" class="ke-zeroborder">
			<tbody>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">科 室</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期一</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期二</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期三</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期四</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期五</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期六</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#70AD47;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期天</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">时 段</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">口腔科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐兴娅</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">何大富</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐兴娅</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">何大富</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐兴娅</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">何大富</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐兴娅</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">何大富</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐兴娅</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">何大富</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">骨一科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗磊</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李扬</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">邓洪</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">夏子红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">何关林</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">郑崇明</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">赵勉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">甘平</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">邓洪</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">骨二科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">于勇华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">何代明</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">王学志</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶航</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶航</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肿瘤科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胡钧文</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">田源</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">田源</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">田源</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胡钧文</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">田源</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">田源</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胸外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘建超</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘建超</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肝胆外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">董家刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李兴刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李兴刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">董家刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">泌尿外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">陈善勤</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">彭光伟</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">陈善勤</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">彭光伟</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">陈善勤</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肾病内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">廖运宏</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">呼吸内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">消化内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">王溶</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">何敏</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">王溶</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">何敏</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">中医科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶兆民</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">谭中元</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶兆民</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">谭中元</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶兆民</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">谭中元</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶兆民</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">谭中元</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">扶兆民</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">谭中元</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">温 良</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">刘 兰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">中医</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">皮肤科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄莉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">疼痛中医科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">杨自国</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">杨自国</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周泽强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周泽强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">王学刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">王学刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">邱辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">邱辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">梁少辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">梁少辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">疼痛科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">（李庄）</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">本部</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘堂华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘堂华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">心血管</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周立红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="justify" style="text-align:justify;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周立红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="justify" style="text-align:justify;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周立红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="justify" style="text-align:justify;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周立红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周立红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肝病感染</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">毛海鹰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">毛海鹰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">毛海鹰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">毛海鹰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">毛海鹰</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">西医普通</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">门诊</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">罗昌华</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胃肠肛门</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">黄素</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">唐浩</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">眼科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">耳鼻喉科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">林涛</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">冯越</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">林涛</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">林涛</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">林涛</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.0000pt solid #A9D08E;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="79" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">神经内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">内分泌科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">牟敏</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">周红卫</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="43" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="47" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="51" valign="center" style="border:1.5000pt solid #A9D08E;background:#E2EFDA;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<p>
		<br>
	</p>
	<p style="text-align:center;">
		<b><span style="font-size:24px;color:#01B5E8;line-height:2;">李庄同济医院专家、专科门诊安排</span></b>
	</p>
	<p style="text-align:center;">
		<b><span style="font-size:24px;color:#01B5E8;line-height:2;"> </span></b>
	</p>
	<div align="center">
		<table border="0" cellspacing="0" style="width:1000px;border:none;" class="ke-zeroborder">
			<tbody>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">科 &nbsp;室</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期一</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期二</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期三</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期四</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="90" valign="center" colspan="2"
						style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期五</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期六</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#5B9BD5;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;">星期天</span></b><b><span
									style="font-family:微软雅黑;color:#FFFFFF;font-size:11pt;"></span></b>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<b><span style="font-family:微软雅黑;font-size:11pt;">时 &nbsp;段</span></b><b><span
									style="font-family:微软雅黑;font-size:11pt;"></span></b>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">下午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:11pt;">上午</span><span
								style="font-family:微软雅黑;font-size:11pt;"></span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">骨 科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">夏子红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">夏子红</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胸外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">宋超</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘玉龙</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">宋超</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘玉龙</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">中医科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肝胆外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李兴刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李兴刚</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">泌尿外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肾病内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">廖运宏</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">消化内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">疼痛科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">（李庄）</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">康复医学科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘延青</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">胃肠肛门</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">外科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">李强</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">肝病感染</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">普通内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">门诊</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">杨昌辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘光远</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">刘光远</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">杨昌辉</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.0000pt solid #305496;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
				</tr>
				<tr>
					<td width="82" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;vertical-align:middle;">
							<span style="font-family:微软雅黑;font-size:10pt;">神经内科</span><span
								style="font-family:微软雅黑;font-size:10pt;"><br>
							</span><span style="font-family:微软雅黑;font-size:10pt;">内分泌科</span><span
								style="font-family:微软雅黑;font-size:10pt;"></span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="45" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:微软雅黑;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;">&nbsp;</span>
						</p>
					</td>
					<td width="55" valign="center" style="border:1.5000pt solid #305496;background:#DDEBF7;">
						<p class="MsoNormal" align="center" style="text-align:center;">
							<span style="font-family:宋体;font-size:10pt;"></span>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<b><br>
	</b>
	<p>
		<br>
	</p>
</template>

<script>
</script>

<style>
</style>
