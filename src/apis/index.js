import request from '../service/request'

export const GetArticles = async () => {
  return await request({
    url: '/articles',
    method: 'get'
  }).then(res => res.data)
}

export const GetArticle = async name => {
  return await request({
    url: `/article/${name}`,
    method: 'get'
  }).then(res => res.data)
}
