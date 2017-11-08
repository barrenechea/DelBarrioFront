import Vue from 'vue'
import Router from 'vue-router'
import components from '@/config/component-imports.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.use(BootstrapVue)

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
          name: 'Demo-Posts',
          component: components.Posts
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
          path: '/publicaciones/nueva',
          name: 'NewPublication',
          component: components.NewPublication
        },
        {
          path: '/clientes/nuevo',
          name: 'NewClient',
          component: components.NewClient
        },
        {
          path: '/administracion/emprendedores/nuevo',
          name: 'NewEntrepreneur',
          component: components.NewEntrepreneur
        },
        {
          path: '/administracion/emprendedores/',
          name: 'ListEntrepreneur',
          component: components.ListEntrepreneur
        },
        {
          path: '/administracion/emprendedores/editar/:id',
          name: 'EditEntrepreneur',
          component: components.EditEntrepreneur,
          category: true
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
