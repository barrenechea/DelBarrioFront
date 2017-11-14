import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getFaq (context) {
    axios.get(globalConst().localUrl + 'faq/' + context.$route.params.id + '/')
    .then(response => {
      context.f = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las categorías.
  // =======================================================================================
  listFaqs (context) {
    axios.get(globalConst().localUrl + 'faq/')
    .then(response => {
      context.faqs = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Enviar POST request a la fuente.
  // Param.:       context -> Contiene los objetos instanciados en "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255)
  //                      body:  string (req | len < 255)
  //                    }
  // =======================================================================================
  addFaq (context) {
    axios.post(
      globalConst().localUrl + 'faq/',
      {
        NOMB_FAQ: context.f.NOMB_FAQ,
        DESC_FAQ: context.f.DESC_FAQ
      }
    ).then(response => {
      context.f = {}
      context.success = true
    }).catch(errors => {
      context.error = 'Error inesperado'
      // context.error = 'Error inesperado'
    })
  },

  // Enviar PUT request a la fuente. Se utilizó placeholder.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Return:       Retorna los datos del PUT response por consola js.
  // Constraints:  post {
  //                      title:  string (req | len < 255)
  //                      body:   string (req | len < 255)
  //                      userId: int (req | user-exists)
  //                      id:     int (req | post-exists)
  //                    }
  // =======================================================================================
  editFaq (context) {
    axios.put(
      globalConst().localUrl + 'faq/' + context.f.IDEN_FAQ + '/',
      {
        NOMB_FAQ: context.f.NOMB_FAQ,
        DESC_FAQ: context.f.DESC_FAQ
      }
    ).then(response => {
      context.success = true
    }).catch(errors => {
      context.error = 'Error inesperado'
    })
  },
  deleteFaq (id, context) {
    axios.delete(
      globalConst().localUrl + 'faq/' + id + '/'
    ).then(response => {
      this.listFaqs(context)
    }).catch(errors => {
      console.log(errors)
    })
  }
}
