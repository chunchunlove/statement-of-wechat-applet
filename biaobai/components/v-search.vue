<template>
	<view class="v-search">
		<u-search placeholder="搜索" :input-style="{'width':'10rpx'}" v-model="search" :show-action="false" margin="10px 0 10px 0" @focus="handleFocus"></u-search>
		<view class="badge-wrap" @click="messageHandle()">
			<uni-badge size="small" :text="messageVal" absolute="rightTop" type="error">
			    <u-icon name="chat" style="font-size: 40rpx;"></u-icon>
			</uni-badge>
		</view>
		
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components: {

		},
		data() {
			return {
				search:'',
				messageVal:0,
			};
		},
		computed: mapState(['hasLogin', 'uerInfo', 'uerInfo2']),
		onLoad() {
			
		},
		activated() {
			
		},
		mounted() {
			this.getNumHandle()
			// setInterval(()=>{
			// 	this.getNumHandle()
			// },3000)
		},
		onShow(){
			
			
		},
		
		methods: {
			handleFocus(){
				uni.navigateTo({
					url:'/pages/search/index'
				})
			},
			messageHandle(){
				uni.navigateTo({
					url:'/pages/message/index'
				})
			},
			getNumHandle() {
				this.request({
					url: "pushmsg/selectPhone",
					data: {
						phone: this.uerInfo.mobile,
						page: 1,
						pageSize:1000000
					},
					noLoading:true
				}).then(data => {
					if (data && data.resphead && data.resphead.succeed) {
						let list = []
						this.messageVal = 0
						if (data.respbody.list && data.respbody.list.length > 0) {
							data.respbody.list.map((item, i) => {
								if(item.msgStatus=== '0'){
									this.messageVal++
								}
							})
						}
			
			
						this.list = data.respbody.list
						console.log(this.list)
			
					} else {
						this.isShow = false
						uni.showToast({
							title: data.resphead.message || "获取列表失败",
							icon: "none"
						});
					}
				});
			},
		}
	};
</script>

<style scoped  lang="scss">
	.v-search{
		display: flex;
		.u-search{
			 width: 500rpx;
		}
		.badge-wrap{
			padding-right: 28rpx;
			padding-top: 32rpx;
			padding-left: 10rpx;
		}

	}
 
</style>
