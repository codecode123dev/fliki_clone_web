import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loginGlobalComponent } from './utils/import' 



const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App)
loginGlobalComponent(app)
app.use(vuetify)
app.use(router)
app.mount('#app')
