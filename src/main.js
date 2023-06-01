import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles/style.css'
import 'v-calendar/dist/style.css'
import { fieldDirective } from '@/directives/field-directive'
import { createAuthPlugin } from 'auth-analytic-vue'
import { fetchToken } from '@/plugins/authentication.plugin'
import VHeading from '@/components/functional/VHeading'

const pinia = createPinia()

loadFonts()
createApp(App)
  .component('v-heading', VHeading)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(
    createAuthPlugin({
      fetch: fetchToken
    })
  )
  .directive('field', fieldDirective)
  .mount('#app')
