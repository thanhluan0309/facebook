<template>
   <div id="like">
      <div class="container" v-for="(item, index) in behaviors">
         <b-card class="title" v-bind:title="item.post.title" sub-title="This is post 's content" style="
          color: aliceblue;
          font-family: Times New Roman, Times, serif;
          font-size: 20px;
          background-image: url('https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/05/facebook-freepik-1652177112.jpg');
        ">
            <b-card-text v-for="(content, index) in item.post.content">
               {{ content }}
            </b-card-text>
            <a href="#" class="card-link">Go to Post</a>
         </b-card>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
export default {
   name: "like",
   data() {
      return {
         behaviors: undefined,
         user:'639beef7ec3662744cd4bbb4'
      };
   },
   mounted() {
      localStorage.setItem('user',JSON.stringify('639beef7ec3662744cd4bbb4'))
      var user =JSON.parse(localStorage.getItem('user'));
      console.log(JSON.parse(localStorage.getItem('user')));
      Vue.axios
         .get("http://localhost:3001/behavior/like/"+user)
         .then((res) => {
            this.behaviors = res.data;
            console.warn(res.data);
         });
   },
   watch: {  
      user: {
      handler() {
      localStorage.setItem('user',JSON.stringify('639beef7ec3662744cd4bbb4'))
    },
    deep: true
  }
   }
};
</script>

<style>
.container {
   border-style: solid;
   border-color: #090979;
   box-shadow: 5px 5px #090979;
   margin: 10px;
   margin-bottom: 20px;
}
</style>
