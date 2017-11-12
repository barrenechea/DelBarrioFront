import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener todas las categorías de la api.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: lista todas las categorías.
  // =======================================================================================
  listReasons (context) {
    axios.get(globalConst().localUrl + 'motivo_denuncia/')
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
    context.error = false
    if (this.validate(context)) {
      axios.post(
        globalConst().localUrl + 'motivo_denuncia/',
        {
          NOMB_MOTIVO_DENUNCIA: context.reason.NOMB_MOTIVO_DENUNCIA
        }
      ).then(response => {
        context.reason = {}
        context.error = response.data.error
      }).catch(errors => {
        context.error = true
      })
    } else {
      context.error = true
      return false
    }
  },
  // comentarios
  setState (id, state, context) {
    axios.put(
      globalConst().localUrl + 'motivo_denuncia/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      console.log(response.data)
      this.listReasons(context)
    }).catch(errors => {
      console.log(errors)
    })
  },
  validate (context) {
    if (context.reason.NOMB_MOTIVO_DENUNCIA == null) {
      return false
    } else {
      return true
    }
  }
}
