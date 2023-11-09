import axios from 'axios'
import store from '@/store'
import utils from '@/api/api-utils'

export function getCasLoginURL() {
  return utils.get('/api/user/cas_login_url')
}

export function getCasLogoutURL() {
  return utils.get('/api/user/cas_logout_url')
}
