<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

async function recover(){
console.log('recover')

}
</script>

<template>

  <div class="forms">
    <div class="forms-div">
     
        <label>Email:</label><br>
        <input v-model="email" type="text" class="input"><br>
        <div class="spacing"></div>   
        <v-btn
      text="recover"
      @click="recover"></v-btn>    
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
