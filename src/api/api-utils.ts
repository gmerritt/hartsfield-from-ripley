import _ from 'lodash'
import axios from 'axios'
import {useContextStore} from '@/stores/context'

export default {
  apiBaseUrl: () => import.meta.env.VITE_APP_API_BASE_URL,
  get: (path: string, redirectOnError?: boolean) => {

    // Gregquestion
    //
    // It seems to me that the .env and .env.development files are not being caught?
    // I tried getting some guidance from https://cli.vuejs.org/guide/mode-and-env.html
    // but I wasn't able to get it to work.
    //
    // I've resulted to hard-coding the URL for now, here below.
    //return axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`).then(

    return axios.get(`http://localhost:5000${path}`).then(
        data => data
    )
  },
  post: (path: string, data={}, redirectOnError?: boolean) => {
    return axios.post(`${import.meta.env.VITE_APP_API_BASE_URL}${path}`, data).then(
      data => data
    )
  },

}
