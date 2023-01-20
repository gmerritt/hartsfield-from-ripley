<template>
  <div class="cc-page-splash">
    <b-row class="cc-container-main d-flex flex-column-reverse p-3 text-center">
      <b-col sm="12" md="6">
        <div class="pt-5">
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
        <div>
          <!--
            TODO
            <img alt="bCourses logo" class="float-left img-fluid" src="@/assets/images/bcourses_righthand.png">
          -->
        </div>
        <div class="pb-5">
          <h1>ETS Support Utilities</h1>
        </div>
      </b-col>
    </b-row>
    <!--
      TODO: <StandaloneFooter :include-build-summary="true" />
    -->
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
  },
  created() {
    this.$ready('Welcome. Please log in.')
  }
}
</script>

<style scoped>
button {
  height: 48px;
  width: 200px;
}
h1 {
  color: #025a86;
  font-size: 23px;
  font-weight: bold;
  margin: 0 0 10px;
}
</style>
