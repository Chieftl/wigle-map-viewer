<template lang="pug">
  div
    h1 Список WiFi
    ul
      li(v-for="point in list")
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
        list: convert(raw),
      }
    },
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
