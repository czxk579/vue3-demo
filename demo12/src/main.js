import { createApp } from 'vue'
import App from './App.vue'
// 导入axios
import axios from "axios"
import './registerServiceWorker'

const app = createApp(App);
// 将axios挂载到全局
app.config.globalProperties.$axios = axios
app.mount('#app')
