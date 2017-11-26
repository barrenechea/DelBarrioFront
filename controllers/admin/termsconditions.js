// Obtener categoría especifica según id.
// Param.: context -> Contexto de la vista .vue, contiene los objetos instanciados en "data".
// Return: Promise
// =======================================================================================
function saveTermsConditions (context, file) {
  const formData = new FormData()
  formData.append('file', file, file)
  return context.$axios.$post('private/terminos_condiciones/', formData)
    .then(res => {
      console.log(res)
    }).catch(errors => {
      console.log(errors)
    })
}

export default {
  saveTermsConditions
}
