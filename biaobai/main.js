import Vue from 'vue'
import App from './App'
import request from "./utils/request";
import store from './store'
import uView from 'uni_modules/uview-ui'
Vue.config.productionTip = false;
Vue.prototype.request=request;
Vue.prototype.$store = store
App.mpType = 'app'
Vue.use(uView);
const app = new Vue({
	store,
  ...App
})
app.$mount()
