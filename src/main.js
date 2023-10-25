import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
//router
import router from './router/index'


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//pinia
import { createPinia } from "pinia";
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
