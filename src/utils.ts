import _ from 'lodash'
import router from './router'
import {App, nextTick} from 'vue'
import { useContextStore } from '@/stores/context'
import axios from 'axios'
import utils from '@/api/api-utils'

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

// Gregquestion 1-of-3 in this file:
// Should the application-specific fetchUrl() function be here in utils.ts? Or should it be in a
// separate file that's dedicated to application-specific functions?


// Gregquestion 2-of-3 in this file:
// In originally trying to get this all to work, I went back and forth between GET and POST for this.
// I had originally assumed to go with POST, but it was in the GET configuration when I happened to fix
// other related bits, and it all came together, so I did not revisit to change it back to POST.
// ** Is POST preferred here? **

export function fetchUrl(gs_source_url: string) {
  // Gregquestion 3-of-3 in this file:
  // The source starting-point version of Ripley did not seem to include the post (and related) functionality,
  // which appeared in later versions of Ripley in api-utils.ts (/src/api/api-utils.ts).
  // In later versions of Ripley, with the post support built-in, we'd do something like this:
  //return utils.post('/api/fetch_url_direct',{gs_source_url})


  // gs%3A%2F%2Fucb-datahub-archived-homedirs%2Fspring-2021%2Fdatahub.berkeley.edu%2Fpeterphu-2edo.tar.gz
  //const get_url = '/api/fetch_url_direct?gs_source_url=' + encodeURIComponent(gs_source_url)
  //const gs_source_url_local = '/api/fetch_url_direct?gs_source_url=' + encodeURIComponent(gs_source_url)
  
  return utils.get('/api/fetch_url_direct?gs_source_url=' + encodeURIComponent(gs_source_url), true)


  // For now, we'll just return a placeholder URL string:
  //return "https://google.com/download.tgz"


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
  app.config.globalProperties.$ready = (label: string, focusTarget: string) => contextStore.loadingComplete(label, focusTarget)
  app.config.globalProperties.$putFocusNextTick = putFocusNextTick
}
