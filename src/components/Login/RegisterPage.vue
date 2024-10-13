<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import LoginPage from './LoginPage.vue';
import currentComponent from './LoginRegister.vue';

const user = ref('')
const password = ref('')
const email = ref('')
const router = useRouter()
const refreshPage = () => {
  location.reload(); // Reloads the current page
};

function Register() {
  let userinfo = JSON.stringify({ 
  "email": email.value,
  "username": user.value,
  "password": password.value
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/user/register/',
  headers: { 
    'Content-Type': 'application/json'
  
  },
  data : userinfo
};



axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log(response.status);
  if (response.status=201){

  refreshPage();
};
})
.catch((error) => {
  console.log(error);
})
;


}

</script>

<template>
  <div class="forms">
    <div class="forms-div">
      <label>Email:</label><br>
      <input v-model="email" type="email" class="input"><br>
      <label>Usuario:</label><br>
      <input v-model="user" type="text" class="input"><br>
      <label>Senha:</label><br>
      <input v-model="password" type="password" class="input"><br>
      <div class="spacing"></div>
      <v-btn
      text="Registrar"
      @click="Register"></v-btn> 
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
  top: 55%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  }


</style>
