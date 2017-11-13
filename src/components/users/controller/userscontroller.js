import axios from 'axios'
import { globalConst } from '@/config/global.js'
import entrepreneurscontroller from '@/components/entrepreneurs/controller/entrepreneurscontroller.js'

export default {
  // Obtener categoria especifica según id.
  // Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
  // Return: Obtiene objeto de la categoría específica seleccionada en la vista "ListCategories"
  // =======================================================================================
  getUser (context) {
    axios.get(globalConst().localUrl + 'usuario/5/') // Atento aqui !! reemplazar 5 por variable de sessión !!
    .then(response => {
      context.usr = response.data.data
    }).catch(errors => {
      console.log(errors)
    })
  },
  setState (id, state, context) {
    console.log(id)
    axios.put(
      globalConst().localUrl + 'usuario/' + id + '/',
      {
        FLAG_VIGENTE: state
      }
    ).then(response => {
      console.log(response.data)
      entrepreneurscontroller.listEntrepreneurs(context)
      // Redireccionar a la pantalla de inicio
      location.href = '/administracion/emprendedores#'
    }).catch(errors => {
      console.log(errors)
    })
  },

  DeshabilitarCuenta (id, state, context) {
    axios.put(
      globalConst().localUrl + 'usuario/' + id + '/',
      {
        FLAG_VIGENTE: false
      }
    ).then(response => {
      axios.post(
        globalConst().localUrl + 'deshabilitacion_cuenta/', {
          IDEN_USUARIO: id,
          IDEN_MOTIVO_DESHABILITACION: context.inhab.reason,
          DESC_COMENTARIO: context.inhab.comentario
        }
      ).then(response => {
        alert('Se ha deshabilitado su cuenta.')
        location.href = '/login'
      })
      console.log(response.data)
      // actualizar datos.
      this.listEntrepreneurs(context)
    }).catch(errors => {
      console.log(errors)
    })
  },
 /*  DeshabilitarCuenta (id, state, context) {
    axios.put(
      globalConst().localUrl + 'persona/' + id + '/',
      {
        FLAG_VIGENTE: false
      }
    ).then(response => {
     axios.put(
        globalConst().localUrl + 'deshabilitaciones_cuentas/' + id + '/',
        {
          IDEN_USUARIO: context.client.IDEN_USUARIO,
          IDEN_MOTIVO_DESHABILITACION: context.inhab.motivo,
          DESC_COMENTARIO: context.inhab.comentario
        }
      console.log()
    }).catch(errors => {
      console.log(errors)
    })
  },
*/
  Login (context) {
    context.usr.$session.start()
    context.usr.$session.set('id', context.usr.username)
    axios.post(
      globalConst().localUrl + 'auth/',
      {
        email: context.usr.username,
        password: context.usr.password
      }
    ).then(response => {
      console.log(response.data)
    }).then(response => {
      context.usr = {} // Limpiar campos
      console.log(response.data)
    }).catch(errors => {
      console.log(errors)
    })
  },

  Logout () {
    this.$session.destroy()
  }
}
