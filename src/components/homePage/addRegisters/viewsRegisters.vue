<script>
import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'
import { ref } from 'vue'

let info=ref('')
let infoArray=ref([])
const number = 123456.789;
const formattedNumber = number.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(formattedNumber); 

export default {
    data() {
      return {
        
        infoArray: infoArray,
        info:info,
        sortBy: [{ key: 'calories', order: 'asc' }],
        headers : [
        { title:'Data',value: 'date' , key: 'calories' },        
        { title: 'Valor' , value: "value",      cellProps: {
        style: 'padding: 5px;', key:"value"
      }, },
        {title:'Descricao' , value: 'description' },
        {title: 'Tag', value: 'tags'} 
  
  
]

      }
    },
    methods: {
      Refresh(){
          axios
          .get('http://localhost:8000/api/registros/')
          .then(response => {(info = JSON.stringify(response.data))
            this.infoArray=JSON.parse(info)

          })
      },
      getVal(item, path) {
      return path.split(".").reduce((res, prop) => res[prop], item);
    },

    },
    beforeMount(){
        this.Refresh()

        }
  
    
  }

</script>

<template>

<div class="">
  
  <div style="padding: 3px;">   
  <v-btn 
      text="Refresh"
      @click="Refresh"></v-btn>      
  </div>
  <div style="padding: 3px;">

    <v-data-table 
    :items="infoArray"
    :headers="headers" 
    density="compact"
    :sort-by="sortBy"
    
    >
    <template v-slot:item.value="{ item }">
 {{ (parseFloat(item.value)).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}) }}
      </template>
  
  
    </v-data-table>
  </div>  

</div>


</template>

<style scoped>

</style>