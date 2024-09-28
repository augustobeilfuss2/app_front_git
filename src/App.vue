<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()
router.push({ name: 'Login'})



</script>



<template>
<strong>Current route path:</strong> {{ currentRouteName }}
  <router-view ></router-view>


</template>

<style scoped>


  .center-box{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  

  .elements {
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: rgb(30, 78, 38);
  }


</style>
