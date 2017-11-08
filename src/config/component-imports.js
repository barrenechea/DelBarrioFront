// DEMO - Main
import Layout from '@/components/demo-main/Layout'

// DEMO - Posts
import Posts from '@/components/demo-posts/Posts'
import NewPost from '@/components/demo-posts/NewPost'
import EditPost from '@/components/demo-posts/EditPost'

// ADMINISTRATION - CATEGORIES
import ListCategories from '@/components/categories/listCategories'
import NewCategory from '@/components/categories/newCategory'
import EditCategory from '@/components/categories/editCategory'

// ADMINISTRATION - FIELDS
import ListFields from '@/components/fields/ListFields'
import NewField from '@/components/fields/NewField'
import EditField from '@/components/fields/EditField'

// ADMINISTRATION - FAQS
import ListFaq from '@/components/FAQ/ListFaq'
import NewFaq from '@/components/FAQ/NewFaq'
import EditFaq from '@/components/FAQ/EditFaq'

// ADMINISTRATION - TERMS AND CONDITIONS
import TAC from '@/components/terms-and-conditions/terms-conditions'

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

  // ADMINISTRATION - TERMS AND CONDITIONS
  TAC,
  // DEMO - Main
  Layout,

  // DEMO - Posts
  Posts,
  NewPost,
  EditPost,

  // Main
  Login
}
