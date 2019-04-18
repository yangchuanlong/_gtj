import Vue from 'vue'
import Vuex from 'vuex'
import loginModel from './stores/login'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: loginModel
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
