import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getEntrepreneur (context) {
    axios.get(globalConst().localUrl + 'emprendedor/' + context.$route.params.id + '/')
    .then(response => {
      context.emp = response.data.data
      context.emp.EMAIL_USUARIO = response.data.data.usuario.EMAIL_USUARIO
    }).catch(errors => {
      console.log(errors)
    })
  },
  getOwnEntrepreneur (context) {
    let token = sessionStorage.getItem('id_token')
    console.log('JWT ' + token)
    axios.get(
      globalConst().localUrl + 'private/usuario/',
      {
        headers: { Authorization: 'JWT ' + token }
      }
    ).then(responseid => {
      context.emp = responseid.data.data.IDEN_EMPRENDEDOR
      context.emp.EMAIL_USUARIO = responseid.data.data.EMAIL_USUARIO
  //    context.usuario = element.usuario
      context.auth.email = responseid.data.data.EMAIL_USUARIO
      context.usuario.token = token

      console.log('idusuario' + responseid.data)
    })
    .catch(errors => {
      console.log(errors)
    })
  },
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
      console.log('emprendedores --> ' + context.entrepreneurs.IDEN_EMPRENDEDOR)
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
    context.error.exclusivo = ''
    if (this.validar(context) && !context.errors.any()) {
      var slice2 = context.emp.RUT_USUARIO.slice(0, -1) // slice2 queda el rut sin el último caracter
      var dv = context.emp.RUT_USUARIO.slice(-1) // dv queda con el último caracter
      dv = dv.toUpperCase() // DV a mayuscula en caso de ser letra
      var nmrorut = slice2.replace('.', '') // elimina los puntos de slice2
      nmrorut = nmrorut.replace('.', '')    // elimina los puntos de slice2
      nmrorut = nmrorut.replace('-', '')    // elimina el guión de lo de arriba
      nmrorut = parseInt(nmrorut)
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
            DESC_EMPRENDEDOR: context.emp.desc_empresa,
            DESC_CLAVE_MUNICIPALIDAD: context.emp.clave,
            DESC_NOMBRE_FANTASIA: context.emp.nombre_fantasia,
            DESC_NOMBRE_EMPRESA: context.emp.nombre_empresa
          }
          )
      }).then(response => {
        context.emp = {} // Limpiar campos
        context.error.exclusivo = 'Se ha ingresado un nuevo emprendedor'
        console.log(response.data)
      }).catch(errors => {
        console.log(errors)
      })
    } else {
      context.error.exclusivo = 'Formulario incompleto. Favor revisar los datos ingresados'
      context.emp = context.emp
      context.error = context.error
      console.log(context.error)
    }
  },
  // Función de validación
  validar (context) {
    var cantErrores = 0
    var validacion = ValidaRut(context.emp.RUT_USUARIO)
    if (!validacion) {
      cantErrores++
      context.error.rut = 'El rut no es válido'
    } else {
      context.error.rut = ''
    }
    if (cantErrores === 0) {
      return true
    } else {
      return false
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
    // ============================s===========================================================
  updateEntrepreneur (context) {
    if (!context.errors.any()) {
      context.emp.usuario.EMAIL_USUARIO = context.emp.EMAIL_USUARIO
      axios.put(
        globalConst().localUrl + 'usuario/' + context.emp.IDEN_USUARIO + '/',
        {
          // --------------------
          // LLENAR TABLA USUARIOS v
          // IDEN_ROL: 2,              // identificador 2, correspondiente al ROL Emprendedor
          EMAIL_USUARIO: context.emp.usuario.EMAIL_USUARIO,
          DESC_PASSWORD: context.emp.DESC_CLAVE_MUNICIPALIDAD
          // FLAG_VIGENTE: Se setea automatico en true
          // LLENAR TABLA USUARIOS ^
        }
          ).then(response => {
            axios.put(
              globalConst().localUrl + 'emprendedor/' + context.emp.IDEN_EMPRENDEDOR + '/',
              {
              //  IDEN_USUARIO: response.data.data.IDEN_USUARIO,
                DESC_EMPRENDEDOR: context.emp.DESC_EMPRENDEDOR,
                DESC_CLAVE_MUNICIPALIDAD: context.emp.DESC_CLAVE_MUNICIPALIDAD,
                DESC_NOMBRE_FANTASIA: context.emp.DESC_NOMBRE_FANTASIA,
                DESC_NOMBRE_EMPRESA: context.emp.DESC_NOMBRE_EMPRESA
              }
          )
          }).then(response => {
            context.error.exclusivo = 'Se han actualizado los datos del emprendedor'
            console.log(response.data)
          }).catch(errors => {
            console.log(errors)
          })
    } else {
      context.error.exclusivo = 'Formulario incompleto. Favor revisar los datos ingresados'
      context.emp = context.emp
      console.log(context.error)
    }
  }
}

function ValidaRut (Objeto) {
  if (Objeto != null) {
    var tmpstr = ''
    var intlargo = Objeto
    if (intlargo.length > 0) {
      var crut = Objeto
      var largo = crut.length
      if (largo < 2) {
        return false
      }
      for (var i = 0; i < crut.length; i++) {
        if (crut.charAt(i) !== ' ' && crut.charAt(i) !== '.' && crut.charAt(i) !== '-') {
          tmpstr = tmpstr + crut.charAt(i)
        }
      }
      var rut = tmpstr
      crut = tmpstr
      largo = crut.length
      if (largo > 2) {
        rut = crut.substring(0, largo - 1)
      } else {
        rut = crut.charAt(0)
      }
      var dv = crut.charAt(largo - 1)
      if (rut === null || dv === null) {
        return 0
      }
      var dvr = '0'
      var suma = 0
      var mul = 2
      for (i = rut.length - 1; i >= 0; i--) {
        suma = suma + rut.charAt(i) * mul
        if (mul === 7) {
          mul = 2
        } else {
          mul++
        }
      }
      var res = suma % 11
      if (res === 1) {
        dvr = 'k'
      } else {
        if (res === 0) {
          dvr = '0'
        } else {
          var dvi = 11 - res
          dvr = dvi + ''
        }
      }
      if (dvr !== dv.toLowerCase()) {
        return false
      }
      return true
    }
  }
}
