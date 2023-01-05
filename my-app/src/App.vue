<template>
  <div id="app">
    <!-- <nav>
         <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/test">test</router-link>
    </nav> -->
    <router-view />

  </div>
</template>

<script lang="ts">
import PostVue from './views/Post.vue';
import headerVue from './views/header.vue';
import UserLike from './views/UserLiked.vue';
import UserPost from './views/UserPost.vue';
export default {
  name: "app",
  components: {
    PostVue,
    headerVue,
    UserLike,
    UserPost
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(85, 85, 235, 0.9051995798319328) 31%, rgba(81, 139, 201, 1) 34%, rgba(124, 149, 236, 0.6222864145658263) 35%, rgba(0, 212, 255, 1) 100%);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
