import Vue from 'vue'
import VueRouter from 'vue-router'

import Start from '@/views/StartPage'
import Posts from '@/views/PostsPage'
import NewPost from '@/views/newPostPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
