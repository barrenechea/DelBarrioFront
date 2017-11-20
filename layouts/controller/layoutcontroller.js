export default {
  logout () {
    sessionStorage.clear()
    location.reload()
  }
}
