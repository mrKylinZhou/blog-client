export default {
  baseURL: 'http://localhost:3333/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  // XSRF 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN'
}
