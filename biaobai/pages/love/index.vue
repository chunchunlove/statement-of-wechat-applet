<template>
	<view class="bg-wrap love-page">
		<view class="container">
			<p>什么是真正的爱情呢？爱情是彼此的牵挂，相互依靠，同甘共苦的，不离不弃的表现，只有在两人世界才能看得摸得着。爱情是时刻都在相互想念着，互相吸引，有很多共同的想法和看法，愿意让对方快乐，在关心对方，在为对方付出！ 我相信爱情。爱情有很多种，但无论刻骨铭心还是奋不顾身亦或求仁得仁，我们最期待的爱情都是未曾错付！</p>
			<p>真正的爱情是愿意包容对方的缺点，愿意为对方舍弃一些自己的东西，比如时间、金钱、自由等等。你会每天看着对方开心的笑着，自己也会变得很开心，这是最简单、纯粹的爱情。不需要考虑太多东西，遇到困难了一起解决，不在一起的时候会想着对方在干嘛，在一起的时候一起逛街、吃饭、看电影，什么事都是两个人一起做的，很幸福了。</p>
			<p>我个人觉得爱情就是相濡以沫，相互扶持，不离不弃的，可以相互包容的，不用在乎他人看法，虽然平平淡淡，但是会觉得很开心！</p>
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				show: false,
				dataForm: {},
			};
		},
		onShow() {
			
		},
		mounted() {

		},
		onLoad() {

		}
	};
</script>
<style lang="scss" scoped>
	.love-page{
		position: relative;
		padding-top: 1rpx;
		.container{
			height: calc(100vh - 200rpx) ;
			margin:100rpx auto 0;
			width: 640rpx;
			padding: 40rpx;
			background-color: #FFFFFF;
			border-radius: 100rpx;
			p{
				text-indent: 60rpx;
				font-size: 30rpx;
				line-height: 1.4;
				
			}
		}
	}
</style>
