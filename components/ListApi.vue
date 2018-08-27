<template lang="pug">
  div.block-with-sidebar
    wigle-filters.wigle-filters(@filters-change="query = $event")

    div
      div.query
        | {{ query }}
      h1 Список
      div
        button(@click="sendQuery" :disabled="query == ''") Send Query
      div.response {{ results }}
      mapbox-map
</template>

<script>
  import WigleFilters from '~/components/WigleFilters.vue'
  import MapboxMap from '~/components/MapboxMap.vue'
  import wigleToGeojson from 'wigle2geojson'
  import * as wingleApi from '~/assets/js/api/main'

  export default {
    data() {
      return {
        query: '',
        results: '',
      }
    },
    methods: {
      sendQuery() {
        wingleApi.search(this.query)
          .then(res => {
            let geojson = wigleToGeojson(res, ['country', 'city', 'comment']);
            this.results = JSON.stringify(geojson, null, 2);
          })
      }
    },
    components: {
      WigleFilters,
      MapboxMap,
    }
  }
</script>

<style lang="scss" scoped>
  .block-with-sidebar {
    display: flex;
    min-width: 1200px;

    & > *:last-child {
      flex: 1 0;
      text-align: justify;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    & > li {
      min-width: 25%;
      padding: 10px;
    }
  }

  .response {
    display: block;
    font-family: monospace;
    white-space: pre;
    text-align: left;
    width: fit-content;
    margin: auto;
  }
</style>
