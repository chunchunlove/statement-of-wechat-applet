import Vue from 'vue';
const baseUrl = "https://developer.xyzq.cn/demox/";//https://developer.xyzq.cn
// const baseUrl = "/demox/";//https://developer.xyzq.cn
const baseImgUrl = "https://developer.xyzq.cn/";
const timeout =30000;
const wxAppId ='wx9a9136cdea55dc8c';
const nonce ='';

Vue.prototype.baseUrl=baseUrl;
Vue.prototype.baseImgUrl=baseImgUrl;
Vue.prototype.timeout=timeout;
Vue.prototype.wxAppId=wxAppId;
Vue.prototype.nonce=nonce;
const api = {
    url: {},
    contentTypeNormal: "application/x-www-form-urlencoded",
    contentTypeJson: "application/json",
    contentTypeFile:"multipart/form-data"
  }
export default (options)=>{
	if(!options.noLoading){
		uni.showLoading({title:"加载中"})
	}
    
	let url = ''
	if(options.url.indexOf('http')===0){
		url = options.url
	}else{
		url = baseUrl + options.url
	}
    let header = {
        //设置参数内容类型为x-www-form-urlencoded
        'content-type': api.contentTypeNormal,
        // 'Cookie': 'adminSessionId=' + api.sessionId
    }
    if(options.contentType){
        header['content-type']=options.contentType;
    }
    return new Promise((resolve,reject)=>{
        uni.request({
			url: url,
			method: options.method ? options.method : 'GET',
			header: header,
			data: Object.assign({
               // nonce:nonce
            },options.data),
			timeout: timeout,
			success: function (res) {
                //console.log('resssss',res)
				if(res.data){
					if(!options.noLoading){
						uni.hideLoading()
					}
                    
					resolve(res.data);
				} 
                // else if(res.statusCode==200&&res.data.code==3){
				// 	//session失效自动重新登录
				// 	uni.showToast({title: '未登录', icon: 'none'});
				// 	utils.clearLoginData()
				// 	setTimeout(() => {
				// 		uni.reLaunch({ url: '/pages/index/index' })
				// 	}, 1500);
				// } 
                else {
					uni.showToast({title:(res.data.resphead && res.data.resphead.message) || '接口错误', icon: 'none'});
					reject(res.data);
				}
			},
			fail: function (e) {
				uni.showToast({title: '服务器请求失败!', icon: 'none'})
				reject();
			}
		})
    })
}