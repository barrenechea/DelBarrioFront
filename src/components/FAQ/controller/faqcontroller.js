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
    // error = "";
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
    context.error = false
    if (this.validate(context.f)) {
      axios.post(
        globalConst().localUrl + 'faq/',
        {
          NOMB_FAQ: context.f.NOMB_FAQ,
          DESC_FAQ: context.f.DESC_FAQ
        }
      ).then(response => {
        context.f = {}
        context.error = response.data.error
      }).catch(errors => {
        console.log(errors)
        context.error = true
      })
    }
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
    if (this.validate(context)) {
      axios.put(
        globalConst().localUrl + 'faq/' + context.f.IDEN_FAQ + '/',
        {
          NOMB_FAQ: context.f.NOMB_FAQ,
          DESC_FAQ: context.f.DESC_FAQ
        }
      ).then(response => {
        console.log(response.data)
      }).catch(errors => {
        context.error = true
        console.log(errors)
      })
    } else {
      context.error = true
      return false
    }
  },
  deleteFaq (id, context) {
    axios.delete(
      globalConst().localUrl + 'faq/' + id + '/'
    ).then(response => {
      this.listFaqs(context)
    }).catch(errors => {
      console.log(errors)
    })
  },
  validate (f) {
    if (f.NOMB_FAQ == null) {
      return false
    }
    if (f.context.DESC_FAQ == null) {
      return false
    } else {
      return true
    }
  }
}
