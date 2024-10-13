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
const addedtag = ref('')
let tags = ref('')
const data = new Date() 
let dataAtual = new Date(data.getTime() - (data.getTimezoneOffset() * 60000)).toISOString('en-US', 'America/Sao_Paulo').slice(0,10);

function Gravar() {{


  let registro = JSON.stringify({
  "user": store.user_id, 
  "date": dataAtual,
  "description": description.value,
  "value": value.value,
  "tags": addedtag.value
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


axios.get('http://localhost:8000/api/registros/tag/')
            .then(response => {(tags = JSON.stringify(response.data))
            tags=JSON.parse(tags)

          })


</script>

<template>


    <div class="elements" style="width: 100%;">
 
    <div style="width: 100%;"> 
      <label>Data:</label><br>
      <input v-model="dataAtual" type="date" class="input" style="width: 90%;"><br>
    </div>
    <div style="width: 100%;">
      <label>Descricao:</label><br>
      <input v-model="description" type="text" class="input" style="width: 90%;"><br>
    </div>
    <div style="width: 100%;">
      <label>Valor:</label><br>
      <CurrencyInput v-model="value" class="input" style="width: 90%;" :options="{ currency: 'BRL', autoDecimalDigits:true }"/>
    </div style="width: 100%;">
    <div style="width: 100%;">
      <label>Tag:</label><br>
        <select v-model="addedtag">
          <option v-for="tag in tags" :value="tag.tags">{{ tag.tags }}</option>
        </select>
    </div>
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
    background-color: rgb(30, 78, 38);
  }


</style>
