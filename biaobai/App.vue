<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			// uni.getStorage({
			// 	key: 'uerInfo',
			// 	success: (res) => {
			// 		this.login(res.data);

			// 	}
			// });
			// uni.getStorage({
			// 	key: 'uerInfo2',
			// 	success: (res) => {
			// 		this.info(res.data);
			// 	},
			// });
		},
		//computed: mapState(['hasLogin', 'uerInfo', 'uerInfo2']),
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login', 'info'])
		}
	}
</script>

<style lang="scss">
	
	@import "./uni_modules/uview-ui/index.scss";
	@import "./styles/base.wxss";
	@import "./styles/iconfont.wxss";
	@import "./styles/uni.css";
	.bg-wrap{
		background: url('https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7ibf1CbNwbhCvZcLImhF95sSppLZia54ZO2LQiaH5HKd3Tt7xtmoUzL8KR20eO1eDicpJOERCibTibicfjg/0?wx_fmt=jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		//height: calc(100vh - 88rpx) ;
		height: 100vh ;
	}
	.bg-page{
		background: url('https://mmbiz.qpic.cn/mmbiz_jpg/lh5l13WZPp7ibf1CbNwbhCvZcLImhF95sB4oFiaial9eib9NB5Vz3ur89JzFHD6B14pwtpMmiaLLgNQD4h2M4eFO7ug/0?wx_fmt=jpeg');
		background-repeat: no-repeat;
		background-size: 100%;
		height: calc(100vh - 88rpx) ;
	}
</style>
