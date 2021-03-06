
/* 
能发ajax任意请求的函数模块
封装axios, 函数的返回值promise
1. 将post请求参数转换为urlencoded(默认json格式)  ===> 使用请求拦截器
2. 请求成功的结果不是response, 而是response.data ===> 使用响应拦截器(成功回调)
3. 统一处理请求错误  ===> 使用响应拦截器(失败回调)
*/

import axios from "axios"
import qs from 'qs'

// 指定基础url: 后台应用的url
axios.defaults.baseURL = '/api'

// 使用请求拦截器
axios.interceptors.request.use((config) => {

  // 1. 将post请求参数转换为urlencoded(默认json格式)
  let data = config.data
  if (data && data instanceof Object) {
    config.data = qs.stringify(data)
  }

  return config
})

// 使用响应拦截器
axios.interceptors.response.use(
  // 2. 请求成功的结果不是response, 而是response.data
  response => {
    return response.data
  },
  error => {
     console.log(error.message)
    return new Promise(() => {}) // 中断promise链
  }
)

// 默认暴露axios
export default axios 