// Styles
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import * as labs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'

// Vuetify
import { createVuetify } from 'vuetify'
import { themes } from '@/modules/vuetify/Themes'

const configuration = {
  theme: {
    ...themes
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  components: {
    ...labs
  },
  directives
}

export default createVuetify(configuration)
