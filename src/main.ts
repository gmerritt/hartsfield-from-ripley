import App from './App.vue'
import { registerUtils } from './utils'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)
registerUtils(app)

app.mount('#app')
