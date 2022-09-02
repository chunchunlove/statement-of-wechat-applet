<template>
	<view class="bg-wrap album-page">
		<view class="album">
		<view class="album__content" v-for="(item,i) in list" :key="i">
			<u--text
					:text="item.title"
					type="primary"
					bold
					size="17"
			></u--text>
			<u--text
					margin="8rpx 0 20rpx 0"
					:text="item.text"
			></u--text>
			<u-album :urls="item.url2"></u-album>
		</view>
	</view>

	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				list:[
					{
						title:'xx博物馆',
						text:'2022年1月10日在xx博物馆拍的一些照片',
						url2: [
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLe9UbUy7l9XHEHxqNwfUbT5JVEqv6q4CuLfiaCC9MY1CYveTJvHtbA0lg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLe9UbUy7l9XHEHxqNwfUbT5JVEqv6q4CuLfiaCC9MY1CYveTJvHtbA0lg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLe9UbUy7l9XHEHxqNwfUbT5JVEqv6q4CuLfiaCC9MY1CYveTJvHtbA0lg/0?wx_fmt=jpeg'
						]
					},
					
					{
						title:'xx学校',
						text:'2022年1月20日在xx学校拍的一些照片',
						url2: [
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLenYOxKME9icu5JIhXrJlgZ0TF6dP8NDDaxTCaJcyBWFib1XO7GlxvFicGA/0?wx_fmt=jpeg'
						]
					},
					{
						title:'xx景点',
						text:'2022年1月30日在xx景点拍的一些照片',
						url2: [
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg',
							'https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7nViaibsred4Mavp9eZfYuLeMA3ywa6ptuUyc1j2v8eMk9INq8WpIOlApWEkdlw0HRtiaIP81GGCgqg/0?wx_fmt=jpeg'
						]
					}
				]
			};
		},
		mounted() {

		},
		onLoad() {

		},
		methods: {

		},
	};
</script>
<style lang="scss" scoped>
	.album-page {
		position: relative;
		padding-top: 1rpx;
		
		.album {
			padding: 50rpx;
			height: 88%;
			overflow-y: auto;
			.album__content{
				margin-bottom: 50rpx;
			}
		}
	}
</style>
