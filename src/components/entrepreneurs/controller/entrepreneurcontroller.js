import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listEntrepreneurs (context) {
    // error = "";
    axios.get(globalConst().localUrl + 'emprendedor/')
    .then(response => {
      context.entrepreneurs = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
// Enviar POST request a la fuente. Se utilizó placeholder.
  // Param.:       context -> Contexto de la vista .vue, contiene los objetos instanciados en
  //               "data".
  // Return:       Retorna los datos del POST response por consola js.
  // Constraints:  post {
  //                      title: string (req | len < 255) -- ignorar
  //                      body:  string (req | len < 255) -- ignorar
  //                    }
  // =======================================================================================
  addEntrepreneur (context) {
    var slice2 = context.client.rut.slice(0, -1) // slice2 queda el rut sin el último caracter
    var dv = context.client.rut.slice(-1) // dv queda con el último caracter
    dv = dv.toUpperCase() // DV a mayuscula en caso de ser letra
    var nmrorut = slice2.replace('.', '') // elimina los puntos de slice2
    nmrorut = nmrorut.replace('.', '')    // elimina los puntos de slice2
    nmrorut = nmrorut.replace('-', '')    // elimina el guión de lo de arriba
    axios.post(
      globalConst().localUrl + 'usuario/',
      {
        // --------------------
        // LLENAR TABLA USUARIOS v
        IDEN_ROL: 2,              // identificador 2, correspondiente al ROL Emprendedor
        RUT_USUARIO: nmrorut,           // context.cliente.rut (Falta función para separar el rut)
        DV_USUARIO: dv,            // Falta funcion para separar DV del RUT
        EMAIL_USUARIO: context.emp.email,
        DESC_PASSWORD: context.emp.clave
        // FLAG_VIGENTE: Se setea automatico en true
        // LLENAR TABLA USUARIOS ^
      }
    ).then(response => {
      axios.post(
        globalConst().localUrl + 'emprendedor/',
        {
          IDEN_USUARIO: response.data.data.IDEN_USUARIO,
          DESC_EMPRENDEDOR: context.emp.nombres + ' ' + context.emp.apellidos,
          DESC_CLAVE_MUNICIPALIDAD: context.clave,
          DESC_NOMBRE_FANTASIA: context.emp.nom_fantasia,
          DESC_NOMBRE_EMPRESA: context.emp.nom_empresa
        }
        )
    }).then(response => {
      context.emp = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
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
  updateEntrepreneur (context) {
    axios.put(
      globalConst().localUrl + 'usuario/' + context.emp.IDEN_USUARIO + '/',
      {
        post: context.post
      }
    ).then(response => {
      axios.put(
        globalConst().localUrl + 'emprendedor/' + context.emp.IDEN_EMPRENDEDOR + '/',
        {
          post: context.post
        }
      )
    }).then(response => {
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  }
}
