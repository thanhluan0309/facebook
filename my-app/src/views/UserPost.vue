<template>
   <div id="userpost">
      <!-- <img id="imgvalueset" src="compman.gif" /> -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
            </div>
         </div>
      </div>
      <nav class="navbar">
         <div class="nav-left"><img class="logo" src="./images/logo2.png" alt="">
            <ul class="navlogo">
               <li><img src="./images/notification.png"></li>
               <li><img src="./images/inbox.png"></li>
               <li><img src="./images/video.png"></li>
            </ul>
         </div>
         <div class="nav-right">
            <div class="search-box">
               <img src="./images/search.png" alt="">
               <input type="text" placeholder="Search">
            </div>

            <div class="dropdown">
               <button class="rounded-circle btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Setting
               </button>
               <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li @click="logout()" class="dropdown-item">logout</li>
                  <li @click="changepass()" class="dropdown-item">change password</li>
                  <li @click="userLike()" class="dropdown-item">User's Like post</li>
                  <li @click="userPost()" class="dropdown-item">Posts of User</li>
               <router-link to=""></router-link>
               </ul>
            </div>
         </div>
         <div class="user-settings">
            <div class="profile-darkButton">
               <div class="user-profile">
                  <img src="" alt="">
                  <div>
                     <p> Alex Carry</p>
                     <a href="#">See your profile</a>
                  </div>
               </div>
               <div id="dark-button" onclick="darkModeON()">
                  <span></span>
               </div>
            </div>
            <hr>
            <div class="user-profile">
               <img src="./images/feedback.png" alt="">
               <div>
                  <p> Give Feedback</p>
                  <a href="#">Help us to improve</a>
               </div>
            </div>
            <hr>
            <div class="settings-links">
               <img src="./images/setting.png" alt="" class="settings-icon">
               <a href="#">Settings & Privary <img src="./images/arrow.png" alt=""></a>
            </div>

            <div class="settings-links">
               <img src="./images/help.png" alt="" class="settings-icon">
               <a href="#">Help & Support <img src="./images/arrow.png" alt=""></a>
            </div>

            <div class="settings-links">
               <img src="" alt="" class="settings-icon">
               <a href="#">Display & Accessibility <img src="./images/arrow.png" alt=""></a>
            </div>

            <div class="settings-links">
               <img src="./images/logout.png" alt="" class="settings-icon">
               <a href="#">Logout <img src="./images/arrow.png" alt=""></a>
            </div>

         </div>
      </nav>
      <div class="container">
         <div class="left-sidebar">
            <div class="important-links">
               <a href="#"><img src="./images/news.png" alt="">Latest News</a>
               <a href="#"><img src="./images/friends.png" alt="">Friends</a>
               <a href="#"><img src="./images/group.png" alt="">Groups</a>
               <a href="#"><img src="./images/marketplace.png" alt="">marketplace</a>
               <a href="#"><img src="./images/watch.png" alt="">Watch</a>
               <a href="#">See More</a>
            </div>

            <div class="shortcut-links">
               <p>Your Shortcuts</p>
               <a href="#"> <img src="./images/shortcut-1.png" alt="">Web Developers</a>
               <a href="#"> <img src="./images/shortcut-2.png" alt="">Web Design Course</a>
               <a href="#"> <img src="./images/shortcut-3.png" alt="">Full Stack Development</a>
               <a href="#"> <img src="./images/shortcut-4.png" alt="">Website Experts</a>
            </div>
         </div>

         <!-- main-content------- -->

         <div class="content-area">

            <div class="write-post-container">
               <div class="user-profile">
                  <img src="./images/upload.png" alt="">
                  <div>
                     <p> Alex Carry</p>
                     <small>Public <i class="fas fa-caret-down"></i></small>
                  </div>
               </div>
               <div class="post-upload-textarea">
                  <textarea name="" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                     :placeholder="'What is your mind ' + username + ' ?'" id="" cols="30" rows="3"></textarea>
                  <div class="add-post-links">
                     <a href="#"><img src="./images/live-video.png" alt="">Live Video</a>
                     <a href="#"><img src="./images/photo.png" alt="">Photo/Video</a>
                     <a href="#"><img src="./images/feeling.png" alt="">Feeling Activity</a>
                  </div>
               </div>

            </div>

            <div class="status-field-container write-post-container" v-for="(item, index) in posts" :key="index">
               <div class="user-profile-box">
                  <div class="user-profile">
                     <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="">
                     <div>
                        <p> {{ item.user.username }}</p>
                        <small>August 13 1999, 09.18 pm</small>
                     </div>
                     <div style="margin-left: 20px;">
                        <button class="btn btn-primary" @click="update(item._id)">Edit</button>
                     </div>

                     <form class="right-sidebar">
                        <button class="btn btn-danger" @click="deletepost(item._id)">Delete</button>
                     </form>
                  </div>
                  <div>
                     <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                  </div>
               </div>
               <div class="status-field">
                  <p>{{ item.title }} </p>
                  <carousel loop="true" :navigationEnabled="true" :per-page="1" :navigate-to="someLocalProperty"
                     :mouse-drag="false">
                     <slide v-for="(img, index) in item.content">
                        <img height="340px" v-bind:src="getImgUrl(img)" class="d-block w-100" alt="...">
                     </slide>
                  </carousel>
               </div>
               <hr />
            </div>

            <button type="button" class="btn-LoadMore" onclick="LoadMoreToggle()">Load More</button>
         </div>

         <!-- sidebar------------ -->
         <div class="right-sidebar">
            <div class="heading-link">
               <h4>Events</h4>
               <a href="">See All</a>
            </div>

            <div class="events">
               <div class="left-event">
                  <h4>13</h4>
                  <span>august</span>
               </div>
               <div class="right-event">
                  <h4>Social Media</h4>
                  <p> <i class="fas fa-map-marker-alt"></i> wisdom em Park</p>
                  <a href="#">More Info</a>
               </div>
            </div>
            <div class="events">
               <div class="left-event">
                  <h4>18</h4>
                  <span>January</span>
               </div>
               <div class="right-event">
                  <h4>Mobile Marketing</h4>
                  <p><i class="fas fa-map-marker-alt"></i> wisdom em Park</p>
                  <a href="#">More Info</a>
               </div>
            </div>

            <div class="heading-link">
               <h4>Advertisement</h4>
               <a href="">Close</a>
            </div>
            <div class="advertisement">
               <img src="./images/advertisement.png" class="advertisement-image" alt="">
            </div>

            <div class="heading-link">
               <h4>Conversation</h4>
               <a href="">Hide Chat</a>
            </div>

            <div class="online-list">
               <div class="online">
                  <img src="./images/member-1.png" alt="">
               </div>
               <p>Alison Mina</p>
            </div>

            <div class="online-list">
               <div class="online">
                  <img src="./images/member-2.png" alt="">
               </div>
               <p>Jackson Aston</p>
            </div>
            <div class="online-list">
               <div class="online">
                  <img src="./images/member-3.png" alt="">
               </div>
               <p>Samona Rose</p>
            </div>
         </div>
      </div>

      <footer id="footer">
         <p>&copy; Copyright 2021 - Socialbook All Rights Reserved</p>
      </footer>

   </div>

