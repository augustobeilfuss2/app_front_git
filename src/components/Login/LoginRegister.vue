<script>

import LoginPage from './LoginPage.vue';
import RegisterPage from './RegisterPage.vue';
import RecoverPage from './RecoverPage.vue';



export default {
  data() {
    return {
      currentComponent: LoginPage,
    };
  },
  methods: {
    Login() {
      this.currentComponent = LoginPage; // Substitua por seu componente
    },
    Register() {
      this.currentComponent = RegisterPage; // Substitua por seu componente
    },
    Recover() {
      this.currentComponent = RecoverPage; // Substitua por seu componente
    },
  },


};


</script>

<template>

  <body>  

    <div class="box center-box"> 
      
      <div class="elements">
        
        <v-btn
      text="Login"
      @click="Login"></v-btn> 
      <div class="spacing"></div>
      <v-btn
      text="Registro"
      @click="Register"></v-btn> 
      
      </div>
   
      <div class="elements">
        
        <div>
          <div class="spacing"></div>
          <div class="spacing"></div>
          <div class="spacing"></div>
          <div class="wrapper">
          <component :is="currentComponent"></component> 
          
          </div>
          

        </div>
        
      </div>
      <v-btn size="x-small"
      text="Esqueci minhas senha"
      @click="Recover"></v-btn> 
  </div>

  </body>
  
</template>

<style scoped>



  .spacing{

    padding: 10px;
  }

  .center-box{
    border: 20px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  

  .elements {
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: rgb(30, 78, 38);
  }


</style>
