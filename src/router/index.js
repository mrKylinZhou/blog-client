import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'

import Home from '../view/home/Index.vue'
import Articles from '../view/articlel-list/Index.vue'
import Article from '../view/article-detail/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      redirect: 'home',
      children: [
        {
          path: 'articles',
          name: 'Articles',
          component: Articles
        },
        {
          path: 'article/:name',
          name: 'Article',
          component: Article
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  ]
})
