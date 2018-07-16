import request from '../service/request'

export const GetArticles = async () => {
  return await request({
    url: '/articles',
    method: 'get'
  })
}

export const GetArticle = async name => {
  return await request({
    url: `/article/${name}`,
    method: 'get'
  })
}
