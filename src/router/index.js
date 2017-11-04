import Vue from 'vue'
import Router from 'vue-router'
import components from '@/config/component-imports.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: components.Layout,
      /* beforeEnter: (to, from, next) => {
        if (!sessionStorage.getItem('user')) {
          next('/demo-login')
        } else {
          next()
        }
      }, */
      children: [
        // DEMO - POSTS
        {
          path: '',
          name: 'Categories',
          component: components.Categories
        },
        {
          path: '/demo-posts-new',
          name: 'Demo-NewPost',
          component: components.NewPost
        },
        {
          path: '/demo-posts-edit',
          name: 'Demo-EditPost',
          component: components.EditPost
        }
      ]
    },
    {
      // DEMO - Login
      path: '/demo-login',
      name: 'Demo-Login',
      component: components.Login
    }
  ]
})
