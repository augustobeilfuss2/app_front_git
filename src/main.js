import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/Login/LoginRegister.vue'
import HomePage from './components/addRegisters/HomePage.vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'




const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  VDateInput,
  theme: {
    defaultTheme: 'dark'
  }
})

const routes = [
    { path: '/', component: App.vue },
    { path: '/',name: 'Login', component: Login},
    { path: '/home',name: 'Home', component: HomePage},
    ]
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    })

createApp(App).use(router).use(pinia).use(vuetify).mount('#app')


