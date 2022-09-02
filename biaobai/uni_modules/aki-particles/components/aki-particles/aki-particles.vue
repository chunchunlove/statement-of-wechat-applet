<template>
	<view>
		<view id="particles" :style="'background-color: '+particlestyle.bgcolor+';z-index: '+particlestyle.zindex"></view>
	</view>
</template>

<script>
	import particles from '../../../../uni_modules/aki-particles/static/aki-particles/particles.js'
	export default {
		name:"akira-particles",
		props:['particlestyle'],
		mounted(){
		    particlesJS.load('particles','../../../../uni_modules/aki-particles/static/aki-particles/particles-'+this.particlestyle.style+'.json');
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	#particles{
	      position: absolute;
		  //z-index: 1;
	      width: 100%;
	      height: 100%;
	     // background-color: #000022;
	      background-repeat: no-repeat;
	      background-size: cover;
	      background-position: 50% 50%;
	}
</style>
