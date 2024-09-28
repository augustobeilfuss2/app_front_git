<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref('')
const password = ref('')

async function login(){
   const auth = useAuthStore();
   console.log("aaa")
   let credentials = JSON.stringify({
           "username": user.value,
           "password": password.value
         })
await auth.login(credentials)
if(auth.token !=null){
  
  router.push({ name: 'Home'})

} 

}
</script>

<template>

  <div class="forms">
    <div class="forms-div">
     
        <label>Usuario:</label><br>
        <input v-model="user" type="text"><br>
        <label>Senha:</label><br>
        <input v-model="password" type="password"><br>
           
        <button class="button" @click="login">Login</button>   
    </div>

   
  </div>
</template>

<style scoped>

.forms{
  height: 180px;
  width: 200px ;
 

  }
.forms-div{
  display: flexbox;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  }

  
</style>
