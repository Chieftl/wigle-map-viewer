<template lang="pug">
  section.container
    list-api
</template>

<script>
  import ListApi from '~/components/ListApi.vue'

  export default {
    components: {
      ListApi,
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
