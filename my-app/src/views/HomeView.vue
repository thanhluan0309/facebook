
<template>
  <div class="home">

    <img id="imgvalueset" src="compman.gif" />
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="write-post-container">
            <div class="user-profile">
              <img src="./images/upload.png" alt="">
              <div>
                <p> Alex Carry</p>
                <small>Create post <i class="fas fa-caret-down"></i></small>
              </div>
            </div>
            <div class="post-upload-textarea">
              <textarea name="" placeholder="What's on your mind," id="contenttitle" cols="30" rows="3"></textarea>
              <div>
                <img id="imgvalue" style="max-height: 100px" v-bind:src="previewImage" />
              </div>
              <div class="add-post-links">
                <a href="#"><img src="./images/live-video.png" alt="">Live Video</a>
                <a href="#"><img src="./images/photo.png" alt=""> <label for="files" class="btn">Photo/img</label></a>

                <a href="#"><img src="./images/feeling.png" alt="">Feeling Activity</a>
              </div>
            </div>
            <input id="files" style="visibility:hidden;" type="file" accept="image/png" @change=uploadImage>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="gotocreate()" class="btn btn-primary">Understood</button>
          </div>
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
        <div class="story-gallery">
          <div class="story story1">
            <img src="./images/upload.png" alt="">
            <p>Post Story</p>
          </div>
          <div class="story story2">
            <img src="./images/member-1.png" alt="">
            <p>Alison</p>
          </div>
          <div class="story story3">
            <img src="./images/member-2.png" alt="">
            <p>Jackson</p>
          </div>
          <div class="story story4">
            <img src="./images/member-3.png" alt="">
            <p>Samona</p>
          </div>
          <div class="story story5">
            <img src="./images/member-4.png" alt="">
            <p>John</p>
          </div>
        </div>

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

        <div class="status-field-container write-post-container">
          <div class="user-profile-box">
            <div class="user-profile">
              <img src="" alt="">
              <div>
                <p> Alex Carry</p>
                <small>August 13 1999, 09.18 pm</small>
              </div>
            </div>
            <div>
              <a href="#"><i class="fas fa-ellipsis-v"></i></a>
            </div>
          </div>
          <div class="status-field">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolores praesentium dicta
              laborum nihil accusantium odit laboriosam, sed sit autem! <a href="#">#This_Post_is_Better!!!!</a> </p>
            <img src="./images/feed-image-1.png" alt="">

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
    <UserLike />
    <UserPost />
    <footer id="footer">
      <p>&copy; Copyright 2021 - Socialbook All Rights Reserved</p>
    </footer>

  </div>

</template>
<style>
.uploading-image {
  display: flex;
}
</style>
<script >
import UserLike from './UserLiked.vue';
import UserPost from './UserPost.vue';
export default {
  name: 'imageUpload',

  data() {
    return {
      username: localStorage.getItem("username"),
      previewImage: null
    }
  },
  mounted() {
    window.addEventListener("load", this.getallPost);
  },
  methods: {
    logout() {
      localStorage.clear()
      return window.location.href = "http://localhost:8080/login";
    },
    async getallPost() {
      try {
        const config = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
        try {
          const fetchResponse = await fetch(
            `http://localhost:6969/post/`,
            config
          );
          const data = await fetchResponse.json();
          console.log("data", data)
        } catch (e) {
          return e;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async gotocreate() {
      const array = [];
      array.push(document.getElementById('imgvalue').src);
      const req = {
        title: contenttitle.value,
        content: [1, 2, 3]
      }
      try {
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(req),
        };
        try {
          const fetchResponse = await fetch(
            `http://localhost:6969/post/`,
            config
          );
          const data = await fetchResponse.json();
          console.log("data", data)
          // if(data.success){
          //    return window.location.href = "http://localhost:8080/home";
          // }else {
          //     return alert(`${data.message}`)
          // }
        } catch (e) {
          return e;
        }
      } catch (error) {
        console.log(error);
      }
    },
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };

    },

  },
  components:{
    UserLike,
    UserPost
  }
}

</script>
<style lang="css">
@import './style.css';
</style>
<!-- 
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Script } from 'vm';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Script
},
}
</script> -->
