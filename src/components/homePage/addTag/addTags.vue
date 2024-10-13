<script setup>
import { useAuthStore } from '@/stores/auth.js'

import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useAuthStore()
const tags = ref('')

function addTag() {{
    console.log(tags.value)

  let addTags = JSON.stringify({
  "user": store.user_id, 
  "tags": tags.value,
});

let config = {

  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/api/registros/tag/',
  headers: { 
    'Content-Type': 'application/json',

  },
  data : addTags
};



axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  console.log(response.status);
  if (response.status=201){
    console.log("gravou");
    router.push({ name: 'Home'})
};
})
.catch((error) => {
  console.log(error);
})
;

}

}

</script>

<template>


    <div class="elements" style="width: 100%;">
 
    <div style="width: 100%;"> 
      <label>Adicionar tag:</label><br>
      <input v-model="tags" class="input" style="width: 90%;"><br>
    </div>   
      <v-btn
      text="Adicionar"
      @click="addTag"></v-btn> 
    </div>  
    
  

</template>

<style scoped>
  .elements {
    display: flex;
    flex-direction: column;
    background-color: rgb(30, 78, 38);
  }


</style>
