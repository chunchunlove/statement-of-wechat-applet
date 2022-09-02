import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		uerInfo: {},
		uerInfo2:{},
		hasLogin: false
	},
	mutations: {
		
		login(state, provider) {
			state.hasLogin = true
			state.uerInfo = provider
			uni.setStorage({
				key: 'uerInfo',
				data: provider
			})
		},
		info(state, provider) {
			state.uerInfo2 = provider
			uni.setStorage({
				key: 'uerInfo2',
				data: provider
			})
			uni.setStorage({
				key: 'hsaLogin',
				data: true
			})
		},
		logout(state) {
			state.hasLogin = false
			
			//state.uerInfo = {}
			//state.uerInfo2 = {}
			
			// uni.removeStorage({
			// 	key: 'uerInfo'
			// });
			// uni.removeStorage({
			// 	key: 'uerInfo2'
			// });
			uni.setStorage({
				key: 'hsaLogin',
				data: false
			});
		}
	}
})

export default store