</template>

<script >
import Vue from "vue";
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios';
import { any } from "webidl-conversions";
export default {
   name: "userpost",
   data() {
      return {
         posts: undefined,
         username: localStorage.getItem("username")
      };
   },
   components: {
      Carousel,
      Slide
   },
   mounted() {
      var user = localStorage.getItem('userid');
      console.log(user);
      axios.get("http://localhost:6969/post/user/" + user)
         .then((res) => {
            this.posts = res.data;
            console.log(res)
         })
         .catch((err) => {
            console.log(err);
         });
   },
   methods: {
      changepass(){
      
      return window,location.href="http://localhost:8080/change"
    },
      getImgUrl(pic) {
         return require('../../../server/uploads/' + pic)
      },
      update(id) {
         return window.location.href = "http://localhost:8080/updatePost/" + id;
      },
      async deletepost(id) {
         axios.delete("http://localhost:6969/post/delete/" + id)
            .then((res) => {
               alert("Delete success");
               this.result.splice(id, 1);
               this.mounted;
               console.log(this.result);
            });
      },
      logout() {
         localStorage.clear()
         return window.location.href = "http://localhost:8080/login";
      },
      userLike() {
         return window.location.href = "http://localhost:8080/userLike";
      },
      userPost() {
         return window.location.href = "http://localhost:8080/userPost";
      }
   }
};
</script>

<style lang="css">
.uploading-image {
   display: flex;
}

@import './style.css';
</style>