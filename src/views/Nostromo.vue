<template>
  <div>
    <b-button
      id="sign-in-button"
      class="cc-button-blue text-nowrap"
      size="lg"
      variant="primary"
      @click="toCasLogin"
    >
      Sign In
    </b-button>
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
    }
  }
}
</script>
