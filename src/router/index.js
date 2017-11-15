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
        // EMPRENDEDORES
        {
          path: '/emprendedor/actualizar-datos',
          name: 'EditOwnEntrepreneur',
          component: components.EditOwnEntrepreneur
        },

        // CATEGORIES
        {
          path: '/administracion/categorias',
          name: 'ListCategories',
          component: components.ListCategories
        },

        // Publicaciones
        {
          path: '/publicaciones/nueva',
          name: 'NewPublication',
          component: components.NewPublication
        },

        // Clientes (Personas)
        {
          path: '/clientes/nuevo',
          name: 'NewClient',
          component: components.NewClient
        },
        {
          path: '/clientes/actualizar-cuenta',
          name: 'EditClient',
          component: components.EditClient
        },
        {
          path: '/clientes/cambiar-contrasena',
          name: 'ChangePassword',
          component: components.ChangePassword
        },
        // Emprendedores
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
        },
        // Administradores
        {
          path: '/administracion/administradores/nuevo',
          name: 'NewAdmin',
          component: components.NewAdmin
        },
        {
          path: '/administracion/administradores/',
          name: 'ListAdmin',
          component: components.ListAdmin
        },
        {
          path: '/administracion/administradores/editar/:id',
          name: 'EditAdmin',
          component: components.EditAdmin,
          category: true
        },
        // FIELDS
        {
          path: '/administracion/rubros',
          name: 'ListFields',
          component: components.ListFields
        },
        {
          path: '/administracion/rubros/nuevo',
          name: 'NewField',
          component: components.NewField
        },
        {
          path: '/administracion/rubros/editar/:id',
          name: 'EditField',
          component: components.EditField,
          field: true
        }
      ]
    },
    {
      // DEMO - Login
      path: '/login',
      name: 'Login',
      component: components.Login
    }

  ]
})
