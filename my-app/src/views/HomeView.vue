
<template>
  <div class="home">

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

            <form enctype="multipart/form-data" id="form">
              <div class="post-upload-textarea">
                <input class="cssforinput" id="title" type="text" name="title" />
                <input id="userid" name="userid" type="hidden" />

                <div class="add-post-links">
                  <a href="#"><img src="./images/live-video.png" alt="">Live Video</a>
                  <a href="#"><img src="./images/photo.png" alt=""> <label for="file" class="btn">Photo/img</label></a>

                  <a href="#"><img src="./images/feeling.png" alt="">Feeling Activity</a>
                </div>
              </div>

              <div>
                <input type="file" style="visibility:hidden;" accept="image/png" id="file" name="file"
                  multiple="multiple" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="handlecreate()" data-bs-dismiss="modal"
                  class="btn btn-primary">Understood</button>
              </div>
            </form>

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
            <li @click="userLike()" class="dropdown-item">User's Like post</li>
            <li @click="userPost()" class="dropdown-item">Posts of User</li>
          </ul>
        </div>
      </div>
      <div class="user-settings">
        <div class="profile-darkButton">
          <div class="user-profile">
            <img src="" alt="">
            <div>
              <p> {{ username }}</p>
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
              <p> {{ username }}</p>
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


        <!-- render all post -->
        <div v-for="item in Post" class="status-field-container write-post-container">
          <div class="user-profile-box">
            <div class="user-profile">
              <img src="" alt="">
              <div>
                <p> {{ item.user.username }} </p>
                <small>August 13 1999, 09.18 pm</small>
              </div>
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
          <div style="height: 52px;font-size: 1.3rem;" class="post-reaction">
            <div class="activity-icons">
              <popper trigger="clickToOpen" :options="{
                placement: 'top',
                modifiers: { offset: { offset: '0,10px' } }
              }">
                <ul class="popper">
                  <li><button v-on:click="handlelike(item._id.substring(19), 'like')"
                      class="cssbutton cssbackgroundiconlike"
                      style="--url: url(https://media.tenor.com/0hqaNCfkJUwAAAAM/cali007.gif)" slot="reference">

                    </button></li>
                  <li><button v-on:click="handlelike(item._id.substring(19), 'smile')"
                      class="cssbutton cssbackgroundiconlike"
                      style="--url: url(https://media.tenor.com/bezL2ZXDVsYAAAAC/laugh-emoji.gif)" slot="reference">

                    </button></li>
                  <li><button v-on:click="handlelike(item._id.substring(19), 'sad')"
                      class="cssbutton cssbackgroundiconlike"
                      style="--url: url(https://media.tenor.com/MqLOZGpjhroAAAAd/sad-emoji.gif)" slot="reference">

                    </button></li>
                  <li><button v-on:click="handlelike(item._id.substring(19), 'angry')"
                      class="cssbutton cssbackgroundiconlike"
                      style="--url: url(https://media.tenor.com/YMC8o25pWBAAAAAC/angry-emoji.gif)" slot="reference">

                    </button></li>
                  <li><button v-on:click="handlelike(item._id.substring(19), 'love')"
                      class="cssbutton cssbackgroundiconlike"
                      style="--url: url(https://media.tenor.com/RYibGej0GvcAAAAi/facebook-emoji.gif)" slot="reference">
                    </button></li>
                </ul>

                <button class="cssbutton" slot="reference">
                  <div><img src="./images/like.png" alt=""><span v-bind:aria-valuetext="item.behaviors._id"
                      v-bind:id='"valuelike" + item._id.substring(19)'>{{
                        item.behaviors.like.length
                      }}</span></div>
                </button>
              </popper>
              <div>
                <button class="cssbutton" type="button" data-bs-toggle="collapse"
                  v-bind:data-bs-target='"#collapseExample" + item._id.substring(19)' aria-expanded="false"
                  aria-controls="collapseExample">
                  <div><img src="./images/comments.png" alt=""><span v-bind:id='"idcomment" + item._id.substring(19)'>{{
                    item.behaviors.comment.length
                  }}</span></div>
                </button>
              </div>
              <div><img src="./images/share.png" alt="">35</div>
              <div style="flex-wrap: wrap;width: 500px;" class="collapse"
                v-bind:id='"collapseExample" + item._id.substring(19)'>
                <ul v-bind:id='"valuecomment" + item._id.substring(19)' class="content card card-body">
                  <li v-for="comment in item.behaviors.comment" class="listcontent">{{ comment.user }} : {{
                    comment.CommentContent
                  }}</li>
                </ul>
                <div style="margin-top:10px">
                  <input v-bind:id='"noidung" + item._id.substring(19)' type="text" placeholder="Comment here" />
                  <button v-on:click="sendmessage(item._id.substring(19), item.behaviors._id)">Send</button>
                </div>
              </div>
            </div>
            <div class="post-profile-picture">
              <img src=" " alt=""> <i class=" fas fa-caret-down"></i>
            </div>
          </div>
        </div>
        <!-- end render -->
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
<style>
.uploading-image {
  display: flex;
}

