<template>
  <div v-if="!currentUser" class="pt-2">
    <form @submit.prevent="casLogin">
      <button id="cas-log-in" class="btn btn-default btn-primary">Sign In via CAS</button>
    </form>
  </div>
  <div v-if="currentUser" class="pt-2">
    Hello, UID {{ currentUser.uid }}!

    <button class="align-items-center d-flex greeting" @click="logOut">
      Log Out
      <b-icon font-scale="2" icon="box-arrow-right"></b-icon>
    </button>

    <form @submit.prevent="toFetchUrl">
      <button id="skip-to-fetchurl" class="btn btn-default btn-primary">Go to fetchurl page</button>
    </form>
  </div>
</template>

<script>
import Context from '@/mixins/Context'
import {getCasLoginURL, getCasLogoutURL} from '@/api/user'

export default {
  name: 'Login',
  mixins: [Context],
  methods: {
    toFetchUrl() {
      window.location.href = `http://localhost:8080/fetchurl`
    },
    casLogin() {
      getCasLoginURL().then(data => window.location = data.casLoginURL)
    },
    logOut() {
      getCasLogoutURL().then(data => window.location.href = data.casLogoutURL)
    }
  }
}
</script>
