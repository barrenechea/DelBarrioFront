import axios from 'axios'
import { globalConst } from '@/config/global.js'

export default {
  addPostImage (context, id, blob) {
    context.error = false
    const formData = new FormData()
    formData.append('gallery', blob, 'image.jpg')
    formData.append('IDEN_PUBLICACION', id)
    axios.post(
      globalConst().localUrl + 'imagen/',
      formData
    ).then(response => {
      context.post = { FLAG_CONTENIDO_ADULTO: false } // Limpiar campos
      context.error = response.data.error
    }).catch(errors => {
      context.error = true
    })
  }
}
