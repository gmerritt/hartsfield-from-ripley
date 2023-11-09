import App from './App.vue'
import axios from 'axios'
import router from '@/router'
import { registerUtils } from './utils'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import {useContextStore} from '@/stores/context'

import _ from 'lodash'
import axios from 'axios'


const app = createApp(App)

registerPlugins(app)
registerUtils(app)


axios.defaults.withCredentials = true

// Globals
app.config.globalProperties.$_ = _
app.config.globalProperties.$isInIframe = !!window.parent.frames.length

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL

axios.get(`${apiBaseUrl}/api/user/profile`).then(response => {
  const data = response.data
  useContextStore().setCurrentUser(data)

  axios.get(`${apiBaseUrl}/api/config`).then(response => {
    const data = response.data
    useContextStore().setConfig({
      ...data,
      apiBaseUrl,
      isVueAppDebugMode: _.trim(import.meta.env.VITE_APP_DEBUG).toLowerCase() === 'true'
    })
    app.use(router).config.errorHandler = function (error, vm, info) {
      const message = _.get(error, 'message') || info
      const stacktrace = _.get(error, 'stack', null)
      console.log(`\n${message}\n${stacktrace}\n`)
      useContextStore().setApplicationState(500, message, stacktrace)
    }
    app.mount('#app')
  })
})

