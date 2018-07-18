export default {
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  // XSRF 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
}
