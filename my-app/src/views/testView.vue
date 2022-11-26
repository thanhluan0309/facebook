<script>
import Sayhi from '@/components/sayhi.vue';

export default {
    name: 'testView',
    components: {
        Sayhi
    }
}
</script>

<template>
    <div class="test">
        page test
        <router-link to="/about">About</router-link>
        <Sayhi msg="luan pro"></Sayhi>
    </div>
</template>

