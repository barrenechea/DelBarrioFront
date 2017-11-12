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
          path: '/administracion/categorias/nueva',
          name: 'NewCategory',
          component: components.NewCategory
        },
        {
          path: '/administracion/categorias/editar/:id',
          name: 'EditCategory',
          component: components.EditCategory,
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
        },
        // FAQ
        {
          path: '/administracion/preguntas-frecuentes',
          name: 'ListFaq',
          component: components.ListFaq
        },
        {
          path: '/administracion/preguntas-frecuentes/nueva',
          name: 'NewFaq',
          component: components.NewFaq
        },
        {
          path: '/administracion/preguntas-frecuentes/editar/:id',
          name: 'EditFaq',
          component: components.EditFaq,
          faq: true
        },
        // TERMS AND CONDITIONS
        {
          path: '/administracion/terminos-condiciones',
          name: 'NewTAC',
          component: components.TAC
        },
        // DEACTIVATION REASONS
        {
          path: '/administracion/razon-desactivacion',
          name: 'ListDeactivationReasons',
          component: components.ListDeactivationReasons
        },
        {
          path: '/administracion/razon-desactivacion/nuevo',
          name: 'NewDeactivationReason',
          component: components.NewDeactivationReason
        },
        // DENOUNCEMENT REASONS
        {
          path: '/administracion/razon-denuncia',
          name: 'ListDenouncementReasons',
          component: components.ListDenouncementReasons
        },
        {
          path: '/administracion/razon-denuncia/nuevo',
          name: 'NewDenouncementReason',
          component: components.NewDenouncementReason
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
