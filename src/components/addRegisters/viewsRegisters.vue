<script>
import { useAuthStore } from '@/stores/auth.js'
import axios from 'axios'
import { ref } from 'vue'
//cdn.datatables.net/2.1.7/js/dataTables.min.js

let info=ref('')
let infoArray=ref([])
export default {
    data() {
      return {
        infoArray: infoArray,
        info:info
      }
    },
    methods: {
      Refresh(){
          axios
          .get('http://localhost:8000/api/registros/')
          .then(response => {(info = JSON.stringify(response.data))
            this.infoArray=JSON.parse(info)
            console.log(typeof(infoArray))
            console.log(infoArray)
          })
      },

      
    },
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
    density="compact"
  ></v-data-table>
  </div>  

</div>


</template>

<style scoped>


.minha-linha {
  background-color: lightblue;
  &:hover {
    background-color: lightgray;
  }
  height: 10px;
}
</style>