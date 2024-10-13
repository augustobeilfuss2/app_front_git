<script>

import addRegisters from './addRegisters/addRegisters.vue';
import viewsRegisters from './addRegisters/viewsRegisters.vue';
import addTags from './addTag/addTags.vue';
import { useRouter } from 'vue-router'


import { ref } from 'vue'



export default {
  components: {
    addRegisters,
    viewsRegisters,
    addTags
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    toDesempenho(){
      const router = useRouter()
      router.push({ name: 'desempenho'})
}


  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  
}
}




</script>

<template>
  <header class="nav">
    <div></div>
    <v-btn style="margin: 10px;"
      text="Desempenho"
      @click="toDesempenho"></v-btn> 
  </header>
  <body class="float-container">  
    
      <div class="addRegister">
        <div>
         
          <addRegisters></addRegisters>
          <addTags></addTags>
        </div>
      </div>
      <div class="viewsRegister">
      
        <viewsRegisters></viewsRegisters>
      </div>
  </body>
  
</template>

<style scoped>
.nav{

  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.float-container{
  display: flex;
  position: relative;
  align-items: center;
}
.addRegister {
    display: flex;
    width: 30%;
    padding: 10px;
   /*   border: 2px solid rgb(19, 119, 36);*/ 
}
.viewsRegister {
    
    width: 70%;
    float: left;
    padding: 10px;
 /*    border: 2px solid rgb(19, 119, 36);*/
}  

</style>
