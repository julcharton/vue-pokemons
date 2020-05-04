import Vue from 'vue'
import Vuex from 'vuex'
import pokemons from './modules/pokemon'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemons
  }
})
