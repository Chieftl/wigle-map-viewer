<template lang="pug">
  div
    h1 Список WiFi
    div.filters
      input(v-model="name")
    ul
      li(v-for="point in filteredList")
        h3 {{ point.name }}
        div {{ point.place }}
        div
          a(:href="`https://www.openstreetmap.org/?mlat=${point.coords[0]}&mlon=${point.coords[1]}#map=19/${point.coords[0]}/${point.coords[1]}`" target="_blank")
            | {{ point.coords }}
</template>

<script>
  import {listData as raw} from '~/assets/js/list_data.js'
  import convert from '~/assets/js/convert.js'

  export default {
    data() {
      return {
        name: '',
        list: convert(raw),
      }
    },
    computed: {
      filteredList() {
        return this.list.filter(item => item.name.includes(this.name))
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
    & > li {
      min-width: 25%;
      padding: 10px;
    }
  }

</style>
