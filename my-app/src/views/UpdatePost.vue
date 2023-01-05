<template>
   <div class="updatePost">
      
      <div class="container">

         <b-form v-if="show" enctype="multipart/form-data" id="form">
            <b-form-group id="input-group-1" label="User:" label-for="name">
               <b-form-input id="name" v-model="form.post.user.username" type="text" placeholder="Enter title"
                  disabled></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-1" label="Title:" label-for="title"
               description="We'll never share your email with anyone else.">
               <b-form-input id="title" v-model="form.post.title" type="text" placeholder="Enter title"
                  required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Content:" label-for="content">
               <b-form-file id="content" type="file" v-model="form.post.content" class="mt-3"
                  multiple="multiple"></b-form-file>
               <div class="mt-3">
                  Selected file: {{ form.post.content ? form.post.content : "" }}
               </div>
            </b-form-group>
            <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
            <b-button type="reset" @click="onBack" variant="danger">Back</b-button>
         </b-form>
         <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
         </b-card>
      </div>
   </div>
</template>

<script>
import { title } from "process";

import Vue from "vue";
export default {
   name: "updatePost",
   data() {
      return {
         form: null,
         show: true
      };
   },
   mounted() {
      Vue.axios
         .get("http://localhost:6969/post/" + this.$route.params.id)
         .then((res) => {
            this.form = res.data;
         });
   },
   methods: {
      onSubmit() {
         console.log(this.form);
         Vue.axios.put('http://localhost:6969/post/update/' + this.$route.params.id, this.form.post).then((res) => {
            console.log(res.data);
         }).catch((err) => {
            console.log(err);
         });
      },
      onBack() {
         return (window.location.href = "http://localhost:8080/userPost");
      }
   }
}
</script>
<style>
@import './style.css';
</style>
