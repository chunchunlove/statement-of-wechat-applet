# 粒子特效背景组件 aki-particles 
## 前言
这个插件是VincentGarreau大神的[particles.js](https://github.com/VincentGarreau/particles.js)的uniapp封装。
做项目的时候发现留白的地方有点空，于是用了particles.js，然后感觉以后经常都能用上，就做成了组件，突然又想试试自己做插件，刚好是周末，就尝试了一下。
第一次写插件，有不专业的地方大家多多指教。有问题请联系QQ：50793655
[演示地址](https://static-35bf94ca-f0cc-4340-8c77-e0eb817d43cc.bspapp.com/)
## 开始使用
### template中使用
```
<aki-particles :particlestyle="particlestyle"></aki-particles>
```
### script中引用
导入插件
```
import akiparticles from '../../uni_modules/aki-particles/components/aki-particles/aki-particles.vue'//导入组件

```
组件声明
```
components:{"aki-particles":akiparticles}

```
配置参数
```
particlestyle:{
	"style":"akira",
	"zindex":-1,
	"bgcolor":"#000022"
},
```
以上内容提供了几个简单的配置，
#### style
我除了提供了`akira`这个我自己用的样式，也把particles.js的几个官方样式引入了，
通过定义`style`的值，有`akira`，`default`，`bubble`，`nasa`，`nyancat`，`snow`几个样式可以选择；
#### zindex
`zindex`就如同字面意思，是设置粒子背景组件的层级，默认是-1，会被页面上的其他组件遮挡，导致点击和滑过效果无法呈现，可以同步设置页面其他组件层级，让鼠标事件可用；
#### bgcolor
`bgcolor`是背景颜色。
#### 自定义
如果想自己设计效果，可以修改`static/aki-particles`目录下和`style`对应的json文件，也可以复制一份，文件名中间的`snow`之类替换为你自己的，然后在`style`中设置你文件名关键字就可以了。
### 在UNIAPP默认模板中体验
index.vue中
`.content`需要注释掉
```
// align-items: center;
```
`.logo`、`.text-area`分别添加
```
z-index: 2;
```
`"zindex"`值改为:`1`