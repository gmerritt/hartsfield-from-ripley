<template>
  <div v-if="!currentUser" class="pt-2">
    <form @submit.prevent="casLogin">
      <button id="cas-log-in" class="btn btn-default btn-primary">Sign In via CAS</button>
    </form>
  </div>

<!-- Gregquestion --><!--

When I load http://localhost:8080/ in my browser, I get the "Sign in via CAS"
button as expected, and it takes me through the CalNet test login.
However, if I immediately come back to this front page after login,
it appears that '<div v-if="!currentUser"...' is still the state of things,
so I still just get the "Sign in to CAS" button.

I tried flipping the v-if logic to just show me the "Hello, UID..." message,
but, instead, the page just renders blank.

Still with this reversed logic, I removed  "{{ currentUser.uid }}"
from the "Hello, UID" line; then, the page renders as expected,
with the flipped logic causing "Hello, UID" to appear just fine
since it "lost" the "poison" of "{{ currentUser.uid }}".

I followed @/mixins/Context to /src/mixins/Context.vue,
which imports useContextStore from /src/stores/context.ts.
I seemed to find some things missing there, which I tried to fix
as described in the "Gregquestion"-flagged comment in context.ts,
but this Nostromo.vue rendering still seems to be "poisoned" by
apparently not having access to data's currentUser.

--><!-- Gregquestion -->

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
