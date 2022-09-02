<template>
	<view>

		<view class="article-meta" v-if="isShow">
			<view class="title">{{dataForm.msgTitle}}</view>
			<view class="right">
				<text class="article-text" style="line-height: 42rpx;">发送于</text>
				<text class="article-time">{{dataForm.createTime}}</text>
			</view>
			
		</view>
		<view><text class="content">{{dataForm.msgText}}</text></view>
		
	</view>
</template>

<script>
	 
	export default {
		data() {
			return {
				url:'',
				title: '',
				labelArr:[],
				dataForm: {
					cmsLabel:''
				},
				id:'',
				isShow:false,
			}
		},
		onLoad(obj) {
			this.id = obj.id
			this.isShow = false
			this.getDetail();
			
			
			
		},

		
		methods: {
			getDetail() {
				this.request({
					url: "/pushmsg/select",
					data:{
						id:this.id
					}
				}).then(data => {
					if (data && data.resphead && data.resphead.succeed) {
						this.dataForm = data.respbody
						this.isShow = true
						this.dataForm.createTime = this.moment(this.dataForm.createTime).startOf('hour').fromNow()
						
						uni.setNavigationBarTitle({
							title: this.dataForm.msgTitle + '消息详情' || '消息详情'
						});
						
						//console.log('dataForm',this.dataForm)
					} else {
						this.isShow = false
						uni.showToast({
							title: data.resphead.message || "获取文章详情失败",
							icon: "none"
						});
					}
				});
			},
			escape2Html(str) {
			    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
			    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) { return arrEntities[t]; })
			  },
		}
	}
</script>
<style>
	iframe{
		top:624rpx !important ;
	}
</style>
<style lang="scss" scoped>
	.article-meta {
		padding: 20rpx 40rpx;
		display: flex;
		justify-content: space-between;
		color: gray;
	}
	.title{
		width: 50%;
		font-weight: 700;
		color: #333333;
		font-size: 16px;
	}
	.right{
		width: 50%;
		text-align: right;
	}
	.content{
		padding: 40rpx;
	}
	.article-text {
		font-size: 26rpx;
		line-height: 50rpx;
		margin: 0 20rpx;
	}

	.article-author,
	.article-time {
		font-size: 30rpx;
	}

	.article-content {
		padding: 0 30rpx;
		overflow: hidden;
		font-size: 30rpx;
		margin-bottom: 30rpx;
	}
</style>
