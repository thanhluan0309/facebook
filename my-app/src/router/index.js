import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/testView.vue";
import Registerview from "../views/register.vue";
import LoginView from "../views/login.vue";

import VueCarousel from "vue-carousel";
import UserLike from "../views/UserLiked.vue";
import UserPost from "../views/UserPost.vue";
import UpdatePost from "../views/UpdatePost.vue";
Vue.use(VueRouter);
Vue.use(VueCarousel);
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: Registerview,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path:"/userLike",
    name: "userlike",
    component: UserLike
  },
  {
    path:"/userPost",
    name: "userpost",
    component: UserPost
  },
  {
    path:"/updatePost/:id",
    name:"updatePost",
    component:UpdatePost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
