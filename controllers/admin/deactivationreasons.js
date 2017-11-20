import axios from 'axios'
import { CFG } from '~/controllers/_helpers'

// Obtener todas las categorías de la api.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: lista todas las categorías.
// =======================================================================================
function GETAll (context) {
  return axios.get(CFG.apiUrl + 'motivo_deshabilitacion')
    .then(response => {
      return {
        deactivationreasons: response.data.data
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
    CFG.apiUrl + 'motivo_deshabilitacion',
    {
      NOMB_MOTIVO_DESHABILITACION: context.deactivationreason.NOMB_MOTIVO_DESHABILITACION
    }
  ).then(response => {
    context.deactivationreason = {}
    context.message = 'Agregado exitosamente!'
  }).catch(errors => {
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

// comentarios
function setState (deactivationreason) {
  axios.put(
    CFG.apiUrl + 'motivo_deshabilitacion/' + deactivationreason.IDEN_MOTIVO_DESHABILITACION,
    {
      FLAG_VIGENTE: !deactivationreason.FLAG_VIGENTE
    }
  ).then(response => {
    deactivationreason.FLAG_VIGENTE = !deactivationreason.FLAG_VIGENTE
    console.log(response.data)
  }).catch(errors => {
    console.log(errors)
  })
}

export default {
  GETAll,
  POST,
  setState
}
