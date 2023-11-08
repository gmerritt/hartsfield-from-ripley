<template>
  <div>
    <b-button
      id="sign-in-button"
      class="cc-button-blue text-nowrap"
      size="lg"
      variant="primary"
      @click="toCasLogin"
    >
      Sign In - inherited from *old* ripley: doesn't present as clickable?
    </b-button>
  </div>
  <div v-if="$currentUser">
      <b-link class="align-items-center d-flex greeting" @click="logOut">
        <span class="sr-only">Log Out</span>
        <b-icon font-scale="2" icon="box-arrow-right"></b-icon>
      </b-link>
  </div>
  <div v-if="!$currentUser" class="pt-2">
    <form @submit.prevent="toCasLogin">
      <button id="cas-log-in" class="btn btn-default btn-primary">Sign In - nessie style button to ripley method: presents as clickable, but no response</button>
    </form>
  </div>
  <div v-if="!$currentUser" class="pt-2">
    <form @submit.prevent="casLogin">
      <button id="cas-log-in" class="btn btn-default btn-primary">Sign In - nessie style button to nessie method: Application Not Authorized to Use CAS</button>
    </form>
  </div>
  <div v-if="!$currentUser" class="pt-2">
    <form @submit.prevent="toFetchUrl">
      <button id="skip-to-fetchurl" class="btn btn-default btn-primary">Go to fetchurl page in Nessie-button style: works</button>
    </form>
  </div>
</template>

<script>
import Context from '@/mixins/Context'

export default {
  name: 'Login',
  mixins: [Context],
  methods: {
    toCasLogin() {
      window.location.href = `${this.$config.apiBaseUrl}/auth/cas`
    },
    toFetchUrl() {
      window.location.href = `http://localhost:8080/fetchurl`
    },
    casLogin() {
      window.location.href = 'https://auth-test.berkeley.edu/cas/'
//      getCasLoginURL().then(data => window.location = data.casLoginURL)
    },
    logOut() {
      getCasLogoutURL().then(data => window.location.href = data.casLogoutURL)
    }
  }
}
</script>
