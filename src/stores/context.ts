import _ from 'lodash'
import { nextTick } from 'vue'
import { putFocusNextTick } from '@/utils'
import { defineStore } from 'pinia'

const $_getDefaultApplicationState = () => ({
  message: undefined,
  stacktrace: undefined,
  status: 200
})

export const useContextStore = defineStore('context', {
  state: () => ({
    applicationState: $_getDefaultApplicationState(),
    loading: false,
    currentUser: undefined,
    config: undefined
  }),
  actions: {
    loadingComplete(label?: string, focusTarget?: string) {
      document.title = `${label || 'UC Berkeley'} | bCourses Support`
      this.loading = false
      if (label) {
        // TODO: use '@vue-a11y/announcer' instead
        // state.screenReaderAlert = `${label} page is ready`
      }
      if (focusTarget) {
        putFocusNextTick(focusTarget)
      } else {
        const callable = () => {
          const elements = document.getElementsByTagName('h1')
          if (elements.length > 0) {
            elements[0].setAttribute('tabindex', '-1')
            elements[0].focus()
          }
          return elements.length > 0
        }
        nextTick(() => {
          let counter = 0
          const job: any = setInterval(() => (callable() || ++counter > 3) && clearInterval(job), 500)
        }).then(_.noop)
      }
    },
    setConfig(config: any) {
      this.config = config
    },
    setApplicationState(status: number, message?: any, stacktrace?: any) {
      this.applicationState = {message, stacktrace, status}
    },
    setCurrentUser(user: any) {
      this.currentUser = user
    }
  }
})
