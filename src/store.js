import Vue from 'vue'
import Vuex from 'vuex'
import loginModel from './stores/login';
import homeModel from './stores/home';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: loginModel,
    home: homeModel
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
