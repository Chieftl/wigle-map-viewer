import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    bounds: [],
  },
  getters: {
    getBounds: state => state.bounds,
  },
  mutations: {
    setBounds(state, payload) {
      state.bounds = payload;
    }
  }
})
