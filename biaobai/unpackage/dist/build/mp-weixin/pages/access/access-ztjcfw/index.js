(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/access/access-ztjcfw/index"],{2759:function(t,e,n){"use strict";n.r(e);var i=n("c14a"),a=n("dcc1");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("680c");var c,l=n("f0c5"),d=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"94d9a448",null,!1,i["a"],c);e["default"]=d.exports},"45c7":function(t,e,n){"use strict";var i=n("fdbb"),a=n.n(i);a.a},"4e95":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{menuId:{type:Number}},data:function(){return{img:n("ff16"),hasMore:!1,banner:{},listData:[],reload:!1,status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"}}},onLoad:function(){this.getList()},created:function(){},mounted:function(){this.getList()},updated:function(){},onPullDownRefresh:function(){this.reload=!0,this.getList()},onReachBottom:function(){this.status="more",this.getList()},methods:{getList:function(){var e=this;this.request({url:"/menu/cms/list",data:{menuId:this.menuId}}).then((function(n){n&&n.resphead&&n.resphead.succeed?e.listData=n.respbody:(e.isShow=!1,t.showToast({title:n.resphead.message||"获取文章列表失败",icon:"none"}))}))},goDetail:function(e){1==e.cmsType||2==this.dataForm.cmsType&&t.navigateTo({url:"/pages/article/article-detail?id="+e.cmsId})},setTime:function(t){return t?moment(t).format("yyyy-MM-DD HH:mm:SS"):""},aderror:function(t){console.log("aderror: "+JSON.stringify(t.detail))},handleToLower:function(){}}};e.default=i}).call(this,n("543d")["default"])},"66f6":function(t,e,n){},"680c":function(t,e,n){"use strict";var i=n("66f6"),a=n.n(i);a.a},"7cc9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.listData.length>0?t.__map(t.listData,(function(e,n){var i=t.__get_orig(e),a=e.articleCover.indexOf("undefined"),o=t.setTime(e.pubDate);return{$orig:i,g0:a,m0:o}})):null);t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[]},a0e2:function(t,e,n){"use strict";n.r(e);var i=n("4e95"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c14a:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uGrid:function(){return n.e("uview-ui/components/u-grid/u-grid").then(n.bind(null,"abdb"))},uGridItem:function(){return n.e("uview-ui/components/u-grid-item/u-grid-item").then(n.bind(null,"f1e5"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"c74d"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},d95b:function(t,e,n){"use strict";n.r(e);var i=n("7cc9"),a=n("a0e2");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("45c7");var c,l=n("f0c5"),d=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"34e8fd69",null,!1,i["a"],c);e["default"]=d.exports},dcc1:function(t,e,n){"use strict";n.r(e);var i=n("e540"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e540:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d95b"));function a(t){return t&&t.__esModule?t:{default:t}}var o={components:{articleList:i.default},props:{menuId:{type:Number}},data:function(){return{list:[{title:"账户中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=12",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=12",icon:"chrome-circle-fill",isNew:!1},{title:"交易中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=18",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=18",icon:"heart-fill",isNew:!1},{title:"行情中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=8",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=8",icon:"gift-fill",isNew:!1},{title:"产品中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=9",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=9",icon:"facebook-circle-fill",isNew:!1},{title:"推送中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=7",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=7",icon:"qzone-circle-fill",isNew:!0},{title:"金融AI中心",link:"https://developer.xyzq.cn/demox/midportal/index.html#/detail?webpageId=6",link2:"http://192.25.108.69:8072/midportal/index.html#/detail?webpageId=6",icon:"integral-fill",isNew:!1}]}},mounted:function(){},methods:{getList:function(){},clickHandle:function(t){},msgPushHandle:function(){t.navigateTo({url:"/pages/access/access-ztjcfw/push"})},utwebHandle:function(){},utwebHandle2:function(){t.navigateTo({url:"/pages/access/access-ztjcfw/utweb"})}}};e.default=o}).call(this,n("543d")["default"])},fdbb:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/access/access-ztjcfw/index-create-component',
    {
        'pages/access/access-ztjcfw/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2759"))
        })
    },
    [['pages/access/access-ztjcfw/index-create-component']]
]);
