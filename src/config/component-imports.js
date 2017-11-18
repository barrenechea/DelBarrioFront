// DEMO - Main
import Layout from '@/components/navbar/Layout'

// ADMINISTRATION - FIELDS
import ListFields from '@/components/fields/ListFields'
import NewField from '@/components/fields/NewField'
import EditField from '@/components/fields/EditField'

// ADMINISTRATION - FAQS
import ListFaq from '@/components/FAQ/ListFaq'
import NewFaq from '@/components/FAQ/NewFaq'
import EditFaq from '@/components/FAQ/EditFaq'
import ViewFaq from '@/components/FAQ/ClientViewFaq'

// ADMINISTRATION - TERMS AND CONDITIONS
import TAC from '@/components/terms-and-conditions/terms-conditions'

// ADMINISTRATION - DEACTIVATION REASONS
import NewDeactivationReason from '@/components/deactivation-reasons/NewReason'
import ListDeactivationReasons from '@/components/deactivation-reasons/ListReasons'

// ADMINISTRATION - DENOUNCEMENT REASONS
import NewDenouncementReason from '@/components/denouncement-reasons/NewReason'
import ListDenouncementReasons from '@/components/denouncement-reasons/ListReasons'

// ENTREPENEURS - PUBLICATIONS
import NewPost from '@/components/posts-prueba/NewPost'
import NewPostDev from '@/components/posts/NewPost' // PRUEBAS ARRAY DE IMAGENES
import ClientViewPost from '@/components/posts-prueba/ClientViewPost'
import PostDetail from '@/components/posts-prueba/PostDetail'
import EditPost from '@/components/posts-prueba/EditPost'

// Administración - Administradores
import NewAdmin from '@/components/administrators/NewAdmin'
import ListAdmin from '@/components/administrators/ListAdmin'
import EditAdmin from '@/components/administrators/EditAdmin'

// Publicacion
import NewPublication from '@/components/publications/NewPublication'

// Emprendedor
import EditOwnEntrepreneur from '@/components/entrepreneurs/EditOwnEntrepreneur'

// Personas
import NewClient from '@/components/clients/NewClient'
import EditClient from '@/components/clients/EditClient'

// Administracion - Emprendedores
import NewEntrepreneur from '@/components/entrepreneurs/NewEntrepreneur'
import ListEntrepreneur from '@/components/entrepreneurs/ListEntrepreneur'
import EditEntrepreneur from '@/components/entrepreneurs/EditEntrepreneur'

// ADMINISTRATION - CATEGORIES
import ListCategories from '@/components/categories/listCategories'
import NewCategory from '@/components/categories/newCategory'
import EditCategory from '@/components/categories/editCategory'

// Main components
import Login from '@/components/main/Login'

export default {

  // ADMINSITRATION - CATEGORIES
  ListCategories,
  NewCategory,
  EditCategory,

  // ADMINSITRATION - FIELDS
  ListFields,
  NewField,
  EditField,

  // ADMINISTRATION - FAQ
  ListFaq,
  NewFaq,
  EditFaq,
  ViewFaq,

  // ADMINISTRATION - TERMS AND CONDITIONS
  TAC,

  // ADMINISTRATION - DEACTIVATION REASONS
  NewDeactivationReason,
  ListDeactivationReasons,

  // ADMINISTRATION - DENOUNCEMENT REASONS
  NewDenouncementReason,
  ListDenouncementReasons,

  // ENTREPENEUR - PUBLICATIONS
  NewPost,

  // Publicaciones
  NewPublication,

  // Personas!

  // Clientes
  NewClient,
  EditClient,

  // Administracion - Emprendedores
  NewEntrepreneur,
  ListEntrepreneur,
  EditEntrepreneur,

    // Administracion - Administradores
  NewAdmin,
  ListAdmin,
  EditAdmin,

  // Emprendedores
  EditOwnEntrepreneur,

  // Main
  ClientViewPost,
  PostDetail,
  EditPost,
  NewPostDev,

  // DEMO - Main - TODO: MODIFICAR LAS RUTAS
  Layout,
  Login
}
