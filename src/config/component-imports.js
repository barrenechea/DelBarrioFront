// DEMO - Main
import Layout from '@/components/demo-main/Layout'

// DEMO - Posts
import Posts from '@/components/demo-posts/Posts'
import NewPost from '@/components/demo-posts/NewPost'
import EditPost from '@/components/demo-posts/EditPost'

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

// ADMINISTRATION - FIELDS
import ListFields from '@/components/fields/ListFields'
import NewField from '@/components/fields/NewField'
import EditField from '@/components/fields/EditField'

// ADMINISTRATION - CATEGORIES
import ListCategories from '@/components/categories/listCategories'
import NewCategory from '@/components/categories/newCategory'
import EditCategory from '@/components/categories/editCategory'

// Main components
import Login from '@/components/main/Login'

export default {

  // DEMO - Main
  Layout,

  // DEMO - Posts
  Posts,
  NewPost,
  EditPost,

  // Publicaciones
  NewPublication,

  // Personas!

  // Clientes
  NewClient,
  EditClient,

  // Administracion - Categorías
  ListCategories,
  NewCategory,
  EditCategory,

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

  // ADMINSITRATION - FIELDS
  ListFields,
  NewField,
  EditField,

  // Main
  Login
}
