<template>
	<view class="bg-wrap hourglass-page">
		<view class="container">
			<view class="loveHeart">
				<view class="title">你知道我爱你爱了多久了吗？</view>
				<view class="time" >
					{{timeStr}}
				</view>
				<view class="gif">
					<image class="img" src="../../static/1.gif"></image>
					<image class="img" src="../../static/2.gif"></image>
				</view>

				<view class="loveu">
					爱：从2022年1月1日开始！<br />
					<view class="signature" style="float: right; margin-right: 80rpx;">by<span style="font-weight: 700;padding-left: 4rpx;">XX</span> </view>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import {
		timeElapse
	} from '../../utils/functions.js'
	export default {
		components: {},
		data() {
			return {
				show: false,
				dataForm: {},
				timeStr: '',
			};
		},
		mounted() {

		},
		onLoad() {
			this.timeHandle()
		},
		methods: {
			timeHandle() {
				var together = new Date('2022-01-01 00:00:00');
				this.timeStr = timeElapse(together);
				let loop = setInterval(()=> {
					this.timeStr = timeElapse(together);
				}, 500);

			},
		},
	};
</script>
<style lang="scss" scoped>
	.hourglass-page {
		position: relative;
		padding-top: 1rpx;

		.container {
			height: calc(100vh - 200rpx);
			margin: 100rpx auto 0;
			width: 640rpx;
			padding: 40rpx;
			background-color: #FFFFFF;
			border-radius: 100rpx;

			.loveHeart {
				.title{
					margin-top: 40rpx;
					font-size: 40rpx;
					text-align: center;
				}
				.time{
					font-size: 40rpx;
					margin: 50rpx 0;
					text-align: center;
				}
				.gif{
					margin: 50rpx 0;
					display: flex;
					justify-content: space-around;
					.img{
						width: 200rpx;
						height: 200rpx;
					}
				}
				.loveu{
					font-size: 32rpx;
				}
			}
		}
	}
</style>
