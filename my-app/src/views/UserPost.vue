<template>
   <div id="userpost">
      <!-- <div class="container" v-for="(item, index) in posts">
         <b-card class="title" v-bind:title="item.title" sub-title="This is post 's content" style="
          color: aliceblue;
          font-family: Times New Roman, Times, serif;
          font-size: 20px;
          background-image: url('https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/05/facebook-freepik-1652177112.jpg');
        ">
            <b-card-text v-for="(content, index) in item.content" :key="index">
               {{ content }}
            </b-card-text>
            <a href="#" class="card-link">Go to Post</a>
         </b-card>
      </div> -->
      <div class="container">
         <div class="content-area">
            <div class="status-field-container write-post-container" v-for="(item, index) in posts">
               <div class="user-profile-box">
                  <div class="user-profile">
                     <img src="" alt="">
                     <div>
                        <p>{{ item.user.username }}</p>
                        <small>August 13 1999, 09.18 pm</small>
                     </div>
                  </div>
                  <div>
                     <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                  </div>
               </div>
               <div class="status-field">
                  <p>{{ item.title }} </p>
                  <img src="./images/feed-image-1.png" alt="">
                  <!-- <div  v-for="(content, index) in item.content" :key="index" > 
               <a>{{ content }}</a>
            </div> -->

               </div>
               <div class="post-reaction">
                  <div class="activity-icons">
                     <div><img src="./images/like-blue.png" alt="">120</div>
                     <div><img src="./images/comments.png" alt="">52</div>
                     <div><img src="./images/share.png" alt="">35</div>
                  </div>
                  <div class="post-profile-picture">
                     <img src=" " alt=""> <i class=" fas fa-caret-down"></i>
                  </div>
               </div>
               <hr />
            </div>

         </div>
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
      // localStorage.setItem('userpost', JSON.stringify('63998346febdad0994957719'))
      var user = localStorage.getItem('userid');
      console.log(user);
      Vue.axios
         .get("http://localhost:6969/post/user/" + user)
         .then((res) => {
            this.posts = res.data;
            console.warn(res.data);
         });
   }
};
</script>

<style>
.container {
   /* border-style: solid;
   border-color: #090979;
   box-shadow: 5px 5px #090979;
   margin: 10px;
   margin-bottom: 20px; */
}
</style>
