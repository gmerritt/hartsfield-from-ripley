import _ from 'lodash'
import router from './router'
import {App, nextTick} from 'vue'
import { useContextStore } from '@/stores/context'

const $_axiosErrorHandler = (error: any) => {
  const errorStatus = _.get(error, 'response.status')
  const currentUser = undefined  // TODO: The old way was Vue.prototype.$currentUser.
  if (_.get(currentUser, 'isLoggedIn')) {
    if (!errorStatus || errorStatus >= 400) {
      const message = _.get(error, 'response.data.error') || _.get(error, 'response.data.message') || error.message
      router.push({
        path: '/error',
        query: {
          m: message
        }
      })
    } else if (errorStatus === 404) {
      router.push({path: '/404'})
    }
  } else {
    router.push({
      path: '/login',
      query: {
        m: 'Your session has expired'
      }
    })
  }
}

export const putFocusNextTick = (id: string, cssSelector?: string) => {
  const callable = () => {
    let el = document.getElementById(id)
    el = el && cssSelector ? el.querySelector(cssSelector) : el
    el && el.focus()
    return !!el
  }
  nextTick(() => {
    let counter = 0
    const job:any = setInterval(() => (callable() || ++counter > 3) && clearInterval(job), 500)
  }).then(_.noop)
}

export function registerUtils(app: App) {
  const contextStore: any = useContextStore()
  app.config.globalProperties.$errorHandler = $_axiosErrorHandler
  app.config.globalProperties.$_ = _
  // app.config.globalProperties.$eventHub = mitt()  TODO: Use 'mitt' to emit and listen for events.
  app.config.globalProperties.$loading = (label: string) => contextStore.loadingStart(label)
  app.config.globalProperties.$ready = (label: string, focusTarget: string) => contextStore.loadingComplete({
    label,
    focusTarget
  })
  app.config.globalProperties.$putFocusNextTick = putFocusNextTick
}
