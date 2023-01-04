<template>
   <div class="updatePost">
      <b-form  v-if="show">
         <b-form-group id="input-group-1" label="Title:" label-for="title"
            description="We'll never share your email with anyone else.">
            <b-form-input id="title" v-model="form.post.title" ref="title" type="text" placeholder="Enter title"
               required></b-form-input>
         </b-form-group>

         <b-form-group id="input-group-2" label="Content:" label-for="content">
            <b-form-file id="content" v-model="form.post.content" ref="content" class="mt-3" plain></b-form-file>
            <div class="mt-3">Selected file: {{ form.post.content ?  form.post.content : '' }}</div>
            
         </b-form-group>

         <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
         </b-form-group>

         <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
               <b-form-checkbox value="me">Check me out</b-form-checkbox>
               <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
         </b-form-group> -->

         <b-button type="submit" @click="onSubmit" variant="primary">Submit</b-button>
         <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
         <pre class="m-0">{{ form }}</pre>
      </b-card>
   </div>
</template>
 
<script>
import { title } from "process";
import Vue from "vue";
export default {
   name: "updatePost",
   data() {
      return {
         form: {
            title: '',
            content: []
         },
         foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
         show: true
      }
   },
   mounted() {
          Vue.axios
         .get("http://localhost:6969/post/" + this.$route.params.id)
         .then((res) => {
           this.form = res.data;
            console.log(this.form)
            console.warn(res.data);
         });
   },
   methods: {
      async onSubmit(event) {
         const { title, content } = this.$refs;
         const putData = {
          title: title.value,
          content: content.value
        };
         axios.put('http://localhost:6969/post/update/'+this.$route.params.id,putData
           ,{
            headers: {
               "Content-Type": "multipart/form-data" 
            }
         });
      }
   }
}
</script>