import router from '@/router'
import type { App } from 'vue'
import vuetify from './vuetify'
import { loadFonts } from './webfontloader'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
}
