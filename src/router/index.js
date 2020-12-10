import Vue from 'vue'
import VueRouter from 'vue-router'

// 在vueCLI创建的项目中
// @是 src 目录路径的别名
// 它不受当前文件路径的影响
// @后面要有/
// 建议：如果加载的资源在同一资源路径下，正常写
//       如果需要进行父级路径查找的建议使用@
import Login from '@/views/login'

Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
