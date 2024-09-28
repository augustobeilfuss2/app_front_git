<script>

import addRegisters from './addRegisters.vue';
import viewsRegisters from './viewsRegisters.vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()

let componentKey=0
export default {
  components: {
    addRegisters,
    viewsRegisters,
  },
  data() {
      return {
        componentKey: 0,
      };
  },
  methods: {
    refresh() {
      this.componentKey += 1;

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

  <body class="float-container">  
    
      <div class="addRegister">
        
          <addRegisters></addRegisters> 
      </div>
      <div class="viewsRegister">
      
        <viewsRegisters></viewsRegisters>
      </div>
  </body>
  
</template>

<style scoped>

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
margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);