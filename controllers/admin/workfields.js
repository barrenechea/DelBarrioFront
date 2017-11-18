import axios from 'axios'
import { CFG } from '~/controllers/_helpers'

// Obtener rubro especifico según id.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: llena los datos del campo nombre.
// =======================================================================================
function GET (id) {
  return axios.get(CFG.apiUrl + 'rubro/' + id)
    .then(res => {
      return {
        id: id,
        workfield: res.data.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Obtener listado de rubros.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: listado de rubros para mostrados en la tabla de listFields.
// =======================================================================================
function GETAll () {
  return axios.get(CFG.apiUrl + 'rubro')
    .then(response => {
      return {
        workfields: response.data.data
      }
    }).catch(errors => {
      console.log(errors)
    })
}

// Enviar POST request a la fuente.
// Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
//               "data".
// Constraints:  post { NOMB_RUBRO: string (required) }
// =======================================================================================
function POST (context) {
  axios.post(
    CFG.apiUrl + 'rubro',
    {
      NOMB_RUBRO: context.workfield.NOMB_RUBRO
    }
  ).then(response => {
    context.workfield = {}
    context.success = true
  }).catch(errors => {
    context.error = errors.data.data
  })
}

// Enviar PUT request a la fuente
// Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
//               "data".
// Constraints:  post { NOMB_CATEGORIA: string (required) }
// =======================================================================================
function PUT (context) {
  axios.put(
    CFG.apiUrl + 'rubro/' + context.id,
    {
      NOMB_RUBRO: context.workfield.NOMB_RUBRO
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

// comentarios
function setState (workfield) {
  axios.put(
    CFG.apiUrl + 'rubro/' + workfield.IDEN_RUBRO,
    {
      FLAG_VIGENTE: !workfield.FLAG_VIGENTE
    }
  ).then(response => {
    workfield.FLAG_VIGENTE = !workfield.FLAG_VIGENTE
    console.log(response.data)
  }).catch(errors => {
    console.log(errors)
  })
}

export default {
  GET,
  GETAll,
  POST,
  PUT,
  setState
}
