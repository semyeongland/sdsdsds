<!-- Home.vue -->
<template>
    <div id="content">
        <Main_home />




        <Footer_home />
    </div>
</template>
  
<script>
import Footer_home from '@/components/Footer_home.vue';
import Main_home from '@/components/Main_home.vue';


export default {
    name: "Home_test",
    components: {
        Main_home,
        Footer_home
    }
};
</script>
