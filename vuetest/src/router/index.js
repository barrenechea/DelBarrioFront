import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/main/Blog'
import Login from '@/components/main/Login'
import Posts from '@/components/blog/Posts'
import NewPost from '@/components/blog/NewPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Blog',
      component: Blog,
      children: [
        {
          path: 'posts',
          name: 'Posts',
          component: Posts
        },
        {
          path: 'posts-new',
          name: 'New Post',
          component: NewPost
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
