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

// Main components
import Login from '@/components/main/Login'

export default {
  // ADMINSITRATION - CATEGORIES
  ListCategories,
  NewCategory,
  EditCategory,

  // DEMO - Main
  Layout,

  // DEMO - Posts
  Posts,
  NewPost,
  EditPost,

  // Main
  Login
}
