import axios from 'axios'
import Toast from 'muse-ui-toast'
import config from './config'

const service = axios.create(config)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      if (res.data.code === 0) return res.data.data
      Toast.warning({
        message: res.data.msg,
        position: 'top'
      })
      return Promise.reject(res.data.msg)
    }
    return res
  },
  error => {
    Toast.error({
      message: error.message,
      position: 'top'
    })
    return Promise.reject(error.message)
  }
)

export default service
