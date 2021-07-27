import Vue from 'vue'
import Vuex from 'vuex'
import coachesModule from "./modules/coaches/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    coaches:coachesModule
  }
})
