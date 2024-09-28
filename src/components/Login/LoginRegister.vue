<script>

import LoginPage from './LoginPage.vue';
import RegisterPage from './RegisterPage.vue';



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
  },


};


</script>

<template>

  <body>  

    <div class="box center-box"> 

      <div class="elements">
        <button class="button" @click="Login">Login</button>
        <button class="button" @click="Register">Registro</button>
      </div>
    
      <div class="elements">
        <div>
          <div class="wrapper">
          <component :is="currentComponent"></component> 
          </div>
          <strong>Current route path:</strong> {{ $route.fullPath }}
        </div>
      </div>
    
  </div>

  </body>
  
</template>

<style scoped>


  .center-box{
    margin: 0;
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
