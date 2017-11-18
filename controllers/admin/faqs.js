import axios from 'axios'
import { CFG } from '~/controllers/_helpers'

// Obtener categoria especifica según id.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: Promise
// =======================================================================================
function GET (id) {
  return axios.get(CFG.apiUrl + 'faq/' + id)
    .then(res => {
      return {
        id: id,
        f: res.data.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Obtener todas las categorías de la api.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: Promise
// =======================================================================================
function GETAll () {
  return axios.get(CFG.apiUrl + 'faq')
    .then(response => {
      return {
        faqs: response.data.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Enviar POST request a la fuente.
// Param.:       context -> Contiene los objetos instanciados en "data".
// Return:       Retorna los datos del POST response por consola js.
// Constraints:  post {
//                      title: string (req | len < 255)
//                      body:  string (req | len < 255)
//                    }
// =======================================================================================
function POST (context) {
  axios.post(
    CFG.apiUrl + 'faq',
    {
      NOMB_FAQ: context.f.NOMB_FAQ,
      DESC_FAQ: context.f.DESC_FAQ
    }
  ).then(response => {
    context.f = {}
    context.success = true
  }).catch(errors => {
    context.error = 'Error inesperado'
    console.log(errors)
  })
}

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
function PUT (context) {
  axios.put(
    CFG.apiUrl + 'faq/' + context.id,
    {
      NOMB_FAQ: context.f.NOMB_FAQ,
      DESC_FAQ: context.f.DESC_FAQ
    }
  ).then(response => {
    context.success = true
    context.error = ''
  }).catch(errors => {
    context.success = false
    context.error = 'Error inesperado'
    console.log(errors)
  })
}

function DELETE (f, context) {
  axios.delete(
    CFG.apiUrl + 'faq/' + f.IDEN_FAQ
  ).then(response => {
    context.faqs = context.faqs.filter(item => item !== f)
  }).catch(errors => {
    console.log(errors)
  })
}

export default {
  GET,
  GETAll,
  POST,
  PUT,
  DELETE
}
