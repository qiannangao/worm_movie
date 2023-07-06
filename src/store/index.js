import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 导入模块
import user from './user'
export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // 注册模块
    user 
  }
})
