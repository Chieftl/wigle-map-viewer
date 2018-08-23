<template lang="pug">
  div
    div.filters
      div
        label latrange1
        input(v-model="filters.latrange1")

      div
        label latrange2
        input(v-model="filters.latrange2")

      div
        label longrange1
        input(v-model="filters.longrange1")

      div
        label longrange2
        input(v-model="filters.longrange2")

      div
        label coords
        textarea(v-model="coords" rows="4")

    div.filters
      div
        label onlymine
        input(v-model="filters.onlymine" type="checkbox")

      div
        label encryption
        input(v-model="filters.encryption")

      div
        label lastupdt
        input(v-model="filters.lastupdt")

      div
        label ssidlike
        input(v-model="filters.ssidlike")
</template>

<script>
  export default {
    data() {
      return {
        filters: {
          latrange1: '48.8614907',
          latrange2: '48.9567578',
          longrange1: '24.6424252',
          longrange2: '24.7589659',
          onlymine: '',
          encryption: 'Unknown',
          lastupdt: '',
          ssidlike: '',
        },
      }
    },
    watch: {
      query() {
        this.$emit('filters-change', this.query)
      }
    },
    computed: {
      query() {
        return Object.entries(this.filters).filter(([, val]) => val).map(([key, val]) => key + '=' + val).join('&');
      },
      coords: {
        get() {
          return [this.filters.latrange1, this.filters.latrange2, this.filters.longrange1, this.filters.longrange2].join('\n')
        },
        set(newValue) {
          [this.filters.latrange1, this.filters.latrange2, this.filters.longrange1, this.filters.longrange2] = newValue.split('\n')
        },
      }
    },
    mounted() {
      this.$emit('filters-change', this.query)
    }
  }
</script>

<style lang="scss">
  .filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    & > * {
      max-width: 20%;
    }
  }
</style>
