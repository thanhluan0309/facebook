<template>
   <div id="post" >
      <div v-for="(post, index) in posts" :key="index" >
         <div id="user">
            <h1>{{post.user_id}}</h1>
               <div id="post-title">
                  {{post.post_title}}
               </div>
               <div id="image">
                  <img v-bind:src="post.post_content" >
               </div>
               <div id="status">
                  <div id="emoji"><button>{{post.like_id}}Like</button> </div>
                  <div id="comment"><button>{{post.comment_id}}Comment</button></div>
                  <div id="share"><button>Share</button></div>
               </div>
            
         </div>
      </div>
   </div>
 </template>
 <script lang="ts">
   export default{
      data(){
         return {
            posts:[
               {
               user_id: 1 , 
               post_date: '19/02/2022',
               post_title: 'This is post title' , 
               post_content: 'https://play-lh.googleusercontent.com/Ew7HkAyuZeKrb93Cjhay-oUm5iJFA808RcRu_9ys2zqbZHPq3yceN_kL6Wo5Yb1DcCEC' , 
               like_id: 1,
               comment_id:1
            }
             
            ]
         }
      }
   }
</script>
 
 <style lang="scss">
   #post{
      align-self: center;
   }
   #status{
      border: 1px solid black; 
      display: flex;
      align-items: center;
      width: 30%;
      align-self: center;
   }
   div{
      margin: 5px;
   }
   
   #emoji, #comment, #share{
      flex: 1;
      border: 1px solid black;
      size: inherit;
      text-align: center;
   }
 </style>
 