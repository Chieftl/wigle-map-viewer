<template lang="pug">
  .mapbox-wrapper
    mapbox-gl-vue(
        :accessToken="config.mapbox.accessToken"
        :mapOptions="config.mapbox.mapOptions"
        @map-moveend="mapMoved"
      )
</template>

<script>
  import MapboxGlVue from 'mapbox-gl-vue';
  import config from '@/config';

  export default {
    data() {
      return {
        config,
      }
    },
    methods: {
      mapMoved(map, e) {
        let bounds = map.getBounds();
        let boundCoords = [
          bounds._sw.lat,
          bounds._ne.lat,
          bounds._sw.lng,
          bounds._ne.lng,
        ];
        this.$store.commit('setBounds', boundCoords);
        console.log(boundCoords);
      }
    },
    components: {
      MapboxGlVue,
    },
  }
</script>

<style lang="scss">
  #map {
    height: 80vh;
  }
</style>
