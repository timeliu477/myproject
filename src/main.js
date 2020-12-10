import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载element组件库
import ElementUI from 'element-ui'

// 加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 全局注册 Element 组件库  必须写在所有的import后面 以为规定import中间不能有任何东西必须在顶部
Vue.use(ElementUI)

Vue.config.productionTip = false

// 创建一个vue实例
// 把router配置到根实例中
// 通过render发放把App根组件渲染到 #app入口节点
new Vue({
  router,
  store,
  render: h => h(App)
  // el: #app 就等价于 $mount('#app')
}).$mount('#app')
