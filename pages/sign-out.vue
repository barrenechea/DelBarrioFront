<template>
</template>

<script>
import controller from '~/controllers/auth'

export default {
  middleware: 'authenticated',
  mounted () {
    controller.unsetToken()
    this.$router.push({ path: '/' })
  }
}
</script>
