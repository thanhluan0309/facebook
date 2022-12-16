<template>
   <div id="post">
      <div v-for="(post, index) in posts" :key="index">
         <div id="user">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person"
               viewBox="0 0 16 16">
               <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
            <h2>{{ post.user }}</h2>
            <div id="post-title">
               {{ post.title }}
            </div>
            <div id="content" v-for="(content, index) in posts.content" :key="index">
               <h1>{{ content }}</h1>
            </div>
            <div id="status"> 
               <div id="emoji">
                  <b-link href="#foo">Like</b-link>
               </div>
               <div id="comment">
                  <b-link href="#foo">Comment</b-link>
               </div>
               <div id="share">
                  <b-link href="#foo">Share</b-link>
               </div>
            </div>
         
         </div>
         <div id="comment-section"></div>
            <b-input-group v-for="size in ['sm']" :key="size" :size="size" class="mb-3" prepend="Comment">
               <b-form-input></b-form-input>
               <b-input-group-append>
                  <b-button size="sm" text="Button" variant="success">Button</b-button>
               </b-input-group-append>
            </b-input-group>
            <h2>
               {{ post.comment }}
            </h2>
         </div>
         <hr />
   </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
   name: "posts",
   data() {
      return {
         // posts:[
         //    {
         //    user: 1 ,
         //    post_date: '19/02/2022',
         //    title: 'This is post title' ,
         //    content: 'https://play-lh.googleusercontent.com/Ew7HkAyuZeKrb93Cjhay-oUm5iJFA808RcRu_9ys2zqbZHPq3yceN_kL6Wo5Yb1DcCEC' ,
         //    like: 1,
         //    comment:1
         // }

         // ]
         posts: undefined,
      };
   },
   mounted() {
      Vue.axios.get("http://localhost:3001/post/all-post").then((res) => {
         this.posts = res.data;
         console.warn(res.data);
      });
   },
};
</script>

<style lang="scss">
#post {
   align-self: center;
   width: 50%;
   align-content: center;
}

#status {
   border: 1px solid black;
   display: flex;
   align-items: center;
   width: 30%;
   align-self: center;
}

div {
   margin: 5px;
}

#emoji,
#comment,
#share {
   flex: 1;
   border: 1px solid black;
   size: inherit;
   text-align: center;
}
#comment-section{
   background-color:aqua;
   height: 200px;
}
</style>
