import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // Or your main CSS file

createApp(App).use(router).mount('#app')