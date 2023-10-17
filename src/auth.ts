import _ from 'lodash'
import axios from 'axios'
import Vue from 'vue'

const goToLogin = (to: any, next: any) => {
  next({
    path: '/login',
    query: {
      error: to.query.error,
      redirect: to.fullPath
    }
  })
}

export default {
  initSession: () => {
    return new Promise<void>(resolve => {
      const apiBaseUrl = process.env.VITE_APP_API_BASE_URL
      axios.get(`${apiBaseUrl}/api/my/status`).then(response => {
        Vue.prototype.$currentUser = response.data
        Vue.prototype.$currentUser.isLoggedIn = _.get(response.data, 'isLoggedIn', false)

        axios.get(`${apiBaseUrl}/api/config`).then(response => {
          Vue.prototype.$config = response.data
          Vue.prototype.$config.apiBaseUrl = apiBaseUrl
          Vue.prototype.$config.isVueAppDebugMode = _.trim(process.env.VITE_APP_DEBUG).toLowerCase() === 'true'

          // Set Axios CSRF headers for non-GET requests
          axios.defaults.headers.post['X-CSRF-Token'] = response.data.csrfToken
          axios.defaults.headers.put['X-CSRF-Token'] = response.data.csrfToken
          axios.defaults.headers.delete['X-CSRF-Token'] = response.data.csrfToken
          resolve()
        })
      })
    })
  },
  requiresAuthenticated: (to: any, from: any, next: any) => {
    const currentUser = Vue.prototype.$currentUser
    if (currentUser.isLoggedIn) {
      next()
    } else {
      goToLogin(to, next)
    }
  }
}
