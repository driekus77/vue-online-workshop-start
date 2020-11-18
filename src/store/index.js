import Vue from "vue";
import Vuex from "vuex";

import appointment from "./modules/appointment";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appointment
  },
  strict: true
});
