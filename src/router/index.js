import Vue from 'vue'
import Router from 'vue-router'
import components from '@/config/component-imports.js'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

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
        // CATEGORIES
        {
          path: '/administracion/categorias',
          name: 'ListCategories',
          component: components.ListCategories
        },
        {
          path: '/administracion/nueva-categoria',
          name: 'NewCategory',
          component: components.NewCategory
        },
        {
          path: '/administracion/editar-categoria/:id',
          name: 'EditCategory',
          component: components.EditCategory,
          category: true
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
        },
        {
          // DEMO - Login
          path: '/login',
          name: 'Login',
          component: components.Login
        }
      ]
    }
  ]
})