.cssbutton {
  background-color: #ffff;
  border: none
}

.cssbackgroundiconlike {
  background-repeat: no-repeat;
  background-image: var(--url);
  width: 76px;
  height: 66px;
  background-size: contain;
  background-position: center;
}

.popper {
  display: flex;
  list-style: none;
}

.content {
  list-style: none;
  width: 100%;
  align-items: baseline;
  overflow-y: scroll;
  height: 120px;
}

.cssforinput {
  width: 100%;
  height: 55px;
  border: none;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 0px 26px;
}
</style>
<script >
import { Carousel, Slide } from 'vue-carousel';
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

import axios from 'axios'
export default {
  name: 'imageUpload',
  data() {
    return {
      num0: 0,
      userid: localStorage.getItem("userid"),
      username: localStorage.getItem("username"),
      previewImage: null,
      Post: []
    }
  },
  components: {
    Carousel,
    Slide,
    'popper': Popper
  },
  computed: {
    photo() {
      return '../../../server/uploads/b3375f05d7577f11cff8df300.png';
    }
  },
  mounted() {
    document.getElementById("userid").value = localStorage.getItem("userid");
    window.addEventListener("load", this.getallPost);
  },
  methods: {
    getImgUrl(pic) {
      return require('../../../server/uploads/' + pic)
    },
    async handlecreate() {
      var bodyFormData = new FormData(document.getElementById('form'));

      axios({
        method: "post",
        url: "http://localhost:6969/post",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);

        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      location.reload();
    },
    async createPost() {
      await handlecreate(document.getElementById('form'))
    },
    async handlelike(value, emoji) {
      //"value" is the clicked button value
      const count = parseInt(document.getElementById(`valuelike${value}`).innerHTML)
      const idBehaviors = document.getElementById(`valuelike${value}`).ariaValueText

      document.getElementById(`valuelike${value}`).innerHTML = count + 1
      const updatelike = {
        like: {
          userid: this.userid,
          user: this.username,
          likeContent: emoji
        }
      }
      axios({
        method: "put",
        url: `http://localhost:6969/behavior/${idBehaviors}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: updatelike,
      })
        .then(function (response) {
          console.log(response);

        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

    },
    async sendmessage(value, id) {
      const comment = document.getElementById(`noidung${value}`).value
      if (comment === "") {
        return;
      }
      const count = parseInt(document.getElementById(`idcomment${value}`).innerHTML)
      document.getElementById(`idcomment${value}`).innerHTML = count + 1


      const idBehaviors = id
      const getid = document.getElementById(`valuecomment${value}`)
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(`${this.username}` + " : " + `${comment}`));
      getid.appendChild(li);
      //save db
      const updatelike = {
        comment: {
          userid: this.userid,
          user: this.username,
          CommentContent: comment
        }
      }
      axios({
        method: "put",
        url: `http://localhost:6969/behavior/${idBehaviors}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: updatelike,
      })
        .then(function (response) {
          console.log(response);

        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      document.getElementById(`noidung${value}`).value = ""
    },
    logout() {
      localStorage.clear()
      return window.location.href = "http://localhost:8080/login";
    }
    ,
    userLike() {
      return window.location.href = "http://localhost:8080/userLike";
    },
    userPost() {
      return window.location.href = "http://localhost:8080/userPost";
    },
    async getallPost() {
      console.log("hello")
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

          this.Post = data.AllPost;
          console.log("data", this.Post)
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
