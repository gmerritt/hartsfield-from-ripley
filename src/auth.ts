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
