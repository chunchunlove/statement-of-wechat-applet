<template>
	<view class="bg-wrap video-page">
		视频模块需要开通企业级微信小程序才可使用
		<!-- <view class="video-wrap">
			<video id="myVideo" :src="urls" enable-danmu danmu-btn controls :danmu-list="danmuList"></video>
		</view> -->
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				show: false,
				danmuList:[
					{
					    text: '一定要幸福哦！',
					    color: '#ff00ff',
					    time: 1
					},
					{
					    text: '做的很好哦！',
					    color: '#ff00ff',
					    time: 4
					},
					{
					    text: '加油',
					    color: '#ff00ff',
					    time: 8
					},
					{
					    text: '我感动了！',
					    color: '#ff00ff',
					    time: 9
					},
					{
					    text: '一定要幸福哦！',
					    color: '#ff00ff',
					    time: 16
					},
					{
					    text: '祝福你们！',
					    color: '#ff00ff',
					    time: 30
					},
				],
				urls:'',
				dataForm: {},
			};
		},
		onShow() {
			
		},
		mounted() {

		},
		onLoad() {
			//console.log('onLoad')

		},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	.video-page{
		position: relative;
		.video-wrap{
			display: flex; 
			flex-direction: row; 
			align-items: center;
			//height: calc(100vh - 88rpx) ;
			height: 100vh ;
			width: 100%;
			padding-left: 125rpx;
			uni-video,video{
				width:500rpx;
				height: 770rpx;
			}
		}
	}
</style>
