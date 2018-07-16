import axios from 'axios'
import config from './config'

const service = axios.create(config)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    if (res.code === 0) return res.data
    if (res.code < 0) return Promise.reject(res.msg)
  },
  error => {
    return Promise.reject({
      code: 40000,
      message: error
    })
  }
)

export default service
