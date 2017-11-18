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
        // FAQ
        {
          path: '/administracion/preguntas-frecuentes/listado',
          name: 'ListFaq',
          component: components.ListFaq
        },
        {
          path: '/administracion/preguntas-frecuentes',
          name: 'ClientViewFaq',
          component: components.ViewFaq
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
        // PUBLICACIONES
        {
          path: '/publicaciones/nueva-test/',
          name: 'NewPostDev',
          component: components.NewPostDev // PRUEBA MULTIPLES IMAGENES
        },
        {
          path: '/publicaciones/',
          name: 'ClientViewPost',
          component: components.ClientViewPost
        },
        {
          path: '/publicaciones/:id',
          name: 'PostDetail',
          component: components.PostDetail,
          post: true
        },
        {
          path: '/publicaciones/editar/:id',
          name: 'EditPost',
          component: components.EditPost,
          p: true
        },
        // EMPRENDEDORES
        {
          path: '/emprendedor/actualizar-datos',
          name: 'EditOwnEntrepreneur',
          component: components.EditOwnEntrepreneur
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
