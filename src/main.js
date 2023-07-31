import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loginGlobalComponent } from './utils/import' 
const app = createApp(App)
loginGlobalComponent(app)
app.use(router)
app.mount('#app')
