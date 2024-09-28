<script setup>
import { useAuthStore } from '@/stores/auth.js'
import CurrencyInput from '@/assets/CurrencyInput.vue'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useAuthStore()
const description = ref('')
const date = ref('')
const value = ref('')

function Gravar() {{
    console.log(date.value)
    console.log(description.value)

  let registro = JSON.stringify({
  "user": store.user_id, 
  "date": date.value,
  "description": description.value,
  "value": value.value
});

let config = {

  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8000/api/registros/',
  headers: { 
    'Content-Type': 'application/json',

  },
  data : registro
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

console.log(store.token)
console.log(store.user_id)

}

}

</script>

<template>


    <div class="elements" style="width: 100%;">
 
    <div style="width: 100%;"> 
      <label>Data:</label><br>
      <input v-model="date" type="date" style="width: 100%;"><br>
    </div>
    <div style="width: 100%;">
      <label>Descricao:</label><br>
      <input v-model="description" type="text"><br>
    </div>
    <div style="width: 100%;">
      <label>Valor:</label><br>
      <CurrencyInput v-model="value" :options="{ currency: 'BRL', autoDecimalDigits:true }"/>
    </div style="width: 100%;">
    <div >     
      <v-btn
      text="Gravar"
      @click="Gravar"></v-btn> 
    </div>  
    
  </div>

</template>

<style scoped>
  .elements {
    display: flex;
    flex-direction: column;
    background-color: transparent;
  }


</style>
