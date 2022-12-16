<template>
  <div id="app">
    <header>
      <headerVue />
    </header>
    <nav>
        <PostVue />
    </nav>
    
  </div>
</template>

<script lang="ts">
import PostVue from './views/Post.vue';
import headerVue from './views/header.vue';
export default{
  name: "app",
  components:{
    PostVue,
    headerVue
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
