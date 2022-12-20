<template>
   <div id="userpost">
      <div class="container" v-for="(item, index) in posts">
         <b-card class="title" v-bind:title="item.title" sub-title="This is post 's content" style="
          color: aliceblue;
          font-family: Times New Roman, Times, serif;
          font-size: 20px;
          background-image: url('https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/05/facebook-freepik-1652177112.jpg');
        ">
            <b-card-text v-for="(content, index) in item.content">
               {{ content }}
            </b-card-text>
            <a href="#" class="card-link">Go to Post</a>
         </b-card>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
   name: "userpost",
   data() {
      return {
         posts: undefined
      };
   },
   mounted() {
      localStorage.setItem('userpost', JSON.stringify('63998346febdad0994957719'))
      var user = JSON.parse(localStorage.getItem('userpost'));
      console.log(JSON.parse(localStorage.getItem('userpost')));
      Vue.axios
         .get("http://localhost:3001/post/user/" + user)
         .then((res) => {
            this.posts = res.data;
            console.warn(res.data);
         });
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
