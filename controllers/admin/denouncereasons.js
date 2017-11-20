import axios from 'axios'
import { CFG } from '~/controllers/_helpers'

// Obtener todas las categorías de la api.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: lista todas las categorías.
// =======================================================================================
function GETAll (context) {
  return axios.get(CFG.apiUrl + 'motivo_denuncia')
    .then(response => {
      return {
        denouncereasons: response.data.data
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
  console.log(context.denouncereason)
  axios.post(
    CFG.apiUrl + 'motivo_denuncia',
    {
      NOMB_MOTIVO_DENUNCIA: context.denouncereason.NOMB_MOTIVO_DENUNCIA
    }
  ).then(response => {
    context.denouncereason = {}
    context.message = 'Agregado exitosamente!'
  }).catch(errors => {
    context.message = errors.response.data.data.message ? errors.response.data.data.message : 'Error inesperado'
  })
}

// comentarios
function setState (denouncereason) {
  axios.put(
    CFG.apiUrl + 'motivo_denuncia/' + denouncereason.IDEN_MOTIVO_DENUNCIA,
    {
      FLAG_VIGENTE: !denouncereason.FLAG_VIGENTE
    }
  ).then(response => {
    denouncereason.FLAG_VIGENTE = !denouncereason.FLAG_VIGENTE
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
