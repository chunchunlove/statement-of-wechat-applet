<template>
	<view class="home-wrap bg-wrap" >
		<view>
			<h1 style="pointer-events:none;">
				<span id="logo">
					<image class="logo-img" src="../../static/logo1.png" alt="" usemap="#logo"></image>
				</span>
			</h1>
			<view class="menu">
				<ul id="menu">
					<li :id="'nav'+(i+1)" v-for="(item,i) in arr" :key="i">
						<navigator :url="item.link" hover-class="navigator-hover">	
							<image :src="item.url" :class="['nav-img', 'nav-img'+(i+1)]" :style="{'width':item.width,'height':item.height}" alt=""></image>
							<span>{{item.title}}</span>
						</navigator>
					</li>
				</ul>
			</view>
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
				arr:[{
					width:'216rpx',
					height:'236rpx',
					url:require('../../static/nav1.png'),
					title:'爱情',
					link:'/pages/love/index',
				},{
					width:'270rpx',
					height:'236rpx',
					url:require('../../static/nav2.png'),
					title:'记事',
					link:'/pages/note/index',
				},{
					width:'216rpx',
					height:'236rpx',
					url:require('../../static/nav3.png'),
					title:'视频',
					link:'/pages/video/index',
				},{
					width:'216rpx',
					height:'236rpx',
					url:require('../../static/nav4.png'),
					title:'相册',
					link:'/pages/album/index',
				},{
					width:'270rpx',
					height:'236rpx',
					url:require('../../static/nav5.png'),
					title:'留言',
					link:'/pages/comments/index',
					
				},{
					width:'216rpx',
					height:'236rpx',
					url:require('../../static/nav6.png'),
					title:'沙漏',
					link:'/pages/hourglass/index',
				}]
			};
		},
		onLoad(option) {
		},
		mounted() {

		},

		methods: {

		}
	};
</script>

<style lang="scss">
	.home-wrap {

		#logo {
			display: block;
		}

		#logo .logo-img {
			position: relative;
			top: 252rpx;
			left: 118rpx;
			width: 470rpx;
			height:436rpx;
			z-index: 10;
		}

		.menu {
			.navigator-hover{
			
					transform: scale(1.4);
					transition: 0.3s all;
				
			}
		}

		#menu {
			list-style: none;
		}

		#menu li {
			position: absolute;
			
		}

		#menu li .nav-img {
			position: relative;
			z-index: 6;
			top: 20rpx;
			left: 20rpx;
			&.nav-img1{
				
			}
		}

		li span {
			position: absolute;
			width: 193.33rpx;
			top: 109.33rpx;
			color: #fff;
			text-align: center;
			left: 30rpx;
			text-shadow: 1rpx 1rpx rgba(0, 0, 0, .2);
			z-index: 9
		}

		#nav1 {
			top: 105rpx;
			left: 96rpx;
			span{
				top: 90rpx;
			}
		}

		#nav2 {
			top: 358.5rpx;
			left: 0rpx;
			span{
				margin-left: -12rpx;
			}
		}

		#nav3 {
			top: 558rpx;
			left: 111rpx;
		}

		#nav4 {
			top: 558rpx;
			left: 342rpx;
		}

		#nav5 {
			top: 360rpx;
			left: 448rpx;
			span{
				margin-left: 20rpx;
			}
		}

		#nav6 {
			top: 105rpx;
			left: 342rpx;
			span{
				top: 90rpx;
			}
		}
	}
</style>
