<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

// import showBlogs from './components/showBlogs.vue';
// import addBlog from './components/addBlog.vue';
import header from './components/header.vue';

export default {
  components: {
    'app-header' : header
  }
}
</script>

<style lang="scss">

</style>
