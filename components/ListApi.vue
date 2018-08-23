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
</template>

<script>
  import WigleFilters from '~/components/WigleFilters.vue'
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
        let self = this;
        wingleApi.search(this.query)
          .then(function(res) {
            let geojson = wigleToGeojson(res, ['country', 'city', 'comment']);
            self.results = JSON.stringify(geojson, null, 2);
          })
      }
    },
    components: {
      WigleFilters,
    }
  }
</script>

<style lang="scss" scoped>
  .block-with-sidebar {
    display: flex;
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
