// DEMO - Main
import Layout from '@/components/demo-main/Layout'

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

// ADMINISTRATION - DEACTIVATION REASONS
import NewDeactivationReason from '@/components/deactivation-reasons/NewReason'
import ListDeactivationReasons from '@/components/deactivation-reasons/ListReasons'

// ADMINISTRATION - DENOUNCEMENT REASONS
import NewDenouncementReason from '@/components/denouncement-reasons/NewReason'
import ListDenouncementReasons from '@/components/denouncement-reasons/ListReasons'

// ENTREPENEURS - PUBLICATIONS
import NewPublication from '@/components/publications/NewPublication'

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

  // ADMINISTRATION - DEACTIVATION REASONS
  NewDeactivationReason,
  ListDeactivationReasons,

  // ADMINISTRATION - DENOUNCEMENT REASONS
  NewDenouncementReason,
  ListDenouncementReasons,

  // ENTREPENEUR - PUBLICATIONS
  NewPublication,

  // DEMO - Main - TODO: MODIFICAR LAS RUTAS
  Layout,
  Login
}
