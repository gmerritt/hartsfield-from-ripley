import axios from 'axios'
import {get} from 'lodash'
import {useContextStore} from '@/stores/context'


const $_errorHandler = (error: any, redirectOnError?: boolean) => {
  if (axios.isCancel(error)) {
    return Promise.reject('Operation Canceled')
  } else {
    const status = get(error, 'response.status')
    const message = get(error, 'response.data.error') || get(error, 'response.data.message') || get(error, 'message') || 'Unauthorized'
    console.log(`\n${error}\n${message}\n`)
    if (redirectOnError) {
      useContextStore().setApplicationState(status, message)
    }
    return Promise.reject(message)
  }
}

export default {
  apiBaseUrl: () => import.meta.env.VITE_APP_API_BASE_URL,
  get: (path: string) => {
    return axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`).then(
      response => response.data
    )
  },
  post: (path: string, data={}, redirectOnError?: boolean) => {
    return axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`, data).then(
      response => response.data,
      error => $_errorHandler(error, redirectOnError)
    )
  },

}
