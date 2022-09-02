<template>
	<view>
		<view class="uni-list" v-if="list.length>0">
			<u-swipe-action :show="item.show" :index="index" v-for="(item, index) in list" :key="item.id"
				@click="deleteHandle(item)" @open="open" :options="options">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="goDetail(item)">
					<view class="uni-media-list">
						<view class="uni-media-list-body2">
							<view class="uni-media-list-text-top">{{ item.msgTitle }}</view>
							<view class="uni-media-list-text-bottom">
								{{ setTime(item.updateTime)  }}
							</view>
						</view>
						<view class="point" v-if="item.msgStatus==='0'">·</view>
					</view>
				</view>
			</u-swipe-action>
		</view>

		<view v-if="list.length==0" style="margin: 0 20px;text-align: center;">暂无文章列表</view>
		<!-- <uni-load-more :status="status" :icon-size="8" :content-text="contentText" /> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		props: {
			menuId: {
				type: Number,
			}
		},
		computed: mapState(['hasLogin', 'uerInfo', 'uerInfo2']),
		data() {
			return {
				img: require('static/data_none.png'),
				hasMore: false,
				banner: {},
				list: [],
				page: 1,
				size: 10,
				total: 0,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			};
		},
		onLoad() {
			this.getList()
		},
		created() {

		},
		mounted() {
			//this.getList()
		},

		updated() {
			//this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.getList();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		methods: {
			getList() {
				this.request({
					url: "pushmsg/selectPhone",
					data: {
						phone: this.uerInfo.mobile,
						page: this.page,
						pageSize: this.size
					}
				}).then(data => {
					if (data && data.resphead && data.resphead.succeed) {
						this.list = []
						if (data.respbody.list && data.respbody.list.length > 0) {
							data.respbody.list.map((item, i) => {
								this.list.push({
									show: false,
									...item
								})
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
			deleteHandle(item) {
				this.request({
					url: "pushmsg/delete",
					data: {
						id: item.id
					}
				}).then(data => {
					if (data && data.resphead && data.resphead.succeed) {
						uni.showToast({
							title: "删除成功",
							icon: "none"
						});
						this.getList()
					} else {
						uni.showToast({
							title: "删除失败",
							icon: "none"
						});
						getList()
					}
				});
			},
			open(index) {
				this.list[index].show = true;
				this.list.map((val, idx) => {
					if (index != idx) this.list[idx].show = false;
				})
			},
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/message/message-detail?id=' + item.id
				});
			},
			setTime(val) {
				if (val) {
					return this.moment(val).startOf('second').fromNow();
				} else {
					return ''
				}

			},
			aderror(e) {
				console.log("aderror: " + JSON.stringify(e.detail));
			},
			handleToLower() {
				// if (this.hasMore) {
				//   this.params.skip += this.params.limit;
				//   this.getList();
				// } else {
				//   uni.showToast({
				//     title: "没有数据了",
				//     icon: "none"
				//   });
				// }
			}
		}
	};
</script>

<style lang="scss" scoped>
	.banner {
		height: 300rpx;
		// overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
		background-color: #cccccc;
	}

	.banner-title {
		overflow: hidden;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		font-size: 32rpx;
		font-weight: 400;
		line-height: 42rpx;
		white-space: pre-wrap;
		color: white;
		z-index: 11;
		padding: 30rpx;
		background: rgba($color: #000000, $alpha: 0.5);
	}

	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.uni-list-cell {
		position: relative;
		border-bottom: 1px solid #E3E3E5;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-media-list {
		padding: 22rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: row;
		position: relative;
	}
	.point{
		position: absolute;
		font-weight: 700;
		font-size: 30rpx;
		color: red;
		left: 30rpx;
		bottom: 10rpx;
	}
	.uni-media-list-logo {
		width: 180rpx;
		height: 140rpx;
		margin-right: 20rpx;
		display: inline-block;
	}

	.uni-media-list-body2 {
		height: auto;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		width: 100%;

		.uni-media-list-text-top {
			width: 70%;
			height: 60rpx;
			font-size: 28rpx;
			overflow: hidden;
			line-height: 60rpx;
		}

		.uni-media-list-text-bottom {
			width: 30%;
			line-height: 60rpx;
			font-size: 26rpx;
			color: #8f8f94;
			text-align: right;

		}
	}
</style>
