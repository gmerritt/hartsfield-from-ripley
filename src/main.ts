import App from './App.vue'
import { registerUtils } from './utils'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'

import _ from 'lodash'
import axios from 'axios'


const app = createApp(App)

registerPlugins(app)
registerUtils(app)



// Globals
app.config.globalProperties.$_ = _
app.config.globalProperties.$isInIframe = !!window.parent.frames.length

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL

app.mount('#app')
