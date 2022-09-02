<template>
	<view class="bg-wrap note-page">
		<view class="album">
			<u-steps class="step-wrap"  :current="list.length -1" dot direction="column">
				<u-steps-item :title="item.title" :desc="item.text" v-for="(item,i) in list" :key="i">
				</u-steps-item>
			</u-steps>
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
				albumWidth: 0,
				list:[
					{
						title:'这是我们第一次加微信，通过聊天，我发现你是那么的活泼，可爱，调皮。从这天起，我就忍不住每天都找你聊天，和你聊天总是会很开心！',
						text:'2022年1月1日',
					},
					{
						title:'这天是我们第一次见面，我见到你的那一刻，我非常的开心，忍不住开心的笑起来。当时我就觉得你正是我千辛万苦需要寻找的那个人。',
						text:'2022年1月10日',
					},
					{
						title:'这天是我们第二次见面...',
						text:'2022年1月20日',
					},
					{
						title:'这天我们去...',
						text:'2022年1月30日',
						
					},
					{
						title:'这天...',
						text:'2022年2月1日',
					},
					
				]
				
			};
		},
		mounted() {

		},
		onLoad() {
			this.timeHandle()
		},
		methods: {
			timeHandle() {
				var together = new Date('2022-05-03 00:00:00');
				this.timeStr = timeElapse(together);
				let loop = setInterval(()=> {
					this.timeStr = timeElapse(together);
				}, 500);

			},
		},
	};
</script>
<style lang="scss" scoped>
	.note-page {
		position: relative;
		padding-top: 1rpx;
		
		.album {
			height: calc(100vh - 200rpx) ;
			margin:100rpx auto 0;
			width: 640rpx;
			padding: 40rpx;
			background-color: #FFFFFF;
			border-radius: 100rpx;
			/deep/ .u-steps{
				height: 100%;
				overflow-y: auto;
			}
		}
	}
</style>
