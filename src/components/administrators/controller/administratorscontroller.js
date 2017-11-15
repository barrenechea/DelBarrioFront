import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getAdmin (context) {
    axios.get(globalConst().localUrl + 'usuario/' + context.$route.params.id + '/')
    .then(response => {
      context.adm = response.data.data
      context.adm.rut = response.data.data.RUT_USUARIO + '-' + response.data.data.DV_USUARIO
      console.log(context.adm)
    }).catch(errors => {
      console.log(errors)
    })
  },
  // Obtener posts de la fuente. En este caso se utilizó placeholder.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: llena con los datos obtenidos de la ruta ingresada el objeto "posts" del contexto
  //         ingresado como parámetro.
  // =======================================================================================
  listsAdmin (context) {
    // error = "";
    axios.get(globalConst().localUrl + 'usuario/')
    .then(response => {
      context.administrators = response.data.data
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
  addAdmin (context) {
    context.error.exclusivo = ''
    if (this.validar(context) && !context.errors.any()) {
      var slice2 = context.adm.RUT_USUARIO.slice(0, -1) // slice2 queda el rut sin el último caracter
      var dv = context.adm.RUT_USUARIO.slice(-1) // dv queda con el último caracter
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
          IDEN_ROL: 3,              // identificador 2, correspondiente al ROL ADMIN
          RUT_USUARIO: nmrorut,           // context.cliente.rut (Falta función para separar el rut)
          DV_USUARIO: dv,            // Falta funcion para separar DV del RUT
          EMAIL_USUARIO: context.adm.EMAIL_USUARIO,
          DESC_PASSWORD: context.adm.clave
          // FLAG_VIGENTE: Se setea automatico en true
          // LLENAR TABLA USUARIOS ^
        }
      ).then(response => {
        context.emp = {} // Limpiar campos
        context.error.exclusivo = 'Se ha ingresado un nuevo administrador'
        location.href = ('/administracion/administradores')
      }).catch(errors => {
        console.log(errors)
      })
    } else {
      context.error.exclusivo = 'Formulario incompleto. Favor revisar los datos ingresados'
      context.adm = context.adm
      context.error = context.error
      console.log('aerr--->' + context.error.data.data.EMAIL_USUARIO)
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
  updateAdmin (context) {
    context.error.exclusivo = ''
    if (this.validar(context) && !context.errors.any()) {
      var slice2 = context.adm.rut.slice(0, -1) // slice2 queda el rut sin el último caracter
      var dv = context.adm.rut.slice(-1) // dv queda con el último caracter
      dv = dv.toUpperCase() // DV a mayuscula en caso de ser letra
      var nmrorut = slice2.replace('.', '') // elimina los puntos de slice2
      nmrorut = nmrorut.replace('.', '')    // elimina los puntos de slice2
      nmrorut = nmrorut.replace('-', '')    // elimina el guión de lo de arriba
      nmrorut = parseInt(nmrorut)

      axios.put(
        globalConst().localUrl + 'usuario/' + context.adm.IDEN_USUARIO + '/',
        {
          // --------------------
          // LLENAR TABLA USUARIOS v
          // IDEN_ROL: 3,              // identificador 2, correspondiente al ROL Emprendedor
          RUT_USUARIO: nmrorut,
          DV_USUARIO: dv,
          EMAIL_USUARIO: context.adm.EMAIL_USUARIO,
          DESC_PASSWORD: context.adm.clave
          // FLAG_VIGENTE: Se setea automatico en true
          // LLENAR TABLA USUARIOS ^
        }
          ).then(response => {
            context.error.exclusivo = 'Se han actualizado los datos del administrador'
            alert(context.error.exclusivo)
            location.href = '/administracion/administradores'
            console.log(response.data)
          }).catch(errors => {
            console.log(errors)
          })
    } else {
      context.error.exclusivo = 'Formulario incompleto. Favor revisar los datos ingresados'
      context.emp = context.adm
      console.log(context.error)
    }
  },
    // Función de validación
  validar (context) {
    var cantErrores = 0
    var validacion = ValidaRut(context.adm.rut)
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
