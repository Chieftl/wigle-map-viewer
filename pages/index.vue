<template lang="pug">
  section.container
    list
</template>

<script>
import List from '~/components/List.vue'

export default {
  components: {
    List,
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
