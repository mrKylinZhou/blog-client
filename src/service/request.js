import axios from 'axios'
import Toast from 'muse-ui-toast'
import config from './config'

const service = axios.create(config)


// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    if (res.code === 0) return res.data
    if (res.code < 0) {
      Toast.warning({
        message: res.msg,
        position: top
      })
      return Promise.reject(res.msg)
    }
  },
  error => {
    Toast.warning({
      message: error,
      position: top
    })
    return Promise.reject({
      code: 40000,
      message: error
    })
  }
)

export default service
