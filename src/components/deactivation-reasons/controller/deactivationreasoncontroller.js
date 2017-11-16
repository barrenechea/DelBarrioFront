import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las categorías.
  // =======================================================================================
  listReasons (context) {
    axios.get(globalConst().localUrl + 'motivo_deshabilitacion/')
    .then(response => {
      context.reasons = response.data.data
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
  addReason (context) {
    axios.post(
      globalConst().localUrl + 'motivo_deshabilitacion/',
      {
        NOMB_MOTIVO_DESHABILITACION: context.reason.NOMB_MOTIVO_DESHABILITACION
      }
    ).then(response => {
      context.reason = {}
      context.success = true
    }).catch(errors => {
      context.error = 'Error inesperado'
    })
  },
  // comentarios
  setState (id, state, context) {
    axios.put(
      globalConst().localUrl + 'motivo_deshabilitacion/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      this.listReasons(context)
    }).catch(errors => {
      console.log(errors)
    })
  },
  // comentarios
  validate (context) {
    if (context.reason.NOMB_MOTIVO_DESHABILITACION == null) {
      return false
    } else {
      return true
    }
  }
}
