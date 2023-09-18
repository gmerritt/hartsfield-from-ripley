<template>
  <div>
    <VueAnnouncer class="sr-only" />
<!--     <div v-if="!isInIframe" class="cc-accessibility-links">
      <a
        id="skip-to-content-link"
        href="#cc-main-content"
        class="sr-only sr-only-focusable"
        tabindex="0"
        @click="skipTo('#cc-main-content')"
      >
        Skip to content
      </a>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'styles/colors';
</style>

<style scoped lang="scss">
.cc-accessibility-links {
  position: relative;
  z-index: 1;

  a {
    background: $cc-color-white;
    display: block;
    font-weight: bold;
    padding: 8px;
    position: absolute;
    top: -999em;
    z-index: 1;
    &:focus, &:active {
      left: 50%;
      margin-left: -100px;
      text-align: center;
      top: 5px;
      width: 200px;
    }
  }
}
</style>
