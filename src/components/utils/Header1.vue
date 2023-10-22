<template>
    <h1 id="page-title" tabindex="-1">
      <span v-if="text">{{ text }}</span>
      <span v-if="!text"><slot /></span>
    </h1>
  </template>
  
  <script>
  export default {
    name: 'Header1',
    props: {
      text: {
        default: undefined,
        required: false,
        type: String
      }
    }
  }
  </script>
  