import _ from 'lodash'
import axios from 'axios'
import {useContextStore} from '@/stores/context'

// Gregquestion
// I tried adding this file with a subset of the contents of the analgous file in the later version of Ripley,
// but it didn't seem to be sufficient/correct.

export default {
  apiBaseUrl: () => import.meta.env.VITE_APP_API_BASE_URL,
  get: (path: string, redirectOnError?: boolean) => {
    return axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`).then(
      data => data
    )
  },
  post: (path: string, data={}, redirectOnError?: boolean) => {
    return axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`, data).then(
      data => data
    )
  },

}
