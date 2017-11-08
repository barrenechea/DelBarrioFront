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
      console.log(errors)
    })
  },
  // Obtener listado de rubros.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: listado de rubros para mostrados en la tabla de listFields.
  // =======================================================================================
  listFields (context) {
    axios.get(globalConst().localUrl + 'rubro/')
    .then(response => {
      context.fields = response.data.data
      console.log('listfields')
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Enviar POST request a la fuente.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Constraints:  post { NOMB_RUBRO: string (required) }
  // =======================================================================================
  addField (context) {
    if (this.validate(context)) {
      console.log('validado')
      axios.post(
        globalConst().localUrl + 'rubro/',
        {
          NOMB_RUBRO: context.field.NOMB_RUBRO
        }
      ).then(response => {
        context.field = {}
        context.error = response.data.error
      }).catch(errors => {
        console.log(errors)
        context.error = true
      })
    } else {
      console.log('no validado')
      return false
    }
  },

  // Enviar PUT request a la fuente
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Constraints:  post { NOMB_CATEGORIA: string (required) }
  // =======================================================================================
  editField (context) {
    if (this.validate(context)) {
      axios.put(
        globalConst().localUrl + 'rubro/' + context.field.IDEN_RUBRO + '/',
        {
          NOMB_RUBRO: context.field.NOMB_RUBRO
        }
      ).then(response => {
        context.success = true
      }).catch(errors => {
        console.log(errors)
      })
    } else {
      return false
    }
  },
  // comentarios
  setState (id, state, context) {
    console.log(state)
    axios.put(
      globalConst().localUrl + 'rubro/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      console.log(response.data)
      // actualizar datos.
      this.listFields(context)
    }).catch(errors => {
      console.log(errors)
    })
  },
  validate (f) {
    if (f.field.NOMB_RUBRO == null) {
      return false
    } else {
      return true
    }
  }
}
