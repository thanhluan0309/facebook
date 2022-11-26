<template>
    <div class="sayhi">
        <h1> well come back</h1>
        <h2>{{msg}}</h2>   
     </div>
</template>

<script>

export default {
    name:"sayhi",
    props:{
        msg: String
    }
}
</script>