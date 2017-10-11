<template>
  <div class="container with-header">
    <ul class="collection">
      <li class="collection-header"><h3>Posts</h3></li>
      <li class="colletion-item" v-for="post in posts">
        <strong style="text-transform: capitalize;">{{ post.title }}</strong><br/>
        {{ post.body }}
        <hr/>
      </li>
    </ul>
  </div>
</template>
<script>
  import postcontroller from '@/components/blog/controller/postcontroller.js'
  export default {
    name: 'posts',
    data () {
      return {
        posts: {}
      }
    },
    mounted () {
      postcontroller.listPosts(this)
    }
  }
</script>
<style></style>