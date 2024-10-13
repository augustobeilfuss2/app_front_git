<script>


import { useRouter } from 'vue-router'


import { ref } from 'vue'
const router = useRouter()


export default {
  components: {

  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    
   

  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  
}
}




</script>

<template>
aaa
  
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
