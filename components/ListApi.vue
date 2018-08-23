<template lang="pug">
  div
    h1 Список
    wigle-filters(@filters-change="query = $event")

    div.query
      | {{ query }}
    div
      button(@click="sendQuery" :disabled="query == ''") Send Query
    div.response {{ results }}
</template>

<script>
  import WigleFilters from '~/components/WigleFilters.vue'
  import wigleToGeojson from 'wigle2geojson'

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
        fetch('https://api.wigle.net/api/v2/network/search?' + this.query, {
          headers: {
            'Authorization': 'Basic QUlEM2FhMmYyNjcwZDA1MmEzOTA0MjlhYzgxY2M3ZDYwMzE6ZGFiODE1MzZkZjI3ZDBjM2YxYzU1ZTBjNTcwNjZlNmI=',
          }
        })
          .then(function(response) {
            console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
            console.log(response.status); // 200
            return response.json();
           })
          .then(function(res) {
            console.log(res);
            self.results = JSON.stringify(wigleToGeojson(res, ['country', 'city', 'comment']), null, 2);
          })
          .catch( alert );
      }
    },
    components: {
      WigleFilters,
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

  .response {
    display: block;
    font-family: monospace;
    white-space: pre;
    text-align: left;
    width: fit-content;
    margin: auto;
  }
</style>
