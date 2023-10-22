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

<style lang="scss">
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

form {
  input[type="number"],
  input[type="password"],
  input[type="text"],
  textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: $color-white;
    border: 1px solid $color-very-light-grey;
    border-radius: 3px !important;
    box-shadow: inset 0 1px 2px $color-whisper;
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 4px;
    padding: 8px 12px;
    width: 100%;
    &[disabled] {
      color: $color-grey;
    }
    &.error{
      border: 1px solid $color-harley-davidson-orange !important;
      color: $color-harley-davidson-orange !important;
      font-weight: 500;
    }
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: $color-white;
    border: 1px solid $color-very-light-grey;
    border-radius: 0;
    font-family: $body-font-family;
    font-size: 14px;
    font-weight: 500;
    height: 38px;
    margin: 0 0 4px;
    padding: 8px 14px 8px 9px;
    width: 100%;
    &[disabled] {
      color: $color-grey;
    }
  }
  textarea {
    resize: vertical;
  }
  ::placeholder {
    color: $color-nobel;
  }
}
</style>
