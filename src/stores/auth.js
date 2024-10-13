import { defineStore } from 'pinia';
import axios from 'axios';
//import{ user, password }from './components/LoginPage.vue'


export const useAuthStore = defineStore('auth', () =>  {
    
    const token = null
    const isAuthenticated = null
    const user_id= null

   async function login(credentials) {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api-token-auth/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : credentials
    };
      try {
        const response = await axios.request(config)
        .then((response) => {
         
          const { token, user_id } = response.data;


        this.token = token;
        this.isAuthenticated = true;

        this.user_id = user_id
        // Store the token securely (e.g., in localStorage or sessionStorage)
        localStorage.setItem('token', token);

        // Set the Authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        })
        .catch((error) => {
          console.log(error);
        });
        
      } catch (error) {
        // Handle login errors
        console.error('Login failed:', error);
      }
    }

   
    return { token, isAuthenticated, user_id, login }
  }
)

export default useAuthStore