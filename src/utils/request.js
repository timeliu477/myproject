
//  基于axios封装的请求模块

// 先npm i axios 安装

// 然后导入
import axios from 'axios'

// 创建一个axios实例，说白了就是复制了一个axios
// creat 是axios 的一个方法
// 我们通过这个实例去发送请求，把需要的配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://119.3.45.32:2303/api/' // 请求的基础路径
})

// 请求拦截器

// 响应拦截器

// 导出请求方法 暴露接口
export default request

// 谁使用就用import加载这个request
