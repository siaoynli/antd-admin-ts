/*
 * @Author: lixiaoyun
 * @Company: http://hangzhou.com.cn
 * @Github: http://github.com/siaoynli
 * @Date: 2020-04-02 14:56:58
 * @Description:
 */

import axios from 'axios'
import { message } from 'antd'

const http = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

// http request 拦截器
http.interceptors.request.use(
  config => {
    console.log('请求:')
    const token = sessionStorage.getItem('token')
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
http.interceptors.response.use(
  response => {
    console.log('响应:')
    //拦截响应，做统一处理
    if (response.data.state === 0) {
      message.error(response.data.message)
    }
    if (response.data.state === 1) {
      if (response.data.message) {
        message.success(response.data.message)
      }
    }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    console.log(error.response)
    if (error.response.data) {
      message.error(error.response.data.message)
    } else {
      message.error('接口出现错误')
    }
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
  }
)

export default http
