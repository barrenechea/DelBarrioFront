import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener rubro especifico según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena los datos del campo nombre.
  // =======================================================================================
  getField (context) {
    axios.get(globalConst().localUrl + 'rubro/' + context.$route.params.id + '/')
    .then(response => {
      context.field = response.data.data
    }).catch(errors => {
      context.error = errors.data.data
    })
  },
  // Obtener listado de rubros.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: listado de rubros para mostrados en la tabla de listFields.
  // =======================================================================================
  listFields (context) {
    axios.get(globalConst().localUrl + 'rubro/')
    .then(response => {
      context.workfields = response.data.data
    }).catch(errors => {
      context.error = errors.data.data
    })
  },
  // Enviar POST request a la fuente.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Constraints:  post { NOMB_RUBRO: string (required) }
  // =======================================================================================
  addField (context) {
    axios.post(
      globalConst().localUrl + 'rubro/',
      {
        NOMB_RUBRO: context.field.NOMB_RUBRO
      }
    ).then(response => {
      context.field = {}
      context.success = true
    }).catch(errors => {
      context.error = errors.data.data
    })
  },

  // Enviar PUT request a la fuente
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Constraints:  post { NOMB_CATEGORIA: string (required) }
  // =======================================================================================
  editField (context) {
    axios.put(
      globalConst().localUrl + 'rubro/' + context.field.IDEN_RUBRO + '/',
      {
        NOMB_RUBRO: context.field.NOMB_RUBRO
      }
    ).then(response => {
      context.success = true
    }).catch(errors => {
      context.error = errors.data.data
    })
  },
  // comentarios
  setState (id, state, context) {
    axios.put(
      globalConst().localUrl + 'rubro/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      this.listFields(context)
    }).catch(errors => {
      context.error = errors.data.data
    })
  }
}
